from django.db import models

# Create your models here.

class Log_abc(models.Model):

    class Meta:
        abstract = True
        ordering = ['date']
        verbose_name = 'Отчет'
        verbose_name_plural = 'Отчеты'

    date = models.DateTimeField(auto_now_add = True)

class Bug(Log_abc):

    class Meta:
        verbose_name = 'Баг'
        verbose_name_plural = 'Баги'

    state = models.TextField()
    reason = models.CharField(max_length = 150)
    descr = models.TextField()

class New_user(Log_abc):

    class Meta:
        verbose_name = 'Новый пользователь'
        verbose_name_plural = 'Новые пользователи'

    name = models.CharField(max_length = 100)
    contact = models.CharField(max_length = 100)
    navigator =  models.CharField(max_length = 100)
    clientWidth = models.IntegerField()
    clientHeight = models.IntegerField()

class Error(Log_abc):

    class Meta:
        verbose_name = 'Ошибка'
        verbose_name_plural = 'Ошибки'

    name = models.CharField(max_length = 100)
    contact = models.CharField(max_length = 100)
    descr = models.TextField()


    
