from django.conf import settings
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth.hashers import make_password
from recipes.models import Recipe, Ingredient
from foreat import settings

# Create your models here.
class MemberManager(BaseUserManager):
    def create_user(self, nickname, email, profile_image_url, kakao_id, password=None):
        # if not email:
        #     raise ValueError('Users must have an email address')

        user = self.model(
            nickname = nickname,
            email=self.normalize_email(email),
            profile_image_url = profile_image_url,
            kakao_id = kakao_id,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nickname, email, password):
        user = self.create_user(
            email,
            password=password,
            nickname=nickname,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class Member(AbstractBaseUser):
    member_seq = models.IntegerField(primary_key=True)
    nickname=models.CharField(max_length=20, unique=True)
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )
    profile_image_url = models.CharField(max_length=255)
    kakao_id = models.IntegerField(null=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    liked_recipes = models.ManyToManyField(Recipe, related_name='members', through='LikedRecipe')
    disliked_ingredients = models.ManyToManyField(Ingredient, related_name='members', through='DislikedIngredient')

    objects = MemberManager()

    USERNAME_FIELD = 'nickname'
    # createsuperuser를 통해 user생성시 요청하는 값
    REQUIRED_FIELDS = ['email',]

    def __str__(self):
        return self.email

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


class DislikedIngredient(models.Model):
    member_seq = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ingredient_seq = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

    class Meta:
        db_table = 'tb_disliked_ingredient'