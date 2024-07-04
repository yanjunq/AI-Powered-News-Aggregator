from rest_framework import serializers
from .models import Category, User, PopularPreference

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
    


class UserSerializer(serializers.ModelSerializer):

    prefer_categories = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True, required=False)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'prefer_categories']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        prefer_categories = validated_data.pop('prefer_categories', [])
        user = User.objects.create(**validated_data)
        user.prefer_categories.set(prefer_categories)
        return user
        
    
    def update(self, instance, validated_data):
        prefer_categories = validated_data.pop('prefer_categories')
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        instance.prefer_categories.set(prefer_categories)
        return instance
    

class PopularPreferenceSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    
    class Meta:
        model = PopularPreference
        fields = ['category']


    


    

    
    
    
    



