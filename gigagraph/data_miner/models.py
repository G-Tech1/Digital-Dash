from django.db import models

# Create your models here.

class SessionData(models.Model):
    day = models.DateField(auto_now_add=True)
    data_sent = models.FloatField()
    data_received = models.FloatField()
    data_total = models.FloatField()



