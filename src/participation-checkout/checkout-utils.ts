export const checkoutAssets = {
  logo: "/assets/codia/3Y5LgL3jzn.png",
  footerLogo: "/assets/codia/2u7HsAp67E.png",
  projectImage: "/assets/codia/ZNXxViLzfb.webp",
  lock: "/assets/codia/JwijQWTfOL.svg",
  completedStep: "/assets/codia/unDNJeJYBU.svg",
  paymentLock: "/assets/codia/ffYLtvPzKt.svg",
  phoneTrack: "/assets/codia/FhXbVWGHfY.svg",
  report: "/assets/codia/FJ0QVpM5Xw.svg",
  phone: "/assets/codia/RSb8qQxPYs.svg",
  verified: "/assets/codia/sLvWhAzxnu.svg",
  checkbox: "/assets/codia/wCtLuLQhmc.svg",
  shield: "/assets/codia/Rrst5TZZ9v.svg",
  arrowLeft: "/assets/codia/60t9COadfY.svg",
  telegram: "https://www.figma.com/api/mcp/asset/e633cfe0-b673-47ce-b8af-bbe61540d6c8.svg",
  eitaa: "https://www.figma.com/api/mcp/asset/dc5d64c2-1a62-481c-b843-348214c80ab0.svg",
};

const faDigits = "۰۱۲۳۴۵۶۷۸۹";

export function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(faDigits.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

export function toFaDigits(value: string | number) {
  return String(value).replace(/\d/g, (digit) => faDigits[Number(digit)]);
}

export function parseAmount(raw: string | null) {
  if (!raw) return 5_000_000;
  const value = Number(toLatinDigits(raw).replace(/[^0-9]/g, ""));
  if (!Number.isFinite(value) || value <= 0) return 5_000_000;
  if (value === 500) return 500_000;
  if (value <= 10) return value * 1_000_000;
  return value;
}

export function formatAmount(value: number) {
  return `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;
}

export function amountInWords(value: number) {
  const labels: Record<number, string> = {
    500_000: "پانصد هزار تومان",
    1_000_000: "یک میلیون تومان",
    5_000_000: "پنج میلیون تومان",
    10_000_000: "ده میلیون تومان",
  };
  return labels[value] ?? formatAmount(value);
}
