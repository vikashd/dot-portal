const init = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuBtnClose = document.getElementById('mobile-menu-close-btn');
    const menu = document.getElementById('mobile-menu');
    let open = false;

    const openMenu = () => {
        open = true;
        menu.style.transform = 'translate3d(0, 0, 0)';
    };

    const closeMenu = () => {
        open = false;
        menu.style.transform = 'translate3d(-100%, 0, 0)';
    };

    const clickHandler = () => {
        if (open) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    mobileMenuBtn.addEventListener('click', clickHandler);
    mobileMenuBtnClose.addEventListener('click', clickHandler);

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    mediaQuery.addEventListener('change', (e) => {
        if (e.matches && open) {
            closeMenu();
        }
    });
};

init();
