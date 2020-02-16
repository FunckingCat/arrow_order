from django.shortcuts import render
from django.http import JsonResponse
from .models import Filling, Biscuit, Cream
# Create your views here.

def allInfo (request):
    response = { 
        'for-fillings' : [],
        'for-biscuits' : [],
        'for-creams'   : [],
    }
    for item in Filling.objects.all():
        response['for-fillings'].append(item.all())
    for item in Biscuit.objects.all():
        response['for-biscuits'].append(item.all())
    for item in Cream.objects.all():
        response['for-creams'].append(item.all())
    return JsonResponse(response)

def getFillings(request):
    return JsonResponse({'Get' : 'Fillings'})

def getBiscuits(request):
    return JsonResponse({'Get' : 'Biscuits'})

def getCreams(request):
    return JsonResponse({'Get' : 'Creams'})

def getIcons(request):
    return JsonResponse({'Get' : 'Icons'})