"""Derive a disposable realm from the committed production roles and client."""
import json
import pathlib
import sys
import uuid

source, destination = map(pathlib.Path, sys.argv[1:])
realm = json.loads(source.read_text())
realm.update(sslRequired="none", resetPasswordAllowed=False, rememberMe=False,
             browserFlow="moon-sms-ci", bruteForceProtected=True)
realm["authenticationFlows"] = [{
    "alias": "moon-sms-ci", "description": "CI-only isolated OTP browser flow",
    "providerId": "basic-flow", "topLevel": True, "builtIn": False,
    "authenticationExecutions": [{
        "authenticator": "moon-sms-login", "authenticatorFlow": False,
        "requirement": "REQUIRED", "priority": 10, "userSetupAllowed": False
    }]
}]
web = next(c for c in realm["clients"] if c["clientId"] == "moon-web")
web.update(redirectUris=["http://127.0.0.1:18081/callback"],
           webOrigins=["http://127.0.0.1:18081"],
           attributes={"pkce.code.challenge.method": "S256"})
roles = [r["name"] for r in realm["roles"]["realm"]]
assert set(roles) == {"product_owner", "evaluator", "company", "startup", "finance", "supervisor", "system_admin"}
realm["users"] = [
    {"id": str(uuid.uuid5(uuid.NAMESPACE_URL, "moon-ci-" + role)),
     "username": f"091200001{i:02d}", "enabled": True, "firstName": "CI", "lastName": "Test",
     "email": f"ci-{i}@example.invalid", "emailVerified": True, "realmRoles": [role],
     "requiredActions": []}
    for i, role in enumerate(roles)
]
realm["users"].append({"username": "09120000999", "enabled": False,
                       "firstName": "Disabled", "lastName": "CI", "email": "disabled@example.invalid",
                       "realmRoles": ["startup"]})
realm["users"].append({"username": "09120000998", "enabled": True,
                       "firstName": "Required", "lastName": "CI", "email": "required@example.invalid",
                       "realmRoles": ["startup"], "requiredActions": ["UPDATE_PASSWORD"]})
destination.write_text(json.dumps(realm))
