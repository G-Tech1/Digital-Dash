import time
import psutil


## While loop to track data being sent and received 
def data_monitor():
    
    last_received = psutil.net_io_counters().bytes_recv
    last_sent = psutil.net_io_counters().bytes_sent
    last_total = last_received + last_sent

    session_received = 0
    session_sent = 0
    session_total = 0

    running = True

    while running:
        bytes_received = psutil.net_io_counters().bytes_recv
        bytes_sent = psutil.net_io_counters().bytes_sent
        bytes_total = bytes_received + bytes_sent

        new_received = bytes_received - last_received
        new_sent = bytes_sent - last_sent
        new_total = bytes_total - last_total

        mb_new_received = new_received / 1024 / 1024
        mb_new_sent = new_sent / 1024 / 1024
        mb_new_total = new_total / 1024 / 1024

        print(f"{mb_new_received:.2f} MB received, {mb_new_sent:.2f} MB sent, {mb_new_total:.2f} MB total, {session_total:.2f} MB session total")

        last_received = bytes_received
        last_sent = bytes_sent
        last_total = bytes_total

        ## added daily feature 
        
        session_received += mb_new_received
        session_sent += mb_new_sent
        session_total = session_sent + session_received

        time.sleep(1)

    print [session_received, session_sent, session_total]
    return [session_received, session_sent, session_total]

data_monitor()
        # While False:
        #  print(f"{mb_new_received:.2f} MB received, {mb_new_sent:.2f} MB sent, {mb_new_total:.2f} MB total, {session_total:.2f} MB daily total")