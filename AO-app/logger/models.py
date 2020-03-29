from django.db import models

# Create your models here.

class Log_abc(models.Model):

    class Meta:
        abstract = True
        ordering = ['date']
        verbose_name = 'Отчет'
        verbose_name_plural = 'Отчеты'

    name = models.CharField(max_length = 100)
    contact = models.CharField(max_length = 100)
    date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        tt = self.date.timetuple()
        return self.date.strftime("%d %B %I:%M%p ") + self.name 

class Bug(Log_abc):

    class Meta:
        verbose_name = 'Баг'
        verbose_name_plural = 'Баги'

    reason = models.CharField(max_length = 150)
    descr = models.TextField()

class New_user(Log_abc):

    class Meta:
        verbose_name = 'Новый пользователь'
        verbose_name_plural = 'Новые пользователи'

    navigator =  models.CharField(max_length = 100)
    device = models.CharField(max_length = 50)
    clientWidth = models.IntegerField()
    clientHeight = models.IntegerField()

class Error(Log_abc):

    class Meta:
        verbose_name = 'Ошибка'
        verbose_name_plural = 'Ошибки'

    descr = models.TextField()


    
