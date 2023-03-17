from phew import server, access_point, dns
from phew.server import redirect

from machine import Pin
from dht import DHT11

# Temperature sensor
temperature_pin = Pin(16, Pin.OUT, Pin.PULL_DOWN)
sensor = DHT11(temperature_pin)

# Config
PIN = "1234"
TEMPERATURE_RANGE = 5
LED_COLOR = "#ffffff"
DOMAIN = "tech.beer"

# Frontend
@server.route("/")
def index(_):
    f = open("index.html", "r")
    return f.read(), 200

@server.route("/l.js")
def loader(_):
	f = open("l.js", "r")
	return f.read(), 200

@server.route("/c/<chunk>")
def chunk(_, chunk):
    f = open(f"c/{chunk}", "r")
    return f.read(), 200

# Backend
@server.route("/api", methods=["GET"])
def api(request):
    global PIN
    global TEMPERATURE_RANGE
    global LED_COLOR

    action = request.query["action"]
    data = request.query["data"]
    pin = request.query["pin"]

    result = f"{action},{data},{pin}"

    try:
        # Log in
        if action == "login":
            if data == PIN: result = "Success"
            else: result = "Invalid PIN code"

        # Get current temperature
        elif action == "get-current-temperature":
            result = f"{sensor.temperature}"

        # Modify temperature range
        elif action == "modify-temperature-range":
            if pin == PIN:
                TEMPERATURE_RANGE = data
                result = "Success"
            else: result = "Invalid PIN code"

        # Modify led color
        elif action == "modify-led-color":
            if pin == PIN:
                LED_COLOR = data
                result = "Success"
            else: result = "Invalid PIN code"

        # Update PIN code
        elif action == "update-pin-code":
            if pin == PIN:
                PIN = data
                result = "Success"
            else: result = "Invalid PIN code"
    except:
        return "Internal server error", 500
    
    return result, 200

# Captive portal detection
# Windows
@server.route("/connecttest.txt")
@server.route("/ncsi.txt")
@server.route("/redirect")
# Android
@server.route("/generate_204")
# Apple
@server.route("/hotspot-detect.html")
@server.route("/success.html")
# Catch all
@server.catchall()
def cp(_):
    return redirect(f"http://{DOMAIN}", 302)

# Access point
ap = access_point("TechBeer")
ip = ap.ifconfig()[0]

dns.run_catchall(ip)
server.run()