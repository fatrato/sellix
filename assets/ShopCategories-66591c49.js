"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5933], {
        32802: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => x
            });
            var n = l(78709),
                a = l(12681),
                s = (l(74111), l(93379)),
                o = l.n(s),
                r = l(7795),
                c = l.n(r),
                i = l(90569),
                A = l.n(i),
                m = l(3565),
                u = l.n(m),
                d = l(19216),
                v = l.n(d),
                g = l(44589),
                _ = l.n(g),
                p = l(73993),
                h = {};
            h.styleTagTransform = _(), h.setAttributes = u(), h.insert = A().bind(null, "head"), h.domAPI = c(), h.insertStyleElement = v(), o()(p.Z, h), p.Z && p.Z.locals && p.Z.locals;
            var C = n.memo((function(e) {
                var t = e.categories,
                    l = e.filterBy,
                    s = e.setFilterBy;
                return t.length ? n.createElement("div", {
                    className: "sellix-sort-categories"
                }, n.createElement(a.ZP, {
                    placeholder: "Categories",
                    options: [{
                        label: "All categories",
                        value: "all"
                    }].concat(t.map((function(e) {
                        return {
                            label: e.title,
                            value: e.uniqid
                        }
                    }))),
                    open: !0,
                    classNamePrefix: "react-select",
                    isMulti: !1,
                    className: "w-100",
                    closeMenuOnSelect: !0,
                    isSearchable: !1,
                    backspaceRemovesValue: !0,
                    value: [{
                        label: "All categories",
                        value: "all"
                    }].concat(t.map((function(e) {
                        return {
                            label: e.title,
                            value: e.uniqid
                        }
                    }))).find((function(e) {
                        return e.value === l
                    })),
                    onChange: function(e) {
                        s(e.value)
                    }
                })) : null
            }));
            const x = C
        },
        73993: (e, t, l) => {
            l.d(t, {
                Z: () => r
            });
            var n = l(64162),
                a = l.n(n),
                s = l(68922),
                o = l.n(s)()(a());
            o.push([e.id, ".sellix-categories-select{padding:0 .75rem}@media(max-width: 768px){.sellix-categories-select{margin-bottom:1rem}}.sellix-sort-categories .react-select__control .react-select__value-container--has-value>div{color:var(--lightFontColor)}.sellix-sort-select{padding:0 .75rem}.sellix-sort-select .react-select__control .react-select__value-container--has-value>div{color:var(--lightFontColor)}@media(max-width: 768px){.sellix-sort-select{margin-bottom:1rem}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/shop/categories/style.scss"],
                names: [],
                mappings: "AAAA,0BACE,gBAAA,CAEA,yBAHF,0BAII,kBAAA,CAAA,CAKF,6FACE,2BAAA,CAIJ,oBACE,gBAAA,CAEA,yFACE,2BAAA,CAGF,yBAPF,oBAQI,kBAAA,CAAA",
                sourcesContent: [".sellix-categories-select {\n  padding: 0 .75rem;\n\n  @media (max-width: 768px) {\n    margin-bottom: 1rem;\n  }\n}\n\n.sellix-sort-categories {\n  .react-select__control .react-select__value-container--has-value > div {\n    color: var(--lightFontColor);\n  }\n}\n\n.sellix-sort-select {\n  padding: 0 .75rem;\n\n  .react-select__control .react-select__value-container--has-value > div {\n    color: var(--lightFontColor);\n  }\n\n  @media (max-width: 768px) {\n    margin-bottom: 1rem;\n  }\n}"],
                sourceRoot: ""
            }]);
            const r = o
        }
    }
]);
//# sourceMappingURL=ShopCategories-66591c49.js.map