from django.db import models

# Create your models here.

class Ingredient(models.Model):

    class Meta:
        abstract = True
        ordering = ['name']
        verbose_name = 'Ингридиент'
        verbose_name_plural = 'Ингридиенты'

    name = models.CharField(
        max_length = 60, 
        verbose_name = 'Название',
        help_text = 'Используется везде где упоминается элемент')
    hashtag = models.CharField(
        max_length = 50, 
        verbose_name = 'Hashtag',
        help_text = 'По hashtag осуществляется поиск описаний в Вики')
    fillColor = models.CharField(
        max_length = 50, 
        verbose_name = 'Цвет заливки',
        default = 'hsl( , %, %)')
    strokeColor = models.CharField(
        max_length = 60, 
        verbose_name = 'Цвет обводки',
        default = 'hsl( , %, %)')  
    used_in_biscuit = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе бисквитного торта',)
    used_in_honey = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе открытого медовика',)
    used_in_cup = models.BooleanField(
        default = False,
        verbose_name = 'Используется в конструкторе капкейка',)
    
    def all(self):
        return {
            'name' : self.name,
            'hashtag' : self.hashtag,
            'usedInBiscuit' : self.used_in_biscuit,
            'usedInHoney' : self.used_in_honey,
            'usedInCup' : self.used_in_cup,
        }

class Filling(Ingredient):

    class Meta:
        verbose_name = 'Начинка'
        verbose_name_plural = 'Начинки'

    avalible_biscuits_in_biscuit = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalible_biscuit_fillings', 
        verbose_name = 'Доступные бисквиты в бисквитном торте')
    avalible_creams_in_biscuit = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalible_biscuit_fillings', 
        verbose_name = 'Доступные кремы в бисквитном торте')
    avalible_biscuits_in_honey = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalible_honey_fillings', 
        verbose_name = 'Доступные бисквиты в открытом медовике')
    avalible_creams_in_honey = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalible_honey_fillings', 
        verbose_name = 'Доступные кремы в открытом медовике')
    avalible_biscuits_in_cup = models.ManyToManyField(
        'Biscuit', 
        blank=True, 
        related_name='avalible_cup_fillings', 
        verbose_name = 'Доступные бисквиты в капкейке')
    avalible_creams_in_cup = models.ManyToManyField(
        'Cream', 
        blank=True, 
        related_name='avalible_cup_fillings', 
        verbose_name = 'Доступные кремы в капкейке')
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        biscuits_biscuit = []
        creams_biscuit   = []
        biscuits_honey   = []
        creams_honey     = []
        biscuits_cup     = []
        creams_cup       = []

        for item in self.avalible_biscuits_in_biscuit.all():
            biscuits_biscuit.append(item.name)
        
        for item in self.avalible_creams_in_biscuit.all():
            creams_biscuit.append(item.name)
        
        for item in self.avalible_biscuits_in_honey.all():
            biscuits_honey.append(item.name)

        for item in self.avalible_creams_in_honey.all():
            creams_honey.append(item.name)

        for item in self.avalible_biscuits_in_cup.all():
            biscuits_cup.append(item.name)
        
        for item in self.avalible_creams_in_cup.all():
            creams_cup.append(item.name)     
        
        res = super().all()
        res['biscuitsInBiscuit'] = biscuits_biscuit
        res['creamsInBiscuit'] = creams_biscuit
        res['biscuitsInHoney'] = biscuits_honey 
        res['creamsInHoney'] = creams_honey
        res['biscuitsInCup'] = biscuits_cup
        res['creamsInCup'] = creams_cup
        return res

class Biscuit(Ingredient):

    class Meta:
        verbose_name = 'Бисквит'
        verbose_name_plural = 'Бисквиты'
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        fillings_biscuit = []
        fillings_honey   = []
        fillings_cup     = []

        for item in self.avalible_biscuit_fillings.all():
            fillings_biscuit.append(item.name)

        for item in self.avalible_honey_fillings.all():
            fillings_honey.append(item.name)
        
        for item in self.avalible_cup_fillings.all():
            fillings_cup.append(item.name)

        res = super().all()
        res['fillingsInBiscuit'] = fillings_biscuit
        res['fillingsInHoney'] = fillings_honey
        res['fillingsInCup'] = fillings_cup 
        return res      



class Cream(Ingredient):

    class Meta:
        verbose_name = 'Крем'
        verbose_name_plural = 'Кремы'
    
    def __str__ (self):
        return '{} --- {}'.format(self.name, self.hashtag)

    def all(self):
        fillings_biscuit = []
        fillings_honey   = []
        fillings_cup     = []

        for item in self.avalible_biscuit_fillings.all():
            fillings_biscuit.append(item.name)

        for item in self.avalible_honey_fillings.all():
            fillings_honey.append(item.name)
        
        for item in self.avalible_cup_fillings.all():
            fillings_cup.append(item.name)

        res = super().all()
        res['fillingsInBiscuit'] = fillings_biscuit
        res['fillingsInHoney'] = fillings_honey
        res['fillingsInCup'] = fillings_cup  
        return res
