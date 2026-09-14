export type CertificateIssuerSettings = {
  managerName: string;
  managerTitle: string;
  unitName: string;
  signatureDataUrl: string;
};

export const CERTIFICATE_ISSUER_STORAGE_KEY = "mah.emdad.certificateIssuer.v1";
export const CERTIFICATE_ISSUER_UPDATED_EVENT = "mah:certificate-issuer-updated";

export const DEFAULT_CERTIFICATE_ISSUER: CertificateIssuerSettings = {
  managerName: "مسئول صدور گواهی",
  managerTitle: "مدیر مسئول صدور گواهی ماده ۱۷۲",
  unitName: "اداره مشارکت‌های مردمی و امور مؤدیان",
  signatureDataUrl: "",
};

export function readCertificateIssuerSettings(): CertificateIssuerSettings {
  if (typeof window === "undefined") return DEFAULT_CERTIFICATE_ISSUER;

  try {
    const stored = window.localStorage.getItem(CERTIFICATE_ISSUER_STORAGE_KEY);
    if (!stored) return DEFAULT_CERTIFICATE_ISSUER;

    const parsed = JSON.parse(stored) as Partial<CertificateIssuerSettings>;
    return {
      ...DEFAULT_CERTIFICATE_ISSUER,
      ...parsed,
    };
  } catch {
    return DEFAULT_CERTIFICATE_ISSUER;
  }
}

export function writeCertificateIssuerSettings(settings: CertificateIssuerSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CERTIFICATE_ISSUER_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(CERTIFICATE_ISSUER_UPDATED_EVENT));
}
