"""Read-only aggregate inventory fixtures; never contact production."""
import importlib.util
import json
import pathlib

spec = importlib.util.spec_from_file_location("readiness", pathlib.Path(__file__).with_name("sms-account-readiness.py"))
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
m.PAGE = 2

class Fake:
    def __init__(self):
        self.realm = dict(id="realm", browserFlow="browser", registrationAllowed=False, sslRequired="external")
        self.client = dict(id="web", redirectUris=[m.ORIGIN+"/auth/callback"], webOrigins=[m.ORIGIN],
            implicitFlowEnabled=False, serviceAccountsEnabled=False, attributes={"pkce.code.challenge.method":"S256"})
        self.users = [
            dict(id="u1", username="09120000001", enabled=True, requiredActions=[]),
            dict(id="u2", username="not-a-mobile", enabled=True, requiredActions=["UPDATE_PASSWORD"]),
            dict(id="u3", username="09120000003", enabled=False, requiredActions=[])]
        self.roles = {"u1":["company"], "u2":["system_admin","auditor"], "u3":["startup"]}
        self.calls=[]
    def current(self):
        return self.realm.copy(), self.client.copy()
    def call(self, path, method="GET", data=None):
        assert method=="GET" and data is None
        self.calls.append(path)
        if path=="/users/count":
            return len(self.users)
        if path=="/authentication/flows":
            return [{"id":"candidate","alias":m.flow.ALIAS}]
        if path.endswith("/role-mappings/realm/composite"):
            return [{"name":r} for r in self.roles[path.split("/")[2]]]
        prefix, query=path.split("?")
        params=dict(x.split("=") for x in query.split("&"))
        rows={"/users":self.users,"/roles":[{"id":r,"name":r} for r in m.ROLES],
              "/clients":[self.client,{"id":"other","enabled":True,"standardFlowEnabled":True,
                   "authenticationFlowBindingOverrides":{"browser":"candidate"}}]}[prefix]
        offset=int(params["first"])
        return rows[offset:offset+int(params["max"])]

admin=Fake()
report=m.inspect(admin)
assert report["status"]=="BLOCKED"
assert set(report["blockers"])=={"ENABLED_DOMAIN_ACCOUNT_NONCANONICAL","ENABLED_LEGACY_AUDITOR_ASSIGNMENT","CANDIDATE_BOUND_TO_OTHER_CLIENT"}
assert report["counts"]["total"]==3
assert report["roles"]["system_admin"]["requiredActionEnabled"]==1
assert report["roles"]["startup"]["disabled"]==1
assert report["humanChecks"]["mobileOwnership"]=="UNVERIFIED"
raw=json.dumps(report)
assert "09120000001" not in raw and "not-a-mobile" not in raw and "u1" not in raw
assert "/users?first=2&max=2&briefRepresentation=false" in admin.calls
admin.users[1]["username"]="09120000002"
admin.roles["u2"]=["system_admin"]
admin.call_original=admin.call
def no_other_binding(path,method="GET",data=None):
    rows=admin.call_original(path,method,data)
    if path.startswith("/clients?"):
        for row in rows:
            if row["id"]=="other":
                row["authenticationFlowBindingOverrides"]={}
    return rows
admin.call=no_other_binding
assert m.inspect(admin)["status"]=="HUMAN_REVIEW_REQUIRED"
admin.client["attributes"]={}
assert "PKCE_S256_NOT_ENFORCED" in m.inspect(admin)["blockers"]
admin.users.append(admin.users[0])
try:
    m.inspect(admin)
except RuntimeError:
    pass
else:
    raise AssertionError("duplicate user accepted")
print("Read-only account inventory contract tests passed")
