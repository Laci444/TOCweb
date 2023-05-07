from django.shortcuts import render
from .models import Page
from django.http import Http404

# Create your views here.
def renderPagesView(request, pagetitle):
    try:
        p = Page.objects.get(path=pagetitle)
    except Page.DoesNotExist:
        raise Http404()

    
    context = {
        "navPages": Page.objects.filter(isDropdown=False),
        "dropdownPages": Page.objects.filter(isDropdown=True),
        "currentPage": Page.objects.get(path=pagetitle),
        }
    
    return render(request, 'navPageModel.html', context)