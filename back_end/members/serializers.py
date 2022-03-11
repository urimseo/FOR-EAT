from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Member
class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'kakao_id')