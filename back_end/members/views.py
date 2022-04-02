import json
import requests
from collections import Counter
from decouple import config
from datetime import datetime,timedelta
from django.views.decorators.csrf import csrf_exempt
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db.models import Avg, Func, Count, Q
from django.contrib.auth.models import update_last_login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from members.models import Member, Survey, LikedRecipe, Recommend
from members.utils import login_decorator
from members.serializers import KaKaoMemberSerializer, GoogleMemberSerializer, SurveySimpleSerializer, SurveySerializer, MemberInfoSerializer
from members.ingredients import get_ingredient_list
from members.token import generate_token, decode_token
from recipes.models import Allergy, Ingredient, Review, Recipe, Category
from recipes.serializers import RecipeListSerializer, ReviewListSerializer
from recipes.storages import FileUpload, s3_client

# 인가코드로 token 받기
@api_view(['GET', 'POST'])
@permission_classes([AllowAny, ])
def kakao_get_user_info(request):
    CODE = request.data['code']
    url = "https://kauth.kakao.com/oauth/token"
    res = {
        'grant_type': 'authorization_code',
        'client_id': config("KAKAO_CLIENT_ID"),
        'redirect_url': config("KAKAO_REDIRECT_URL"),
        'code': CODE
    }
    headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    response = requests.post(url, data=res, headers=headers)
    
    if response.status_code == 200:
        token_json = response.json()
        user_url = "https://kapi.kakao.com/v2/user/me"
        auth = "Bearer " + token_json['access_token']
        HEADER = {
            "Authorization": auth,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
        res = requests.get(user_url, headers=HEADER)
        data = json.loads(res.text)
        return check_kakao_user(data)
    else:
        data = {
            "msg": "카카오 서버 상 문제 발생.",
            "status": 400
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)

# db에 유저정보가 있는지 확인  
def check_kakao_user(request):
    if Member.objects.filter(kakao_id=request['id']).exists():
        return kakao_login(request)
    else:
        return kakao_signup(request)


def kakao_signup(request):
    try:
        data = {
            'email': 'ka_' + request['kakao_account']['email'],
            'kakao_id': request['id'],
            'nickname': request['properties']['nickname'],
            'profile_image_url': request['kakao_account']['profile']['profile_image_url'],
        }
        serializer = KaKaoMemberSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            member = serializer.save()
            member.save()
            create_recommend
            return kakao_login(request)
    except:
        data = {
            "msg": "카카오 데이터 형식 오류",
            "status": 400
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)        

@receiver(post_save, sender=Member)
def create_recommend(sender, instance, created, **kwargs):
    if created:
        Recommend.objects.create(member_seq=instance)

def kakao_login(request):
    member = Member.objects.get(kakao_id=request['id'])
    member_seq = member.member_seq
    kakao_id = member.kakao_id
    nickname = member.nickname
    profile_image_url = member.profile_image_url
    # check if there is user survey data
    try :
        isSurvey = Survey.objects.get(member_seq=member.member_seq)
        isSurvey = True
    except:
        isSurvey = False
    try:
        payload = {
            "subject": kakao_id,
            "member_seq": member_seq,
            "nickname": nickname,
        }
        access_token = generate_token(payload, "access")
        update_last_login(None, member)
        data = {
            "user": {
                "member_seq": member_seq,
                "nickname": nickname,
                "profile_image_url": profile_image_url,
                "isSurvey": isSurvey,
                "access_token": access_token,
            },
            "status": 200,
            "msg":'카카오 로그인 성공'                                                      

        }
        return Response(data=data, status=status.HTTP_200_OK)

    except Member.DoesNotExist:
        data = {
            "msg": "유저 정보가 올바르지 않습니다.",
            "status": 401
        }
        return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)

    except Exception as e:
        data = {
            "msg": "정상적인 접근이 아닙니다.",
            "status": 500
        }
        return Response(data=data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# google login
@api_view(['POST'])
@permission_classes([AllowAny, ])
@csrf_exempt
def check_google_user(request):
    if Member.objects.filter(google_id=request.data['data']['googleId']).exists():
        return google_login(request)
    else:
        return google_signup(request)


def google_signup(request):
    try:
        data = {
            'email': 'go_' + request.data['data']['email'],
            'google_id': request.data['data']['googleId'],
            'nickname': request.data['data']['name'],
            'profile_image_url': request.data['data']['imageUrl'],
        }
        serializer = GoogleMemberSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            member = serializer.save()
            member.save()
            create_recommend
            return google_login(request)
    except:
        data = {
            "msg": "구글 데이터 형식 오류",
            "status": 400
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)        


def google_login(request):
    token = request.data['data']['access_token']
    member = decode_token(token)
    update_last_login(None, member)
    # check if there is user survey data
    try :
        isSurvey = Survey.objects.get(member_seq=member.member_seq)
        isSurvey = True
    except:
        isSurvey = False
    try:
        data = {
            "user": {
                "member_seq": member.member_seq,
                "isSurvey": isSurvey,
            },
            "status": 200,
            "msg":'구글 로그인 성공'                                                      
        }
        return Response(data=data, status=status.HTTP_200_OK)
    except Member.DoesNotExist:
        data = {
            "msg": "유저 정보가 올바르지 않습니다.",
            "status": 401
        }
        return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        data = {
            "msg": "정상적인 접근이 아닙니다.",
            "status": 500
        }
        return Response(data=data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Member - (nickname, profile_image)
@permission_classes([])
class MemberInfo(APIView):

    @login_decorator
    def get(self, request, pk, format=None):
        if request.member.member_seq == pk:
            try :
                isSurvey = Survey.objects.get(member_seq=request.member.member_seq)
                isSurvey = True
            except:
                isSurvey = False
            serializer = MemberInfoSerializer(request.member)
            data = serializer.data
            data['isSurvey'] = isSurvey
            return Response(data=data, status=status.HTTP_200_OK) 
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)

    @login_decorator
    def patch(self, request, pk, format=None):
        if request.member.member_seq == pk:
            try:
                file = request.FILES['profile_image_url']
                image_url = FileUpload(s3_client).upload(file)
                request.data['profile_image_url'] = image_url
            except:
                pass
            serializer = MemberInfoSerializer(request.member, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)        


class MemberSurveyProfile(APIView):
    
    # get user survey
    @login_decorator
    def get(self, request, pk):
        if request.member.member_seq == pk:
            member_survey = Survey.objects.get(pk=pk)
            serializer = SurveySimpleSerializer(member_survey)
            data = serializer.data
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)  


    # crete member survey
    @login_decorator
    def post(self, request, pk):
        if request.member.member_seq == pk:
            member_survey = request.data['form']
            liked_ingredient = get_ingredient_list(member_survey['liked_ingredient'])
            serializer = SurveySerializer(data=member_survey)
            
            if member_survey['allergy'] is None:
                member_survey['allergy'] = []
                
            # Create a member survey from the above data
            if serializer.is_valid(raise_exception=True):
                serializer.save(member_seq=Member.objects.get(member_seq=pk),
                liked_ingredients=Ingredient.objects.filter(ingredient_seq__in=liked_ingredient),
                allergy=Allergy.objects.filter(allergy_seq__in=member_survey['allergy']))
                data =  {
                        "msg": "유저 설문 저장 성공",
                        "status": 201,
                }
                return Response(data=data, status=status.HTTP_201_CREATED)
            else:
                data = {
                        "msg" : "올바르지 않은 유저 설문 형식입니다.",
                        "status": 400,
                }
                return Response(data=data, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)  

    # update member suvey 
    @login_decorator
    def patch(self, request, pk):
        if request.member.member_seq == pk:
            member_survey = request.data
            # get ingredients str list
            liked_ingredient = []
            if 'liked_ingredient' in member_survey.keys():
                member_survey['ingredient_keywords'] = str(member_survey['liked_ingredient'])
                liked_ingredient = get_ingredient_list(member_survey['liked_ingredient'])

            member_survey_object = Survey.objects.get(member_seq=pk)
            serializer = SurveySerializer(member_survey_object, data=member_survey, partial=True)
            
            try: 
                if serializer.is_valid(raise_exception=True):
                    if 'liked_ingredient' in member_survey.keys():
                        serializer.save(liked_ingredients=Ingredient.objects.filter(ingredient_seq__in=liked_ingredient))
                        data = {
                            "msg": "유저 설문 수정 성공",
                            "status": 201,
                        }
                        return Response(data=data, status=status.HTTP_201_CREATED)
                    elif 'allergy' in member_survey.keys():
                        allergy_list = list(map(int, request.data['allergy'].split(',')))
                        serializer.save(allergy=Allergy.objects.filter(allergy_seq__in=allergy_list))
                        data = {
                            "msg": "유저 설문 수정 성공",
                            "status": 201,
                        }
                        return Response(data=data, status=status.HTTP_201_CREATED)
                    else:
                        serializer.save()
                        data = {
                            "msg": "유저 설문 수정 성공",
                            "status": 201,
                        }
                        return Response(data=data, status=status.HTTP_201_CREATED)
            except:
                    return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)  

class MemberProfilePage(APIView):
    
    @login_decorator
    def get(self, request, pk, format=None):
        if request.member.member_seq == pk:
            member_serializer = MemberInfoSerializer(request.member).data
            member_serializer['email'] = member_serializer['email'][3:]
            # get member_survey
            try:
                member_survey = Survey.objects.get(pk=pk)
                member_survey_serializer = SurveySimpleSerializer(member_survey)
                member_survey_serializer = member_survey_serializer.data
            except:
                member_survey_serializer = None
            # get_member_liked_recipe
            liked_recipe_serilizer_all = RecipeListSerializer(request.member.liked_recipes.all(), many=True)
            liked_recipe_serilizer = liked_recipe_serilizer_all.data[-3:]
            for recipe in liked_recipe_serilizer:
                recipe['images'] = json.loads(recipe['images'])[0]
            # get_member_review
            review = Review.objects.all().filter(member=request.member)
            review_serializer_all = ReviewListSerializer(review, many=True)
            data = {
                "member": member_serializer,
                "member_survey":member_survey_serializer,
                "liked_recipe": liked_recipe_serilizer,
                "review": review_serializer_all.data[-3:]
            }
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN) 



class MemberReviewList(APIView, LimitOffsetPagination):

    @login_decorator
    def get(self, request, pk, format=None):
        if request.member.member_seq == pk:
            reviews = Review.objects.filter(member=request.member).order_by('-id')
            results = self.paginate_queryset(reviews, request)
            review_serializer_all = ReviewListSerializer(results, many=True)
            data = {
                "review_count" : len(reviews),
                "review_list" : review_serializer_all.data
            }
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN) 

class MemberLikeRecipeList(APIView, LimitOffsetPagination):

    @login_decorator
    def get(self, request, pk, format=None):
        if request.member.member_seq == pk:
            likes = LikedRecipe.objects.filter(member_seq=pk)
            recipe_seq = likes.values('recipe_seq')
            likes_recipe = Recipe.objects.filter(recipe_seq__in=recipe_seq)
            results = self.paginate_queryset(likes_recipe, request)
            like_serializer_all = RecipeListSerializer(results, many=True)
            for recipe in like_serializer_all.data:
                recipe['images'] = json.loads(recipe['images'])[0]
            data = {
                "likes_count" : len(likes),
                "likes_list" : like_serializer_all.data
            }
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN) 

class WeeklyReport(APIView):

    class Round(Func):
            function='ROUND'
            template=('%(function)s(%(expressions)s,2)')

    @login_decorator
    def get(self, request, pk):
        # if True:
        if request.member.member_seq == pk:
            try: # get user survey
                survey = Survey.objects.get(pk=pk)
                user = {
                    'age': survey.age,
                    'gender': survey.gender
                }
            except:
                user = None 
            # get weekly review
            before_week = datetime.now() - timedelta(weeks=1)
            weekly_review = list(Review.objects.filter(member=pk, 
                create_date__range=[before_week, datetime.now()]).values_list('recipe', flat=True))
            print(weekly_review)
            # average nutrients in a week's recipe
            weekly_nutrition = Recipe.objects.filter(recipe_seq__in=weekly_review).aggregate(
                calories=self.Round(Avg('calories')),
                fat=self.Round(Avg('fat_content')),
                saturated_fat=self.Round(Avg('saturated_fat_content')),
                cholesterol=self.Round(Avg('cholesterol_content')),
                sodium=self.Round(Avg('sodium_content')),
                carbohydrate=self.Round(Avg('carbohydrate_content')),
                fiber=self.Round(Avg('fiber_content')),
                sugar=self.Round(Avg('sugar_content')),
                protein=self.Round(Avg('protein_content')),
                )
            
            # category of recipes eaten in a week
            category = list(Category.objects.filter(recipes__in=weekly_review).
                values_list('category_name', flat=True))
            category_cnt = Counter(category).most_common()
            
            # member filter age, gender , get liked recipes
            if user is None: # if user member survey doesn't exist
                weekly_recipe = list(Review.objects.filter(
                    create_date__range=[before_week, datetime.now()]).exclude(
                        recipe__in=weekly_review).values_list('recipe', flat=True))
                weekly_popular_recipe = Counter(weekly_recipe).most_common()

            else:
                # recipe filter age, gender , get liked recipes
                similar_member = Survey.objects.filter(
                    Q(age=survey.age) & 
                    Q(gender=survey.gender) &
                    ~Q(member_seq=pk)).values('member_seq')
                print(similar_member)
                # weekly review list
                weekly_recipe_review = list(Review.objects.filter(
                    member__in=similar_member,
                    create_date__range=[before_week, datetime.now()]).exclude(
                    recipe__in=weekly_review).values_list('recipe', flat=True))
                # weekly liked recipe list
                weekly_liked_recipe = list(LikedRecipe.objects.filter(
                    member_seq__in=similar_member,
                    create_date__range=[before_week, datetime.now()]).exclude(
                    recipe_seq__in=weekly_review).values_list('recipe_seq', flat=True))

                weekly_popular_recipe = Counter(weekly_recipe_review+weekly_liked_recipe).most_common()

            # print(len(weekly_popular_recipe))
            # if length of weekly_popular_recipe less then five,
            # add monthly popular list
            # most popular recipe list
            popular_recipe_list = [i[0] for i in weekly_popular_recipe]
            recipe_all = Recipe.objects.filter(recipe_seq__in=popular_recipe_list)
            recipe_serializer = RecipeListSerializer(recipe_all, many=True)
            for recipe in recipe_serializer.data:
                recipe['images'] = json.loads(recipe['images'])[0]
            # else:
            #     common_popular_recipe = Recipe.objects.filter(
            #         create_date__range=[before_week, datetime.now()]).annotate(
            #         average_rating=Avg('review__ratings'), 
            #         review_cnt=Count('review')).order_by('-average_rating', '-review_cnt')
                
            #     print(common_popular_recipe)
            data = {
                'user': user,
                'nutrient' : weekly_nutrition,
                'category' : category_cnt,
                'popular_recipe': recipe_serializer.data
            }
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg": "유저와 토큰이 일치하지 않습니다.",
                "status": 403,
            }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN) 
