from django.shortcuts import render
from django.http import JsonResponse
from .models import Filling, Biscuit, Cream
# Create your views here.

def allInfo (request):
    response = { 
        'for-fillings' : [],
        'for-biscuits' : [],
        'for-creams'   : [],
    }
    for item in Filling.objects.all():
        response['for-fillings'].append(item.all())
    for item in Biscuit.objects.all():
        response['for-biscuits'].append(item.all())
    for item in Cream.objects.all():
        response['for-creams'].append(item.all())
    return JsonResponse(response)

def handaleRequest(request, con_type, ingredient = False, params = False):

    if ingredient == False:
        return getAllInfo(con_type)
    if ingredient == 'filling':
        return getFilling(con_type, params)
    if ingredient == 'biscuit':
        return getBiscuit(con_type, params)
    if ingredient == 'cream':
        return getCream(con_type, params)

    return JsonResponse({'values' : {
        'Error' : 'Handale request. Что то не так с запросом, проверь ингредиент по которому ищешь'
    }})

def  buildItem(item):
    return {
        'name'       : item.name,
        'hashtag'    : item.hashtag,
        'fillColor'  : item.fill_color,
        'strokeColor': item.stroke_color,
    }

def fbcList(fbc, con_type, item):
    if fbc == 'filling':
        if con_type == 'biscuit':
            return item.all()['fillingsInBiscuit']
        elif con_type == 'honey':
            return item.all()['fillingsInHoney']
        elif con_type == 'cup':
            return item.all()['fillingsInCup']
    if fbc == 'biscuit':
        if con_type == 'biscuit':
            return item.all()['biscuitsInBiscuit']
        elif con_type == 'honey':
            return item.all()['biscuitsInHoney']
        elif con_type == 'cup':
            return item.all()['biscuitsInCup']
    if fbc == 'cream':
        if con_type == 'biscuit':
            return item.all()['creamsInBiscuit']
        elif con_type == 'honey':
            return item.all()['creamsInHoney']
        elif con_type == 'cup':
            return item.all()['creamsInCup']


def activeForFilling(params, con_type, fillings):
    biscuit, cream = False, False
    if params:
        try:
            biscuit, cream = params.split('$')
        except:
            biscuit = params

    res = []

    for item in fillings:
        if biscuit and cream:
            if biscuit in fbcList('biscuit', con_type, item) and cream in fbcList('cream', con_type, item):
                res.append(item.name)
        elif biscuit:
            if biscuit in fbcList('biscuit', con_type, item):
                res.append(item.name)
        elif cream:
            if cream in fbcList('cream', con_type, item):
                res.append(item.name)
        else:
            res.append(item.name)
    return res

def getFilling(con_type, params):
    response = {'values' : []}

    if con_type == 'biscuit':
        fillings = Filling.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        fillings = Filling.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        fillings = Filling.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Получение начинки. Что то не так с запросом, проверь тип конструктора'
    }})

    response['values'] = activeForFilling(params, con_type, fillings)

    return JsonResponse(response)

def activeForBiscuit(params, con_type, biscuits):
    filling = params
    res = []
    if not filling:
        for item in biscuits:
            res.append(item.name)
    else:
        for item in biscuits:
            if filling in fbcList('filling', con_type, item):
                res.append(item.name)
        
    return res

def getBiscuit(con_type, params):
    response = {'values' : []}

    if con_type == 'biscuit':
        biscuits = Biscuit.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        biscuits = Biscuit.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        biscuits = Biscuit.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Получение бисквита. Что то не так с запросом, проверь тип конструктора'
    }})

    response['values'] = activeForBiscuit(params, con_type, biscuits)

    return JsonResponse(response)

def activeForCream(params, con_type, creams):
    filling = params
    res = []
    if not filling:
        for item in creams:
            res.append(item.name)
    else:
        for item in creams:
            if filling in fbcList('filling', con_type, item):
                res.append(item.name)
        
    return res

def getCream(con_type, params):
    response = {'values' : []}

    if con_type == 'biscuit':
        creams = Cream.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        creams = Cream.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        creams = Cream.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Получение Крема. Что то не так с запросом, проверь тип конструктора'
    }})

    response['values'] = activeForCream(params, con_type, creams)

    return JsonResponse(response)

def getAllInfo(con_type):
    response = {'values' : {
        'fillings' : [],
        'biscuits' : [],
        'creams'   : [],
    }}

    if con_type == 'biscuit':
        fillings = Filling.objects.filter(used_in_biscuit = True)
        biscuits = Biscuit.objects.filter(used_in_biscuit = True)
        creams   = Cream.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        fillings = Filling.objects.filter(used_in_honey = True)
        biscuits = Biscuit.objects.filter(used_in_honey = True)
        creams   = Cream.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        fillings = Filling.objects.filter(used_in_cup = True)
        biscuits = Biscuit.objects.filter(used_in_cup = True)
        creams = Cream.objects.filter(used_in_cup = True)

    for item in fillings:
        response['values']['fillings'].append(buildItem(item))

    for item in biscuits:
        response['values']['biscuits'].append(buildItem(item))

    for item in creams:
        response['values']['creams'].append(buildItem(item))
    
    return JsonResponse(response)