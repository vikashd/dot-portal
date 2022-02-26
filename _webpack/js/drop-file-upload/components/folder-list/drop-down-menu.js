import { Dropdown } from 'bootstrap';

const init = (container, onClick) => {
    const buttons = container.getElementsByClassName('js-menu-btn');

    if (!buttons.length) {
        return;
    }

    const offset = {
        name: 'offset',
        options: {
            offset: ({ reference }) => {
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

    const menus = container.querySelectorAll('[data-drop-item-menu]');

    if (!menus.length) {
        return;
    }

    [].slice.call(menus).forEach((menu) => {
        const {
            dataset: { dropItemMenu },
        } = menu;

        menu.addEventListener('click', (e) => {
            e.preventDefault();

            if (!dropItemMenu) {
                return;
            }

            const {
                dataset: { action },
            } = e.target;

            onClick({ id: dropItemMenu, action });
        });
    });
};

export default init;
