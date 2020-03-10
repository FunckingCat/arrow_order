# Generated by Django 3.0.1 on 2020-03-10 16:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('datesManager', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='date',
            new_name='busy_date',
        ),
        migrations.AlterModelOptions(
            name='busy_date',
            options={'ordering': ['day'], 'verbose_name': 'Занятая дата', 'verbose_name_plural': 'Занятые даты'},
        ),
        migrations.RenameField(
            model_name='busy_date',
            old_name='date',
            new_name='day',
        ),
    ]
