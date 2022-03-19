from django.urls import path
from . import views
from recipes.views import RecipeList

urlpatterns = [ 
    path('', views.RecipeList.as_view()),
    # path('', recipeList),
    # path('<int:pk>', views.RecipeDetail.as_view()),
]