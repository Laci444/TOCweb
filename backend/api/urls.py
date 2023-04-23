from django.urls import include, path
from rest_framework import routers
from .views import NewViewSet, CategoryViewSet, PageViewSet

router = routers.DefaultRouter()
router.APIRootView.name = "API Root"
router.APIRootView.description = "API endpoints to access backend data"


router.register(r'news', NewViewSet)
router.register(r'categorys', CategoryViewSet)
router.register(r'navpages', PageViewSet)

urlpatterns = [
    path(r'', include(router.urls))
]
