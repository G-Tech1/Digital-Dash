from django.urls.conf import path
from views import api_data

urlpatterns = [
    path(
        "automobiles/",
        api_data,
        name="api_automobiles",
    ),
    
]