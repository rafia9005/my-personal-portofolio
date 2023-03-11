const humberger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

