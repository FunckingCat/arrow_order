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

def handaleRequest(request, con_type, ingredient, params = False):
    
    if ingredient == 'filling':
        return getFilling(con_type, params)
    if ingredient == 'biscuit':
        return getBiscuit(con_type, params)
    if ingredient == 'cream':
        return getCream(con_type, params)

    return JsonResponse({'values' : {
        'Error' : 'Что то не так с запросом, проверь ингрежиент по которому ищещь'
    }})

def  buildItem(item):
    return {
        'name'               : item.name,
        'hashtag'            : item.hashtag,
        'popUpIconSRC'       : item.popUpIcon,
    }

def getFilling(con_type, params):
    return JsonResponse({'get' : 'filling'})

def getBiscuit(con_type, params):
    return JsonResponse({'get' : 'biscuit'})

def getCream(con_type, params):
    return JsonResponse({'get' : 'cream'})