from django.contrib import admin
from .models import Member

# Register your models here.


# Customizing admin page in Django 
class MemberAdmin(admin.ModelAdmin):
    fields = ['nickname', 'password']


admin.site.register(Member, MemberAdmin)
