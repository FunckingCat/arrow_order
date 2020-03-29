from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo),
    path('<str:con_type>/', views.handaleRequest),
    path('<str:con_type>/<str:ingredient>/', views.handaleRequest),
    path('<str:con_type>/<str:ingredient>/<str:params>/', views.handaleRequest),
] 