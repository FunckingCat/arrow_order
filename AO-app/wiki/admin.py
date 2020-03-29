from django.contrib import admin

# Register your models here.

from .models import WikiObject, WikiCategores, WikiSubCategores
admin.site.register(WikiObject)
admin.site.register(WikiCategores)
admin.site.register(WikiSubCategores)



