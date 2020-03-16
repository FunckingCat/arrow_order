from django.db import models

# Create your models here.

class WikiObject(models.Model):

    class Meta:
        verbose_name = 'Вики статья'
        verbose_name_plural = 'Вики статьи'

    defaultText = 'Hashtag должен сооствтсвовать хэштэгу из Wiki Subcategores и CakeConstructor объектов, что бы все работало правильно'

    title = models.CharField(max_length = 60, verbose_name = 'Заголовок')
    hashtag = models.CharField(max_length = 50)
    text  = models.TextField(default = defaultText)
    image = models.CharField(max_length = 80, blank = True)

    def __str__(self):
        return '{} --- {}'.format(self.title, self.hashtag)

    def all(self):
        return {
            'title' : self.title,
            'text'  : self. text,
            'image' : self.image
        }

class WikiCategores(models.Model):

    class Meta:
        verbose_name = 'Вики категоря'
        verbose_name_plural = 'Вики категории'

    title  = models.CharField(max_length = 50)
    image  = models.CharField(max_length = 80)
    slogan = models.TextField(blank = True)

    def __str__(self):
        return self.title
    
    def all(self):
        return {
            'id'    : self.id,
            'title' : self.title,
            'image' : self.image,
            'href'  : '/Wiki/' + str(self.id),
        }

class WikiSubCategores(models.Model):

    class Meta:
        verbose_name = 'Вики подкатегория'
        verbose_name_plural = 'Вики подкатегории'

    title  = models.CharField(max_length = 50)
    image  = models.CharField(max_length = 80)
    hashtag   = models.CharField(max_length = 50)
    category = models.ForeignKey(WikiCategores, on_delete=models.CASCADE)

    def __str__(self):
        return '{} --- {}'.format(self.title, self.category)
    
    def all(self):
        return {
            'id'    : self.id,
            'title' : self.title,
            'image' : self.image,
            'href'  : '/Wiki/Card/' + self.hashtag,
        }