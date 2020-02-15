from django.db import models

# Create your models here.

class Ingredient(models.Model):

    class Meta:
        abstract = True
        ordering = ['name']
        verbose_name = 'Ингридиент'
        verbose_name_plural = 'Ингридиенты'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название',
        help_text = 'ИСпользуется везде где упоминается элемент')
    hashtag = models.CharField(
        max_length = 60, 
        verbose_name = 'Hashtag', 
        help_text = 'По hashtag осуществляется поиск описаний в Вики')
    biscuit_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/BiscuitCake/.svg',
        help_text = 'Иконка в конструкторе бисквитного торта')
    honey_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/HoneyCake/.svg',
        help_text = 'Иконка в конструкторе откытого медовика')
    cup_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/CupCake/.svg',
        help_text = 'Иконка в конструкторе капкейка')
    pop_up_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в всплывающем меню', 
        default = '/static/icons/popup/.svg',
        help_text = 'Иконка в Pop Up, одинаковая для всех конструкторов')

class Filling(Ingredient):

    class Meta:
        verbose_name = 'Начинка'
        verbose_name_plural = 'Начинки'

    avalible_biscuits_in_biscuit = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalibleBiscuitFillings', 
        verbose_name = 'Доступные бисквиты в бисквитном торте')
    avalible_creams_in_biscuit = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalibleBiscuitFillings', 
        verbose_name = 'Доступные кремы в бисквитном торте')
    avalible_biscuits_in_honey = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalibleHoneyFillings', 
        verbose_name = 'Доступные бисквиты в открытом медовике')
    avalible_creams_in_honey = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalibleHoneyFillings', 
        verbose_name = 'Доступные кремы в открытом медовике')
    avalible_biscuits_in_cup = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalibleCupFillings', 
        verbose_name = 'Доступные бисквиты в капкейке')
    avalible_creams_in_cup = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalibleCupFillings', 
        verbose_name = 'Доступные кремы в капкейке')

class Biscuit(Ingredient):

    class Meta:
        verbose_name = 'Бисквит'
        verbose_name_plural = 'Бисквиты'

class Cream(Ingredient):

    class Meta:
        verbose_name = 'Крем'
        verbose_name_plural = 'Кремы'




    
