from django.urls import path
from . import views

urlpatterns = [
    path('<str:con_type>/', views.getDetails),
] 