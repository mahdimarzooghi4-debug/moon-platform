import "./creative-house-release-flow.css";

const MILESTONE_DETAIL_ROOT =
  '.creative-house-dashboard[data-name="ayeneh-milestone-evaluation-detail"]';
const EMDAD_QUEUE_ROOT = '[data-name="emdad-release-requests"]';
const EMDAD_DETAIL_ROOT = '[data-name="emdad-release-request-detail"]';
const EMDAD_SUCCESS_ROOT = '[data-name="emdad-release-success"]';

const EMDAD_QUEUE_PATH = "/panel/emdad/release-requests";
const EMDAD_DETAIL_PATH = "/panel/emdad/release-requests/detail";
const EMDAD_SUCCESS_PATH = "/panel/emdad/release-requests/success";

const REQUESTS_KEY = "mah.creativeHouse.releaseRequests.v1";
const SELECTED_KEY = "mah.creativeHouse.releaseRequests.selected.v1";

type ReleaseStatus = "pending" | "released";

type CreativeHouseReleaseRequest = {
  id: string;
  project: string;
  stage: string;
  startup: string;
  amount: number;
  evaluationId: string;
  status: ReleaseStatus;
  createdAt: string;
  releasedAt?: string;
  receipt?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function parseAmountLabel(value: string) {
  const normalized = toLatinDigits(value).replace(/[٬,]/g, "");
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  if (!match) return 0;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return 0;
  if (normalized.includes("میلیارد")) return amount * 1_000_000_000;
  if (normalized.includes("میلیون")) return amount * 1_000_000;
  if (normalized.includes("هزار")) return amount * 1_000;
  return amount;
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function readRequests(): CreativeHouseReleaseRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is CreativeHouseReleaseRequest =>
      Boolean(
        item &&
          typeof item.id === "string" &&
          typeof item.project === "string" &&
          typeof item.stage === "string" &&
          typeof item.startup === "string" &&
          typeof item.amount === "number" &&
          Number.isFinite(item.amount) &&
          typeof item.evaluationId === "string" &&
          (item.status === "pending" || item.status === "released") &&
          typeof item.createdAt === "string",
      ),
    );
  } catch {
    return [];
  }
}

function writeRequests(requests: CreativeHouseReleaseRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent("moon:creative-house-release-requests-changed"));
}

function setSelectedRequest(id: string) {
  localStorage.setItem(SELECTED_KEY, id);
}

function getSelectedRequest() {
  const id = localStorage.getItem(SELECTED_KEY);
  if (!id) return null;
  return readRequests().find((request) => request.id === id) ?? null;
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function milestoneFieldValue(screen: HTMLElement, label: string) {
  const fields = screen.querySelectorAll<HTMLElement>('[data-name="milestone-summary"] [data-name="field"]');
  for (const field of fields) {
    const paragraphs = field.querySelectorAll<HTMLElement>("p");
    if (normalize(paragraphs.item(0)?.textContent) === label) {
      return normalize(paragraphs.item(1)?.textContent);
    }
  }
  return "";
}

function extractEvaluationId(screen: HTMLElement) {
  const values = Array.from(screen.querySelectorAll<HTMLElement>("p"))
    .map((item) => normalize(item.textContent))
    .filter(Boolean);
  return values.find((value) => /^MAH[-–—]/i.test(value)) ?? `CH-EVAL-${Date.now()}`;
}

function createReleaseRequestFromMilestone(screen: HTMLElement) {
  const selected = screen.querySelector<HTMLButtonElement>(
    'button[data-name="decision-option"][data-selected="true"]',
  );
  if (selected?.dataset.decisionValue !== "approve") return;

  const projectStage = milestoneFieldValue(screen, "پروژه / مرحله");
  const [projectPart, ...stageParts] = projectStage.split(/\s+—\s+/);
  const project = normalize(projectPart) || "پروژه تأییدشده";
  const stage = normalize(stageParts.join(" — ")) || "مرحله تأییدشده";
  const startup = milestoneFieldValue(screen, "استارتاپ مجری") || "استارتاپ مجری";
  const amount = parseAmountLabel(milestoneFieldValue(screen, "بودجه مرحله"));
  const evaluationId = extractEvaluationId(screen);

  const requests = readRequests();
  const duplicate = requests.find(
    (request) =>
      normalize(request.project) === project &&
      normalize(request.stage) === stage &&
      (request.status === "pending" || request.status === "released"),
  );
  if (duplicate) return;

  const request: CreativeHouseReleaseRequest = {
    id: `CHR-${Date.now()}`,
    project,
    stage,
    startup,
    amount,
    evaluationId,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  writeRequests([request, ...requests]);
}

function queueFilter(root: HTMLElement): ReleaseStatus {
  return root.dataset.releaseFilter === "released" ? "released" : "pending";
}

function applyQueue() {
  if (window.location.pathname !== EMDAD_QUEUE_PATH) return;
  const root = document.querySelector<HTMLElement>(EMDAD_QUEUE_ROOT);
  if (!root) return;

  const requests = readRequests();
  if (!requests.length) return;

  const waitingCount = requests.filter((request) => request.status === "pending").length;
  const releasedCount = requests.filter((request) => request.status === "released").length;
  const waitingTab = root.querySelector<HTMLElement>('[data-name="waiting-tab"]');
  const releasedTab = root.querySelector<HTMLElement>('[data-name="released-tab"]');
  const toolbar = root.querySelector<HTMLElement>('[data-name="toolbar"]');

  if (!root.dataset.releaseFilter) root.dataset.releaseFilter = "pending";
  const filter = queueFilter(root);

  if (waitingTab) {
    waitingTab.dataset.moonActive = filter === "pending" ? "true" : "false";
    waitingTab.setAttribute("role", "button");
    waitingTab.tabIndex = 0;
    setText(waitingTab.querySelector("p"), `در انتظار اقدام ${faNumber(waitingCount)}`);
  }
  if (releasedTab) {
    releasedTab.dataset.moonActive = filter === "released" ? "true" : "false";
    releasedTab.setAttribute("role", "button");
    releasedTab.tabIndex = 0;
    setText(releasedTab.querySelector("p"), `آزادسازی‌شده ${faNumber(releasedCount)}`);
  }
  setText(toolbar?.querySelector("p"), `${faNumber(requests.length)} درخواست خانه خلاق`);

  root.querySelectorAll<HTMLElement>('[data-name="request-row"], [data-name="pagination-footer"]').forEach((item) => {
    item.style.display = "none";
  });

  const headerCells = root.querySelectorAll<HTMLElement>('[data-name="table-header"] p');
  setText(headerCells.item(0), "پروژه");
  setText(headerCells.item(1), "مرحله");
  setText(headerCells.item(2), "ارزیابی خانه خلاق");
  setText(headerCells.item(3), "مبلغ آزادسازی");
  setText(headerCells.item(4), "وضعیت");
  setText(headerCells.item(5), "اقدام");

  const table = root.querySelector<HTMLElement>('[data-name="release-requests-table"]');
  if (!table) return;
  table.querySelector<HTMLElement>('[data-creative-release-queue="true"]')?.remove();

  const list = document.createElement("div");
  list.className = "creative-release-queue-list";
  list.dataset.creativeReleaseQueue = "true";
  list.setAttribute("dir", "rtl");

  const filtered = requests.filter((request) => request.status === filter);
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "creative-release-queue-empty";
    empty.textContent = filter === "pending" ? "درخواست در انتظار اقدام وجود ندارد." : "هنوز آزادسازی ثبت‌شده‌ای وجود ندارد.";
    list.appendChild(empty);
  } else {
    filtered
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .forEach((request) => {
        const row = document.createElement("div");
        row.className = "creative-release-queue-row";

        const project = document.createElement("div");
        project.className = "creative-release-queue-project";
        const projectName = document.createElement("strong");
        projectName.textContent = request.project;
        const startup = document.createElement("small");
        startup.textContent = request.startup;
        project.append(projectName, startup);

        const stage = document.createElement("span");
        stage.textContent = request.stage;

        const approved = document.createElement("span");
        approved.className = "creative-release-queue-approved";
        approved.textContent = "تأیید شده";

        const amount = document.createElement("span");
        amount.textContent = request.amount > 0 ? formatAmount(request.amount) : "مطابق مصوبه مرحله";

        const status = document.createElement("span");
        status.className = "creative-release-queue-status";
        status.dataset.status = request.status;
        status.textContent = request.status === "pending" ? "در انتظار آزادسازی" : "آزادسازی‌شده";

        const action = document.createElement("button");
        action.type = "button";
        action.className = "creative-release-queue-action";
        action.dataset.releaseRequestId = request.id;
        action.textContent = request.status === "pending" ? "بررسی درخواست" : "مشاهده";

        row.append(project, stage, approved, amount, status, action);
        list.appendChild(row);
      });
  }

  table.appendChild(list);
}

function applyDetail() {
  if (window.location.pathname !== EMDAD_DETAIL_PATH) return;
  const root = document.querySelector<HTMLElement>(EMDAD_DETAIL_ROOT);
  const request = getSelectedRequest();
  if (!root || !request) return;

  const summary = root.querySelector<HTMLElement>('[data-name="request-summary"]');
  const summaryPs = summary?.querySelectorAll<HTMLElement>("p");
  setText(summaryPs?.item(0), request.project);
  setText(summaryPs?.item(1), `${request.startup} · درخواست خانه خلاق`);
  setText(summaryPs?.item(2), request.status === "pending" ? "در انتظار آزادسازی" : "آزادسازی‌شده");
  setText(summaryPs?.item(3), "مرحله پروژه");
  setText(summaryPs?.item(4), request.stage);
  setText(summaryPs?.item(5), "مبلغ آزادسازی");
  setText(summaryPs?.item(6), request.amount > 0 ? formatAmount(request.amount) : "مطابق مصوبه مرحله");
  setText(summaryPs?.item(7), "ارزیابی خانه خلاق");
  setText(summaryPs?.item(8), "تأیید شده");
  setText(summaryPs?.item(9), `شناسه ارزیابی: ${request.evaluationId}`);

  const actionArea = root.querySelector<HTMLElement>('[data-name="action-area"]');
  const info = actionArea?.querySelector<HTMLElement>('[data-name="info"] p');
  setText(
    info,
    request.amount > 0
      ? `مبلغ قابل آزادسازی این مرحله: ${formatAmount(request.amount)} · درخواست ثبت‌شده توسط خانه خلاق`
      : "مبلغ آزادسازی مطابق مصوبه مرحله است · درخواست ثبت‌شده توسط خانه خلاق",
  );

  const approve = root.querySelector<HTMLElement>('[data-name="approve-release-button"]');
  if (approve) {
    approve.dataset.releaseComplete = request.status === "released" ? "true" : "false";
    setText(
      approve.querySelector("p"),
      request.status === "pending" ? "تأیید و آزادسازی وجه" : "آزادسازی انجام شده",
    );
  }
}

function applySuccess() {
  if (window.location.pathname !== EMDAD_SUCCESS_PATH) return;
  const root = document.querySelector<HTMLElement>(EMDAD_SUCCESS_ROOT);
  const request = getSelectedRequest();
  if (!root || !request) return;

  const hero = root.querySelector<HTMLElement>('[data-name="release-success-hero"]');
  const heroPs = hero?.querySelectorAll<HTMLElement>("p");
  setText(heroPs?.item(1), `آزادسازی وجه ${request.stage} ثبت شد`);
  setText(
    heroPs?.item(2),
    `${request.project} · ${request.amount > 0 ? formatAmount(request.amount) : "مبلغ مطابق مصوبه مرحله"} · نتیجه در سوابق پرداخت ثبت شد.`,
  );

  const items = root.querySelectorAll<HTMLElement>('[data-name="summary-item"]');
  const values = [
    ["پروژه", request.project],
    ["مرحله", request.stage],
    ["مبلغ آزادشده", request.amount > 0 ? formatAmount(request.amount) : "مطابق مصوبه مرحله"],
    ["مرجع درخواست", "خانه خلاق"],
  ];
  items.forEach((item, index) => {
    const paragraphs = item.querySelectorAll<HTMLElement>("p");
    const pair = values[index];
    if (!pair) return;
    setText(paragraphs.item(0), pair[0]);
    setText(paragraphs.item(1), pair[1]);
  });
}

function applyCurrentPage() {
  applyQueue();
  applyDetail();
  applySuccess();
}

document.addEventListener(
  "click",
  (event) => {
    if (event.button !== 0) return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const save = target.closest<HTMLElement>(`${MILESTONE_DETAIL_ROOT} [data-name="save-decision"]`);
    if (save) {
      const screen = save.closest<HTMLElement>(MILESTONE_DETAIL_ROOT);
      if (screen) createReleaseRequestFromMilestone(screen);
      return;
    }

    const waiting = target.closest<HTMLElement>(`${EMDAD_QUEUE_ROOT} [data-name="waiting-tab"]`);
    if (waiting) {
      const root = waiting.closest<HTMLElement>(EMDAD_QUEUE_ROOT);
      if (!root) return;
      event.preventDefault();
      root.dataset.releaseFilter = "pending";
      applyQueue();
      return;
    }

    const released = target.closest<HTMLElement>(`${EMDAD_QUEUE_ROOT} [data-name="released-tab"]`);
    if (released) {
      const root = released.closest<HTMLElement>(EMDAD_QUEUE_ROOT);
      if (!root) return;
      event.preventDefault();
      root.dataset.releaseFilter = "released";
      applyQueue();
      return;
    }

    const action = target.closest<HTMLButtonElement>(`${EMDAD_QUEUE_ROOT} [data-release-request-id]`);
    if (action?.dataset.releaseRequestId) {
      event.preventDefault();
      setSelectedRequest(action.dataset.releaseRequestId);
      navigate(EMDAD_DETAIL_PATH);
      return;
    }

    const approve = target.closest<HTMLElement>(`${EMDAD_DETAIL_ROOT} [data-name="approve-release-button"]`);
    if (approve) {
      const request = getSelectedRequest();
      if (!request || request.status === "released") return;
      event.preventDefault();
      const requests = readRequests();
      const next = requests.map((item) =>
        item.id === request.id
          ? {
              ...item,
              status: "released" as const,
              releasedAt: new Date().toISOString(),
              receipt: `ER-${Date.now().toString().slice(-8)}`,
            }
          : item,
      );
      writeRequests(next);
      navigate(EMDAD_SUCCESS_PATH);
    }
  },
  true,
);

applyCurrentPage();

window.addEventListener("popstate", () => requestAnimationFrame(applyCurrentPage));
window.addEventListener("storage", () => requestAnimationFrame(applyCurrentPage));
window.addEventListener("moon:creative-house-release-requests-changed", () => requestAnimationFrame(applyCurrentPage));

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevant = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return (
          node.matches(EMDAD_QUEUE_ROOT) ||
          node.matches(EMDAD_DETAIL_ROOT) ||
          node.matches(EMDAD_SUCCESS_ROOT) ||
          Boolean(node.querySelector(`${EMDAD_QUEUE_ROOT}, ${EMDAD_DETAIL_ROOT}, ${EMDAD_SUCCESS_ROOT}`))
        );
      }),
    );
    if (!relevant || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyCurrentPage();
    });
  }).observe(document.body, { childList: true, subtree: true });
}
