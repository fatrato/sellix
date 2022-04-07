/*! For license information please see 7136-02f208d6.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[7136], { 39252: (e, t, n) => { var o; !function () { "use strict"; var r = !("undefined" == typeof window || !window.document || !window.document.createElement), l = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen }; void 0 === (o = function () { return l }.call(t, n, t, e)) || (e.exports = o) }() }, 49315: (e, t, n) => { "use strict"; function o() { var e = this.constructor.getDerivedStateFromProps(this.props, this.state); null != e && this.setState(e) } function r(e) { this.setState(function (t) { var n = this.constructor.getDerivedStateFromProps(e, t); return null != n ? n : null }.bind(this)) } function l(e, t) { try { var n = this.props, o = this.state; this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o) } finally { this.props = n, this.state = o } } function a(e) { var t = e.prototype; if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components"); if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e; var n = null, a = null, s = null; if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? s = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== a || null !== s) { var i = e.displayName || e.name, u = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()"; throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + i + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== a ? "\n  " + a : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks") } if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = o, t.componentWillReceiveProps = r), "function" == typeof t.getSnapshotBeforeUpdate) { if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"); t.componentWillUpdate = l; var c = t.componentDidUpdate; t.componentDidUpdate = function (e, t, n) { var o = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n; c.call(this, e, t, o) } } return e } n.r(t), n.d(t, { polyfill: () => a }), o.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, l.__suppressDeprecationWarning = !0 }, 31697: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.bodyOpenClassName = t.portalClassName = void 0; var o = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }, r = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), l = n(78709), a = h(l), s = h(n(91169)), i = h(n(16526)), u = h(n(49633)), c = function (e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }(n(33396)), f = n(75537), d = h(f), p = n(49315); function h(e) { return e && e.__esModule ? e : { default: e } } function m(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function v(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } var y = t.portalClassName = "ReactModalPortal", b = t.bodyOpenClassName = "ReactModal__Body--open", O = f.canUseDOM && void 0 !== s.default.createPortal, C = function (e) { return document.createElement(e) }, g = function () { return O ? s.default.createPortal : s.default.unstable_renderSubtreeIntoContainer }; function w(e) { return e() } var _ = function (e) { function t() { var e, n, r; m(this, t); for (var l = arguments.length, i = Array(l), c = 0; c < l; c++)i[c] = arguments[c]; return n = r = v(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.removePortal = function () { !O && s.default.unmountComponentAtNode(r.node); var e = w(r.props.parentSelector); e && e.contains(r.node) ? e.removeChild(r.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.') }, r.portalRef = function (e) { r.portal = e }, r.renderPortal = function (e) { var n = g()(r, a.default.createElement(u.default, o({ defaultStyles: t.defaultStyles }, e)), r.node); r.portalRef(n) }, v(r, n) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "componentDidMount", value: function () { f.canUseDOM && (O || (this.node = C("div")), this.node.className = this.props.portalClassName, w(this.props.parentSelector).appendChild(this.node), !O && this.renderPortal(this.props)) } }, { key: "getSnapshotBeforeUpdate", value: function (e) { return { prevParent: w(e.parentSelector), nextParent: w(this.props.parentSelector) } } }, { key: "componentDidUpdate", value: function (e, t, n) { if (f.canUseDOM) { var o = this.props, r = o.isOpen, l = o.portalClassName; e.portalClassName !== l && (this.node.className = l); var a = n.prevParent, s = n.nextParent; s !== a && (a.removeChild(this.node), s.appendChild(this.node)), (e.isOpen || r) && !O && this.renderPortal(this.props) } } }, { key: "componentWillUnmount", value: function () { if (f.canUseDOM && this.node && this.portal) { var e = this.portal.state, t = Date.now(), n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS); n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal() } } }, { key: "render", value: function () { return f.canUseDOM && O ? (!this.node && O && (this.node = C("div")), g()(a.default.createElement(u.default, o({ ref: this.portalRef, defaultStyles: t.defaultStyles }, this.props)), this.node)) : null } }], [{ key: "setAppElement", value: function (e) { c.setElement(e) } }]), t }(l.Component); _.propTypes = { isOpen: i.default.bool.isRequired, style: i.default.shape({ content: i.default.object, overlay: i.default.object }), portalClassName: i.default.string, bodyOpenClassName: i.default.string, htmlOpenClassName: i.default.string, className: i.default.oneOfType([i.default.string, i.default.shape({ base: i.default.string.isRequired, afterOpen: i.default.string.isRequired, beforeClose: i.default.string.isRequired })]), overlayClassName: i.default.oneOfType([i.default.string, i.default.shape({ base: i.default.string.isRequired, afterOpen: i.default.string.isRequired, beforeClose: i.default.string.isRequired })]), appElement: i.default.oneOfType([i.default.instanceOf(d.default), i.default.instanceOf(f.SafeHTMLCollection), i.default.instanceOf(f.SafeNodeList), i.default.arrayOf(i.default.instanceOf(d.default))]), onAfterOpen: i.default.func, onRequestClose: i.default.func, closeTimeoutMS: i.default.number, ariaHideApp: i.default.bool, shouldFocusAfterRender: i.default.bool, shouldCloseOnOverlayClick: i.default.bool, shouldReturnFocusAfterClose: i.default.bool, preventScroll: i.default.bool, parentSelector: i.default.func, aria: i.default.object, data: i.default.object, role: i.default.string, contentLabel: i.default.string, shouldCloseOnEsc: i.default.bool, overlayRef: i.default.func, contentRef: i.default.func, id: i.default.string, overlayElement: i.default.func, contentElement: i.default.func }, _.defaultProps = { isOpen: !1, portalClassName: y, bodyOpenClassName: b, role: "dialog", ariaHideApp: !0, closeTimeoutMS: 0, shouldFocusAfterRender: !0, shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, shouldReturnFocusAfterClose: !0, preventScroll: !1, parentSelector: function () { return document.body }, overlayElement: function (e, t) { return a.default.createElement("div", e, t) }, contentElement: function (e, t) { return a.default.createElement("div", e, t) } }, _.defaultStyles = { overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.75)" }, content: { position: "absolute", top: "40px", left: "40px", right: "40px", bottom: "40px", border: "1px solid #ccc", background: "#fff", overflow: "auto", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px" } }, (0, p.polyfill)(_), t.default = _ }, 49633: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, l = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), a = n(78709), s = v(n(16526)), i = m(n(15285)), u = v(n(45844)), c = m(n(33396)), f = m(n(37717)), d = n(75537), p = v(d), h = v(n(70038)); function m(e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t } function v(e) { return e && e.__esModule ? e : { default: e } } n(61325); var y = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" }, b = 0, O = function (e) { function t(e) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.setOverlayRef = function (e) { n.overlay = e, n.props.overlayRef && n.props.overlayRef(e) }, n.setContentRef = function (e) { n.content = e, n.props.contentRef && n.props.contentRef(e) }, n.afterClose = function () { var e = n.props, t = e.appElement, o = e.ariaHideApp, r = e.htmlOpenClassName, l = e.bodyOpenClassName; l && f.remove(document.body, l), r && f.remove(document.getElementsByTagName("html")[0], r), o && b > 0 && 0 == (b -= 1) && c.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (i.returnFocus(n.props.preventScroll), i.teardownScopedFocus()) : i.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), h.default.deregister(n) }, n.open = function () { n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({ beforeClose: !1 })) : (n.props.shouldFocusAfterRender && (i.setupScopedFocus(n.node), i.markForFocusLater()), n.setState({ isOpen: !0 }, (function () { n.openAnimationFrame = requestAnimationFrame((function () { n.setState({ afterOpen: !0 }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({ overlayEl: n.overlay, contentEl: n.content }) })) }))) }, n.close = function () { n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout() }, n.focusContent = function () { return n.content && !n.contentHasFocus() && n.content.focus({ preventScroll: !0 }) }, n.closeWithTimeout = function () { var e = Date.now() + n.props.closeTimeoutMS; n.setState({ beforeClose: !0, closesAt: e }, (function () { n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now()) })) }, n.closeWithoutTimeout = function () { n.setState({ beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null }, n.afterClose) }, n.handleKeyDown = function (e) { 9 === e.keyCode && (0, u.default)(n.content, e), n.props.shouldCloseOnEsc && 27 === e.keyCode && (e.stopPropagation(), n.requestClose(e)) }, n.handleOverlayOnClick = function (e) { null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null }, n.handleContentOnMouseUp = function () { n.shouldClose = !1 }, n.handleOverlayOnMouseDown = function (e) { n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault() }, n.handleContentOnClick = function () { n.shouldClose = !1 }, n.handleContentOnMouseDown = function () { n.shouldClose = !1 }, n.requestClose = function (e) { return n.ownerHandlesClose() && n.props.onRequestClose(e) }, n.ownerHandlesClose = function () { return n.props.onRequestClose }, n.shouldBeClosed = function () { return !n.state.isOpen && !n.state.beforeClose }, n.contentHasFocus = function () { return document.activeElement === n.content || n.content.contains(document.activeElement) }, n.buildClassName = function (e, t) { var o = "object" === (void 0 === t ? "undefined" : r(t)) ? t : { base: y[e], afterOpen: y[e] + "--after-open", beforeClose: y[e] + "--before-close" }, l = o.base; return n.state.afterOpen && (l = l + " " + o.afterOpen), n.state.beforeClose && (l = l + " " + o.beforeClose), "string" == typeof t && t ? l + " " + t : l }, n.attributesFromObject = function (e, t) { return Object.keys(t).reduce((function (n, o) { return n[e + "-" + o] = t[o], n }), {}) }, n.state = { afterOpen: !1, beforeClose: !1 }, n.shouldClose = null, n.moveFromContentToOverlay = null, n } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), l(t, [{ key: "componentDidMount", value: function () { this.props.isOpen && this.open() } }, { key: "componentDidUpdate", value: function (e, t) { this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent() } }, { key: "componentWillUnmount", value: function () { this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame) } }, { key: "beforeOpen", value: function () { var e = this.props, t = e.appElement, n = e.ariaHideApp, o = e.htmlOpenClassName, r = e.bodyOpenClassName; r && f.add(document.body, r), o && f.add(document.getElementsByTagName("html")[0], o), n && (b += 1, c.hide(t)), h.default.register(this) } }, { key: "render", value: function () { var e = this.props, t = e.id, n = e.className, r = e.overlayClassName, l = e.defaultStyles, a = e.children, s = n ? {} : l.content, i = r ? {} : l.overlay; if (this.shouldBeClosed()) return null; var u = { ref: this.setOverlayRef, className: this.buildClassName("overlay", r), style: o({}, i, this.props.style.overlay), onClick: this.handleOverlayOnClick, onMouseDown: this.handleOverlayOnMouseDown }, c = o({ id: t, ref: this.setContentRef, style: o({}, s, this.props.style.content), className: this.buildClassName("content", n), tabIndex: "-1", onKeyDown: this.handleKeyDown, onMouseDown: this.handleContentOnMouseDown, onMouseUp: this.handleContentOnMouseUp, onClick: this.handleContentOnClick, role: this.props.role, "aria-label": this.props.contentLabel }, this.attributesFromObject("aria", o({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), { "data-testid": this.props.testId }), f = this.props.contentElement(c, a); return this.props.overlayElement(u, f) } }]), t }(a.Component); O.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }, O.propTypes = { isOpen: s.default.bool.isRequired, defaultStyles: s.default.shape({ content: s.default.object, overlay: s.default.object }), style: s.default.shape({ content: s.default.object, overlay: s.default.object }), className: s.default.oneOfType([s.default.string, s.default.object]), overlayClassName: s.default.oneOfType([s.default.string, s.default.object]), bodyOpenClassName: s.default.string, htmlOpenClassName: s.default.string, ariaHideApp: s.default.bool, appElement: s.default.oneOfType([s.default.instanceOf(p.default), s.default.instanceOf(d.SafeHTMLCollection), s.default.instanceOf(d.SafeNodeList), s.default.arrayOf(s.default.instanceOf(p.default))]), onAfterOpen: s.default.func, onAfterClose: s.default.func, onRequestClose: s.default.func, closeTimeoutMS: s.default.number, shouldFocusAfterRender: s.default.bool, shouldCloseOnOverlayClick: s.default.bool, shouldReturnFocusAfterClose: s.default.bool, preventScroll: s.default.bool, role: s.default.string, contentLabel: s.default.string, aria: s.default.object, data: s.default.object, children: s.default.node, shouldCloseOnEsc: s.default.bool, overlayRef: s.default.func, contentRef: s.default.func, id: s.default.string, overlayElement: s.default.func, contentElement: s.default.func, testId: s.default.string }, t.default = O, e.exports = t.default }, 33396: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.resetState = function () { a && (a.removeAttribute ? a.removeAttribute("aria-hidden") : null != a.length ? a.forEach((function (e) { return e.removeAttribute("aria-hidden") })) : document.querySelectorAll(a).forEach((function (e) { return e.removeAttribute("aria-hidden") }))), a = null }, t.log = function () { }, t.assertNodeList = s, t.setElement = function (e) { var t = e; if ("string" == typeof t && l.canUseDOM) { var n = document.querySelectorAll(t); s(n, t), t = n } return a = t || a }, t.validateElement = i, t.hide = function (e) { var t = !0, n = !1, o = void 0; try { for (var r, l = i(e)[Symbol.iterator](); !(t = (r = l.next()).done); t = !0)r.value.setAttribute("aria-hidden", "true") } catch (e) { n = !0, o = e } finally { try { !t && l.return && l.return() } finally { if (n) throw o } } }, t.show = function (e) { var t = !0, n = !1, o = void 0; try { for (var r, l = i(e)[Symbol.iterator](); !(t = (r = l.next()).done); t = !0)r.value.removeAttribute("aria-hidden") } catch (e) { n = !0, o = e } finally { try { !t && l.return && l.return() } finally { if (n) throw o } } }, t.documentNotReadyOrSSRTesting = function () { a = null }; var o, r = (o = n(12459)) && o.__esModule ? o : { default: o }, l = n(75537), a = null; function s(e, t) { if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".") } function i(e) { var t = e || a; return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, r.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []) } }, 61325: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.resetState = function () { for (var e = [l, a], t = 0; t < e.length; t++) { var n = e[t]; n && n.parentNode && n.parentNode.removeChild(n) } l = a = null, s = [] }, t.log = function () { console.log("bodyTrap ----------"), console.log(s.length); for (var e = [l, a], t = 0; t < e.length; t++) { var n = e[t] || {}; console.log(n.nodeName, n.className, n.id) } console.log("edn bodyTrap ----------") }; var o, r = (o = n(70038)) && o.__esModule ? o : { default: o }, l = void 0, a = void 0, s = []; function i() { 0 !== s.length && s[s.length - 1].focusContent() } r.default.subscribe((function (e, t) { l || a || ((l = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), l.style.position = "absolute", l.style.opacity = "0", l.setAttribute("tabindex", "0"), l.addEventListener("focus", i), (a = l.cloneNode()).addEventListener("focus", i)), (s = t).length > 0 ? (document.body.firstChild !== l && document.body.insertBefore(l, document.body.firstChild), document.body.lastChild !== a && document.body.appendChild(a)) : (l.parentElement && l.parentElement.removeChild(l), a.parentElement && a.parentElement.removeChild(a)) })) }, 37717: (e, t) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.resetState = function () { var e = document.getElementsByTagName("html")[0]; for (var t in n) r(e, n[t]); var l = document.body; for (var a in o) r(l, o[a]); n = {}, o = {} }, t.log = function () { }; var n = {}, o = {}; function r(e, t) { e.classList.remove(t) } t.add = function (e, t) { return r = e.classList, l = "html" == e.nodeName.toLowerCase() ? n : o, void t.split(" ").forEach((function (e) { !function (e, t) { e[t] || (e[t] = 0), e[t] += 1 }(l, e), r.add(e) })); var r, l }, t.remove = function (e, t) { return r = e.classList, l = "html" == e.nodeName.toLowerCase() ? n : o, void t.split(" ").forEach((function (e) { !function (e, t) { e[t] && (e[t] -= 1) }(l, e), 0 === l[e] && r.remove(e) })); var r, l } }, 15285: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.resetState = function () { l = [] }, t.log = function () { }, t.handleBlur = i, t.handleFocus = u, t.markForFocusLater = function () { l.push(document.activeElement) }, t.returnFocus = function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = null; try { return void (0 !== l.length && (t = l.pop()).focus({ preventScroll: e })) } catch (e) { console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" ")) } }, t.popWithoutFocus = function () { l.length > 0 && l.pop() }, t.setupScopedFocus = function (e) { a = e, window.addEventListener ? (window.addEventListener("blur", i, !1), document.addEventListener("focus", u, !0)) : (window.attachEvent("onBlur", i), document.attachEvent("onFocus", u)) }, t.teardownScopedFocus = function () { a = null, window.addEventListener ? (window.removeEventListener("blur", i), document.removeEventListener("focus", u)) : (window.detachEvent("onBlur", i), document.detachEvent("onFocus", u)) }; var o, r = (o = n(73311)) && o.__esModule ? o : { default: o }, l = [], a = null, s = !1; function i() { s = !0 } function u() { if (s) { if (s = !1, !a) return; setTimeout((function () { a.contains(document.activeElement) || ((0, r.default)(a)[0] || a).focus() }), 0) } } }, 70038: (e, t) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.log = function () { console.log("portalOpenInstances ----------"), console.log(o.openInstances.length), o.openInstances.forEach((function (e) { return console.log(e) })), console.log("end portalOpenInstances ----------") }, t.resetState = function () { o = new n }; var n = function e() { var t = this; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.register = function (e) { -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register")) }, this.deregister = function (e) { var n = t.openInstances.indexOf(e); -1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister")) }, this.subscribe = function (e) { t.subscribers.push(e) }, this.emit = function (e) { t.subscribers.forEach((function (n) { return n(e, t.openInstances.slice()) })) }, this.openInstances = [], this.subscribers = [] }, o = new n; t.default = o }, 75537: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0; var o, r = ((o = n(39252)) && o.__esModule ? o : { default: o }).default, l = r.canUseDOM ? window.HTMLElement : {}; t.SafeHTMLCollection = r.canUseDOM ? window.HTMLCollection : {}, t.SafeNodeList = r.canUseDOM ? window.NodeList : {}, t.canUseDOM = r.canUseDOM, t.default = l }, 45844: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { var n = (0, r.default)(e); if (n.length) { var o = void 0, l = t.shiftKey, a = n[0], s = n[n.length - 1]; if (e === document.activeElement) { if (!l) return; o = s } if (s !== document.activeElement || l || (o = a), a === document.activeElement && l && (o = s), o) return t.preventDefault(), void o.focus(); var i = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent); if (null != i && "Chrome" != i[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) { var u = n.indexOf(document.activeElement); if (u > -1 && (u += l ? -1 : 1), void 0 === (o = n[u])) return t.preventDefault(), void (o = l ? s : a).focus(); t.preventDefault(), o.focus() } } else t.preventDefault() }; var o, r = (o = n(73311)) && o.__esModule ? o : { default: o }; e.exports = t.default }, 73311: (e, t) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return [].slice.call(e.querySelectorAll("*"), 0).filter(r) }; var n = /input|select|textarea|button|object/; function o(e) { var t = e.offsetWidth <= 0 && e.offsetHeight <= 0; if (t && !e.innerHTML) return !0; try { var n = window.getComputedStyle(e); return t ? "visible" !== n.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0 : "none" == n.getPropertyValue("display") } catch (e) { return console.warn("Failed to inspect element style"), !1 } } function r(e) { var t = e.getAttribute("tabindex"); null === t && (t = void 0); var r = isNaN(t); return (r || t >= 0) && function (e, t) { var r = e.nodeName.toLowerCase(); return (n.test(r) && !e.disabled || "a" === r && e.href || t) && function (e) { for (var t = e; t && t !== document.body;) { if (o(t)) return !1; t = t.parentNode } return !0 }(e) }(e, !r) } e.exports = t.default }, 57136: (e, t, n) => { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var o, r = (o = n(31697)) && o.__esModule ? o : { default: o }; t.default = r.default, e.exports = t.default }, 12459: e => { "use strict"; e.exports = function () { } } }]);
//# sourceMappingURL=7136-02f208d6.js.map