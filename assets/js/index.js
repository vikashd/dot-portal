!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var s = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (i.r(n),
                Object.defineProperty(n, "default", { enumerable: !0, value: t }),
                2 & e && "string" != typeof t)
            )
                for (var s in t)
                    i.d(
                        n,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "../"),
        i((i.s = 5));
})([
    function (t, e) {
        (() => {
            var t = document.getElementById("intro-video");
            if (t) {
                var e = document.getElementById("btn-intro-video-play-container"),
                    i = document.getElementById("btn-intro-video-play"),
                    n = new Vimeo.Player(t);
                n.on("loaded", function () {
                    e.classList.remove("d-none");
                }),
                    n.on("playing", function () {
                        e.classList.add("is-playing");
                    }),
                    n.on("pause", function () {
                        e.classList.remove("is-playing");
                    }),
                    n.on("bufferstart", function () {
                        i.classList.add("is-loading");
                    }),
                    n.on("bufferend", function () {
                        i.classList.remove("is-loading");
                    }),
                    e.addEventListener("click", function () {
                        n.getPaused().then(function (t) {
                            t ? n.play() : n.pause();
                        });
                    });
            }
        })();
    },
    function (t, e) {
        (() => {
            var t = document.getElementById("mobile-menu-btn"),
                e = document.getElementById("mobile-menu-close-btn"),
                i = document.getElementById("mobile-menu"),
                n = !1;
            function s() {
                (n = !1), (i.style.transform = "translate3d(-100%, 0, 0)");
            }
            function o() {
                n ? s() : ((n = !0), (i.style.transform = "translate3d(0, 0, 0)"));
            }
            t.addEventListener("click", o),
                e.addEventListener("click", o),
                window.matchMedia("(min-width: 768px)").addEventListener("change", function (t) {
                    t.matches && n && s();
                });
        })();
    },
    function (t, e) {
        (() => {
            var t = document.getElementById("notification-bar");
            if (t) {
                var e = document.getElementById("notification-close");
                document.body.classList.add("body-notification"),
                    (document.body.style.paddingTop = t.offsetHeight + "px"),
                    (t.style.visibility = "visible"),
                    (t.style.transform = "translateY(0)"),
                    window.addEventListener("resize", i),
                    e.addEventListener("click", function () {
                        (document.body.style.paddingTop = ""),
                            (t.style.transform = "translateY(-100%)"),
                            t.addEventListener("transitionend", function () {
                                document.body.classList.remove("body-notification"),
                                    window.removeEventListener("resize", i),
                                    (t.style.visibility = "hidden");
                            });
                    });
            }
            function i() {
                document.body.style.paddingTop = t.offsetHeight + "px";
            }
        })();
    },
    function (t, e) {
        (() => {
            function t(t, e, i) {
                t.removeEventListener("click", this.click), e.parentNode.removeChild(e);
            }
            Array.prototype.slice.call(document.querySelectorAll("[data-notification]")).forEach(function (e) {
                var i = e.getElementsByClassName("btn-close")[0];
                if (i) {
                    var n = {};
                    (n.click = t.bind(n, i, e)), i.addEventListener("click", n.click);
                }
            });
        })();
    },
    function (t, e) {
        Array.prototype.slice.call(document.querySelectorAll("[data-vimeo-fs]")).forEach(function (t) {
            t.addEventListener("click", function (t) {
                var e = t.currentTarget.getAttribute("data-vimeo-fs"),
                    i = document.querySelector(`iframe[src*="${e}"]`);
                i && new Vimeo.Player(i).requestFullscreen();
            });
        });
    },
    function (t, e, i) {
        "use strict";
        i.r(e);
        var n = {};
        i.r(n),
            i.d(n, "top", function () {
                return s;
            }),
            i.d(n, "bottom", function () {
                return o;
            }),
            i.d(n, "right", function () {
                return r;
            }),
            i.d(n, "left", function () {
                return a;
            }),
            i.d(n, "auto", function () {
                return l;
            }),
            i.d(n, "basePlacements", function () {
                return c;
            }),
            i.d(n, "start", function () {
                return d;
            }),
            i.d(n, "end", function () {
                return h;
            }),
            i.d(n, "clippingParents", function () {
                return u;
            }),
            i.d(n, "viewport", function () {
                return f;
            }),
            i.d(n, "popper", function () {
                return p;
            }),
            i.d(n, "reference", function () {
                return m;
            }),
            i.d(n, "variationPlacements", function () {
                return g;
            }),
            i.d(n, "placements", function () {
                return _;
            }),
            i.d(n, "beforeRead", function () {
                return b;
            }),
            i.d(n, "read", function () {
                return v;
            }),
            i.d(n, "afterRead", function () {
                return y;
            }),
            i.d(n, "beforeMain", function () {
                return w;
            }),
            i.d(n, "main", function () {
                return E;
            }),
            i.d(n, "afterMain", function () {
                return A;
            }),
            i.d(n, "beforeWrite", function () {
                return T;
            }),
            i.d(n, "write", function () {
                return O;
            }),
            i.d(n, "afterWrite", function () {
                return C;
            }),
            i.d(n, "modifierPhases", function () {
                return k;
            }),
            i.d(n, "applyStyles", function () {
                return I;
            }),
            i.d(n, "arrow", function () {
                return G;
            }),
            i.d(n, "computeStyles", function () {
                return et;
            }),
            i.d(n, "eventListeners", function () {
                return nt;
            }),
            i.d(n, "flip", function () {
                return _t;
            }),
            i.d(n, "hide", function () {
                return yt;
            }),
            i.d(n, "offset", function () {
                return wt;
            }),
            i.d(n, "popperOffsets", function () {
                return Et;
            }),
            i.d(n, "preventOverflow", function () {
                return At;
            }),
            i.d(n, "popperGenerator", function () {
                return xt;
            }),
            i.d(n, "detectOverflow", function () {
                return gt;
            }),
            i.d(n, "createPopperBase", function () {
                return Lt;
            }),
            i.d(n, "createPopper", function () {
                return St;
            }),
            i.d(n, "createPopperLite", function () {
                return Dt;
            });
        var s = "top",
            o = "bottom",
            r = "right",
            a = "left",
            l = "auto",
            c = [s, o, r, a],
            d = "start",
            h = "end",
            u = "clippingParents",
            f = "viewport",
            p = "popper",
            m = "reference",
            g = c.reduce(function (t, e) {
                return t.concat([e + "-" + d, e + "-" + h]);
            }, []),
            _ = [].concat(c, [l]).reduce(function (t, e) {
                return t.concat([e, e + "-" + d, e + "-" + h]);
            }, []),
            b = "beforeRead",
            v = "read",
            y = "afterRead",
            w = "beforeMain",
            E = "main",
            A = "afterMain",
            T = "beforeWrite",
            O = "write",
            C = "afterWrite",
            k = [b, v, y, w, E, A, T, O, C];
        function x(t) {
            return t ? (t.nodeName || "").toLowerCase() : null;
        }
        function L(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return (e && e.defaultView) || window;
            }
            return t;
        }
        function S(t) {
            return t instanceof L(t).Element || t instanceof Element;
        }
        function D(t) {
            return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
        }
        function N(t) {
            return "undefined" != typeof ShadowRoot && (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot);
        }
        var I = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (t) {
                var e = t.state;
                Object.keys(e.elements).forEach(function (t) {
                    var i = e.styles[t] || {},
                        n = e.attributes[t] || {},
                        s = e.elements[t];
                    D(s) &&
                        x(s) &&
                        (Object.assign(s.style, i),
                        Object.keys(n).forEach(function (t) {
                            var e = n[t];
                            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                        }));
                });
            },
            effect: function (t) {
                var e = t.state,
                    i = {
                        popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" },
                        arrow: { position: "absolute" },
                        reference: {},
                    };
                return (
                    Object.assign(e.elements.popper.style, i.popper),
                    (e.styles = i),
                    e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                    function () {
                        Object.keys(e.elements).forEach(function (t) {
                            var n = e.elements[t],
                                s = e.attributes[t] || {},
                                o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (
                                    t,
                                    e
                                ) {
                                    return (t[e] = ""), t;
                                },
                                {});
                            D(n) &&
                                x(n) &&
                                (Object.assign(n.style, o),
                                Object.keys(s).forEach(function (t) {
                                    n.removeAttribute(t);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function P(t) {
            return t.split("-")[0];
        }
        var j = Math.max,
            M = Math.min,
            B = Math.round;
        function H(t, e) {
            void 0 === e && (e = !1);
            var i = t.getBoundingClientRect(),
                n = 1,
                s = 1;
            if (D(t) && e) {
                var o = t.offsetHeight,
                    r = t.offsetWidth;
                r > 0 && (n = B(i.width) / r || 1), o > 0 && (s = B(i.height) / o || 1);
            }
            return {
                width: i.width / n,
                height: i.height / s,
                top: i.top / s,
                right: i.right / n,
                bottom: i.bottom / s,
                left: i.left / n,
                x: i.left / n,
                y: i.top / s,
            };
        }
        function R(t) {
            var e = H(t),
                i = t.offsetWidth,
                n = t.offsetHeight;
            return (
                Math.abs(e.width - i) <= 1 && (i = e.width),
                Math.abs(e.height - n) <= 1 && (n = e.height),
                { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
            );
        }
        function W(t, e) {
            var i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && N(i)) {
                var n = e;
                do {
                    if (n && t.isSameNode(n)) return !0;
                    n = n.parentNode || n.host;
                } while (n);
            }
            return !1;
        }
        function q(t) {
            return L(t).getComputedStyle(t);
        }
        function z(t) {
            return ["table", "td", "th"].indexOf(x(t)) >= 0;
        }
        function F(t) {
            return ((S(t) ? t.ownerDocument : t.document) || window.document).documentElement;
        }
        function $(t) {
            return "html" === x(t) ? t : t.assignedSlot || t.parentNode || (N(t) ? t.host : null) || F(t);
        }
        function U(t) {
            return D(t) && "fixed" !== q(t).position ? t.offsetParent : null;
        }
        function V(t) {
            for (var e = L(t), i = U(t); i && z(i) && "static" === q(i).position; ) i = U(i);
            return i && ("html" === x(i) || ("body" === x(i) && "static" === q(i).position))
                ? e
                : i ||
                      (function (t) {
                          var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                          if (-1 !== navigator.userAgent.indexOf("Trident") && D(t) && "fixed" === q(t).position)
                              return null;
                          for (var i = $(t); D(i) && ["html", "body"].indexOf(x(i)) < 0; ) {
                              var n = q(i);
                              if (
                                  "none" !== n.transform ||
                                  "none" !== n.perspective ||
                                  "paint" === n.contain ||
                                  -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                                  (e && "filter" === n.willChange) ||
                                  (e && n.filter && "none" !== n.filter)
                              )
                                  return i;
                              i = i.parentNode;
                          }
                          return null;
                      })(t) ||
                      e;
        }
        function K(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        function Y(t, e, i) {
            return j(t, M(e, i));
        }
        function X(t) {
            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
        }
        function Q(t, e) {
            return e.reduce(function (e, i) {
                return (e[i] = t), e;
            }, {});
        }
        var G = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e,
                    i = t.state,
                    n = t.name,
                    l = t.options,
                    d = i.elements.arrow,
                    h = i.modifiersData.popperOffsets,
                    u = P(i.placement),
                    f = K(u),
                    p = [a, r].indexOf(u) >= 0 ? "height" : "width";
                if (d && h) {
                    var m = (function (t, e) {
                            return X(
                                "number" !=
                                    typeof (t =
                                        "function" == typeof t
                                            ? t(Object.assign({}, e.rects, { placement: e.placement }))
                                            : t)
                                    ? t
                                    : Q(t, c)
                            );
                        })(l.padding, i),
                        g = R(d),
                        _ = "y" === f ? s : a,
                        b = "y" === f ? o : r,
                        v = i.rects.reference[p] + i.rects.reference[f] - h[f] - i.rects.popper[p],
                        y = h[f] - i.rects.reference[f],
                        w = V(d),
                        E = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
                        A = v / 2 - y / 2,
                        T = m[_],
                        O = E - g[p] - m[b],
                        C = E / 2 - g[p] / 2 + A,
                        k = Y(T, C, O),
                        x = f;
                    i.modifiersData[n] = (((e = {})[x] = k), (e.centerOffset = k - C), e);
                }
            },
            effect: function (t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n &&
                    ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
                    W(e.elements.popper, n) &&
                    (e.elements.arrow = n);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function Z(t) {
            return t.split("-")[1];
        }
        var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function tt(t) {
            var e,
                i = t.popper,
                n = t.popperRect,
                l = t.placement,
                c = t.variation,
                d = t.offsets,
                u = t.position,
                f = t.gpuAcceleration,
                p = t.adaptive,
                m = t.roundOffsets,
                g = t.isFixed,
                _ = d.x,
                b = void 0 === _ ? 0 : _,
                v = d.y,
                y = void 0 === v ? 0 : v,
                w = "function" == typeof m ? m({ x: b, y: y }) : { x: b, y: y };
            (b = w.x), (y = w.y);
            var E = d.hasOwnProperty("x"),
                A = d.hasOwnProperty("y"),
                T = a,
                O = s,
                C = window;
            if (p) {
                var k = V(i),
                    x = "clientHeight",
                    S = "clientWidth";
                if (
                    (k === L(i) &&
                        "static" !== q((k = F(i))).position &&
                        "absolute" === u &&
                        ((x = "scrollHeight"), (S = "scrollWidth")),
                    (k = k),
                    l === s || ((l === a || l === r) && c === h))
                )
                    (O = o),
                        (y -= (g && C.visualViewport ? C.visualViewport.height : k[x]) - n.height),
                        (y *= f ? 1 : -1);
                if (l === a || ((l === s || l === o) && c === h))
                    (T = r),
                        (b -= (g && C.visualViewport ? C.visualViewport.width : k[S]) - n.width),
                        (b *= f ? 1 : -1);
            }
            var D,
                N = Object.assign({ position: u }, p && J),
                I =
                    !0 === m
                        ? (function (t) {
                              var e = t.x,
                                  i = t.y,
                                  n = window.devicePixelRatio || 1;
                              return { x: B(e * n) / n || 0, y: B(i * n) / n || 0 };
                          })({ x: b, y: y })
                        : { x: b, y: y };
            return (
                (b = I.x),
                (y = I.y),
                f
                    ? Object.assign(
                          {},
                          N,
                          (((D = {})[O] = A ? "0" : ""),
                          (D[T] = E ? "0" : ""),
                          (D.transform =
                              (C.devicePixelRatio || 1) <= 1
                                  ? "translate(" + b + "px, " + y + "px)"
                                  : "translate3d(" + b + "px, " + y + "px, 0)"),
                          D)
                      )
                    : Object.assign(
                          {},
                          N,
                          (((e = {})[O] = A ? y + "px" : ""), (e[T] = E ? b + "px" : ""), (e.transform = ""), e)
                      )
            );
        }
        var et = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = i.gpuAcceleration,
                        s = void 0 === n || n,
                        o = i.adaptive,
                        r = void 0 === o || o,
                        a = i.roundOffsets,
                        l = void 0 === a || a,
                        c = {
                            placement: P(e.placement),
                            variation: Z(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: s,
                            isFixed: "fixed" === e.options.strategy,
                        };
                    null != e.modifiersData.popperOffsets &&
                        (e.styles.popper = Object.assign(
                            {},
                            e.styles.popper,
                            tt(
                                Object.assign({}, c, {
                                    offsets: e.modifiersData.popperOffsets,
                                    position: e.options.strategy,
                                    adaptive: r,
                                    roundOffsets: l,
                                })
                            )
                        )),
                        null != e.modifiersData.arrow &&
                            (e.styles.arrow = Object.assign(
                                {},
                                e.styles.arrow,
                                tt(
                                    Object.assign({}, c, {
                                        offsets: e.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: l,
                                    })
                                )
                            )),
                        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement,
                        }));
                },
                data: {},
            },
            it = { passive: !0 };
        var nt = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (t) {
                    var e = t.state,
                        i = t.instance,
                        n = t.options,
                        s = n.scroll,
                        o = void 0 === s || s,
                        r = n.resize,
                        a = void 0 === r || r,
                        l = L(e.elements.popper),
                        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                    return (
                        o &&
                            c.forEach(function (t) {
                                t.addEventListener("scroll", i.update, it);
                            }),
                        a && l.addEventListener("resize", i.update, it),
                        function () {
                            o &&
                                c.forEach(function (t) {
                                    t.removeEventListener("scroll", i.update, it);
                                }),
                                a && l.removeEventListener("resize", i.update, it);
                        }
                    );
                },
                data: {},
            },
            st = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function ot(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
                return st[t];
            });
        }
        var rt = { start: "end", end: "start" };
        function at(t) {
            return t.replace(/start|end/g, function (t) {
                return rt[t];
            });
        }
        function lt(t) {
            var e = L(t);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function ct(t) {
            return H(F(t)).left + lt(t).scrollLeft;
        }
        function dt(t) {
            var e = q(t),
                i = e.overflow,
                n = e.overflowX,
                s = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + s + n);
        }
        function ht(t, e) {
            var i;
            void 0 === e && (e = []);
            var n = (function t(e) {
                    return ["html", "body", "#document"].indexOf(x(e)) >= 0
                        ? e.ownerDocument.body
                        : D(e) && dt(e)
                        ? e
                        : t($(e));
                })(t),
                s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                o = L(n),
                r = s ? [o].concat(o.visualViewport || [], dt(n) ? n : []) : n,
                a = e.concat(r);
            return s ? a : a.concat(ht($(r)));
        }
        function ut(t) {
            return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
        }
        function ft(t, e) {
            return e === f
                ? ut(
                      (function (t) {
                          var e = L(t),
                              i = F(t),
                              n = e.visualViewport,
                              s = i.clientWidth,
                              o = i.clientHeight,
                              r = 0,
                              a = 0;
                          return (
                              n &&
                                  ((s = n.width),
                                  (o = n.height),
                                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                                      ((r = n.offsetLeft), (a = n.offsetTop))),
                              { width: s, height: o, x: r + ct(t), y: a }
                          );
                      })(t)
                  )
                : S(e)
                ? (function (t) {
                      var e = H(t);
                      return (
                          (e.top = e.top + t.clientTop),
                          (e.left = e.left + t.clientLeft),
                          (e.bottom = e.top + t.clientHeight),
                          (e.right = e.left + t.clientWidth),
                          (e.width = t.clientWidth),
                          (e.height = t.clientHeight),
                          (e.x = e.left),
                          (e.y = e.top),
                          e
                      );
                  })(e)
                : ut(
                      (function (t) {
                          var e,
                              i = F(t),
                              n = lt(t),
                              s = null == (e = t.ownerDocument) ? void 0 : e.body,
                              o = j(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                              r = j(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                              a = -n.scrollLeft + ct(t),
                              l = -n.scrollTop;
                          return (
                              "rtl" === q(s || i).direction && (a += j(i.clientWidth, s ? s.clientWidth : 0) - o),
                              { width: o, height: r, x: a, y: l }
                          );
                      })(F(t))
                  );
        }
        function pt(t, e, i) {
            var n =
                    "clippingParents" === e
                        ? (function (t) {
                              var e = ht($(t)),
                                  i = ["absolute", "fixed"].indexOf(q(t).position) >= 0 && D(t) ? V(t) : t;
                              return S(i)
                                  ? e.filter(function (t) {
                                        return S(t) && W(t, i) && "body" !== x(t);
                                    })
                                  : [];
                          })(t)
                        : [].concat(e),
                s = [].concat(n, [i]),
                o = s[0],
                r = s.reduce(function (e, i) {
                    var n = ft(t, i);
                    return (
                        (e.top = j(n.top, e.top)),
                        (e.right = M(n.right, e.right)),
                        (e.bottom = M(n.bottom, e.bottom)),
                        (e.left = j(n.left, e.left)),
                        e
                    );
                }, ft(t, o));
            return (r.width = r.right - r.left), (r.height = r.bottom - r.top), (r.x = r.left), (r.y = r.top), r;
        }
        function mt(t) {
            var e,
                i = t.reference,
                n = t.element,
                l = t.placement,
                c = l ? P(l) : null,
                u = l ? Z(l) : null,
                f = i.x + i.width / 2 - n.width / 2,
                p = i.y + i.height / 2 - n.height / 2;
            switch (c) {
                case s:
                    e = { x: f, y: i.y - n.height };
                    break;
                case o:
                    e = { x: f, y: i.y + i.height };
                    break;
                case r:
                    e = { x: i.x + i.width, y: p };
                    break;
                case a:
                    e = { x: i.x - n.width, y: p };
                    break;
                default:
                    e = { x: i.x, y: i.y };
            }
            var m = c ? K(c) : null;
            if (null != m) {
                var g = "y" === m ? "height" : "width";
                switch (u) {
                    case d:
                        e[m] = e[m] - (i[g] / 2 - n[g] / 2);
                        break;
                    case h:
                        e[m] = e[m] + (i[g] / 2 - n[g] / 2);
                }
            }
            return e;
        }
        function gt(t, e) {
            void 0 === e && (e = {});
            var i = e,
                n = i.placement,
                a = void 0 === n ? t.placement : n,
                l = i.boundary,
                d = void 0 === l ? u : l,
                h = i.rootBoundary,
                g = void 0 === h ? f : h,
                _ = i.elementContext,
                b = void 0 === _ ? p : _,
                v = i.altBoundary,
                y = void 0 !== v && v,
                w = i.padding,
                E = void 0 === w ? 0 : w,
                A = X("number" != typeof E ? E : Q(E, c)),
                T = b === p ? m : p,
                O = t.rects.popper,
                C = t.elements[y ? T : b],
                k = pt(S(C) ? C : C.contextElement || F(t.elements.popper), d, g),
                x = H(t.elements.reference),
                L = mt({ reference: x, element: O, strategy: "absolute", placement: a }),
                D = ut(Object.assign({}, O, L)),
                N = b === p ? D : x,
                I = {
                    top: k.top - N.top + A.top,
                    bottom: N.bottom - k.bottom + A.bottom,
                    left: k.left - N.left + A.left,
                    right: N.right - k.right + A.right,
                },
                P = t.modifiersData.offset;
            if (b === p && P) {
                var j = P[a];
                Object.keys(I).forEach(function (t) {
                    var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
                        i = [s, o].indexOf(t) >= 0 ? "y" : "x";
                    I[t] += j[i] * e;
                });
            }
            return I;
        }
        var _t = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name;
                if (!e.modifiersData[n]._skip) {
                    for (
                        var h = i.mainAxis,
                            u = void 0 === h || h,
                            f = i.altAxis,
                            p = void 0 === f || f,
                            m = i.fallbackPlacements,
                            b = i.padding,
                            v = i.boundary,
                            y = i.rootBoundary,
                            w = i.altBoundary,
                            E = i.flipVariations,
                            A = void 0 === E || E,
                            T = i.allowedAutoPlacements,
                            O = e.options.placement,
                            C = P(O),
                            k =
                                m ||
                                (C === O || !A
                                    ? [ot(O)]
                                    : (function (t) {
                                          if (P(t) === l) return [];
                                          var e = ot(t);
                                          return [at(t), e, at(e)];
                                      })(O)),
                            x = [O].concat(k).reduce(function (t, i) {
                                return t.concat(
                                    P(i) === l
                                        ? (function (t, e) {
                                              void 0 === e && (e = {});
                                              var i = e,
                                                  n = i.placement,
                                                  s = i.boundary,
                                                  o = i.rootBoundary,
                                                  r = i.padding,
                                                  a = i.flipVariations,
                                                  l = i.allowedAutoPlacements,
                                                  d = void 0 === l ? _ : l,
                                                  h = Z(n),
                                                  u = h
                                                      ? a
                                                          ? g
                                                          : g.filter(function (t) {
                                                                return Z(t) === h;
                                                            })
                                                      : c,
                                                  f = u.filter(function (t) {
                                                      return d.indexOf(t) >= 0;
                                                  });
                                              0 === f.length && (f = u);
                                              var p = f.reduce(function (e, i) {
                                                  return (
                                                      (e[i] = gt(t, {
                                                          placement: i,
                                                          boundary: s,
                                                          rootBoundary: o,
                                                          padding: r,
                                                      })[P(i)]),
                                                      e
                                                  );
                                              }, {});
                                              return Object.keys(p).sort(function (t, e) {
                                                  return p[t] - p[e];
                                              });
                                          })(e, {
                                              placement: i,
                                              boundary: v,
                                              rootBoundary: y,
                                              padding: b,
                                              flipVariations: A,
                                              allowedAutoPlacements: T,
                                          })
                                        : i
                                );
                            }, []),
                            L = e.rects.reference,
                            S = e.rects.popper,
                            D = new Map(),
                            N = !0,
                            I = x[0],
                            j = 0;
                        j < x.length;
                        j++
                    ) {
                        var M = x[j],
                            B = P(M),
                            H = Z(M) === d,
                            R = [s, o].indexOf(B) >= 0,
                            W = R ? "width" : "height",
                            q = gt(e, { placement: M, boundary: v, rootBoundary: y, altBoundary: w, padding: b }),
                            z = R ? (H ? r : a) : H ? o : s;
                        L[W] > S[W] && (z = ot(z));
                        var F = ot(z),
                            $ = [];
                        if (
                            (u && $.push(q[B] <= 0),
                            p && $.push(q[z] <= 0, q[F] <= 0),
                            $.every(function (t) {
                                return t;
                            }))
                        ) {
                            (I = M), (N = !1);
                            break;
                        }
                        D.set(M, $);
                    }
                    if (N)
                        for (
                            var U = function (t) {
                                    var e = x.find(function (e) {
                                        var i = D.get(e);
                                        if (i)
                                            return i.slice(0, t).every(function (t) {
                                                return t;
                                            });
                                    });
                                    if (e) return (I = e), "break";
                                },
                                V = A ? 3 : 1;
                            V > 0;
                            V--
                        ) {
                            if ("break" === U(V)) break;
                        }
                    e.placement !== I && ((e.modifiersData[n]._skip = !0), (e.placement = I), (e.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function bt(t, e, i) {
            return (
                void 0 === i && (i = { x: 0, y: 0 }),
                {
                    top: t.top - e.height - i.y,
                    right: t.right - e.width + i.x,
                    bottom: t.bottom - e.height + i.y,
                    left: t.left - e.width - i.x,
                }
            );
        }
        function vt(t) {
            return [s, r, o, a].some(function (e) {
                return t[e] >= 0;
            });
        }
        var yt = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = gt(e, { elementContext: "reference" }),
                    a = gt(e, { altBoundary: !0 }),
                    l = bt(r, n),
                    c = bt(a, s, o),
                    d = vt(l),
                    h = vt(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: d,
                    hasPopperEscaped: h,
                }),
                    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-reference-hidden": d,
                        "data-popper-escaped": h,
                    }));
            },
        };
        var wt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    o = i.offset,
                    l = void 0 === o ? [0, 0] : o,
                    c = _.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = P(t),
                                    o = [a, s].indexOf(n) >= 0 ? -1 : 1,
                                    l = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i,
                                    c = l[0],
                                    d = l[1];
                                return (
                                    (c = c || 0),
                                    (d = (d || 0) * o),
                                    [a, r].indexOf(n) >= 0 ? { x: d, y: c } : { x: c, y: d }
                                );
                            })(i, e.rects, l)),
                            t
                        );
                    }, {}),
                    d = c[e.placement],
                    h = d.x,
                    u = d.y;
                null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += h), (e.modifiersData.popperOffsets.y += u)),
                    (e.modifiersData[n] = c);
            },
        };
        var Et = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = mt({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                });
            },
            data: {},
        };
        var At = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    l = i.mainAxis,
                    c = void 0 === l || l,
                    h = i.altAxis,
                    u = void 0 !== h && h,
                    f = i.boundary,
                    p = i.rootBoundary,
                    m = i.altBoundary,
                    g = i.padding,
                    _ = i.tether,
                    b = void 0 === _ || _,
                    v = i.tetherOffset,
                    y = void 0 === v ? 0 : v,
                    w = gt(e, { boundary: f, rootBoundary: p, padding: g, altBoundary: m }),
                    E = P(e.placement),
                    A = Z(e.placement),
                    T = !A,
                    O = K(E),
                    C = "x" === O ? "y" : "x",
                    k = e.modifiersData.popperOffsets,
                    x = e.rects.reference,
                    L = e.rects.popper,
                    S = "function" == typeof y ? y(Object.assign({}, e.rects, { placement: e.placement })) : y,
                    D =
                        "number" == typeof S
                            ? { mainAxis: S, altAxis: S }
                            : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
                    N = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    I = { x: 0, y: 0 };
                if (k) {
                    if (c) {
                        var B,
                            H = "y" === O ? s : a,
                            W = "y" === O ? o : r,
                            q = "y" === O ? "height" : "width",
                            z = k[O],
                            F = z + w[H],
                            $ = z - w[W],
                            U = b ? -L[q] / 2 : 0,
                            X = A === d ? x[q] : L[q],
                            Q = A === d ? -L[q] : -x[q],
                            G = e.elements.arrow,
                            J = b && G ? R(G) : { width: 0, height: 0 },
                            tt = e.modifiersData["arrow#persistent"]
                                ? e.modifiersData["arrow#persistent"].padding
                                : { top: 0, right: 0, bottom: 0, left: 0 },
                            et = tt[H],
                            it = tt[W],
                            nt = Y(0, x[q], J[q]),
                            st = T ? x[q] / 2 - U - nt - et - D.mainAxis : X - nt - et - D.mainAxis,
                            ot = T ? -x[q] / 2 + U + nt + it + D.mainAxis : Q + nt + it + D.mainAxis,
                            rt = e.elements.arrow && V(e.elements.arrow),
                            at = rt ? ("y" === O ? rt.clientTop || 0 : rt.clientLeft || 0) : 0,
                            lt = null != (B = null == N ? void 0 : N[O]) ? B : 0,
                            ct = z + ot - lt,
                            dt = Y(b ? M(F, z + st - lt - at) : F, z, b ? j($, ct) : $);
                        (k[O] = dt), (I[O] = dt - z);
                    }
                    if (u) {
                        var ht,
                            ut = "x" === O ? s : a,
                            ft = "x" === O ? o : r,
                            pt = k[C],
                            mt = "y" === C ? "height" : "width",
                            _t = pt + w[ut],
                            bt = pt - w[ft],
                            vt = -1 !== [s, a].indexOf(E),
                            yt = null != (ht = null == N ? void 0 : N[C]) ? ht : 0,
                            wt = vt ? _t : pt - x[mt] - L[mt] - yt + D.altAxis,
                            Et = vt ? pt + x[mt] + L[mt] - yt - D.altAxis : bt,
                            At =
                                b && vt
                                    ? (function (t, e, i) {
                                          var n = Y(t, e, i);
                                          return n > i ? i : n;
                                      })(wt, pt, Et)
                                    : Y(b ? wt : _t, pt, b ? Et : bt);
                        (k[C] = At), (I[C] = At - pt);
                    }
                    e.modifiersData[n] = I;
                }
            },
            requiresIfExists: ["offset"],
        };
        function Tt(t, e, i) {
            void 0 === i && (i = !1);
            var n,
                s,
                o = D(e),
                r =
                    D(e) &&
                    (function (t) {
                        var e = t.getBoundingClientRect(),
                            i = B(e.width) / t.offsetWidth || 1,
                            n = B(e.height) / t.offsetHeight || 1;
                        return 1 !== i || 1 !== n;
                    })(e),
                a = F(e),
                l = H(t, r),
                c = { scrollLeft: 0, scrollTop: 0 },
                d = { x: 0, y: 0 };
            return (
                (o || (!o && !i)) &&
                    (("body" !== x(e) || dt(a)) &&
                        (c =
                            (n = e) !== L(n) && D(n)
                                ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                                : lt(n)),
                    D(e) ? (((d = H(e, !0)).x += e.clientLeft), (d.y += e.clientTop)) : a && (d.x = ct(a))),
                { x: l.left + c.scrollLeft - d.x, y: l.top + c.scrollTop - d.y, width: l.width, height: l.height }
            );
        }
        function Ot(t) {
            var e = new Map(),
                i = new Set(),
                n = [];
            return (
                t.forEach(function (t) {
                    e.set(t.name, t);
                }),
                t.forEach(function (t) {
                    i.has(t.name) ||
                        (function t(s) {
                            i.add(s.name),
                                [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                                    if (!i.has(n)) {
                                        var s = e.get(n);
                                        s && t(s);
                                    }
                                }),
                                n.push(s);
                        })(t);
                }),
                n
            );
        }
        var Ct = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function kt() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return !e.some(function (t) {
                return !(t && "function" == typeof t.getBoundingClientRect);
            });
        }
        function xt(t) {
            void 0 === t && (t = {});
            var e = t,
                i = e.defaultModifiers,
                n = void 0 === i ? [] : i,
                s = e.defaultOptions,
                o = void 0 === s ? Ct : s;
            return function (t, e, i) {
                void 0 === i && (i = o);
                var s,
                    r,
                    a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, Ct, o),
                        modifiersData: {},
                        elements: { reference: t, popper: e },
                        attributes: {},
                        styles: {},
                    },
                    l = [],
                    c = !1,
                    d = {
                        state: a,
                        setOptions: function (i) {
                            var s = "function" == typeof i ? i(a.options) : i;
                            h(),
                                (a.options = Object.assign({}, o, a.options, s)),
                                (a.scrollParents = {
                                    reference: S(t) ? ht(t) : t.contextElement ? ht(t.contextElement) : [],
                                    popper: ht(e),
                                });
                            var r = (function (t) {
                                var e = Ot(t);
                                return k.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                (function (t) {
                                    var e = t.reduce(function (t, e) {
                                        var i = t[e.name];
                                        return (
                                            (t[e.name] = i
                                                ? Object.assign({}, i, e, {
                                                      options: Object.assign({}, i.options, e.options),
                                                      data: Object.assign({}, i.data, e.data),
                                                  })
                                                : e),
                                            t
                                        );
                                    }, {});
                                    return Object.keys(e).map(function (t) {
                                        return e[t];
                                    });
                                })([].concat(n, a.options.modifiers))
                            );
                            return (
                                (a.orderedModifiers = r.filter(function (t) {
                                    return t.enabled;
                                })),
                                a.orderedModifiers.forEach(function (t) {
                                    var e = t.name,
                                        i = t.options,
                                        n = void 0 === i ? {} : i,
                                        s = t.effect;
                                    if ("function" == typeof s) {
                                        var o = s({ state: a, name: e, instance: d, options: n });
                                        l.push(o || function () {});
                                    }
                                }),
                                d.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!c) {
                                var t = a.elements,
                                    e = t.reference,
                                    i = t.popper;
                                if (kt(e, i)) {
                                    (a.rects = {
                                        reference: Tt(e, V(i), "fixed" === a.options.strategy),
                                        popper: R(i),
                                    }),
                                        (a.reset = !1),
                                        (a.placement = a.options.placement),
                                        a.orderedModifiers.forEach(function (t) {
                                            return (a.modifiersData[t.name] = Object.assign({}, t.data));
                                        });
                                    for (var n = 0; n < a.orderedModifiers.length; n++)
                                        if (!0 !== a.reset) {
                                            var s = a.orderedModifiers[n],
                                                o = s.fn,
                                                r = s.options,
                                                l = void 0 === r ? {} : r,
                                                h = s.name;
                                            "function" == typeof o &&
                                                (a = o({ state: a, options: l, name: h, instance: d }) || a);
                                        } else (a.reset = !1), (n = -1);
                                }
                            }
                        },
                        update:
                            ((s = function () {
                                return new Promise(function (t) {
                                    d.forceUpdate(), t(a);
                                });
                            }),
                            function () {
                                return (
                                    r ||
                                        (r = new Promise(function (t) {
                                            Promise.resolve().then(function () {
                                                (r = void 0), t(s());
                                            });
                                        })),
                                    r
                                );
                            }),
                        destroy: function () {
                            h(), (c = !0);
                        },
                    };
                if (!kt(t, e)) return d;
                function h() {
                    l.forEach(function (t) {
                        return t();
                    }),
                        (l = []);
                }
                return (
                    d.setOptions(i).then(function (t) {
                        !c && i.onFirstUpdate && i.onFirstUpdate(t);
                    }),
                    d
                );
            };
        }
        var Lt = xt(),
            St = xt({ defaultModifiers: [nt, Et, et, I, wt, _t, At, G, yt] }),
            Dt = xt({ defaultModifiers: [nt, Et, et, I] });
        /*!
         * Bootstrap v5.1.1 (https://getbootstrap.com/)
         * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        const Nt = (t) => {
                let e = t.getAttribute("data-bs-target");
                if (!e || "#" === e) {
                    let i = t.getAttribute("href");
                    if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                    i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
                        (e = i && "#" !== i ? i.trim() : null);
                }
                return e;
            },
            It = (t) => {
                const e = Nt(t);
                return e && document.querySelector(e) ? e : null;
            },
            Pt = (t) => {
                const e = Nt(t);
                return e ? document.querySelector(e) : null;
            },
            jt = (t) => {
                t.dispatchEvent(new Event("transitionend"));
            },
            Mt = (t) => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
            Bt = (t) =>
                Mt(t) ? (t.jquery ? t[0] : t) : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
            Ht = (t, e, i) => {
                Object.keys(i).forEach((n) => {
                    const s = i[n],
                        o = e[n],
                        r =
                            o && Mt(o)
                                ? "element"
                                : null == (a = o)
                                ? "" + a
                                : {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    var a;
                    if (!new RegExp(s).test(r))
                        throw new TypeError(
                            `${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
                        );
                });
            },
            Rt = (t) =>
                !(!Mt(t) || 0 === t.getClientRects().length) &&
                "visible" === getComputedStyle(t).getPropertyValue("visibility"),
            Wt = (t) =>
                !t ||
                t.nodeType !== Node.ELEMENT_NODE ||
                !!t.classList.contains("disabled") ||
                (void 0 !== t.disabled
                    ? t.disabled
                    : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
            qt = (t) => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    const e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null;
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? qt(t.parentNode) : null;
            },
            zt = () => {},
            Ft = (t) => {
                t.offsetHeight;
            },
            $t = () => {
                const { jQuery: t } = window;
                return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
            },
            Ut = [],
            Vt = () => "rtl" === document.documentElement.dir,
            Kt = (t) => {
                var e;
                (e = () => {
                    const e = $t();
                    if (e) {
                        const i = t.NAME,
                            n = e.fn[i];
                        (e.fn[i] = t.jQueryInterface),
                            (e.fn[i].Constructor = t),
                            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
                    }
                }),
                    "loading" === document.readyState
                        ? (Ut.length ||
                              document.addEventListener("DOMContentLoaded", () => {
                                  Ut.forEach((t) => t());
                              }),
                          Ut.push(e))
                        : e();
            },
            Yt = (t) => {
                "function" == typeof t && t();
            },
            Xt = (t, e, i = !0) => {
                if (!i) return void Yt(t);
                const n =
                    ((t) => {
                        if (!t) return 0;
                        let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
                        const n = Number.parseFloat(e),
                            s = Number.parseFloat(i);
                        return n || s
                            ? ((e = e.split(",")[0]),
                              (i = i.split(",")[0]),
                              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                            : 0;
                    })(e) + 5;
                let s = !1;
                const o = ({ target: i }) => {
                    i === e && ((s = !0), e.removeEventListener("transitionend", o), Yt(t));
                };
                e.addEventListener("transitionend", o),
                    setTimeout(() => {
                        s || jt(e);
                    }, n);
            },
            Qt = (t, e, i, n) => {
                let s = t.indexOf(e);
                if (-1 === s) return t[!i && n ? t.length - 1 : 0];
                const o = t.length;
                return (s += i ? 1 : -1), n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
            },
            Gt = /[^.]*(?=\..*)\.|.*/,
            Zt = /\..*/,
            Jt = /::\d+$/,
            te = {};
        let ee = 1;
        const ie = { mouseenter: "mouseover", mouseleave: "mouseout" },
            ne = /^(mouseenter|mouseleave)/i,
            se = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function oe(t, e) {
            return (e && `${e}::${ee++}`) || t.uidEvent || ee++;
        }
        function re(t) {
            const e = oe(t);
            return (t.uidEvent = e), (te[e] = te[e] || {}), te[e];
        }
        function ae(t, e, i = null) {
            const n = Object.keys(t);
            for (let s = 0, o = n.length; s < o; s++) {
                const o = t[n[s]];
                if (o.originalHandler === e && o.delegationSelector === i) return o;
            }
            return null;
        }
        function le(t, e, i) {
            const n = "string" == typeof e,
                s = n ? i : e;
            let o = he(t);
            return se.has(o) || (o = t), [n, s, o];
        }
        function ce(t, e, i, n, s) {
            if ("string" != typeof e || !t) return;
            if ((i || ((i = n), (n = null)), ne.test(e))) {
                const t = (t) =>
                    function (e) {
                        if (
                            !e.relatedTarget ||
                            (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                        )
                            return t.call(this, e);
                    };
                n ? (n = t(n)) : (i = t(i));
            }
            const [o, r, a] = le(e, i, n),
                l = re(t),
                c = l[a] || (l[a] = {}),
                d = ae(c, r, o ? i : null);
            if (d) return void (d.oneOff = d.oneOff && s);
            const h = oe(r, e.replace(Gt, "")),
                u = o
                    ? (function (t, e, i) {
                          return function n(s) {
                              const o = t.querySelectorAll(e);
                              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                                  for (let a = o.length; a--; )
                                      if (o[a] === r)
                                          return (
                                              (s.delegateTarget = r),
                                              n.oneOff && ue.off(t, s.type, e, i),
                                              i.apply(r, [s])
                                          );
                              return null;
                          };
                      })(t, i, n)
                    : (function (t, e) {
                          return function i(n) {
                              return (n.delegateTarget = t), i.oneOff && ue.off(t, n.type, e), e.apply(t, [n]);
                          };
                      })(t, i);
            (u.delegationSelector = o ? i : null),
                (u.originalHandler = r),
                (u.oneOff = s),
                (u.uidEvent = h),
                (c[h] = u),
                t.addEventListener(a, u, o);
        }
        function de(t, e, i, n, s) {
            const o = ae(e[i], n, s);
            o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
        }
        function he(t) {
            return (t = t.replace(Zt, "")), ie[t] || t;
        }
        const ue = {
                on(t, e, i, n) {
                    ce(t, e, i, n, !1);
                },
                one(t, e, i, n) {
                    ce(t, e, i, n, !0);
                },
                off(t, e, i, n) {
                    if ("string" != typeof e || !t) return;
                    const [s, o, r] = le(e, i, n),
                        a = r !== e,
                        l = re(t),
                        c = e.startsWith(".");
                    if (void 0 !== o) {
                        if (!l || !l[r]) return;
                        return void de(t, l, r, o, s ? i : null);
                    }
                    c &&
                        Object.keys(l).forEach((i) => {
                            !(function (t, e, i, n) {
                                const s = e[i] || {};
                                Object.keys(s).forEach((o) => {
                                    if (o.includes(n)) {
                                        const n = s[o];
                                        de(t, e, i, n.originalHandler, n.delegationSelector);
                                    }
                                });
                            })(t, l, i, e.slice(1));
                        });
                    const d = l[r] || {};
                    Object.keys(d).forEach((i) => {
                        const n = i.replace(Jt, "");
                        if (!a || e.includes(n)) {
                            const e = d[i];
                            de(t, l, r, e.originalHandler, e.delegationSelector);
                        }
                    });
                },
                trigger(t, e, i) {
                    if ("string" != typeof e || !t) return null;
                    const n = $t(),
                        s = he(e),
                        o = e !== s,
                        r = se.has(s);
                    let a,
                        l = !0,
                        c = !0,
                        d = !1,
                        h = null;
                    return (
                        o &&
                            n &&
                            ((a = n.Event(e, i)),
                            n(t).trigger(a),
                            (l = !a.isPropagationStopped()),
                            (c = !a.isImmediatePropagationStopped()),
                            (d = a.isDefaultPrevented())),
                        r
                            ? ((h = document.createEvent("HTMLEvents")), h.initEvent(s, l, !0))
                            : (h = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
                        void 0 !== i &&
                            Object.keys(i).forEach((t) => {
                                Object.defineProperty(h, t, { get: () => i[t] });
                            }),
                        d && h.preventDefault(),
                        c && t.dispatchEvent(h),
                        h.defaultPrevented && void 0 !== a && a.preventDefault(),
                        h
                    );
                },
            },
            fe = new Map();
        var pe = {
            set(t, e, i) {
                fe.has(t) || fe.set(t, new Map());
                const n = fe.get(t);
                n.has(e) || 0 === n.size
                    ? n.set(e, i)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(n.keys())[0]
                          }.`
                      );
            },
            get: (t, e) => (fe.has(t) && fe.get(t).get(e)) || null,
            remove(t, e) {
                if (!fe.has(t)) return;
                const i = fe.get(t);
                i.delete(e), 0 === i.size && fe.delete(t);
            },
        };
        class me {
            constructor(t) {
                (t = Bt(t)) && ((this._element = t), pe.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                pe.remove(this._element, this.constructor.DATA_KEY),
                    ue.off(this._element, this.constructor.EVENT_KEY),
                    Object.getOwnPropertyNames(this).forEach((t) => {
                        this[t] = null;
                    });
            }
            _queueCallback(t, e, i = !0) {
                Xt(t, e, i);
            }
            static getInstance(t) {
                return pe.get(Bt(t), this.DATA_KEY);
            }
            static getOrCreateInstance(t, e = {}) {
                return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
            }
            static get VERSION() {
                return "5.1.1";
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
            static get DATA_KEY() {
                return "bs." + this.NAME;
            }
            static get EVENT_KEY() {
                return "." + this.DATA_KEY;
            }
        }
        const ge = (t, e = "hide") => {
            const i = "click.dismiss" + t.EVENT_KEY,
                n = t.NAME;
            ue.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
                if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), Wt(this))) return;
                const s = Pt(this) || this.closest("." + n);
                t.getOrCreateInstance(s)[e]();
            });
        };
        class _e extends me {
            static get NAME() {
                return "alert";
            }
            close() {
                if (ue.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                this._element.classList.remove("show");
                const t = this._element.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(), this._element, t);
            }
            _destroyElement() {
                this._element.remove(), ue.trigger(this._element, "closed.bs.alert"), this.dispose();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = _e.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        ge(_e, "close"), Kt(_e);
        class be extends me {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = be.getOrCreateInstance(this);
                    "toggle" === t && e[t]();
                });
            }
        }
        function ve(t) {
            return (
                "true" === t ||
                ("false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t))
            );
        }
        function ye(t) {
            return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
        }
        ue.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t) => {
            t.preventDefault();
            const e = t.target.closest('[data-bs-toggle="button"]');
            be.getOrCreateInstance(e).toggle();
        }),
            Kt(be);
        const we = {
                setDataAttribute(t, e, i) {
                    t.setAttribute("data-bs-" + ye(e), i);
                },
                removeDataAttribute(t, e) {
                    t.removeAttribute("data-bs-" + ye(e));
                },
                getDataAttributes(t) {
                    if (!t) return {};
                    const e = {};
                    return (
                        Object.keys(t.dataset)
                            .filter((t) => t.startsWith("bs"))
                            .forEach((i) => {
                                let n = i.replace(/^bs/, "");
                                (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (e[n] = ve(t.dataset[i]));
                            }),
                        e
                    );
                },
                getDataAttribute: (t, e) => ve(t.getAttribute("data-bs-" + ye(e))),
                offset(t) {
                    const e = t.getBoundingClientRect();
                    return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset };
                },
                position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
            },
            Ee = {
                find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
                parents(t, e) {
                    const i = [];
                    let n = t.parentNode;
                    for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
                        n.matches(e) && i.push(n), (n = n.parentNode);
                    return i;
                },
                prev(t, e) {
                    let i = t.previousElementSibling;
                    for (; i; ) {
                        if (i.matches(e)) return [i];
                        i = i.previousElementSibling;
                    }
                    return [];
                },
                next(t, e) {
                    let i = t.nextElementSibling;
                    for (; i; ) {
                        if (i.matches(e)) return [i];
                        i = i.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(t) {
                    const e = [
                        "a",
                        "button",
                        "input",
                        "textarea",
                        "select",
                        "details",
                        "[tabindex]",
                        '[contenteditable="true"]',
                    ]
                        .map((t) => t + ':not([tabindex^="-"])')
                        .join(", ");
                    return this.find(e, t).filter((t) => !Wt(t) && Rt(t));
                },
            },
            Ae = ".bs.carousel",
            Te = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            Oe = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean",
            },
            Ce = "next",
            ke = "prev",
            xe = "left",
            Le = "right",
            Se = { ArrowLeft: Le, ArrowRight: xe },
            De = `load${Ae}.data-api`,
            Ne = `click${Ae}.data-api`;
        class Ie extends me {
            constructor(t, e) {
                super(t),
                    (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._indicatorsElement = Ee.findOne(".carousel-indicators", this._element)),
                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(window.PointerEvent)),
                    this._addEventListeners();
            }
            static get Default() {
                return Te;
            }
            static get NAME() {
                return "carousel";
            }
            next() {
                this._slide(Ce);
            }
            nextWhenVisible() {
                !document.hidden && Rt(this._element) && this.next();
            }
            prev() {
                this._slide(ke);
            }
            pause(t) {
                t || (this._isPaused = !0),
                    Ee.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
                        (jt(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
            }
            cycle(t) {
                t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval), (this._interval = null)),
                    this._config &&
                        this._config.interval &&
                        !this._isPaused &&
                        (this._updateInterval(),
                        (this._interval = setInterval(
                            (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                            this._config.interval
                        )));
            }
            to(t) {
                this._activeElement = Ee.findOne(".active.carousel-item", this._element);
                const e = this._getItemIndex(this._activeElement);
                if (t > this._items.length - 1 || t < 0) return;
                if (this._isSliding) return void ue.one(this._element, "slid.bs.carousel", () => this.to(t));
                if (e === t) return this.pause(), void this.cycle();
                const i = t > e ? Ce : ke;
                this._slide(i, this._items[t]);
            }
            _getConfig(t) {
                return (
                    (t = { ...Te, ...we.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }),
                    Ht("carousel", t, Oe),
                    t
                );
            }
            _handleSwipe() {
                const t = Math.abs(this.touchDeltaX);
                if (t <= 40) return;
                const e = t / this.touchDeltaX;
                (this.touchDeltaX = 0), e && this._slide(e > 0 ? Le : xe);
            }
            _addEventListeners() {
                this._config.keyboard && ue.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
                    "hover" === this._config.pause &&
                        (ue.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
                        ue.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
                    this._config.touch && this._touchSupported && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                const t = (t) => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                    e = (e) => {
                        t(e)
                            ? (this.touchStartX = e.clientX)
                            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
                    },
                    i = (t) => {
                        this.touchDeltaX =
                            t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
                    },
                    n = (e) => {
                        t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                            this._handleSwipe(),
                            "hover" === this._config.pause &&
                                (this.pause(),
                                this.touchTimeout && clearTimeout(this.touchTimeout),
                                (this.touchTimeout = setTimeout((t) => this.cycle(t), 500 + this._config.interval)));
                    };
                Ee.find(".carousel-item img", this._element).forEach((t) => {
                    ue.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
                }),
                    this._pointerEvent
                        ? (ue.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
                          ue.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
                          this._element.classList.add("pointer-event"))
                        : (ue.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
                          ue.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
                          ue.on(this._element, "touchend.bs.carousel", (t) => n(t)));
            }
            _keydown(t) {
                if (/input|textarea/i.test(t.target.tagName)) return;
                const e = Se[t.key];
                e && (t.preventDefault(), this._slide(e));
            }
            _getItemIndex(t) {
                return (
                    (this._items = t && t.parentNode ? Ee.find(".carousel-item", t.parentNode) : []),
                    this._items.indexOf(t)
                );
            }
            _getItemByOrder(t, e) {
                const i = t === Ce;
                return Qt(this._items, e, i, this._config.wrap);
            }
            _triggerSlideEvent(t, e) {
                const i = this._getItemIndex(t),
                    n = this._getItemIndex(Ee.findOne(".active.carousel-item", this._element));
                return ue.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: n,
                    to: i,
                });
            }
            _setActiveIndicatorElement(t) {
                if (this._indicatorsElement) {
                    const e = Ee.findOne(".active", this._indicatorsElement);
                    e.classList.remove("active"), e.removeAttribute("aria-current");
                    const i = Ee.find("[data-bs-target]", this._indicatorsElement);
                    for (let e = 0; e < i.length; e++)
                        if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                            i[e].classList.add("active"), i[e].setAttribute("aria-current", "true");
                            break;
                        }
                }
            }
            _updateInterval() {
                const t = this._activeElement || Ee.findOne(".active.carousel-item", this._element);
                if (!t) return;
                const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e
                    ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
                      (this._config.interval = e))
                    : (this._config.interval = this._config.defaultInterval || this._config.interval);
            }
            _slide(t, e) {
                const i = this._directionToOrder(t),
                    n = Ee.findOne(".active.carousel-item", this._element),
                    s = this._getItemIndex(n),
                    o = e || this._getItemByOrder(i, n),
                    r = this._getItemIndex(o),
                    a = Boolean(this._interval),
                    l = i === Ce,
                    c = l ? "carousel-item-start" : "carousel-item-end",
                    d = l ? "carousel-item-next" : "carousel-item-prev",
                    h = this._orderToDirection(i);
                if (o && o.classList.contains("active")) return void (this._isSliding = !1);
                if (this._isSliding) return;
                if (this._triggerSlideEvent(o, h).defaultPrevented) return;
                if (!n || !o) return;
                (this._isSliding = !0),
                    a && this.pause(),
                    this._setActiveIndicatorElement(o),
                    (this._activeElement = o);
                const u = () => {
                    ue.trigger(this._element, "slid.bs.carousel", { relatedTarget: o, direction: h, from: s, to: r });
                };
                if (this._element.classList.contains("slide")) {
                    o.classList.add(d), Ft(o), n.classList.add(c), o.classList.add(c);
                    const t = () => {
                        o.classList.remove(c, d),
                            o.classList.add("active"),
                            n.classList.remove("active", d, c),
                            (this._isSliding = !1),
                            setTimeout(u, 0);
                    };
                    this._queueCallback(t, n, !0);
                } else n.classList.remove("active"), o.classList.add("active"), (this._isSliding = !1), u();
                a && this.cycle();
            }
            _directionToOrder(t) {
                return [Le, xe].includes(t) ? (Vt() ? (t === xe ? ke : Ce) : t === xe ? Ce : ke) : t;
            }
            _orderToDirection(t) {
                return [Ce, ke].includes(t) ? (Vt() ? (t === ke ? xe : Le) : t === ke ? Le : xe) : t;
            }
            static carouselInterface(t, e) {
                const i = Ie.getOrCreateInstance(t, e);
                let { _config: n } = i;
                "object" == typeof e && (n = { ...n, ...e });
                const s = "string" == typeof e ? e : n.slide;
                if ("number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                    i[s]();
                } else n.interval && n.ride && (i.pause(), i.cycle());
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    Ie.carouselInterface(this, t);
                });
            }
            static dataApiClickHandler(t) {
                const e = Pt(this);
                if (!e || !e.classList.contains("carousel")) return;
                const i = { ...we.getDataAttributes(e), ...we.getDataAttributes(this) },
                    n = this.getAttribute("data-bs-slide-to");
                n && (i.interval = !1), Ie.carouselInterface(e, i), n && Ie.getInstance(e).to(n), t.preventDefault();
            }
        }
        ue.on(document, Ne, "[data-bs-slide], [data-bs-slide-to]", Ie.dataApiClickHandler),
            ue.on(window, De, () => {
                const t = Ee.find('[data-bs-ride="carousel"]');
                for (let e = 0, i = t.length; e < i; e++) Ie.carouselInterface(t[e], Ie.getInstance(t[e]));
            }),
            Kt(Ie);
        const Pe = { toggle: !0, parent: null },
            je = { toggle: "boolean", parent: "(null|element)" };
        class Me extends me {
            constructor(t, e) {
                super(t), (this._isTransitioning = !1), (this._config = this._getConfig(e)), (this._triggerArray = []);
                const i = Ee.find('[data-bs-toggle="collapse"]');
                for (let t = 0, e = i.length; t < e; t++) {
                    const e = i[t],
                        n = It(e),
                        s = Ee.find(n).filter((t) => t === this._element);
                    null !== n && s.length && ((this._selector = n), this._triggerArray.push(e));
                }
                this._initializeChildren(),
                    this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
                    this._config.toggle && this.toggle();
            }
            static get Default() {
                return Pe;
            }
            static get NAME() {
                return "collapse";
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let t,
                    e = [];
                if (this._config.parent) {
                    const t = Ee.find(".collapse .collapse", this._config.parent);
                    e = Ee.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(
                        (e) => !t.includes(e)
                    );
                }
                const i = Ee.findOne(this._selector);
                if (e.length) {
                    const n = e.find((t) => i !== t);
                    if (((t = n ? Me.getInstance(n) : null), t && t._isTransitioning)) return;
                }
                if (ue.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                e.forEach((e) => {
                    i !== e && Me.getOrCreateInstance(e, { toggle: !1 }).hide(), t || pe.set(e, "bs.collapse", null);
                });
                const n = this._getDimension();
                this._element.classList.remove("collapse"),
                    this._element.classList.add("collapsing"),
                    (this._element.style[n] = 0),
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    (this._isTransitioning = !0);
                const s = "scroll" + (n[0].toUpperCase() + n.slice(1));
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove("collapsing"),
                            this._element.classList.add("collapse", "show"),
                            (this._element.style[n] = ""),
                            ue.trigger(this._element, "shown.bs.collapse");
                    },
                    this._element,
                    !0
                ),
                    (this._element.style[n] = this._element[s] + "px");
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                if (ue.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                const t = this._getDimension();
                (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px"),
                    Ft(this._element),
                    this._element.classList.add("collapsing"),
                    this._element.classList.remove("collapse", "show");
                const e = this._triggerArray.length;
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        i = Pt(e);
                    i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
                }
                this._isTransitioning = !0;
                (this._element.style[t] = ""),
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1),
                                this._element.classList.remove("collapsing"),
                                this._element.classList.add("collapse"),
                                ue.trigger(this._element, "hidden.bs.collapse");
                        },
                        this._element,
                        !0
                    );
            }
            _isShown(t = this._element) {
                return t.classList.contains("show");
            }
            _getConfig(t) {
                return (
                    ((t = { ...Pe, ...we.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle)),
                    (t.parent = Bt(t.parent)),
                    Ht("collapse", t, je),
                    t
                );
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const t = Ee.find(".collapse .collapse", this._config.parent);
                Ee.find('[data-bs-toggle="collapse"]', this._config.parent)
                    .filter((e) => !t.includes(e))
                    .forEach((t) => {
                        const e = Pt(t);
                        e && this._addAriaAndCollapsedClass([t], this._isShown(e));
                    });
            }
            _addAriaAndCollapsedClass(t, e) {
                t.length &&
                    t.forEach((t) => {
                        e ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                            t.setAttribute("aria-expanded", e);
                    });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = {};
                    "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                    const i = Me.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                        i[t]();
                    }
                });
            }
        }
        ue.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
            ("A" === t.target.tagName || (t.delegateTarget && "A" === t.delegateTarget.tagName)) && t.preventDefault();
            const e = It(this);
            Ee.find(e).forEach((t) => {
                Me.getOrCreateInstance(t, { toggle: !1 }).toggle();
            });
        }),
            Kt(Me);
        const Be = new RegExp("ArrowUp|ArrowDown|Escape"),
            He = Vt() ? "top-end" : "top-start",
            Re = Vt() ? "top-start" : "top-end",
            We = Vt() ? "bottom-end" : "bottom-start",
            qe = Vt() ? "bottom-start" : "bottom-end",
            ze = Vt() ? "left-start" : "right-start",
            Fe = Vt() ? "right-start" : "left-start",
            $e = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0,
            },
            Ue = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)",
            };
        class Ve extends me {
            constructor(t, e) {
                super(t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return $e;
            }
            static get DefaultType() {
                return Ue;
            }
            static get NAME() {
                return "dropdown";
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (Wt(this._element) || this._isShown(this._menu)) return;
                const t = { relatedTarget: this._element };
                if (ue.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
                const e = Ve.getParentFromElement(this._element);
                this._inNavbar ? we.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
                    "ontouchstart" in document.documentElement &&
                        !e.closest(".navbar-nav") &&
                        [].concat(...document.body.children).forEach((t) => ue.on(t, "mouseover", zt)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add("show"),
                    this._element.classList.add("show"),
                    ue.trigger(this._element, "shown.bs.dropdown", t);
            }
            hide() {
                if (Wt(this._element) || !this._isShown(this._menu)) return;
                const t = { relatedTarget: this._element };
                this._completeHide(t);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(t) {
                ue.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
                    ("ontouchstart" in document.documentElement &&
                        [].concat(...document.body.children).forEach((t) => ue.off(t, "mouseover", zt)),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove("show"),
                    this._element.classList.remove("show"),
                    this._element.setAttribute("aria-expanded", "false"),
                    we.removeDataAttribute(this._menu, "popper"),
                    ue.trigger(this._element, "hidden.bs.dropdown", t));
            }
            _getConfig(t) {
                if (
                    ((t = { ...this.constructor.Default, ...we.getDataAttributes(this._element), ...t }),
                    Ht("dropdown", t, this.constructor.DefaultType),
                    "object" == typeof t.reference &&
                        !Mt(t.reference) &&
                        "function" != typeof t.reference.getBoundingClientRect)
                )
                    throw new TypeError(
                        "dropdown".toUpperCase() +
                            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                    );
                return t;
            }
            _createPopper(t) {
                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let e = this._element;
                "parent" === this._config.reference
                    ? (e = t)
                    : Mt(this._config.reference)
                    ? (e = Bt(this._config.reference))
                    : "object" == typeof this._config.reference && (e = this._config.reference);
                const i = this._getPopperConfig(),
                    s = i.modifiers.find((t) => "applyStyles" === t.name && !1 === t.enabled);
                (this._popper = St(e, this._menu, i)), s && we.setDataAttribute(this._menu, "popper", "static");
            }
            _isShown(t = this._element) {
                return t.classList.contains("show");
            }
            _getMenuElement() {
                return Ee.next(this._element, ".dropdown-menu")[0];
            }
            _getPlacement() {
                const t = this._element.parentNode;
                if (t.classList.contains("dropend")) return ze;
                if (t.classList.contains("dropstart")) return Fe;
                const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? (e ? Re : He) : e ? qe : We;
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                const { offset: t } = this._config;
                return "string" == typeof t
                    ? t.split(",").map((t) => Number.parseInt(t, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _getPopperConfig() {
                const t = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "offset", options: { offset: this._getOffset() } },
                    ],
                };
                return (
                    "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                    {
                        ...t,
                        ...("function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(t)
                            : this._config.popperConfig),
                    }
                );
            }
            _selectMenuItem({ key: t, target: e }) {
                const i = Ee.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Rt);
                i.length && Qt(i, e, "ArrowDown" === t, !i.includes(e)).focus();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Ve.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
            static clearMenus(t) {
                if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))) return;
                const e = Ee.find('[data-bs-toggle="dropdown"]');
                for (let i = 0, n = e.length; i < n; i++) {
                    const n = Ve.getInstance(e[i]);
                    if (!n || !1 === n._config.autoClose) continue;
                    if (!n._isShown()) continue;
                    const s = { relatedTarget: n._element };
                    if (t) {
                        const e = t.composedPath(),
                            i = e.includes(n._menu);
                        if (
                            e.includes(n._element) ||
                            ("inside" === n._config.autoClose && !i) ||
                            ("outside" === n._config.autoClose && i)
                        )
                            continue;
                        if (
                            n._menu.contains(t.target) &&
                            (("keyup" === t.type && "Tab" === t.key) ||
                                /input|select|option|textarea|form/i.test(t.target.tagName))
                        )
                            continue;
                        "click" === t.type && (s.clickEvent = t);
                    }
                    n._completeHide(s);
                }
            }
            static getParentFromElement(t) {
                return Pt(t) || t.parentNode;
            }
            static dataApiKeydownHandler(t) {
                if (
                    /input|textarea/i.test(t.target.tagName)
                        ? "Space" === t.key ||
                          ("Escape" !== t.key &&
                              (("ArrowDown" !== t.key && "ArrowUp" !== t.key) || t.target.closest(".dropdown-menu")))
                        : !Be.test(t.key)
                )
                    return;
                const e = this.classList.contains("show");
                if (!e && "Escape" === t.key) return;
                if ((t.preventDefault(), t.stopPropagation(), Wt(this))) return;
                const i = this.matches('[data-bs-toggle="dropdown"]')
                        ? this
                        : Ee.prev(this, '[data-bs-toggle="dropdown"]')[0],
                    n = Ve.getOrCreateInstance(i);
                if ("Escape" !== t.key)
                    return "ArrowUp" === t.key || "ArrowDown" === t.key
                        ? (e || n.show(), void n._selectMenuItem(t))
                        : void ((e && "Space" !== t.key) || Ve.clearMenus());
                n.hide();
            }
        }
        ue.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ve.dataApiKeydownHandler),
            ue.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ve.dataApiKeydownHandler),
            ue.on(document, "click.bs.dropdown.data-api", Ve.clearMenus),
            ue.on(document, "keyup.bs.dropdown.data-api", Ve.clearMenus),
            ue.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
                t.preventDefault(), Ve.getOrCreateInstance(this).toggle();
            }),
            Kt(Ve);
        class Ke {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                const t = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t);
            }
            hide() {
                const t = this.getWidth();
                this._disableOverFlow(),
                    this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
                    this._setElementAttributes(
                        ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        "paddingRight",
                        (e) => e + t
                    ),
                    this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(t, e, i) {
                const n = this.getWidth();
                this._applyManipulationCallback(t, (t) => {
                    if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                    this._saveInitialAttribute(t, e);
                    const s = window.getComputedStyle(t)[e];
                    t.style[e] = i(Number.parseFloat(s)) + "px";
                });
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"),
                    this._resetElementAttributes(this._element, "paddingRight"),
                    this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
                    this._resetElementAttributes(".sticky-top", "marginRight");
            }
            _saveInitialAttribute(t, e) {
                const i = t.style[e];
                i && we.setDataAttribute(t, e, i);
            }
            _resetElementAttributes(t, e) {
                this._applyManipulationCallback(t, (t) => {
                    const i = we.getDataAttribute(t, e);
                    void 0 === i ? t.style.removeProperty(e) : (we.removeDataAttribute(t, e), (t.style[e] = i));
                });
            }
            _applyManipulationCallback(t, e) {
                Mt(t) ? e(t) : Ee.find(t, this._element).forEach(e);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
        }
        const Ye = {
                className: "modal-backdrop",
                isVisible: !0,
                isAnimated: !1,
                rootElement: "body",
                clickCallback: null,
            },
            Xe = {
                className: "string",
                isVisible: "boolean",
                isAnimated: "boolean",
                rootElement: "(element|string)",
                clickCallback: "(function|null)",
            };
        class Qe {
            constructor(t) {
                (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
            }
            show(t) {
                this._config.isVisible
                    ? (this._append(),
                      this._config.isAnimated && Ft(this._getElement()),
                      this._getElement().classList.add("show"),
                      this._emulateAnimation(() => {
                          Yt(t);
                      }))
                    : Yt(t);
            }
            hide(t) {
                this._config.isVisible
                    ? (this._getElement().classList.remove("show"),
                      this._emulateAnimation(() => {
                          this.dispose(), Yt(t);
                      }))
                    : Yt(t);
            }
            _getElement() {
                if (!this._element) {
                    const t = document.createElement("div");
                    (t.className = this._config.className),
                        this._config.isAnimated && t.classList.add("fade"),
                        (this._element = t);
                }
                return this._element;
            }
            _getConfig(t) {
                return (
                    ((t = { ...Ye, ...("object" == typeof t ? t : {}) }).rootElement = Bt(t.rootElement)),
                    Ht("backdrop", t, Xe),
                    t
                );
            }
            _append() {
                this._isAppended ||
                    (this._config.rootElement.append(this._getElement()),
                    ue.on(this._getElement(), "mousedown.bs.backdrop", () => {
                        Yt(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
            }
            dispose() {
                this._isAppended &&
                    (ue.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), (this._isAppended = !1));
            }
            _emulateAnimation(t) {
                Xt(t, this._getElement(), this._config.isAnimated);
            }
        }
        const Ge = { trapElement: null, autofocus: !0 },
            Ze = { trapElement: "element", autofocus: "boolean" };
        class Je {
            constructor(t) {
                (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            activate() {
                const { trapElement: t, autofocus: e } = this._config;
                this._isActive ||
                    (e && t.focus(),
                    ue.off(document, ".bs.focustrap"),
                    ue.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
                    ue.on(document, "keydown.tab.bs.focustrap", (t) => this._handleKeydown(t)),
                    (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), ue.off(document, ".bs.focustrap"));
            }
            _handleFocusin(t) {
                const { target: e } = t,
                    { trapElement: i } = this._config;
                if (e === document || e === i || i.contains(e)) return;
                const n = Ee.focusableChildren(i);
                0 === n.length
                    ? i.focus()
                    : "backward" === this._lastTabNavDirection
                    ? n[n.length - 1].focus()
                    : n[0].focus();
            }
            _handleKeydown(t) {
                "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward");
            }
            _getConfig(t) {
                return (t = { ...Ge, ...("object" == typeof t ? t : {}) }), Ht("focustrap", t, Ze), t;
            }
        }
        const ti = { backdrop: !0, keyboard: !0, focus: !0 },
            ei = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
        class ii extends me {
            constructor(t, e) {
                super(t),
                    (this._config = this._getConfig(e)),
                    (this._dialog = Ee.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new Ke());
            }
            static get Default() {
                return ti;
            }
            static get NAME() {
                return "modal";
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            }
            show(t) {
                if (this._isShown || this._isTransitioning) return;
                ue.trigger(this._element, "show.bs.modal", { relatedTarget: t }).defaultPrevented ||
                    ((this._isShown = !0),
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add("modal-open"),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    ue.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                        ue.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
                            t.target === this._element && (this._ignoreBackdropClick = !0);
                        });
                    }),
                    this._showBackdrop(() => this._showElement(t)));
            }
            hide() {
                if (!this._isShown || this._isTransitioning) return;
                if (ue.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                this._isShown = !1;
                const t = this._isAnimated();
                t && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    this._focustrap.deactivate(),
                    this._element.classList.remove("show"),
                    ue.off(this._element, "click.dismiss.bs.modal"),
                    ue.off(this._dialog, "mousedown.dismiss.bs.modal"),
                    this._queueCallback(() => this._hideModal(), this._element, t);
            }
            dispose() {
                [window, this._dialog].forEach((t) => ue.off(t, ".bs.modal")),
                    this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new Qe({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new Je({ trapElement: this._element });
            }
            _getConfig(t) {
                return (
                    (t = { ...ti, ...we.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }),
                    Ht("modal", t, ei),
                    t
                );
            }
            _showElement(t) {
                const e = this._isAnimated(),
                    i = Ee.findOne(".modal-body", this._dialog);
                (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0),
                    i && (i.scrollTop = 0),
                    e && Ft(this._element),
                    this._element.classList.add("show");
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            ue.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
                    },
                    this._dialog,
                    e
                );
            }
            _setEscapeEvent() {
                this._isShown
                    ? ue.on(this._element, "keydown.dismiss.bs.modal", (t) => {
                          this._config.keyboard && "Escape" === t.key
                              ? (t.preventDefault(), this.hide())
                              : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition();
                      })
                    : ue.off(this._element, "keydown.dismiss.bs.modal");
            }
            _setResizeEvent() {
                this._isShown
                    ? ue.on(window, "resize.bs.modal", () => this._adjustDialog())
                    : ue.off(window, "resize.bs.modal");
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove("modal-open"),
                            this._resetAdjustments(),
                            this._scrollBar.reset(),
                            ue.trigger(this._element, "hidden.bs.modal");
                    });
            }
            _showBackdrop(t) {
                ue.on(this._element, "click.dismiss.bs.modal", (t) => {
                    this._ignoreBackdropClick
                        ? (this._ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          (!0 === this._config.backdrop
                              ? this.hide()
                              : "static" === this._config.backdrop && this._triggerBackdropTransition());
                }),
                    this._backdrop.show(t);
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                if (ue.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                const { classList: t, scrollHeight: e, style: i } = this._element,
                    n = e > document.documentElement.clientHeight;
                (!n && "hidden" === i.overflowY) ||
                    t.contains("modal-static") ||
                    (n || (i.overflowY = "hidden"),
                    t.add("modal-static"),
                    this._queueCallback(() => {
                        t.remove("modal-static"),
                            n ||
                                this._queueCallback(() => {
                                    i.overflowY = "";
                                }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                const t = this._element.scrollHeight > document.documentElement.clientHeight,
                    e = this._scrollBar.getWidth(),
                    i = e > 0;
                ((!i && t && !Vt()) || (i && !t && Vt())) && (this._element.style.paddingLeft = e + "px"),
                    ((i && !t && !Vt()) || (!i && t && Vt())) && (this._element.style.paddingRight = e + "px");
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }
            static jQueryInterface(t, e) {
                return this.each(function () {
                    const i = ii.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                        i[t](e);
                    }
                });
            }
        }
        ue.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
            const e = Pt(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                ue.one(e, "show.bs.modal", (t) => {
                    t.defaultPrevented ||
                        ue.one(e, "hidden.bs.modal", () => {
                            Rt(this) && this.focus();
                        });
                });
            const i = Ee.findOne(".modal.show");
            i && ii.getInstance(i).hide();
            ii.getOrCreateInstance(e).toggle(this);
        }),
            ge(ii),
            Kt(ii);
        const ni = { backdrop: !0, keyboard: !0, scroll: !1 },
            si = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
        class oi extends me {
            constructor(t, e) {
                super(t),
                    (this._config = this._getConfig(e)),
                    (this._isShown = !1),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    this._addEventListeners();
            }
            static get NAME() {
                return "offcanvas";
            }
            static get Default() {
                return ni;
            }
            toggle(t) {
                return this._isShown ? this.hide() : this.show(t);
            }
            show(t) {
                if (this._isShown) return;
                if (ue.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented) return;
                (this._isShown = !0),
                    (this._element.style.visibility = "visible"),
                    this._backdrop.show(),
                    this._config.scroll || new Ke().hide(),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add("show");
                this._queueCallback(
                    () => {
                        this._config.scroll || this._focustrap.activate(),
                            ue.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t });
                    },
                    this._element,
                    !0
                );
            }
            hide() {
                if (!this._isShown) return;
                if (ue.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
                this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove("show"),
                    this._backdrop.hide();
                this._queueCallback(
                    () => {
                        this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            (this._element.style.visibility = "hidden"),
                            this._config.scroll || new Ke().reset(),
                            ue.trigger(this._element, "hidden.bs.offcanvas");
                    },
                    this._element,
                    !0
                );
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _getConfig(t) {
                return (
                    (t = { ...ni, ...we.getDataAttributes(this._element), ...("object" == typeof t ? t : {}) }),
                    Ht("offcanvas", t, si),
                    t
                );
            }
            _initializeBackDrop() {
                return new Qe({
                    className: "offcanvas-backdrop",
                    isVisible: this._config.backdrop,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: () => this.hide(),
                });
            }
            _initializeFocusTrap() {
                return new Je({ trapElement: this._element });
            }
            _addEventListeners() {
                ue.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                    this._config.keyboard && "Escape" === t.key && this.hide();
                });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = oi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        ue.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
            const e = Pt(this);
            if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this))) return;
            ue.one(e, "hidden.bs.offcanvas", () => {
                Rt(this) && this.focus();
            });
            const i = Ee.findOne(".offcanvas.show");
            i && i !== e && oi.getInstance(i).hide();
            oi.getOrCreateInstance(e).toggle(this);
        }),
            ue.on(window, "load.bs.offcanvas.data-api", () =>
                Ee.find(".offcanvas.show").forEach((t) => oi.getOrCreateInstance(t).show())
            ),
            ge(oi),
            Kt(oi);
        const ri = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            ai = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
            li =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            ci = (t, e) => {
                const i = t.nodeName.toLowerCase();
                if (e.includes(i)) return !ri.has(i) || Boolean(ai.test(t.nodeValue) || li.test(t.nodeValue));
                const n = e.filter((t) => t instanceof RegExp);
                for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
                return !1;
            },
            di = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            };
        function hi(t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
                s = Object.keys(e),
                o = [].concat(...n.body.querySelectorAll("*"));
            for (let t = 0, i = o.length; t < i; t++) {
                const i = o[t],
                    n = i.nodeName.toLowerCase();
                if (!s.includes(n)) {
                    i.remove();
                    continue;
                }
                const r = [].concat(...i.attributes),
                    a = [].concat(e["*"] || [], e[n] || []);
                r.forEach((t) => {
                    ci(t, a) || i.removeAttribute(t.nodeName);
                });
            }
            return n.body.innerHTML;
        }
        const ui = new Set(["sanitize", "allowList", "sanitizeFn"]),
            fi = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)",
            },
            pi = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: Vt() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: Vt() ? "right" : "left",
            },
            mi = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: di,
                popperConfig: null,
            },
            gi = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip",
            };
        class _i extends me {
            constructor(t, e) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            static get Default() {
                return mi;
            }
            static get NAME() {
                return "tooltip";
            }
            static get Event() {
                return gi;
            }
            static get DefaultType() {
                return fi;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle(t) {
                if (this._isEnabled)
                    if (t) {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger.click = !e._activeTrigger.click),
                            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this);
                    }
            }
            dispose() {
                clearTimeout(this._timeout),
                    ue.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                    this.tip && this.tip.remove(),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this.isWithContent() || !this._isEnabled) return;
                const t = ue.trigger(this._element, this.constructor.Event.SHOW),
                    e = qt(this._element),
                    i =
                        null === e
                            ? this._element.ownerDocument.documentElement.contains(this._element)
                            : e.contains(this._element);
                if (t.defaultPrevented || !i) return;
                "tooltip" === this.constructor.NAME &&
                    this.tip &&
                    this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML &&
                    (this._disposePopper(), this.tip.remove(), (this.tip = null));
                const n = this.getTipElement(),
                    s = ((t) => {
                        do {
                            t += Math.floor(1e6 * Math.random());
                        } while (document.getElementById(t));
                        return t;
                    })(this.constructor.NAME);
                n.setAttribute("id", s),
                    this._element.setAttribute("aria-describedby", s),
                    this._config.animation && n.classList.add("fade");
                const o =
                        "function" == typeof this._config.placement
                            ? this._config.placement.call(this, n, this._element)
                            : this._config.placement,
                    r = this._getAttachment(o);
                this._addAttachmentClass(r);
                const { container: a } = this._config;
                pe.set(n, this.constructor.DATA_KEY, this),
                    this._element.ownerDocument.documentElement.contains(this.tip) ||
                        (a.append(n), ue.trigger(this._element, this.constructor.Event.INSERTED)),
                    this._popper
                        ? this._popper.update()
                        : (this._popper = St(this._element, n, this._getPopperConfig(r))),
                    n.classList.add("show");
                const l = this._resolvePossibleFunction(this._config.customClass);
                l && n.classList.add(...l.split(" ")),
                    "ontouchstart" in document.documentElement &&
                        [].concat(...document.body.children).forEach((t) => {
                            ue.on(t, "mouseover", zt);
                        });
                const c = this.tip.classList.contains("fade");
                this._queueCallback(
                    () => {
                        const t = this._hoverState;
                        (this._hoverState = null),
                            ue.trigger(this._element, this.constructor.Event.SHOWN),
                            "out" === t && this._leave(null, this);
                    },
                    this.tip,
                    c
                );
            }
            hide() {
                if (!this._popper) return;
                const t = this.getTipElement();
                if (ue.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                t.classList.remove("show"),
                    "ontouchstart" in document.documentElement &&
                        [].concat(...document.body.children).forEach((t) => ue.off(t, "mouseover", zt)),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger.focus = !1),
                    (this._activeTrigger.hover = !1);
                const e = this.tip.classList.contains("fade");
                this._queueCallback(
                    () => {
                        this._isWithActiveTrigger() ||
                            ("show" !== this._hoverState && t.remove(),
                            this._cleanTipClass(),
                            this._element.removeAttribute("aria-describedby"),
                            ue.trigger(this._element, this.constructor.Event.HIDDEN),
                            this._disposePopper());
                    },
                    this.tip,
                    e
                ),
                    (this._hoverState = "");
            }
            update() {
                null !== this._popper && this._popper.update();
            }
            isWithContent() {
                return Boolean(this.getTitle());
            }
            getTipElement() {
                if (this.tip) return this.tip;
                const t = document.createElement("div");
                t.innerHTML = this._config.template;
                const e = t.children[0];
                return this.setContent(e), e.classList.remove("fade", "show"), (this.tip = e), this.tip;
            }
            setContent(t) {
                this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner");
            }
            _sanitizeAndSetContent(t, e, i) {
                const n = Ee.findOne(i, t);
                e || !n ? this.setElementContent(n, e) : n.remove();
            }
            setElementContent(t, e) {
                if (null !== t)
                    return Mt(e)
                        ? ((e = Bt(e)),
                          void (this._config.html
                              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
                              : (t.textContent = e.textContent)))
                        : void (this._config.html
                              ? (this._config.sanitize && (e = hi(e, this._config.allowList, this._config.sanitizeFn)),
                                (t.innerHTML = e))
                              : (t.textContent = e));
            }
            getTitle() {
                const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
                return this._resolvePossibleFunction(t);
            }
            updateAttachment(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t;
            }
            _initializeOnDelegatedTarget(t, e) {
                return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
            }
            _getOffset() {
                const { offset: t } = this._config;
                return "string" == typeof t
                    ? t.split(",").map((t) => Number.parseInt(t, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _resolvePossibleFunction(t) {
                return "function" == typeof t ? t.call(this._element) : t;
            }
            _getPopperConfig(t) {
                const e = {
                    placement: t,
                    modifiers: [
                        { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: "offset", options: { offset: this._getOffset() } },
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                        {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: (t) => this._handlePopperPlacementChange(t),
                        },
                    ],
                    onFirstUpdate: (t) => {
                        t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                    },
                };
                return {
                    ...e,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(e)
                        : this._config.popperConfig),
                };
            }
            _addAttachmentClass(t) {
                this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`);
            }
            _getAttachment(t) {
                return pi[t.toUpperCase()];
            }
            _setListeners() {
                this._config.trigger.split(" ").forEach((t) => {
                    if ("click" === t)
                        ue.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t) =>
                            this.toggle(t)
                        );
                    else if ("manual" !== t) {
                        const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                            i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                        ue.on(this._element, e, this._config.selector, (t) => this._enter(t)),
                            ue.on(this._element, i, this._config.selector, (t) => this._leave(t));
                    }
                }),
                    (this._hideModalHandler = () => {
                        this._element && this.hide();
                    }),
                    ue.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                    this._config.selector
                        ? (this._config = { ...this._config, trigger: "manual", selector: "" })
                        : this._fixTitle();
            }
            _fixTitle() {
                const t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) &&
                    (this._element.setAttribute("data-bs-original-title", t || ""),
                    !t ||
                        this._element.getAttribute("aria-label") ||
                        this._element.textContent ||
                        this._element.setAttribute("aria-label", t),
                    this._element.setAttribute("title", ""));
            }
            _enter(t, e) {
                (e = this._initializeOnDelegatedTarget(t, e)),
                    t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                    e.getTipElement().classList.contains("show") || "show" === e._hoverState
                        ? (e._hoverState = "show")
                        : (clearTimeout(e._timeout),
                          (e._hoverState = "show"),
                          e._config.delay && e._config.delay.show
                              ? (e._timeout = setTimeout(() => {
                                    "show" === e._hoverState && e.show();
                                }, e._config.delay.show))
                              : e.show());
            }
            _leave(t, e) {
                (e = this._initializeOnDelegatedTarget(t, e)),
                    t &&
                        (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(
                            t.relatedTarget
                        )),
                    e._isWithActiveTrigger() ||
                        (clearTimeout(e._timeout),
                        (e._hoverState = "out"),
                        e._config.delay && e._config.delay.hide
                            ? (e._timeout = setTimeout(() => {
                                  "out" === e._hoverState && e.hide();
                              }, e._config.delay.hide))
                            : e.hide());
            }
            _isWithActiveTrigger() {
                for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1;
            }
            _getConfig(t) {
                const e = we.getDataAttributes(this._element);
                return (
                    Object.keys(e).forEach((t) => {
                        ui.has(t) && delete e[t];
                    }),
                    ((t = { ...this.constructor.Default, ...e, ...("object" == typeof t && t ? t : {}) }).container =
                        !1 === t.container ? document.body : Bt(t.container)),
                    "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),
                    "number" == typeof t.title && (t.title = t.title.toString()),
                    "number" == typeof t.content && (t.content = t.content.toString()),
                    Ht("tooltip", t, this.constructor.DefaultType),
                    t.sanitize && (t.template = hi(t.template, t.allowList, t.sanitizeFn)),
                    t
                );
            }
            _getDelegateConfig() {
                const t = {};
                for (const e in this._config)
                    this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                return t;
            }
            _cleanTipClass() {
                const t = this.getTipElement(),
                    e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                    i = t.getAttribute("class").match(e);
                null !== i && i.length > 0 && i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
            }
            _getBasicClassPrefix() {
                return "bs-tooltip";
            }
            _handlePopperPlacementChange(t) {
                const { state: e } = t;
                e &&
                    ((this.tip = e.elements.popper),
                    this._cleanTipClass(),
                    this._addAttachmentClass(this._getAttachment(e.placement)));
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = _i.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        Kt(_i);
        const bi = {
                ..._i.Default,
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            },
            vi = { ..._i.DefaultType, content: "(string|element|function)" },
            yi = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover",
            };
        class wi extends _i {
            static get Default() {
                return bi;
            }
            static get NAME() {
                return "popover";
            }
            static get Event() {
                return yi;
            }
            static get DefaultType() {
                return vi;
            }
            isWithContent() {
                return this.getTitle() || this._getContent();
            }
            setContent(t) {
                this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
                    this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            _getBasicClassPrefix() {
                return "bs-popover";
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = wi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        Kt(wi);
        const Ei = { offset: 10, method: "auto", target: "" },
            Ai = { offset: "number", method: "string", target: "(string|element)" },
            Ti = ".nav-link, .list-group-item, .dropdown-item";
        class Oi extends me {
            constructor(t, e) {
                super(t),
                    (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                    (this._config = this._getConfig(e)),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    ue.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
                    this.refresh(),
                    this._process();
            }
            static get Default() {
                return Ei;
            }
            static get NAME() {
                return "scrollspy";
            }
            refresh() {
                const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    e = "auto" === this._config.method ? t : this._config.method,
                    i = "position" === e ? this._getScrollTop() : 0;
                (this._offsets = []), (this._targets = []), (this._scrollHeight = this._getScrollHeight());
                Ee.find(Ti, this._config.target)
                    .map((t) => {
                        const n = It(t),
                            s = n ? Ee.findOne(n) : null;
                        if (s) {
                            const t = s.getBoundingClientRect();
                            if (t.width || t.height) return [we[e](s).top + i, n];
                        }
                        return null;
                    })
                    .filter((t) => t)
                    .sort((t, e) => t[0] - e[0])
                    .forEach((t) => {
                        this._offsets.push(t[0]), this._targets.push(t[1]);
                    });
            }
            dispose() {
                ue.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
            }
            _getConfig(t) {
                return (
                    ((t = {
                        ...Ei,
                        ...we.getDataAttributes(this._element),
                        ...("object" == typeof t && t ? t : {}),
                    }).target = Bt(t.target) || document.documentElement),
                    Ht("scrollspy", t, Ai),
                    t
                );
            }
            _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }
            _getScrollHeight() {
                return (
                    this._scrollElement.scrollHeight ||
                    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                );
            }
            _getOffsetHeight() {
                return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
            }
            _process() {
                const t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                    const t = this._targets[this._targets.length - 1];
                    this._activeTarget !== t && this._activate(t);
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return (this._activeTarget = null), void this._clear();
                    for (let e = this._offsets.length; e--; ) {
                        this._activeTarget !== this._targets[e] &&
                            t >= this._offsets[e] &&
                            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
                            this._activate(this._targets[e]);
                    }
                }
            }
            _activate(t) {
                (this._activeTarget = t), this._clear();
                const e = Ti.split(",").map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                    i = Ee.findOne(e.join(","), this._config.target);
                i.classList.add("active"),
                    i.classList.contains("dropdown-item")
                        ? Ee.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active")
                        : Ee.parents(i, ".nav, .list-group").forEach((t) => {
                              Ee.prev(t, ".nav-link, .list-group-item").forEach((t) => t.classList.add("active")),
                                  Ee.prev(t, ".nav-item").forEach((t) => {
                                      Ee.children(t, ".nav-link").forEach((t) => t.classList.add("active"));
                                  });
                          }),
                    ue.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t });
            }
            _clear() {
                Ee.find(Ti, this._config.target)
                    .filter((t) => t.classList.contains("active"))
                    .forEach((t) => t.classList.remove("active"));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Oi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        ue.on(window, "load.bs.scrollspy.data-api", () => {
            Ee.find('[data-bs-spy="scroll"]').forEach((t) => new Oi(t));
        }),
            Kt(Oi);
        class Ci extends me {
            static get NAME() {
                return "tab";
            }
            show() {
                if (
                    this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    this._element.classList.contains("active")
                )
                    return;
                let t;
                const e = Pt(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    const e = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    (t = Ee.find(e, i)), (t = t[t.length - 1]);
                }
                const n = t ? ue.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null;
                if (
                    ue.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented ||
                    (null !== n && n.defaultPrevented)
                )
                    return;
                this._activate(this._element, i);
                const s = () => {
                    ue.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
                        ue.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
                };
                e ? this._activate(e, e.parentNode, s) : s();
            }
            _activate(t, e, i) {
                const n = (
                        !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                            ? Ee.children(e, ".active")
                            : Ee.find(":scope > li > .active", e)
                    )[0],
                    s = i && n && n.classList.contains("fade"),
                    o = () => this._transitionComplete(t, n, i);
                n && s ? (n.classList.remove("show"), this._queueCallback(o, t, !0)) : o();
            }
            _transitionComplete(t, e, i) {
                if (e) {
                    e.classList.remove("active");
                    const t = Ee.findOne(":scope > .dropdown-menu .active", e.parentNode);
                    t && t.classList.remove("active"),
                        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                }
                t.classList.add("active"),
                    "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                    Ft(t),
                    t.classList.contains("fade") && t.classList.add("show");
                let n = t.parentNode;
                if ((n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu"))) {
                    const e = t.closest(".dropdown");
                    e && Ee.find(".dropdown-toggle", e).forEach((t) => t.classList.add("active")),
                        t.setAttribute("aria-expanded", !0);
                }
                i && i();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Ci.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        ue.on(
            document,
            "click.bs.tab.data-api",
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            function (t) {
                if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this))) return;
                Ci.getOrCreateInstance(this).show();
            }
        ),
            Kt(Ci);
        const ki = { animation: "boolean", autohide: "boolean", delay: "number" },
            xi = { animation: !0, autohide: !0, delay: 5e3 };
        class Li extends me {
            constructor(t, e) {
                super(t),
                    (this._config = this._getConfig(e)),
                    (this._timeout = null),
                    (this._hasMouseInteraction = !1),
                    (this._hasKeyboardInteraction = !1),
                    this._setListeners();
            }
            static get DefaultType() {
                return ki;
            }
            static get Default() {
                return xi;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                if (ue.trigger(this._element, "show.bs.toast").defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                this._element.classList.remove("hide"),
                    Ft(this._element),
                    this._element.classList.add("show"),
                    this._element.classList.add("showing"),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove("showing"),
                                ue.trigger(this._element, "shown.bs.toast"),
                                this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    );
            }
            hide() {
                if (!this._element.classList.contains("show")) return;
                if (ue.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
                this._element.classList.add("showing"),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"),
                                this._element.classList.remove("showing"),
                                this._element.classList.remove("show"),
                                ue.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    );
            }
            dispose() {
                this._clearTimeout(),
                    this._element.classList.contains("show") && this._element.classList.remove("show"),
                    super.dispose();
            }
            _getConfig(t) {
                return (
                    (t = { ...xi, ...we.getDataAttributes(this._element), ...("object" == typeof t && t ? t : {}) }),
                    Ht("toast", t, this.constructor.DefaultType),
                    t
                );
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(t, e) {
                switch (t.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = e;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = e;
                }
                if (e) return void this._clearTimeout();
                const i = t.relatedTarget;
                this._element === i || this._element.contains(i) || this._maybeScheduleHide();
            }
            _setListeners() {
                ue.on(this._element, "mouseover.bs.toast", (t) => this._onInteraction(t, !0)),
                    ue.on(this._element, "mouseout.bs.toast", (t) => this._onInteraction(t, !1)),
                    ue.on(this._element, "focusin.bs.toast", (t) => this._onInteraction(t, !0)),
                    ue.on(this._element, "focusout.bs.toast", (t) => this._onInteraction(t, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Li.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        ge(Li), Kt(Li);
        var Si, Di;
        (Si = {
            name: "sameWidth",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: ({ state: t }) => {
                t.styles.popper.width = t.rects.reference.width + "px";
            },
            effect: ({ state: t }) => {
                t.elements.popper.style.width = t.elements.reference.offsetWidth + "px";
            },
        }),
            (Di = {
                name: "offset",
                options: { offset: ({ placement: t, reference: e, popper: i }) => [0, -e.height - 10] },
            }),
            [].slice.call(document.querySelectorAll(".dropdown-btn")).map(function (t) {
                return new Ve(t, {
                    popperConfig: function (t) {
                        return Object.assign(t, { modifiers: [Si, Di] });
                    },
                });
            });
        (() => {
            var t = document.getElementById("account-menu-btn");
            if (t) {
                var e = {
                    name: "offset",
                    options: { offset: ({ placement: t, reference: e, popper: i }) => [-18, 20] },
                };
                new Ve(t, {
                    popperConfig: function (t) {
                        return Object.assign(t, { modifiers: [e] });
                    },
                });
            }
        })();
        (() => {
            var t = document.getElementsByClassName("js-menu-btn");
            if (t.length) {
                var e = {
                    name: "offset",
                    options: { offset: ({ placement: t, reference: e, popper: i }) => [0, -e.height] },
                };
                [].slice.call(t).forEach(
                    (t) =>
                        new Ve(t, {
                            popperConfig: function (t) {
                                return Object.assign(t, { modifiers: [e] });
                            },
                        })
                );
                var i = document.querySelectorAll("[data-drop-item-menu]");
                i.length &&
                    [].slice.call(i).forEach((t) => {
                        const e = t.dataset;
                        t.addEventListener("click", function (t) {
                            if ((t.preventDefault(), e.dropItemMenu)) {
                                var i = t.target.dataset;
                                alert(`${i.action} ${e.dropItemMenu}`);
                            }
                        });
                    });
            }
        })();
        i(0), i(1), i(2), i(3), i(4);
        (() => {
            var t = Array.prototype.slice.call(document.querySelectorAll("[data-toggle-video]")),
                e = document.getElementById("modal-video");
            if (e) {
                var i = new ii(e),
                    n = e.querySelector("iframe");
                t.forEach(function (t) {
                    t.addEventListener("click", function (t) {
                        var e = t.currentTarget.getAttribute("data-toggle-video");
                        (n.src = e), i.show();
                    });
                }),
                    e.addEventListener("hidden.bs.modal", function () {
                        n.src = "";
                    });
            }
        })();
    },
]);
