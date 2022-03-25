from attr import field, fields_dict
from rest_framework import serializers
from django.contrib.auth import get_user_model
from recipes.models import Allergy, Ingredient
from .models import LikedIngredient, Member, MemberSurvey

class KaKaoMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'kakao_id', 'email',)


class GoogleMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'google_id', 'email',)



class MemberInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('nickname', 'profile_image_url', 'email')


class MemberSurveySerializer(serializers.ModelSerializer):

    class Meta:
        model = MemberSurvey
        # fields = '__all__'
        exclude = ('member_seq',)
        depth = 1
    
    # member_seq = MemberSurvey(read_only=True)

class MemberSurveySimpleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = MemberSurvey
        exclude=('member_seq', 'liked_ingredients')
        depth = 1