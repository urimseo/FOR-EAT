from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.RecipeList.as_view()),
    path('<int:pk>', views.RecipeDetail.as_view()),
    path('<int:pk>/reviews', views.ReviewList.as_view()),
    path('reviews/<int:id>', views.ReviewDetail.as_view()),
    path('<int:pk>/likes', views.RecipeLike.as_view()),
    path('search', views.Search.as_view()),
    path('ingredient_choices', views.IngredientChoice.as_view()),
    path('browse', views.BrowseRecipeList.as_view()),
    path('recommends', views.RecommendRecipeList.as_view()),
]