import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, unlinkSync, renameSync } from "node:fs";
import { join, relative } from "node:path";
import assert from "node:assert/strict";

// Optimize published static display assets only. Never touch source files,
// user-uploaded evidence, or other data outside dist/assets. Keep original URLs.
// A conservative first-pass budget: attempt files over 100 KiB, retain a
// variant only when it saves at least 25%. Preserve pixel dimensions and metadata.
const root = "dist/assets";
const threshold = 100 * 1024;
const candidates = [];
function walk(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    const path = join(dir, item.name);
    if (item.isDirectory()) walk(path);
    else if (item.isFile() && /\.(png|jpe?g)$/i.test(item.name) && statSync(path).size > threshold) candidates.push(path);
  }
}
function isAnimatedPng(data) {
  if (data.subarray(0,8).toString("hex") !== "89504e470d0a1a0a") return false;
  let offset = 8;
  while (offset + 12 <= data.length) {
    const size = data.readUInt32BE(offset);
    const type = data.subarray(offset+4, offset+8).toString("ascii");
    assert.ok(size <= data.length - offset - 12, "Invalid PNG chunk size");
    if (type === "acTL") return true;
    if (type === "IEND") return false;
    offset += size + 12;
  }
  throw new Error("Invalid PNG chunk sequence");
}
walk(root);
const report = [];
for (const path of candidates) {
  const original = readFileSync(path);
  const target = path + ".webp";
  assert.ok(!existsSync(target), "Existing WebP variant collision: " + target);
  if (isAnimatedPng(original)) {
    report.push({path: relative(root,path), original: original.length, status: "animated-original"});
    continue;
  }
  const tmp = target + ".partial";
  try {
    // Prefer lossless for PNG artwork. Use visually high-quality encoding if
    // lossless cannot reach the savings target. Keep alpha and metadata.
    const png = /\.png$/i.test(path);
    const encode = flags => execFileSync("cwebp", ["-quiet", "-m", "6", "-metadata", "all", ...flags, path, "-o", tmp]);
    if (png) encode(["-lossless", "-z", "6"]);
    if (!png || statSync(tmp).size >= original.length * 0.75) encode(["-q", "85", "-alpha_q", "100"]);
    const data = readFileSync(tmp);
    assert.equal(data.subarray(0,4).toString(), "RIFF");
    assert.equal(data.subarray(8,12).toString(), "WEBP");
    if (data.length < original.length * 0.75) {
      renameSync(tmp, target);
      report.push({path: relative(root,path), original: original.length, optimized: data.length, status: "optimized"});
    } else report.push({path: relative(root,path), original: original.length, status: "original-smaller"});
  } finally { if (existsSync(tmp)) unlinkSync(tmp); }
}
const optimized = report.filter(row => row.status === "optimized");
assert.ok(optimized.length > 0, "Expected at least one optimized static image");
const originalBytes = optimized.reduce((sum,row) => sum+row.original, 0);
const optimizedBytes = optimized.reduce((sum,row) => sum+row.optimized, 0);
assert.ok(optimizedBytes < originalBytes * 0.75);
console.log(JSON.stringify({candidates: report.length, optimized: optimized.length, originalBytes, optimizedBytes, report},null,2));
