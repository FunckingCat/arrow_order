from django.shortcuts import render
from django.http import JsonResponse
from .models import WikiCategores, WikiSubCategores, WikiObject
# Create your views here.

def categories(request):
    if request.method == 'GET':
        items = WikiCategores.objects.all()
        response = {'values' : {
                'title'  : 'Вики',
                'slogan' : 'Все что нужно знать',
                'items'  : [],
            }
        }
        for item in items:
            response['values']['items'].append(item.all())
        return JsonResponse(response)

def subCategories(request, id):
    if request.method == 'GET':
        items = WikiSubCategores.objects.filter(category = id)
        response = {'values' : {
            'title' : items[0].category.title,
            'slogan': items[0].category.slogan,
            'items' : [],
        }}
        for item in items:
            response['values']['items'].append(item.all())
        return JsonResponse(response)

def searchCard(request, name):
    if request.method == 'GET':
        item = WikiObject.objects.get(hashtag = name)
    return JsonResponse({'values' : item.all()})
