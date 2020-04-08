from django.shortcuts import render
from django.http import JsonResponse
from .models import Order
import datetime
import json
from django.core.mail import send_mail
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

def send_email(order,date):
    try:
        mail_body = '''
            Имя заказчика : {}
            Контакт       : {}
            Тип продукции : {}
            Дата          : {}
        '''.format(
            order['name'],
            order['contact'],
            order['type'],
            date.strftime("%d %B"),
        )

        if 'parts' in order:
            parts = order['parts'].split(';')
            mail_body += '''
                {}
                {}
                {}
            '''.format(parts[0], parts[1],parts[2])
        if 'details' in order:
            mail_body += '''
                Характеристики: {}
            '''.format(order['details'])
        if 'comment' in order:
            mail_body += '''
                Комметарий: {}
            '''.format(order['comment'])

        send_mail(
            'Новый заказ',
            mail_body,
            'david99111@mail.ru',
            ['smartguy3756@gmail.com'],
            fail_silently=False
        )

        return True
    except:
        return False

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
        mail_status = send_email(order, date)
        if not mail_status:
            return ('Reject','Mail not sent')
        return status('Ok')
    return status('Reject', 'Wrong method')
