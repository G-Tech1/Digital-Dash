from django.test import TestCase
import json
from .views import create_user

## Keenan Nguyen Test Case
class TestCreateUser(TestCase):
    def test_create_user(self):
        ex_json_content = {
            "email": "FL@gmail.com",
            "first_name": "First",
            "last_name": "Last",
            "username": "exampleuser",
            "password": "",
            }

        result = create_user(ex_json_content)

        expected = "missing properties"
        # expected = {
        #     "email": "FL@gmail.com",
        #     "first_name": "First",
        #     "last_name": "Last",
        #     "username": "exampleuser",
        #     "password": "PSut19*@",
        #     }
        
        self.assertEqual(result, expected)
