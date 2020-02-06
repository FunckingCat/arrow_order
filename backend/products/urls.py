from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.main, name = 'main'),
    path('', views.categories, name = 'categories'),
    path('<str:name>/', views.subs, name = 'subs'),
]