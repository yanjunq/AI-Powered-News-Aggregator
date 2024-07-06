import requests
from django.conf import settings
from django.shortcuts import render
from django.core.cache import cache
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, permission_classes



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_category_news(request):
    user_email = request.user.email
    category = request.POST.get('category', None)

    if not category:
        return JsonResponse({'status': 'fail', 'message': 'Category not provided.'}, status=400)

    # Construct the URL with the category
    api_url = f"{settings.NEWS_API}?apikey={settings.NEWS_API_KEY}&q={category}"

    # Fetch news from external API
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()
        new_data = data.get('results', [])[:10] if data.get('totalResults', 0) >= 10 else data.get('results', [])[:data.get('totalResults', 0)]
    except requests.RequestException as e:
        return JsonResponse({'status': 'fail', 'message': str(e)}, status=500)

    # Store news data in Redis
    cache_key = f"user_news_{user_email}_{category}"
    old_data = cache.get(cache_key, [])
    
    # Combine old data with new data if old data exists
    if old_data:
        new_data = old_data + new_data
    
    # Store the combined data in cache
    cache.set(cache_key, new_data, timeout=60*60*24)  # Store news data for 24 hours

    return JsonResponse({'status': 'success', 'message': 'News updated.', 'data': new_data})


def refresh_news(request):
    user_email = request.user.email
    category = request.POST.get('category', None)
    if not category:
        return JsonResponse({'status': 'fail', 'message': 'Category not provided.'}, status=400)
    # Construct the URL with the category
    api_url = f"{settings.NEWS_API}?apikey={settings.NEWS_API_KEY}&q={category}"

    # Fetch news from external API
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()
        new_data = data.get('results', [])[:10] if data.get('totalResults', 0) >= 10 else data.get('results', [])[:data.get('totalResults', 0)]
    except requests.RequestException as e:
        return JsonResponse({'status': 'fail', 'message': str(e)}, status=500)

    # Store news data in Redis
    cache_key = f"user_news_{user_email}_{category}"
    
    # Store the combined data in cache
    cache.set(cache_key, new_data, timeout=60*60*24)  # Store news data for 24 hours

    return JsonResponse({'status': 'success', 'message': 'News updated.', 'data': new_data})
    

class GetCategoryNewsView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        category = request.GET.get('category')
        if not category:
            return JsonResponse({'error': 'Category is required'}, status=400)
        
        cache_key = f"user_news_{request.user.email}_{category}"
        news = cache.get(cache_key, {})
        return JsonResponse({'Category': category, 'News': news})




