"""Read-only aggregate identity inventory. Never changes accounts, roles or flows.
Canonical mobile usernames are NOT evidence of handset ownership.
"""
import argparse
import datetime
import importlib.util
import json
import pathlib
import re
import sys

def sibling(name, filename):
    spec = importlib.util.spec_from_file_location(name, pathlib.Path(__file__).with_name(filename))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module

flow = sibling("moon_flow", "sms-client-flow.py")
baseline = sibling("moon_baseline", "sms-runtime-baseline.py")
ROLES = ("product_owner", "evaluator", "company", "startup", "finance", "supervisor", "system_admin")
ORIGIN = "https://mahcsr.ir"
PAGE = 100

class ReadOnlyAdmin(flow.Admin):
    def call(self, path, method="GET", data=None):
        flow.require(method == "GET" and data is None, "Read-only inventory forbids mutation")
        return super().call(path, method, data)

def pages(admin, path, key="id", suffix=""):
    seen = set()
    offset = 0
    while True:
        rows = admin.call(path + "?first=" + str(offset) + "&max=" + str(PAGE) + suffix)
        flow.require(isinstance(rows, list) and len(rows) <= PAGE, "Invalid inventory page")
        if not rows:
            return
        for row in rows:
            identity = row[key]
            flow.require(isinstance(identity, str) and identity and identity not in seen,
                         "Duplicate or invalid inventory identity; repeat under maintenance lock")
            seen.add(identity)
            yield row
        offset += len(rows)

def count(admin):
    result = admin.call("/users/count")
    flow.require(type(result) is int and result >= 0, "Invalid user count")
    return result

def inspect(admin, origin=ORIGIN):
    realm, client = admin.current()
    blockers = []
    def check(ok, name):
        if not ok:
            blockers.append(name)
    check(realm.get("registrationAllowed") is False, "PUBLIC_REGISTRATION_ENABLED_OR_UNKNOWN")
    check(realm.get("sslRequired") in ("external", "all"), "REALM_TLS_POLICY")
    check((client.get("attributes") or {}).get("pkce.code.challenge.method") == "S256", "PKCE_S256_NOT_ENFORCED")
    check(client.get("redirectUris") == [origin + "/auth/callback"], "REDIRECT_CONTRACT")
    check(client.get("webOrigins") == [origin], "ORIGIN_CONTRACT")
    check(client.get("implicitFlowEnabled") is False, "IMPLICIT_FLOW_ENABLED_OR_UNKNOWN")
    check(client.get("serviceAccountsEnabled") is False, "WEB_SERVICE_ACCOUNT_ENABLED_OR_UNKNOWN")
    check(realm.get("browserFlow") != flow.ALIAS, "CANDIDATE_IS_REALM_DEFAULT")
    definitions = {r["name"] for r in pages(admin, "/roles")}
    check(set(ROLES) <= definitions, "DOMAIN_ROLE_DEFINITION_MISSING")
    flows = admin.call("/authentication/flows")
    flow.require(isinstance(flows, list), "Invalid flow inventory")
    candidate = [r["id"] for r in flows if r.get("alias") == flow.ALIAS]
    flow.require(len(candidate) <= 1, "Duplicate candidate flow")
    alternatives = 0
    other_bindings = 0
    for row in pages(admin, "/clients"):
        if row.get("id") == client["id"]:
            continue
        # Existing alternate clients may be legitimate. Record counts; do not
        # disable or classify them as approved based on their configuration.
        if row.get("enabled") is True and any(row.get(k) is True for k in
                ("standardFlowEnabled", "directAccessGrantsEnabled", "implicitFlowEnabled")):
            alternatives += 1
        if candidate and candidate[0] in (row.get("authenticationFlowBindingOverrides") or {}).values():
            other_bindings += 1
    check(other_bindings == 0, "CANDIDATE_BOUND_TO_OTHER_CLIENT")
    summaries = {role: {"enabled":0, "disabled":0, "noncanonicalEnabled":0,
                         "requiredActionEnabled":0} for role in ROLES}
    total = count(admin)
    observed = enabled = disabled = noncanonical = actions = legacy = no_role = 0
    for user in pages(admin, "/users", suffix="&briefRepresentation=false"):
        observed += 1
        if observed > total:
            raise RuntimeError("User count changed during inventory")
        active = user.get("enabled")
        flow.require(type(active) is bool, "User enabled state unavailable")
        username = user.get("username")
        flow.require(isinstance(username, str), "User username unavailable")
        required = user.get("requiredActions")
        flow.require(isinstance(required, list), "User required actions unavailable")
        canonical = bool(re.fullmatch(r"09[0-9]{9}", username))
        mappings = admin.call("/users/" + flow.quote(user["id"]) + "/role-mappings/realm/composite")
        flow.require(isinstance(mappings, list) and all(isinstance(r.get("name"), str) for r in mappings),
                     "Effective realm roles unavailable")
        names = {r["name"] for r in mappings}
        roles = names.intersection(ROLES)
        if active:
            enabled += 1
            noncanonical += bool(roles) and not canonical
            actions += bool(roles) and bool(required)
            legacy += "auditor" in names
            no_role += not roles
        else:
            disabled += 1
        for role in roles:
            summary = summaries[role]
            summary["enabled" if active else "disabled"] += 1
            if active:
                summary["noncanonicalEnabled"] += not canonical
                summary["requiredActionEnabled"] += bool(required)
    flow.require(observed == total == count(admin), "User inventory count drift; repeat under maintenance lock")
    realm_after, client_after = admin.current()
    flow.require(flow.state(realm, client) == flow.state(realm_after, client_after) and
                 client == client_after and realm == realm_after, "Realm/client drift during inventory")
    check(noncanonical == 0, "ENABLED_DOMAIN_ACCOUNT_NONCANONICAL")
    check(legacy == 0, "ENABLED_LEGACY_AUDITOR_ASSIGNMENT")
    return dict(status="BLOCKED" if blockers else "HUMAN_REVIEW_REQUIRED",
        blockers=blockers, counts=dict(total=total, enabled=enabled, disabled=disabled,
            enabledDomainNoncanonical=noncanonical, enabledDomainRequiredActions=actions,
            enabledLegacyAuditor=legacy, enabledWithoutDomainRole=no_role,
            otherEnabledInteractiveClients=alternatives, otherCandidateBindings=other_bindings),
        roles=summaries, humanChecks=dict(mobileOwnership="UNVERIFIED",
            apiSubjectAndMembership="UNVERIFIED", alternateClients="UNVERIFIED",
            requiredActions="UNVERIFIED", adminRecovery="UNVERIFIED", realSmsDelivery="UNVERIFIED"))

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--base", required=True)
    p.add_argument("--token-file", required=True)
    p.add_argument("--release-sha", required=True)
    p.add_argument("--snapshot", required=True, type=pathlib.Path)
    args = p.parse_args()
    flow.require(re.fullmatch("[a-f0-9]{40}", args.release_sha), "Exact release SHA required")
    flow.require(args.snapshot.is_absolute(), "Absolute private report path required")
    baseline.private_parent(args.snapshot)
    report = inspect(ReadOnlyAdmin(args.base, args.token_file))
    evidence = dict(version=1, releaseSha=args.release_sha,
        capturedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(), **report)
    digest = baseline.save(args.snapshot, evidence)
    print("Aggregate account inventory: " + report["status"] + "; SHA256=" + digest)
    # No names, numbers, subject IDs, tokens or raw realm representations emitted.
    if report["status"] == "BLOCKED":
        sys.exit(2)

if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, OSError, ValueError, KeyError, TypeError, AttributeError):
        sys.exit("Account inventory failed; inspect privately. No account changes performed.")
