"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8487], {
        42346: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => v
            });
            var l = r(78709),
                a = r(52070),
                n = r(81566),
                i = r(15218);
            r(43411);
            const c = function(e) {
                var t = e.group,
                    r = e.preventDefault,
                    c = e.onClick,
                    u = e.centerGroup,
                    s = t.cloudflare_image_id,
                    o = t.image_name,
                    p = t.title,
                    d = t.products_bound,
                    m = 0;
                d && d.length && (m = d.reduce((function(e, t) {
                    return parseFloat(t.price_display) < parseFloat(e.price_display) ? t : e
                })));
                var g = (0, a.Z)(o, s, "CDN_GROUPS", "shopItem"),
                    _ = !t.image_name;
                return l.createElement("div", {
                    onClick: function() {
                        return r ? null : d.length ? void c() : null
                    },
                    className: "sellix-group-card"
                }, l.createElement("div", {
                    className: "sellix-group-subscription-badge"
                }, "Group"), l.createElement("div", {
                    className: "sellix-group unselectable"
                }, l.createElement("div", {
                    className: "sellix-group-image " + (_ ? "placeholder" : "")
                }, _ ? l.createElement("i", {
                    className: "fa-light fa-layer-group"
                }) : l.createElement(n.LazyLoadImage, {
                    alt: p,
                    src: g
                })), l.createElement("div", {
                    className: "sellix-group-info"
                }, l.createElement("div", {
                    className: "sellix-group-title " + (u && "justify-content-center text-center")
                }, p), l.createElement("div", {
                    className: "sellix-group-description"
                }, l.createElement("span", null, m ? l.createElement("div", {
                    className: "sellix-group-description-info"
                }, l.createElement("span", null, "Starting at: "), l.createElement("span", {
                    className: "sellix-group-price"
                }, i.Z.CURRENCY_LIST[m.currency], m.price_display)) : l.createElement("span", null, "Out of Products"))))))
            };
            var u = r(18184),
                s = r.n(u),
                o = r(1202),
                p = r.n(o),
                d = r(33801),
                m = r(41647),
                g = r(63202),
                _ = r(47886),
                f = r(75787);
            const E = function(e) {
                    var t, r = e.theme,
                        n = e.group,
                        c = e.preventDefault,
                        u = e.onClick,
                        o = e.centerGroup,
                        E = n.products_bound,
                        v = (0, d.TH)(),
                        N = (0, m.I0)(),
                        h = (0, d.k6)(),
                        y = (0, m.v9)((function(e) {
                            return e.common.generalInfo
                        })),
                        C = i.Z.CURRENCY_LIST[y.currency];
                    t = "DEFAULT" === r.group_card ? p().sanitize(f.Z.group) : p().sanitize(r.group_card);
                    var D = s().renderString(t, {
                        image: n.image_name ? (0, a.Z)(n.image_name, n.cloudflare_image_id, "CDN_GROUPS", "shopItem") : r.logo ? i.Z.CDN_CUSTOMIZATION_URL + r.logo : "",
                        title: n.title,
                        currency: C,
                        id: n.uniqid,
                        page: v.pathname || "",
                        isPlaceholder: !n.image_name,
                        isOutOfProduct: !n.products_bound.length,
                        products: n.products_bound,
                        minPrice: E.length ? E.reduce((function(e, t) {
                            return parseFloat(t.price_display) < parseFloat(e.price_display) ? t : e
                        })).price_display : null,
                        maxPrice: E.length ? E.reduce((function(e, t) {
                            return parseFloat(t.price_display) > parseFloat(e.price_display) ? t : e
                        })).price_display : null,
                        centeredGroupTitle: o
                    });
                    return l.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: D
                        },
                        onClick: function(e) {
                            return c ? null : E.length ? void("A" === e.target.tagName ? (e.preventDefault(), N((0, g.CZ)()), (0, _.scrollTo)(0, (function() {
                                return h.push(e.target.getAttribute("href"))
                            }))) : u()) : null
                        },
                        className: "sellix-group-card"
                    })
                },
                v = (0, r(80876).Z)((function(e) {
                    return e.showCustom && !e.preventDefault ? l.createElement(E, e) : l.createElement(c, e)
                }))
        }
    }
]);
//# sourceMappingURL=ShopGroupCard-0ecd09cd.js.map