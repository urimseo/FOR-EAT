from itertools import count
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.db.models import Avg
from django.db.models import Q

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from recipes import serializers

from recipes.serializers import RecipeSerializer, RecipeListSerializer, ReviewListSerializer, ReviewSerializer, IngredientChoiceListSerializer
from recipes.storages import FileUpload, s3_client
from members.token import decode_token
from recipes.models import Keyword, Recipe, Category, RecipeKeyword, Review
from members.models import Member, LikedRecipe, Recommend
import json
import re

# Create your views here.

class RecipeList(ListAPIView, LimitOffsetPagination):
    def get_queryset(self):
        word = self.request.GET['category']
        if word in ['Europe', 'Asia', 'America', 'Africa', 'Oceania', 'Beef', 'Pork', 'Lamb', 'Poultry', 'Chicken', 'Seafood', 'Vegetable',
        'Bread', 'Rice', 'Pasta', 'Dessert',]:
            category = Category.objects.filter(category_name=word)
            object_list = Recipe.objects.filter(categories__in=category)
        elif word in ['One', 'Two', 'Four', 'Party']:
            if word == 'One':
                object_list = Recipe.objects.filter(servings=1)
            elif word == 'Two':
                object_list =Recipe.objects.filter(servings=2)
            elif word == 'Four':
                object_list =Recipe.objects.filter(servings=4)
            else:
                object_list =Recipe.objects.filter(servings__gt=4)
        elif word in ['30min', '60min', '120min', '180min', '24hours']:
            time = int(re.sub(r'[^0-9]', '', word))
            if time == 30:
                object_list = Recipe.objects.filter(total_time__lte=time)
            elif time == 60:
                object_list = Recipe.objects.filter(total_time__gt=30, total_time__lte=time)
            elif time == 120:
                object_list = Recipe.objects.filter(total_time__gt=60, total_time__lte=time)
            elif time == 180:
                object_list = Recipe.objects.filter(total_time__gt=120, total_time__lte=time)
            elif time == 24:
                time *= 60
                object_list = Recipe.objects.filter(total_time__gt=180, total_time__lte=time)
        
        return object_list

    def get(self, request, format=None):
        recipes = self.get_queryset()
        results = self.paginate_queryset(recipes)
        serializer = RecipeListSerializer(results, many = True)

        for i in serializer.data:
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['images'] = json.loads(i['images'])[0]
  
        return Response(serializer.data, status=status.HTTP_200_OK)


class RecipeDetail(APIView):

    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        recipe = self.get_object(pk)
        serializer = RecipeSerializer(recipe)
        response_data = serializer.data
        response_data.update(Recipe.objects.filter(recipe_seq=response_data['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))

        try:
            response_data['ingredient_raw'] = json.loads(serializer.data['ingredient_raw'])
        except:
            temp = serializer.data['ingredient_raw'].split('",')
            for i in range(len(temp)):
                temp[i] = temp[i][2:]
                if i == len(temp)-1:
                    temp[i] =temp[i][:-2]
            response_data['ingredient_raw'] = temp
                

        response_data['instructions'] = json.loads(serializer.data['instructions'])
        response_data['images'] = json.loads(response_data['images'])[0]
        response_data['liked'] = False

        try:
            token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
            member = decode_token(token.strip('"'))
            # member = Member.objects.get(member_seq=1)
        except:
            pass
        if member:
            if member.liked_recipes.filter(recipe_seq=response_data['recipe_seq']):
                response_data['liked'] = True

        ingredients_recommend_list = json.loads(serializer.data['ingredients_recommend'])
        nutrient_recommend_list = json.loads(serializer.data['nutrient_recommend'])
        
        ingredients_recommend_recipes = Recipe.objects.filter(recipe_seq__in=ingredients_recommend_list)
        nutrient_recommend_recipes = Recipe.objects.filter(recipe_seq__in=nutrient_recommend_list)

        ingredients_recommend_serializer = RecipeListSerializer(ingredients_recommend_recipes, many=True)
        nutrient_recommend_serializer = RecipeListSerializer(nutrient_recommend_recipes, many=True)

        for i in ingredients_recommend_serializer.data:
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['images'] = json.loads(i['images'])[0]
            
        for i in nutrient_recommend_serializer.data:
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['images'] = json.loads(i['images'])[0]

        response_data['ingredients_recommend'] = ingredients_recommend_serializer.data[-3:]
        response_data['nutrient_recommend'] = nutrient_recommend_serializer.data[:3]

        return Response(response_data)


class ReviewList(APIView, LimitOffsetPagination):
    def get_object(self, pk):
        try:
            print(Recipe.objects.get(recipe_seq=pk))
            return Review.objects.filter(recipe=Recipe.objects.get(recipe_seq=pk))
        except Review.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        reviews = self.get_object(pk)[::-1]
        count = len(reviews)
        results = self.paginate_queryset(reviews, request)
        serializer = ReviewListSerializer(results, many=True)

        response_data = dict()
        response_data.update({'data':serializer.data})
        response_data.update({'count':count})
        return Response(response_data, status=status.HTTP_200_OK)

    def post(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = decode_token(token.strip('"'))
        # member = Member.objects.get(member_seq=1)
        if Review.objects.filter(member=member, recipe=pk):
            data = {
                    "msg": "이미 리뷰를 작성한 회원입니다",
                    "status": 202
                }
            return Response(data=data, status=status.HTTP_202_ACCEPTED)

        try:
            file = request.FILES['image']
            image_url = FileUpload(s3_client).upload(file)
            request.data['image_url'] = image_url
        except:
            pass
        serializer = ReviewSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(member=Member.objects.get(member_seq=member.member_seq), recipe=Recipe.objects.get(recipe_seq=pk))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewDetail(APIView):
    def get_object(self, id):
        try:
            return Review.objects.get(id=id)
        except Review.DoesNotExist:
            raise Http404

    def delete(self, request, id, format=None):
        review = self.get_object(id)
        review_writer = Member.objects.get(member_seq=review.member.member_seq)

        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = decode_token(token.strip('"'))
        # member = Member.objects.get(member_seq=1)

        if review_writer == member:
            Review.objects.get(id=id).delete()
            data = {
                    "msg": "리뷰를 삭제했습니다",
                    "status": 200
                }
            return Response(data=data, status=status.HTTP_200_OK)
        else:
            data = {
                    "msg": "리뷰를 작성한 유저가 아닙니다",
                    "status": 403
                }
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)
    
    def put(self, request, id, format=None):
        review = self.get_object(id)
        review_writer = Member.objects.get(member_seq=review.member.member_seq)

        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = decode_token(token.strip('"'))
        # member = Member.objects.get(member_seq=1)

        try:
            file = request.FILES['image']
            image_url = FileUpload(s3_client).upload(file)
            request.data['image_url'] = image_url
        except:
            pass

        serializer = ReviewSerializer(review, data=request.data)
        if review_writer == member:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            data = {
                    "msg": "리뷰를 작성한 유저가 아닙니다",
                    "status": 403
                }
            return Response(data= data, status=status.HTTP_403_FORBIDDEN)

class RecipeLike(APIView):
    def get(self, request, pk):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = decode_token(token.strip('"'))
        # member = Member.objects.get(member_seq=1)
        recipe = get_object_or_404(Recipe, pk=pk)

        if recipe.members.filter(member_seq=member.member_seq).exists():
            recipe.members.remove(member)
            data = {
                    "msg": "찜하기 취소",
                    "status": 202
                }
            return Response(data= data, status=status.HTTP_202_ACCEPTED)
        else:
            recipe.members.add(member)
            data = {
                "data": {
                    "msg": "찜하기 성공",
                    "status": 201
                }
            }
            return Response(data= data, status=status.HTTP_201_CREATED)

class Search(APIView, LimitOffsetPagination):
    def get(self, request, format=None):
        q_word = self.request.GET.get('word')
        print(q_word)
        if q_word:
            object_list = Recipe.objects.filter(
                Q(name__icontains=q_word) |
                Q(ingredient_raw__icontains=q_word)
            )
            try:
                q_seq = Keyword.objects.get(keyword_name=q_word)
                if q_seq:
                    if object_list:
                        object_list.union(Recipe.objects.filter(keywords__in=RecipeKeyword.objects.filter(keyword_seq=q_seq).values('keyword_seq')))
                    else:
                        object_list = Recipe.objects.filter(keywords__in=RecipeKeyword.objects.filter(keyword_seq=q_seq).values('keyword_seq'))
            except:
                pass
        else:
            object_list = Recipe.objects.all()
        count = len(object_list)
        results = self.paginate_queryset(object_list, request)
        serializer = RecipeListSerializer(results, many=True)
        for i in serializer.data:
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['images'] = json.loads(i['images'])[0]

        response_data = dict()
        response_data.update({'data':serializer.data})
        response_data.update({'count':count})
        return Response(response_data)
    
with open('recipes/references/recipe_ingredient_choice.json') as ric:
    choice = json.load(ric)

class IngredientChoice(ListAPIView, LimitOffsetPagination):

    def post(self, request, format=None):
        check_list = request.data
        temp = Recipe.objects.all()
        for i in check_list:
            try:
                # print(choice[i['title']])
                temp = temp & Recipe.objects.filter(recipe_id__in=choice[i['title']])
            except:
                data = {
                    "msg": "존재하지 않는 분류입니다",
                    "status": 404
                }
                return Response(data=data, status=status.HTTP_404_NOT_FOUND) 
        count = len(temp)
        results = self.paginate_queryset(temp)
        serializer = IngredientChoiceListSerializer(results, many=True)

        for i in serializer.data:
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['images'] = json.loads(i['images'])[0]

        response_data = dict()
        response_data.update({'data':serializer.data})
        response_data.update({'count':count})
        return Response(response_data)


class BrowseRecipeList(ListAPIView, LimitOffsetPagination):
    def get_queryset(self):
        word = self.request.GET['keyword']
        category = Keyword.objects.filter(keyword_name=word)
        object_list = Recipe.objects.filter(keywords__in=category)
        return object_list

    def get(self, request, format=None):
        recipes = self.get_queryset()
        results = self.paginate_queryset(recipes)
        serializer = RecipeListSerializer(results, many = True)

        for i in serializer.data:
            i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
            i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
            i['images'] = json.loads(i['images'])[0]
  
        return Response(serializer.data, status=status.HTTP_200_OK)

class RecommendRecipeList(ListAPIView, LimitOffsetPagination):

    def get(self, request, format=None):
        word = self.request.GET['type']
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member = decode_token(token.strip('"'))
        # member = Member.objects.get(member_seq=1)
        
        if word == 'content':
            recommends = Recommend.objects.filter(member_seq=member.member_seq).values('content_base')
            recommend_list = json.loads(recommends[0]['content_base'])
            print(recommend_list)
            recipes = Recipe.objects.filter(recipe_seq__in=recommend_list)
            print(recipes)
            results = self.paginate_queryset(recipes)
            serializer = RecipeListSerializer(results, many = True)

            for i in serializer.data:

                i.update(Recipe.objects.filter(recipe_seq=i['recipe_seq']).aggregate(average_rating=Avg('review__ratings')))
                i['liked_count'] = LikedRecipe.objects.filter(recipe_seq=i['recipe_seq']).count()
                i['images'] = json.loads(i['images'])[0]

            return Response(serializer.data, status=status.HTTP_200_OK)