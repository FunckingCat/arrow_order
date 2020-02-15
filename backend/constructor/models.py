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
        help_text = 'Используется везде где упоминается элемент')
    hashtag = models.CharField(
        max_length = 60, 
        verbose_name = 'Hashtag', 
        help_text = 'По hashtag осуществляется поиск описаний в Вики')
    used_in_biscuit = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе бисквитного торта',)
    used_in_honey = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе открытого медовика',)
    used_in_cup = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе капкейка',)
    biscuit_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/BiscuitCake/',
        help_text = 'Иконка в конструкторе бисквитного торта')
    honey_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/HoneyCake/',
        help_text = 'Иконка в конструкторе откытого медовика')
    cup_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/CupCake/',
        help_text = 'Иконка в конструкторе капкейка')
    pop_up_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в всплывающем меню', 
        default = '/static/icons/popup/',
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
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

class Biscuit(Ingredient):

    class Meta:
        verbose_name = 'Бисквит'
        verbose_name_plural = 'Бисквиты'
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

class Cream(Ingredient):

    class Meta:
        verbose_name = 'Крем'
        verbose_name_plural = 'Кремы'
    
    honey_cream_second_icon = models.CharField(
        max_length = 120, 
        verbose_name = 'Иконка в конструкторе', 
        default = '/static/icons/constructor/HoneyCake/',
        help_text = 'Иконка в конструкторе медовика с нижними слоями')
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)




    
