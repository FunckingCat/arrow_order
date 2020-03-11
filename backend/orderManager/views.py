from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def handaleNewOrder(request):
    return JsonResponse({'it':'works'})
