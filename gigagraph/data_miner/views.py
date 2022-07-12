from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import json
from .models import SessionData
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


from .encoders import (
    DataEncoder,
)
from .models import SessionData


@require_http_methods(["GET", "POST"])
def api_data(request):
    if request.method == "GET":
        data = SessionData.objects.all()
        return JsonResponse(
            {"Data": data},
            encoder=DataEncoder,
        )
    else:
        content = json.loads(request.body)
        data = SessionData.objects.create(**content)
        return JsonResponse(
            data,
            encoder=DataEncoder,
            safe=False,
        )



# class ListData(View):
#     def post(self, request, *args, **kwargs):
#         content = json.loads(self.request.body)
#         session = SessionData.objects.create(**content)
#         return JsonResponse(session, encoder=DataDetailEncoder, safe=False )
#     def get(self, request, *args, **kwargs): 
#         sessions = SessionData.objects.get()


