# Generated by Django 3.0.1 on 2020-02-24 18:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0012_auto_20200224_1834'),
    ]

    operations = [
        migrations.RenameField(
            model_name='biscuit',
            old_name='fillColor',
            new_name='fill_color',
        ),
        migrations.RenameField(
            model_name='biscuit',
            old_name='strokeColor',
            new_name='stroke_color',
        ),
        migrations.RenameField(
            model_name='cream',
            old_name='fillColor',
            new_name='fill_color',
        ),
        migrations.RenameField(
            model_name='cream',
            old_name='strokeColor',
            new_name='stroke_color',
        ),
        migrations.RenameField(
            model_name='filling',
            old_name='fillColor',
            new_name='fill_color',
        ),
        migrations.RenameField(
            model_name='filling',
            old_name='strokeColor',
            new_name='stroke_color',
        ),
    ]
