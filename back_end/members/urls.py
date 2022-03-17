from xml.etree.ElementInclude import include
from django.contrib import admin

from django.urls import path
from members.views import kakao_get_user_info, check_google_user
from members.views import kakao_get_login



urlpatterns = [ 
    path('kakao/', kakao_get_login ),
    path('kakao/login', kakao_get_user_info ),
    path('google/login', check_google_user),
]