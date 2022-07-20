from django.db import models
# from accounts.models import User

# Create your models here.

class SessionData(models.Model):
    #user = models.ForeignKey(User, related_name="session_data",on_delete=models.CASCADE)
    day = models.DateField(auto_now_add=True)
    session_time = models.IntegerField(null=True)
    data_sent = models.FloatField()
    data_received = models.FloatField()
    data_total = models.FloatField()



