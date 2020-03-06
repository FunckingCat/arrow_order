from django.shortcuts import render
from django.http import JsonResponse
from .models import Decor, Color, Weight
# Create your views here.

def allInfo(request):
    return JsonResponse({"It":'Works'})

def getDecor(request, con_type):
    response = {
        'values' : []
    }
    return JsonResponse(response)

def getWeight(request, con_type):
    response = {
        'values' : []
    }
    return JsonResponse(response)

