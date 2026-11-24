export type AdminNewsItem = {
  id: string;
  title: string;
  summary: string;
  status: "published" | "draft";
  updatedAt: string;
};

export type HeroVideoMeta = {
  name: string;
  type: string;
  size: number;
  updatedAt: string;
};

export const ADMIN_NEWS_KEY = "mah.admin.news.v1";
export const ADMIN_NEWS_CHANGED = "mah:admin-news-changed";
export const HERO_VIDEO_META_KEY = "mah.admin.heroVideoMeta.v1";
export const HERO_VIDEO_CHANGED = "mah:admin-hero-video-changed";

const sampleNewsIds = new Set(["news-impact-1404", "news-startups", "news-funding"]);

function validNews(value: unknown): value is AdminNewsItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<AdminNewsItem>;
  return Boolean(
    typeof item.id === "string" &&
      typeof item.title === "string" &&
      typeof item.summary === "string" &&
      (item.status === "published" || item.status === "draft") &&
      typeof item.updatedAt === "string",
  );
}

export function readAdminNews(): AdminNewsItem[] {
  try {
    const raw = localStorage.getItem(ADMIN_NEWS_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(validNews).filter((item) => !sampleNewsIds.has(item.id));
  } catch {
    return [];
  }
}

function writeNews(items: AdminNewsItem[]) {
  localStorage.setItem(ADMIN_NEWS_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(ADMIN_NEWS_CHANGED));
}

export function saveAdminNews(input: Omit<AdminNewsItem, "updatedAt">) {
  const item: AdminNewsItem = { ...input, updatedAt: new Date().toISOString() };
  const current = readAdminNews();
  const index = current.findIndex((news) => news.id === item.id);
  const next = [...current];
  if (index >= 0) next[index] = item;
  else next.unshift(item);
  writeNews(next);
  return item;
}

export function deleteAdminNews(id: string) {
  writeNews(readAdminNews().filter((item) => item.id !== id));
}

const DB_NAME = "mah-admin-content";
const DB_VERSION = 1;
const STORE_NAME = "assets";
const HERO_KEY = "hero-video";
const newsImageKey = (id: string) => `news-image:${id}`;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function putAsset(key: string, value: Blob) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(value, key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
}

async function readAsset(key: string): Promise<Blob | null> {
  const db = await openDb();
  const result = await new Promise<Blob | null>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const request = transaction.objectStore(STORE_NAME).get(key);
    request.onsuccess = () => resolve(request.result instanceof Blob ? request.result : null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return result;
}

async function deleteAsset(key: string) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).delete(key);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
}

export function saveNewsImage(id: string, file: File) {
  return putAsset(newsImageKey(id), file);
}

export function loadNewsImage(id: string) {
  return readAsset(newsImageKey(id));
}

export function removeNewsImage(id: string) {
  return deleteAsset(newsImageKey(id));
}

export function readHeroVideoMeta(): HeroVideoMeta | null {
  try {
    const raw = localStorage.getItem(HERO_VIDEO_META_KEY);
    return raw ? (JSON.parse(raw) as HeroVideoMeta) : null;
  } catch {
    return null;
  }
}

export async function saveHeroVideo(file: File) {
  await putAsset(HERO_KEY, file);
  const meta: HeroVideoMeta = { name: file.name, type: file.type, size: file.size, updatedAt: new Date().toISOString() };
  localStorage.setItem(HERO_VIDEO_META_KEY, JSON.stringify(meta));
  window.dispatchEvent(new CustomEvent(HERO_VIDEO_CHANGED));
  return meta;
}

export function loadHeroVideo(): Promise<Blob | null> {
  return readAsset(HERO_KEY);
}

export async function removeHeroVideo() {
  await deleteAsset(HERO_KEY);
  localStorage.removeItem(HERO_VIDEO_META_KEY);
  window.dispatchEvent(new CustomEvent(HERO_VIDEO_CHANGED));
}
