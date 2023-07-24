window.addEventListener("DOMContentLoaded", function(){
        AOS.init();
})

window.addEventListener("DOMContentLoaded", function () {
    const navMenuButton = document.querySelector("#nav__menu__open");
    navMenuButton.addEventListener("click", function () {
        const menu = document.querySelector(".menu__mobile");
        menu.style.display = "";
    });
    window.addEventListener("click", function (event) {
        if (event.target.closest("#nav__menu__open")) {
            return;
        }
        const menu = document.querySelector(".menu__mobile");
        menu.style.display = "none";
    });
});