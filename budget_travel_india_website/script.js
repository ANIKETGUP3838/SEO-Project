document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const themeButtons = document.querySelectorAll(".theme-switcher button");
  const body = document.body;

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Theme handling
  const storedTheme = localStorage.getItem("bt_theme");
  if (storedTheme) {
    body.className = storedTheme;
  }

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      body.className = theme;
      localStorage.setItem("bt_theme", theme);
    });
  });
});
