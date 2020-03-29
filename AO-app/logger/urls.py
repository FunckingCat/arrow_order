from django.urls import path
from . import views

urlpatterns = [
    path('bugReport/', views.handale_bug_report),
    path('newUser/', views.insert_new_user),
    path('error/', views.handale_error),
] 