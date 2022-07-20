from .common.json import ModelEncoder

from .models import SessionData


class DataEncoder(ModelEncoder):
    model = SessionData
    properties = [
        "day",
        "session_time",
        "data_received",
        "data_sent",
        "data_total",
    ]
