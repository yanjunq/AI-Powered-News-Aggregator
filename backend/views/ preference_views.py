import requests
from django.conf import settings
from django.shortcuts import render
from django.core.cache import cache
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required


@login_required
@require_POST
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


def get_Category_News(request):
    cache_key = f"user_news_{request.user.email}_{request.category}"
    news = cache.get(cache_key, {})
    return JsonResponse({'Category': request.category,'News': news})




