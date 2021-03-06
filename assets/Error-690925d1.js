"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2975, 1392, 5939], {
        58978: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => y
            });
            var r = t(78709),
                o = t(93379),
                i = t.n(o),
                a = t(7795),
                l = t.n(a),
                A = t(90569),
                s = t.n(A),
                c = t(3565),
                m = t.n(c),
                u = t(19216),
                d = t.n(u),
                h = t(44589),
                C = t.n(h),
                p = t(52732),
                f = {};
            f.styleTagTransform = C(), f.setAttributes = m(), f.insert = s().bind(null, "head"), f.domAPI = l(), f.insertStyleElement = d(), i()(p.Z, f), p.Z && p.Z.locals && p.Z.locals;
            var g = ["className", "children", "small", "empty", "to", "style", "type", "thin", "color", "skip", "plus", "ghost"];

            function E() {
                return E = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, E.apply(this, arguments)
            }
            const y = function(e) {
                var n = e.className,
                    t = e.children,
                    o = e.small,
                    i = (e.empty, e.to, e.style),
                    a = e.type,
                    l = void 0 === a ? "button" : a,
                    A = e.thin,
                    s = e.color,
                    c = void 0 === s ? "default" : s,
                    m = e.skip,
                    u = e.plus,
                    d = (e.ghost, function(e, n) {
                        if (null == e) return {};
                        var t, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                        return o
                    }(e, g)),
                    h = (0, r.useState)(null),
                    C = h[0],
                    p = h[1];
                return (0, r.useEffect)((function() {
                    if (!m && C) {
                        var e = !1,
                            n = !1,
                            t = document.createElement("span"),
                            r = [].concat(document.body.classList).includes("dark") || "light",
                            o = function(o) {
                                if (2 === o.button || !t.animate) return !1;
                                e = !0, t.classList.add("ripple-effect");
                                var i = C.getBoundingClientRect(),
                                    a = o.x - i.left,
                                    l = o.y - i.top,
                                    A = Math.max(i.width, i.height) * Math.PI * 1.5;
                                t.style.left = a + "px", t.style.top = l + "px", t.style.backgroundColor = "default" === c && "light" === r ? "black" : "white", t.style.opacity = "0.175", n || (n = !0, C.appendChild(t)), t.animate({
                                    height: ["0px", A + "px"],
                                    width: ["0px", A + "px"]
                                }, {
                                    duration: 700
                                }).onfinish = function() {
                                    t.style.width = A + "px", t.style.height = A + "px"
                                }
                            },
                            i = function() {
                                e && (t.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    n && (n = !1, t.remove())
                                })
                            },
                            a = function() {
                                e && t.animate && (e = !1, t.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    n && (n = !1, t.remove())
                                })
                            };
                        return C.addEventListener("mousedown", o), C.addEventListener("mouseup", a), C.addEventListener("mouseover", i),
                            function() {
                                C.removeEventListener("mousedown", o), C.removeEventListener("mouseup", a), C.removeEventListener("mouseover", i)
                            }
                    }
                }), [C, c, m]), r.createElement("button", E({
                    type: l || "button",
                    style: i,
                    className: "button " + (A ? "thin" : "") + " " + (o ? "small" : "") + " " + ("primary" === c ? "button-primary" : "ghost" === c ? "button-ghost" : "") + " " + (n || "")
                }, d, {
                    ref: p
                }), u ? r.createElement("i", {
                    className: "fa-solid fa-plus",
                    style: {
                        marginRight: ".5rem"
                    }
                }) : null, t)
            }
        },
        50846: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => I
            });
            var r = t(78709),
                o = t(58978),
                i = t(24766),
                a = t(41647),
                l = t(21035),
                A = t(33801),
                s = t(58877),
                c = t(20584),
                m = t(93379),
                u = t.n(m),
                d = t(7795),
                h = t.n(d),
                C = t(90569),
                p = t.n(C),
                f = t(3565),
                g = t.n(f),
                E = t(19216),
                y = t.n(E),
                w = t(44589),
                M = t.n(w),
                b = t(7470),
                v = {};
            v.styleTagTransform = M(), v.setAttributes = g(), v.insert = p().bind(null, "head"), v.domAPI = h(), v.insertStyleElement = y(), u()(b.Z, v), b.Z && b.Z.locals && b.Z.locals;
            const x = function() {
                var e = (0, a.v9)((function(e) {
                        return e.auth
                    })).isAuth,
                    n = (0, A.TH)().pathname,
                    t = (0, A.k6)();
                return r.createElement("footer", {
                    className: "home-footer-wrapper " + ("/" === n ? "main" : "")
                }, r.createElement("div", {
                    className: "home-footer"
                }, r.createElement("div", {
                    className: "home-footer-mobile home-footer-mobile-three home-footer-mobile-100"
                }, r.createElement("h5", {
                    className: "mb-3"
                }, r.createElement("img", {
                    src: c,
                    alt: ""
                })), r.createElement("p", {
                    style: {
                        paddingRight: "2rem"
                    }
                }, "Sellix is a powerful e-commerce solution that lets you create a custom store in just a couple of clicks.")), r.createElement("div", {
                    className: "home-footer-mobile-two"
                }, r.createElement("h5", {
                    className: "mb-3"
                }, r.createElement("b", null, "Pages")), r.createElement("ul", null, e ? r.createElement("li", null, r.createElement("a", {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: function() {
                        return (0, s.U)("dashboard", "/", t)
                    },
                    href: void 0
                }, "Dashboard")) : r.createElement("li", null, r.createElement("a", {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: function() {
                        return (0, s.U)("auth", "/register", t)
                    },
                    href: void 0
                }, "Register")), r.createElement("li", null, r.createElement("a", {
                    href: "https://help.sellix.io",
                    target: "_blank"
                }, "Help")), r.createElement("li", null, r.createElement(l.OL, {
                    to: "/privacy",
                    target: "_blank"
                }, "Privacy")), r.createElement("li", null, r.createElement(l.OL, {
                    to: "/terms",
                    target: "_blank"
                }, "Terms")))), r.createElement("div", {
                    className: "home-footer-mobile-two"
                }, r.createElement("h5", {
                    className: "mb-3"
                }, r.createElement("b", null, "Products")), r.createElement("ul", null, r.createElement("li", null, r.createElement("a", {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: function() {
                        return (0, s.U)("developers", "/#introduction", t)
                    },
                    href: void 0,
                    target: "_blank"
                }, "Developers")), r.createElement("li", null, r.createElement(l.OL, {
                    to: "/e-commerce"
                }, "E-commerce")), r.createElement("li", null, r.createElement(l.OL, {
                    to: "/payments"
                }, "Payments")), r.createElement("li", null, r.createElement(l.OL, {
                    to: "/fraud-shield"
                }, "Fraud Shield")))), r.createElement("div", {
                    className: "home-footer-mobile home-footer-mobile-two"
                }, r.createElement("h5", {
                    className: "mb-3"
                }, r.createElement("b", null, "Socials")), r.createElement("ul", null, e && r.createElement("li", null, r.createElement("a", {
                    href: "https://help.sellix.io/en/articles/5115705-coalition-against-abuse",
                    target: "_blank"
                }, "Contact Us")), r.createElement("li", null, r.createElement("a", {
                    href: "https://twitter.com/SellixEcommerce",
                    target: "_blank"
                }, r.createElement("i", {
                    className: "fab fa-twitter fa-lg mr-2",
                    style: {
                        width: 20
                    }
                }), r.createElement("span", null, "Twitter"))), r.createElement("li", null, r.createElement("a", {
                    href: "https://t.me/sellixecommerce",
                    target: "_blank"
                }, r.createElement("i", {
                    className: "fab fa-telegram fa-lg mr-2",
                    style: {
                        width: 20
                    }
                }), r.createElement("span", null, "Telegram"))), r.createElement("li", null, r.createElement("a", {
                    href: "https://discord.gg/sellix",
                    target: "_blank"
                }, r.createElement("i", {
                    className: "fab fa-discord fa-lg mr-2",
                    style: {
                        width: 20
                    }
                }), r.createElement("span", null, "Discord"))))), r.createElement("div", {
                    className: "home-footer-mobile-three"
                }, r.createElement("h5", {
                    className: "mb-3"
                }, r.createElement("b", null, "Abuse")), r.createElement("p", null, "Sellix takes both the security and experience of our buyers very seriously. To report any seller abuse or misuse, please ", r.createElement("a", {
                    href: "https://help.sellix.io",
                    className: "text-underline",
                    target: "_blank"
                }, "contact us"), ". "))), r.createElement("div", {
                    className: "home-footer-copyright"
                }, r.createElement("div", null, "Copyright 2022, Sellix SRL ", r.createElement("br", null), " All Rights Reserved."), r.createElement("div", null, "P.IVA 03982251203")))
            };
            var L = t(87390),
                N = t(10367),
                j = {};

            function B(e, n) {
                return B = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, B(e, n)
            }
            j.styleTagTransform = M(), j.setAttributes = g(), j.insert = p().bind(null, "head"), j.domAPI = h(), j.insertStyleElement = y(), u()(N.Z, j), N.Z && N.Z.locals && N.Z.locals;
            var k = function(e) {
                var n, t;

                function a(n) {
                    var t;
                    return (t = e.call(this, n) || this).state = {
                        error: null,
                        errorInfo: null
                    }, t
                }
                t = e, (n = a).prototype = Object.create(t.prototype), n.prototype.constructor = n, B(n, t);
                var l = a.prototype;
                return l.componentDidCatch = function(e, n) {
                    if (this.setState({
                            error: e,
                            errorInfo: n
                        }), L.Tb(e, {
                            extra: n
                        }), /ChunkLoadError/.test(e.name)) return r.createElement("div", null, "Reload you page")
                }, l.render = function() {
                    var e = this.state,
                        n = e.errorInfo,
                        t = e.error;
                    return n ? r.createElement("div", null, r.createElement("div", {
                        className: "app"
                    }, r.createElement(i.default, {
                        isShop: !0
                    }), r.createElement("div", {
                        className: "error-container"
                    }, r.createElement("div", {
                        className: "error-page"
                    }, r.createElement("div", {
                        className: "error-page-title"
                    }, r.createElement("h2", null, "Something went wrong..."), r.createElement("h4", null, "You can help us solving the issue by opening a ticket with a screenshot of the error below.")), r.createElement("br", null), r.createElement("div", {
                        className: "error-page-info"
                    }, r.createElement("a", {
                        href: "https://help.sellix.io/en/articles/5115705-coalition-against-abuse",
                        target: "_blank"
                    }, r.createElement(o.default, {
                        color: "primary"
                    }, "Contact Us")), r.createElement("a", {
                        href: "/"
                    }, r.createElement(o.default, {
                        color: "primary"
                    }, "Go to Dashboard"))), r.createElement("br", null), r.createElement("br", null), r.createElement("br", null), r.createElement("div", {
                        className: "error-details"
                    }, t && t.toString(), r.createElement("br", null), n.componentStack), r.createElement("br", null))), r.createElement(x, null))) : this.props.children
                }, a
            }(r.Component);
            const I = k
        },
        84221: (e, n, t) => {
            t.d(n, {
                P_: () => o,
                wD: () => i,
                n5: () => a,
                TR: () => l,
                AP: () => A
            });
            var r = t(21775),
                o = (t(48833), (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Notification"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([t.e(581), t.e(1741)]).then(t.bind(t, 92585))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return t(n)
                    },
                    resolve: function() {
                        return 92585
                    }
                })),
                i = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Searchbar"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(372).then(t.bind(t, 796))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return t(n)
                    },
                    resolve: function() {
                        return 796
                    }
                }),
                a = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "User"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(2323).then(t.bind(t, 88058))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return t(n)
                    },
                    resolve: function() {
                        return 88058
                    }
                }),
                l = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Logo"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1039).then(t.bind(t, 75364))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return t(n)
                    },
                    resolve: function() {
                        return 75364
                    }
                }),
                A = (0, r.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Cart"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return Promise.resolve().then(t.bind(t, 74410))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return t(n)
                    },
                    resolve: function() {
                        return 74410
                    }
                })
        },
        24766: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => x
            });
            var r = t(78709),
                o = t(41647),
                i = t(71115),
                a = t(72821),
                l = t(84221),
                A = t(95579),
                s = t(33801),
                c = t(72320),
                m = t(93379),
                u = t.n(m),
                d = t(7795),
                h = t.n(d),
                C = t(90569),
                p = t.n(C),
                f = t(3565),
                g = t.n(f),
                E = t(19216),
                y = t.n(E),
                w = t(44589),
                M = t.n(w),
                b = t(41552),
                v = {};
            v.styleTagTransform = M(), v.setAttributes = g(), v.insert = p().bind(null, "head"), v.domAPI = h(), v.insertStyleElement = y(), u()(b.Z, v), b.Z && b.Z.locals && b.Z.locals, t(48833);
            const x = function(e) {
                var n = e.changeTheme,
                    t = e.isShop,
                    m = e.isDoc,
                    u = e.isDashboard,
                    d = (0, r.useState)(!1),
                    h = d[0],
                    C = d[1],
                    p = (0, o.I0)(),
                    f = (0, s.k6)(),
                    g = (0, s.TH)().pathname,
                    E = (0, o.v9)((function(e) {
                        return e.nav.open
                    })),
                    y = (0, o.v9)((function(e) {
                        return e.auth.isAuth
                    })),
                    w = (0, o.v9)((function(e) {
                        return "dark" === e.theme.globalTheme
                    })),
                    M = g.includes("/settings/"),
                    b = "/" === g,
                    v = (0, r.useRef)(),
                    x = (0, o.v9)((function(e) {
                        var n = e.common.subscription;
                        return n && n.id
                    })),
                    L = (0, o.v9)((function(e) {
                        return e.common.generalInfo.cart_enabled
                    })),
                    N = x && L,
                    j = (0, r.useState)(!1),
                    B = j[0],
                    k = j[1];
                return (0, c.t)(v, (function() {
                    return k(!1)
                })), (0, r.useEffect)((function() {
                    var e = window.location.origin.includes("admin");
                    C(window.location.origin.includes("admin")), y || t || p((0, i.YD)()).then((function(n) {
                        var t = n.status,
                            r = n.data;
                        200 === t && (p((0, i.u6)(r.user.username)), e && +r.user.rank < 1 && f.push("/home"))
                    }))
                }), []), r.createElement(r.Fragment, null, r.createElement(A.Z, null), r.createElement("div", {
                    className: "header " + (t ? "is-shop" : m ? "is-doc" : "")
                }, r.createElement("div", {
                    style: t ? {
                        maxWidth: 1140,
                        margin: "0 auto",
                        position: "relative"
                    } : {}
                }, r.createElement("div", {
                    className: "header-logo " + (t || m || E ? "" : "open")
                }, r.createElement("button", {
                    type: "button",
                    className: "sidebar-toggler",
                    onClick: function() {
                        return p((0, a.Q4)(!0))
                    }
                }, r.createElement("span", null)), r.createElement(l.TR, {
                    isDoc: m || t,
                    isShop: t
                })), r.createElement(l.TR, {
                    mobile: !0,
                    isShop: t
                }), r.createElement("div", {
                    className: "header-nav"
                }, r.createElement(l.wD, {
                    isShop: t || m
                }), r.createElement("div", {
                    className: "header-menu"
                }, m || t || h ? null : r.createElement("div", {
                    className: "social-menu",
                    ref: v,
                    onClick: function() {
                        return k(!B)
                    }
                }, r.createElement("i", {
                    className: "social-menu-icon fa-light fa-hashtag",
                    style: {
                        color: w ? "#989BA0" : "#3F4A60"
                    }
                }), r.createElement("div", {
                    className: "social-menu-dropdown customFadeIn " + (B ? "open" : "")
                }, r.createElement("div", {
                    className: "social-menu-dropdown-body"
                }, r.createElement("a", {
                    href: "https://sellix.io/discord",
                    target: "_blank",
                    "data-tooltip": "Join our discord server",
                    "data-tooltip-location": "left"
                }, r.createElement("i", {
                    className: "fa-brands fa-discord",
                    style: {
                        color: w ? "#989BA0" : "#3F4A60"
                    }
                }), " Discord"), r.createElement("a", {
                    href: "https://sellix.io/telegram",
                    target: "_blank",
                    "data-tooltip": "Join our telegram channel",
                    "data-tooltip-location": "left"
                }, r.createElement("i", {
                    className: "fa-brands fa-telegram",
                    style: {
                        color: w ? "#989BA0" : "#3F4A60"
                    }
                }), " Telegram"), r.createElement("a", {
                    href: "https://twitter.com/intent/user?screen_name=sellixecommerce",
                    target: "_blank",
                    "data-tooltip": "Follow us on twitter",
                    "data-tooltip-location": "left"
                }, r.createElement("i", {
                    className: "fa-brands fa-twitter",
                    style: {
                        color: w ? "#989BA0" : "#3F4A60"
                    }
                }), " Twitter")))), m || t || h ? null : r.createElement("div", {
                    className: "onboarding-icon",
                    onClick: function() {
                        M || b ? f.replace({
                            hash: "#onboarding"
                        }) : f.push({
                            pathname: "/",
                            hash: "#onboarding"
                        })
                    }
                }, r.createElement("i", {
                    className: "fa-light fa-square-info",
                    style: {
                        color: w ? "#989BA0" : "#3F4A60",
                        fontSize: "1.25rem"
                    }
                })), t || m ? null : r.createElement("div", {
                    className: "color-switch"
                }, r.createElement("label", {
                    className: "switch"
                }, r.createElement("input", {
                    checked: w,
                    type: "checkbox",
                    onChange: n
                }), r.createElement("span", {
                    className: "slider round"
                }))), t || m ? null : r.createElement(l.P_, null), u ? null : N ? r.createElement(l.AP, null) : null, y ? r.createElement(l.n5, {
                    isShop: t
                }) : null)))))
            }
        },
        52732: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(64162),
                o = t.n(r),
                i = t(68922),
                a = t.n(i)()(o());
            a.push([e.id, ".button{position:relative;overflow:hidden;transition:all .25s cubic-bezier(0.4, 0, 0.2, 1);outline:none;font-weight:500 !important;font-family:inherit}.button:focus{box-shadow:none !important;outline:none}.button .ripple-effect{position:absolute;height:10px;width:10px;border-radius:50%;transform:translate3d(-50%, -50%, 0)}", "", {
                version: 3,
                sources: ["webpack://./client/components/button/style.scss"],
                names: [],
                mappings: "AAAA,QACE,iBAAA,CACA,eAAA,CACA,gDAAA,CACA,YAAA,CACA,0BAAA,CACA,mBAAA,CAEA,cACE,0BAAA,CACA,YAAA,CAGF,uBACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA",
                sourcesContent: [".button {\n  position: relative;\n  overflow: hidden;\n  transition: all .25s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  font-weight: 500 !important;\n  font-family: inherit;\n\n  &:focus {\n    box-shadow: none !important;\n    outline: none;\n  }\n\n  .ripple-effect {\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    transform: translate3d(-50%, -50%, 0)\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const l = a
        },
        10367: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(64162),
                o = t.n(r),
                i = t(68922),
                a = t.n(i)()(o());
            a.push([e.id, ".error-page{position:relative;max-width:570px;width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}@media(max-width: 768px){.error-page{padding:0 1rem}}.error-page-title{color:var(--darkFontColor);text-align:center}.error-page-title h4{font-weight:300;text-align:center}.error-page-info{width:100%;display:flex;justify-content:space-between}.error-container{display:flex;margin:3rem 0;justify-content:center}.error-details{white-space:pre-wrap;color:var(--darkFontColor);width:100%}", "", {
                version: 3,
                sources: ["webpack://./client/components/error/style.scss"],
                names: [],
                mappings: "AAAA,YACE,iBAAA,CACA,eAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA,CAEA,yBATF,YAUI,cAAA,CAAA,CAGF,kBACE,0BAAA,CACA,iBAAA,CACA,qBACE,eAAA,CACA,iBAAA,CAIJ,iBACE,UAAA,CACA,YAAA,CACA,6BAAA,CAIJ,iBACE,YAAA,CACA,aAAA,CACA,sBAAA,CAGF,eACE,oBAAA,CACA,0BAAA,CACA,UAAA",
                sourcesContent: [".error-page {\n  position: relative;\n  max-width: 570px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    padding: 0 1rem;\n  }\n\n  &-title {\n    color: var(--darkFontColor);\n    text-align: center;\n    h4 {\n      font-weight: 300;\n      text-align: center;\n    }\n  }\n\n  &-info {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n}\n\n.error-container {\n  display: flex;\n  margin: 3rem 0;\n  justify-content: center;\n}\n\n.error-details {\n  white-space: pre-wrap;\n  color: var(--darkFontColor);\n  width: 100%;\n}\n"],
                sourceRoot: ""
            }]);
            const l = a
        },
        41552: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(64162),
                o = t.n(r),
                i = t(68922),
                a = t.n(i)()(o());
            a.push([e.id, ".social-menu{position:relative;cursor:pointer}@media(max-width: 420px){.social-menu{display:none}}.social-menu-icon{height:100%;display:flex;align-items:center;padding:1rem .5rem 1rem 0;font-size:16px;color:var(--lightFontColor)}.social-menu-icon i{font-size:2rem}.social-menu-dropdown{position:absolute;top:100%;min-width:120px;width:100%;background:var(--menuBackground);border-radius:.5rem;box-shadow:none;border:1px solid var(--borderColor);right:0;display:none}.social-menu-dropdown.open{display:flex;flex-direction:column}.social-menu-dropdown-body>a{padding:.75rem 1rem;font-size:14px;color:var(--darkFontColor) !important;cursor:pointer;display:flex;align-items:center;justify-content:flex-start}.social-menu-dropdown-body>a i{margin-right:.5rem}.social-menu-dropdown-body>a:hover{background:var(--menuBackgroundHover)}.social-menu-dropdown-body>a:hover img{display:block}.social-menu-dropdown-body>a.active{background:var(--menuBackgroundHover)}", "", {
                version: 3,
                sources: ["webpack://./client/components/header/components/social.scss"],
                names: [],
                mappings: "AAAA,aACE,iBAAA,CACA,cAAA,CAEA,yBAJF,aAKI,YAAA,CAAA,CAGF,kBACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,yBAAA,CACA,cAAA,CACA,2BAAA,CAEA,oBACE,cAAA,CAIJ,sBACE,iBAAA,CACA,QAAA,CACA,eAAA,CACA,UAAA,CACA,gCAAA,CACA,mBAAA,CACA,eAAA,CACA,mCAAA,CACA,OAAA,CACA,YAAA,CAEA,2BACE,YAAA,CACA,qBAAA,CAKA,6BACE,mBAAA,CACA,cAAA,CACA,qCAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CAEA,+BACE,kBAAA,CAGF,mCACE,qCAAA,CAEA,uCACE,aAAA,CAIJ,oCACE,qCAAA",
                sourcesContent: [".social-menu {\n  position: relative;\n  cursor: pointer;\n\n  @media (max-width: 420px) {\n    display: none;\n  }\n\n  &-icon {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 1rem .5rem 1rem 0;\n    font-size: 16px;\n    color: var(--lightFontColor);\n\n    i {\n      font-size: 2rem;\n    }\n  }\n\n  &-dropdown {\n    position: absolute;\n    top: 100%;\n    min-width: 120px;\n    width: 100%;\n    background: var(--menuBackground);\n    border-radius: .5rem;\n    box-shadow: none;\n    border: 1px solid var(--borderColor);\n    right: 0;\n    display: none;\n\n    &.open {\n      display: flex;\n      flex-direction: column;\n    }\n\n    &-body {\n\n      & > a {\n        padding: .75rem 1rem;\n        font-size: 14px;\n        color: var(--darkFontColor) !important;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n\n        i {\n          margin-right: .5rem;\n        }\n\n        &:hover {\n          background: var(--menuBackgroundHover);\n\n          img {\n            display: block;\n          }\n        }\n\n        &.active {\n          background: var(--menuBackgroundHover);\n        }\n      }\n    }\n\n  }\n}"],
                sourceRoot: ""
            }]);
            const l = a
        },
        7470: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(64162),
                o = t.n(r),
                i = t(68922),
                a = t.n(i)()(o());
            a.push([e.id, ".home-footer-wrapper{background:#0a1730;color:#b8bcc3;font-size:1rem;line-height:1.5rem;width:100%;padding:7rem 1rem 0 1rem;margin:0 auto;border-radius:24px 24px 0 0}.home-footer-wrapper.main{padding:9rem 1rem 0 1rem;margin:0}.home-footer{padding-bottom:1.5rem;max-width:1140px;margin:0 auto;display:flex;width:100%}@media(max-width: 768px){.home-footer-mobile{display:flex;justify-content:center;flex-direction:column;margin-bottom:2rem}}@media(max-width: 768px){.home-footer{flex-wrap:wrap}.home-footer ul li{margin-bottom:.25rem;font-size:14px}.home-footer ul li a{color:#fff !important}.home-footer ul li a:hover{color:#fff !important}.home-footer h5{font-size:1rem}.home-footer p{font-size:14px}}.home-footer p{font-size:14.4px;color:#fff}.home-footer p a:hover{color:#fff !important}.home-footer ul{padding:0;margin:0;list-style:none}.home-footer ul li{margin-bottom:.75rem;color:#b8bcc3}.home-footer ul li a{color:#fff !important;font-size:14.4px}.home-footer ul li a:hover{color:#fff !important}.home-footer h5{color:#fff !important}.home-footer h5 img{width:4.25rem;height:1.25rem}.home-footer h5 b{font-weight:600;font-size:1.1rem}@media(max-width: 768px){.home-footer .home-footer-mobile-100{width:100% !important}}.home-footer .home-footer-mobile-three{width:25%}@media(max-width: 768px){.home-footer .home-footer-mobile-three{width:50%;margin-bottom:1rem}}.home-footer .home-footer-mobile-two{width:calc(25% / 3 * 2)}@media(max-width: 768px){.home-footer .home-footer-mobile-two{width:50%}}.home-footer-copyright{max-width:1140px;padding:2rem 0;margin:0 auto;width:100%;display:flex;justify-content:space-between;border-top:1px solid #222b3f}.home-footer-copyright br{display:none}@media(max-width: 768px){.home-footer-copyright div:first-child{text-align:center;margin-top:1rem}}@media(max-width: 768px){.home-footer-copyright{flex-direction:column-reverse;align-items:center}.home-footer-copyright br{display:block}}.home-footer-copyright div{opacity:1;font-size:14px;line-height:1.5rem;color:#fff}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/main/layout/footer/index.scss", "webpack://./client/entrypoints/main/variables.scss"],
                names: [],
                mappings: "AAEA,qBACE,kBCHW,CDIX,aCHM,CDIN,cAAA,CACA,kBAAA,CACA,UAAA,CACA,wBAAA,CACA,aAAA,CACA,2BAAA,CAEA,0BACE,wBAAA,CACA,QAAA,CAIJ,aACE,qBAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CACA,UAAA,CAIE,yBADF,oBAEI,YAAA,CACA,sBAAA,CACA,qBAAA,CACA,kBAAA,CAAA,CAIJ,yBAjBF,aAkBI,cAAA,CAGE,mBACE,oBAAA,CACA,cAAA,CAEA,qBACE,qBAAA,CAEA,2BACE,qBAAA,CAMR,gBACE,cAAA,CAGF,eACE,cAAA,CAAA,CAIJ,eACE,gBAAA,CACA,UAAA,CAEA,uBACE,qBAAA,CAIJ,gBACE,SAAA,CACA,QAAA,CACA,eAAA,CAEA,mBACE,oBAAA,CACA,aC7EE,CD+EF,qBACE,qBAAA,CACA,gBAAA,CAEA,2BACE,qBAAA,CAMR,gBACE,qBAAA,CAEA,oBACE,aAAA,CACA,cAAA,CAGF,kBACE,eAAA,CACA,gBAAA,CAKF,yBADF,qCAEI,qBAAA,CAAA,CAIJ,uCACE,SAAA,CACA,yBAFF,uCAGI,SAAA,CACA,kBAAA,CAAA,CAIJ,qCACI,uBAAA,CACA,yBAFJ,qCAGM,SAAA,CAAA,CAIN,uBACE,gBAAA,CACA,cAAA,CACA,aAAA,CACA,UAAA,CACA,YAAA,CACA,6BAAA,CACA,4BAAA,CAEA,0BACE,YAAA,CAKA,yBADF,uCAEI,iBAAA,CACA,eAAA,CAAA,CAIJ,yBArBF,uBAsBI,6BAAA,CACA,kBAAA,CAGA,0BACE,aAAA,CAAA,CAKJ,2BACE,SAAA,CACA,cAAA,CACA,kBAAA,CACA,UAAA",
                sourcesContent: ['@import "../../variables";\n\n.home-footer-wrapper {\n  background: $background;\n  color: $color;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  width: 100%;\n  padding: 7rem 1rem 0 1rem;\n  margin: 0 auto;\n  border-radius: 24px 24px 0 0;\n\n  &.main {\n    padding: 9rem 1rem 0 1rem;\n    margin: 0;\n  }\n}\n\n.home-footer {\n  padding-bottom: 1.5rem;\n  max-width: 1140px;\n  margin: 0 auto;\n  display: flex;\n  width: 100%;\n\n\n  &-mobile {\n    @media (max-width: 768px) {\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      margin-bottom: 2rem;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-wrap: wrap;\n\n    ul {\n      li {\n        margin-bottom: .25rem;\n        font-size: 14px;\n\n        a {\n          color: white !important;\n\n          &:hover {\n            color: white !important;\n          }\n        }\n      }\n    }\n\n    h5 {\n      font-size: 1rem;\n    }\n\n    p {\n      font-size: 14px;\n    }\n  }\n\n  p {\n    font-size: 14.4px;\n    color: white;\n\n    a:hover {\n      color: white !important;\n    }\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    li {\n      margin-bottom: .75rem;\n      color: $color;\n\n      a {\n        color: white !important;\n        font-size: 14.4px;\n\n        &:hover {\n          color: white !important;\n        }\n      }\n    }\n  }\n\n  h5 {\n    color: white !important;\n\n    img {\n      width: 4.25rem;\n      height: 1.25rem;\n    }\n\n    b {\n      font-weight: 600;\n      font-size: 1.1rem;\n    }\n  }\n\n  .home-footer-mobile-100 {\n    @media (max-width: 768px) {\n      width: 100% !important;\n    }\n  }\n\n  .home-footer-mobile-three {\n    width: 25%;\n    @media (max-width: 768px) {\n      width: 50%;\n      margin-bottom: 1rem;\n    }\n  }\n\n  .home-footer-mobile-two {\n      width: calc(25% / 3 * 2);\n      @media (max-width: 768px) {\n        width: 50%;\n      }\n    }\n\n  &-copyright {\n    max-width: 1140px;\n    padding: 2rem 0;\n    margin: 0 auto;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    border-top: 1px solid #222b3f;\n\n    br {\n      display: none;\n    }\n\n\n    div:first-child {\n      @media (max-width: 768px) {\n        text-align: center;\n        margin-top: 1rem;\n      }\n    }\n\n    @media (max-width: 768px) {\n      flex-direction: column-reverse;\n      align-items: center;\n\n\n      br {\n        display: block;\n      }\n    }\n\n\n    div {\n      opacity: 1;\n      font-size: 14px;\n      line-height: 1.5rem;\n      color: white;\n    }\n  }\n}', "$background: #0A1730;\n$color: #B8BCC3;\n$black: #0F1C35;\n$black2: #0A1730;\n$purple: #5F40E5;\n$color3: #3F4A60;\n$color4: #8C8F94;\n$green: #07bc0c;\n"],
                sourceRoot: ""
            }]);
            const l = a
        },
        20584: e => {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMzg2LjcgOTcwLjciPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLmNvbG9ye2ZpbGw6d2hpdGU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJjb2xvciIgZD0iTTI2NS43LDI2Ni44bDI2My04Ny44TDUxMSwyNTMuOGMyMi44LDUuNCw0Ny42LDEyLjYsNzUsMjIuNGM2MC44LDIxLjcsMTE1LjksNDYuOSwxNjUuNCw3NS41bDEwOS40LTIzMC41CgkJYy01Mi4xLTMzLTExMy41LTU5LjUtMTg0LjMtNzkuNGMtNzAuOC0yMC0xNDEuNy0zMC0yMTIuOS0zMGMtNzguMSwwLTE0Ni43LDEyLjItMjA1LjgsMzYuNWMtNTkuMSwyNC4zLTEwNC42LDU5LjMtMTM2LjcsMTA0LjgKCQlDODksMTk4LjgsNzIuOSwyNTIsNzIuOSwzMTIuN2MwLDYyLjUsMTUuNiwxMTIuNCw0Ni45LDE0OS44YzMxLjIsMzcuMyw2OC4zLDY0LjksMTExLjMsODIuN2M0MywxNy44LDk2LjYsMzQuOSwxNjAuOCw1MS40CgkJYzE3LjMsNC4zLDMyLjYsOC40LDQ2LjksMTIuNmwxNy03MS45bDIwNC4zLDE2MC45bC0yNjIuOSw4Ny44bDE0LjEtNTkuOGMtMzMuOC02LjgtNzEuMS0xOC0xMTMuMS0zNS4xCgkJQzIyOC44LDY2Mi44LDE3MSw2MjguNywxMjUsNTg4LjhMMTMsODE2LjdjNTkuOSw0NiwxMzAuOSw4Mi4yLDIxMywxMDguN2M4MiwyNi41LDE2My40LDM5LjcsMjQ0LjEsMzkuNwoJCWM3MS4yLDAsMTM1LjktMTAuOSwxOTQuMS0zMi42YzU4LjItMjEuNywxMDQuNC01NC45LDEzOC43LTk5LjZjMzQuMy00NC43LDUxLjUtMTAwLDUxLjUtMTY2YzAtNjQuMy0xNi4xLTExNi4xLTQ4LjItMTU1LjYKCQljLTMyLjEtMzkuNS02OS43LTY4LjQtMTEyLjctODYuNmMtNDMtMTguMi05Ny0zNi41LTE2Mi4xLTU0LjdjLTE2LjUtNC40LTMxLTguNi00NC43LTEyLjdMNDcwLDQyNy43TDI2NS43LDI2Ni44eiIvPgoJPHBhdGggY2xhc3M9ImNvbG9yIiBkPSJNMTIzMS45LDMwMy42Yy0yMDMuMSwwLTM0Mi41LDE0Ny4xLTM0Mi41LDMyOS41YzAsMjA3LjEsMTUzLjYsMzMwLjgsMzUwLjMsMzMwLjgKCQljOTMuNywwLDIwNS44LTI0LjcsMjY4LjMtNzguMmwtOTYuNC0xNDQuNWMtMzEuMiwyNy4zLTEwOS40LDQ0LjMtMTQ0LjYsNDQuM2MtNzYuOCwwLTEyMi40LTM5LjEtMTM1LjQtNzkuNGg0MjcuMXYtNDguMgoJCUMxNTU4LjgsNDM2LjQsMTQxNi44LDMwMy42LDEyMzEuOSwzMDMuNnogTTExMjksNTU3LjVjNy44LTI4LjYsMzEuMi03NS41LDEwMi44LTc1LjVjNzUuNiwwLDk3LjcsNDguMiwxMDQuMiw3NS41SDExMjl6Ii8+Cgk8cmVjdCB4PSIxNjM5LjUiIHk9Ijc5LjYiIGNsYXNzPSJjb2xvciIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9Ijg2OC42Ii8+Cgk8cmVjdCB4PSIyMDA0LjEiIHk9Ijc5LjYiIGNsYXNzPSJjb2xvciIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9Ijg2OC42Ii8+Cgk8cmVjdCB4PSIyMzY4LjgiIHk9IjMxOS4yIiBjbGFzcz0iY29sb3IiIHdpZHRoPSIyMzQuNCIgaGVpZ2h0PSI2MjkiLz4KCTxwYXRoIGNsYXNzPSJjb2xvciIgZD0iTTI0ODYsMTAuNmMtNzIuOSwwLTEzMS42LDU4LjYtMTMxLjYsMTMxLjVjMCw3Mi45LDU4LjYsMTMxLjYsMTMxLjYsMTMxLjZjNzIuOSwwLDEzMS41LTU4LjYsMTMxLjUtMTMxLjYKCQlDMjYxNy41LDY5LjIsMjU1OC45LDEwLjYsMjQ4NiwxMC42eiIvPgoJPHBvbHlnb24gY2xhc3M9ImNvbG9yIiBwb2ludHM9IjMxNTUuMyw2MjUuMiAzMzQ4LDMxOS4yIDMwOTEuNSwzMTkuMiAzMDA2LjgsNDY2LjQgMjkyMi4yLDMxOS4yIDI2NjUuNiwzMTkuMiAyODU4LjQsNjI1LjIKCQkyNjUyLjYsOTQ4LjIgMjkwNy44LDk0OC4yIDMwMDguMSw3ODEuNSAzMTA1LjgsOTQ4LjIgMzM2Mi4zLDk0OC4yIAkiLz4KPC9nPgo8L3N2Zz4K"
        }
    }
]);
//# sourceMappingURL=Error-690925d1.js.map