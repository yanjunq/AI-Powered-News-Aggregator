from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'Category'

class User(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    prefer_categories = models.ManyToManyField(Category, related_name='preferred_by')

    def __str__(self):
        return self.username
    class Meta:
        db_table = 'User'

class PopularPreference(models.Model):
    category = models.OneToOneField(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.category.name
    class Meta:
        db_table = 'PopularPreference'








