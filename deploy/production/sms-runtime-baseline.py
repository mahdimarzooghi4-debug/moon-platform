"""Read-only runtime image evidence for Moon release/recovery. Never loads or starts images."""
import argparse
import datetime
import hashlib
import json
import os
import pathlib
import re
import stat
import subprocess
import sys

PROJECT = "moon-platform"
SERVICES = ("api", "web", "keycloak", "gateway", "moon-db", "keycloak-db")
SHA = re.compile(r"[a-f0-9]{40}")
IMAGE_ID = re.compile(r"sha256:[a-f0-9]{64}")
CONTAINER_ID = re.compile(r"[a-f0-9]{64}")
IMAGE_REF = re.compile(r"[A-Za-z0-9][A-Za-z0-9_./:@-]{0,255}")

def require(condition, message):
    if not condition:
        raise ValueError(message)

def run(*args):
    return subprocess.check_output(["docker", *args], stderr=subprocess.DEVNULL,
                                   text=True, timeout=30).strip()

def image_exists(image_id):
    require(isinstance(image_id, str) and IMAGE_ID.fullmatch(image_id), "Invalid immutable image ID")
    require(run("image", "inspect", "--format", "{{.Id}}", image_id) == image_id,
            "Previous image unavailable or mismatched")

def observe(service):
    ids = run("ps", "-a", "--no-trunc", "--quiet", "--filter",
              "label=com.docker.compose.project=" + PROJECT,
              "--filter", "label=com.docker.compose.service=" + service).splitlines()
    require(len(ids) == 1 and CONTAINER_ID.fullmatch(ids[0]), "Missing or ambiguous container: " + service)
    # Select only nonsecret fields. Never inspect full JSON (contains environment).
    fmt = "{{.Id}}|{{.Image}}|{{.Config.Image}}|{{.State.Running}}"
    fields = run("inspect", "--format", fmt, ids[0]).split("|")
    require(len(fields) == 4 and fields[0] == ids[0] and fields[3] == "true",
            "Container not running: " + service)
    item = dict(containerId=fields[0], imageId=fields[1], imageRef=fields[2])
    require(IMAGE_REF.fullmatch(item["imageRef"]), "Unexpected image reference")
    if service in ("api", "web"):
        require(re.fullmatch("moon-platform/" + service + r":[a-f0-9]{40}", item["imageRef"]),
                "Prior API/web release must have exact-SHA reference")
    image_exists(item["imageId"])
    return item

def collect():
    return {service: observe(service) for service in SERVICES}

def private_parent(path):
    info = path.parent.stat()
    require(not path.parent.is_symlink() and stat.S_ISDIR(info.st_mode)
            and stat.S_IMODE(info.st_mode) == 0o700 and info.st_uid == os.getuid(),
            "Use an operator-owned mode-700 evidence directory")

def save(path, data):
    private_parent(path)
    raw = (json.dumps(data, sort_keys=True, indent=2) + "\n").encode()
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW, 0o600)
    with os.fdopen(fd, "wb") as file:
        file.write(raw)
        file.flush()
        os.fsync(file.fileno())
    parent = os.open(path.parent, os.O_RDONLY | os.O_DIRECTORY)
    try:
        os.fsync(parent)
    finally:
        os.close(parent)
    return hashlib.sha256(raw).hexdigest()

def read(path, digest, sha):
    private_parent(path)
    fd = os.open(path, os.O_RDONLY | os.O_NOFOLLOW)
    with os.fdopen(fd, "rb") as file:
        info = os.fstat(file.fileno())
        require(stat.S_ISREG(info.st_mode) and stat.S_IMODE(info.st_mode) == 0o600
                and info.st_uid == os.getuid(), "Invalid evidence file protection")
        raw = file.read(65537)
    require(len(raw) <= 65536 and hashlib.sha256(raw).hexdigest() == digest, "Evidence digest mismatch")
    obj = json.loads(raw)
    require(obj.get("version") == 1 and obj.get("project") == PROJECT and obj.get("releaseSha") == sha,
            "Evidence release/project mismatch")
    services = obj["services"]
    require(set(services) == set(SERVICES), "Incomplete image baseline")
    for service, item in services.items():
        require(set(item) == {"containerId", "imageId", "imageRef"}
                and CONTAINER_ID.fullmatch(item["containerId"])
                and IMAGE_ID.fullmatch(item["imageId"]) and IMAGE_REF.fullmatch(item["imageRef"]),
                "Malformed image baseline")
        if service in ("api", "web"):
            require(re.fullmatch("moon-platform/" + service + r":[a-f0-9]{40}", item["imageRef"]),
                    "Malformed prior release reference")
    return services

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=("capture", "assert-baseline", "verify-images"))
    parser.add_argument("--release-sha", required=True)
    parser.add_argument("--snapshot", required=True, type=pathlib.Path)
    parser.add_argument("--snapshot-digest")
    args = parser.parse_args()
    require(SHA.fullmatch(args.release_sha), "Exact candidate SHA required")
    require(args.snapshot.is_absolute(), "Absolute private snapshot path required")
    if args.command == "capture":
        private_parent(args.snapshot)
        require(not os.path.lexists(args.snapshot), "Snapshot already exists")
        before = collect()
        require(collect() == before, "Runtime changed during capture")
        digest = save(args.snapshot, dict(version=1, project=PROJECT, releaseSha=args.release_sha,
            capturedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(), services=before))
        print("Runtime image baseline captured; SHA256=" + digest)
        return
    require(args.snapshot_digest is not None and re.fullmatch(r"[a-f0-9]{64}", args.snapshot_digest),
            "Exact evidence digest required")
    before = read(args.snapshot, args.snapshot_digest, args.release_sha)
    for item in before.values():
        image_exists(item["imageId"])
    if args.command == "assert-baseline":
        require(collect() == before, "Runtime drift since snapshot; refuse release")
    print("Pinned local image evidence verified; no runtime changes or restore performed.")

if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, KeyError, TypeError, subprocess.SubprocessError):
        sys.exit("Runtime baseline check failed; inspect privately. No runtime change performed.")
