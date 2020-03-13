from django.http import  JsonResponse
from django.core.mail import send_mail

def index(request):
    return JsonResponse({'values' : ['Yes, server works well (Index)',]})