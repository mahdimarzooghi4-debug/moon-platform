"""Validate rendered candidate Compose without logging any secret values.
Read-only: never starts containers or alters a realm.
"""
import base64
import binascii
import json
import re
import sys

def require(condition, label):
    if not condition:
        raise SystemExit("SMS candidate contract failed: " + label)

cfg = json.load(sys.stdin)
services = cfg["services"]
kc = services["keycloak"]
otp = services["moon-login-otp-db"]
env = kc["environment"]
db = otp["environment"]
require(re.fullmatch(r"moon-platform/keycloak:[a-f0-9]{40}", kc["image"]), "immutable Keycloak tag")
require(kc["command"] == ["start", "--optimized"], "optimized no realm import")
require(not kc.get("ports") and not otp.get("ports"), "no host ports")
require(set(otp["networks"]) == {"private"} and cfg["networks"]["private"]["internal"], "private OTP database")
require(env["KC_PROXY_HEADERS"] == "xforwarded" and env["KC_PROXY_TRUSTED_ADDRESSES"] == "172.30.88.10", "trusted proxy")
require(services["gateway"]["networks"]["frontend"]["ipv4_address"] == "172.30.88.10", "gateway address")
require(env["MOON_LOGIN_OTP_JDBC_URL"] == "jdbc:postgresql://moon-login-otp-db:5432/moon_login_otp", "dedicated DB")
require(env["MOON_LOGIN_OTP_DB_USER"] == "moon_login_otp", "restricted application DB user")
require(db["POSTGRES_USER"] == "moon_login_otp_owner", "separate database owner")
password = env["MOON_LOGIN_OTP_DB_PASSWORD"]
owner_password = db["POSTGRES_PASSWORD"]
require(password and not password.startswith("REPLACE_"), "OTP application credentials")
require(owner_password and not owner_password.startswith("REPLACE_"), "OTP owner credentials")
require(password != owner_password, "application and owner credentials must differ")
require(password not in (env["KC_DB_PASSWORD"], services["moon-db"]["environment"]["POSTGRES_PASSWORD"]), "separate application credentials")
require(owner_password not in (env["KC_DB_PASSWORD"], services["moon-db"]["environment"]["POSTGRES_PASSWORD"]), "separate owner credentials")
key = env["MOON_LOGIN_OTP_HMAC_KEY"]
try:
    decoded = base64.b64decode(key, validate=True)
except (ValueError, binascii.Error):
    raise SystemExit("SMS candidate contract failed: invalid HMAC encoding") from None
require(len(decoded) >= 32 and len(set(decoded)) > 1, "HMAC key length and nontriviality")
require(key != env["MOON_SMS_IR_API_KEY"] and key != password and key != owner_password, "separate HMAC secret")
require(owner_password != env["MOON_SMS_IR_API_KEY"], "owner and SMS credentials must differ")
require(bool(env["MOON_SMS_IR_API_KEY"]) and not env["MOON_SMS_IR_API_KEY"].startswith("REPLACE_"), "SMS credential configured")
require(re.fullmatch(r"[1-9][0-9]*", env["MOON_SMS_IR_STARTUP_TEMPLATE_ID"]), "template ID")
require(bool(env["MOON_SMS_IR_STARTUP_CODE_PARAMETER"].strip()), "code parameter")
require(kc["depends_on"]["moon-login-otp-db"]["condition"] == "service_healthy", "OTP DB dependency")
require(any(v.get("target") == "/docker-entrypoint-initdb.d/20-moon-login-otp.sql" and v.get("read_only")
            for v in otp["volumes"]), "private schema initialization")
print("SMS candidate Compose contract verified; no live infrastructure or SMS delivery verified.")
