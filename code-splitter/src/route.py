@server.route("/c/{CHUNK}")
def c{CHUNK}(_):
    f = open("c/{CHUNK}", "r")
    return f.read(), 200
