from django.contrib import admin
from .models import Page
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Page)
class PageAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'

    list_display = ('title', 'isDropdown', )
    list_filter = ('isDropdown', )


# Register your models here.
#admin.site.register(Page, PageModelAdmin)