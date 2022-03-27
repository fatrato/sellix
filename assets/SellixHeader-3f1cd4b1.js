"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1392], {
        84221: (e, n, r) => {
            r.d(n, {
                P_: () => o,
                wD: () => i,
                n5: () => a,
                TR: () => s,
                AP: () => l
            });
            var t = r(21775),
                o = (r(48833), (0, t.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Notification"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!r.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([r.e(581), r.e(1741)]).then(r.bind(r, 92585))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            r = this.resolve(e);
                        return this.resolved[r] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[r] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return r(n)
                    },
                    resolve: function() {
                        return 92585
                    }
                })),
                i = (0, t.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Searchbar"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!r.m[n]
                    },
                    importAsync: function() {
                        return r.e(372).then(r.bind(r, 796))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            r = this.resolve(e);
                        return this.resolved[r] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[r] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return r(n)
                    },
                    resolve: function() {
                        return 796
                    }
                }),
                a = (0, t.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "User"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!r.m[n]
                    },
                    importAsync: function() {
                        return r.e(2323).then(r.bind(r, 88058))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            r = this.resolve(e);
                        return this.resolved[r] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[r] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return r(n)
                    },
                    resolve: function() {
                        return 88058
                    }
                }),
                s = (0, t.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Logo"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!r.m[n]
                    },
                    importAsync: function() {
                        return r.e(1039).then(r.bind(r, 75364))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            r = this.resolve(e);
                        return this.resolved[r] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[r] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return r(n)
                    },
                    resolve: function() {
                        return 75364
                    }
                }),
                l = (0, t.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Cart"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!r.m[n]
                    },
                    importAsync: function() {
                        return Promise.resolve().then(r.bind(r, 74410))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            r = this.resolve(e);
                        return this.resolved[r] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[r] = !0, e
                        }))
                    },
                    requireSync: function(e) {
                        var n = this.resolve(e);
                        return r(n)
                    },
                    resolve: function() {
                        return 74410
                    }
                })
        },
        24766: (e, n, r) => {
            r.r(n), r.d(n, {
                default: () => B
            });
            var t = r(78709),
                o = r(41647),
                i = r(71115),
                a = r(72821),
                s = r(84221),
                l = r(95579),
                c = r(33801),
                A = r(72320),
                u = r(93379),
                d = r.n(u),
                m = r(7795),
                h = r.n(m),
                v = r(90569),
                p = r.n(v),
                f = r(3565),
                C = r.n(f),
                g = r(19216),
                y = r.n(g),
                b = r(44589),
                E = r.n(b),
                k = r(41552),
                w = {};
            w.styleTagTransform = E(), w.setAttributes = C(), w.insert = p().bind(null, "head"), w.domAPI = h(), w.insertStyleElement = y(), d()(k.Z, w), k.Z && k.Z.locals && k.Z.locals, r(48833);
            const B = function(e) {
                var n = e.changeTheme,
                    r = e.isShop,
                    u = e.isDoc,
                    d = e.isDashboard,
                    m = (0, t.useState)(!1),
                    h = m[0],
                    v = m[1],
                    p = (0, o.I0)(),
                    f = (0, c.k6)(),
                    C = (0, c.TH)().pathname,
                    g = (0, o.v9)((function(e) {
                        return e.nav.open
                    })),
                    y = (0, o.v9)((function(e) {
                        return e.auth.isAuth
                    })),
                    b = (0, o.v9)((function(e) {
                        return "dark" === e.theme.globalTheme
                    })),
                    E = C.includes("/settings/"),
                    k = "/" === C,
                    w = (0, t.useRef)(),
                    B = (0, o.v9)((function(e) {
                        var n = e.common.subscription;
                        return n && n.id
                    })),
                    x = (0, o.v9)((function(e) {
                        return e.common.generalInfo.cart_enabled
                    })),
                    N = B && x,
                    _ = (0, t.useState)(!1),
                    S = _[0],
                    q = _[1];
                return (0, A.t)(w, (function() {
                    return q(!1)
                })), (0, t.useEffect)((function() {
                    var e = window.location.origin.includes("admin");
                    v(window.location.origin.includes("admin")), y || r || p((0, i.YD)()).then((function(n) {
                        var r = n.status,
                            t = n.data;
                        200 === r && (p((0, i.u6)(t.user.username)), e && +t.user.rank < 1 && f.push("/home"))
                    }))
                }), []), t.createElement(t.Fragment, null, t.createElement(l.Z, null), t.createElement("div", {
                    className: "header " + (r ? "is-shop" : u ? "is-doc" : "")
                }, t.createElement("div", {
                    style: r ? {
                        maxWidth: 1140,
                        margin: "0 auto",
                        position: "relative"
                    } : {}
                }, t.createElement("div", {
                    className: "header-logo " + (r || u || g ? "" : "open")
                }, t.createElement("button", {
                    type: "button",
                    className: "sidebar-toggler",
                    onClick: function() {
                        return p((0, a.Q4)(!0))
                    }
                }, t.createElement("span", null)), t.createElement(s.TR, {
                    isDoc: u || r,
                    isShop: r
                })), t.createElement(s.TR, {
                    mobile: !0,
                    isShop: r
                }), t.createElement("div", {
                    className: "header-nav"
                }, t.createElement(s.wD, {
                    isShop: r || u
                }), t.createElement("div", {
                    className: "header-menu"
                }, u || r || h ? null : t.createElement("div", {
                    className: "social-menu",
                    ref: w,
                    onClick: function() {
                        return q(!S)
                    }
                }, t.createElement("i", {
                    className: "social-menu-icon fa-light fa-hashtag",
                    style: {
                        color: b ? "#989BA0" : "#3F4A60"
                    }
                }), t.createElement("div", {
                    className: "social-menu-dropdown customFadeIn " + (S ? "open" : "")
                }, t.createElement("div", {
                    className: "social-menu-dropdown-body"
                }, t.createElement("a", {
                    href: "https://sellix.io/discord",
                    target: "_blank",
                    "data-tooltip": "Join our discord server",
                    "data-tooltip-location": "left"
                }, t.createElement("i", {
                    className: "fa-brands fa-discord",
                    style: {
                        color: b ? "#989BA0" : "#3F4A60"
                    }
                }), " Discord"), t.createElement("a", {
                    href: "https://sellix.io/telegram",
                    target: "_blank",
                    "data-tooltip": "Join our telegram channel",
                    "data-tooltip-location": "left"
                }, t.createElement("i", {
                    className: "fa-brands fa-telegram",
                    style: {
                        color: b ? "#989BA0" : "#3F4A60"
                    }
                }), " Telegram"), t.createElement("a", {
                    href: "https://twitter.com/intent/user?screen_name=sellixecommerce",
                    target: "_blank",
                    "data-tooltip": "Follow us on twitter",
                    "data-tooltip-location": "left"
                }, t.createElement("i", {
                    className: "fa-brands fa-twitter",
                    style: {
                        color: b ? "#989BA0" : "#3F4A60"
                    }
                }), " Twitter")))), u || r || h ? null : t.createElement("div", {
                    className: "onboarding-icon",
                    onClick: function() {
                        E || k ? f.replace({
                            hash: "#onboarding"
                        }) : f.push({
                            pathname: "/",
                            hash: "#onboarding"
                        })
                    }
                }, t.createElement("i", {
                    className: "fa-light fa-square-info",
                    style: {
                        color: b ? "#989BA0" : "#3F4A60",
                        fontSize: "1.25rem"
                    }
                })), r || u ? null : t.createElement("div", {
                    className: "color-switch"
                }, t.createElement("label", {
                    className: "switch"
                }, t.createElement("input", {
                    checked: b,
                    type: "checkbox",
                    onChange: n
                }), t.createElement("span", {
                    className: "slider round"
                }))), r || u ? null : t.createElement(s.P_, null), d ? null : N ? t.createElement(s.AP, null) : null, y ? t.createElement(s.n5, {
                    isShop: r
                }) : null)))))
            }
        },
        41552: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(64162),
                o = r.n(t),
                i = r(68922),
                a = r.n(i)()(o());
            a.push([e.id, ".social-menu{position:relative;cursor:pointer}@media(max-width: 420px){.social-menu{display:none}}.social-menu-icon{height:100%;display:flex;align-items:center;padding:1rem .5rem 1rem 0;font-size:16px;color:var(--lightFontColor)}.social-menu-icon i{font-size:2rem}.social-menu-dropdown{position:absolute;top:100%;min-width:120px;width:100%;background:var(--menuBackground);border-radius:.5rem;box-shadow:none;border:1px solid var(--borderColor);right:0;display:none}.social-menu-dropdown.open{display:flex;flex-direction:column}.social-menu-dropdown-body>a{padding:.75rem 1rem;font-size:14px;color:var(--darkFontColor) !important;cursor:pointer;display:flex;align-items:center;justify-content:flex-start}.social-menu-dropdown-body>a i{margin-right:.5rem}.social-menu-dropdown-body>a:hover{background:var(--menuBackgroundHover)}.social-menu-dropdown-body>a:hover img{display:block}.social-menu-dropdown-body>a.active{background:var(--menuBackgroundHover)}", "", {
                version: 3,
                sources: ["webpack://./client/components/header/components/social.scss"],
                names: [],
                mappings: "AAAA,aACE,iBAAA,CACA,cAAA,CAEA,yBAJF,aAKI,YAAA,CAAA,CAGF,kBACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,yBAAA,CACA,cAAA,CACA,2BAAA,CAEA,oBACE,cAAA,CAIJ,sBACE,iBAAA,CACA,QAAA,CACA,eAAA,CACA,UAAA,CACA,gCAAA,CACA,mBAAA,CACA,eAAA,CACA,mCAAA,CACA,OAAA,CACA,YAAA,CAEA,2BACE,YAAA,CACA,qBAAA,CAKA,6BACE,mBAAA,CACA,cAAA,CACA,qCAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,0BAAA,CAEA,+BACE,kBAAA,CAGF,mCACE,qCAAA,CAEA,uCACE,aAAA,CAIJ,oCACE,qCAAA",
                sourcesContent: [".social-menu {\n  position: relative;\n  cursor: pointer;\n\n  @media (max-width: 420px) {\n    display: none;\n  }\n\n  &-icon {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 1rem .5rem 1rem 0;\n    font-size: 16px;\n    color: var(--lightFontColor);\n\n    i {\n      font-size: 2rem;\n    }\n  }\n\n  &-dropdown {\n    position: absolute;\n    top: 100%;\n    min-width: 120px;\n    width: 100%;\n    background: var(--menuBackground);\n    border-radius: .5rem;\n    box-shadow: none;\n    border: 1px solid var(--borderColor);\n    right: 0;\n    display: none;\n\n    &.open {\n      display: flex;\n      flex-direction: column;\n    }\n\n    &-body {\n\n      & > a {\n        padding: .75rem 1rem;\n        font-size: 14px;\n        color: var(--darkFontColor) !important;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n\n        i {\n          margin-right: .5rem;\n        }\n\n        &:hover {\n          background: var(--menuBackgroundHover);\n\n          img {\n            display: block;\n          }\n        }\n\n        &.active {\n          background: var(--menuBackgroundHover);\n        }\n      }\n    }\n\n  }\n}"],
                sourceRoot: ""
            }]);
            const s = a
        }
    }
]);
//# sourceMappingURL=SellixHeader-3f1cd4b1.js.map