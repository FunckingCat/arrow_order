# Generated by Django 3.0.7 on 2020-06-07 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_auto_20200607_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainpagecontent',
            name='href',
            field=models.CharField(blank=True, max_length=100, verbose_name='Ссылка на страницу без адреса приложения и протокола'),
        ),
    ]