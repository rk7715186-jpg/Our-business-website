const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});