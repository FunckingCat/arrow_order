from django.db import models

# Create your models here.

class productCard(models.Model):

    class Meta:
        ordering = ['name']
        verbose_name = 'Карточка продукции'
        verbose_name_plural = 'Карточки продукции'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название')
    hashtag = models.CharField(
        max_length = 60, 
        verbose_name = 'Hashtag',
        help_text = 'Должен быть такой же как в ссылке на карточку в меню')
    cost = models.IntegerField( 
        verbose_name = 'Цена')
    dim = models.CharField(
        max_length = 10, 
        verbose_name = 'Размерность',
        default = 'р/шт',
        help_text = 'Например тнг/пакетик')
    image = models.CharField(
        max_length = 60,
        default = '/static/stock/',
        verbose_name = 'Картинка')
    description = models.TextField(
        verbose_name = 'Описание',
        help_text = 'Напиши здесь описание')
    template = models.TextField(
        verbose_name = 'Шаблон рендера элементов заказа',
        help_text = 'Общий вид: name_of_element:отображаемое_название (parametrs)')

    def all(self):
        return {
            'name'    : self.name,
            'hashtag' : self.hashtag,
            'cost'    : self.cost,
            'dim'     : self.dim,
            'image'   : self.image,
            'descr'   : self.description,
            'templ'   : self.template,
        }

    def __str__(self):
        return self.name + ' ' + self.hashtag