import { clearSession } from "../../auth/oidc";

const STARTUP_ROOT = ".startup-panel-page";
const CREATE_DRAFT_KEY = "mah.startup.projectDraft.v1";
const STAGE_REPORT_DRAFT_KEY = "mah.startup.stageReportDraft.v1";
const SETTINGS_KEY = "mah.startup.notificationSettings.v1";

function serializeFields(root: ParentNode) {
  const values: Record<string, string> = {};

  root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select").forEach((field, index) => {
    if (field instanceof HTMLInputElement && (field.type === "file" || field.type === "button" || field.type === "submit")) return;
    const key = field.name || field.id || `field-${index}`;
    values[key] = field.value;
  });

  return values;
}

function showSavedFeedback(button: HTMLButtonElement, label = "ذخیره شد") {
  const original = button.dataset.savedOriginalLabel ?? button.textContent?.trim() ?? "ذخیره";
  button.dataset.savedOriginalLabel = original;
  button.textContent = label;
  button.disabled = true;

  window.setTimeout(() => {
    if (!button.isConnected) return;
    button.textContent = original;
    button.disabled = false;
  }, 1400);
}

function navigateClient(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function chooseProfileFile(button: HTMLButtonElement, multiple: boolean) {
  const picker = document.createElement("input");
  picker.type = "file";
  picker.multiple = multiple;
  picker.accept = multiple ? ".pdf,.jpg,.jpeg,.png" : ".pdf";
  picker.hidden = true;

  picker.addEventListener("change", () => {
    const files = Array.from(picker.files ?? []);
    if (!files.length) return;
    button.textContent = multiple
      ? `${files.length.toLocaleString("fa-IR")} فایل انتخاب شد`
      : `انتخاب شد: ${files[0].name}`;
    button.title = files.map((file) => file.name).join("، ");
  });

  document.body.appendChild(picker);
  picker.click();
  window.setTimeout(() => picker.remove(), 60_000);
}

function syncDisabledControls(root: ParentNode = document) {
  const enabledSelectors = [
    ".startup-settings-save[aria-disabled=\"true\"]",
    ".startup-settings-privacy-actions button[aria-disabled=\"true\"]",
    ".startup-profile-impact-edit-upload button[aria-disabled=\"true\"]",
    ".startup-profile-impact-edit-legal button[aria-disabled=\"true\"]",
  ];

  enabledSelectors.forEach((selector) => {
    root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
      button.removeAttribute("aria-disabled");
      button.disabled = false;
    });
  });

  root.querySelectorAll<HTMLButtonElement>(`${STARTUP_ROOT} button[aria-disabled=\"true\"]`).forEach((button) => {
    button.disabled = true;
  });
}

syncDisabledControls();

if (document.body) {
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        syncDisabledControls();
        break;
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const root = target.closest<HTMLElement>(STARTUP_ROOT);
  if (!root) return;

  const logout = target.closest<HTMLButtonElement>("button.startup-logout");
  if (logout) {
    event.preventDefault();
    clearSession();
    sessionStorage.removeItem("moon.auth.dev-panel-preview");
    localStorage.removeItem("moon.auth.dev-panel-preview");
    window.location.assign("/auth");
    return;
  }

  const createSave = target.closest<HTMLButtonElement>("button.startup-create-save");
  if (createSave) {
    event.preventDefault();
    localStorage.setItem(CREATE_DRAFT_KEY, JSON.stringify({
      path: window.location.pathname,
      savedAt: new Date().toISOString(),
      values: serializeFields(root),
    }));
    showSavedFeedback(createSave, "پیش‌نویس ذخیره شد");
    return;
  }

  const reportDraft = target.closest<HTMLButtonElement>("button.startup-stage-report-draft");
  if (reportDraft) {
    event.preventDefault();
    const form = reportDraft.closest<HTMLFormElement>("form");
    if (form) {
      localStorage.setItem(STAGE_REPORT_DRAFT_KEY, JSON.stringify({
        path: window.location.pathname,
        savedAt: new Date().toISOString(),
        values: serializeFields(form),
      }));
    }
    showSavedFeedback(reportDraft, "پیش‌نویس ذخیره شد");
    return;
  }

  const settingsSave = target.closest<HTMLButtonElement>("button.startup-settings-save");
  if (settingsSave) {
    event.preventDefault();
    const values = Array.from(root.querySelectorAll<HTMLButtonElement>(".startup-settings-toggle"))
      .map((button) => button.getAttribute("aria-checked") === "true");
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(values));
    showSavedFeedback(settingsSave, "تنظیمات ذخیره شد");
    return;
  }

  const privacyButton = target.closest<HTMLButtonElement>(".startup-settings-privacy-actions button");
  if (privacyButton) {
    event.preventDefault();
    navigateClient("/privacy-policy");
    return;
  }

  const pitchDeckButton = target.closest<HTMLButtonElement>(".startup-profile-impact-edit-upload button");
  if (pitchDeckButton) {
    event.preventDefault();
    chooseProfileFile(pitchDeckButton, false);
    return;
  }

  const legalDocumentButton = target.closest<HTMLButtonElement>(".startup-profile-impact-edit-legal button");
  if (legalDocumentButton) {
    event.preventDefault();
    chooseProfileFile(legalDocumentButton, true);
  }
});
