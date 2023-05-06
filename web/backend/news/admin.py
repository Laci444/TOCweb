from django.contrib import admin

from .models import *

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    
    pass

@admin.register(New)
class NewAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'sign', 'get_categorys')
    list_filter = ('date', 'sign', 'categorys')


    # this is bad! soooo many SQL querys :( but its necessary to implement filter for categorys
    def get_categorys(self, obj):
        return list(obj.categorys.all())
    get_categorys.short_description = 'Categorys'

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "categorys":
            kwargs["queryset"] = Category.objects.all()
        return super().formfield_for_manytomany(db_field, request, **kwargs)
    pass
