"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .view import get_categories, get_news, store_selected_categories, clear_cache

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', get_categories, name='get_categories'),
    path('news/', get_news, name='get_news'),
    path('selected_categories/', store_selected_categories, name='store_selected_categories'),
    path('clear_cache/', clear_cache, name='clear_cache'),
]


