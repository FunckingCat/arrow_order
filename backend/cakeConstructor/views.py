from django.shortcuts import render
from django.http import JsonResponse
from .models import Filling, Biscuit, Cream
# Create your views here.

def main (request):
    response = { 'values' : []}
    for item in Filling.objects.all():
        response['values'].append(item.all())
    return JsonResponse(response)