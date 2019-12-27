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

def getFillings(request, parametrs = False):
    biscuit, cream = False, False
    if parametrs:
        try:
            biscuit, cream = parametrs.split('&')
        except:
            biscuit = parametrs
    response = {'values' : []}
    for item in Filling.objects.all():
        if biscuit and cream:
            if biscuit in item.all()['biscuits'] and cream in item.all()['creams']:
                response['values'].append(item.name)
        elif biscuit:
            if biscuit in item.all()['biscuits']:
                response['values'].append(item.name)
        elif cream:
            if cream in item.all()['creams']:
                response['values'].append(item.name)
        else:
            response['values'].append(item.name)
    return JsonResponse(response)

def getBiscuits(request, filling = False):
    response = {'values' : []}
    if not filling:
        for item in Biscuit.objects.all():
            response['values'].append(item.name)
    else:
        for item in Biscuit.objects.all():
            if filling in item.all()['fillings']:
                response['values'].append(item.name)
    return JsonResponse(response)

def getCreams(request, filling = False):
    response = {'values' : []}
    if not filling:
        for item in Cream.objects.all():
            response['values'].append(item.name)
    else:
        for item in Cream.objects.all():
            if filling in item.all()['fillings']:
                response['values'].append(item.name)
    return JsonResponse(response)