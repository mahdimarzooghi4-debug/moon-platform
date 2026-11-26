"""Fast fixture tests, separate from the real Docker bundle workflow."""
import importlib.util
import io
import json
import pathlib
import tarfile
import tempfile

spec = importlib.util.spec_from_file_location("bundle", pathlib.Path(__file__).with_name("sms-release-bundle.py"))
bundle = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bundle)
sha = "a" * 40

def add(t, name, data):
    member = tarfile.TarInfo(name)
    member.size = len(data)
    t.addfile(member, io.BytesIO(data))

def archive(path, bad=None):
    with tarfile.open(path, "w:gz") as t:
        entries = []
        for service, tag in bundle.tags(sha).items():
            name = service + ".json"
            add(t, name, json.dumps({"service": service}).encode())
            layer = service + "/layer.tar"
            add(t, layer, b"test-layer")
            entries.append({"Config": name, "RepoTags": [tag], "Layers": [layer]})
        if bad == "tag":
            entries[0]["RepoTags"] = ["wrong:latest"]
        if bad == "missing":
            entries.pop()
        if bad == "traversal":
            add(t, "../unsafe", b"unsafe")
        if bad == "layer":
            entries[0]["Layers"] = ["missing.tar"]
        add(t, "manifest.json", json.dumps(entries).encode())

with tempfile.TemporaryDirectory() as tmp:
    p = pathlib.Path(tmp) / ("moon-sms-release-" + sha + ".tar.gz")
    archive(p)
    m = bundle.make_manifest(sha, p)
    assert m["releaseSha"] == sha and len(m["images"]) == 3
    assert len(set(i["id"] for i in m["images"].values())) == 3
    for bad in ("tag", "missing", "traversal", "layer"):
        archive(p, bad)
        try:
            bundle.make_manifest(sha, p)
        except ValueError:
            pass
        else:
            raise AssertionError("Bad archive accepted: " + bad)
print("Release bundle contract tests passed")
