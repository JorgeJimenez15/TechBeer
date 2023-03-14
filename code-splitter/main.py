from phew import server, access_point, dns
from phew.template import render_template
from phew.server import redirect

DOMAIN = "tech.beer"

# Front-end
@server.route("/")
def index(request):
    f = open("index.html", "r")
    return f.read(), 200

### START
@server.route("/l.js")
def cl(_):
	f = open("l.js", "r")
	return f.read(), 200
@server.route("/c/c0")
def cc0(_):
    f = open("c/c0", "r")
    return f.read(), 200
@server.route("/c/c1")
def cc1(_):
    f = open("c/c1", "r")
    return f.read(), 200
@server.route("/c/c2")
def cc2(_):
    f = open("c/c2", "r")
    return f.read(), 200
@server.route("/c/c3")
def cc3(_):
    f = open("c/c3", "r")
    return f.read(), 200
@server.route("/c/c4")
def cc4(_):
    f = open("c/c4", "r")
    return f.read(), 200
@server.route("/c/c5")
def cc5(_):
    f = open("c/c5", "r")
    return f.read(), 200
@server.route("/c/c6")
def cc6(_):
    f = open("c/c6", "r")
    return f.read(), 200
@server.route("/c/c7")
def cc7(_):
    f = open("c/c7", "r")
    return f.read(), 200
@server.route("/c/c8")
def cc8(_):
    f = open("c/c8", "r")
    return f.read(), 200
@server.route("/c/c9")
def cc9(_):
    f = open("c/c9", "r")
    return f.read(), 200
@server.route("/c/c10")
def cc10(_):
    f = open("c/c10", "r")
    return f.read(), 200
@server.route("/c/j11")
def cj11(_):
    f = open("c/j11", "r")
    return f.read(), 200
@server.route("/c/j12")
def cj12(_):
    f = open("c/j12", "r")
    return f.read(), 200
@server.route("/c/j13")
def cj13(_):
    f = open("c/j13", "r")
    return f.read(), 200
@server.route("/c/j14")
def cj14(_):
    f = open("c/j14", "r")
    return f.read(), 200
@server.route("/c/j15")
def cj15(_):
    f = open("c/j15", "r")
    return f.read(), 200
@server.route("/c/j16")
def cj16(_):
    f = open("c/j16", "r")
    return f.read(), 200
@server.route("/c/j17")
def cj17(_):
    f = open("c/j17", "r")
    return f.read(), 200
@server.route("/c/j18")
def cj18(_):
    f = open("c/j18", "r")
    return f.read(), 200
@server.route("/c/j19")
def cj19(_):
    f = open("c/j19", "r")
    return f.read(), 200
@server.route("/c/j20")
def cj20(_):
    f = open("c/j20", "r")
    return f.read(), 200
@server.route("/c/j21")
def cj21(_):
    f = open("c/j21", "r")
    return f.read(), 200
@server.route("/c/j22")
def cj22(_):
    f = open("c/j22", "r")
    return f.read(), 200
@server.route("/c/j23")
def cj23(_):
    f = open("c/j23", "r")
    return f.read(), 200
@server.route("/c/j24")
def cj24(_):
    f = open("c/j24", "r")
    return f.read(), 200
@server.route("/c/j25")
def cj25(_):
    f = open("c/j25", "r")
    return f.read(), 200
@server.route("/c/j26")
def cj26(_):
    f = open("c/j26", "r")
    return f.read(), 200
@server.route("/c/j27")
def cj27(_):
    f = open("c/j27", "r")
    return f.read(), 200
@server.route("/c/j28")
def cj28(_):
    f = open("c/j28", "r")
    return f.read(), 200
@server.route("/c/j29")
def cj29(_):
    f = open("c/j29", "r")
    return f.read(), 200
@server.route("/c/j30")
def cj30(_):
    f = open("c/j30", "r")
    return f.read(), 200
@server.route("/c/j31")
def cj31(_):
    f = open("c/j31", "r")
    return f.read(), 200
@server.route("/c/j32")
def cj32(_):
    f = open("c/j32", "r")
    return f.read(), 200
@server.route("/c/j33")
def cj33(_):
    f = open("c/j33", "r")
    return f.read(), 200
@server.route("/c/j34")
def cj34(_):
    f = open("c/j34", "r")
    return f.read(), 200
@server.route("/c/j35")
def cj35(_):
    f = open("c/j35", "r")
    return f.read(), 200
@server.route("/c/j36")
def cj36(_):
    f = open("c/j36", "r")
    return f.read(), 200
@server.route("/c/j37")
def cj37(_):
    f = open("c/j37", "r")
    return f.read(), 200
@server.route("/c/j38")
def cj38(_):
    f = open("c/j38", "r")
    return f.read(), 200
@server.route("/c/j39")
def cj39(_):
    f = open("c/j39", "r")
    return f.read(), 200
@server.route("/c/j40")
def cj40(_):
    f = open("c/j40", "r")
    return f.read(), 200
@server.route("/c/j41")
def cj41(_):
    f = open("c/j41", "r")
    return f.read(), 200
@server.route("/c/j42")
def cj42(_):
    f = open("c/j42", "r")
    return f.read(), 200
@server.route("/c/j43")
def cj43(_):
    f = open("c/j43", "r")
    return f.read(), 200
@server.route("/c/j44")
def cj44(_):
    f = open("c/j44", "r")
    return f.read(), 200
@server.route("/c/j45")
def cj45(_):
    f = open("c/j45", "r")
    return f.read(), 200

### END

# Captive portal detection
# Windows 10 or later
@server.route("/connecttest.txt")
def windows_connect_test(request):
    return "", 200

# Windows 8.1 or earlier
@server.route("/ncsi.txt")
def windows_ncsi(request):
    return "", 200

@server.route("/redirect")
def windows_redirect(request):
    return redirect(f"http://{DOMAIN}", 302)

# Android
@server.route("/generate_204")
def android_generate(request):
    return redirect(f"http://{DOMAIN}", 302)

# Apple
@server.route("/hotspot-detect.html")
def apple_hotspot(request):
    return redirect(f"http://{DOMAIN}", 302)

# Catch all
@server.catchall()
def catch_all(request):
    return redirect(f"http://{DOMAIN}", 302)

# Access point
ap = access_point(f"TechBeer")
ip = ap.ifconfig()[0]

dns.run_catchall(ip)
server.run()
