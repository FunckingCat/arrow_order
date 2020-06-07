from django.db import models

# Create your models here.

class MainPageContent(models.Model):

    class Meta:
        verbose_name = 'Запись на главной странице'
        verbose_name_plural = 'Записи на главной странице'

    title = models.CharField(max_length = 200, verbose_name = 'Заголовок', blank = True)
    text = models.TextField(verbose_name = 'Текст')
    image = models.CharField(max_length = 500, verbose_name = 'Ссылка на изображение')
    href  = models.CharField(max_length = 100, verbose_name = 'Ссылка на страницу без адреса приложения и протокола', blank = True)
    href_text  = models.CharField(max_length = 100, verbose_name = 'Текст на кнопке', blank = True, null = True)
    priority = models.PositiveSmallIntegerField(verbose_name = 'Приоритет(чем меньше тем ближе к верху)')

    def __str__(self):
        return '{} --- {}...'.format(self.title, self.text[0:30])

    def all(self):
        return {
            'title'    : self.title,
            'text'     : self.text,
            'image'    : self.image,
            'href'     : self.href,
            'href_text': self.href_text,
            'priority' : self.priority,
        }

class BurgerMenuItems(models.Model):

    class Meta:
        verbose_name = 'Элемент меню'
        verbose_name_plural = 'Элементы меню'

    title = models.CharField(max_length = 100, verbose_name = 'Заголовок')
    href = models.CharField(max_length = 100, verbose_name = 'Ссылка')

    def __str__(self):
        return '{} --- {}'.format(self.title,self.href)

    def all(self):
        return{
            'title' : self.title,
            'href' : self.href
        }
    
