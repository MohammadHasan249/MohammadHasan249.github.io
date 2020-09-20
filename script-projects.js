var hamburger_menu = document.querySelector(".hamburger-menu");
var container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})