from .common.json import ModelEncoder

from .models import SessionData


class DataEncoder(ModelEncoder):
    model = SessionData
    properties = [
        "day",
        "data_sent",
        "data_received",
        "data_total",
    ]
