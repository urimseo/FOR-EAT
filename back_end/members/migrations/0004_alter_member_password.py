# Generated by Django 3.2.12 on 2022-03-11 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_alter_member_kakao_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='password',
            field=models.CharField(max_length=100, null=True),
        ),
    ]