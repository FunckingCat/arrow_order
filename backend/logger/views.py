from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def handale_bug_report(request):
    return JsonResponse({'It':'Works'})

def insert_new_user(request):
    return JsonResponse({'It':'Works'})

def handale_error(request):
    return JsonResponse({'It':'Works'})
