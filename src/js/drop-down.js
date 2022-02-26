import { Dropdown } from 'bootstrap';

const init = () => {
    const sameWidth = {
        name: 'sameWidth',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect: ({ state }) => {
            state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
        },
    };

    const offset = {
        name: 'offset',
        options: {
            offset: ({ placement, reference, popper }) => {
                return [0, -reference.height - 10];
            },
        },
    };

    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-btn'));

    dropdownElementList.map(
        (dropdownToggleEl) =>
            new Dropdown(dropdownToggleEl, {
                popperConfig: (defaultBsPopperConfig) =>
                    Object.assign(defaultBsPopperConfig, { modifiers: [sameWidth, offset] }),
            })
    );
};

init();
