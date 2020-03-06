from django.shortcuts import render
from django.http import JsonResponse
from .models import Decor, Color, Weight
# Create your views here.

def getDetails(request, con_type):
    response = {
        'values' : {
            'decor' : [],
            'colors': [],
        }
    }
    if (con_type == 'Открытый медовик' or con_type == 'Торт - цифра'):
        decor_items = Decor.objects.filter(used_in_honey = True)
        color_items = Color.objects.filter(used_in_honey = True)
        weight_item = Weight.objects.filter(name = 'Открытый медовик')
    elif (con_type == 'Бисквитный торт'):
        decor_items = Decor.objects.filter(used_in_biscuit = True)
        color_items = Color.objects.filter(used_in_biscuit = True)
        weight_item = Weight.objects.filter(name = con_type)
    elif (con_type == 'Капкейки'):
        decor_items = Decor.objects.filter(used_in_cup = True)
        color_items = Color.objects.filter(used_in_cup = True)
        weight_item = Weight.objects.filter(name = con_type)
    else:
        return JsonResponse({
            'values' : {
                'error' : 'Тип не совпал'
            }
        })

    for item in decor_items:
        response['values']['decor'].append({
            'name' : item.name,
            'icon' : item.icon,
            'decr' : item.description,
        })
    for item in color_items:
        response['values']['colors'].append({
            'name'  : item.name,
            'color' : item.color,
        })
    response['values']['weight'] = weight_item[0].all()
    return JsonResponse(response)

