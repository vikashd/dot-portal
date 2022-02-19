!(function (e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
                (n.r(o),
                Object.defineProperty(o, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
            )
                for (var i in e)
                    n.d(
                        o,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return o;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "../"),
        n((n.s = 9));
})([
    function (e, t) {
        var n, o;
        (n = {
            name: "sameWidth",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
                var t = e.state;
                t.styles.popper.width = "".concat(t.rects.reference.width, "px");
            },
            effect: function (e) {
                var t = e.state;
                t.elements.popper.style.width = "".concat(t.elements.reference.offsetWidth, "px");
            },
        }),
            (o = {
                name: "offset",
                options: {
                    offset: function (e) {
                        e.placement;
                        var t = e.reference;
                        return e.popper, [0, -t.height - 10];
                    },
                },
            }),
            [].slice.call(document.querySelectorAll(".dropdown-btn")).map(function (e) {
                return new bootstrap.Dropdown(e, {
                    popperConfig: function (e) {
                        return Object.assign(e, { modifiers: [n, o] });
                    },
                });
            });
    },
    function (e, t) {
        !(function () {
            var e = document.getElementById("account-menu-btn");
            if (e) {
                var t = {
                    name: "offset",
                    options: {
                        offset: function (e) {
                            e.placement, e.reference, e.popper;
                            return [-18, 20];
                        },
                    },
                };
                new bootstrap.Dropdown(e, {
                    popperConfig: function (e) {
                        return Object.assign(e, { modifiers: [t] });
                    },
                });
            }
        })();
    },
    function (e, t) {
        !(function () {
            var e = document.getElementsByClassName("js-menu-btn");
            if (e.length) {
                var t = {
                    name: "offset",
                    options: {
                        offset: function (e) {
                            e.placement;
                            var t = e.reference;
                            e.popper;
                            return [0, -t.height];
                        },
                    },
                };
                [].slice.call(e).forEach(function (e) {
                    return new bootstrap.Dropdown(e, {
                        popperConfig: function (e) {
                            return Object.assign(e, { modifiers: [t] });
                        },
                    });
                });
                var n = document.querySelectorAll("[data-drop-item-menu]");
                n.length &&
                    [].slice.call(n).forEach(function (e) {
                        var t = e.dataset;
                        e.addEventListener("click", function (e) {
                            if ((e.preventDefault(), t.dropItemMenu)) {
                                var n = e.target.dataset;
                                alert("".concat(n.action, " ").concat(t.dropItemMenu));
                            }
                        });
                    });
            }
        })();
    },
    function (e, t) {
        !(function () {
            var e = document.getElementById("intro-video");
            if (e) {
                var t = document.getElementById("btn-intro-video-play-container"),
                    n = document.getElementById("btn-intro-video-play"),
                    o = new Vimeo.Player(e);
                o.on("loaded", function () {
                    t.classList.remove("d-none");
                }),
                    o.on("playing", function () {
                        t.classList.add("is-playing");
                    }),
                    o.on("pause", function () {
                        t.classList.remove("is-playing");
                    }),
                    o.on("bufferstart", function () {
                        n.classList.add("is-loading");
                    }),
                    o.on("bufferend", function () {
                        n.classList.remove("is-loading");
                    }),
                    t.addEventListener("click", function () {
                        o.getPaused().then(function (e) {
                            e ? o.play() : o.pause();
                        });
                    });
            }
        })();
    },
    function (e, t) {
        !(function () {
            var e = document.getElementById("mobile-menu-btn"),
                t = document.getElementById("mobile-menu-close-btn"),
                n = document.getElementById("mobile-menu"),
                o = !1;
            function i() {
                (o = !1), (n.style.transform = "translate3d(-100%, 0, 0)");
            }
            function r() {
                o ? i() : ((o = !0), (n.style.transform = "translate3d(0, 0, 0)"));
            }
            e.addEventListener("click", r),
                t.addEventListener("click", r),
                window.matchMedia("(min-width: 768px)").addEventListener("change", function (e) {
                    e.matches && o && i();
                });
        })();
    },
    function (e, t) {
        !(function () {
            var e = document.getElementById("notification-bar");
            if (e) {
                var t = document.getElementById("notification-close");
                document.body.classList.add("body-notification"),
                    (document.body.style.paddingTop = e.offsetHeight + "px"),
                    (e.style.visibility = "visible"),
                    (e.style.transform = "translateY(0)"),
                    window.addEventListener("resize", n),
                    t.addEventListener("click", function () {
                        (document.body.style.paddingTop = ""),
                            (e.style.transform = "translateY(-100%)"),
                            e.addEventListener("transitionend", function () {
                                document.body.classList.remove("body-notification"),
                                    window.removeEventListener("resize", n),
                                    (e.style.visibility = "hidden");
                            });
                    });
            }
            function n() {
                document.body.style.paddingTop = e.offsetHeight + "px";
            }
        })();
    },
    function (e, t) {
        !(function () {
            function e(e, t, n) {
                e.removeEventListener("click", this.click), t.parentNode.removeChild(t);
            }
            Array.prototype.slice.call(document.querySelectorAll("[data-notification]")).forEach(function (t) {
                var n = t.getElementsByClassName("btn-close")[0];
                if (n) {
                    var o = {};
                    (o.click = e.bind(o, n, t)), n.addEventListener("click", o.click);
                }
            });
        })();
    },
    function (e, t) {
        Array.prototype.slice.call(document.querySelectorAll("[data-vimeo-fs]")).forEach(function (e) {
            e.addEventListener("click", function (e) {
                var t = e.currentTarget.getAttribute("data-vimeo-fs"),
                    n = document.querySelector('iframe[src*="'.concat(t, '"]'));
                n && new Vimeo.Player(n).requestFullscreen();
            });
        });
    },
    function (e, t) {
        !(function () {
            var e = Array.prototype.slice.call(document.querySelectorAll("[data-toggle-video]")),
                t = document.getElementById("modal-video");
            if (t) {
                var n = new bootstrap.Modal(t),
                    o = t.querySelector("iframe");
                e.forEach(function (e) {
                    e.addEventListener("click", function (e) {
                        var t = e.currentTarget.getAttribute("data-toggle-video");
                        (o.src = t), n.show();
                    });
                }),
                    t.addEventListener("hidden.bs.modal", function () {
                        o.src = "";
                    });
            }
        })();
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        n(0), n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8);
    },
]);
