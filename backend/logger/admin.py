from django.contrib import admin
from .models import Bug, New_user, Error
# Register your models here.

admin.site.register(Bug)
admin.site.register(New_user)
admin.site.register(Error)