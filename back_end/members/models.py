import email
from django.conf import settings
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth.hashers import make_password
from recipes.models import Recipe, Ingredient, Allergy
# from recipes.models import Allergy
from foreat import settings

# Create your models here.
class MemberManager(BaseUserManager):
    def create_user(self, nickname, email=None, password=None, profile_image_url=None, kakao_id=None, google_id=None):
        # if not email:
        #     raise ValueError('Users must have an email address')

        user = self.model(
            nickname = nickname,
            profile_image_url = profile_image_url,
            email = email,
            kakao_id = kakao_id,
            google_id = google_id,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nickname, password):
        user = self.create_user(
            nickname = nickname,
            password = password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class Member(AbstractBaseUser):
    ## uuid 설정하기 
    member_seq = models.AutoField(primary_key=True, unique=True)
    nickname=models.CharField(max_length=50)
    # password = models.CharField(max_length=100, null=True)
    profile_image_url = models.CharField(max_length=255, null=True, blank=True)
    
    # member Id
    kakao_id = models.CharField(max_length=255,null=True, blank=True)
    google_id = models.CharField(max_length=255,null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    liked_recipes = models.ManyToManyField(Recipe, related_name='members', through='LikedRecipe')
    

    objects = MemberManager()

    USERNAME_FIELD = 'email'
    # createsuperuser를 통해 user생성시 요청하는 값
    REQUIRED_FIELDS = ['password',]


    # 권한 있음을 알림, Object를 반환하는 경우 해당 Object로 사용권한을 확인하는 절차가 필요
    def has_perm(self, perm, obj=None):
        return True

    # 주어진 앱의 모델에 접근 가능하도록 한다
    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

    class Meta:
        db_table = 'tb_member' 


class LikedRecipe(models.Model):
    member_seq = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    recipe_seq = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_liked_recipe'


class MemberSurvey(models.Model):
    member_seq = models.OneToOneField(Member, on_delete=models.CASCADE, primary_key=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.BooleanField(null=True, blank=True) # True: male, False=female

    # nutrition - 상/중/하
    carbohydrate = models.IntegerField(null=True, blank=True)
    protein = models.IntegerField(null=True, blank=True)
    fat = models.IntegerField(null=True, blank=True)
    
    # 식이제한 - True, False
    cholesterol = models.BooleanField(null=True, blank=True)
    sodium = models.BooleanField(null=True, blank=True)
    suger = models.BooleanField(null=True, blank=True)
    
    # goal
    beginner = models.BooleanField(null=True, blank=True)
    recipe_challenger = models.BooleanField(null=True, blank=True)
    timesaver = models.BooleanField(null=True, blank=True)
    healthy_diet = models.BooleanField(null=True, blank=True)
    lose_weight = models.BooleanField(null=True, blank=True)
    
    # ingredient
    ingredient_keywords = models.CharField(max_length=255, null=True, blank=True)
    liked_ingredients = models.ManyToManyField(Ingredient, related_name='members', through='LikedIngredient')

    # allergy
    allergy = models.ManyToManyField(Allergy, related_name='members', through="MemberAllergy")

    class Meta:
        db_table = 'tb_member_survey'

class LikedIngredient(models.Model):
    member_seq = models.ForeignKey(MemberSurvey, on_delete=models.CASCADE)
    ingredient_seq = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_liked_ingredient'

class MemberAllergy(models.Model):
    member_seq = models.ForeignKey(MemberSurvey, on_delete=models.CASCADE)
    allergy_seq = models.ForeignKey(Allergy, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_member_allergy'