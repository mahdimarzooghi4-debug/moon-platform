/* Visual localization only. Server normalization and OTP policy are authoritative.
 * Retain every non-digit character for server rejection, and keep LTR/caret order.
 */
(() => {
  const digits = "۰۱۲۳۴۵۶۷۸۹";
  const persian = value => value.replace(/[0-9٠-٩]/g, char =>
    digits[char.charCodeAt(0) - (char <= "9" ? 48 : 0x660)]
  );
  for (const id of ["moon-mobile", "moon-code"]) {
    const field = document.getElementById(id);
    if (!field) continue;
    const localize = () => {
      const value = persian(field.value);
      if (value === field.value) return;
      const start = field.selectionStart;
      const end = field.selectionEnd;
      const direction = field.selectionDirection;
      field.value = value;
      if (start !== null && end !== null) {
        field.setSelectionRange(start, end, direction || "none");
      }
    };
    localize();
    field.addEventListener("input", event => {
      if (!event.isComposing) localize();
    });
    field.addEventListener("compositionend", localize);
    field.addEventListener("change", localize);
    field.addEventListener("focus", localize);
    window.addEventListener("pageshow", localize);
  }
})();
