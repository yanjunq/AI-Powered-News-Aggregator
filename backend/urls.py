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
from .views.users_views import CategoryList, UserCreateView, UserUpdateView, UserDetailView, UserListView, UserUpdatePreferCategoreisView, UserUpdatePasswordView
from django.contrib import admin
from django.urls import path, include
from .views.users_views import TokenObtainPairView, TokenRefreshView

# from .view import get_categories, get_news, store_selected_categories, clear_cache

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('users/create/create', UserCreateView.as_view(), name='user-create'),
    path('users/update/<str:email>/', UserUpdateView.as_view(), name='user-update'),
    path('users/detail/<str:email>/', UserDetailView.as_view(), name='user-detail'),
    path('users/update-prefer-categories/',UserUpdatePreferCategoreisView.as_view(), name='user-update-prefer-categories'),
    path('users/update-password/<str:email>/', UserUpdatePasswordView.as_view(), name='user-update-password'),

    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # path('news/', get_news, name='get_news'),
    # path('selected_categories/', store_selected_categories, name='store_selected_categories'),
    # path('clear_cache/', clear_cache, name='clear_cache'),
]


