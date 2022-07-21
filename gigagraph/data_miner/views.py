from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import json
from .models import SessionData
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import djwto.authentication as auth


from .encoders import (
    DataListEncoder,
)
from .models import SessionData
from accounts.models import User

@auth.jwt_login_required
@require_http_methods(["GET", "POST"])
def api_data(request):
    if request.method == "GET":
        data = SessionData.objects.all()
        return JsonResponse(
            {"Data": data},
            encoder=DataListEncoder,
        )
    else:
        content = json.loads(request.body)
        user = User.objects.get(email=content["user"])
        content["user"] = user
        data = SessionData.objects.create(**content)
        return JsonResponse(
            data,
            encoder=DataListEncoder,
            safe=False,
        )



# class ListData(View):
#     def post(self, request, *args, **kwargs):
#         content = json.loads(self.request.body)
#         session = SessionData.objects.create(**content)
#         return JsonResponse(session, encoder=DataDetailEncoder, safe=False )
#     def get(self, request, *args, **kwargs): 
#         sessions = SessionData.objects.get()


