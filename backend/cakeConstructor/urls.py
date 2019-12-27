from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo, name = 'allInfo'),
    path('filling/', views.getFillings, name = 'getFillings'),
    path('filling/<str:parametrs>/', views.getFillings, name = 'getFillings'),
    path('biscuits/', views.getBiscuits, name = 'getBiscuits'),
    path('biscuits/<str:filling>/', views.getBiscuits, name = 'getBiscuits'),
    path('creams/', views.getCreams, name = 'getCreams'),
    path('creams/<str:filling>/', views.getCreams, name = 'getCreams'),
]