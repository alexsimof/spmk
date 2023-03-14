

const btnMenu = document.querySelector(".main-nav__link");
const menu = document.querySelector(".main-nav-menu");
const toggleMenu = function () {
    menu.classList.toggle("show");
}

btnMenu.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("show");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
