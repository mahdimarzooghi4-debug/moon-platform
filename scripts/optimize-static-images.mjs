import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, existsSync, unlinkSync, renameSync } from "node:fs";
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
function pngStatus(data) {
  if (data.subarray(0,8).toString("hex") !== "89504e470d0a1a0a") return "not-png";
  let offset = 8;
  let animated = false;
  while (offset + 12 <= data.length) {
    const size = data.readUInt32BE(offset);
    const type = data.subarray(offset+4, offset+8).toString("ascii");
    if (size > data.length - offset - 12) return "invalid-png";
    if (type === "acTL") animated = true;
    if (type === "IEND") return size === 0 ? (animated ? "animated-png" : "static-png") : "invalid-png";
    offset += size + 12;
  }
  return "invalid-png";
}
// Regression checks for the previous build failure and animation guard.
const signature = Buffer.from("89504e470d0a1a0a", "hex");
const chunk = type => Buffer.concat([Buffer.alloc(4), Buffer.from(type), Buffer.alloc(4)]);
assert.equal(pngStatus(Buffer.concat([signature, chunk("IEND")])), "static-png");
assert.equal(pngStatus(Buffer.concat([signature, chunk("acTL"), chunk("IEND")])), "animated-png");
assert.equal(pngStatus(Buffer.concat([signature, Buffer.from("ffffffff4944415400000000", "hex")])), "invalid-png");
assert.equal(pngStatus(signature), "invalid-png");
assert.equal(pngStatus(Buffer.from("not a png")), "not-png");
walk(root);
const report = [];
for (const path of candidates) {
  const original = readFileSync(path);
  const target = path + ".webp";
  assert.ok(!existsSync(target), "Existing WebP variant collision: " + target);
  const status = pngStatus(original);
  if (status === "animated-png" || status === "invalid-png" || (/\.png$/i.test(path) && status === "not-png")) {
    const reason = status === "animated-png" ? "animated-original" : "invalid-source-original";
    if (reason === "invalid-source-original") console.warn("STATIC_IMAGE_REVIEW_REQUIRED:", relative(root,path), status);
    report.push({path: relative(root,path), original: original.length, status: reason});
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
  } catch (error) {
    // A legacy undecodable source is not a new optimized asset. Keep the
    // original unchanged and report it explicitly. Tool/setup failures and
    // invalid output assertions still fail the build.
    const diagnostic = String(error.stderr ?? "");
    if (error.status !== 1 || !/error (?:while )?(?:decoding|reading|opening)|cannot (?:read|decode)|invalid (?:png|jpeg|image)|libpng error|unsupported image/i.test(diagnostic)) throw error;
    console.warn("STATIC_IMAGE_REVIEW_REQUIRED:", relative(root,path), diagnostic.trim());
    report.push({path: relative(root,path), original: original.length, status: "undecodable-source-original"});
  } finally { if (existsSync(tmp)) unlinkSync(tmp); }
}
const optimized = report.filter(row => row.status === "optimized");
assert.ok(optimized.length > 0, "Expected at least one optimized static image");
const originalBytes = optimized.reduce((sum,row) => sum+row.original, 0);
const optimizedBytes = optimized.reduce((sum,row) => sum+row.optimized, 0);
assert.ok(optimizedBytes < originalBytes * 0.75);
console.log(JSON.stringify({candidates: report.length, optimized: optimized.length, originalBytes, optimizedBytes, report},null,2));
