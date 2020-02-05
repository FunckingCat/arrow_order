from django.contrib import admin

# Register your models here.

from .models import  Biscuit, Filling, Cream
admin.site.register(Biscuit)
admin.site.register(Filling)
admin.site.register(Cream)