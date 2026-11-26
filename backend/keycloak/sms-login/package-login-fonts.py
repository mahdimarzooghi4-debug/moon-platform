"""Build-only packaging of the exact Fontsource dependency already locked by Moon.
No browser CDN, runtime download, unverified archive extraction or font fallback
masquerading as a successful build. Keep the upstream OFL license in the JAR.
"""
import base64
import hashlib
import io
import re
import sys
import tarfile
import urllib.request
import zipfile
from pathlib import Path

URL = "https://registry.npmjs.org/@fontsource/vazirmatn/-/vazirmatn-5.3.0.tgz"
INTEGRITY = "XC/2yN2r5gwhFT3klSuWaqncODX2DOfRYfNmbyzgtWYxHxMC+tcoaX+tgggrm6hSkEgpR1TuSDEf1PiI91G7qg=="
PREFIX = "theme-resources/resources/moon-fonts/"
MAX_ARCHIVE = 16 * 1024 * 1024


def package(jar: Path, raw: bytes) -> None:
    if hashlib.sha512(raw).digest() != base64.b64decode(INTEGRITY):
        raise ValueError("Vazirmatn package integrity mismatch")
    assets = {}
    with tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz") as archive:
        def read(name):
            member = archive.getmember("package/" + name)
            if not member.isfile() or member.size > MAX_ARCHIVE:
                raise ValueError("Unexpected package member")
            with archive.extractfile(member) as source:
                return source.read()

        styles = []
        for weight in (400, 600, 700):
            css = read(f"{weight}.css").decode("utf-8")
            refs = re.findall(r"url\(\s*['\"]?\./(files/[A-Za-z0-9_.-]+\.woff2?)['\"]?\s*\)", css)
            if not refs or len(refs) != len(re.findall(r"url\s*\(", css, re.I)):
                raise ValueError("Unexpected font stylesheet URLs")
            if not any(f"arabic-{weight}-normal.woff2" in ref for ref in refs):
                raise ValueError("Missing Persian-compatible Arabic subset")
            for ref in refs:
                assets[ref] = read(ref)
            styles.append(css)
        assets["fonts.css"] = "\n".join(styles).encode("utf-8")
        assets["LICENSE"] = read("LICENSE")

    with zipfile.ZipFile(jar, "a", compression=zipfile.ZIP_DEFLATED) as target:
        if any(name.startswith(PREFIX) for name in target.namelist()):
            raise ValueError("Font resources already exist")
        for name, content in sorted(assets.items()):
            target.writestr(PREFIX + name, content)


if __name__ == "__main__":
    with urllib.request.urlopen(URL, timeout=60) as response:
        raw = response.read(MAX_ARCHIVE + 1)
    if len(raw) > MAX_ARCHIVE:
        raise ValueError("Font package exceeds size bound")
    package(Path(sys.argv[1]), raw)
