"""Rehearse real client-only activation and rollback against disposable Keycloak."""
import hashlib
import json
import os
import pathlib
import subprocess
import sys
import urllib.parse
import urllib.request

fixture, script = map(pathlib.Path, sys.argv[1:])
base = "http://127.0.0.1:18081"
sha = "a" * 40
# CI-only temporary master administrator; no direct grants enabled on moon-web.
with urllib.request.urlopen(base + "/realms/master/protocol/openid-connect/token",
        data=urllib.parse.urlencode({"grant_type": "password", "client_id": "admin-cli",
                "username": "ci-admin", "password": "ci-only-admin-password"}).encode(),
        timeout=20) as response:
    token = json.load(response)["access_token"]
token_file = fixture / "admin.token"
fd = os.open(token_file, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
with os.fdopen(fd, "w") as f:
    f.write(token)
snapshot = fixture / "binding.json"
args = ["--base", base, "--token-file", str(token_file), "--snapshot", str(snapshot),
        "--release-sha", sha]
def invoke(action, extra, expect=True):
    result = subprocess.run([sys.executable, str(script), action, *args, *extra],
                            capture_output=True, text=True)
    assert (result.returncode == 0) == expect, result.stdout + result.stderr
    return result.stdout
try:
    invoke("prepare", [], False)
    invoke("prepare", ["--approve-sha", sha])
    raw = snapshot.read_bytes()
    saved = json.loads(raw)
    assert saved["browserOverride"] is None
    assert saved["defaultBrowserFlow"] != "moon-sms-login-v1"
    digest = hashlib.sha256(raw).hexdigest()
    evidence = ["--snapshot-digest", digest]
    approved = evidence + ["--approve-sha", sha]
    assert "PREVIOUS" in invoke("verify", evidence)
    invoke("activate", evidence + ["--approve-sha", "b" * 40], False)
    invoke("activate", ["--approve-sha", sha, "--snapshot-digest", "0" * 64], False)
    assert "ACTIVE" in invoke("activate", approved)
    assert "ACTIVE" in invoke("activate", approved)
    assert "PREVIOUS" in invoke("rollback", approved)
    assert "PREVIOUS" in invoke("rollback", approved)
    assert "PREVIOUS" in invoke("verify", evidence)
    # Restore candidate binding for the subsequent seven-role browser suite.
    assert "ACTIVE" in invoke("activate", approved)
    assert "ACTIVE" in invoke("verify", evidence)
    print("Real Keycloak client-only activation and rollback rehearsal passed.")
finally:
    token_file.unlink(missing_ok=True)
