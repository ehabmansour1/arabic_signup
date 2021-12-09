let toggle = document.getElementById("toggle");
let nav = document.getElementById("nav");
toggle.onclick = function () {
  nav.classList.add("open");
};
nav.onclick = function () {
  nav.classList.remove("open");
};
