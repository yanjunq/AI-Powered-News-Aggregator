import requests
from django.core.cache import cache
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response, status
from django.http import JsonResponse
from django.conf import settings
from .models import Category
from .serializers import CategorySerializer
from .models import User
from .serializers import UserSerializer
import json

class CategoryList(GeneratorExit.ListAPIView):
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
     def patch(self, request, email):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer()
        prefer_categories = request.data.get('prefer_categories')
        if not prefer_categories:
            return Response({"error": "Prefer categories are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.update_prefer_categories(user, prefer_categories)
        return Response({"success": "Prefer categories updated successfully"}, status=status.HTTP_200_OK)


class UserUpdatePasswordView(APIView):
    def patch(self, request, email):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer()
        password = request.data.get('password')
        if not password:
            return Response({"error": "Password is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.update_password(user, password)
        return Response({"success": "Password updated successfully"}, status=status.HTTP_200_OK)

