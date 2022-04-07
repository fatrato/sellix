"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7239, 5939], {
        58978: (n, t, e) => {
            e.r(t), e.d(t, {
                default: () => v
            });
            var i = e(78709),
                o = e(93379),
                A = e.n(o),
                r = e(7795),
                a = e.n(r),
                s = e(90569),
                l = e.n(s),
                c = e(3565),
                m = e.n(c),
                f = e(19216),
                u = e.n(f),
                C = e(44589),
                p = e.n(C),
                h = e(52732),
                d = {};
            d.styleTagTransform = p(), d.setAttributes = m(), d.insert = l().bind(null, "head"), d.domAPI = a(), d.insertStyleElement = u(), A()(h.Z, d), h.Z && h.Z.locals && h.Z.locals;
            var g = ["className", "children", "small", "empty", "to", "style", "type", "thin", "color", "skip", "plus", "ghost"];

            function y() {
                return y = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
                    }
                    return n
                }, y.apply(this, arguments)
            }
            const v = function(n) {
                var t = n.className,
                    e = n.children,
                    o = n.small,
                    A = (n.empty, n.to, n.style),
                    r = n.type,
                    a = void 0 === r ? "button" : r,
                    s = n.thin,
                    l = n.color,
                    c = void 0 === l ? "default" : l,
                    m = n.skip,
                    f = n.plus,
                    u = (n.ghost, function(n, t) {
                        if (null == n) return {};
                        var e, i, o = {},
                            A = Object.keys(n);
                        for (i = 0; i < A.length; i++) e = A[i], t.indexOf(e) >= 0 || (o[e] = n[e]);
                        return o
                    }(n, g)),
                    C = (0, i.useState)(null),
                    p = C[0],
                    h = C[1];
                return (0, i.useEffect)((function() {
                    if (!m && p) {
                        var n = !1,
                            t = !1,
                            e = document.createElement("span"),
                            i = [].concat(document.body.classList).includes("dark") || "light",
                            o = function(o) {
                                if (2 === o.button || !e.animate) return !1;
                                n = !0, e.classList.add("ripple-effect");
                                var A = p.getBoundingClientRect(),
                                    r = o.x - A.left,
                                    a = o.y - A.top,
                                    s = Math.max(A.width, A.height) * Math.PI * 1.5;
                                e.style.left = r + "px", e.style.top = a + "px", e.style.backgroundColor = "default" === c && "light" === i ? "black" : "white", e.style.opacity = "0.175", t || (t = !0, p.appendChild(e)), e.animate({
                                    height: ["0px", s + "px"],
                                    width: ["0px", s + "px"]
                                }, {
                                    duration: 700
                                }).onfinish = function() {
                                    e.style.width = s + "px", e.style.height = s + "px"
                                }
                            },
                            A = function() {
                                n && (e.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    t && (t = !1, e.remove())
                                })
                            },
                            r = function() {
                                n && e.animate && (n = !1, e.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    t && (t = !1, e.remove())
                                })
                            };
                        return p.addEventListener("mousedown", o), p.addEventListener("mouseup", r), p.addEventListener("mouseover", A),
                            function() {
                                p.removeEventListener("mousedown", o), p.removeEventListener("mouseup", r), p.removeEventListener("mouseover", A)
                            }
                    }
                }), [p, c, m]), i.createElement("button", y({
                    type: a || "button",
                    style: A,
                    className: "button " + (s ? "thin" : "") + " " + (o ? "small" : "") + " " + ("primary" === c ? "button-primary" : "ghost" === c ? "button-ghost" : "") + " " + (t || "")
                }, u, {
                    ref: h
                }), f ? i.createElement("i", {
                    className: "fa-solid fa-plus",
                    style: {
                        marginRight: ".5rem"
                    }
                }) : null, e)
            }
        },
        99292: (n, t, e) => {
            e.r(t), e.d(t, {
                default: () => w
            });
            var i = e(78709),
                o = e(33801),
                A = e(41647),
                r = e(63202),
                a = e(58978),
                s = e(93379),
                l = e.n(s),
                c = e(7795),
                m = e.n(c),
                f = e(90569),
                u = e.n(f),
                C = e(3565),
                p = e.n(C),
                h = e(19216),
                d = e.n(h),
                g = e(44589),
                y = e.n(g),
                v = e(59378),
                E = {};
            E.styleTagTransform = y(), E.setAttributes = p(), E.insert = u().bind(null, "head"), E.domAPI = m(), E.insertStyleElement = d(), l()(v.Z, E), v.Z && v.Z.locals && v.Z.locals;
            const w = function() {
                var n = (0, i.useState)(!0),
                    t = n[0],
                    e = n[1],
                    s = (0, A.I0)(),
                    l = (0, o.TH)(),
                    c = (0, A.v9)((function(n) {
                        return n.common.isCustomDomain
                    })),
                    m = (0, A.v9)((function(n) {
                        return n.common.isAdditionalDomain
                    })),
                    f = (0, A.v9)((function(n) {
                        return n.common.shopIsOffline
                    })),
                    u = (0, o.LX)(l.pathname, {
                        path: "/"
                    }),
                    C = function() {
                        c || !window.location.host.includes("sellix") ? s((0, r.wK)("https%3A%2F%2F" + window.location.host.split(":").shift())) : s(m ? (0, r.wK)("https%3A%2F%2F" + window.location.host.split(".")[0] + ".sellix.io") : (0, r.wf)(u && u.params ? u.params.name : ""))
                    };
                return (0, i.useEffect)((function() {
                    C();
                    var n = setTimeout((function() {
                        return e(!1)
                    }), 1500);
                    setTimeout((function() {
                        e(!1)
                    }), 1e3);
                    var t = setInterval((function() {
                        C()
                    }), 15e3);
                    return function() {
                        clearInterval(t), clearTimeout(n)
                    }
                }), []), t || t ? i.createElement("div", null) : i.createElement("div", {
                    className: "shop-offline-wrapper"
                }, i.createElement("div", {
                    className: "shop-offline"
                }, i.createElement("i", {
                    className: "fas fa-redo-alt shop-offline-ico"
                }), f && "string" == typeof f ? i.createElement("div", {
                    className: "my-4"
                }, i.createElement("h2", null, "Something went wrong validating your request."), i.createElement("h4", null, "Additional Information: ", i.createElement("i", null, f.replaceAll('"', "")))) : i.createElement("div", {
                    className: "my-4"
                }, i.createElement("h2", null, "We are having some issues contacting our API."), i.createElement("h4", null, "This page will be automatically updated when it comes back up.")), i.createElement(a.default, {
                    small: !0,
                    onClick: C
                }, "Retry")))
            }
        },
        52732: (n, t, e) => {
            e.d(t, {
                Z: () => a
            });
            var i = e(64162),
                o = e.n(i),
                A = e(68922),
                r = e.n(A)()(o());
            r.push([n.id, ".button{position:relative;overflow:hidden;transition:all .25s cubic-bezier(0.4, 0, 0.2, 1);outline:none;font-weight:500 !important;font-family:inherit}.button:focus{box-shadow:none !important;outline:none}.button .ripple-effect{position:absolute;height:10px;width:10px;border-radius:50%;transform:translate3d(-50%, -50%, 0)}", "", {
                version: 3,
                sources: ["webpack://./client/components/button/style.scss"],
                names: [],
                mappings: "AAAA,QACE,iBAAA,CACA,eAAA,CACA,gDAAA,CACA,YAAA,CACA,0BAAA,CACA,mBAAA,CAEA,cACE,0BAAA,CACA,YAAA,CAGF,uBACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA",
                sourcesContent: [".button {\n  position: relative;\n  overflow: hidden;\n  transition: all .25s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  font-weight: 500 !important;\n  font-family: inherit;\n\n  &:focus {\n    box-shadow: none !important;\n    outline: none;\n  }\n\n  .ripple-effect {\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    transform: translate3d(-50%, -50%, 0)\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const a = r
        },
        59378: (n, t, e) => {
            e.d(t, {
                Z: () => a
            });
            var i = e(64162),
                o = e.n(i),
                A = e(68922),
                r = e.n(A)()(o());
            r.push([n.id, ".shop-offline{text-align:center;padding:2rem 1rem;color:var(--darkFontColor)}.shop-offline-wrapper{flex:1 0 100%;align-items:center;justify-content:center;display:flex}.shop-offline h2{font-size:1.2rem !important;font-weight:400;line-height:2rem;margin:0}.shop-offline h4{text-align:center;font-size:1rem !important;font-weight:300;line-height:2rem;margin:0}.shop-offline button{width:8rem;margin:0 auto;min-height:2.5rem;border-radius:.35rem}.shop-offline-ico{cursor:pointer;transition:all 2s ease-in;animation:sync-ico 3s infinite;transform:rotate(0);font-size:5rem;color:var(--buttonColor)}@media(max-width: 768px){.shop-offline-ico{font-size:8rem}}.shop-offline-ico:active{transition:all 2s ease-in;animation:sync-ico 3s infinite;transform:rotate(0)}.shop-offline-ico:focus{transition:all 2s ease-in;animation:sync-ico 3s infinite;transform:rotate(0)}@keyframes sync-ico{from{transform:rotate(0)}to{transform:rotate(360deg)}}", "", {
                version: 3,
                sources: ["webpack://./client/components/offline/style.scss"],
                names: [],
                mappings: "AAAA,cACE,iBAAA,CACA,iBAAA,CACA,0BAAA,CAEA,sBACE,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CAGF,iBACE,2BAAA,CACA,eAAA,CACA,gBAAA,CACA,QAAA,CAGF,iBACE,iBAAA,CACA,yBAAA,CACA,eAAA,CACA,gBAAA,CACA,QAAA,CAGF,qBACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,oBAAA,CAGF,kBACE,cAAA,CACA,yBAAA,CACA,8BAAA,CACA,mBAAA,CACA,cAAA,CACA,wBAAA,CAEA,yBARF,kBASI,cAAA,CAAA,CAGF,yBACE,yBAAA,CACA,8BAAA,CACA,mBAAA,CAEF,wBACE,yBAAA,CACA,8BAAA,CACA,mBAAA,CAMN,oBACE,KACE,mBAAA,CAEF,GACE,wBAAA,CAAA",
                sourcesContent: [".shop-offline {\n  text-align: center;\n  padding: 2rem 1rem;\n  color: var(--darkFontColor);\n\n  &-wrapper {\n    flex: 1 0 100%;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n  }\n\n  h2 {\n    font-size: 1.2rem !important;\n    font-weight: 400;\n    line-height: 2rem;\n    margin: 0;\n  }\n\n  h4 {\n    text-align: center;\n    font-size: 1rem !important;\n    font-weight: 300;\n    line-height: 2rem;\n    margin: 0;\n  }\n\n  button {\n    width: 8rem;\n    margin: 0 auto;\n    min-height: 2.5rem;\n    border-radius: 0.35rem;\n  }\n\n  &-ico {\n    cursor: pointer;\n    transition: all 2s ease-in;\n    animation: sync-ico 3s infinite;\n    transform: rotate(0);\n    font-size: 5rem;\n    color: var(--buttonColor);\n\n    @media (max-width: 768px) {\n      font-size: 8rem;\n    }\n\n    &:active {\n      transition: all 2s ease-in;\n      animation: sync-ico 3s infinite;\n      transform: rotate(0);\n    }\n    &:focus {\n      transition: all 2s ease-in;\n      animation: sync-ico 3s infinite;\n      transform: rotate(0);\n    }\n  }\n}\n\n\n@keyframes sync-ico {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const a = r
        }
    }
]);
//# sourceMappingURL=Offline-144e7891.js.map