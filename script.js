const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    header.classList.toggle("nav-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    header.classList.remove("nav-active");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
