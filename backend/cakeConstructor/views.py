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

def  buildItem(item):
    return {
        'name'               : item.name,
        'hashtag'            : item.hashtag,
        'popUpIconSRC'       : item.popUpIcon,
    }

def getFillings(request, parametrs = False):
    biscuit, cream = False, False
    if parametrs:
        try:
            biscuit, cream = parametrs.split('&')
        except:
            biscuit = parametrs
    response = {'values' : {
        'all' : [],
        'active' : [],
    }}
    for item in Filling.objects.all():
        response['values']['all'].append(buildItem(item))
    for item in Filling.objects.all():
        if biscuit and cream:
            if biscuit in item.all()['biscuits'] and cream in item.all()['creams']:
                response['values']['active'].append(buildItem(item))
        elif biscuit:
            if biscuit in item.all()['biscuits']:
                response['values']['active'].append(buildItem(item))
        elif cream:
            if cream in item.all()['creams']:
                response['values']['active'].append(buildItem(item))
        else:
            response['values']['active'].append(buildItem(item))
    return JsonResponse(response)

def getBiscuits(request, filling = False):
    response = {'values' : {
        'all' : [],
        'active' : [],
    }}
    for item in Biscuit.objects.all():
        response['values']['all'].append(buildItem(item))
    if not filling:
        for item in Biscuit.objects.all():
            response['values']['active'].append(buildItem(item))
    else:
        for item in Biscuit.objects.all():
            if filling in item.all()['fillings']:
                response['values']['active'].append(buildItem(item))
    return JsonResponse(response)

def getCreams(request, filling = False):
    response = {'values' : {
        'all' : [],
        'active' : [],
    }}
    for item in Cream.objects.all():
        response['values']['all'].append(buildItem(item))
    if not filling:
        for item in Cream.objects.all():
            response['values']['active'].append(buildItem(item))
    else:
        for item in Cream.objects.all():
            if filling in item.all()['fillings']:
                response['values']['active'].append(buildItem(item))
    return JsonResponse(response)

def getCakeIcons(request, parts = False):
    if not parts: 
        return JsonResponse({})
    print(request)
    response = {'values' : { }}
    biscuits = {}
    creams = {}
    fillings = {}
    for item in Filling.objects.all():
        fillings[item.name] = item.constructorIcon
    for item in Biscuit.objects.all():
        biscuits[item.name] = item.constructorIcon
    for item in Cream.objects.all():
        creams[item.name] = item.constructorIcon
    for item in biscuits, fillings,creams:
        print(item)
    return JsonResponse({
        'values' : {
            'biscuits' : biscuits,
            'fillings' : fillings,
            'creams'   : creams,
        }
    })