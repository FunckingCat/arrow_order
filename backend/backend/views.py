from django.http import  JsonResponse
from django.core.mail import send_mail

def send_email():
    send_mail(
        'Subject here',
        'Here is the message.',
        'david99111@mail.ru',
        ['smartguy3756@gmail.com'],
        fail_silently=False
    )

def index(request):
    send_email()
    return JsonResponse({'values' : ['Yes, server works well (Index)',]})