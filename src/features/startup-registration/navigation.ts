export function navigateRegistration(path: string) {
  if (window.location.pathname === path) return;
  if (path.startsWith("/register/startup")) {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
    return;
  }
  window.location.assign(path);
}
