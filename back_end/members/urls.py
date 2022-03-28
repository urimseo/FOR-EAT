from xml.etree.ElementInclude import include
from django.contrib import admin

from django.urls import path
from members.views import kakao_get_user_info, check_google_user
from . import views
# from members.views import kakao_get_login


urlpatterns = [ 
    # path('kakao/', kakao_get_login ),
    path('kakao/login', kakao_get_user_info ),
    path('google/login', check_google_user),
    path('<int:pk>', views.MemberInfo.as_view()),
    path('<int:pk>/survey', views.MemberSurveyProfile.as_view()),
    path('<int:pk>/mypage', views.MemberProfilePage.as_view()),
    path('<int:pk>/mypage/review', views.MemberReviewList.as_view()),
]
