"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5239], {
        37162: (A, e, n) => {
            n.r(e), n.d(e, {
                default: () => x
            });
            var r = n(78709),
                o = n(93379),
                a = n.n(o),
                t = n(7795),
                i = n.n(t),
                s = n(90569),
                l = n.n(s),
                C = n(3565),
                c = n.n(C),
                p = n(19216),
                m = n.n(p),
                h = n(44589),
                d = n.n(h),
                u = n(26444),
                g = {};
            g.styleTagTransform = d(), g.setAttributes = c(), g.insert = l().bind(null, "head"), g.domAPI = i(), g.insertStyleElement = m(), a()(u.Z, g), u.Z && u.Z.locals && u.Z.locals;
            var f = n(41647);
            const x = function(A) {
                var e = A.setSearch,
                    n = A.search;
                return 1 === (0, f.v9)((function(A) {
                    var e = A.common.generalInfo;
                    return Number((e || {}).search_enabled)
                })) ? r.createElement("label", {
                    htmlFor: "shop-search",
                    className: "sellix-shop-search"
                }, r.createElement("i", {
                    className: "fas fa-search"
                }), r.createElement("input", {
                    id: "shop-search",
                    value: n,
                    autoComplete: "off",
                    placeholder: "Search for a product...",
                    onChange: function(A) {
                        return e(A.target.value)
                    }
                })) : null
            }
        },
        26444: (A, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var r = n(64162),
                o = n.n(r),
                a = n(68922),
                t = n.n(a)()(o());
            t.push([A.id, ".sellix-shop-search{display:flex;align-items:center;justify-content:center;position:relative;border-radius:.5rem;padding:0 .75rem;width:50%;margin-bottom:0}@media(max-width: 768px){.sellix-shop-search{width:100%;margin-bottom:1rem;margin-right:0}}.sellix-shop-search input{border-radius:.5rem;padding:1rem 2.5rem 1rem 1rem;font-size:14px;color:var(--lightFontColor);background-color:var(--darkColor);box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--borderColor);width:100%;height:3rem;font-family:inherit}.sellix-shop-search input:focus{outline:none}.sellix-shop-search input::placeholder{font-size:14px;color:var(--darkFontColor);opacity:.7}.sellix-shop-search .fas{position:absolute;right:3rem;font-size:14px;margin-top:1px;color:var(--lightFontColor) !important}@media(max-width: 768px){.sellix-shop-search .fas{right:1.5rem}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/shop/search/index.scss"],
                names: [],
                mappings: "AAAA,oBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,mBAAA,CACA,gBAAA,CACA,SAAA,CACA,eAAA,CAEA,yBAVF,oBAWI,UAAA,CACA,kBAAA,CACA,cAAA,CAAA,CAGF,0BACE,mBAAA,CACA,6BAAA,CACA,cAAA,CACA,2BAAA,CACA,iCAAA,CACA,eAAA,CACA,uBAAA,CACA,oBAAA,CACA,eAAA,CACA,mCAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAEA,gCACE,YAAA,CAGF,uCACE,cAAA,CACA,0BAAA,CACA,UAAA,CAIJ,yBACE,iBAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,sCAAA,CAEA,yBAPF,yBAQI,YAAA,CAAA",
                sourcesContent: [".sellix-shop-search {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-radius: .5rem;\n  padding: 0 .75rem;\n  width: 50%;\n  margin-bottom: 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-bottom: 1rem;\n    margin-right: 0;\n  }\n\n  input {\n    border-radius: .5rem;\n    padding: 1rem 2.5rem 1rem 1rem;\n    font-size: 14px;\n    color: var(--lightFontColor);\n    background-color: var(--darkColor);\n    box-shadow: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: 1px solid var(--borderColor);\n    width: 100%;\n    height: 3rem;\n    font-family: inherit;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::placeholder {\n      font-size: 14px;\n      color: var(--darkFontColor);\n      opacity: .7;\n    }\n  }\n\n  .fas {\n    position: absolute;\n    right: 3rem;\n    font-size: 14px;\n    margin-top: 1px;\n    color: var(--lightFontColor) !important;\n\n    @media (max-width: 768px) {\n      right: 1.5rem;\n    }\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const i = t
        }
    }
]);
//# sourceMappingURL=ShopSearch-0c4f326f.js.map