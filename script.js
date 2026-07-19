/* =========================================================================
   CONFIG — edit these to personalize the live console readout
   ========================================================================= */
const START_DATE = new Date("2024-01-01T00:00:00"); // "days in motion" epoch
const FOCUS_ROTATION = [
  "SYSTEMS DESIGN",
  "TOOL BUILDING",
  "APPLIED RESEARCH",
  "WRITING & KNOWLEDGE"
];
const FOCUS_INTERVAL_MS = 3200;

/* =========================================================================
   MOBILE NAV TOGGLE
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

/* =========================================================================
   SCROLL-SPY — highlight the nav link for the section in view
   ========================================================================= */
const navLinks = nav ? Array.from(nav.querySelectorAll("a[href^='#']")) : [];
const sections = navLinks
  .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const matches = link.getAttribute("href") === `#${id}`;
          if (matches) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================================================
   HERO CONSOLE — focus rotation, days-in-motion counter, local time
   ========================================================================= */
const consoleFocus = document.getElementById("consoleFocus");
const consoleDays = document.getElementById("consoleDays");
const consoleTime = document.getElementById("consoleTime");

let focusIndex = 0;

function updateFocus() {
  if (!consoleFocus) return;
  consoleFocus.textContent = FOCUS_ROTATION[focusIndex % FOCUS_ROTATION.length];
  focusIndex++;
}

function updateDays() {
  if (!consoleDays) return;
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.max(0, Math.floor((Date.now() - START_DATE.getTime()) / msPerDay));
  consoleDays.textContent = days.toLocaleString();
}

function updateTime() {
  if (!consoleTime) return;
  const now = new Date();
  consoleTime.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateFocus();
updateDays();
updateTime();

setInterval(updateFocus, FOCUS_INTERVAL_MS);
setInterval(updateTime, 30 * 1000);

/* =========================================================================
   CONTACT FORM — static GitHub Pages fallback via mailto
   Replace this with a real form backend (Formspree, Getform, etc.) if you
   want submissions delivered without opening the visitor's email client.
   ========================================================================= */
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const CONTACT_EMAIL = "you@example.com"; // <-- replace with your real address

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      if (formNote) formNote.textContent = "Please fill in every field before sending.";
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    if (formNote) formNote.textContent = "Opening your email client…";
  });
}

/* =========================================================================
   FOOTER YEAR
   ========================================================================= */
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
