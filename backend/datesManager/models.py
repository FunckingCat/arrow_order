from django.db import models

# Create your models here.

class busy_date(models.Model):

    class Meta:
        ordering = ['day']
        verbose_name = 'Занятая дата'
        verbose_name_plural = 'Занятые даты'

    day = models.DateField(verbose_name = 'Дата', unique = True)

    def getDay(self):
        tt = self.day.timetuple()
        return tt[2]

    def getMonth(self):
        tt = self.day.timetuple()
        return tt[1]

    def getYear(self):
        tt = self.day.timetuple()
        return tt[0]

    def __str__(self):
        return self.day.strftime("%d %B %Y %A")