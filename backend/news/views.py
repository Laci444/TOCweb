from django.shortcuts import render
from .models import New
from django.core.paginator import Paginator
from navpages.models import Page

# Create your views here.
def news_view(request):
    all_news = New.objects.all()[::-1]
    pagination = Paginator(all_news, 10)

    page_number = request.GET.get('page')
    try:
        page_obj = pagination.get_page(page_number)  # returns the desired page object
    except PageNotAnInteger:
        # if page_number is not an integer then assign the first page
        page_obj = pagination.page(1)
    except EmptyPage:
        # if page is empty then return last page
        page_obj = pagination.page(pagination.num_pages)
    
    context = {
        'page_obj': page_obj,
        "navPages": Page.objects.filter(isDropdown=False),
        "dropdownPages": Page.objects.filter(isDropdown=True),
        }

    
    return render(request, 'home.html', context)
