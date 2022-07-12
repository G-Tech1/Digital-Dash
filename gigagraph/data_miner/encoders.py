from .common.json import ModelEncoder

from .models import SessionData


class DataEncoder(ModelEncoder):
    model = SessionData
    properties = [
        "day",
        "data_received",
        "data_sent",
        "data_total",
    ]
