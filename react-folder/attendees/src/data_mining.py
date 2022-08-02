import requests # importing the requests library
import json
import time
import psutil
from datetime import date


print("Welcome to Giga Graph")

user = input("Please enter your Giga Graph email:\n")
print("How long would you like to track your data for?")

hours = input("hours?\n")
minutes = input("minutes?\n")
seconds = input("seconds?\n")

set_time = int(hours)*3600 + int(minutes)*60 + int(seconds)
print("Running Data Monitor for " + str(hours) + " hours " + str(minutes) + " minutes " + str(seconds) + " seconds.")


def data_monitor(timer):
    
    API_ENDPOINT = "http://localhost:8000/data_miner/data/"
    
    running_time = 0

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

        last_received = bytes_received
        last_sent = bytes_sent
        last_total = bytes_total

        ## added daily feature 
        
        session_received += mb_new_received
        session_sent += mb_new_sent
        session_total = session_sent + session_received

        print(f"{mb_new_received:.2f} MB received, {mb_new_sent:.2f} MB sent, {mb_new_total:.2f} MB total, {session_total:.2f} MB session total")
        
        running_time +=1
        
        if running_time == timer:
            running = False

        time.sleep(1)

    data = {
    "user": user,
    "day": date.today(),
    "session_time": timer,
	"data_sent": round(session_sent, 2),
	"data_received": round(session_received, 2),
	"data_total": round(session_total, 2)
    }
    
    # sending post request and saving response as response object
    r = requests.post(url = API_ENDPOINT, data = json.dumps(data))
  
    # extracting response text 
    test_url = r.text

    summary = f"{session_received:.2f} MB received, {session_sent:.2f} MB sent, {session_total:.2f} MB total"
    print("Data Monitor Complete!")
    print(summary)
    print("sending data...")
    print("data sent" + test_url)

    return [session_received, session_sent, session_total]

  
data_monitor(int(set_time))
