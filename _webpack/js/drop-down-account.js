import { Dropdown } from 'bootstrap';

const init = () => {
    const accountMenuBtn = document.getElementById('account-menu-btn');

    if (!accountMenuBtn) {
        return;
    }

    const offset = {
        name: 'offset',
        options: {
            offset: ({ placement, reference, popper }) => {
                return [-18, 20];
            },
        },
    };

    new Dropdown(accountMenuBtn, {
        popperConfig: (defaultBsPopperConfig) => Object.assign(defaultBsPopperConfig, { modifiers: [offset] }),
    });
};

init();
