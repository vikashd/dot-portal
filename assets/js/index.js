/**
 * Dropdown menu
 */
(function () {
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
        return new bootstrap.Dropdown(dropdownToggleEl, {
            popperConfig: function (defaultBsPopperConfig) {
                return Object.assign(defaultBsPopperConfig, { modifiers: [sameWidth, offset] });
            },
        });
    });
})();

/**
 * Mobile menu
 */
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

/**
 * Video modal
 */
(function () {
    var videoBtns = Array.prototype.slice.call(document.querySelectorAll("[data-toggle-video]"));
    var modalEl = document.getElementById("modal-video");

    if (!modalEl) {
        return;
    }

    var modal = new bootstrap.Modal(modalEl);
    var iframe = modalEl.querySelector("iframe");

    videoBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            var src = e.currentTarget.getAttribute("data-toggle-video");

            iframe.src = src;
            modal.show();
        });
    });

    modalEl.addEventListener("hidden.bs.modal", function () {
        iframe.src = "";
    });
})();

/**
 * Landing page
 */
(function () {
    var introVideo = document.getElementById("intro-video");

    if (!introVideo) {
        return;
    }

    var playBtnContainer = document.getElementById("btn-intro-video-play-container");
    var playBtn = document.getElementById("btn-intro-video-play");
    var player = new Vimeo.Player(introVideo, { controls: false });

    player.on("loaded", function () {
        playBtnContainer.classList.remove("d-none");
    });

    player.on("playing", function () {
        playBtnContainer.classList.add("is-playing");
    });

    player.on("pause", function () {
        playBtnContainer.classList.remove("is-playing");
    });

    player.on("bufferstart", function () {
        playBtn.classList.add("is-loading");
    });

    player.on("bufferend", function () {
        playBtn.classList.remove("is-loading");
    });

    playBtnContainer.addEventListener("click", function () {
        player.getPaused().then(function (paused) {
            if (paused) {
                player.play();
            } else {
                player.pause();
            }
        });
    });
})();
