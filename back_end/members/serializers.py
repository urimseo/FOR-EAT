from attr import field
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Member

class KaKaoMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'kakao_id')


class GoogleMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'google_id')



class MemberProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url',)