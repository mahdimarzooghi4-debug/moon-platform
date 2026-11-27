"""Fixture tests for exact IDs, drift, missing images and private evidence."""
import importlib.util
import os
import pathlib
import tempfile
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("baseline", pathlib.Path(__file__).with_name("sms-runtime-baseline.py"))
baseline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(baseline)
sha = "a" * 40
rows = {}
for i, service in enumerate(baseline.SERVICES, 1):
    rows[service] = dict(containerId=f"{i:064x}", imageId="sha256:"+f"{i+10:064x}",
        imageRef="moon-platform/"+service+":"+sha if service in ("api", "web") else "fixture/"+service+":v1")
def fake(*args):
    if args[0] == "ps":
        prefix = "label=com.docker.compose.service="
        assert args[-1].startswith(prefix)
        assert "label=com.docker.compose.project=" + baseline.PROJECT in args
        return rows[args[-1].removeprefix(prefix)]["containerId"]
    if args[0] == "inspect":
        item = next(v for v in rows.values() if v["containerId"] == args[-1])
        return "|".join([item["containerId"],item["imageId"],item["imageRef"],"true"])
    if args[:2] == ("image", "inspect"):
        return args[-1] if args[-1] in {v["imageId"] for v in rows.values()} else ""
    raise AssertionError("unexpected Docker command")
def reject(fn):
    try:
        fn()
    except (ValueError, OSError):
        return
    raise AssertionError("unsafe evidence accepted")

with tempfile.TemporaryDirectory() as tmp, patch.object(baseline, "run", side_effect=fake):
    path = pathlib.Path(tmp)/"runtime.json"
    observed = baseline.collect()
    assert observed == rows
    digest = baseline.save(path, dict(version=1, project=baseline.PROJECT, releaseSha=sha, services=observed))
    assert baseline.read(path,digest,sha) == rows
    reject(lambda: baseline.save(path,{}))
    reject(lambda: baseline.read(path,"0"*64,sha))
    reject(lambda: baseline.read(path,digest,"b"*40))
    os.chmod(path,0o644)
    reject(lambda: baseline.read(path,digest,sha))
    os.chmod(path,0o600)
    old = rows["api"]["imageId"]
    rows["api"]["imageId"] = "sha256:"+"f"*64
    assert baseline.collect() != observed
    reject(lambda: baseline.image_exists(old))
    rows["api"]["imageRef"] = "moon-platform/api:latest"
    reject(baseline.collect)
    with patch.object(baseline,"run",return_value=""):
        reject(lambda: baseline.observe("web"))
    with patch.object(baseline,"run",return_value="a"*64+"\n"+"b"*64):
        reject(lambda: baseline.observe("web"))
print("Runtime baseline evidence and failure-boundary tests passed")
