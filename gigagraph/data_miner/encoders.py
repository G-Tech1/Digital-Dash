from accounts.views import AccountModelEncoder
from .common.json import ModelEncoder

from .models import SessionData


class DataListEncoder(ModelEncoder):
    model = SessionData
    properties = [
        "day",
        "data_received",
        "data_sent",
        "data_total",
        "user",
        "id"
    ]
    encoders = {"user": AccountModelEncoder}
