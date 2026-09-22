if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function setLightMode() {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
}

function setDarkMode() {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
}

function setSystemMode() {
  localStorage.removeItem("theme");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
