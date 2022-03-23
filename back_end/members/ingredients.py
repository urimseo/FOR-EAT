from recipes.models import Ingredient
from django.db.models import Q
def get_ingredient_list(ingredients):
    liked_ingredient = []
    for ingredient in ingredients:
        # seafood 일 경우
        if ingredient == 'seafood':
            seafood_list = ['cod', 'salmon', 'tuna', 'octopus', 'crab', 'lobster', 'oyster', 'squid', 'fish', 'tilapia', 'shrimp']
            for seafood in seafood_list:
                ingredient_objects = Ingredient.objects.filter(ingredient_name__contains=seafood)
                for object in ingredient_objects:
                    liked_ingredient.append(object.ingredient_seq)
        # noodle일 경우 
        elif ingredient =='noodle':
            noodle_list = ['noodle', 'pasta']
            for noodle in noodle_list:
                ingredient_objects = Ingredient.objects.filter(ingredient_name__contains=noodle)
                for object in ingredient_objects:
                    liked_ingredient.append(object.ingredient_seq)
        # 감자의 경우 
        elif ingredient =='potato':
            ingredient_objects = Ingredient.objects.filter(
                Q(ingredient_name__contains='potato')) & Ingredient.objects.filter(~Q(ingredient_name__contains='sweet'))
            
            for object in ingredient_objects:
                liked_ingredient.append(object.ingredient_seq)
        # 그외 모든 재료 
        else:
            ingredient_objects = Ingredient.objects.filter(ingredient_name__contains=ingredient)
            for object in ingredient_objects:
                liked_ingredient.append(object.ingredient_seq)
    return liked_ingredient