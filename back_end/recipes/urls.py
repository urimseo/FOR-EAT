from django.urls import path
from . import views
from recipes.views import RecipeList,RecipeDetail

urlpatterns = [ 
    path('', views.RecipeList.as_view()),
    path('<int:pk>', views.RecipeDetail.as_view()),
]