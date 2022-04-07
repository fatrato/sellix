"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5939], {
        58978: (t, n, e) => {
            e.r(n), e.d(n, {
                default: () => v
            });
            var o = e(78709),
                i = e(93379),
                s = e.n(i),
                r = e(7795),
                a = e.n(r),
                l = e(90569),
                u = e.n(l),
                A = e(3565),
                c = e.n(A),
                p = e(19216),
                d = e.n(p),
                f = e(44589),
                m = e.n(f),
                h = e(52732),
                C = {};
            C.styleTagTransform = m(), C.setAttributes = c(), C.insert = u().bind(null, "head"), C.domAPI = a(), C.insertStyleElement = d(), s()(h.Z, C), h.Z && h.Z.locals && h.Z.locals;
            var b = ["className", "children", "small", "empty", "to", "style", "type", "thin", "color", "skip", "plus", "ghost"];

            function y() {
                return y = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    }
                    return t
                }, y.apply(this, arguments)
            }
            const v = function(t) {
                var n = t.className,
                    e = t.children,
                    i = t.small,
                    s = (t.empty, t.to, t.style),
                    r = t.type,
                    a = void 0 === r ? "button" : r,
                    l = t.thin,
                    u = t.color,
                    A = void 0 === u ? "default" : u,
                    c = t.skip,
                    p = t.plus,
                    d = (t.ghost, function(t, n) {
                        if (null == t) return {};
                        var e, o, i = {},
                            s = Object.keys(t);
                        for (o = 0; o < s.length; o++) e = s[o], n.indexOf(e) >= 0 || (i[e] = t[e]);
                        return i
                    }(t, b)),
                    f = (0, o.useState)(null),
                    m = f[0],
                    h = f[1];
                return (0, o.useEffect)((function() {
                    if (!c && m) {
                        var t = !1,
                            n = !1,
                            e = document.createElement("span"),
                            o = [].concat(document.body.classList).includes("dark") || "light",
                            i = function(i) {
                                if (2 === i.button || !e.animate) return !1;
                                t = !0, e.classList.add("ripple-effect");
                                var s = m.getBoundingClientRect(),
                                    r = i.x - s.left,
                                    a = i.y - s.top,
                                    l = Math.max(s.width, s.height) * Math.PI * 1.5;
                                e.style.left = r + "px", e.style.top = a + "px", e.style.backgroundColor = "default" === A && "light" === o ? "black" : "white", e.style.opacity = "0.175", n || (n = !0, m.appendChild(e)), e.animate({
                                    height: ["0px", l + "px"],
                                    width: ["0px", l + "px"]
                                }, {
                                    duration: 700
                                }).onfinish = function() {
                                    e.style.width = l + "px", e.style.height = l + "px"
                                }
                            },
                            s = function() {
                                t && (e.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    n && (n = !1, e.remove())
                                })
                            },
                            r = function() {
                                t && e.animate && (t = !1, e.animate({
                                    opacity: [.175, 0]
                                }, {
                                    duration: 700 / 3
                                }).onfinish = function() {
                                    n && (n = !1, e.remove())
                                })
                            };
                        return m.addEventListener("mousedown", i), m.addEventListener("mouseup", r), m.addEventListener("mouseover", s),
                            function() {
                                m.removeEventListener("mousedown", i), m.removeEventListener("mouseup", r), m.removeEventListener("mouseover", s)
                            }
                    }
                }), [m, A, c]), o.createElement("button", y({
                    type: a || "button",
                    style: s,
                    className: "button " + (l ? "thin" : "") + " " + (i ? "small" : "") + " " + ("primary" === A ? "button-primary" : "ghost" === A ? "button-ghost" : "") + " " + (n || "")
                }, d, {
                    ref: h
                }), p ? o.createElement("i", {
                    className: "fa-solid fa-plus",
                    style: {
                        marginRight: ".5rem"
                    }
                }) : null, e)
            }
        },
        52732: (t, n, e) => {
            e.d(n, {
                Z: () => a
            });
            var o = e(64162),
                i = e.n(o),
                s = e(68922),
                r = e.n(s)()(i());
            r.push([t.id, ".button{position:relative;overflow:hidden;transition:all .25s cubic-bezier(0.4, 0, 0.2, 1);outline:none;font-weight:500 !important;font-family:inherit}.button:focus{box-shadow:none !important;outline:none}.button .ripple-effect{position:absolute;height:10px;width:10px;border-radius:50%;transform:translate3d(-50%, -50%, 0)}", "", {
                version: 3,
                sources: ["webpack://./client/components/button/style.scss"],
                names: [],
                mappings: "AAAA,QACE,iBAAA,CACA,eAAA,CACA,gDAAA,CACA,YAAA,CACA,0BAAA,CACA,mBAAA,CAEA,cACE,0BAAA,CACA,YAAA,CAGF,uBACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA",
                sourcesContent: [".button {\n  position: relative;\n  overflow: hidden;\n  transition: all .25s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  font-weight: 500 !important;\n  font-family: inherit;\n\n  &:focus {\n    box-shadow: none !important;\n    outline: none;\n  }\n\n  .ripple-effect {\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    transform: translate3d(-50%, -50%, 0)\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const a = r
        }
    }
]);
//# sourceMappingURL=Button-ad919a8e.js.map