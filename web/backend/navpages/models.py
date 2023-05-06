from django.db import models

# Create your models here.
class Page(models.Model):
    title = models.CharField(max_length=50)
    path = models.CharField(max_length=50)
    body = models.TextField()
    isDropdown = models.BooleanField(default=False, verbose_name="Tedd az egyebek menübe")

    class Meta:
        verbose_name = "Oldal"
        verbose_name_plural = "Oldalak"

    def __str__(self):
        return self.title