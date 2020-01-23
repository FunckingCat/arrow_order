from django.db import models

# Create your models here.

class Filling (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')
    hashtag = models.CharField(max_length = 60, verbose_name = 'Hashtag')
    avalibleBiscuits = models.ManyToManyField('Biscuit', blank=True, related_name='avalibleFillings', verbose_name = 'Доступные бисквиты')
    avalibleCreams = models.ManyToManyField('Cream', blank=True, related_name='avalibleFillings', verbose_name = 'Доступные кремы')
    constructorIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в конструкторе', default = '/static/icons/constructor/filling/default.svg')
    popUpIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в всплывающем меню', default = '/static/icons/popup/filling/default.svg')

    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        creams = []
        for cream in self.avalibleCreams.all():
            creams.append(cream.name)
        biscuits = []
        for biscuit in self.avalibleBiscuits.all():
            biscuits.append(biscuit.name)
        return {
            'name'               : self.name,
            'hashtag'            : self.hashtag,
            'constructorIconSRC' : self.constructorIcon,
            'popUpIconSRC'       : self.popUpIcon,
            'biscuits'           : biscuits,
            'creams'             : creams,
        }

class Biscuit (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')
    hashtag = models.CharField(max_length = 60, verbose_name = 'Hashtag')
    constructorIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в конструкторе', default = '/static/icons/constructor/biscuit/default.svg')
    popUpIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в всплывающем меню', default = '/static/icons/popup/biscuit/default.svg')

    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        fillings = []
        for filling in self.avalibleFillings.all():
            fillings.append(filling.name)
        return {
            'name'               : self.name,
            'hashtag'            : self.hashtag,
            'constructorIconSRC' : self.constructorIcon,
            'popUpIconSRC'       : self.popUpIcon,
            'fillings'           : fillings,
        }


class Cream (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')
    hashtag = models.CharField(max_length = 60, verbose_name = 'Hashtag')
    constructorIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в конструкторе', default = '/static/icons/constructor/cream/default.svg')
    popUpIcon = models.CharField(max_length = 120, verbose_name = 'Иконка в всплывающем меню', default = '/static/icons/popup/cream/default.svg')

    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        fillings = []
        for filling in self.avalibleFillings.all():
            fillings.append(filling.name)
        return {
            'name'               : self.name,
            'hashtag'            : self.hashtag,
            'constructorIconSRC' : self.constructorIcon,
            'popUpIconSRC'       : self.popUpIcon,
            'fillings'           : fillings,
        }
