import requests
from django.core.cache import cache
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.conf import settings
from ..models import Category
from ..serializers import CategorySerializer
from ..models import User
from ..serializers import UserSerializer
import json
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path

#token
urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class UserCreateView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserUpdateView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'email'
    
class UserDetailView(APIView):
    def get(self, request, email):
        try:
            user = User.objects.get(email=email)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer    

class UserUpdatePreferCategoreisView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        user = request.user
        serializer = UserSerializer()
        prefer_categories = request.get.data('prefer_categories')
        if not prefer_categories:
            return Response({"error": "Prefer categories are required"}, status=status.HTTP_400_BAD_REQUEST)
    
        serializer.update_prefer_categories(user, prefer_categories)
        return Response({"success": "Prefer categories updated successfully"}, status=status.HTTP_200_OK)

class UserUpdatePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        user = request.user 
        serializer = UserSerializer()
        password = request.data.get('password')
        if not password:
            return Response({"error": "Password not provided"}, status=400)
        
        updated_user = serializer.update_password(user, password)
        return Response(UserSerializer(updated_user).data, status=200)

