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
 * Account dropdown menu
 */
(function () {
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
})();

/**
 * Notification bar
 */
(function () {
    var bar = document.getElementById("notification-bar");

    if (!bar) {
        return;
    }

    var closeBtn = document.getElementById("notification-close");

    function resize() {
        document.body.style.paddingTop = bar.offsetHeight + "px";
    }

    function close() {
        document.body.style.paddingTop = "";
        bar.style.transform = "translateY(-100%)";

        bar.addEventListener("transitionend", function () {
            document.body.classList.remove("body-notification");
            window.removeEventListener("resize", resize);
            bar.style.visibility = "hidden";
        });
    }

    document.body.classList.add("body-notification");
    document.body.style.paddingTop = bar.offsetHeight + "px";
    bar.style.visibility = "visible";
    bar.style.transform = "translateY(0)";

    window.addEventListener("resize", resize);
    closeBtn.addEventListener("click", close);
})();

/**
 * Mobile menu
 */
(function () {
    var mobileMenuBtn = document.getElementById("mobile-menu-btn");
    var mobileMenuBtnClose = document.getElementById("mobile-menu-close-btn");
    var menu = document.getElementById("mobile-menu");
    var open = false;

    function openMenu() {
        open = true;
        menu.style.transform = "translate3d(0, 0, 0)";
    }

    function closeMenu() {
        open = false;
        menu.style.transform = "translate3d(-100%, 0, 0)";
    }

    function clickHandler() {
        if (open) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    mobileMenuBtn.addEventListener("click", clickHandler);
    mobileMenuBtnClose.addEventListener("click", clickHandler);

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    mediaQuery.addEventListener("change", function (e) {
        if (e.matches && open) {
            closeMenu();
        }
    });
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

    videoBtns.forEach(function (btn) {
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
 * Fullscreen video
 */
(function () {
    var fullscreenBtns = Array.prototype.slice.call(document.querySelectorAll("[data-vimeo-fs]"));

    fullscreenBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            var videoId = e.currentTarget.getAttribute("data-vimeo-fs");

            const video = document.querySelector(`iframe[src*="${videoId}"]`);

            if (video) {
                var player = new Vimeo.Player(video);

                player.requestFullscreen();
            }
        });
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
    var player = new Vimeo.Player(introVideo);

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
