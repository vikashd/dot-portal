import { Dropdown } from "bootstrap";

const init = () => {
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
    dropdownElementList.map(function (dropdownToggleEl) {
        return new Dropdown(dropdownToggleEl, {
            popperConfig: function (defaultBsPopperConfig) {
                return Object.assign(defaultBsPopperConfig, { modifiers: [sameWidth, offset] });
            },
        });
    });
};

init();
