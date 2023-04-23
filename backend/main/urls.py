"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'TheOld - Crafters Admin panel'
admin.site.site_title = 'TOC Admin'

urlpatterns = [
    path(r'admin/summernote/', include('django_summernote.urls')),
    path(r'admin/tinymce/', include('tinymce.urls')),
    
    path(r'admin/', admin.site.urls),
    path(r'api/', include('api.urls'), name='api'),

    path(r'', include('news.urls'), name='news'),
    path(r'', include('navpages.urls'), name='navpages'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)