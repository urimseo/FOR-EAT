from pyexpat import model
from .models import Recipe, Ingredient, Keyword, Allergy, Category
from rest_framework import serializers

class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'

class KeywordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Keyword
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):

    class KeywordSerializer(serializers.ModelSerializer):

        class Meta:
            model = Keyword
            fields = ('keyword_name',)

    class IngredientSerializer(serializers.ModelSerializer):

        class Meta:
            model = Ingredient
            fields = ('ingredient_name',)
    
    class CategorySerializer(serializers.ModelSerializer):

        class Meta:
            model = Category
            fields = ('category_name',)

    keywords = KeywordSerializer(many = True,)
    ingredients = IngredientSerializer(many = True)
    categories = CategorySerializer(many=True)

    class Meta:
        model = Recipe
        exclude = ('reviews',)


class RecipeListSerializer(serializers.ModelSerializer):
    # ReviewSerializer 이후에 추가
    # Review에서 ratings count 하기
    class Meta:
        model = Recipe
        # 리뷰 추가하면 rating field 추가
        fields = ('recipe_seq', 'name', 'calories', 'images',)

    # recipe_seq = models.AutoField(primary_key=True)
    # recipe_id = models.IntegerField()
    # name = models.CharField(max_length=255)
    # cook_time = models.IntegerField()
    # prep_time = models.IntegerField()
    # total_time = models.IntegerField()
    # ingredient_raw = models.TextField()
    # serving_size = models.CharField(max_length=255)
    # servings = models.FloatField()
    # calories = models.FloatField()
    # fat_content = models.FloatField()
    # saturated_fat_content = models.FloatField()
    # cholesterol_content = models.FloatField()
    # sodium_content = models.FloatField()
    # carbohydrate_content = models.FloatField()
    # fiber_content = models.FloatField()
    # sugar_content = models.FloatField()
    # protein_content = models.FloatField()
    # instructions = models.TextField()
    # images = models.TextField()
    # ingredients = models.ManyToManyField(Ingredient, related_name='recipes', through='RecipeIngredient')
    # keywords = models.ManyToManyField(Keyword, related_name='recipes', through='RecipeKeyword')
    # reviews = models.ManyToManyField(settings.AUTH_USER_MODEL, through='Review')