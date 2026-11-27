"""Private operator-only client flow switch; no automatic deploy or live SMS.
Use an authenticated private loopback tunnel. Never pass admin tokens in argv.
"""
import argparse
import hashlib
import json
import os
import pathlib
import re
import stat
import sys
import urllib.error
import urllib.parse
import urllib.request

ALIAS = "moon-sms-login-v1"
PROVIDER = "moon-sms-login"
CLIENT = "moon-web"

def require(condition, reason):
    if not condition:
        raise RuntimeError(reason)

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None

class Admin:
    def __init__(self, base, token_file):
        parsed = urllib.parse.urlsplit(base)
        require(parsed.scheme == "http" and parsed.hostname == "127.0.0.1"
                and parsed.port and not parsed.username and not parsed.password
                and parsed.path in ("", "/identity") and not parsed.query and not parsed.fragment,
                "Use an explicit private loopback HTTP tunnel to Keycloak")
        self.base = base + "/admin/realms/moon"
        self.token = read_private(token_file).decode().strip()
        require(bool(self.token) and not any(c.isspace() for c in self.token), "Invalid token file")
        self.opener = urllib.request.build_opener(urllib.request.ProxyHandler({}), NoRedirect())

    def call(self, path, method="GET", data=None):
        req = urllib.request.Request(self.base + path, method=method,
            data=None if data is None else json.dumps(data).encode(),
            headers={"Authorization": "Bearer " + self.token, "Content-Type": "application/json",
                     "Accept": "application/json"})
        try:
            with self.opener.open(req, timeout=20) as response:
                body = response.read(2_000_001)
                require(len(body) <= 2_000_000, "Oversized admin response")
                return json.loads(body) if body else None
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"Keycloak admin HTTP {e.code} ({method}); inspect privately") from None
        except urllib.error.URLError:
            raise RuntimeError("Keycloak admin connection failed; verify state before retry") from None

    def current(self):
        realm = self.call("")
        require(realm["realm"] == "moon" and realm["enabled"] is True, "Wrong or disabled realm")
        rows = self.call("/clients?clientId=moon-web&exact=true")
        rows = [r for r in rows if r.get("clientId") == CLIENT]
        require(len(rows) == 1, "moon-web client lookup ambiguous")
        client = self.call("/clients/" + quote(rows[0]["id"]))
        require(client.get("clientId") == CLIENT and client.get("enabled") is True
                and client.get("publicClient") is True and client.get("protocol") == "openid-connect"
                and client.get("standardFlowEnabled") is True and client.get("directAccessGrantsEnabled") is False,
                "Unexpected moon-web client contract")
        return realm, client

    def flow(self, create=False):
        rows = [f for f in self.call("/authentication/flows") if f.get("alias") == ALIAS]
        require(len(rows) <= 1, "Duplicate candidate flow")
        if not rows:
            require(create, "Candidate flow not found")
            self.call("/authentication/flows", "POST", {
                "alias": ALIAS, "description": "Moon SMS login v1 (client-only)",
                "providerId": "basic-flow", "topLevel": True, "builtIn": False})
            return self.flow(create=True)
        flow = rows[0]
        require(flow.get("topLevel") is True and flow.get("builtIn") is False
                and flow.get("providerId") == "basic-flow", "Candidate flow structure unexpected")
        path = "/authentication/flows/" + quote(ALIAS) + "/executions"
        executions = self.call(path)
        if not executions and create:
            self.call(path + "/execution", "POST", {"provider": PROVIDER, "priority": 10})
            executions = self.call(path)
        require(len(executions) == 1, "Candidate must contain exactly one execution")
        e = executions[0]
        require(e.get("providerId") == PROVIDER and e.get("requirement") == "REQUIRED"
                and e.get("level") == 0 and not e.get("authenticationFlow"),
                "Unexpected candidate execution; do not bind")
        return flow["id"]

def quote(value):
    return urllib.parse.quote(value, safe="")

def read_private(path):
    fd = os.open(path, os.O_RDONLY | os.O_NOFOLLOW)
    with os.fdopen(fd, "rb") as f:
        meta = os.fstat(f.fileno())
        require(stat.S_ISREG(meta.st_mode) and stat.S_IMODE(meta.st_mode) == 0o600
                and meta.st_uid == os.getuid(), "Private file must be regular, owned by operator, mode 600")
        raw = f.read(65537)
        require(len(raw) <= 65536, "Private file too large")
        return raw

def save_new(path, data):
    raw = (json.dumps(data, sort_keys=True, indent=2) + "\n").encode()
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
    with os.fdopen(fd, "wb") as f:
        f.write(raw)
        f.flush()
        os.fsync(f.fileno())
    print("Saved rollback snapshot; SHA256=" + hashlib.sha256(raw).hexdigest())

def state(realm, client):
    overrides = dict(client.get("authenticationFlowBindingOverrides") or {})
    browser = overrides.pop("browser", None)
    return {"realmId": realm["id"], "defaultBrowserFlow": realm["browserFlow"],
            "clientId": client["id"], "browserOverride": browser or None,
            "otherOverrides": overrides}

def check_snapshot(snapshot, realm, client, flow, sha, base):
    require(snapshot.get("version") == 1 and snapshot.get("releaseSha") == sha
            and snapshot.get("base") == base and snapshot.get("candidateFlowId") == flow,
            "Snapshot/release/target mismatch")
    observed = state(realm, client)
    for k in ("realmId", "defaultBrowserFlow", "clientId", "otherOverrides"):
        require(observed[k] == snapshot[k], "Configuration drift: " + k)
    require(realm["browserFlow"] != ALIAS, "Candidate must never be realm default")
    return observed["browserOverride"]

def main():
    p = argparse.ArgumentParser()
    p.add_argument("command", choices=["prepare", "activate", "rollback", "verify"])
    p.add_argument("--base", required=True)
    p.add_argument("--token-file", required=True)
    p.add_argument("--snapshot", required=True)
    p.add_argument("--release-sha", required=True)
    p.add_argument("--approve-sha")
    p.add_argument("--snapshot-digest")
    args = p.parse_args()
    require(re.fullmatch("[a-f0-9]{40}", args.release_sha), "Exact release SHA required")
    if args.command != "verify":
        require(args.approve_sha == args.release_sha, "Explicit matching release approval argument required")
    admin = Admin(args.base, args.token_file)
    realm, client = admin.current()
    require(realm["browserFlow"] != ALIAS, "Candidate must never be realm default")
    require((client.get("attributes") or {}).get("pkce.code.challenge.method") == "S256",
            "Client must enforce PKCE S256 before switching")
    if args.command == "prepare":
        require(not os.path.lexists(args.snapshot), "Snapshot already exists; do not overwrite")
        before = state(realm, client)
        flow = admin.flow(create=True)
        realm, client = admin.current()
        require(state(realm, client) == before and before["browserOverride"] != flow,
                "Client changed during prepare or already bound")
        save_new(args.snapshot, dict(before, version=1, releaseSha=args.release_sha,
                                    base=args.base, candidateFlowId=flow))
        return
    raw = read_private(args.snapshot)
    require(hashlib.sha256(raw).hexdigest() == args.snapshot_digest, "Snapshot digest mismatch")
    snapshot = json.loads(raw)
    # Recovery must not depend on the broken candidate execution being healthy.
    # The pinned flow ID and current client binding still constrain rollback.
    flow = snapshot["candidateFlowId"] if args.command == "rollback" else admin.flow()
    require(isinstance(flow, str) and bool(flow), "Invalid candidate flow ID")
    observed = check_snapshot(snapshot, realm, client, flow, args.release_sha, args.base)
    prior = snapshot["browserOverride"]
    if args.command == "rollback":
        flows = admin.call("/authentication/flows")
        require(any(row.get("alias") == snapshot["defaultBrowserFlow"] and row.get("topLevel") is True
                    for row in flows), "Previous realm browser flow missing")
        if prior is not None:
            require(any(row.get("id") == prior and row.get("topLevel") is True
                        for row in flows), "Previous client browser flow missing")
    require(prior != flow and observed in (prior, flow), "Unexpected browser binding; refuse overwrite")
    if args.command == "verify":
        print("Candidate binding: " + ("ACTIVE" if observed == flow else "PREVIOUS"))
        return
    target = flow if args.command == "activate" else prior
    if observed != target:
        # Keycloak 26.7.3 treats empty string as deletion of that override.
        # Send only the browser override; other bindings and client settings are untouched.
        admin.call("/clients/" + quote(client["id"]), "PUT",
                   {"clientId": CLIENT, "authenticationFlowBindingOverrides": {"browser": target or ""}})
    realm, client = admin.current()
    observed_flow = flow if args.command == "rollback" else admin.flow()
    require(check_snapshot(snapshot, realm, client, observed_flow, args.release_sha, args.base) == target,
            "Binding read-back failed; inspect before further mutations")
    print("Verified client-only binding: " + ("ACTIVE" if target == flow else "PREVIOUS"))

if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, OSError, ValueError, KeyError, TypeError) as e:
        # Do not print response bodies, tokens, private paths or raw configuration.
        print(str(e) if type(e) is RuntimeError else "Private operator command failed; inspect locally",
              file=sys.stderr)
        sys.exit(1)
