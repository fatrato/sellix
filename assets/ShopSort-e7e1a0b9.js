"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9210], {
        45336: (e, l, a) => {
            a.r(l), a.d(l, {
                default: () => o
            });
            var t = a(78709),
                r = a(12681),
                u = a(41647);
            const o = t.memo((function(e) {
                var l = e.categories,
                    a = e.sortBy,
                    o = e.setSortBy;
                return 1 === (0, u.v9)((function(e) {
                    var l = e.common.generalInfo;
                    return Number(l.sort_enabled)
                })) ? t.createElement("div", {
                    className: "sellix-sort-select",
                    style: l ? {} : {
                        paddingRight: "1.5rem"
                    }
                }, t.createElement(r.ZP, {
                    placeholder: "Sort by...",
                    options: [{
                        label: "Default",
                        value: "DEFAULT"
                    }, {
                        label: "Price",
                        value: "PRICE"
                    }, {
                        label: "Name",
                        value: "NAME"
                    }, {
                        label: "Type",
                        value: "TYPE"
                    }, {
                        label: "Stock",
                        value: "STOCK"
                    }],
                    classNamePrefix: "react-select",
                    isMulti: !1,
                    className: "w-100",
                    closeMenuOnSelect: !0,
                    isSearchable: !1,
                    backspaceRemovesValue: !0,
                    value: [{
                        label: "DEFAULT" === a ? "Sort By: Default" : "DEFAULT",
                        value: "DEFAULT"
                    }, {
                        label: "PRICE" === a ? "Sort By: Price" : "Price",
                        value: "PRICE"
                    }, {
                        label: "NAME" === a ? "Sort By: Name" : "Name",
                        value: "NAME"
                    }, {
                        label: "TYPE" === a ? "Sort By: Type" : "Type",
                        value: "TYPE"
                    }, {
                        label: "STOCK" === a ? "Sort By: Stock" : "Stock",
                        value: "STOCK"
                    }].find((function(e) {
                        return e.value === a
                    })),
                    onChange: function(e) {
                        o(e.value)
                    }
                })) : null
            }))
        }
    }
]);
//# sourceMappingURL=ShopSort-e7e1a0b9.js.map