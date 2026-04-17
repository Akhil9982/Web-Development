const checkbox = document.querySelector("#checkbox");
const root = document.documentElement;
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Apply theme
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  checkbox.checked = theme === "dark";
}

// Get initial theme
function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return mediaQuery.matches ? "dark" : "light";
}

// Init
setTheme(getInitialTheme());

// Toggle on checkbox change
checkbox.addEventListener("change", () => {
  setTheme(checkbox.checked ? "dark" : "light");
});

// Listen for OS changes (only if user hasn't set manually)
mediaQuery.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    setTheme(e.matches ? "dark" : "light");
  }
});