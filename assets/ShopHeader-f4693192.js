"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2255], {
        5632: (e, A, n) => {
            n.r(A), n.d(A, {
                default: () => w
            });
            var t = n(78709),
                a = n(33801),
                o = n(93379),
                s = n.n(o),
                i = n(7795),
                r = n.n(i),
                l = n(90569),
                C = n.n(l),
                m = n(3565),
                h = n.n(m),
                p = n(19216),
                d = n.n(p),
                g = n(44589),
                x = n.n(g),
                c = n(39073),
                u = {};
            u.styleTagTransform = x(), u.setAttributes = h(), u.insert = C().bind(null, "head"), u.domAPI = r(), u.insertStyleElement = d(), s()(c.Z, u), c.Z && c.Z.locals && c.Z.locals;
            const w = (0, a.EN)((function(e) {
                var A = e.popup_message,
                    n = e.name,
                    o = e.location,
                    s = (0, t.useState)(!0),
                    i = s[0],
                    r = s[1],
                    l = (0, t.useState)(!1),
                    C = l[0],
                    m = l[1];
                (0, t.useEffect)((function() {
                    setTimeout((function() {
                        r(!1)
                    }), 3e3), A && "null" !== A && m(window.localStorage.getItem(btoa(unescape(encodeURIComponent(A)))))
                }), []);
                var h = [{
                    path: "/",
                    exact: !0
                }, {
                    path: "/group"
                }, {
                    path: "/contact"
                }, {
                    path: "/terms"
                }, {
                    path: "/trust"
                }, {
                    path: "/feedback"
                }, {
                    path: "/category"
                }].find((function(e) {
                    return (0, a.LX)(o.pathname, e)
                }));
                return A && "null" !== A && h ? !n || C || i ? null : t.createElement("div", {
                    className: "sellix-shop-message-wrapper"
                }, t.createElement("div", {
                    className: "sellix-shop-message"
                }, t.createElement("div", {
                    className: "sellix-shop-message-hide",
                    onClick: function() {
                        window.localStorage.setItem(btoa(unescape(encodeURIComponent(A))), "true"), r(!0)
                    }
                }, t.createElement("i", {
                    className: "fas fa-times"
                })), t.createElement("div", {
                    className: "sellix-shop-message-header"
                }, "Message from ", n), t.createElement("div", {
                    className: "sellix-shop-message-text"
                }, A))) : null
            }))
        },
        39073: (e, A, n) => {
            n.d(A, {
                Z: () => i
            });
            var t = n(64162),
                a = n.n(t),
                o = n(68922),
                s = n.n(o)()(a());
            s.push([e.id, ".sellix-shop-message{position:absolute;max-width:350px;padding:1rem;border-radius:3px;background:var(--darkColor);color:var(--lightFontColor);word-break:break-all;max-height:290px;overflow:hidden;width:100%;z-index:2;animation:.5s ease-in normal popupMessage;transition:all .5s ease-in;right:1rem;top:1rem;border:1px solid var(--borderColor)}.sellix-shop-message-wrapper{position:relative;max-width:1140px;margin:0 auto;right:0;z-index:11;width:100%;height:0}.sellix-shop-message:hover .shop-status-message{overflow:auto}@media(max-width: 768px){.sellix-shop-message{top:1.5rem;right:1.5rem;max-width:calc(100% - 3rem);height:auto;width:100%;z-index:99}}.sellix-shop-message-hide{position:absolute;right:1rem;top:1rem;cursor:pointer}@media(max-width: 768px){.sellix-shop-message-hide{font-size:1.5rem}}.sellix-shop-message-header{text-align:left;margin-bottom:1rem;font-weight:500;line-height:1;font-size:1rem;margin-top:0}.sellix-shop-message-text{line-height:1.1rem;font-size:13px;font-weight:400;overflow:hidden;max-height:190px;background:transparent;height:100%;word-break:break-word;white-space:pre-line}@media(max-width: 768px){.sellix-shop-message-text{overflow-y:scroll}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/layout/status/style.scss"],
                names: [],
                mappings: "AAAA,qBACI,iBAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,2BAAA,CACA,2BAAA,CACA,oBAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,SAAA,CACA,yCAAA,CACA,0BAAA,CACA,UAAA,CACA,QAAA,CACA,mCAAA,CAEA,6BACI,iBAAA,CACA,gBAAA,CACA,aAAA,CACA,OAAA,CACA,UAAA,CACA,UAAA,CACA,QAAA,CAIA,gDACI,aAAA,CAIR,yBAlCJ,qBAmCQ,UAAA,CACA,YAAA,CACA,2BAAA,CACA,WAAA,CACA,UAAA,CACA,UAAA,CAAA,CAGJ,0BACI,iBAAA,CACA,UAAA,CACA,QAAA,CACA,cAAA,CAEA,yBANJ,0BAOQ,gBAAA,CAAA,CAIR,4BACI,eAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CACA,cAAA,CACA,YAAA,CAGJ,0BACI,kBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,sBAAA,CACA,WAAA,CACA,qBAAA,CACA,oBAAA,CAEA,yBAXJ,0BAYQ,iBAAA,CAAA",
                sourcesContent: [".sellix-shop-message {\n    position: absolute;\n    max-width: 350px;\n    padding: 1rem;\n    border-radius: 3px;\n    background: var(--darkColor);\n    color: var(--lightFontColor);\n    word-break: break-all;\n    max-height: 290px;\n    overflow: hidden;\n    width: 100%;\n    z-index: 2;\n    animation: .5s ease-in normal popupMessage;\n    transition: all .5s ease-in;\n    right: 1rem;\n    top: 1rem;\n    border: 1px solid var(--borderColor);\n\n    &-wrapper {\n        position: relative;\n        max-width: 1140px;\n        margin: 0 auto;\n        right: 0;\n        z-index: 11;\n        width: 100%;\n        height: 0;\n    }\n\n    &:hover {\n        .shop-status-message {\n            overflow: auto;\n        }\n    }\n\n    @media (max-width: 768px) {\n        top: 1.5rem;\n        right: 1.5rem;\n        max-width: calc(100% - 3rem);\n        height: auto;\n        width: 100%;\n        z-index: 99;\n    }\n\n    &-hide {\n        position: absolute;\n        right: 1rem;\n        top: 1rem;\n        cursor: pointer;\n\n        @media (max-width: 768px) {\n            font-size: 1.5rem;\n        }\n    }\n\n    &-header {\n        text-align: left;\n        margin-bottom: 1rem;\n        font-weight: 500;\n        line-height: 1;\n        font-size: 1rem;\n        margin-top: 0;\n    }\n\n    &-text {\n        line-height: 1.1rem;\n        font-size: 13px;\n        font-weight: 400;\n        overflow: hidden;\n        max-height: 190px;\n        background: transparent;\n        height: 100%;\n        word-break: break-word;\n        white-space: pre-line;\n\n        @media (max-width: 768px) {\n            overflow-y: scroll;\n        }\n    }\n}\n"],
                sourceRoot: ""
            }]);
            const i = s
        }
    }
]);
//# sourceMappingURL=ShopHeader-f4693192.js.map