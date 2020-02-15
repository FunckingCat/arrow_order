from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo),
    path('filling/', views.getFillings),
    path('filling/<str:parametrs>/', views.getFillings),
    path('biscuit/', views.getBiscuits),
    path('biscuit/<str:filling>/', views.getBiscuits),
    path('cream/', views.getCreams),
    path('cream/<str:filling>/', views.getCreams),
    path('getCakeIcons/', views.getIcons),
    path('getCakeIcons/<str:parts>/', views.getIcons),
]