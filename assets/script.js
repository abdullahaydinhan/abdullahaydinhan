// Mobil menü butonu
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
