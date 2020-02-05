from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo, name = 'allInfo'),
    path('filling/', views.getFillings, name = 'getFillings'),
    path('filling/<str:parametrs>/', views.getFillings, name = 'getFillings'),
    path('biscuit/', views.getBiscuits, name = 'getBiscuits'),
    path('biscuit/<str:filling>/', views.getBiscuits, name = 'getBiscuits'),
    path('cream/', views.getCreams, name = 'getCreams'),
    path('cream/<str:filling>/', views.getCreams, name = 'getCreams'),
    path('getCakeIcons/', views.getCakeIcons, name = 'getCakeIcons'),
    path('getCakeIcons/<str:parts>/', views.getCakeIcons, name = 'getCakeIcons'),
]