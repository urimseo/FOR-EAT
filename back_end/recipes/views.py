from django.http import Http404
from django.shortcuts import render
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination

from recipes.models import Recipe, Ingredient
from recipes.serializers import RecipeSerializer, RecipeListSerializer
import json

# Create your views here.

# class RecipeList(ListAPIView, LimitOffsetPagination):
#     def get_queryset(self):
#         word = self.request.GET['category']
#         if word:
#             object_list = Recipe.objects.filter(
#                 Q(ingredient_raw__icontains=word)
#                 # Q(ingredient_raw__icontains=word) |
#                 # Q(ingredient_raw__icontains=word)
#             )
#             return object_list


#         # word = self.request.GET['category']
#         # seq = Ingredient.objects.get(ingredient_name=word)

#         # if word:
#         #     object_list = Recipe.ingredients.filter(
#         #         ingredient_seq = seq
#         #     )
#         #     print(object_list)
#         #     return object_list

#     def get(self, request, format=None):
        
#         recipes = self.get_queryset()
#         results = self.paginate_queryset(recipes)
#         serializer = RecipeListSerializer(results, many = True)

#         return Response(serializer.data)


# class RecipeDetail(APIView):

#     def get_object(self, pk):
#         try:
#             return Recipe.objects.get(pk=pk)
#         except Recipe.DoesNotExist:
#             raise Http404

#     def get(self, request, pk):
#         recipe = self.get_object(pk)
#         serializer = RecipeSerializer(recipe)
#         response_data = serializer.data
#         response_data['ingredient_raw'] = json.loads(serializer.data['ingredient_raw'])
#         response_data['instructions'] = json.loads(serializer.data['instructions'])
#         return Response(response_data)