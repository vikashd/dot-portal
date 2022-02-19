const init = () => {
    var mobileMenuBtn = document.getElementById("mobile-menu-btn");
    var mobileMenuBtnClose = document.getElementById("mobile-menu-close-btn");
    var menu = document.getElementById("mobile-menu");
    var open = false;

    function openMenu() {
        open = true;
        menu.style.transform = "translate3d(0, 0, 0)";
    }

    function closeMenu() {
        open = false;
        menu.style.transform = "translate3d(-100%, 0, 0)";
    }

    function clickHandler() {
        if (open) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    mobileMenuBtn.addEventListener("click", clickHandler);
    mobileMenuBtnClose.addEventListener("click", clickHandler);

    var mediaQuery = window.matchMedia("(min-width: 768px)");

    mediaQuery.addEventListener("change", function (e) {
        if (e.matches && open) {
            closeMenu();
        }
    });
};

init();
