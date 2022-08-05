from django.test import TestCase
import json
from datetime import date

from .common.json import DateEncoder
# Create your tests here.

#Test case written by Kervin Clenance
class TestDate(TestCase):
    def test_date_encoder(self):
        input = date.today()
        encoder = DateEncoder()
        result = encoder.default(input)
        self.assertEqual(result, date.today().isoformat())


