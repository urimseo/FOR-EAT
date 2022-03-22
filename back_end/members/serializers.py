from attr import field
from rest_framework import serializers
from django.contrib.auth import get_user_model
from recipes.models import Allergy, Ingredient
from .models import LikedIngredient, Member, MemberSurvey

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


class MemberSurveySerializer(serializers.ModelSerializer):

    class MemberSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Member
            fields = ('member_seq',)
    member_seq = MemberSerializer(read_only=True)


    class IngredientSerializer(serializers.ModelSerializer):    
        
        class Meta:
            model = Ingredient
            fields = ('ingredient_seq',)
    liked_ingredients = IngredientSerializer(many=True, read_only=True)

    class AllergySerializer(serializers.ModelSerializer):

        class Meta:
            model = Allergy
            fields = ('allergy_seq',)
    allergy = AllergySerializer(many=True, read_only=True)

    class Meta:
        model = MemberSurvey
        fields = '__all__'

