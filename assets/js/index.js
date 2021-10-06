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
            return [0, -reference.height];
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
