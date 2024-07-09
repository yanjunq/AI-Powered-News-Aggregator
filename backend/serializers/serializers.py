from rest_framework import serializers
from ..models import Category, User, PopularPreference

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
    
    def update_prefer_categories(self, instance, prefer_categories):
        instance.prefer_categories.set(prefer_categories)
        instance.save()
        return instance

    def update_password(self, instance, password):
        instance.set_password(password)
        instance.save()
        return instance
    
    def getUserName(self, instance):
        return {
            'email': instance.email,
            'username': instance.username
        }
    
class PopularPreferenceSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = PopularPreference
        fields = ['category']


    


    

    
    
    
    



