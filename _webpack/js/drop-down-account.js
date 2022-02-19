const init = () => {
    var accountMenuBtn = document.getElementById("account-menu-btn");

    if (!accountMenuBtn) {
        return;
    }

    var offset = {
        name: "offset",
        options: {
            offset: ({ placement, reference, popper }) => {
                return [-18, 20];
            },
        },
    };

    new bootstrap.Dropdown(accountMenuBtn, {
        popperConfig: function (defaultBsPopperConfig) {
            return Object.assign(defaultBsPopperConfig, { modifiers: [offset] });
        },
    });
};

init();
