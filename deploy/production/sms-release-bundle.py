"""Create/verify an exact-SHA three-image release manifest, without deploying.
No secrets are accepted, no archive is extracted, and no Docker load is performed.
"""
import argparse
import gzip
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import tarfile

SERVICES = ("api", "web", "keycloak")
def require(ok, reason):
    if not ok:
        raise ValueError(reason)

def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()

def tags(sha):
    return {s: "moon-platform/" + s + ":" + sha for s in SERVICES}

def inspect_archive(path, expected):
    # docker save manifest.json identifies each config blob; verify the blob's
    # hash directly from the archive, without loading or extracting any layer.
    with tarfile.open(path, "r:gz") as t:
        members = t.getmembers()
        names = {m.name: m for m in members}
        require(len(names) == len(members), "Duplicate archive paths")
        for m in members:
            p = pathlib.PurePosixPath(m.name)
            require(not p.is_absolute() and ".." not in p.parts and (m.isfile() or m.isdir()),
                    "Unexpected archive member")
        def read(name, maxsize):
            m = names.get(name)
            require(m is not None and m.isfile() and 0 < m.size <= maxsize, "Missing or invalid manifest/config")
            return t.extractfile(m).read()
        entries = json.loads(read("manifest.json", 1024 * 1024))
        require(isinstance(entries, list) and len(entries) == len(expected), "Unexpected image count")
        found = {}
        for entry in entries:
            refs = entry.get("RepoTags")
            require(isinstance(refs, list) and len(refs) == 1 and refs[0] in expected.values(), "Unexpected image tag")
            tag = refs[0]
            require(tag not in found, "Duplicate image tag")
            config = read(entry["Config"], 4 * 1024 * 1024)
            config_id = "sha256:" + hashlib.sha256(config).hexdigest()
            require(all(layer in names and names[layer].isfile() for layer in entry["Layers"]), "Image layer missing")
            found[tag] = config_id
        require(set(found) == set(expected.values()), "Incomplete release bundle")
        return {service: {"tag": tag, "id": found[tag]} for service, tag in expected.items()}

def make_manifest(sha, path):
    require(re.fullmatch(r"[a-f0-9]{40}", sha), "Exact SHA required")
    require(path.name == f"moon-sms-release-{sha}.tar.gz", "Unexpected archive name")
    require(path.is_file() and not path.is_symlink(), "Archive must be a regular file")
    return {"version": 1, "releaseSha": sha, "archive": path.name,
            "archiveSha256": digest(path), "images": inspect_archive(path, tags(sha))}

def main():
    p = argparse.ArgumentParser()
    p.add_argument("command", choices=("create", "verify"))
    p.add_argument("--release-sha", required=True)
    p.add_argument("--archive", type=pathlib.Path, required=True)
    p.add_argument("--manifest", type=pathlib.Path, required=True)
    args = p.parse_args()
    actual = make_manifest(args.release_sha, args.archive)
    if args.command == "create":
        # Confirm actual local build IDs before attesting the archive.
        for image in actual["images"].values():
            actual_id = subprocess.check_output(["docker", "image", "inspect", "--format", "{{.Id}}", image["tag"]], text=True).strip()
            require(actual_id == image["id"], "Local image and archive mismatch")
        with args.manifest.open("x") as f:
            json.dump(actual, f, sort_keys=True, indent=2)
            f.write("\n")
    else:
        require(args.manifest.is_file() and not args.manifest.is_symlink()
                and args.manifest.stat().st_size <= 65536, "Invalid release manifest")
        require(json.loads(args.manifest.read_text()) == actual, "Release manifest mismatch")
    print("Exact-SHA three-image release bundle verified; no deployment performed.")

if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, KeyError, TypeError, tarfile.TarError, subprocess.CalledProcessError):
        sys.exit("Release bundle validation failed; inspect the artifact privately.")
