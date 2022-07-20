import requests # importing the requests library
import json
import time
import psutil


def data_monitor(timer):
    
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

    summary = f"{session_received:.2f} MB received, {session_sent:.2f} MB sent, {session_total:.2f} MB total"
    print("Data Monitor Complete!")
    print(summary)
    
    return [session_received, session_sent, session_total]


print("Welcome to Giga Graph")
set_time = input("How long would you like to track your data for?")

print("Starting Data Monitor for " + str(set_time) + " seconds")

data_monitor(int(set_time))
        
        
        
        
        
        
        # While False:
        #  print(f"{mb_new_received:.2f} MB received, {mb_new_sent:.2f} MB sent, {mb_new_total:.2f} MB total, {session_total:.2f} MB daily total")
    
    # print("success")
    # content = {
    #     "data_received" : session_received,
    #     "data_sent" : session_sent,
    #     "data_total": session_total,
    # } 
    # print("success2")
    # models.SessionData.objects.create(**content)
    # print("success3")
    # # return JsonResponse(
    # #         data,
    # #         encoder=DataEncoder,
    # #         safe=False,
    # #     )