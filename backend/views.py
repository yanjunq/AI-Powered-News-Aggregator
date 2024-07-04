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


# def get_categories(request):
#     categories = cache.get('categories')
#     if not categories:
#         categories = list(Category.objects.values())
#         cache.set('categories', categories)
#     return JsonResponse(categories, safe=False)



# def update_category(request):
#     if request.method == 'POST':
#         category_name = request.POST.get()

# def get_news(request):
#     categories = request.GET.get('categories')
#     offset = int(request.Get.get('offset', 0))
#     limit = int(request.GET.get('limit', 10))
#     cache_key = f"news_{','.join(categories)}_{offset}_{limit}"
#     news_items = cache.get(cache_key)

#     if not news_items:
#         News_API = "https://newsdata.io/api/1/news?apikey=pub_47525fccf477fc8cbe0d2f1df4d7bff50ae09&q=" + 
        

# @csrf_exempt
# def clear_cache(request):
#     if request.method == 'POST':
#         cache.clear()
#         return JsonResponse({'message': 'Cache cleared successfully'})
#     return JsonResponse({'error': 'Invalid request method'}, status=400)
    
    

    


     
    



    
        
    



