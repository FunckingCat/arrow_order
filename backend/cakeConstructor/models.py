from django.db import models

# Create your models here.

class Filling (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')
    avalibleBiscuits = models.ManyToManyField('Biscuit', blank=True, related_name='avalibleFillings', verbose_name = 'Доступные бисквиты')
    avalibleCreams = models.ManyToManyField('Cream', blank=True, related_name='avalibleFillings', verbose_name = 'Доступные кремы')

    def __str__ (self):
        return self.name

    def all(self):
        creams = []
        for cream in self.avalibleCreams.all():
            creams.append(cream.name)
        biscuits = []
        for biscuit in self.avalibleBiscuits.all():
            biscuits.append(biscuit.name)
        return {
            'name' : self.name,
            'biscuits' : biscuits,
            'creams' : creams,
        }

class Biscuit (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')

    def __str__ (self):
        return self.name

    def all(self):
        fillings = []
        for filling in self.avalibleFillings.all():
            fillings.append(filling.name)
        return {
            'name' : self.name,
            'fillings' : fillings,
        }


class Cream (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')

    def __str__ (self):
        return self.name

    def all(self):
        fillings = []
        for filling in self.avalibleFillings.all():
            fillings.append(filling.name)
        return {
            'name' : self.name,
            'fillings' : fillings,
        }
