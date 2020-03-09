from django.urls import path
from . import views

urlpatterns = [
    path('<str:card_hashtag>/', views.getProductCard),
] 