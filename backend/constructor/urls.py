from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo),
    path('getColors/', views.getColors),
    path('getColors/<str:parts>/', views.getColors),
    path('<str:con_type>/<str:ingredient>/', views.handaleRequest),
    path('<str:con_type>/<str:ingredient>/<str:params>/', views.handaleRequest),
]