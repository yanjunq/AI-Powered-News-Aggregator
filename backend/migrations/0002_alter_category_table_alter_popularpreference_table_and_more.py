# Generated by Django 5.0.6 on 2024-07-04 16:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='category',
            table='Category',
        ),
        migrations.AlterModelTable(
            name='popularpreference',
            table='PopularPreference',
        ),
        migrations.AlterModelTable(
            name='user',
            table='User',
        ),
    ]
