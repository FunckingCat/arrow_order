from django.db import models

# Create your models here.
class Product(models.Model):

    class Meta:
        verbose_name = 'Элемент меню первого уровня'
        verbose_name_plural = 'Элементы меню первого уровня'

    title  = models.CharField(max_length = 50)
    href   = models.CharField(max_length = 80, default = '/Products/')
    image  = models.CharField(max_length = 80, default = '/static/stock/')
    slogan = models.TextField(blank = True)
    priority = models.PositiveSmallIntegerField(verbose_name = 'Приоритет(чем меньше тем ближе к верху)', default = 0)

    def __str__(self):
        return self.title
    
    def all(self):
        return {
            'id'       : self.id,
            'title'    : self.title,
            'image'    : self.image,
            'href'     : self.href,
            'priority' : self.priority,
        }

class Products_sub(models.Model):

    class Meta:
        verbose_name = 'Элемент меню второго уровня'
        verbose_name_plural = 'Элементы меню второго уровня'

    title  = models.CharField(max_length = 50)
    href   = models.CharField(max_length = 80,
    default = '/')
    image  = models.CharField(max_length = 80,
    default = '/static/stock/')
    category = models.ForeignKey(Product, on_delete=models.CASCADE)
    priority = models.PositiveSmallIntegerField(verbose_name = 'Приоритет(чем меньше тем ближе к верху)', default = 0)

    def __str__(self):
        return '{} --- {}'.format(self.title, self.category)
    
    def all(self):
        return {
            'id'       : self.id,
            'title'    : self.title,
            'image'    : self.image,
            'href'     : self.href,
            'priority' : self.priority,
        }