import { useEffect, useState } from "react";
import {
  deleteAdminTrustedCompany,
  deleteAdminTrustedCompanyLogo,
  listAdminTrustedCompanies,
  loadAdminTrustedCompanyLogo,
  saveAdminTrustedCompany,
  saveAdminTrustedCompanyLogo,
  type AdminTrustedCompany,
} from "../management-api";

const numberFa = new Intl.NumberFormat("fa-IR");
const allowedLogoTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

export default function TrustedCompaniesEditor() {
  const [items, setItems] = useState<AdminTrustedCompany[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [sortOrder, setSortOrder] = useState(1);
  const [isPublished, setIsPublished] = useState(true);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const refresh = async (selectId?: number | null) => {
    const next = await listAdminTrustedCompanies();
    setItems(next);
    const selected = next.find((item) => item.id === (selectId ?? selectedId)) ?? next[0];
    setSelectedId(selected?.id ?? null);
    setName(selected?.name ?? "");
    setSortOrder(selected?.sortOrder ?? next.length + 1);
    setIsPublished(selected?.isPublished ?? true);
    return next;
  };

  useEffect(() => {
    let active = true;
    listAdminTrustedCompanies().then((next) => {
      if (!active) return;
      setItems(next);
      const selected = next[0];
      setSelectedId(selected?.id ?? null);
      setName(selected?.name ?? "");
      setSortOrder(selected?.sortOrder ?? 1);
      setIsPublished(selected?.isPublished ?? true);
    }).catch(() => {
      if (active) setMessage("فهرست شرکت‌ها از سرور دریافت نشد.");
    });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    let active = true;
    let objectUrl = "";
    if (logoFile) {
      objectUrl = URL.createObjectURL(logoFile);
      setLogoUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    if (selectedId === null || !items.find((item) => item.id === selectedId)?.hasLogo) {
      setLogoUrl("");
      return;
    }
    loadAdminTrustedCompanyLogo(selectedId).then((blob) => {
      if (!active || !blob) return;
      objectUrl = URL.createObjectURL(blob);
      setLogoUrl(objectUrl);
    }).catch(() => { if (active) setLogoUrl(""); });
    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [items, logoFile, selectedId]);

  const select = (item: AdminTrustedCompany) => {
    setSelectedId(item.id);
    setName(item.name);
    setSortOrder(item.sortOrder);
    setIsPublished(item.isPublished);
    setLogoFile(null);
    setMessage("");
  };

  const createNew = () => {
    setSelectedId(null);
    setName("");
    setSortOrder(items.length + 1);
    setIsPublished(true);
    setLogoFile(null);
    setLogoUrl("");
    setMessage("نام شرکت را وارد و ذخیره کنید.");
  };

  const save = async () => {
    if (!name.trim() || busy) { if (!name.trim()) setMessage("نام شرکت الزامی است."); return; }
    if (logoFile && !allowedLogoTypes.has(logoFile.type)) { setMessage("لوگو باید JPEG، PNG یا WebP باشد."); return; }
    if (logoFile && logoFile.size > 2 * 1024 * 1024) { setMessage("حجم لوگو باید حداکثر ۲ مگابایت باشد."); return; }
    setBusy(true);
    setMessage("");
    try {
      const saved = await saveAdminTrustedCompany(selectedId, { name: name.trim(), sortOrder, isPublished });
      if (logoFile) await saveAdminTrustedCompanyLogo(saved.id, logoFile);
      setLogoFile(null);
      await refresh(saved.id);
      setMessage("اطلاعات شرکت ذخیره شد.");
    } catch {
      setMessage("ذخیره اطلاعات شرکت در سرور انجام نشد.");
    } finally { setBusy(false); }
  };

  const remove = async () => {
    if (selectedId === null || busy) return;
    setBusy(true);
    try {
      await deleteAdminTrustedCompany(selectedId);
      const next = await listAdminTrustedCompanies();
      setItems(next);
      const selected = next[0];
      setSelectedId(selected?.id ?? null);
      setName(selected?.name ?? "");
      setSortOrder(selected?.sortOrder ?? 1);
      setIsPublished(selected?.isPublished ?? true);
      setLogoFile(null);
      setMessage("شرکت حذف شد.");
    } catch { setMessage("حذف شرکت از سرور انجام نشد."); }
    finally { setBusy(false); }
  };

  const removeLogo = async () => {
    if (selectedId === null || busy) return;
    setBusy(true);
    try {
      await deleteAdminTrustedCompanyLogo(selectedId);
      setLogoFile(null);
      await refresh(selectedId);
      setMessage("لوگوی شرکت حذف شد.");
    } catch { setMessage("حذف لوگو از سرور انجام نشد."); }
    finally { setBusy(false); }
  };

  return (
    <section className="admin-content-row">
      <article className="admin-content-editor admin-final-card">
        <h2>{selectedId === null ? "افزودن شرکت همراه" : "ویرایش شرکت همراه"}</h2>
        <p>تغییر نام، ترتیب، لوگو و وضعیت انتشار در اینجا، نمایش همهٔ موارد متصل به فهرست عمومی را به‌روزرسانی می‌کند.</p>
        <div className="admin-mini-field"><label htmlFor="trusted-company-name">نام شرکت</label><input id="trusted-company-name" className="admin-content-input" value={name} onChange={(event) => setName(event.target.value)} placeholder="نام شرکت" /></div>
        <div className="admin-mini-field"><label htmlFor="trusted-company-order">ترتیب نمایش</label><input id="trusted-company-order" className="admin-content-input" type="number" min="0" value={sortOrder} onChange={(event) => setSortOrder(Number(event.target.value) || 0)} /></div>
        <label className="admin-trusted-publish"><input type="checkbox" checked={isPublished} onChange={(event) => setIsPublished(event.target.checked)} /> نمایش در سایت</label>
        <div className="admin-mini-field"><label>لوگو (اختیاری)</label><div className="admin-news-image-editor"><div className="admin-news-image-preview">{logoUrl ? <img src={logoUrl} alt={`لوگوی ${name || "شرکت"}`} /> : <span>بدون لوگو</span>}</div><div className="admin-news-image-controls"><input className="admin-content-file admin-news-image-file" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setLogoFile(event.target.files?.[0] ?? null)} /><button type="button" onClick={removeLogo} disabled={busy || selectedId === null || !items.find((item) => item.id === selectedId)?.hasLogo}>حذف لوگو</button></div></div></div>
        <div className="admin-content-editor-actions"><button className="primary" type="button" onClick={save} disabled={busy}>{busy ? "در حال ذخیره…" : selectedId === null ? "ثبت شرکت" : "ذخیره تغییرات"}</button><button type="button" onClick={remove} disabled={busy || selectedId === null}>حذف شرکت</button><button type="button" onClick={createNew} disabled={busy}>شرکت جدید</button></div>
        {message ? <div className="admin-content-message">{message}</div> : null}
      </article>
      <article className="admin-content-list admin-final-card">
        <div className="admin-content-list-head"><div><h2>فهرست شرکت‌های همراه</h2><p>ترتیب و انتشار در سایت از همین فهرست کنترل می‌شود.</p></div><span>{numberFa.format(items.length)} شرکت</span></div>
        <div className="admin-content-table" role="table" aria-label="فهرست شرکت‌های همراه">
          <div className="admin-content-table-row head" role="row"><span>نام شرکت</span><span>ترتیب</span><span>وضعیت</span><span>لوگو</span></div>
          {items.map((item) => <button className={`admin-content-table-row admin-trusted-company-row${selectedId === item.id ? " is-selected" : ""}`} role="row" type="button" key={item.id} onClick={() => select(item)}><span className="admin-content-title">{item.name}</span><span>{numberFa.format(item.sortOrder)}</span><span className={`admin-content-status ${item.isPublished ? "green" : "blue"}`}>{item.isPublished ? "نمایش داده می‌شود" : "پنهان"}</span><span>{item.hasLogo ? "دارد" : "ندارد"}</span></button>)}
        </div>
      </article>
    </section>
  );
}
