from django.db import models

# Create your models here.

class Decor(models.Model):

    class Meta:
        ordering = ['name']
        verbose_name = 'Декор'
        verbose_name_plural = 'Типы декоров'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название')
    icon = models.CharField(
        max_length = 60,
        default = '/static/icons/decor/',
        verbose_name = 'Иконка')
    description = models.TextField(
        verbose_name = 'Описание',
        help_text = 'Напиши здесь описание декора')
    used_in_biscuit = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе бисквитного торта',)
    used_in_honey = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе открытого медовика',)
    used_in_cup = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе капкейка',)
    
    def all(self):
        return {
            'name'          : self.name,
            'description'   : self.description,
            'usedInBiscuit' : self.used_in_biscuit,
            'usedInHoney'   : self.used_in_honey,
            'usedInCup'     : self.used_in_cup,
        }

    def __str__(self):
        return self.name

class Color(models.Model):

    class Meta:
        ordering = ['name']
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название',
        help_text = 'Используется везде где упоминается элемент')
    color = models.CharField(
        max_length = 20, 
        verbose_name = 'Цвет',
        default = 'hsl( , %, %)',
        help_text = 'Строго в HSL')
    used_in_biscuit = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе бисквитного торта',)
    used_in_honey = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе открытого медовика',)
    used_in_cup = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе капкейка',)
    
    def all(self):
        return {
            'name'          : self.name,
            'color'         : self.color,
            'usedInBiscuit' : self.used_in_biscuit,
            'usedInHoney'   : self.used_in_honey,
            'usedInCup'     : self.used_in_cup,
        }
    
    def __str__(self):
        return self.name

class Weight(models.Model):

    class Meta:
        ordering = ['name']
        verbose_name = 'Вес / Колличество'
        verbose_name_plural = 'Вес / Колличество'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название контсруктора')
    minimal = models.FloatField(
        verbose_name = 'Min',
        help_text = 'Минимальное  значение')
    maximal = models.FloatField(
        verbose_name = 'Max',
        help_text = 'Максимальное  значение')
    step = models.FloatField(
        verbose_name = 'Step',
        help_text = 'Шаг изменения значения')
    dimension = models.CharField(
        max_length = 5,
        verbose_name = 'Размерность')
    
    def all(self):
        return {
            'name': self.name,
            'min' : self.minimal,
            'max' : self.maximal,
            'step': self.step,
            'dim' : self.dimaension
        }

    def __str__(self):
        return self.name