var hamburger_menu = document.querySelector(".hamburger-menu");
var container = document.querySelector(".container");
var header = document.getElementById("headerProject");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

header.addEventListener("click", () => {
    if (container.classList.contains("active")) {
      container.classList.remove("active");
    }
})
