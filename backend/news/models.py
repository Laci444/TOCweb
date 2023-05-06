from django.db import models
from django_resized import ResizedImageField

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Kategória"
        verbose_name_plural = "Kategóriák"

    def __str__(self):
        return self.name
    
from tinymce.models import HTMLField
class New(models.Model):
    title = models.CharField(max_length=50)
    body = HTMLField()
    date = models.DateField()
    image = ResizedImageField(force_format="WEBP", size=[640, None], quality=75, upload_to='news/%Y/%m/%d/', blank=True, null=True)
    sign = models.CharField(max_length=30, default='TheOld - Crafters')
    categorys = models.ManyToManyField(Category)

    class Meta:
        verbose_name = "Hír"
        verbose_name_plural = "Hírek"

    def __str__(self):
        return self.title
