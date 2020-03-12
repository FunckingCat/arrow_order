from django.shortcuts import render
from django.http import JsonResponse
from .models import Order
import datetime
import json
# Create your views here.

def status(value, info = False):
    res =  JsonResponse({
        'status' : value
    })
    if info:
        res['info'] = info
    return res

def checkAllKeysGiven(order):
    nesKeys = [
        'name',
        'contact',
        'date',
        'details',
        'type']
    for key in nesKeys:
        if key not in order:
            return  status('Reject', 'NotAllKeys key:' + key)

def parseDate(date):
    day = int(date[0:2])
    month = int(date[5:7])
    year = int(date[10:14])
    return datetime.date(year, month, day)



def handaleNewOrder(request):
    if request.method == 'POST':
        order = json.loads(request.body)
        checkAllKeysGiven(order)
        date = parseDate(order['date'])
        new_order = Order(
            client = order['name'],
            contact = order['contact'],
            date = date,
            prod_type = order['type'],
            details = order['details'] 
        )
        if 'parts' in order:
            new_order.parts = order['parts']
        if 'comment' in order:
            new_order.comment = order['comment']
        new_order.save()
        return status('Ok')
    return status('Reject', 'Wrong method')
