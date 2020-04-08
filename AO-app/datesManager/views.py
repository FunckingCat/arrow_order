from django.shortcuts import render
from django.http import JsonResponse
import datetime
from .models import busy_date
# Create your views here.

def getAvalDates(request, month):
    response = {
        'values' : []
    }
    dates = busy_date.objects.all()
    current_day = datetime.datetime.now().timetuple()[2]
    current_month = datetime.datetime.now().timetuple()[1]
    current_year = datetime.datetime.now().timetuple()[0]
    for date in dates:
        if (date.getYear() < current_year or 
            date.getMonth() < current_month):
            date.delete()
            continue
        if date.getMonth() == month:
            response['values'].append(date.getDay())
    return JsonResponse(response)
