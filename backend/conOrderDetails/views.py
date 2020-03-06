from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def allInfo(request):
    return JsonResponse({"It":'Works'})

