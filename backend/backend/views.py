from django.http import  JsonResponse

def index(request):
    return JsonResponse({'values' : ['Yes, server works well (Index)',]})