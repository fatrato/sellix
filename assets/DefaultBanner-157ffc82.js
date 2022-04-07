"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6599], {
        73902: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => u
            });
            var l = t(78709),
                s = t(33801),
                i = t(21035),
                n = t(28353),
                r = t(80876),
                c = t(78279),
                m = t.n(c),
                d = t(52070),
                N = (t(19328), t(40154));
            t(85174), t(95282);
            const u = (0, r.Z)((function(e) {
                var a = e.shop,
                    t = e.subscription,
                    r = e.isCustomDomain,
                    c = (0, s.TH)(),
                    u = (0, d.Z)(a.image_name, a.cloudflare_image_id, "CDN_SHOP", "avatar");
                return l.createElement("div", {
                    className: "sellix-banner-container"
                }, l.createElement("div", {
                    className: "sellix-banner " + (a.hide_products_sold ? "products-sold-hide" : "")
                }, l.createElement("div", {
                    className: "sellix-banner-info"
                }, l.createElement("div", {
                    className: "sellix-banner-avatar-container"
                }, 1 == +a.verified && l.createElement("span", {
                    className: "sellix-banner-verified",
                    "data-tooltip-location": "right",
                    "data-tooltip": "This shop has verified its brand identity to Sellix."
                }, l.createElement("img", {
                    src: N,
                    width: "20",
                    className: "mb-1",
                    alt: ""
                })), a.image_name ? l.createElement("img", {
                    src: u,
                    alt: a.name,
                    className: "sellix-banner-avatar"
                }) : l.createElement("i", {
                    className: "fas fa-user-circle sellix-banner-avatar-icon"
                })), l.createElement("div", {
                    className: "sellix-banner-description"
                }, l.createElement("div", null, l.createElement("div", null), t && t.name ? l.createElement("div", {
                    className: "sellix-banner-subscription " + (2 === t.id ? "business" : "pro")
                }, "pro" === t.name ? "Professional" : t.name) : l.createElement("div", {
                    className: "sellix-banner-subscription " + (2 === t.id ? "business" : "pro")
                }, m()().unix() - m()(a.first_sale_date ? 1e3 * a.first_sale_date : 1e3 * a.created_at).unix() > 604800 ? "Entrepreneur" : "Starter")), l.createElement("div", {
                    className: "sellix-banner-info-message"
                }, "Providing ", 2 === t.id ? "business" : "customer", " services since ", m()(a.first_sale_date ? 1e3 * a.first_sale_date : 1e3 * a.created_at).format("MMMM YYYY")))), l.createElement("div", {
                    className: "sellix-banner-feedback"
                }, l.createElement("div", null, a.hide_products_sold ? l.createElement(l.Fragment, null) : l.createElement(l.Fragment, null, l.createElement("div", null, "Products Sold"), l.createElement("div", {
                    className: "sellix-banner-feedback-count"
                }, a.products_sold_count))), l.createElement("div", null, l.createElement("div", null, "Product Quality"), l.createElement("div", {
                    className: "sellix-banner-feedback-star"
                }, l.createElement("span", null, Number(a.average_score) >= 4.95 ? 5 : Number(a.average_score).toFixed(1)), l.createElement(i.rU, {
                    to: "/feedback"
                }, l.createElement(n.kI, {
                    ratingValue: Number(a.average_score),
                    className: "sellix-feedback-rating-stars",
                    fillColor: "#FCAB06",
                    emptyColor: "grey",
                    size: 25
                }), l.createElement("i", null, a.feedback ? "(" + a.feedback.total + " reviews)" : "(No reviews)")))))), l.createElement("div", {
                    className: "sellix-banner-navs"
                }, l.createElement("div", null, l.createElement(i.rU, {
                    to: "/",
                    className: "/" === c.pathname || c.pathname.startsWith("/category") || c.pathname.startsWith("/group") || c.pathname.startsWith("/category") ? "active" : ""
                }, "Products"), l.createElement(i.rU, {
                    to: "/contact",
                    className: c.pathname.includes("/contact") || c.pathname.includes("/query") ? "active" : ""
                }, "Contact"), l.createElement(i.rU, {
                    to: "/feedback",
                    className: c.pathname.includes("/feedback") ? "active" : ""
                }, "Feedback"), l.createElement(i.rU, {
                    to: "/terms",
                    className: c.pathname.includes("/terms") ? "active" : ""
                }, "Terms"), r ? null : l.createElement(i.rU, {
                    to: "/trust",
                    className: c.pathname.includes("/trust") ? "active" : ""
                }, "Trusted ", l.createElement("span", null, "Advisor")))))
            }))
        },
        40154: e => {
            e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiBmaWxsPSIjYTJmYWYzIiByPSI0NS44NzciIGRhdGEtb3JpZ2luYWw9IiNBMkZBRjMiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izc5NUNFMyIgZGF0YS1vbGRfY29sb3I9IiNhMmZhZjMiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiBmaWxsPSIjNmNmN2VjIiByPSIzNy43OTQiIGRhdGEtb3JpZ2luYWw9IiM2Q0Y3RUMiIGNsYXNzPSIiIHN0eWxlPSJmaWxsOiM2MTNCRUEiIGRhdGEtb2xkX2NvbG9yPSIjNmNmN2VjIi8+PHBhdGggZD0ibTU5LjUyNCA4MS40NDdhNC40NzMgNC40NzMgMCAwIDEgLTMuMjEyLTEuMzU5bC0xNC41NDgtMTQuOTg4YTQuNDc2IDQuNDc2IDAgMSAxIDYuNDI0LTYuMjM0bDExLjIyMyAxMS41NjIgMjAuMy0yMi40YTQuNDc3IDQuNDc3IDAgMCAxIDYuNjM2IDYuMDFsLTIzLjUgMjUuOTQyYTQuNDgxIDQuNDgxIDAgMCAxIC0zLjI0NyAxLjQ2N3oiIGZpbGw9IiNmZmYiIGRhdGEtb3JpZ2luYWw9IiNGRkYiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjZmZmIiBzdHlsZT0iZmlsbDojRkZGRkZGIi8+PC9nPjwvZz4gPC9zdmc+Cg=="
        }
    }
]);
//# sourceMappingURL=DefaultBanner-157ffc82.js.map