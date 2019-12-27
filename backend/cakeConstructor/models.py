from django.db import models

# Create your models here.

class Biscuit (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')

    def __str__ (self):
        return self.name

class Filling (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')

    def __str__ (self):
        return self.name

class Cream (models.Model):

    name = models.CharField(max_length = 60, verbose_name = 'Название')

    def __str__ (self):
        return self.name
