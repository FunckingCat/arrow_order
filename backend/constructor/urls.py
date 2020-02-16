from django.urls import path
from . import views

urlpatterns = [
    path('', views.allInfo),
    path('getIcons/<str:con_type>/', views.getIcons),
    path('getIcons/<str:con_type>/<str:parts>/', views.getIcons),
    path('<str:con_type>/<str:ingredient>/', views.handaleRequest),
    path('<str:con_type>/<str:ingredient>/<str:params>/', views.handaleRequest),
]