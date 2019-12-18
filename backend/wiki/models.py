from django.db import models

# Create your models here.

class WikiObject(models.Model):

    defaultText = 'Hashtag должен сооствтсвовать последнему сегменту URL страницы, что бы был возможен поиск по карточкам. URL карточки из вики раздела должен имет вид "/Wiki/Card/<hashtag>/. Таким образом необходимо проследить за равенством hashtag в таблицах wiki_subcategores и самом элементе Вики."'

    title = models.CharField(max_length = 60, verbose_name = 'Заголовок')
    hashtag = models.CharField(max_length = 50)
    text  = models.TextField(default = defaultText)
    image = models.CharField(max_length = 80, blank = True)

    def __str__(self):
        return self.title

    def all(self):
        return {
            'title' : self.title,
            'text'  : self. text,
            'image' : self.image
        }

class WikiCategores(models.Model):

    title  = models.CharField(max_length = 50)
    image  = models.CharField(max_length = 80)
    href   = models.CharField(max_length = 120)
    slogan = models.TextField(blank = True)

    def __str__(self):
        return self.title
    
    def all(self):
        return {
            'title' : self.title,
            'image' : self.image,
            'href'  : self.href,
            'slogan': self.slogan
        }

class WikiSubCategores(models.Model):

    title  = models.CharField(max_length = 50)
    image  = models.CharField(max_length = 80)
    href   = models.CharField(max_length = 120)
    category = models.ForeignKey(WikiCategores, on_delete=models.CASCADE)

    def __str__(self):
        return '{} --- {}'.format(self.title, self.category)
    
    def all(self):
        return {
            'title' : self.title,
            'image' : self.image,
            'href'  : self.href,
            'category':self.category,
        }