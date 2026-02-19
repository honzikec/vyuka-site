function toggleTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  setTheme();
}

function setTheme() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

setTheme();

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn-toggle-theme")
    .addEventListener("click", function () {
      toggleTheme();
    });
});
