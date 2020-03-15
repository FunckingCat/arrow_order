from django.shortcuts import render
from django.http import JsonResponse
from .models import Bug, New_user, Error
import json

# Create your views here.

def status(value, info = False):
    res =  JsonResponse({
        'status' : value
    })
    if info:
        res['info'] = info
    return res

def handale_bug_report(request):
    if request.method == 'POST':
        report = json.loads(request.body)
        b = Bug(
            name = report['name'],
            contact = report['contact'],
            reason = report['reason'],
            descr = report['descr'],
        )
        b.save()
        return status('Ok')    
    return status('Reject')

def insert_new_user(request):
    if request.method == 'POST':
        user_info = json.loads(request.body)
        u = New_user(
            name = user_info['name'],
            contact = user_info['contact'],
            navigator = user_info['navigator'],
            device = user_info['device'],
            clientWidth = user_info['width'],
            clientHeight = user_info['height'],
        )
        u.save()
        return status('Ok')    
    return status('Reject')

def handale_error(request):
    if request.method == 'POST':
        report = json.loads(request.body)
        return status('Ok')    
    return status('Reject')
