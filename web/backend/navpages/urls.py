from django.urls import path
from . import views

urlpatterns = [
    path('<str:pagetitle>', views.renderPagesView),
]
