"""CI-only SMS.ir HTTPS substitute. Never deploy or use real credentials."""
import json
import ssl
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from threading import Event, Lock

lock = Lock()
release = Event()
messages = []
mode = "ok"

class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def reply(self, status, value):
        body = json.dumps(value).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path != "/__test/messages":
            return self.reply(404, {})
        with lock:
            self.reply(200, list(messages))

    def do_POST(self):
        global mode
        n = int(self.headers.get("Content-Length", "0"))
        if not 0 <= n <= 8192:
            return self.reply(400, {})
        data = json.loads(self.rfile.read(n) or b"{}")
        with lock:
            if self.path == "/__test/reset":
                messages.clear()
                mode = data.get("mode", "ok")
                release.clear()
                return self.reply(200, {})
            if self.path == "/__test/release":
                release.set()
                return self.reply(200, {})
            if self.path != "/v1/send/verify" or self.headers.get("X-API-KEY") != "ci-only-not-a-real-sms-key":
                return self.reply(403, {"status": 0})
            if data.get("templateId") != 123456 or len(data.get("parameters", [])) != 1 or data["parameters"][0].get("name") != "LOGIN_CODE":
                return self.reply(400, {"status": 0})
            messages.append(data)
            scenario = mode
        if scenario == "hold" and not release.wait(12):
            return self.reply(503, {"status": 0})
        if scenario == "reject":
            return self.reply(503, {"status": 0})
        return self.reply(200, {"status": 1})

server = ThreadingHTTPServer(("0.0.0.0", 443), Handler)
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain("/fixture/sms.crt", "/fixture/sms.key")
server.socket = context.wrap_socket(server.socket, server_side=True)
server.serve_forever()
