"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8043], {
        34291: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => b
            });
            var n = a(78709),
                r = a(41647),
                s = a(76664),
                i = a(15218);

            function l(e) {
                var t = e.name,
                    a = e.products,
                    r = void 0 === a ? [] : a,
                    l = r.length ? "View " + t + "'s shop on Sellix: check out " + r.length + " unique products and get the digital goods you need instantly with our many payment gateways in just a few clicks." : "View " + t + "'s shop on Sellix: get the digital goods you need instantly with our many payment gateways in just a few clicks.";
                return n.createElement(s.q, null, n.createElement("title", null, t + " Trusted Advisor"), n.createElement("meta", {
                    name: "description",
                    content: l
                }), n.createElement("meta", {
                    name: "og:description",
                    content: l
                }), n.createElement("meta", {
                    name: "og:title",
                    content: t + " Trusted Advisor"
                }), n.createElement("meta", {
                    name: "twitter:title",
                    content: t + " Trusted Advisor"
                }), n.createElement("meta", {
                    name: "twitter:description",
                    content: l
                }), " :", n.createElement("meta", {
                    name: "twitter:site",
                    content: "https://" + t + ".sellix.io/"
                }), n.createElement("meta", {
                    property: "og:image",
                    content: i.Z.CDN_PREVIEWS_URL + "/terms-of-service.png"
                }), n.createElement("meta", {
                    property: "twitter:image",
                    content: i.Z.CDN_PREVIEWS_URL + "/terms-of-service.png"
                }), n.createElement("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), n.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }))
            }
            var c = a(93379),
                o = a.n(c),
                d = a(7795),
                m = a.n(d),
                A = a(90569),
                h = a.n(A),
                u = a(3565),
                p = a.n(u),
                f = a(19216),
                g = a.n(f),
                x = a(44589),
                C = a.n(x),
                k = a(71127),
                E = {};
            E.styleTagTransform = C(), E.setAttributes = p(), E.insert = h().bind(null, "head"), E.domAPI = m(), E.insertStyleElement = g(), o()(k.Z, E), k.Z && k.Z.locals && k.Z.locals;
            const b = function() {
                var e = (0, r.v9)((function(e) {
                        return e.common.generalInfo || {}
                    })),
                    t = (0, r.v9)((function(e) {
                        return e.auth.isAuth
                    }));
                return (0, n.useEffect)((function() {
                    document.title = "Trust " + e.name + " on Sellix", window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }), []), n.createElement(n.Fragment, null, n.createElement(l, {
                    name: e.name
                }), n.createElement("div", {
                    className: "sellix-trust-screen"
                }, n.createElement("div", {
                    className: "sellix-trust"
                }, n.createElement("div", null, n.createElement("div", {
                    className: "sellix-trust-title"
                }, n.createElement("h1", null, "Trusted Advisor"))), n.createElement("div", null, n.createElement("div", {
                    className: "sellix-trust-block"
                }, n.createElement("h3", {
                    className: "sellix-trust-block-title"
                }, e.trusted_checks.identity_verified ? n.createElement("i", {
                    className: "fa-solid fa-circle-check text-green mr-2"
                }) : n.createElement("i", {
                    className: "fa-solid fa-circle-xmark text-red mr-2"
                }), e.trusted_checks.identity_verified ? "Identity Verified" : "Identity not Verified"), n.createElement("div", null, e.trusted_checks.identity_verified ? "This business has verified its identity and details to Sellix. Verified businesses have gone through an address and document validation phase which confirms their identity and the uniqueness of the merchant." : "This business has not verified its identity and details to Sellix. We cannot confirm this store is a valid and unique merchant.")), n.createElement("div", {
                    className: "sellix-trust-block"
                }, n.createElement("h3", {
                    className: "sellix-trust-block-title"
                }, "low" === e.trusted_checks.sales_last14days_metric ? n.createElement("i", {
                    className: "fa-solid fa-circle-xmark text-red mr-2"
                }) : n.createElement("i", {
                    className: "fa-solid fa-circle-check text-green mr-2"
                }), n.createElement("b", {
                    style: {
                        textTransform: "capitalize"
                    }
                }, e.trusted_checks.sales_last14days_metric), " sales in the last 14 days"), n.createElement("div", null, "This metric takes into consideration the quantity of sales this business had in the last 14 days. High and Medium sales mean that the business has been proactively selling goods with at least one order daily.")), n.createElement("div", {
                    className: "sellix-trust-block"
                }, n.createElement("h3", {
                    className: "sellix-trust-block-title"
                }, 100 * e.trusted_checks.feedback_appeal_ratio > 35 ? n.createElement("i", {
                    className: "fa-solid fa-circle-xmark text-red mr-2"
                }) : 100 * e.trusted_checks.feedback_appealed < 75 && 100 * e.trusted_checks.feedback_appealed > 35 ? n.createElement("i", {
                    className: "fa-solid fa-triangle-exclamation text-gold mr-2"
                }) : n.createElement("i", {
                    className: "fa-solid fa-circle-check text-green mr-2"
                }), e.trusted_checks.feedback_appeal_ratio, " feedback appeal ratio"), n.createElement("div", null, "The feedback appeal ratio takes into consideration the total amount of feedback a merchant has and how many have been appealed (either removed or contested). The appeal ratio has a value between 0.00 and 1, where 0.10 corresponds to 10% of all feedback appealed.")), n.createElement("div", {
                    className: "sellix-trust-block"
                }, n.createElement("h3", {
                    className: "sellix-trust-block-title"
                }, e.trusted_checks.feedback_score < 1 ? n.createElement("i", {
                    className: "fa-solid fa-circle-xmark text-red mr-2"
                }) : e.trusted_checks.feedback_score > 1 && e.trusted_checks.feedback_score < 4 ? n.createElement("i", {
                    className: "fa-solid fa-triangle-exclamation text-gold mr-2"
                }) : n.createElement("i", {
                    className: "fa-solid fa-circle-check text-green mr-2"
                }), Number(e.trusted_checks.feedback_score || 0).toFixed(2), " feedback score"), n.createElement("div", null, "The feedback score helps customers understand whether or not this business has had positive feedback recently, meaning that every customer purchased a valid good.")), n.createElement("div", {
                    className: "sellix-trust-block"
                }, n.createElement("h3", {
                    className: "sellix-trust-block-title"
                }, e.trusted_checks.no_chargeback_gateways ? n.createElement("i", {
                    className: "fa-solid fa-circle-xmark text-red mr-2"
                }) : n.createElement("i", {
                    className: "fa-solid fa-circle-check text-green mr-2"
                }), e.trusted_checks.no_chargeback_gateways ? "PayPal or Credit cards not accepted" : "PayPal or Credit cards accepted"), n.createElement("div", null, e.trusted_checks.no_chargeback_gateways ? "This merchant does not accept any payment method with consumer protection. For example, Cryptocurrencies and Cash App cannot accept refunds due to their nature. Proceed with caution and be sure that you know what you're buying." : "This merchant accepts payment methods, such as PayPal and Credit Cards, with consumer protection; meaning that a refund request can be executed when paying through them only if the purchased good is not valid. However, this does not mean that refund requests are available for payment methods like Cash App and Cryptocurrencies as they are not accepted due to their nature.")), n.createElement("span", {
                    style: {
                        fontSize: 13,
                        lineHeight: "24px"
                    }
                }, n.createElement("a", {
                    href: "https://help.sellix.io/en/articles/5889003-sellix-trusted-advisor",
                    target: "_blank"
                }, "What is Trusted Advisor and what does this mean for customers?"), " ", n.createElement("br", null), t && n.createElement("a", {
                    href: "https://help.sellix.io/en/articles/5889016-how-can-i-improve-my-trusted-advisor-details",
                    target: "_blank"
                }, "I am the merchant, how can I improve my page?"))))))
            }
        },
        71127: (e, t, a) => {
            a.d(t, {
                Z: () => l
            });
            var n = a(64162),
                r = a.n(n),
                s = a(68922),
                i = a.n(s)()(r());
            i.push([e.id, ".sellix-trust{color:var(--darkFontColor);padding:1rem;background:var(--darkColor);border-radius:.5rem;border:1px solid var(--borderColor);width:65%}@media(max-width: 768px){.sellix-trust{width:100%}}.sellix-trust-title{display:flex;justify-content:space-between}.sellix-trust-title h1{font-weight:400;font-size:1.2rem;color:var(--lightFontColor)}.sellix-trust-block{margin-bottom:1.5rem}.sellix-trust-block-title{font-size:1rem;color:var(--lightFontColor);font-weight:400}.sellix-trust-block-title b{font-weight:600}.sellix-trust-screen{width:100%;max-width:1140px;padding:0 1rem;margin:0 auto 2rem;display:flex;align-items:flex-start;justify-content:center;flex:1 0 auto}@media(max-width: 768px){.sellix-trust-screen{margin-top:0;padding:0 1rem}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/trust/style.scss"],
                names: [],
                mappings: "AAAA,cACE,0BAAA,CACA,YAAA,CACA,2BAAA,CACA,mBAAA,CACA,mCAAA,CACA,SAAA,CAEA,yBARF,cASI,UAAA,CAAA,CAGF,oBACE,YAAA,CACA,6BAAA,CAEA,uBACE,eAAA,CACA,gBAAA,CACA,2BAAA,CAIJ,oBACE,oBAAA,CAEA,0BACE,cAAA,CACA,2BAAA,CACA,eAAA,CAEA,4BACE,eAAA,CAKN,qBACE,UAAA,CACA,gBAAA,CACA,cAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,sBAAA,CACA,aAAA,CAEA,yBAVF,qBAWI,YAAA,CACA,cAAA,CAAA",
                sourcesContent: [".sellix-trust {\n  color: var(--darkFontColor);\n  padding: 1rem;\n  background: var(--darkColor);\n  border-radius: .5rem;\n  border: 1px solid var(--borderColor);\n  width: 65%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n\n  &-title {\n    display: flex;\n    justify-content: space-between;\n\n    h1 {\n      font-weight: 400;\n      font-size: 1.2rem;\n      color: var(--lightFontColor);\n    }\n  }\n\n  &-block {\n    margin-bottom: 1.5rem;\n\n    &-title {\n      font-size: 1rem;\n      color: var(--lightFontColor);\n      font-weight: 400;\n\n      b {\n        font-weight: 600;\n      }\n    }\n  }\n\n  &-screen {\n    width: 100%;\n    max-width: 1140px;\n    padding: 0 1rem;\n    margin: 0 auto 2rem;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex: 1 0 auto;\n\n    @media (max-width: 768px) {\n      margin-top: 0;\n      padding: 0 1rem;\n    }\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const l = i
        }
    }
]);
//# sourceMappingURL=ShopTrust-18f860f1.js.map