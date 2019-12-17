from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import MainPageContent, BurgerMenuItems
# Create your views here.

def renderToResponse(models):
    response = {'values' : []}
    for model in models:
        response['values'].append(model.all())
    return response

def main(request):
    models = MainPageContent.objects.all()
    response = renderToResponse(models)
    return JsonResponse(response)

def burger(request):
    models = BurgerMenuItems.objects.all()
    response = renderToResponse(models)
    return JsonResponse(response)

