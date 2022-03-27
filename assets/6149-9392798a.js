"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6149], {
        86149: (e, t, n) => {
            n.d(t, {
                wO: () => x,
                S0: () => _,
                iR: () => J,
                vb: () => $,
                OF: () => F
            });
            var r = n(78709),
                o = n(12459),
                a = n.n(o),
                i = Math.sqrt(50),
                u = Math.sqrt(10),
                c = Math.sqrt(2);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function y(e, t) {
                return y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? g(e) : t
            }

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return n
                    }
                }(e, t) || w(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || w(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0
                }
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var E = "react-compound-slider:";

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return function(t, n) {
                    return t.val > n.val ? e ? -1 : 1 : n.val > t.val ? e ? 1 : -1 : 0
                }
            }

            function O(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = e.findIndex((function(e) {
                        return e.key === t
                    }));
                if (-1 !== o) {
                    var a = e[o],
                        i = a.key,
                        u = a.val;
                    return u === n ? e : [].concat(M(e.slice(0, o)), [{
                        key: i,
                        val: n
                    }], M(e.slice(o + 1))).sort(T(r))
                }
                return e
            }

            function P(e, t) {
                if (!e) return [0, 0];
                var n = e.getBoundingClientRect();
                return [t ? n.top : n.left, t ? n.bottom : n.right]
            }

            function I(e) {
                var t = e.type,
                    n = void 0 === t ? "" : t,
                    r = e.touches;
                return !r || r.length > 1 || "touchend" === n.toLowerCase() && r.length > 0
            }

            function A(e, t) {
                return e ? t.touches[0].clientY : t.touches[0].pageX
            }

            function H() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = 0,
                    i = e.map((function(e) {
                        var t = n.getValue(e);
                        return e !== t && (o += 1, a()(!r, "".concat(E, " Invalid value encountered. Changing ").concat(e, " to ").concat(t, "."))), t
                    })).map((function(e, t) {
                        return {
                            key: "$$-".concat(t),
                            val: e
                        }
                    })).sort(T(t));
                return {
                    handles: i,
                    changes: o
                }
            }

            function j(e, t) {
                return t
            }

            function C(e, t) {
                for (var n = 0; n < e.length; n++) {
                    if (e[n].key !== t[n].key) return e;
                    if (t[n + 1] && t[n].val === t[n + 1].val) return e
                }
                return t
            }

            function L(e, t, n, r, o) {
                for (var a = -1, i = !0, u = 0; u < e.length; u++) {
                    var c = e[u],
                        l = t[u];
                    if (!l || l.key !== c.key) return e;
                    l.val !== c.val && (a = u, i = l.val - c.val > 0)
                }
                if (-1 === a) return e;
                for (var s = i ? n : -n, v = 0; v < t.length; v++) {
                    var d = t[v],
                        f = t[v + 1];
                    if (f && d.val === f.val) {
                        if (v === a) {
                            var h = f.val + s;
                            if (o(h) === h) {
                                var p = L(t, O(t, f.key, f.val + s, r), n, r, o);
                                return p === t ? e : p
                            }
                            return e
                        }
                        var m = d.val + s;
                        if (o(m) === m) {
                            var y = L(t, O(t, d.key, d.val + s, r), n, r, o);
                            return y === t ? e : y
                        }
                        return e
                    }
                }
                return t
            }

            function R() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.forEach((function(t) {
                        return t && t(e)
                    }))
                }
            }
            var V = function() {
                    return {
                        value: 0,
                        percent: 0
                    }
                },
                _ = function(e) {
                    p(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        l(this, n);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(o))).getRailProps = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.props,
                                r = n.emitMouse,
                                o = n.emitTouch;
                            return h(h({}, t), {}, {
                                onMouseDown: R(t && t.onMouseDown, r),
                                onTouchStart: R(t && t.onTouchStart, o)
                            })
                        }, e
                    }
                    return v(n, [{
                        key: "render",
                        value: function() {
                            var e = this.getRailProps,
                                t = this.props,
                                n = t.getEventData,
                                o = t.activeHandleID,
                                a = void 0 === o ? "" : o,
                                i = (0, t.children)({
                                    getEventData: n || V,
                                    activeHandleID: a,
                                    getRailProps: e
                                });
                            return i && r.Children.only(i)
                        }
                    }]), n
                }(r.Component),
                x = function(e) {
                    p(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        l(this, n);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(o))).autofocus = function(e) {
                            e.target instanceof HTMLElement && e.target.focus()
                        }, e.getHandleProps = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = e.props,
                                o = r.emitKeyboard,
                                a = r.emitMouse,
                                i = r.emitTouch;
                            return h(h({}, n), {}, {
                                onKeyDown: R(n && n.onKeyDown, (function(e) {
                                    return o && o(e, t)
                                })),
                                onMouseDown: R(n && n.onMouseDown, e.autofocus, (function(e) {
                                    return a && a(e, t)
                                })),
                                onTouchStart: R(n && n.onTouchStart, (function(e) {
                                    return i && i(e, t)
                                }))
                            })
                        }, e
                    }
                    return v(n, [{
                        key: "render",
                        value: function() {
                            var e = this.getHandleProps,
                                t = this.props,
                                n = t.activeHandleID,
                                o = void 0 === n ? "" : n,
                                a = t.children,
                                i = t.handles,
                                u = a({
                                    handles: void 0 === i ? [] : i,
                                    activeHandleID: o,
                                    getHandleProps: e
                                });
                            return u && r.Children.only(u)
                        }
                    }]), n
                }(r.Component),
                U = function() {
                    function e() {
                        l(this, e), this.interpolator = void 0, this.domain = [0, 1], this.range = [0, 1], this.domain = [0, 1], this.range = [0, 1], this.interpolator = null
                    }
                    return v(e, [{
                        key: "createInterpolator",
                        value: function(e, t) {
                            var n = this,
                                r = e[0],
                                o = e[1],
                                a = t[0],
                                i = t[1];
                            return o < r ? function(e) {
                                return n.interpolateValue(i, a)(n.deinterpolateValue(o, r)(e))
                            } : function(e) {
                                return n.interpolateValue(a, i)(n.deinterpolateValue(r, o)(e))
                            }
                        }
                    }, {
                        key: "interpolateValue",
                        value: function(e, t) {
                            return t -= e = +e,
                                function(n) {
                                    return e + t * n
                                }
                        }
                    }, {
                        key: "deinterpolateValue",
                        value: function(e, t) {
                            return (t -= e = +e) ? function(n) {
                                return (n - e) / t
                            } : function() {
                                return t
                            }
                        }
                    }, {
                        key: "rescale",
                        value: function() {
                            return this.interpolator = null, this
                        }
                    }, {
                        key: "getValue",
                        value: function(e) {
                            var t = this.domain,
                                n = this.range;
                            return (this.interpolator || (this.interpolator = this.createInterpolator(t, n)))(+e)
                        }
                    }, {
                        key: "setDomain",
                        value: function(e) {
                            return this.domain = [e[0], e[1]], this.rescale(), this
                        }
                    }, {
                        key: "getDomain",
                        value: function() {
                            return this.domain
                        }
                    }, {
                        key: "setRange",
                        value: function(e) {
                            return this.range = [e[0], e[1]], this
                        }
                    }, {
                        key: "getRange",
                        value: function() {
                            return this.range
                        }
                    }, {
                        key: "getTicks",
                        value: function(e) {
                            var t = this.domain;
                            return function(e, t, n) {
                                var r, o, a, l, s = -1;
                                if (n = +n, (e = +e) == (t = +t) && n > 0) return [e];
                                if ((r = t < e) && (o = e, e = t, t = o), 0 === (l = function(e, t, n) {
                                        var r = (t - e) / Math.max(0, n),
                                            o = Math.floor(Math.log(r) / Math.LN10),
                                            a = r / Math.pow(10, o);
                                        return o >= 0 ? (a >= i ? 10 : a >= u ? 5 : a >= c ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= i ? 10 : a >= u ? 5 : a >= c ? 2 : 1)
                                    }(e, t, n)) || !isFinite(l)) return [];
                                if (l > 0) {
                                    var v = Math.round(e / l),
                                        d = Math.round(t / l);
                                    for (v * l < e && ++v, d * l > t && --d, a = new Array(o = d - v + 1); ++s < o;) a[s] = (v + s) * l
                                } else {
                                    l = -l;
                                    var f = Math.round(e * l),
                                        h = Math.round(t * l);
                                    for (f / l < e && ++f, h / l > t && --h, a = new Array(o = h - f + 1); ++s < o;) a[s] = (f + s) / l
                                }
                                return r && a.reverse(), a
                            }(t[0], t[t.length - 1], e || 10)
                        }
                    }]), e
                }(),
                K = function() {
                    return {
                        value: 0,
                        percent: 0
                    }
                },
                $ = function(e) {
                    p(n, e);
                    var t = b(n);

                    function n() {
                        return l(this, n), t.apply(this, arguments)
                    }
                    return v(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.values,
                                o = e.scale,
                                a = void 0 === o ? new U : o,
                                i = e.count,
                                u = void 0 === i ? 10 : i,
                                c = e.getEventData,
                                l = void 0 === c ? K : c,
                                s = e.activeHandleID,
                                v = t({
                                    getEventData: l,
                                    activeHandleID: void 0 === s ? "" : s,
                                    ticks: (n || a.getTicks(u)).map((function(e) {
                                        return {
                                            id: "$$-".concat(e),
                                            value: e,
                                            percent: a.getValue(e)
                                        }
                                    }))
                                });
                            return v && r.Children.only(v)
                        }
                    }]), n
                }(r.Component),
                N = function() {
                    return {
                        value: 0,
                        percent: 0
                    }
                },
                F = function(e) {
                    p(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        l(this, n);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(o))).getTrackProps = function(t) {
                            var n = e.props,
                                r = n.emitMouse,
                                o = n.emitTouch;
                            return h(h({}, t || {}), {}, {
                                onMouseDown: R(t && t.onMouseDown, r),
                                onTouchStart: R(t && t.onTouchStart, o)
                            })
                        }, e
                    }
                    return v(n, [{
                        key: "render",
                        value: function() {
                            for (var e = this.getTrackProps, t = this.props, n = t.children, o = t.left, a = void 0 === o || o, i = t.right, u = void 0 === i || i, c = t.scale, l = void 0 === c ? new U : c, s = t.handles, v = void 0 === s ? [] : s, d = t.getEventData, f = void 0 === d ? N : d, h = t.activeHandleID, p = void 0 === h ? "" : h, m = l.getDomain(), y = [], g = 0; g < v.length + 1; g++) {
                                var D = v[g - 1],
                                    b = v[g];
                                0 === g && !0 === a ? D = {
                                    id: "$",
                                    value: m[0],
                                    percent: 0
                                } : g === v.length && !0 === u && (b = {
                                    id: "$",
                                    value: m[1],
                                    percent: 100
                                }), D && b && y.push({
                                    id: "".concat(D.id, "-").concat(b.id),
                                    source: D,
                                    target: b
                                })
                            }
                            var k = n({
                                getEventData: f,
                                activeHandleID: p,
                                tracks: y,
                                getTrackProps: e
                            });
                            return k && r.Children.only(k)
                        }
                    }]), n
                }(r.Component);

            function X(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }
            var Y = function e() {
                    var t = this;
                    l(this, e), this.step = 1, this.domain = [0, 1], this.range = [0, 1], this.setDomain = function(e) {
                        return t.domain = [e[0], e[1]], t
                    }, this.setRange = function(e) {
                        return t.range = [e[0], e[1]], t
                    }, this.setStep = function(e) {
                        return t.step = e, t
                    }, this.getValue = function(e) {
                        var n = k(t.domain, 2),
                            r = n[0],
                            o = n[1],
                            a = k(t.range, 2),
                            i = a[0],
                            u = a[1],
                            c = t.step,
                            l = (X(e, r, o) - r) / (o - r);
                        return X(c * Math.round(l * (u - i) / c) + i, i < u ? i : u, u > i ? u : i)
                    }
                },
                q = "undefined" != typeof window && "undefined" != typeof document,
                B = function() {},
                W = function(e, t, n, r) {
                    var o = r ? e - t : e + t;
                    return r ? Math.max(n[0], o) : Math.min(n[1], o)
                },
                z = function(e, t, n, r) {
                    var o = r ? e + t : e - t;
                    return r ? Math.min(n[1], o) : Math.max(n[0], o)
                },
                G = [0, 100],
                J = function(e) {
                    p(n, e);
                    var t = b(n);

                    function n() {
                        var e;
                        l(this, n);
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            step: .1,
                            values: [],
                            domain: G,
                            handles: [],
                            reversed: !1,
                            activeHandleID: "",
                            valueToPerc: null,
                            valueToStep: null,
                            pixelToStep: null
                        }, e.slider = r.createRef(), e.onKeyDown = function(t, n) {
                            var r = ["ArrowRight", "ArrowUp"],
                                o = ["ArrowDown", "ArrowLeft"],
                                a = g(e),
                                i = a.state.handles,
                                u = a.props,
                                c = u.step,
                                l = void 0 === c ? .1 : c,
                                s = u.reversed,
                                v = void 0 !== s && s,
                                d = u.vertical,
                                f = void 0 !== d && d,
                                h = u.domain,
                                p = void 0 === h ? [0, 100] : h,
                                m = t.key || "".concat(t.keyCode);
                            if (r.concat(o).includes(m)) {
                                if (f) {
                                    var y = [o, r];
                                    r = y[0], o = y[1]
                                }
                                t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
                                var D = i.find((function(e) {
                                    return e.key === n
                                }));
                                if (D) {
                                    var b = D.val,
                                        k = b;
                                    r.includes(m) ? k = W(b, l, p, v) : o.includes(m) && (k = z(b, l, p, v));
                                    var M = i.map((function(e) {
                                        return e.key === n ? {
                                            key: e.key,
                                            val: k
                                        } : e
                                    }));
                                    e.submitUpdate(M, !0)
                                }
                            }
                        }, e.onMouseDown = function(t, n) {
                            e.onStart(t, n, !1)
                        }, e.onTouchStart = function(t, n) {
                            I(t) || e.onStart(t, n, !0)
                        }, e.getEventData = function(t, n) {
                            var r, o = g(e),
                                a = o.state,
                                i = a.pixelToStep,
                                u = a.valueToPerc,
                                c = o.props.vertical;
                            return i.setDomain(P(e.slider.current, c)), n && t instanceof TouchEvent ? r = i.getValue(A(c, t)) : t instanceof MouseEvent && (r = i.getValue(c ? t.clientY : t.pageX)), {
                                value: r,
                                percent: u.getValue(r)
                            }
                        }, e.onMouseMove = function(t) {
                            var n = g(e),
                                r = n.state,
                                o = r.handles,
                                a = r.pixelToStep,
                                i = r.activeHandleID,
                                u = void 0 === i ? "" : i,
                                c = n.props,
                                l = c.vertical,
                                s = c.reversed,
                                v = void 0 !== s && s;
                            a.setDomain(P(e.slider.current, l));
                            var d = O(o, u, a.getValue(l ? t.clientY : t.pageX), v);
                            e.submitUpdate(d)
                        }, e.onTouchMove = function(t) {
                            var n = g(e),
                                r = n.state,
                                o = r.handles,
                                a = r.pixelToStep,
                                i = r.activeHandleID,
                                u = n.props,
                                c = u.vertical,
                                l = u.reversed;
                            if (null !== a && !I(t)) {
                                a.setDomain(P(e.slider.current, c));
                                var s = O(o, i, a.getValue(A(c, t)), l);
                                e.submitUpdate(s)
                            }
                        }, e.onMouseUp = function() {
                            var t = g(e),
                                n = t.state,
                                r = n.handles,
                                o = void 0 === r ? [] : r,
                                a = n.activeHandleID,
                                i = t.props,
                                u = i.onChange,
                                c = void 0 === u ? B : u,
                                l = i.onSlideEnd,
                                s = void 0 === l ? B : l;
                            c(o.map((function(e) {
                                return e.val
                            }))), s(o.map((function(e) {
                                return e.val
                            })), {
                                activeHandleID: a
                            }), e.setState({
                                activeHandleID: ""
                            }), q && (document.removeEventListener("mousemove", e.onMouseMove), document.removeEventListener("mouseup", e.onMouseUp))
                        }, e.onTouchEnd = function() {
                            var t = g(e),
                                n = t.state,
                                r = n.handles,
                                o = n.activeHandleID,
                                a = t.props,
                                i = a.onChange,
                                u = void 0 === i ? B : i,
                                c = a.onSlideEnd,
                                l = void 0 === c ? B : c;
                            u(r.map((function(e) {
                                return e.val
                            }))), l(r.map((function(e) {
                                return e.val
                            })), {
                                activeHandleID: o
                            }), e.setState({
                                activeHandleID: ""
                            }), q && (document.removeEventListener("touchmove", e.onTouchMove), document.removeEventListener("touchend", e.onTouchEnd))
                        }, e
                    }
                    return v(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.state.pixelToStep,
                                t = this.props.vertical;
                            e.setDomain(P(this.slider.current, t))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeListeners()
                        }
                    }, {
                        key: "removeListeners",
                        value: function() {
                            q && (document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
                        }
                    }, {
                        key: "onStart",
                        value: function(e, t, n) {
                            var r = this.state.handles,
                                o = this.props.onSlideStart,
                                a = void 0 === o ? B : o;
                            n || e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), r.find((function(e) {
                                return e.key === t
                            })) ? (this.setState({
                                activeHandleID: t
                            }), a(r.map((function(e) {
                                return e.val
                            })), {
                                activeHandleID: t
                            }), n ? this.addTouchEvents() : this.addMouseEvents()) : (this.setState({
                                activeHandleID: ""
                            }), this.handleRailAndTrackClicks(e, n))
                        }
                    }, {
                        key: "handleRailAndTrackClicks",
                        value: function(e, t) {
                            var n, r = this,
                                o = this.state,
                                a = o.handles,
                                i = o.pixelToStep,
                                u = this.props,
                                c = u.vertical,
                                l = u.reversed,
                                s = void 0 !== l && l,
                                v = this.slider;
                            i.setDomain(P(v.current, c)), n = t ? i.getValue(A(c, e)) : i.getValue(c ? e.clientY : e.pageX);
                            for (var d = "", f = 1 / 0, h = 0; h < a.length; h++) {
                                var p = a[h],
                                    m = p.key,
                                    y = p.val,
                                    g = Math.abs(y - n);
                                g < f && (d = m, f = g)
                            }
                            var D = O(a, d, n, s);
                            this.setState({
                                activeHandleID: d
                            }, (function() {
                                r.submitUpdate(D, !0), t ? r.addTouchEvents() : r.addMouseEvents()
                            }))
                        }
                    }, {
                        key: "addMouseEvents",
                        value: function() {
                            q && (document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp))
                        }
                    }, {
                        key: "addTouchEvents",
                        value: function() {
                            q && (document.addEventListener("touchmove", this.onTouchMove), document.addEventListener("touchend", this.onTouchEnd))
                        }
                    }, {
                        key: "submitUpdate",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.props,
                                r = n.mode,
                                o = void 0 === r ? 1 : r,
                                i = n.step,
                                u = void 0 === i ? .1 : i,
                                c = n.onUpdate,
                                l = void 0 === c ? B : c,
                                s = n.onChange,
                                v = void 0 === s ? B : s,
                                d = n.reversed,
                                f = void 0 !== d && d,
                                h = this.state.valueToStep.getValue;
                            this.setState((function(n) {
                                var r = n.handles,
                                    i = [];
                                if ("function" == typeof o) i = o(r, e, u, f, h), a()(Array.isArray(i), "Custom mode function did not return an array.");
                                else switch (o) {
                                    case 1:
                                        i = j(0, e);
                                        break;
                                    case 2:
                                        i = C(r, e);
                                        break;
                                    case 3:
                                        i = L(r, e, u, f, h);
                                        break;
                                    default:
                                        i = e, a()(!1, "".concat(E, " Invalid mode value."))
                                }
                                return l(i.map((function(e) {
                                    return e.val
                                }))), t && v(i.map((function(e) {
                                    return e.val
                                }))), {
                                    handles: i
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.handles,
                                o = t.valueToPerc,
                                a = t.activeHandleID,
                                i = this.props,
                                u = i.className,
                                c = i.rootStyle,
                                l = void 0 === c ? {} : c,
                                s = i.rootProps,
                                v = void 0 === s ? {} : s,
                                d = i.component,
                                f = void 0 === d ? "div" : d,
                                p = i.disabled,
                                m = void 0 !== p && p,
                                y = i.flatten,
                                g = void 0 !== y && y,
                                D = n.map((function(e) {
                                    var t = e.key,
                                        n = e.val;
                                    return {
                                        id: t,
                                        value: n,
                                        percent: o.getValue(n)
                                    }
                                })),
                                b = r.Children.map(this.props.children, (function(t) {
                                    return !0 === function(e) {
                                        if (!(0, r.isValidElement)(e)) return !1;
                                        var t = e.type,
                                            n = t ? t.name : "";
                                        return n === x.name || n === _.name || n === $.name || n === F.name
                                    }(t) ? r.cloneElement(t, {
                                        scale: o,
                                        handles: D,
                                        activeHandleID: a,
                                        getEventData: e.getEventData,
                                        emitKeyboard: m ? B : e.onKeyDown,
                                        emitMouse: m ? B : e.onMouseDown,
                                        emitTouch: m ? B : e.onTouchStart
                                    }) : t
                                }));
                            return g ? r.createElement(r.Fragment, null, r.createElement(f, h(h({}, v), {}, {
                                style: l,
                                className: u,
                                ref: this.slider
                            })), b) : r.createElement(r.Fragment, null, r.createElement(f, h(h({}, v), {}, {
                                style: l,
                                className: u,
                                ref: this.slider
                            }), b))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n, r, o = e.step,
                                i = void 0 === o ? .1 : o,
                                u = e.values,
                                c = e.domain,
                                l = void 0 === c ? G : c,
                                s = e.reversed,
                                v = void 0 !== s && s,
                                d = e.onUpdate,
                                f = void 0 === d ? B : d,
                                h = e.onChange,
                                p = void 0 === h ? B : h,
                                m = e.warnOnChanges,
                                y = void 0 !== m && m,
                                g = t.valueToPerc,
                                D = t.valueToStep,
                                b = t.pixelToStep,
                                w = {};
                            if (g && D && b || (g = new U, D = new Y, b = new Y, w.valueToPerc = g, w.valueToStep = D, w.pixelToStep = b), t.domain === G || null === t.step || null === t.domain || null === t.reversed || i !== t.step || l[0] !== t.domain[0] || l[1] !== t.domain[1] || v !== t.reversed) {
                                var S = k(l, 2),
                                    T = S[0],
                                    O = S[1];
                                D.setStep(i).setRange([T, O]).setDomain([T, O]), !0 === v ? (g.setDomain([T, O]).setRange([100, 0]), b.setStep(i).setRange([O, T])) : (g.setDomain([T, O]).setRange([0, 100]), b.setStep(i).setRange([T, O])), a()(O > T, "".concat(E, " Max must be greater than min (even if reversed). Max is ").concat(O, ". Min is ").concat(T, "."));
                                var P = H(u || t.values, v, D, y),
                                    I = P.handles;
                                (P.changes || void 0 === u || u === t.values) && (f(I.map((function(e) {
                                    return e.val
                                }))), p(I.map((function(e) {
                                    return e.val
                                })))), w.step = i, w.values = u, w.domain = l === G ? M(l) : l, w.handles = I, w.reversed = v
                            } else if (!((n = u) === (r = t.values) || n.length === r.length && n.reduce(function(e) {
                                    return function(t, n, r) {
                                        return t && e[r] === n
                                    }
                                }(r), !0))) {
                                var A = H(u, v, D, y),
                                    j = A.handles;
                                A.changes && (f(j.map((function(e) {
                                    return e.val
                                }))), p(j.map((function(e) {
                                    return e.val
                                })))), w.values = u, w.handles = j
                            }
                            return Object.keys(w).length ? w : null
                        }
                    }]), n
                }(r.PureComponent)
        },
        12459: e => {
            e.exports = function() {}
        }
    }
]);
//# sourceMappingURL=6149-9392798a.js.map