# Generated by Django 3.0.1 on 2020-02-16 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0009_auto_20200215_1357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filling',
            name='avalible_biscuits_in_biscuit',
            field=models.ManyToManyField(blank=True, related_name='avalible_biscuit_fillings', to='constructor.Biscuit', verbose_name='Доступные бисквиты в бисквитном торте'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='avalible_biscuits_in_cup',
            field=models.ManyToManyField(blank=True, related_name='avalible_cup_fillings', to='constructor.Biscuit', verbose_name='Доступные бисквиты в капкейке'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='avalible_biscuits_in_honey',
            field=models.ManyToManyField(blank=True, related_name='avalible_honey_fillings', to='constructor.Biscuit', verbose_name='Доступные бисквиты в открытом медовике'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='avalible_creams_in_biscuit',
            field=models.ManyToManyField(blank=True, related_name='avalible_biscuit_fillings', to='constructor.Cream', verbose_name='Доступные кремы в бисквитном торте'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='avalible_creams_in_cup',
            field=models.ManyToManyField(blank=True, related_name='avalible_cup_fillings', to='constructor.Cream', verbose_name='Доступные кремы в капкейке'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='avalible_creams_in_honey',
            field=models.ManyToManyField(blank=True, related_name='avalible_honey_fillings', to='constructor.Cream', verbose_name='Доступные кремы в открытом медовике'),
        ),
    ]
