from xml.etree.ElementInclude import include
from django.contrib import admin

from django.urls import path
from members.views import get_user_info


urlpatterns = [ 
    # path('kakao/', kakao_get_login ),
    path('kakao/login', get_user_info ),
    # path('admin/', admin.site.urls),
]