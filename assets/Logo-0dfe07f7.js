"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1039], {
        75364: (L, M, e) => {
            e.r(M), e.d(M, {
                default: () => u
            });
            var t = e(78709),
                j = e(15218),
                i = e(33801),
                s = e(49436),
                N = e(5341),
                T = e(41647),
                l = e(58877);
            e(48833);
            const u = function(L) {
                var M = L.mobile,
                    e = L.isDoc,
                    u = L.isShop,
                    m = (0, T.v9)((function(L) {
                        return L.nav.open
                    })),
                    g = (0, i.k6)(),
                    D = (0, T.v9)((function(L) {
                        return L.common.generalInfo
                    })).name,
                    o = (0, T.v9)((function(L) {
                        var M = L.common;
                        return {
                            showCustomTheme: (M.generalInfo || {}).custom_theme,
                            theme: M.theme
                        }
                    })),
                    a = o.showCustomTheme,
                    c = o.theme;
                return t.createElement("a", {
                    onClick: u ? function() {} : l.U.bind(void 0, "", "/", g),
                    href: u ? "/" : "https://sellix.io/",
                    className: "header-logo-image " + (!e && !m && "open") + " " + (M && "mobile")
                }, u ? t.createElement("span", {
                    style: {
                        fontSize: "1.5rem",
                        fontWeight: 700
                    }
                }, D) : a ? c.logo ? t.createElement("img", {
                    src: j.Z.CDN_CUSTOMIZATION_URL + c.logo,
                    width: "70",
                    height: "20",
                    alt: "Sellix",
                    className: "header-logo-image-big"
                }) : t.createElement("span", {
                    style: {
                        fontSize: "1.5rem",
                        fontWeight: 700
                    }
                }, D) : t.createElement(t.Fragment, null, t.createElement("img", {
                    src: N,
                    width: "18",
                    height: "20",
                    alt: "Sellix",
                    style: {
                        marginTop: 1
                    },
                    className: "header-logo-image-small"
                }), t.createElement("img", {
                    src: s,
                    width: "70",
                    height: "20",
                    alt: "Sellix",
                    className: "header-logo-image-big"
                })))
            }
        },
        5341: L => {
            L.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDkwMCAxMDAwIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4ubG9hZGVyLWxvZ28tZGFya3tmaWxsOiM2QTNDRTI7fTwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9ImxvYWRlci1sb2dvLWRhcmsiCgkJICBkPSJNMjY1LjcsMjY2LjhsMjYzLTg3LjhMNTExLDI1My44YzIyLjgsNS40LDQ3LjYsMTIuNiw3NSwyMi40YzYwLjgsMjEuNywxMTUuOSw0Ni45LDE2NS40LDc1LjVsMTA5LjQtMjMwLjUKCQljLTUyLjEtMzMtMTEzLjUtNTkuNS0xODQuMy03OS40Yy03MC44LTIwLTE0MS43LTMwLTIxMi45LTMwYy03OC4xLDAtMTQ2LjcsMTIuMi0yMDUuOCwzNi41Yy01OS4xLDI0LjMtMTA0LjYsNTkuMy0xMzYuNywxMDQuOAoJCUM4OSwxOTguOCw3Mi45LDI1Miw3Mi45LDMxMi43YzAsNjIuNSwxNS42LDExMi40LDQ2LjksMTQ5LjhjMzEuMiwzNy4zLDY4LjMsNjQuOSwxMTEuMyw4Mi43YzQzLDE3LjgsOTYuNiwzNC45LDE2MC44LDUxLjQKCQljMTcuMyw0LjMsMzIuNiw4LjQsNDYuOSwxMi42bDE3LTcxLjlsMjA0LjMsMTYwLjlsLTI2Mi45LDg3LjhsMTQuMS01OS44Yy0zMy44LTYuOC03MS4xLTE4LTExMy4xLTM1LjEKCQlDMjI4LjgsNjYyLjgsMTcxLDYyOC43LDEyNSw1ODguOEwxMyw4MTYuN2M1OS45LDQ2LDEzMC45LDgyLjIsMjEzLDEwOC43YzgyLDI2LjUsMTYzLjQsMzkuNywyNDQuMSwzOS43CgkJYzcxLjIsMCwxMzUuOS0xMC45LDE5NC4xLTMyLjZjNTguMi0yMS43LDEwNC40LTU0LjksMTM4LjctOTkuNmMzNC4zLTQ0LjcsNTEuNS0xMDAsNTEuNS0xNjZjMC02NC4zLTE2LjEtMTE2LjEtNDguMi0xNTUuNgoJCWMtMzIuMS0zOS41LTY5LjctNjguNC0xMTIuNy04Ni42Yy00My0xOC4yLTk3LTM2LjUtMTYyLjEtNTQuN2MtMTYuNS00LjQtMzEtOC42LTQ0LjctMTIuN0w0NzAsNDI3LjdMMjY1LjcsMjY2Ljh6Ii8+CjwvZz4KPC9zdmc+Cg=="
        }
    }
]);
//# sourceMappingURL=Logo-0dfe07f7.js.map