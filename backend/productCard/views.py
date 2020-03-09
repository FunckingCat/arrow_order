from django.shortcuts import render
from django.http import JsonResponse
from .models import productCard
import re 
# Create your views here.

def parseTemplate(item):
    reg = re.compile(r'^(?P<in_type>\w*):(?P<name>[\w ]*)\((?P<param>[\w\W]*)\)')
    s = reg.search(item)
    res = {
        'type' : s.group('in_type'),
        'name' : s.group('name'),
        'param': s.group('param').replace(' ',''),
    }
    return res

def getProductCard(request, card_hashtag):
    response = {
        'values' : {

        }
    }
    card = productCard.objects.filter(hashtag = card_hashtag)[0]
    response['values'] = card.all()
    template = card.template
    template = template.replace('\r\n','').split(';')
    template = list(filter(lambda x: len(x) > 0, template))
    template = list(map(lambda item: parseTemplate(item), template))
    response['values']['template'] = template
    return JsonResponse(response)
