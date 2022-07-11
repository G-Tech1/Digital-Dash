
import time
import psutil

last_received = psutil.net_io_counters().bytes_recv
last_sent = psutil.net_io_counters().bytes_sent
last_total = last_received + last_sent

daily_received = 0
daily_sent = 0
daily_total = 0

## While loop to track data being sent and received
while True: 
    int = 0
    while int <= 86400:
        bytes_received = psutil.net_io_counters().bytes_recv
        bytes_sent = psutil.net_io_counters().bytes_sent
        bytes_total = bytes_received + bytes_sent

        new_received = bytes_received - last_received
        new_sent = bytes_sent - last_sent
        new_total = bytes_total - last_total

        mb_new_received = new_received / 1024 / 1024
        mb_new_sent = new_sent / 1024 / 1024
        mb_new_total = new_total / 1024 / 1024

        print(f"{mb_new_received:.2f} MB received, {mb_new_sent:.2f} MB sent, {mb_new_total:.2f} MB total")

        last_received = bytes_received
        last_sent = bytes_sent
        last_total = bytes_total

    ## added daily feature 
    
    daily_received += mb_new_received
    daily_sent += mb_new_sent
    daily_total = daily_sent + daily_received
    int += 1
    time.sleep(1)
