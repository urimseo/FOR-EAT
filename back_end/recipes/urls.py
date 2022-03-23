from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.RecipeList.as_view()),
    path('<int:pk>', views.RecipeDetail.as_view()),
    path('<int:pk>/review/', views.Reviews.as_view()),
]