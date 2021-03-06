"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9607], {
        84429: (e, n) => {
            n.Z = function(e, n) {
                if (e && n) {
                    var r = Array.isArray(n) ? n : n.split(","),
                        t = e.name || "",
                        o = (e.type || "").toLowerCase(),
                        i = o.replace(/\/.*$/, "");
                    return r.some((function(e) {
                        var n = e.trim().toLowerCase();
                        return "." === n.charAt(0) ? t.toLowerCase().endsWith(n) : n.endsWith("/*") ? i === n.replace(/\/.*$/, "") : o === n
                    }))
                }
                return !0
            }
        },
        49607: (e, n, r) => {
            r.d(n, {
                u: () => V
            });
            var t = r(78709),
                o = r(16526),
                i = r.n(o);

            function a(e, n, r, t) {
                return new(r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(t.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(e) {
                        try {
                            c(t.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var n;
                        e.done ? o(e.value) : (n = e.value, n instanceof r ? n : new r((function(e) {
                            e(n)
                        }))).then(a, u)
                    }
                    c((t = t.apply(e, n || [])).next())
                }))
            }

            function u(e, n) {
                var r, t, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                switch (t = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, t = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e], t = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }

            function c(e, n) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var t, o, i = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(t = i.next()).done;) a.push(t.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        t && !t.done && (r = i.return) && r.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }
            Object.create, Object.create;
            var l = new Map([
                ["avi", "video/avi"],
                ["gif", "image/gif"],
                ["ico", "image/x-icon"],
                ["jpeg", "image/jpeg"],
                ["jpg", "image/jpeg"],
                ["mkv", "video/x-matroska"],
                ["mov", "video/quicktime"],
                ["mp4", "video/mp4"],
                ["pdf", "application/pdf"],
                ["png", "image/png"],
                ["zip", "application/zip"],
                ["doc", "application/msword"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
            ]);

            function f(e, n) {
                var r = function(e) {
                    var n = e.name;
                    if (n && -1 !== n.lastIndexOf(".") && !e.type) {
                        var r = n.split(".").pop().toLowerCase(),
                            t = l.get(r);
                        t && Object.defineProperty(e, "type", {
                            value: t,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" != typeof r.path) {
                    var t = e.webkitRelativePath;
                    Object.defineProperty(r, "path", {
                        value: "string" == typeof n ? n : "string" == typeof t && t.length > 0 ? t : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return r
            }
            var s = [".DS_Store", "Thumbs.db"];

            function p(e) {
                return (null !== e.target && e.target.files ? g(e.target.files) : []).map((function(e) {
                    return f(e)
                }))
            }

            function d(e, n) {
                return a(this, void 0, void 0, (function() {
                    var r;
                    return u(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return e.items ? (r = g(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== n ? [2, r] : [4, Promise.all(r.map(y))]) : [3, 2];
                            case 1:
                                return [2, v(m(t.sent()))];
                            case 2:
                                return [2, v(g(e.files).map((function(e) {
                                    return f(e)
                                })))]
                        }
                    }))
                }))
            }

            function v(e) {
                return e.filter((function(e) {
                    return -1 === s.indexOf(e.name)
                }))
            }

            function g(e) {
                for (var n = [], r = 0; r < e.length; r++) {
                    var t = e[r];
                    n.push(t)
                }
                return n
            }

            function y(e) {
                if ("function" != typeof e.webkitGetAsEntry) return b(e);
                var n = e.webkitGetAsEntry();
                return n && n.isDirectory ? D(n) : b(e)
            }

            function m(e) {
                return e.reduce((function(e, n) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(c(arguments[n]));
                        return e
                    }(e, Array.isArray(n) ? m(n) : [n])
                }), [])
            }

            function b(e) {
                var n = e.getAsFile();
                if (!n) return Promise.reject(e + " is not a File");
                var r = f(n);
                return Promise.resolve(r)
            }

            function h(e) {
                return a(this, void 0, void 0, (function() {
                    return u(this, (function(n) {
                        return [2, e.isDirectory ? D(e) : w(e)]
                    }))
                }))
            }

            function D(e) {
                var n = e.createReader();
                return new Promise((function(e, r) {
                    var t = [];
                    ! function o() {
                        var i = this;
                        n.readEntries((function(n) {
                            return a(i, void 0, void 0, (function() {
                                var i, a, c;
                                return u(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (n.length) return [3, 5];
                                            u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, , 4]), [4, Promise.all(t)];
                                        case 2:
                                            return i = u.sent(), e(i), [3, 4];
                                        case 3:
                                            return a = u.sent(), r(a), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            c = Promise.all(n.map(h)), t.push(c), o(), u.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            r(e)
                        }))
                    }()
                }))
            }

            function w(e) {
                return a(this, void 0, void 0, (function() {
                    return u(this, (function(n) {
                        return [2, new Promise((function(n, r) {
                            e.file((function(r) {
                                var t = f(r, e.fullPath);
                                n(t)
                            }), (function(e) {
                                r(e)
                            }))
                        }))]
                    }))
                }))
            }
            var O = r(84429);

            function A(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            t = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done) && (r.push(a.value), !n || r.length !== n); t = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                t || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return r
                    }
                }(e, n) || function(e, n) {
                    if (e) {
                        if ("string" == typeof e) return F(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? F(e, n) : void 0
                    }
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }
            var j = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: "file-invalid-type",
                        message: "File type must be ".concat(n)
                    }
                },
                E = function(e) {
                    return {
                        code: "file-too-large",
                        message: "File is larger than ".concat(e, " bytes")
                    }
                },
                S = function(e) {
                    return {
                        code: "file-too-small",
                        message: "File is smaller than ".concat(e, " bytes")
                    }
                },
                k = {
                    code: "too-many-files",
                    message: "Too many files"
                };

            function C(e, n) {
                var r = "application/x-moz-file" === e.type || (0, O.Z)(e, n);
                return [r, r ? null : j(n)]
            }

            function x(e, n, r) {
                if (P(e.size))
                    if (P(n) && P(r)) {
                        if (e.size > r) return [!1, E(r)];
                        if (e.size < n) return [!1, S(n)]
                    } else {
                        if (P(n) && e.size < n) return [!1, S(n)];
                        if (P(r) && e.size > r) return [!1, E(r)]
                    }
                return [!0, null]
            }

            function P(e) {
                return null != e
            }

            function L(e) {
                var n = e.files,
                    r = e.accept,
                    t = e.minSize,
                    o = e.maxSize,
                    i = e.multiple,
                    a = e.maxFiles;
                return !(!i && n.length > 1 || i && a >= 1 && n.length > a) && n.every((function(e) {
                    var n = A(C(e, r), 1)[0],
                        i = A(x(e, t, o), 1)[0];
                    return n && i
                }))
            }

            function z(e) {
                return "function" == typeof e.isPropagationStopped ? e.isPropagationStopped() : void 0 !== e.cancelBubble && e.cancelBubble
            }

            function R(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function T(e) {
                e.preventDefault()
            }

            function I(e) {
                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
            }

            function _(e) {
                return -1 !== e.indexOf("Edge/")
            }

            function K() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return I(e) || _(e)
            }

            function B() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return function(e) {
                    for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) t[o - 1] = arguments[o];
                    return n.some((function(n) {
                        return !z(e) && n && n.apply(void 0, [e].concat(t)), z(e)
                    }))
                }
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return $(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            t = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done) && (r.push(a.value), !n || r.length !== n); t = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                t || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return r
                    }
                }(e, n) || U(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, n) {
                if (e) {
                    if ("string" == typeof e) return $(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $(e, n) : void 0
                }
            }

            function $(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function G(e, n) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function H(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? G(Object(r), !0).forEach((function(n) {
                        q(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return e
            }

            function q(e, n, r) {
                return n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r, e
            }

            function W(e, n) {
                if (null == e) return {};
                var r, t, o = function(e, n) {
                    if (null == e) return {};
                    var r, t, o = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) r = i[t], n.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) r = i[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            var Z = (0, t.forwardRef)((function(e, n) {
                var r = e.children,
                    o = V(W(e, ["children"])),
                    i = o.open,
                    a = W(o, ["open"]);
                return (0, t.useImperativeHandle)(n, (function() {
                    return {
                        open: i
                    }
                }), [i]), t.createElement(t.Fragment, null, r(H(H({}, a), {}, {
                    open: i
                })))
            }));
            Z.displayName = "Dropzone";
            var J = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return a(this, void 0, void 0, (function() {
                        return u(this, (function(n) {
                            return [2, (r = e, r.dataTransfer && e.dataTransfer ? d(e.dataTransfer, e.type) : p(e))];
                            var r
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null
            };
            Z.defaultProps = J, Z.propTypes = {
                children: i().func,
                accept: i().oneOfType([i().string, i().arrayOf(i().string)]),
                multiple: i().bool,
                preventDropOnDocument: i().bool,
                noClick: i().bool,
                noKeyboard: i().bool,
                noDrag: i().bool,
                noDragEventsBubbling: i().bool,
                minSize: i().number,
                maxSize: i().number,
                maxFiles: i().number,
                disabled: i().bool,
                getFilesFromEvent: i().func,
                onFileDialogCancel: i().func,
                onDragEnter: i().func,
                onDragLeave: i().func,
                onDragOver: i().func,
                onDrop: i().func,
                onDropAccepted: i().func,
                onDropRejected: i().func,
                validator: i().func
            };
            var Q = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                draggedFiles: [],
                acceptedFiles: [],
                fileRejections: []
            };

            function V() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = H(H({}, J), e),
                    r = n.accept,
                    o = n.disabled,
                    i = n.getFilesFromEvent,
                    a = n.maxSize,
                    u = n.minSize,
                    c = n.multiple,
                    l = n.maxFiles,
                    f = n.onDragEnter,
                    s = n.onDragLeave,
                    p = n.onDragOver,
                    d = n.onDrop,
                    v = n.onDropAccepted,
                    g = n.onDropRejected,
                    y = n.onFileDialogCancel,
                    m = n.preventDropOnDocument,
                    b = n.noClick,
                    h = n.noKeyboard,
                    D = n.noDrag,
                    w = n.noDragEventsBubbling,
                    O = n.validator,
                    A = (0, t.useRef)(null),
                    F = (0, t.useRef)(null),
                    j = (0, t.useReducer)(X, Q),
                    E = N(j, 2),
                    S = E[0],
                    P = E[1],
                    I = S.isFocused,
                    _ = S.isFileDialogActive,
                    U = S.draggedFiles,
                    $ = (0, t.useCallback)((function() {
                        F.current && (P({
                            type: "openDialog"
                        }), F.current.value = null, F.current.click())
                    }), [P]),
                    G = function() {
                        _ && setTimeout((function() {
                            F.current && (F.current.files.length || (P({
                                type: "closeDialog"
                            }), "function" == typeof y && y()))
                        }), 300)
                    };
                (0, t.useEffect)((function() {
                    return window.addEventListener("focus", G, !1),
                        function() {
                            window.removeEventListener("focus", G, !1)
                        }
                }), [F, _, y]);
                var Z = (0, t.useCallback)((function(e) {
                        A.current && A.current.isEqualNode(e.target) && (32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), $()))
                    }), [A, F]),
                    V = (0, t.useCallback)((function() {
                        P({
                            type: "focus"
                        })
                    }), []),
                    Y = (0, t.useCallback)((function() {
                        P({
                            type: "blur"
                        })
                    }), []),
                    ee = (0, t.useCallback)((function() {
                        b || (K() ? setTimeout($, 0) : $())
                    }), [F, b]),
                    ne = (0, t.useRef)([]),
                    re = function(e) {
                        A.current && A.current.contains(e.target) || (e.preventDefault(), ne.current = [])
                    };
                (0, t.useEffect)((function() {
                    return m && (document.addEventListener("dragover", T, !1), document.addEventListener("drop", re, !1)),
                        function() {
                            m && (document.removeEventListener("dragover", T), document.removeEventListener("drop", re))
                        }
                }), [A, m]);
                var te = (0, t.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), fe(e), ne.current = [].concat(M(ne.current), [e.target]), R(e) && Promise.resolve(i(e)).then((function(n) {
                            z(e) && !w || (P({
                                draggedFiles: n,
                                isDragActive: !0,
                                type: "setDraggedFiles"
                            }), f && f(e))
                        }))
                    }), [i, f, w]),
                    oe = (0, t.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), fe(e);
                        var n = R(e);
                        if (n && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (e) {}
                        return n && p && p(e), !1
                    }), [p, w]),
                    ie = (0, t.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), fe(e);
                        var n = ne.current.filter((function(e) {
                                return A.current && A.current.contains(e)
                            })),
                            r = n.indexOf(e.target); - 1 !== r && n.splice(r, 1), ne.current = n, n.length > 0 || (P({
                            isDragActive: !1,
                            type: "setDraggedFiles",
                            draggedFiles: []
                        }), R(e) && s && s(e))
                    }), [A, s, w]),
                    ae = (0, t.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), fe(e), ne.current = [], R(e) && Promise.resolve(i(e)).then((function(n) {
                            if (!z(e) || w) {
                                var t = [],
                                    o = [];
                                n.forEach((function(e) {
                                    var n = N(C(e, r), 2),
                                        i = n[0],
                                        c = n[1],
                                        l = N(x(e, u, a), 2),
                                        f = l[0],
                                        s = l[1],
                                        p = O ? O(e) : null;
                                    if (i && f && !p) t.push(e);
                                    else {
                                        var d = [c, s];
                                        p && (d = d.concat(p)), o.push({
                                            file: e,
                                            errors: d.filter((function(e) {
                                                return e
                                            }))
                                        })
                                    }
                                })), (!c && t.length > 1 || c && l >= 1 && t.length > l) && (t.forEach((function(e) {
                                    o.push({
                                        file: e,
                                        errors: [k]
                                    })
                                })), t.splice(0)), P({
                                    acceptedFiles: t,
                                    fileRejections: o,
                                    type: "setFiles"
                                }), d && d(t, o, e), o.length > 0 && g && g(o, e), t.length > 0 && v && v(t, e)
                            }
                        })), P({
                            type: "reset"
                        })
                    }), [c, r, u, a, l, i, d, v, g, w, O]),
                    ue = function(e) {
                        return o ? null : e
                    },
                    ce = function(e) {
                        return h ? null : ue(e)
                    },
                    le = function(e) {
                        return D ? null : ue(e)
                    },
                    fe = function(e) {
                        w && e.stopPropagation()
                    },
                    se = (0, t.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                r = void 0 === n ? "ref" : n,
                                t = e.onKeyDown,
                                i = e.onFocus,
                                a = e.onBlur,
                                u = e.onClick,
                                c = e.onDragEnter,
                                l = e.onDragOver,
                                f = e.onDragLeave,
                                s = e.onDrop,
                                p = W(e, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);
                            return H(H(q({
                                onKeyDown: ce(B(t, Z)),
                                onFocus: ce(B(i, V)),
                                onBlur: ce(B(a, Y)),
                                onClick: ue(B(u, ee)),
                                onDragEnter: le(B(c, te)),
                                onDragOver: le(B(l, oe)),
                                onDragLeave: le(B(f, ie)),
                                onDrop: le(B(s, ae))
                            }, r, A), o || h ? {} : {
                                tabIndex: 0
                            }), p)
                        }
                    }), [A, Z, V, Y, ee, te, oe, ie, ae, h, D, o]),
                    pe = (0, t.useCallback)((function(e) {
                        e.stopPropagation()
                    }), []),
                    de = (0, t.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                t = void 0 === n ? "ref" : n,
                                o = e.onChange,
                                i = e.onClick,
                                a = W(e, ["refKey", "onChange", "onClick"]),
                                u = q({
                                    accept: r,
                                    multiple: c,
                                    type: "file",
                                    style: {
                                        display: "none"
                                    },
                                    onChange: ue(B(o, ae)),
                                    onClick: ue(B(i, pe)),
                                    autoComplete: "off",
                                    tabIndex: -1
                                }, t, F);
                            return H(H({}, u), a)
                        }
                    }), [F, r, c, ae, o]),
                    ve = U.length,
                    ge = ve > 0 && L({
                        files: U,
                        accept: r,
                        minSize: u,
                        maxSize: a,
                        multiple: c,
                        maxFiles: l
                    }),
                    ye = ve > 0 && !ge;
                return H(H({}, S), {}, {
                    isDragAccept: ge,
                    isDragReject: ye,
                    isFocused: I && !o,
                    getRootProps: se,
                    getInputProps: de,
                    rootRef: A,
                    inputRef: F,
                    open: ue($)
                })
            }

            function X(e, n) {
                switch (n.type) {
                    case "focus":
                        return H(H({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return H(H({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return H(H({}, e), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return H(H({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        var r = n.isDragActive,
                            t = n.draggedFiles;
                        return H(H({}, e), {}, {
                            draggedFiles: t,
                            isDragActive: r
                        });
                    case "setFiles":
                        return H(H({}, e), {}, {
                            acceptedFiles: n.acceptedFiles,
                            fileRejections: n.fileRejections
                        });
                    case "reset":
                        return H({}, Q);
                    default:
                        return e
                }
            }
        }
    }
]);
//# sourceMappingURL=9607-5a7eb0c8.js.map