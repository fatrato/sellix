(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1377], {
        92611: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                default: () => a
            });
            var r = o(78709),
                n = o(20153);
            const a = function(e) {
                var t = e.text,
                    o = void 0 === t ? "" : t,
                    a = e.onCopy,
                    c = e.children,
                    i = e.className;
                return r.createElement(n.CopyToClipboard, {
                    text: o,
                    onCopy: a
                }, r.createElement("span", {
                    className: "cursor-pointer " + (i || "")
                }, c || o))
            }
        },
        65590: (e, t, o) => {
            "use strict";
            var r = o(98701),
                n = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var o, a, c, i, l, u, p = !1;
                t || (t = {}), o = t.debug || !1;
                try {
                    if (c = r(), i = document.createRange(), l = document.getSelection(), (u = document.createElement("span")).textContent = e, u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(r) {
                            if (r.stopPropagation(), t.format)
                                if (r.preventDefault(), void 0 === r.clipboardData) {
                                    o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var a = n[t.format] || n.default;
                                    window.clipboardData.setData(a, e)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                        })), document.body.appendChild(u), i.selectNodeContents(u), l.addRange(i), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    p = !0
                } catch (r) {
                    o && console.error("unable to copy using execCommand: ", r), o && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), p = !0
                    } catch (r) {
                        o && console.error("unable to copy using clipboardData: ", r), o && console.error("falling back to prompt"), a = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
                    }
                } finally {
                    l && ("function" == typeof l.removeRange ? l.removeRange(i) : l.removeAllRanges()), u && document.body.removeChild(u), c()
                }
                return p
            }
        },
        46935: (e, t, o) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var r = a(o(78709)),
                n = a(o(65590));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function i(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? f(e) : t
            }

            function s(e) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, s(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e, t) {
                return y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function d(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var b = function(e) {
                function t() {
                    var e, o;
                    l(this, t);
                    for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++) c[i] = arguments[i];
                    return d(f(o = p(this, (e = s(t)).call.apply(e, [this].concat(c)))), "onClick", (function(e) {
                        var t = o.props,
                            a = t.text,
                            c = t.onCopy,
                            i = t.children,
                            l = t.options,
                            u = r.default.Children.only(i),
                            p = (0, n.default)(a, l);
                        c && c(a, p), u && u.props && "function" == typeof u.props.onClick && u.props.onClick(e)
                    })), o
                }
                var o, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), o = t, a = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            o = function(e, t) {
                                if (null == e) return {};
                                var o, r, n = function(e, t) {
                                    if (null == e) return {};
                                    var o, r, n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) o = a[r], t.indexOf(o) >= 0 || (n[o] = e[o]);
                                    return n
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < a.length; r++) o = a[r], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o])
                                }
                                return n
                            }(e, ["text", "onCopy", "options", "children"]),
                            n = r.default.Children.only(t);
                        return r.default.cloneElement(n, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(o, !0).forEach((function(t) {
                                    d(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : i(o).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }({}, o, {
                            onClick: this.onClick
                        }))
                    }
                }], a && u(o.prototype, a), t
            }(r.default.PureComponent);
            t.CopyToClipboard = b, d(b, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        20153: (e, t, o) => {
            "use strict";
            var r = o(46935).CopyToClipboard;
            r.CopyToClipboard = r, e.exports = r
        },
        98701: e => {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, o = [], r = 0; r < e.rangeCount; r++) o.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || o.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=Clipboard-d9ff4fb4.js.map