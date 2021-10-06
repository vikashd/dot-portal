var sameWidth = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    },
};

var offset = {
    name: "offset",
    options: {
        offset: ({ placement, reference, popper }) => {
            return [0, -reference.height - 10];
        },
    },
};

var dropdownElementList = [].slice.call(document.querySelectorAll(".dropdown-btn"));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl, {
        popperConfig: function (defaultBsPopperConfig) {
            return Object.assign(defaultBsPopperConfig, { modifiers: [sameWidth, offset] });
        },
    });
});

(function () {
    var mobileMenuBtn = document.getElementById("mobile-menu-btn");
    var mobileMenuBtnClose = document.getElementById("mobile-menu-close-btn");
    var menu = document.getElementById("mobile-menu");
    var open = false;

    function clickHandler() {
        open = !open;

        if (open) {
            menu.style.transform = "translate3d(0, 0, 0)";
        } else {
            menu.style.transform = "translate3d(-100%, 0, 0)";
        }
    }

    mobileMenuBtn.addEventListener("click", clickHandler);
    mobileMenuBtnClose.addEventListener("click", clickHandler);
})();
