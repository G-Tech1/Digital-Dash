from django.test import TestCase
<<<<<<< HEAD
# from test_create_user import create_user


# ## Keenan Nguyen Test Case
# class TestCreateUser(TestCase):
#     def test_create_user(self):
#         input = {
#             "email": "FL@gmail.com",
#             "first_name": "First",
#             "last_name": "Last",
#             "username": "username",
#             "password": "password",
#         }
#         result = create_user(input)
#         expected = 200
#         self.assertEqual(result, expected)
=======
import json
from .views import create_user
from accounts.models import User
from django.urls import reverse

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
        
>>>>>>> b5f01b4afdc2ed9072b606db3ad39b113283acd3
