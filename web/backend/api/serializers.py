from news.models import New, Category
from navpages.models import Page
from rest_framework import serializers

# News serializers
class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
class NewSerializer(serializers.HyperlinkedModelSerializer):
    categorys = CategorySerializer(many=True)
    class Meta:
        model = New
        fields = '__all__'

# NavPages serializers
class PageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'
class PageListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Page
        exclude = [ 'body', ]