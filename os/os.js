/* =========================================================================
   OPERATING SYSTEM — shared JS
   Same mobile nav toggle pattern as the root site's script.js, plus the
   footer year. Kept separate so OS pages don't depend on root-only code
   (like the hero console or contact form).
   ========================================================================= */

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = nav.contains(event.target) || navToggle.contains(event.target);
    if (!clickedInsideNav && nav.classList.contains("open")) closeNav();
  });
}

const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
