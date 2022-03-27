"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4657], {
        81416: (e, t, n) => {
            n.d(t, {
                rP: () => i,
                pm: () => r,
                DN: () => o
            });
            var a = n(18441),
                i = function(e) {
                    return function() {
                        return a.hi.post("/queries/create", (0, a.tK)(e)).then((function(e) {
                            if (200 === e.status) return e;
                            throw e
                        })).catch((function(e) {
                            throw e
                        }))
                    }
                },
                r = function(e) {
                    return function() {
                        return a.hi.get("/queries/unique/" + e).then((function(e) {
                            if (200 === e.status) return e;
                            throw e
                        })).catch((function(e) {
                            throw e
                        }))
                    }
                },
                o = function(e) {
                    return function() {
                        return a.hi.post("/queries/reply", (0, a.tK)(e)).then((function(e) {
                            if (200 === e.status) return e;
                            throw e
                        })).catch((function(e) {
                            throw e
                        }))
                    }
                }
        },
        23059: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Z
            });
            var a = n(78709),
                i = n(41647),
                r = n(25936),
                o = n(68545),
                l = n(87579),
                c = n(81416),
                s = n(33801),
                u = n(47907),
                m = n(11999),
                d = n(32200),
                A = n(76664),
                h = n(15218);

            function p(e) {
                var t = e.name,
                    n = e.products,
                    i = void 0 === n ? [] : n;
                return a.createElement(A.q, null, a.createElement("title", null, "Contact " + t + " on Sellix"), a.createElement("meta", {
                    name: "description",
                    content: i.length ? "View " + t + "'s shop on Sellix: check out " + i.length + " unique products and get the digital goods you need instantly with our many payment gateways in just a few clicks." : "View " + t + "'s shop on Sellix: get the digital goods you need instantly with our many payment gateways in just a few clicks."
                }), a.createElement("meta", {
                    name: "og:description",
                    content: i.length ? "View " + t + "'s shop on Sellix: check out " + i.length + " unique products and get the digital goods you need instantly with our many payment gateways in just a few clicks." : "View " + t + "'s shop on Sellix: get the digital goods you need instantly with our many payment gateways in just a few clicks."
                }), a.createElement("meta", {
                    name: "og:title",
                    content: "Contact " + t + " on Sellix"
                }), a.createElement("meta", {
                    name: "twitter:title",
                    content: "Contact " + t + " on Sellix"
                }), a.createElement("meta", {
                    name: "twitter:description",
                    content: i.length ? "View " + t + "'s shop on Sellix: check out " + i.length + " unique products and get the digital goods you need instantly with our many payment gateways in just a few clicks." : "View " + t + "'s shop on Sellix: get the digital goods you need instantly with our many payment gateways in just a few clicks."
                }), " :", a.createElement("meta", {
                    name: "twitter:site",
                    content: "https://" + t + ".sellix.io/"
                }), a.createElement("meta", {
                    property: "og:image",
                    content: h.Z.CDN_PREVIEWS_URL + "/shop.png"
                }), a.createElement("meta", {
                    property: "twitter:image",
                    content: h.Z.CDN_PREVIEWS_URL + "/shop.png"
                }), a.createElement("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), a.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }))
            }
            var g = n(93379),
                y = n.n(g),
                C = n(7795),
                w = n.n(C),
                f = n(90569),
                x = n.n(f),
                E = n(3565),
                v = n.n(E),
                b = n(19216),
                _ = n.n(b),
                k = n(44589),
                S = n.n(k),
                q = n(82938),
                B = {};

            function j() {
                return j = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, j.apply(this, arguments)
            }
            B.styleTagTransform = S(), B.setAttributes = v(), B.insert = x().bind(null, "head"), B.domAPI = w(), B.insertStyleElement = _(), y()(q.Z, B), q.Z && q.Z.locals && q.Z.locals;
            const Z = function() {
                var e = (0, u.xX)().executeRecaptcha,
                    t = (0, i.I0)(),
                    n = (0, s.k6)(),
                    A = (0, i.v9)((function(e) {
                        return e.common.generalInfo || {}
                    })),
                    h = (0, i.v9)((function(e) {
                        return e.common.isCustomDomain
                    }));
                (0, a.useEffect)((function() {
                    document.title = "Contact " + A.name + " on Sellix", window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }), []);
                var g = m.Ry().shape({
                        email: m.Z_().required("Email is required"),
                        title: m.Z_().required("Title is required"),
                        message: m.Z_().required("Message is required"),
                        invoice_id: m.Z_()
                    }),
                    y = (0, o.TA)({
                        enableReinitialize: !0,
                        validationSchema: g,
                        initialValues: {
                            title: "",
                            email: "",
                            message: "",
                            invoice_id: ""
                        },
                        onSubmit: function(a) {
                            e("createQuery").then((function(e) {
                                h || (a.captcha = e), t((0, c.rP)(Object.assign({}, a, {
                                    name: A.name
                                }))).then((function(e) {
                                    t((0, l.x)("success", e.message)), n.push("/query/" + e.data.uniqid)
                                })).catch((function(e) {
                                    t((0, l.x)("error", e ? e.error : ""))
                                }))
                            }))
                        }
                    });
                return a.createElement(a.Fragment, null, a.createElement(p, {
                    name: A.name
                }), a.createElement("div", {
                    className: "sellix-contact-screen reply-screen"
                }, a.createElement("form", {
                    className: "sellix-contact",
                    onSubmit: y.handleSubmit
                }, a.createElement(d.xv, j({
                    name: "title",
                    label: "Title",
                    placeholder: "e.g : Terms and Conditions for dropshipper"
                }, y)), a.createElement(d.xv, j({
                    name: "email",
                    label: "Email",
                    placeholder: "Enter your email"
                }, y)), a.createElement(d.xv, j({
                    name: "invoice_id",
                    label: "Invoice Id",
                    placeholder: "Enter 12 digit invoice id"
                }, y)), a.createElement(d.Kx, j({
                    name: "message",
                    label: "Message",
                    placeholder: "What would you like to ask?"
                }, y)), a.createElement(r.zx, {
                    type: "submit"
                }, "Create Query"))))
            }
        },
        82938: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var a = n(64162),
                i = n.n(a),
                r = n(68922),
                o = n.n(r)()(i());
            o.push([e.id, ".sellix-contact{color:var(--darkFontColor);padding:1rem;background:var(--darkColor);border-radius:.5rem;border:1px solid var(--borderColor);width:65%}@media(max-width: 768px){.sellix-contact{width:100%}}.sellix-contact-screen{width:100%;max-width:1140px;padding:0 1rem;margin:0 auto 2rem;display:flex;align-items:center;justify-content:center}@media(max-width: 768px){.sellix-contact-screen{margin-top:0}}.sellix-contact .sellix-input::placeholder{color:var(--darkFontColor);opacity:.7}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/contact/style.scss"],
                names: [],
                mappings: "AAAA,gBACE,0BAAA,CACA,YAAA,CACA,2BAAA,CACA,mBAAA,CACA,mCAAA,CACA,SAAA,CAEA,yBARF,gBASI,UAAA,CAAA,CAGF,uBACE,UAAA,CACA,gBAAA,CACA,cAAA,CACA,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,yBATF,uBAUI,YAAA,CAAA,CAKJ,2CACE,0BAAA,CACA,UAAA",
                sourcesContent: [".sellix-contact {\n  color: var(--darkFontColor);\n  padding: 1rem;\n  background: var(--darkColor);\n  border-radius: .5rem;\n  border: 1px solid var(--borderColor);\n  width: 65%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n\n  &-screen {\n    width: 100%;\n    max-width: 1140px;\n    padding: 0 1rem;\n    margin: 0 auto 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 768px) {\n      margin-top: 0;\n    }\n  }\n\n\n  .sellix-input::placeholder {\n    color: var(--darkFontColor);\n    opacity: .7;\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const l = o
        }
    }
]);
//# sourceMappingURL=ShopContact-12a68e04.js.map