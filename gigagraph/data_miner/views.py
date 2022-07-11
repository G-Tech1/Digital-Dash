from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import json
from .models import SessionData
# Create your views here.

class ListData(View):
    def post(self, request, *args, **kwargs):
        content = json.loads(self.request.body)
        session = SessionData.objects.create(**content)
        return JsonResponse(session, encoder=DataDetailEncoder, safe=False )
    def get(self, request, *args, **kwargs): 
        sessions = SessionData.objects.get()
