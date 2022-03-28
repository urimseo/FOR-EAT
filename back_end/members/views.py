from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.pagination import LimitOffsetPagination
import json
import requests
from decouple import config
from members.models import LikedIngredient, Member, MemberSurvey, LikedRecipe
from recipes.models import Allergy, Ingredient, Review, Recipe
from recipes.serializers import RecipeListSerializer, ReviewListSerializer
from .serializers import KaKaoMemberSerializer, GoogleMemberSerializer, MemberSurveySimpleSerializer, MemberSurveySerializer, MemberInfoSerializer
from .token import generate_token, decode_token
from .ingredients import get_ingredient_list
from recipes.storages import FileUpload, s3_client

# Django에서 인가코드 요청할 경우 사용 할 수 있다. (클라이언트에서 줘야함)
# @api_view(['GET'])
# @permission_classes([AllowAny, ])
# def kakao_get_login(request):
#     CLIENT_ID = "b4e70d34154f3107fd39de575768f82d"
#     REDIRECT_URL = "http://localhost:8000/members/kakao/login"
#     # CLIENT_ID = SOCIAL_OUTH_CONFIG['KAKAO_REST_API_KEY']
#     # REDIRECT_URL = SOCIAL_OUTH_CONFIG['KAKAO_REDIRECT_URI']
#     url = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={0}&redirect_uri={1}".format(
#         CLIENT_ID, REDIRECT_URL)
#     res = redirect(url)
#     return res

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
            return kakao_login(request)
    except:
        data = {
            "msg": "카카오 데이터 형식 오류",
            "status": 400
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)        


def kakao_login(request):
    member = Member.objects.get(kakao_id=request['id'])
    member_seq = member.member_seq
    kakao_id = member.kakao_id
    nickname = member.nickname
    profile_image_url = member.profile_image_url
    
    # check if there is user survey data
    try :
        isSurvey = MemberSurvey.objects.get(member_seq=member.member_seq)
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
    
    # check if there is user survey data
    try :
        isSurvey = MemberSurvey.objects.get(member_seq=member.member_seq)
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
   
    def get_member(self, pk, token):
        try:
            found_user = Member.objects.get(member_seq=pk)
            jwt_member = decode_token(token.strip('"'))
            if jwt_member == None or pk != jwt_member.member_seq: return None
            return found_user
        except Member.DoesNotExist:
            return None


    def get(self, request, pk, format=None):
        # get jwt token from header
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = self.get_member(pk, token)

        if member is None:
            data = {
                "msg": "존재하지 않는 유저입니다.",
                "status": 404,
            }
            return Response(data=data, status=status.HTTP_404_NOT_FOUND)
        try :
            isSurvey = MemberSurvey.objects.get(member_seq=member.member_seq)
            isSurvey = True
        except:
            isSurvey = False

        serializer = MemberInfoSerializer(member)
        data = serializer.data
        data['isSurvey'] = isSurvey
        return Response(data=data, status=status.HTTP_200_OK) 


    def patch(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = self.get_member(pk, token)
        # member = self.get_member(token)

        if member is None or pk != member.member_seq:
            data = {
                "msg": "유저 정보가 올바르지 않습니다.",
                "satus": 401
            }
            return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
        
        else:
            try:
                file = request.FILES['profile_image_url']
                image_url = FileUpload(s3_client).upload(file)
                request.data['profile_image_url'] = image_url
            except:
                pass
            
            serializer = MemberInfoSerializer(member, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@permission_classes([])
class MemberSurveyProfile(APIView):
    
    def get_member_survey(self, pk, token):
        try:
            get_member = Member.objects.get(pk=pk)
            jwt_member = decode_token(token.strip('"'))
            if jwt_member == None or pk!= jwt_member.member_seq: return None
            return get_member

        except:
            return None


    # get user survey
    def get(self, request, pk):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = self.get_member_survey(pk, token)
        member_survey = MemberSurvey.objects.get(pk=pk)

        if member is None:
            data = {
                "msg": "유저 정보가 올바르지 않습니다.",
                "satus": 401
            }
            return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
        else:
            serializer = MemberSurveySimpleSerializer(member_survey)
            data = serializer.data
            return Response(data=data,status=status.HTTP_200_OK)
        


    # crete member survey
    def post(self, request, pk):
        member_survey = request.data
        member_survey['ingredient_keywords'] = str(member_survey['liked_ingredient'])
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = self.get_member_survey(pk, token)

        if member is None:
            data = {
                "msg": "유저 정보가 올바르지 않습니다.",
                "satus": 401
            }
            return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)


        else:
            # get ingredient seq 
            liked_ingredient = get_ingredient_list(member_survey['liked_ingredient'])
            serializer = MemberSurveySerializer(data=member_survey)

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

    # update member suvey 
    def patch(self, request, pk):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = self.get_member_survey(pk, token)
        member_survey = request.data

        if member is None:
            data = {
                    "msg": "유저 정보가 올바르지 않습니다.",
                    "satus": 401
            }
            return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
        else:
            # ingredient filter
            liked_ingredient = []
            if 'liked_ingredient' in member_survey.keys():
                member_survey['ingredient_keywords'] = str(member_survey['liked_ingredient'])
                liked_ingredient = get_ingredient_list(member_survey['liked_ingredient'])

            
            member_survey_object = MemberSurvey.objects.get(member_seq=pk)
            serializer = MemberSurveySerializer(member_survey_object, data=member_survey, partial=True)
            
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
                        serializer.save(allergy=Allergy.objects.filter(allergy_seq__in=member_survey['allergy']))
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


class MemberProfilePage(APIView):
    
    def get(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # check jwt token valid
        try:            
            get_member = Member.objects.get(pk=pk)
            jwt_member = decode_token(token.strip('"'))
            if jwt_member == None or pk!= jwt_member.member_seq: 
                member_valid = None
            member_valid = get_member
        except:
            member_valid = None
        member = Member.objects.get(pk=pk)
        if member_valid != None or member_valid == member:
            # get member 
            member_serializer = MemberInfoSerializer(member).data
            member_serializer['email'] = member_serializer['email'][3:]

            # get member_survey
            try:
                member_survey = MemberSurvey.objects.get(pk=pk)
                member_survey_serializer = MemberSurveySimpleSerializer(member_survey)
                member_survey_serializer = member_survey_serializer.data
            except:
                member_survey_serializer = None

            # get_member_liked_recipe
            liked_recipe_serilizer_all = RecipeListSerializer(member.liked_recipes.all(), many=True)
            liked_recipe_serilizer = liked_recipe_serilizer_all.data[-3:]
            for recipe in liked_recipe_serilizer:
                recipe['images'] = json.loads(recipe['images'])[0]

            # get_member_review
            review = Review.objects.all().filter(member=member)
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
                "msg" : "존재하지 않는 유저입니다.",
                "status": 404,
            }
            return Response(data=data, status=status.HTTP_404_NOT_FOUND)



class MemberReviewList(APIView, LimitOffsetPagination):

    def get(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # check jwt token valid
        try:
            get_member = Member.objects.get(pk=pk)
            jwt_member = decode_token(token.strip('"'))
            if jwt_member == None or pk!= jwt_member.member_seq: 
                member_valid = None
            member_valid = get_member
        except:
            member_valid = None
        member = Member.objects.get(pk=pk)

        if member_valid == member:
        # get_member_review
            reviews = Review.objects.filter(member=member).order_by('-id')
            results = self.paginate_queryset(reviews, request)
            review_serializer_all = ReviewListSerializer(results, many=True)
            data = {
                "review_count" : len(reviews),
                "review_list" : review_serializer_all.data
            }
            return Response(data=data,status=status.HTTP_200_OK)
        else:
            data = {
                "msg" : "존재하지 않는 유저입니다.",
                "status": 404,
            }
            return Response(data=data, status=status.HTTP_404_NOT_FOUND)

class MemberLikeRecipeList(APIView, LimitOffsetPagination):

    def get(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # check jwt token valid
        try:
            get_member = Member.objects.get(pk=pk)
            jwt_member = decode_token(token.strip('"'))
            if jwt_member == None or pk!= jwt_member.member_seq: 
                member_valid = None
            member_valid = get_member
        except:
            member_valid = None
        member = Member.objects.get(pk=pk)
        if member_valid == member:
            # get_member_likes_recipe
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
                "msg" : "존재하지 않는 유저입니다.",
                "status": 404,
            }
            return Response(data=data, status=status.HTTP_404_NOT_FOUND)

        