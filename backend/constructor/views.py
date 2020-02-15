from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def allInfo(request):
    return JsonResponse({'All' : 'Info'})

def getFillings(request):
    return JsonResponse({'Get' : 'Fillings'})

def getBiscuits(request):
    return JsonResponse({'Get' : 'Biscuits'})

def getCreams(request):
    return JsonResponse({'Get' : 'Creams'})

def getIcons(request):
    return JsonResponse({'Get' : 'Icons'})