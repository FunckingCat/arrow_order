from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Products_sub

# Create your views here.
def main(request):
    return JsonResponse({"It" : 'works'})

def categories(request):
    if request.method == 'GET':
        items = Product.objects.all()
        response = {'values' : {
                'title'  : 'Заказ',
                'slogan' : '',
                'items'  : [],
            }
        }
        for item in items:
            response['values']['items'].append(item.all())
        return JsonResponse(response)

def subs(request, name):
    if request.method == 'GET':
        items = Products_sub.objects.all()
        response = {'values' : {
            'title' : items[0].category.title,
            'slogan': items[0].category.slogan,
            'items' : [],
        }}
        for item in items:
            if item.category.title == name:
                response['values']['items'].append(item.all())
        return JsonResponse(response)
        
