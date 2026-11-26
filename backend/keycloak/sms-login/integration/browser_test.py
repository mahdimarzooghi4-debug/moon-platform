"""Real Chromium -> real Keycloak -> real PostgreSQL -> isolated HTTPS SMS fixture."""
import base64
import hashlib
import json
import pathlib
import secrets
import ssl
import subprocess
import sys
import urllib.parse
import urllib.request
from playwright.sync_api import sync_playwright

ROOT = "http://127.0.0.1:18081"
AUTH = ROOT + "/identity/realms/moon/protocol/openid-connect"
CALLBACK = ROOT + "/callback"
MOCK = "https://127.0.0.1:18443"
fixture = pathlib.Path(sys.argv[1])
tls = ssl.create_default_context(cafile=str(fixture / "sms.crt"))
realm = json.loads((fixture / "moon-realm.json").read_text())

def req(url, data=None, context=None):
    with urllib.request.urlopen(url, data=data, context=context, timeout=15) as response:
        return json.load(response)

def messages():
    return req(MOCK + "/__test/messages", context=tls)

def sql(statement):
    subprocess.run(["docker", "exec", "moon-ci-pg", "psql", "-U", "moonci", "-d", "otp",
                    "-v", "ON_ERROR_STOP=1", "-c", statement], check=True, stdout=subprocess.DEVNULL)

def reset(mode="ok"):
    # Isolate each scenario from the shared production rate policy; no production DB.
    sql("TRUNCATE moon_login_otp_challenge, moon_login_otp_send;")
    req(MOCK + "/__test/reset", json.dumps({"mode": mode}).encode(), tls)

def b64(data):
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def begin(browser, mobile, headers=None):
    ctx = browser.new_context(extra_http_headers=headers or {})
    page = ctx.new_page()
    page.route(CALLBACK + "**", lambda route: route.fulfill(status=200, body="CI callback"))
    verifier = secrets.token_urlsafe(64)
    state = secrets.token_urlsafe(24)
    nonce = secrets.token_urlsafe(24)
    params = dict(client_id="moon-web", redirect_uri=CALLBACK, response_type="code",
                  scope="openid profile", state=state, nonce=nonce, prompt="login",
                  code_challenge=b64(hashlib.sha256(verifier.encode()).digest()),
                  code_challenge_method="S256", login_hint=mobile)
    page.goto(AUTH + "/auth?" + urllib.parse.urlencode(params))
    page.locator("#moon-mobile").fill(mobile)
    page.locator("button[value=send]").click()
    page.locator("#moon-code").wait_for()
    assert not page.url.startswith(CALLBACK)
    return ctx, page, verifier, state, nonce

def otp():
    rows = messages()
    assert len(rows) == 1, "expected one accepted transport request"
    code = rows[0]["parameters"][0]["value"]
    assert len(code) == 6 and code.isascii() and code.isdigit()
    return code

def submit(page, code):
    page.locator("#moon-code").fill(code)
    page.locator("button[value=verify]").click()

def reject(page, code):
    submit(page, code)
    page.locator("#moon-code").wait_for()
    assert not page.url.startswith(CALLBACK)
    assert page.locator('[role="alert"]').count() > 0

def payload(token):
    part = token.split(".")[1]
    return json.loads(base64.urlsafe_b64decode(part + "=" * (-len(part) % 4)))

def accept(page, verifier, state, nonce, code, user):
    submit(page, code)
    page.wait_for_url(CALLBACK + "**")
    query = urllib.parse.parse_qs(urllib.parse.urlsplit(page.url).query)
    assert query.get("state") == [state] and "error" not in query
    tokens = req(AUTH + "/token", urllib.parse.urlencode(dict(
        grant_type="authorization_code", client_id="moon-web", code=query["code"][0],
        redirect_uri=CALLBACK, code_verifier=verifier)).encode())
    claims = payload(tokens["access_token"])
    assert claims["sub"] == user["id"]
    actual = set(claims.get("roles", []))
    expected = set(user["realmRoles"])
    domain_roles = {r["name"] for r in realm["roles"]["realm"]} | {"auditor"}
    assert actual & domain_roles == expected, "role isolation"
    assert payload(tokens["id_token"])["nonce"] == nonce
    assert claims["iss"] == ROOT + "/identity/realms/moon"
    audience = claims["aud"] if isinstance(claims["aud"], list) else [claims["aud"]]
    assert "moon-api" in audience

with sync_playwright() as p:
    browser = p.chromium.launch()
    for user in realm["users"][:7]:
        reset()
        ctx,page,verifier,state,nonce = begin(browser,user["username"])
        code = otp()
        assert messages()[0]["mobile"] == user["username"]
        page.locator("button[value=resend]").click()
        page.locator("#moon-code").wait_for()
        assert len(messages()) == 1, "resend cooldown"
        wrong = "000000" if code != "000000" else "000001"
        reject(page,wrong)
        accept(page,verifier,state,nonce,code,user)
        # Durable consumption checked independently of redirect.
        result = subprocess.check_output(["docker","exec","moon-ci-pg","psql","-U","moonci",
            "-d","otp","-Atc","SELECT state FROM moon_login_otp_challenge"]).decode().strip()
        assert result == "CONSUMED"
        ctx.close()
    mobile = realm["users"][0]["username"]
    reset()
    ctx,page,*_ = begin(browser,mobile)
    code = otp()
    sql("UPDATE moon_login_otp_challenge SET expires_at=clock_timestamp()-interval '1 second';")
    reject(page,code)
    ctx.close()
    reset()
    ctx,page,*_ = begin(browser,mobile)
    code = otp()
    wrong = "000000" if code != "000000" else "000001"
    for _ in range(5):
        reject(page,wrong)
    reject(page,code)
    ctx.close()
    for invalid in ("09120000999","09120000997"):
        reset()
        ctx,page,*_ = begin(browser,invalid)
        assert messages() == [], "disabled or unknown account dispatched an SMS"
        reject(page,"123456")
        ctx.close()
    reset("reject")
    ctx,page,*_ = begin(browser,mobile)
    reject(page,otp())
    ctx.close()
    reset()
    ctx,page,*_ = begin(browser,mobile)
    code = otp()
    other_ctx,other_page,*_ = begin(browser,mobile)
    assert len(messages()) == 1
    reject(other_page,code)
    ctx.close()
    other_ctx.close()
    reset()
    ctx,page,*_ = begin(browser,"09120000998")
    submit(page,otp())
    page.locator("input[name=password-new]").wait_for()
    assert not page.url.startswith(CALLBACK), "required action bypass"
    ctx.close()
    # Each account is different, but the real TCP source is the same.
    # An attacker must not be able to bypass the five-per-source limit
    # by supplying a different forwarded address on each request.
    reset()
    for i,user in enumerate(realm["users"][:7]):
        headers = {"X-Forwarded-For": f"192.0.2.{i+1}", "X-Real-IP": f"198.51.100.{i+1}"}
        ctx,page,*_ = begin(browser,user["username"],headers)
        ctx.close()
        assert len(messages()) == min(i+1,5), "forged source bypassed shared limit"
    sources = subprocess.check_output(["docker","exec","moon-ci-pg","psql","-U","moonci",
        "-d","otp","-Atc","SELECT count(*) || ':' || count(DISTINCT source_key) FROM moon_login_otp_send"]).decode().strip()
    assert sources == "5:1", "unexpected source budget fragmentation"
    browser.close()
print("Real Caddy/Keycloak/Chromium/PostgreSQL OTP scenarios passed; SMS delivery is simulated.")
