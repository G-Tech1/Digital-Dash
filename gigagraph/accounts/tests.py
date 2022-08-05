from django.test import TestCase
import json
from .views import create_user

class TestCreateUser(TestCase):
    def test_create_user(self):
        ex_json_content = {
            "email": "FL@gmail.com",
            "first_name": "First",
            "last_name": "Last",
            "username": "exampleuser",
            "password": "12345"
            }
        result = create_user.__defaults__(ex_json_content)
        self.assertEqual(result)
