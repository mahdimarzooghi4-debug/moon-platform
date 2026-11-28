import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync, unlinkSync, renameSync } from "node:fs";
import { join, relative } from "node:path";
import assert from "node:assert/strict";

// Optimize published static display assets only. Never touch source files,
// user-uploaded evidence, or other data outside dist/assets. Keep original URLs.
// Attempt files over 100 KiB; retain variants only with at least 25% savings.
// Use a display-specific budget for explicitly identified project photographs.
// Unclassified art retains its dimensions and alpha; the original is always available.
const root = "dist/assets";
const threshold = 100 * 1024;
const candidates = [];
const photoBudget = 150 * 1024;
const generalBudget = 250 * 1024;
const maxPhotoSide = 1280;
// These are existing static display photographs, including byte-identical aliases
// verified in the repository tree. Do not classify other images by filename alone.
const projectPhotos = new Set([
  "company-panel/project-family-health.png", "codia/LfY7LFAiEe.png",
  "company-panel/project-rural-women-employment.png", "codia/ojK6X1VFPh.png",
  "company-panel/project-teen-skills.png", "codia/udJSnUQToA.png"
]);
function pngDimensions(data) {
  assert.ok(data.length >= 33 && data.readUInt32BE(8) === 13 &&
    data.subarray(12,16).toString("ascii") === "IHDR", "PNG dimensions unavailable");
  const width = data.readUInt32BE(16), height = data.readUInt32BE(20);
  assert.ok(width > 0 && height > 0, "Invalid PNG dimensions");
  return {width, height};
}
function photoResize({width,height}) {
  if (Math.max(width,height) <= maxPhotoSide) return [];
  return width >= height ? ["-resize", String(maxPhotoSide), "0"] : ["-resize", "0", String(maxPhotoSide)];
}
assert.deepEqual(photoResize({width:2400,height:1200}), ["-resize","1280","0"]);
assert.deepEqual(photoResize({width:600,height:1800}), ["-resize","0","1280"]);
assert.deepEqual(photoResize({width:1280,height:900}), []);
assert.deepEqual(photoResize({width:320,height:240}), []);

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
    const asset = relative(root,path);
    const photo = projectPhotos.has(asset);
    const png = /\.png$/i.test(path);
    const budget = photo ? photoBudget : generalBudget;
    const resize = photo ? photoResize(pngDimensions(original)) : [];
    let best = null;
    let encoding = null;
    const encode = (name, flags) => {
      execFileSync("cwebp", ["-quiet", "-m", "6", "-metadata", "all", ...resize, ...flags, path, "-o", tmp]);
      const data = readFileSync(tmp);
      assert.equal(data.subarray(0,4).toString(), "RIFF");
      assert.equal(data.subarray(8,12).toString(), "WEBP");
      if (best === null || data.length < best.length) { best = data; encoding = name; }
    };
    // Lossless art is retained whenever it fits the budget. Large outputs
    // are compared against a high-quality alternative even if lossless saved
    // 25% already. Known photos use a bounded quality ladder, never below 78.
    if (png && !photo) encode("lossless", ["-lossless", "-z", "6"]);
    if (best === null || best.length > budget || best.length >= original.length * 0.75) {
      encode(photo ? "photo-q85" : "q85", ["-q", "85", "-sharp_yuv", "-alpha_q", "100"]);
    }
    if (photo && best.length > budget) encode("photo-q78", ["-q", "78", "-sharp_yuv", "-alpha_q", "100"]);
    if (best.length < original.length * 0.75) {
      writeFileSync(tmp, best);
      renameSync(tmp, target);
      report.push({path: asset, original: original.length, optimized: best.length, encoding, resized: resize.length > 0, budget, overBudget: best.length > budget, status: "optimized"});
      if (best.length > budget) console.warn("STATIC_IMAGE_BUDGET_REVIEW:", asset, best.length, budget);
    } else {
      report.push({path: asset, original: original.length, budget, overBudget: original.length > budget, status: "original-smaller"});
      if (original.length > budget) console.warn("STATIC_IMAGE_BUDGET_REVIEW:", asset, original.length, budget);
    }
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
const photos = optimized.filter(row => projectPhotos.has(row.path));
assert.equal(photos.length, projectPhotos.size, "All identified project photos must have WebP variants");
console.log(JSON.stringify({candidates: report.length, optimized: optimized.length, originalBytes, optimizedBytes,
  photoOriginalBytes: photos.reduce((sum,row) => sum+row.original,0),
  photoOptimizedBytes: photos.reduce((sum,row) => sum+row.optimized,0),
  overBudget: report.filter(row => row.overBudget).length,
  reviewRequired: report.filter(row => /source-original$/.test(row.status)).length,
  report},null,2));
