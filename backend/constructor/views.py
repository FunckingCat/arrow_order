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

def handaleRequest(request, con_type, ingredient, params = False):
    
    if ingredient == 'filling':
        return getFilling(con_type, params)
    if ingredient == 'biscuit':
        return getBiscuit(con_type, params)
    if ingredient == 'cream':
        return getCream(con_type, params)

    return JsonResponse({'values' : {
        'Error' : 'Что то не так с запросом, проверь ингредиент по которому ищешь'
    }})

def  buildItem(item):
    return {
        'name'               : item.name,
        'hashtag'            : item.hashtag,
        'popUpIconSRC'       : item.pop_up_icon,
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
            biscuit, cream = parametrs.split('&')
        except:
            biscuit = params

    res = []

    for item in fillings:
        if biscuit and cream:
            if biscuit in fbcList('biscuit', con_type, item) and cream in fbcList('cream', con_type, item):
                res.append(buildItem(item))
        elif biscuit:
            if biscuit in fbcList('biscuit', con_type, item):
                res.append(buildItem(item))
        elif cream:
            if cream in fbcList('cream', con_type, item):
                res.append(buildItem(item))
        else:
            res.append(buildItem(item))
    return res

def getFilling(con_type, params):

    response = {'values' : {
        'all' : [],
        'active' : [],
    }}

    if con_type == 'biscuit':
        fillings = Filling.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        fillings = Filling.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        fillings = Filling.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Что то не так с запросом, проверь тип конструктора'
    }})

    for item in fillings:
        response['values']['all'].append(buildItem(item))
    response['values']['active'] = activeForFilling(params, con_type, fillings)

    return JsonResponse(response)

def activeForBiscuit(params, con_type, biscuits):
    filling = params
    res = []
    if not filling:
        for item in biscuits:
            res.append(buildItem(item))
    else:
        for item in biscuits:
            if filling in fbcList('filling', con_type, item):
                res.append(buildItem(item))
        
    return res

def getBiscuit(con_type, params):
    response = {'values' : {
        'all' : [],
        'active' : [],
    }}

    if con_type == 'biscuit':
        biscuits = Biscuit.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        biscuits = Biscuit.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        biscuits = Biscuit.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Что то не так с запросом, проверь тип конструктора'
    }})

    for item in biscuits:
        response['values']['all'].append(buildItem(item))
    response['values']['active'] = activeForBiscuit(params, con_type, biscuits)

    return JsonResponse(response)

def activeForCream(params, con_type, creams):
    filling = params
    res = []
    if not filling:
        for item in creams:
            res.append(buildItem(item))
    else:
        for item in creams:
            if filling in fbcList('filling', con_type, item):
                res.append(buildItem(item))
        
    return res

def getCream(con_type, params):
    response = {'values' : {
        'all' : [],
        'active' : [],
    }}

    if con_type == 'biscuit':
        creams = Cream.objects.filter(used_in_biscuit = True)
    elif con_type == 'honey':
        creams = Cream.objects.filter(used_in_honey = True)
    elif con_type == 'cup':
        creams = Cream.objects.filter(used_in_cup = True)
    else:
        return JsonResponse({'values' : {
        'Error' : 'Что то не так с запросом, проверь тип конструктора'
    }})

    for item in creams:
        response['values']['all'].append(buildItem(item))
    response['values']['active'] = activeForCream(params, con_type, creams)

    return JsonResponse(response)

def getIcons(request, con_type, parts = False):
    if not parts:
        return JsonResponse({'values' : {
        'Error' : 'Не переданы части'
        }})

    temp = parts.split('&&')    
    filling = temp[0]
    biscuit = temp[1]
    cream = temp[2] 

    if con_type == 'biscuit':
        fillingIcon = '/static/icons/constructor/BiscuitCake/filling/default.svg'
        biscuitIcon = '/static/icons/constructor/BiscuitCake/biscuit/default.svg'
        creamIcon = '/static/icons/constructor/BiscuitCake/cream/default.svg'
        creamSecondIcon = '/static/icons/constructor/HoneyCake/cream/default2.svg'
        for item in Filling.objects.all():
            if item.name == filling:
                fillingIcon = item.biscuit_icon
        for item in Biscuit.objects.all():
            if item.name == biscuit:
                biscuitIcon = item.biscuit_icon
        for item in Cream.objects.all():
            if item.name == cream:
                creamIcon = item.biscuit_icon

    elif con_type == 'cup':
        fillingIcon = '/static/icons/constructor/CupCake/filling/default.svg'
        biscuitIcon = '/static/icons/constructor/CupCake/biscuit/default.svg'
        creamIcon = '/static/icons/constructor/CupCake/cream/default.svg'
        creamSecondIcon = '/static/icons/constructor/HoneyCake/cream/default2.svg'
        for item in Filling.objects.all():
            if item.name == filling:
                fillingIcon = item.cup_icon
        for item in Biscuit.objects.all():
            if item.name == biscuit:
                biscuitIcon = item.cup_icon
        for item in Cream.objects.all():
            if item.name == cream:
                creamIcon = item.cup_icon

    elif con_type == 'honey':
        fillingIcon = '/static/icons/constructor/HoneyCake/filling/default.svg'
        biscuitIcon = '/static/icons/constructor/HoneyCake/biscuit/default.svg'
        creamIcon = '/static/icons/constructor/HoneyCake/cream/default.svg'
        creamSecondIcon = '/static/icons/constructor/HoneyCake/cream/default2.svg'
        for item in Filling.objects.all():
            if item.name == filling:
                fillingIcon = item.honey_icon
        for item in Biscuit.objects.all():
            if item.name == biscuit:
                biscuitIcon = item.honey_icon
        for item in Cream.objects.all():
            if item.name == cream:
                creamIcon = item.honey_icon
                creamSecondIcon = item.honey_cream_second_icon

    response = {'values' : {
        'fillingIcon' : fillingIcon,
        'biscuitIcon' : biscuitIcon,
        'creamIcon' : creamIcon,
        'creamSecondIcon' : creamSecondIcon,
        }
    }
    
    return JsonResponse(response)