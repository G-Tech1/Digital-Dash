from django.urls.conf import path
from .views import api_data

urlpatterns = [
    path(
        "data/",
        api_data,
        name="api_data",
    ),
    
]