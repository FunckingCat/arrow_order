from django.contrib import admin

# Register your models here.

from .models import MainPageContent, BurgerMenuItems
admin.site.register(MainPageContent)
admin.site.register(BurgerMenuItems)