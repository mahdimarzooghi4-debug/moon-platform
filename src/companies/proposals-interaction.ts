const COMPANY_PATHS = new Set(["/companies", "/for-companies"]);
const PROPOSALS_LABEL = "مشاهده پیشنهادها";
const PROJECTS_PATH = "/projects";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isCompanyPage() {
  return COMPANY_PATHS.has(window.location.pathname);
}

function findProposalsAction(target: Element) {
  const root = target.closest<HTMLElement>(".main-container");
  if (!root) return null;

  let node: HTMLElement | null = target instanceof HTMLElement ? target : target.parentElement;
  while (node) {
    if (normalize(node.textContent) === PROPOSALS_LABEL) return node;
    if (node === root) break;
    node = node.parentElement;
  }

  return null;
}

function goToProjects() {
  if (window.location.pathname === PROJECTS_PATH) return;
  window.location.assign(PROJECTS_PATH);
}

function markProposalsAction() {
  if (!isCompanyPage()) return;

  document.querySelectorAll<HTMLElement>(".main-container span, .main-container div").forEach((node) => {
    if (normalize(node.textContent) !== PROPOSALS_LABEL) return;
    node.style.cursor = "pointer";
    node.setAttribute("role", "link");
    node.setAttribute("aria-label", PROPOSALS_LABEL);
    node.tabIndex = 0;
  });
}

document.addEventListener("click", (event) => {
  if (!isCompanyPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = findProposalsAction(target);
  if (!action) return;

  event.preventDefault();
  goToProjects();
});

document.addEventListener("keydown", (event) => {
  if (!isCompanyPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = findProposalsAction(target);
  if (!action) return;

  event.preventDefault();
  goToProjects();
});

const observer = new MutationObserver(markProposalsAction);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", markProposalsAction);
window.addEventListener("popstate", markProposalsAction);
window.setTimeout(markProposalsAction, 0);
