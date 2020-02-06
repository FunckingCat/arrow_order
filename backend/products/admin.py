from django.contrib import admin

# Register your models here.

from .models import Product, Products_sub

admin.site.register(Product)
admin.site.register(Products_sub)