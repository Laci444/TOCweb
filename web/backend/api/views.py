from news.models import New, Category
from navpages.models import Page
from rest_framework import viewsets
from .serializers import NewSerializer, CategorySerializer, PageSerializer, PageListSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination

class NewViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to get list of news
    """
    queryset = New.objects.all().order_by('-date', '-id')
    serializer_class = NewSerializer
    pagination_class = PageNumberPagination
    pagination_class.page_size = 10
    pagination_class.max_page_size = 50
    pagination_class.page_size_query_param = 'page_size'


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to get list of categorys
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to get list of nav pages
    """
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    def list(self, request):
        queryset = Page.objects.all()
        serializer = PageListSerializer(queryset, many=True, context = {'request': request})
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        queryset = Page.objects.all()
        page = get_object_or_404(queryset, pk=pk)
        serializer = PageSerializer(page, context = {'request': request})
        return Response(serializer.data)