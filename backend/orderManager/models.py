from django.db import models

# Create your models here.

class Order(models.Model):

    class Meta:
        ordering = ['date']
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    client = models.CharField(
        max_length = 90, 
        verbose_name = 'Заказчик')
    contact = models.CharField(
        max_length = 90, 
        verbose_name = 'Контакт')
    date = models.DateField(
        verbose_name = 'Дата')
    prod_type = models.CharField(
        max_length = 90, 
        verbose_name = 'Тип продукции',
        blank = True)
    parts = models.CharField(
        max_length = 300,
        verbose_name = 'Итгредиенты')
    details = models.CharField(
        max_length = 400, 
        verbose_name = 'Детали')
    comment = models.TextField(
        verbose_name = 'Комметарий',
        blank = True)

    def __str__(self):
        return '{} --> {} --x-- {}'.format(
            self.date.strftime("%d %B"),
            self.prod_type,
            self.contact,
        )
