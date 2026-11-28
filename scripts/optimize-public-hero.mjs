import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, statSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import assert from "node:assert/strict";
import vm from "node:vm";

// Preserve the original source and dev behavior; produce WebP only in dist.
// Install cwebp (Ubuntu package webp; Alpine libwebp-tools) before npm run build.
const source = "public/assets/codia/rO73Py6N6q.png";
const target = "dist/assets/mah-hero/landing.webp";
mkdirSync(dirname(target), { recursive: true });
execFileSync("cwebp", ["-q", "82", "-m", "6", source, "-o", target], { stdio: "inherit" });
const bytes = readFileSync(target);
assert.equal(bytes.subarray(0, 4).toString(), "RIFF");
assert.equal(bytes.subarray(8, 12).toString(), "WEBP");
assert.ok(bytes.length < statSync(source).size * 0.75, "Hero must be at least 25% smaller");
const index = "dist/index.html";
const original = readFileSync(index, "utf8");
const oldPath = "/assets/codia/rO73Py6N6q.png";
const newPath = "/assets/mah-hero/landing.webp";
assert.equal(original.split(oldPath).length, 2, "Expected exactly one landing preload path");
const html = original.replace(oldPath, newPath);
writeFileSync(index, html);
const script = html.match(/<script>\s*\/\/ Start only the current route's hero request[\s\S]*?<\/script>/);
assert.ok(script, "Route-specific preload script missing");
const expected = new Map([
  ["/", "landing"], ["/startups", "startups"], ["/for-startups", "startups"],
  ["/companies", "companies"], ["/for-companies", "companies"], ["/about/", "about"],
  ["/panel/company", null], ["/news", null], ["/constructor", null]
]);
for (const [pathname, hero] of expected) {
  const links = [];
  vm.runInNewContext(script[0].replace(/^<script>|<\/script>$/g, ""), {
    location: { pathname },
    document: {
      createElement: () => ({ setAttribute(name, value) { this[name] = value; } }),
      head: { appendChild: link => links.push(link) }
    }
  });
  assert.equal(links.length, hero ? 1 : 0, pathname);
  if (hero) {
    assert.equal(links[0].href, "/assets/mah-hero/" + hero + ".webp");
    assert.equal(links[0].rel, "preload");
    assert.equal(links[0].as, "image");
    assert.equal(links[0].fetchpriority, "high");
    assert.ok(statSync("dist" + links[0].href).size > 0);
  }
}
console.log("Public hero WebP bytes:", bytes.length, "of", statSync(source).size);
