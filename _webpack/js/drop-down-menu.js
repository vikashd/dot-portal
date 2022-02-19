import { Dropdown } from 'bootstrap';

const init = () => {
    const buttons = document.getElementsByClassName('js-menu-btn');

    if (!buttons.length) {
        return;
    }

    const offset = {
        name: 'offset',
        options: {
            offset: ({ placement, reference, popper }) => {
                return [0, -reference.height];
            },
        },
    };

    [].slice.call(buttons).forEach(
        (button) =>
            new Dropdown(button, {
                popperConfig: (defaultBsPopperConfig) => Object.assign(defaultBsPopperConfig, { modifiers: [offset] }),
            })
    );

    const menus = document.querySelectorAll('[data-drop-item-menu]');

    if (!menus.length) {
        return;
    }

    [].slice.call(menus).forEach((menu) => {
        const menuDataset = menu.dataset;

        menu.addEventListener('click', (e) => {
            e.preventDefault();

            if (!menuDataset.dropItemMenu) {
                return;
            }

            const dataset = e.target.dataset;

            alert(`${dataset.action} ${menuDataset.dropItemMenu}`);
        });
    });
};

init();
