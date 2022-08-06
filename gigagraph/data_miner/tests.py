from django.test import TestCase
import json
from datetime import date
from .data_mining import data_monitor
from encoders import DataListEncoder
from .common.json import DateEncoder

# Create your tests here.

# Test case written by Kervin Clenance
class TestDate(TestCase):
    def test_date_encoder(self):
        input = date.today()
        encoder = DateEncoder()
        result = encoder.default(input)
        self.assertEqual(result, date.today().isoformat())


# Test case written by Gilan Serrant
class TestDataMonitorUser(TestCase):  # Tests empty user warning
    def test_data_monitor(self):
        num = 0
        result = data_monitor(num)
        expected = "Enter an email address"
        self.assertEqual(result, expected)
<<<<<<< HEAD

#Test case written by Keenan Nguyen

class TestGetData(TestCase):
    def test_data_encoder(self):
        input = {
            "day": "2022, 08, 05",
            "session_time": "6",
            "data_received": "24.13",
            "data_sent": "24.78",
            "data_total": "137.42",
            "user": "User",
        }
        encoder = DataListEncoder()
        result = encoder.default(input)
        self.assertEqual(result)
=======
>>>>>>> b5f01b4afdc2ed9072b606db3ad39b113283acd3
