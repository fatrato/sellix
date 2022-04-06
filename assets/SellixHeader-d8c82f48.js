"use strict"; (self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1392], { 84221: (e, n, t) => { t.d(n, { P_: () => i, wD: () => o, n5: () => s, TR: () => u, AP: () => c, g_: () => l }); var r = t(21775), i = (t(48833), (0, r.ZP)({ resolved: {}, chunkName: function () { return "Notification" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return Promise.all([t.e(581), t.e(7875), t.e(1741)]).then(t.bind(t, 92585)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 92585 } })), o = (0, r.ZP)({ resolved: {}, chunkName: function () { return "Searchbar" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return t.e(372).then(t.bind(t, 796)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 796 } }), s = (0, r.ZP)({ resolved: {}, chunkName: function () { return "User" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return t.e(2323).then(t.bind(t, 88058)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 88058 } }), u = (0, r.ZP)({ resolved: {}, chunkName: function () { return "Logo" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return t.e(1039).then(t.bind(t, 75364)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 75364 } }), c = (0, r.ZP)({ resolved: {}, chunkName: function () { return "Cart" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return Promise.resolve().then(t.bind(t, 74410)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 74410 } }), l = (0, r.ZP)({ resolved: {}, chunkName: function () { return "Social" }, isReady: function (e) { var n = this.resolve(e); return !0 === this.resolved[n] && !!t.m[n] }, importAsync: function () { return t.e(6458).then(t.bind(t, 86287)) }, requireAsync: function (e) { var n = this, t = this.resolve(e); return this.resolved[t] = !1, this.importAsync(e).then((function (e) { return n.resolved[t] = !0, e })) }, requireSync: function (e) { var n = this.resolve(e); return t(n) }, resolve: function () { return 86287 } }) }, 66226: (e, n, t) => { t.r(n), t.d(n, { default: () => a }); var r = t(78709), i = t(41647), o = t(71115), s = t(72821), u = t(84221), c = t(95579), l = t(33801); t(48833); const a = function (e) { var n = e.changeTheme, t = e.isShop, a = e.isDoc, h = e.isDashboard, v = (0, r.useState)(!1), m = v[0], d = v[1], f = (0, i.I0)(), p = (0, l.k6)(), y = (0, l.TH)().pathname, A = (0, i.v9)((function (e) { return e.nav.open })), E = (0, i.v9)((function (e) { return e.auth.isAuth })), b = (0, i.v9)((function (e) { return "dark" === e.theme.globalTheme })), g = y.includes("/settings/"), N = "/" === y, S = (0, i.v9)((function (e) { var n = e.common.subscription; return n && n.id })), _ = (0, i.v9)((function (e) { return e.common.generalInfo.cart_enabled })), k = S && _; return (0, r.useEffect)((function () { var e = window.location.origin.includes("admin"); d(window.location.origin.includes("admin")), E || t || f((0, o.YD)()).then((function (n) { var t = n.status, r = n.data; 200 === t && (f((0, o.u6)(r.user.username)), e && +r.user.rank < 1 && p.push("/home")) })) }), []), r.createElement(r.Fragment, null, r.createElement(c.Z, null), r.createElement("div", { className: "header " + (t ? "is-shop" : a ? "is-doc" : "") }, r.createElement("div", { style: t ? { maxWidth: 1140, margin: "0 auto", position: "relative" } : {} }, r.createElement("div", { className: "header-logo " + (t || a || A ? "" : "open") }, r.createElement("button", { type: "button", className: "sidebar-toggler", onClick: function () { return f((0, s.Q4)(!0)) } }, r.createElement("span", null)), r.createElement(u.TR, { isDoc: a || t, isShop: t })), r.createElement(u.TR, { mobile: !0, isShop: t }), r.createElement("div", { className: "header-nav" }, r.createElement(u.wD, { isShop: t || a }), r.createElement("div", { className: "header-menu" }, t || a ? null : r.createElement("div", { className: "color-switch", "data-tooltip": "Switch to " + (b ? "light" : "dark") + " theme", "data-tooltip-location": "left" }, r.createElement("label", { className: "switch" }, r.createElement("input", { checked: b, type: "checkbox", onChange: n }), r.createElement("span", { className: "slider round" }))), a || t || m ? null : r.createElement(u.g_, null), a || t || m ? null : r.createElement("div", { className: "onboarding-icon", onClick: function () { g || N ? p.replace({ hash: "#onboarding" }) : p.push({ pathname: "/", hash: "#onboarding" }) }, "data-tooltip": "Quick Tour", "data-tooltip-location": "left" }, r.createElement("i", { className: "fa-light fa-square-info", style: { color: b ? "#989BA0" : "#3F4A60", fontSize: "1.25rem" } })), t || a ? null : r.createElement(u.P_, null), h ? null : k ? r.createElement(u.AP, null) : null, E ? r.createElement(u.n5, { isShop: t }) : null))))) } } }]);
//# sourceMappingURL=SellixHeader-d8c82f48.js.map