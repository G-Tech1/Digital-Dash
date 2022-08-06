from django.test import TestCase
from accounts.models import User
from django.urls import reverse

class TestViews(TestCase): #made by Jacob
        
    def test_login_works(self):
        User.objects.create_user("someguy", password="something")
        response = self.client.post(
            reverse("login"),
            {"username": "someguy", "password": "something"},
        )
        self.assertEqual(
            response.status_code,
            200,
            msg="Login not working",
        )
