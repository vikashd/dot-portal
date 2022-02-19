const init = () => {
    var buttons = document.getElementsByClassName("js-menu-btn");

    if (!buttons.length) {
        return;
    }

    var offset = {
        name: "offset",
        options: {
            offset: ({ placement, reference, popper }) => {
                return [0, -reference.height];
            },
        },
    };

    [].slice.call(buttons).forEach(
        (button) =>
            new bootstrap.Dropdown(button, {
                popperConfig: function (defaultBsPopperConfig) {
                    return Object.assign(defaultBsPopperConfig, { modifiers: [offset] });
                },
            })
    );

    var menus = document.querySelectorAll("[data-drop-item-menu]");

    if (!menus.length) {
        return;
    }

    [].slice.call(menus).forEach((menu) => {
        const menuDataset = menu.dataset;

        menu.addEventListener("click", function (e) {
            e.preventDefault();

            if (!menuDataset.dropItemMenu) {
                return;
            }

            var dataset = e.target.dataset;

            alert(`${dataset.action} ${menuDataset.dropItemMenu}`);
        });
    });
};

init();
