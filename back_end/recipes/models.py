from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Ingredient(models.Model):
    ingredient_seq = models.IntegerField(primary_key=True)
    ingredient_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.ingredient_name}'

    class Meta:
        db_table = 'tb_ingredient'

class Keyword(models.Model):
    keyword_seq = models.IntegerField(primary_key=True)
    keyword_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.keyword_name}'
    
    class Meta:
        db_table = 'tb_keyword'

class Category(models.Model):
    category_seq = models.IntegerField(primary_key=True)
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.category_name}'

    class Meta:
        db_table = 'tb_category'

class Allergy(models.Model):
    allergy_seq = models.IntegerField(primary_key=True)
    allergy_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.allergy_name}'

    class Meta:
        db_table = 'tb_allergy'

class Recipe(models.Model):
    recipe_seq = models.AutoField(primary_key=True)
    recipe_id = models.IntegerField()
    name = models.CharField(max_length=255)
    cook_time = models.IntegerField()
    prep_time = models.IntegerField()
    total_time = models.IntegerField()
    ingredient_raw = models.TextField()
    serving_size = models.CharField(max_length=255)
    servings = models.FloatField()
    calories = models.FloatField()
    fat_content = models.FloatField()
    saturated_fat_content = models.FloatField()
    cholesterol_content = models.FloatField()
    sodium_content = models.FloatField()
    carbohydrate_content = models.FloatField()
    fiber_content = models.FloatField()
    sugar_content = models.FloatField()
    protein_content = models.FloatField()
    instructions = models.TextField()
    images = models.TextField()
    
    # 추천항목들
    ingredients_recommend = models.TextField()
    nutrient_recommend = models.TextField()

    ingredients = models.ManyToManyField(Ingredient, related_name='recipes', through='RecipeIngredient')
    keywords = models.ManyToManyField(Keyword, related_name='recipes', through='RecipeKeyword')
    categories = models.ManyToManyField(Category, related_name='recipes', through='RecipeCategory')
    allergies = models.ManyToManyField(Allergy, related_name='recipes', through='RecipeAllergy')


    def __str__(self):
        return f'{self.pk}: {self.name}'

    class Meta:
        db_table = 'tb_recipe'


class Review(models.Model):
    member = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, db_column='member_seq')
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, db_column='recipe_seq')
    content = models.TextField()
    image_url = models.CharField(max_length=255, null=True)
    ratings = models.IntegerField(default=1,
                    validators=[
                        MaxValueValidator(5),
                        MinValueValidator(1)
                    ])
    create_date = models.DateTimeField(auto_now_add=True, null=True)
    last_modified_date = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        db_table = 'tb_review'

class RecipeKeyword(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, db_column='recipe_seq')
    keyword = models.ForeignKey(Keyword, on_delete=models.CASCADE, db_column='keyword_seq')

    class Meta:
        db_table = 'tb_recipe_keyword'

class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, db_column='recipe_seq')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, db_column='ingredient_seq')

    class Meta:
        db_table = 'tb_recipe_ingredient'

class RecipeCategory(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, db_column='recipe_seq')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, db_column='category_seq')

    class Meta:
        db_table = 'tb_recipe_category'

class RecipeAllergy(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, db_column='recipe_seq')
    allergy = models.ForeignKey(Allergy, on_delete=models.CASCADE, db_column='allergy_seq')

    class Meta:
        db_table = 'tb_recipe_allergy'