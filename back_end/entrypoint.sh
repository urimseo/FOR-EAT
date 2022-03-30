# python -m venv venv
# source venv/Scripts/activate
# pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata recipes/fixtures/ingredient.json
python manage.py loaddata recipes/fixtures/keyword.json
python manage.py loaddata recipes/fixtures/allergy.json
python manage.py loaddata recipes/fixtures/category.json
python manage.py loaddata recipes/fixtures/recipe_final.json