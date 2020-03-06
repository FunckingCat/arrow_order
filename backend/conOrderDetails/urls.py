from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo),
    path('decor/<str:con_type>/', views.getDecor),
    path('weight/<str:con_type>/', views.getWeight),
] 