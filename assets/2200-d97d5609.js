"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2200, 3838], {
        32200: (A, n, r) => {
            r.d(n, {
                xv: () => x,
                Kx: () => h
            });
            var e = r(78709),
                o = r(93379),
                a = r.n(o),
                t = r(7795),
                i = r.n(t),
                l = r(90569),
                C = r.n(l),
                d = r(3565),
                s = r.n(d),
                c = r(19216),
                p = r.n(c),
                u = r(44589),
                b = r.n(u),
                m = r(45816),
                g = {};
            g.styleTagTransform = b(), g.setAttributes = s(), g.insert = C().bind(null, "head"), g.domAPI = i(), g.insertStyleElement = p(), a()(m.Z, g), m.Z && m.Z.locals && m.Z.locals;
            const x = function(A) {
                var n = A.label,
                    r = A.disabled,
                    o = A.style,
                    a = A.type,
                    t = A.wrapperClassName,
                    i = A.noteUnder,
                    l = A.name,
                    C = A.nowrap,
                    d = A.className,
                    s = A.placeholder,
                    c = A.min,
                    p = A.step,
                    u = A.handleChange,
                    b = A.onChange,
                    m = A.values,
                    g = A.note,
                    x = A.touched,
                    h = A.errors,
                    f = h[l] && x[l];
                return e.createElement("div", {
                    className: (t || "") + " mb-3"
                }, n && e.createElement("label", {
                    className: "sellix-label " + (C ? "text-nowrap" : ""),
                    htmlFor: l
                }, n), g && !i && e.createElement("p", {
                    className: "sellix-note"
                }, g), e.createElement("input", {
                    autoComplete: "email" === a ? "" : "off",
                    type: a || "text",
                    id: l,
                    name: l,
                    style: o,
                    disabled: r ? "disabled" : "",
                    placeholder: s,
                    step: p,
                    onChange: function(A) {
                        b && b(A), u(A)
                    },
                    min: c,
                    value: m[l],
                    className: "sellix-input " + d + " " + (f && "is-invalid")
                }), f && e.createElement("div", {
                    className: "invalid-feedback"
                }, h[l]), g && i && e.createElement("p", {
                    className: "sellix-note"
                }, g))
            };
            r(84718);
            const h = function(A) {
                var n = A.label,
                    r = A.autoresize,
                    o = A.name,
                    a = A.noteUnder,
                    t = A.wrapperClassName,
                    i = A.className,
                    l = A.placeholder,
                    C = A.rows,
                    d = A.handleChange,
                    s = A.values,
                    c = A.note,
                    p = A.touched,
                    u = A.errors,
                    b = u[o] && p[o],
                    m = (0, e.useRef)(null),
                    g = (0, e.useState)(""),
                    x = g[0],
                    h = g[1],
                    f = (0, e.useState)("auto"),
                    v = f[0],
                    B = f[1],
                    k = (0, e.useState)("auto"),
                    E = k[0],
                    w = k[1];
                return (0, e.useEffect)((function() {
                    r && m.current && (w(m.current.scrollHeight + "px"), B(m.current.scrollHeight + "px"))
                }), [x]), e.createElement("div", {
                    className: "mb-3 " + (t || ""),
                    style: r ? {
                        minHeight: E
                    } : {}
                }, n ? e.createElement("label", {
                    className: "sellix-label",
                    htmlFor: o
                }, n) : null, c && !a && e.createElement("p", {
                    className: "sellix-note"
                }, c), e.createElement("textarea", {
                    ref: m,
                    autoComplete: "off",
                    id: o,
                    name: o,
                    placeholder: l,
                    onChange: function(A) {
                        r && (B("auto"), w(m.current.scrollHeight + "px"), h(A.target.value)), d && d(A)
                    },
                    value: s[o],
                    className: "sellix-input textarea " + i + " " + (b && "is-invalid"),
                    rows: C || 5,
                    style: r ? {
                        height: v
                    } : {}
                }), b && e.createElement("div", {
                    className: "invalid-feedback"
                }, u[o]), c && a && e.createElement("p", {
                    className: "sellix-note"
                }, c))
            };
            r(171), r(49607), r(20786);
            var f = r(93553),
                v = {};
            v.styleTagTransform = b(), v.setAttributes = s(), v.insert = C().bind(null, "head"), v.domAPI = i(), v.insertStyleElement = p(), a()(f.Z, v), f.Z && f.Z.locals && f.Z.locals, r(65936), r(53124);
            var B = r(86433);
            r.n(B)()(window || {})
        },
        171: (A, n, r) => {
            r.r(n), r.d(n, {
                default: () => E
            });
            var e = r(78709),
                o = r(86149),
                a = r(93379),
                t = r.n(a),
                i = r(7795),
                l = r.n(i),
                C = r(90569),
                d = r.n(C),
                s = r(3565),
                c = r.n(s),
                p = r(19216),
                u = r.n(p),
                b = r(44589),
                m = r.n(b),
                g = r(66780),
                x = {};

            function h() {
                return h = Object.assign || function(A) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (A[e] = r[e])
                    }
                    return A
                }, h.apply(this, arguments)
            }
            x.styleTagTransform = m(), x.setAttributes = c(), x.insert = d().bind(null, "head"), x.domAPI = l(), x.insertStyleElement = u(), t()(g.Z, x), g.Z && g.Z.locals && g.Z.locals;
            var f = {
                    position: "relative",
                    width: "100%",
                    height: 80
                },
                v = function(A) {
                    var n = A.handle,
                        r = n.id,
                        o = n.value,
                        a = n.percent,
                        t = A.symbol,
                        i = A.getHandleProps;
                    return e.createElement("div", h({
                        style: {
                            left: a + "%"
                        }
                    }, i(r)), e.createElement("span", null, o, e.createElement("i", null, t)))
                },
                B = function(A) {
                    var n = A.source.percent,
                        r = A.target,
                        o = A.getTrackProps;
                    return e.createElement("div", h({
                        style: {
                            left: n + "%",
                            width: r.percent - n + "%"
                        }
                    }, o()))
                },
                k = function(A) {
                    var n = A.tick,
                        r = n.percent,
                        o = n.value,
                        a = A.count,
                        t = A.symbol;
                    return e.createElement("div", {
                        style: {
                            marginLeft: -100 / a / 2 + "%",
                            width: 100 / a + "%",
                            left: r + "%"
                        }
                    }, o + t)
                };
            const E = function(A) {
                var n = A.domain,
                    r = A.ticks,
                    a = A.value,
                    t = A.step,
                    i = A.receiveValue,
                    l = A.suffix,
                    C = A.className;
                return e.createElement("div", {
                    className: "react-compound-slider " + C
                }, e.createElement(o.iR, {
                    rootStyle: f,
                    domain: n,
                    step: t || 1,
                    mode: 1,
                    values: a,
                    onChange: function(A) {
                        return i(A[0])
                    }
                }, e.createElement(o.S0, null, (function(A) {
                    var n = A.getRailProps;
                    return e.createElement("div", h({
                        className: "react-compound-slider-rail"
                    }, n()))
                })), e.createElement(o.wO, null, (function(A) {
                    var n = A.handles,
                        r = A.getHandleProps;
                    return e.createElement("div", {
                        className: "react-compound-slider-handles"
                    }, n.map((function(A) {
                        return e.createElement(v, {
                            key: A.id,
                            handle: A,
                            symbol: l || "",
                            getHandleProps: r
                        })
                    })))
                })), e.createElement(o.OF, {
                    right: !1
                }, (function(A) {
                    var n = A.tracks,
                        r = A.getTrackProps;
                    return e.createElement("div", {
                        className: "react-compound-slider-tracks"
                    }, n.map((function(A) {
                        var n = A.id,
                            o = A.source,
                            a = A.target;
                        return e.createElement(B, {
                            key: n,
                            source: o,
                            target: a,
                            getTrackProps: r
                        })
                    })))
                })), e.createElement(o.vb, {
                    values: r
                }, (function(A) {
                    var n = A.ticks;
                    return e.createElement("div", {
                        className: "react-compound-slider-ticks"
                    }, n.map((function(A) {
                        return e.createElement(k, {
                            key: A.id,
                            tick: A,
                            count: n.length,
                            symbol: l || ""
                        })
                    })))
                }))))
            }
        },
        45816: (A, n, r) => {
            r.d(n, {
                Z: () => c
            });
            var e = r(64162),
                o = r.n(e),
                a = r(68922),
                t = r.n(a),
                i = r(84155),
                l = r.n(i),
                C = new URL(r(85900), r.b),
                d = t()(o()),
                s = l()(C);
            d.push([A.id, '.sellix-label{font-size:14px;color:var(--darkFontColor);margin-bottom:.75rem;font-weight:500}.sellix-input-prefix{position:absolute;height:48px;bottom:0;align-items:center;display:flex;justify-content:center;padding:1rem;font-weight:bold;color:var(--darkFontColor);top:33px}.sellix-input-prefix+div input{padding-left:2.5rem}.sellix-label .subscription-tooltip{border:1px solid var(--borderColor);opacity:.95;background:var(--darkColor);padding:.6rem;border-radius:.5rem;font-size:14px;color:var(--darkFontColor);line-height:22px;width:100%;max-width:250px}.sellix-label .subscription-tooltip:after{border-top-color:var(--darkColor) !important}.subscription-tooltip{border:1px solid var(--borderColor);opacity:.95;background:var(--darkColor);padding:.6rem;border-radius:.5rem;font-size:14px;color:var(--darkFontColor);line-height:22px;width:100%;max-width:250px}.subscription-tooltip:after{border-top-color:var(--darkColor) !important}.sellix-select{cursor:pointer;padding:0 1rem;font-weight:400;height:48px;width:100%;transition:border .3s ease;outline:none;border-radius:6px;appearance:none;-moz-appearance:none;-webkit-appearance:none;background-image:var(--selectArrow);background-repeat:no-repeat,repeat;background-position:right .7em top 50%,0 0;background-size:.65em auto,100%;margin:0;color:var(--darkFontColor);line-height:16px;background-color:var(--darkColor);border:1px solid var(--borderColor)}.sellix-select:active{border-color:var(--inputBorderFocus)}.sellix-select:hover{border-color:var(--inputBorderHover)}.sellix-select:focus{border-color:var(--inputBorderFocus)}.sellix-select::-ms-expand{display:none}.sellix-select.is-invalid{border:1px solid #f86c6b !important}.sellix-select.is-invalid:hover{border-color:#f86c6b !important}.sellix-select.is-invalid:focus{border-color:#f86c6b !important}.switcher{width:44px;height:24px;margin:0}.switcher input{display:none;position:absolute;margin-top:.3rem;margin-left:-1.25rem;width:50px}.switcher input:checked~.switcher-slider::before{transform:translateX(19px)}.switcher input:checked+.switcher-slider{background-color:#613bea;border-color:#4217db}.switcher input:checked+.switcher-slider::before{border-color:#4217db}.switcher .switcher-slider{background-color:#e1e1e1;border:none;border-radius:50em;font-size:12px;position:relative;display:block;height:inherit;cursor:pointer;transition:.15s ease-out}.switcher .switcher-slider:before{width:20px;height:20px;top:2px;border-radius:100%;position:absolute;left:2px;box-sizing:border-box;content:"";background-color:#fff;border:1px solid #c8ced3;transition:.15s ease-out}.switcher .switcher-slider span{border-radius:50em;font-size:12px;background-color:#e1e1e1;border:none;position:relative;display:block;height:inherit;cursor:pointer;transition:.15s ease-out}.sellix-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:1px solid var(--borderColor);background:var(--darkColor);border-radius:.5rem;font-size:14px;width:100%;padding:0 1rem;color:var(--darkFontColor);transition:border .3s ease;height:48px;outline:none}.sellix-input.textarea{height:auto;padding:1rem}.sellix-input.is-invalid{border:1px solid #f86c6b !important}.sellix-input.is-invalid:hover{border-color:#f86c6b !important}.sellix-input.is-invalid:focus{border-color:#f86c6b !important}.sellix-input:active{border-color:var(--inputBorderFocus)}.sellix-input:focus{border-color:var(--inputBorderFocus)}.sellix-input:hover{border-color:var(--inputBorderHover) !important}.sellix-input::placeholder{color:var(--thinColor)}.sellix-input[disabled]{background:var(--lightColor);border-color:var(--borderColor)}.sellix-input[disabled]:focus{border-color:var(--thinColor)}.sellix-checkbox{background-color:#0000;border:1px solid #0000;position:relative;display:block;min-height:1.5rem;padding-left:1.5rem;cursor:pointer;font-weight:500;margin-bottom:1rem;margin-right:1.5rem}.sellix-checkbox input{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0}.sellix-checkbox input:not(:disabled):active~label::before{color:#fff;background-color:#e3dcfb;border-color:#e3dcfb}.sellix-checkbox input:focus~label::before{border-color:#beaef6;box-shadow:0 0 0 .2rem rgba(97,59,234,.25)}.sellix-checkbox input:checked~label::before{color:#fff;border-color:#613bea;background-color:#613bea}.sellix-checkbox input:checked~label::after{background-image:url(' + s + ') !important}.sellix-checkbox label{position:relative;margin-bottom:0;cursor:pointer}.sellix-checkbox label:before{position:absolute;cursor:pointer;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:"";background-color:#fff;border:#e8e8e9 solid 2px;top:50%;transform:translateY(-50%);border-radius:2px;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.sellix-checkbox label:after{top:50%;cursor:pointer;transform:translateY(-50%);position:absolute;left:-1.5rem;display:block;width:1rem;height:1rem;content:"";background:no-repeat 50%/50% 50%}.is-invalid .react-mde textarea{border:1px solid #f97e7d}.is-invalid .react-mde textarea:focus{border-color:#f97e7d}.react-mde{border:none;border-radius:6px}.react-mde .grip{border-top:none;background:var(--darkColor)}.react-mde ul.mde-header-group{padding:0 .5rem;margin:.5rem 0}.react-mde ul.mde-header-group li{display:flex !important;align-items:center}.react-mde .mde-header{background:var(--menuBackground);border:1px solid var(--borderColor);border-radius:6px 6px 0 0;border-bottom:none}.react-mde .mde-header svg path{fill:var(--thinColor)}.react-mde .mde-header i{color:var(--thinColor)}.react-mde .mde-header .mde-tabs button{background:var(--darkFontColor);color:var(--darkColor);border-radius:6px;border:none;padding:.5rem .75rem;font-size:.75rem;text-align:center;margin:.5rem}.react-mde .mde-header .mde-tabs button.selected{display:none}.react-mde .mde-textarea-wrapper textarea.mde-text{padding:1rem !important;border:1px solid var(--borderColor);border-radius:0 0 .5rem .5rem;box-shadow:none;height:100px;font-size:14px;background:var(--darkColor);color:var(--darkFontColor) !important;-webkit-appearance:none;-moz-appearance:none;appearance:none}.react-mde .mde-textarea-wrapper textarea.mde-text:focus{outline:none;border-color:var(--inputBorderFocus)}.invalid-feedback{width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}', "", {
                version: 3,
                sources: ["webpack://./client/components/fields/style.scss"],
                names: [],
                mappings: "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",
                sourcesContent: [".sellix-label {\n  font-size: 14px;\n  color: var(--darkFontColor);\n  margin-bottom: .75rem;\n  font-weight: 500;\n}\n\n.sellix-input-prefix {\n  position: absolute;\n  height: 48px;\n  bottom: 0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  font-weight: bold;\n  color: var(--darkFontColor);\n  top: 33px;\n\n  & + div input {\n    padding-left: 2.5rem;\n  }\n}\n\n.sellix-label {\n\n  .subscription-tooltip {\n    border: 1px solid var(--borderColor);\n    opacity: .95;\n    background: var(--darkColor);\n    padding: .6rem;\n    border-radius: .5rem;\n    font-size: 14px;\n    color: var(--darkFontColor);\n    line-height: 22px;\n    width: 100%;\n    max-width: 250px;\n\n    &:after {\n      border-top-color: var(--darkColor) !important;\n    }\n  }\n\n}\n\n.subscription-tooltip {\n  border: 1px solid var(--borderColor);\n  opacity: .95;\n  background: var(--darkColor);\n  padding: .6rem;\n  border-radius: .5rem;\n  font-size: 14px;\n  color: var(--darkFontColor);\n  line-height: 22px;\n  width: 100%;\n  max-width: 250px;\n\n  &:after {\n    border-top-color: var(--darkColor) !important;\n  }\n}\n\n.sellix-select {\n  cursor: pointer;\n  padding: 0 1rem;\n  font-weight: 400;\n  height: 48px;\n  width: 100%;\n  transition: border .3s ease;\n  outline: none;\n  border-radius: 6px;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-image: var(--selectArrow);\n  background-repeat: no-repeat, repeat;\n  background-position: right .7em top 50%, 0 0;\n  background-size: .65em auto, 100%;\n  margin: 0;\n  color: var(--darkFontColor);\n  line-height: 16px;\n  background-color: var(--darkColor);\n  border: 1px solid var(--borderColor);\n\n  &:active {\n    border-color: var(--inputBorderFocus);\n  }\n\n  &:hover {\n    border-color: var(--inputBorderHover);\n  }\n\n  &:focus {\n    border-color: var(--inputBorderFocus);\n  }\n\n  &::-ms-expand {\n    display: none;\n  }\n\n  //&:focus {\n  //  border-right: 1px solid var(--borderColor);\n  //}\n\n  &.is-invalid {\n    border: 1px solid #f86c6b !important;\n\n    &:hover {\n      border-color: #f86c6b !important;\n    }\n    &:focus {\n      border-color: #f86c6b !important;\n    }\n  }\n}\n\n\n.switcher {\n  width: 44px;\n  height: 24px;\n  margin: 0;\n\n  input {\n    display: none;\n    position: absolute;\n    margin-top: 0.3rem;\n    margin-left: -1.25rem;\n    width: 50px;\n\n    &:checked ~ .switcher-slider::before {\n      transform: translateX(19px);\n    }\n    &:checked + .switcher-slider {\n      background-color: #613BEA;\n      border-color: #4217db;\n\n      &::before {\n        border-color: #4217db;\n      }\n    }\n  }\n\n  .switcher-slider {\n    background-color: #E1E1E1;\n    border: none;\n    border-radius: 50em;\n    font-size: 12px;\n    position: relative;\n    display: block;\n    height: inherit;\n    cursor: pointer;\n    transition: .15s ease-out;\n\n    &:before {\n      width: 20px;\n      height: 20px;\n      top: 2px;\n      border-radius: 100%;\n      position: absolute;\n      left: 2px;\n      box-sizing: border-box;\n      content: \"\";\n      background-color: #fff;\n      border: 1px solid #c8ced3;\n      transition: .15s ease-out;\n    }\n\n    span {\n      border-radius: 50em;\n      font-size: 12px;\n      background-color: #E1E1E1;\n      border: none;\n      position: relative;\n      display: block;\n      height: inherit;\n      cursor: pointer;\n      transition: .15s ease-out;\n    }\n  }\n}\n\n\n\n\n\n.sellix-input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    box-shadow: none;\n\n    border: 1px solid var(--borderColor);\n    background: var(--darkColor);\n    border-radius: .5rem;\n    font-size: 14px;\n    width: 100%;\n    padding: 0 1rem;\n    color: var(--darkFontColor);\n    transition: border .3s ease;\n    height: 48px;\n    outline: none;\n\n    &.textarea {\n      height: auto;\n      padding: 1rem;\n    }\n\n    &.is-invalid {\n      border: 1px solid #f86c6b !important;\n\n      &:hover {\n        border-color: #f86c6b !important;\n      }\n      &:focus {\n        border-color: #f86c6b !important;\n      }\n    }\n\n    &:active {\n      border-color: var(--inputBorderFocus);\n    }\n    &:focus {\n      border-color: var(--inputBorderFocus);\n    }\n\n    &:hover {\n      border-color: var(--inputBorderHover) !important;\n    }\n\n    &::placeholder {\n      color: var(--thinColor);\n    }\n\n    &[disabled] {\n      background: var(--lightColor);\n      border-color: var(--borderColor);\n\n      &:focus {\n        border-color: var(--thinColor);\n      }\n    }\n}\n\n.sellix-checkbox {\n  background-color: #0000;\n  border: 1px solid #0000;\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  cursor: pointer;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  margin-right: 1.5rem;\n\n  input {\n    box-sizing: border-box;\n    padding: 0;\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n\n    &:not(:disabled):active ~ label::before {\n      color: #fff;\n      background-color: #e3dcfb;\n      border-color: #e3dcfb;\n    }\n\n    &:focus ~ label::before {\n      border-color: #beaef6;\n      box-shadow: 0 0 0 0.2rem rgb(97 59 234 / 25%);\n    }\n\n    &:checked ~ label::before {\n      color: #fff;\n      border-color: #613BEA;\n      background-color: #613BEA;\n    }\n\n    &:checked ~ label::after {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\") !important\n    }\n  }\n\n  label {\n    position: relative;\n    margin-bottom: 0;\n    cursor: pointer;\n\n    &:before {\n      position: absolute;\n      cursor: pointer;\n      left: -1.5rem;\n      display: block;\n      width: 1rem;\n      height: 1rem;\n      pointer-events: none;\n      content: \"\";\n      background-color: #fff;\n      border: #e8e8e9 solid 2px;\n      top: 50%;\n      transform: translateY(-50%);\n      border-radius: 2px;\n      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    }\n\n    &:after {\n      top: 50%;\n      cursor: pointer;\n      transform: translateY(-50%);\n      position: absolute;\n      left: -1.5rem;\n      display: block;\n      width: 1rem;\n      height: 1rem;\n      content: \"\";\n      background: no-repeat 50%/50% 50%;\n    }\n  }\n}\n\n.is-invalid .react-mde {\n\n  textarea {\n    border: 1px solid #f97e7d;\n    &:focus {\n      border-color: #f97e7d;\n    }\n  }\n}\n\n.react-mde {\n  border: none;\n  border-radius: 6px;\n\n  .grip {\n    border-top: none;\n    background: var(--darkColor)\n  }\n\n  ul.mde-header-group {\n    padding: 0 .5rem;\n    margin: .5rem 0;\n\n    li {\n      display: flex !important;\n      align-items: center;\n    }\n  }\n\n  .mde-header {\n    background: var(--menuBackground);\n    border: 1px solid var(--borderColor);\n    border-radius: 6px 6px 0 0;\n    border-bottom: none;\n\n    svg {\n      path {\n        fill: var(--thinColor);\n      }\n    }\n\n    i {\n      color: var(--thinColor);\n    }\n\n    .mde-tabs {\n      button {\n        background: var(--darkFontColor);\n        color: var(--darkColor);\n        border-radius: 6px;\n        border: none;\n        padding: .5rem .75rem;\n        font-size: .75rem;\n        text-align: center;\n        margin: .5rem;\n\n\n        &.selected {\n          display: none;\n        }\n      }\n    }\n  }\n\n  .mde-textarea-wrapper {\n    textarea.mde-text {\n      padding: 1rem !important;\n      border: 1px solid var(--borderColor);\n      border-radius: 0 0 .5rem .5rem;\n      box-shadow: none;\n      height: 100px;\n      font-size: 14px;\n      background: var(--darkColor);\n      color: var(--darkFontColor) !important;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n\n    &:focus {\n        outline: none;\n        border-color: var(--inputBorderFocus);\n      }\n    }\n  }\n\n}\n\n\n.invalid-feedback {\n  width: 100%;\n  margin-top: .25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n"],
                sourceRoot: ""
            }]);
            const c = d
        },
        93553: (A, n, r) => {
            r.d(n, {
                Z: () => i
            });
            var e = r(64162),
                o = r.n(e),
                a = r(68922),
                t = r.n(a)()(o());
            t.push([A.id, ".image-uploader a{line-height:1.5}.image-uploader .drag-drop-area{background-color:var(--darkColor) !important;border:1px dashed var(--borderColor) !important;padding:.75rem;border-radius:.5rem;text-align:center;cursor:pointer;transition:background-color .2s ease;color:var(--lightFontColor)}.image-uploader .drag-drop-area:hover{background-color:var(--menuBackgroundHover) !important}.image-uploader .drag-drop-area:focus{outline:none;box-shadow:0 0 0 .2rem rgba(97,59,234,.25)}.image-uploader .drag-drop-area>div{background:var(--additionalLightColor);border-radius:6px;height:auto;padding:3rem 0}.image-uploader p.caption{font-size:14px;color:var(--darkFontColor);margin:0;font-weight:400}.image-uploader p.warning{color:#dc3545;margin:0}.image-uploader img{margin-bottom:.5rem}.image-uploader i{color:var(--darkFontColor);font-size:1.5rem;margin-bottom:.5rem}.avatar-uploader{max-width:300px;cursor:pointer}.avatar-uploader .circle-btn{position:absolute;display:block;text-align:center;width:31px;font-size:21px;height:31px;line-height:1.5;color:#fff;background-color:var(--buttonColor);border-radius:50%;top:32px;right:0}.avatar-uploader .username{color:var(--lightFontColor);font-size:14px;font-weight:600;padding-top:2px;padding-left:7px}.avatar-uploader .caption{display:flex;align-items:center;font-size:12px;background-color:#e4d6ff;border-radius:50px;padding:5px 20px;height:34px;margin-left:-25px;padding-left:33px}.avatar-uploader:hover,.avatar-uploader:active{border:none !important;outline:0 !important;box-shadow:none}.favicon-uploader .drag-drop-area{width:50px;height:50px;background-color:var(--darkColor);border:1px solid var(--lightFontColor);border-radius:3px;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer}.favicon-uploader p.caption{font-size:18px;color:var(--darkFontColor);font-weight:600}.favicon-uploader p.warning{color:#dc3545}.favicon-uploader i{font-size:22px;color:var(--darkFontColor);margin-bottom:0}", "", {
                version: 3,
                sources: ["webpack://./client/components/fields/upload/style.scss"],
                names: [],
                mappings: "AACI,kBACI,eAAA,CAGJ,gCACI,4CAAA,CACA,+CAAA,CACA,cAAA,CACA,mBAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CACA,2BAAA,CAEA,sCACI,sDAAA,CAGJ,sCACI,YAAA,CACA,0CAAA,CAGJ,oCACI,sCAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CAIR,0BACI,cAAA,CACA,0BAAA,CACA,QAAA,CACA,eAAA,CAGJ,0BACI,aAAA,CACA,QAAA,CAGJ,oBACI,mBAAA,CAGJ,kBACI,0BAAA,CACA,gBAAA,CACA,mBAAA,CAIR,iBACI,eAAA,CACA,cAAA,CAEA,6BACI,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,eAAA,CACA,UAAA,CACA,mCAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CAGJ,2BACI,2BAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CAGJ,0BACI,YAAA,CACA,kBAAA,CACA,cAAA,CACA,wBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CAIR,+CAEI,sBAAA,CACA,oBAAA,CACA,eAAA,CAKA,kCACI,UAAA,CACA,WAAA,CACA,iCAAA,CACA,sCAAA,CACA,iBAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CAGJ,4BACI,cAAA,CACA,0BAAA,CACA,eAAA,CAGJ,4BACI,aAAA,CAGJ,oBACI,cAAA,CACA,0BAAA,CACA,eAAA",
                sourcesContent: [".image-uploader {\n    a {\n        line-height: 1.5;\n    }\n\n    .drag-drop-area {\n        background-color: var(--darkColor) !important;\n        border: 1px dashed var(--borderColor) !important;\n        padding: .75rem;\n        border-radius: .5rem;\n        text-align: center;\n        cursor: pointer;\n        transition: background-color .2s ease;\n        color: var(--lightFontColor);\n\n        &:hover {\n            background-color: var(--menuBackgroundHover) !important;\n        }\n\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 0.2rem rgba(97, 59, 234, 0.25);\n        }\n\n        & > div {\n            background: var(--additionalLightColor);\n            border-radius: 6px;\n            height: auto;\n            padding: 3rem 0;\n        }\n    }\n\n    p.caption {\n        font-size: 14px;\n        color: var(--darkFontColor);\n        margin: 0;\n        font-weight: 400;\n    }\n\n    p.warning {\n        color: #dc3545;\n        margin: 0;\n    }\n\n    img {\n        margin-bottom: .5rem;\n    }\n\n    i {\n        color: var(--darkFontColor);\n        font-size: 1.5rem;\n        margin-bottom: .5rem;\n    }\n}\n\n.avatar-uploader {\n    max-width: 300px;\n    cursor: pointer;\n\n    .circle-btn {\n        position: absolute;\n        display: block;\n        text-align: center;\n        width: 31px;\n        font-size: 21px;\n        height: 31px;\n        line-height: 1.5;\n        color: white;\n        background-color: var(--buttonColor);\n        border-radius: 50%;\n        top: 32px;\n        right: 0;\n    }\n\n    .username {\n        color: var(--lightFontColor);\n        font-size: 14px;\n        font-weight: 600;\n        padding-top: 2px;\n        padding-left: 7px;\n    }\n\n    .caption {\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        background-color: #E4D6FF;\n        border-radius: 50px;\n        padding: 5px 20px;\n        height: 34px;\n        margin-left: -25px;\n        padding-left: 33px;\n    }\n}\n\n.avatar-uploader:hover,\n.avatar-uploader:active {\n    border: none !important;\n    outline: 0 !important;\n    box-shadow: none;\n}\n\n\n.favicon-uploader {\n    .drag-drop-area {\n        width: 50px;\n        height: 50px;\n        background-color: var(--darkColor);\n        border: 1px solid var(--lightFontColor);\n        border-radius: 3px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n    }\n\n    p.caption {\n        font-size: 18px;\n        color: var(--darkFontColor);\n        font-weight: 600;\n    }\n\n    p.warning {\n        color: #dc3545;\n    }\n\n    i {\n        font-size: 22px;\n        color: var(--darkFontColor);\n        margin-bottom: 0;\n    }\n}\n"],
                sourceRoot: ""
            }]);
            const i = t
        },
        66780: (A, n, r) => {
            r.d(n, {
                Z: () => i
            });
            var e = r(64162),
                o = r.n(e),
                a = r(68922),
                t = r.n(a)()(o());
            t.push([A.id, '.react-compound-slider{padding-left:.5rem;padding-right:.5rem}.react-compound-slider-rail{position:absolute;width:100%;height:.5rem;margin-top:1.25rem;border-radius:6px;background-color:var(--additionalLightColor)}.react-compound-slider:hover .react-compound-slider-handles div span i{display:flex}.react-compound-slider-handles div{position:absolute;margin-left:-7px;margin-top:15px;z-index:2;width:16px;height:16px;border:2px solid #fff;text-align:center;cursor:pointer;border-radius:50%;background-color:#613bea;color:#333}.react-compound-slider-handles div:hover span{display:flex}.react-compound-slider-handles div span{position:absolute;top:-35px;color:var(--darkFontColor);background:var(--darkColor);padding:3px .5rem 3px;border-radius:3px;font-size:12px;left:50%;transform:translateX(-50%);display:flex}.react-compound-slider-handles div span i{display:none}.react-compound-slider-handles div span:before{content:"";position:absolute;width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--darkColor) #0000 #0000 #0000;top:20px;left:50%;transform:translateX(-50%)}.react-compound-slider-handles div i{font-style:normal}.react-compound-slider-tracks div{position:absolute;height:8px;z-index:1;margin-top:20px;background-color:#613bea;border-radius:3px;cursor:pointer}.react-compound-slider-ticks div{position:absolute;margin-top:35px;font-size:12px;color:#989ba0;text-align:center;padding-left:10px;padding-right:10px}', "", {
                version: 3,
                sources: ["webpack://./client/components/slider/style.scss"],
                names: [],
                mappings: "AAAA,uBACE,kBAAA,CACA,mBAAA,CAEA,4BACE,iBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,4CAAA,CAIA,uEACE,YAAA,CAKJ,mCACE,iBAAA,CACA,gBAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,wBAAA,CACA,UAAA,CAEA,8CACE,YAAA,CAGF,wCACE,iBAAA,CACA,SAAA,CACA,0BAAA,CACA,2BAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,QAAA,CACA,0BAAA,CACA,YAAA,CAEA,0CACE,YAAA,CAGF,+CACE,UAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,6BAAA,CACA,+CAAA,CACA,QAAA,CACA,QAAA,CACA,0BAAA,CAIJ,qCACE,iBAAA,CAIJ,kCACE,iBAAA,CACA,UAAA,CACA,SAAA,CACA,eAAA,CACA,wBAAA,CACA,iBAAA,CACA,cAAA,CAGF,iCACE,iBAAA,CACA,eAAA,CACA,cAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,kBAAA",
                sourcesContent: ['.react-compound-slider {\n  padding-left: .5rem;\n  padding-right: .5rem;\n\n  &-rail {\n    position: absolute;\n    width: 100%;\n    height: .5rem;\n    margin-top: 1.25rem;\n    border-radius: 6px;\n    background-color: var(--additionalLightColor);\n  }\n\n  &:hover {\n    .react-compound-slider-handles div span i {\n      display: flex;\n    }\n  }\n\n\n  &-handles div {\n    position: absolute;\n    margin-left: -7px;\n    margin-top: 15px;\n    z-index: 2;\n    width: 16px;\n    height: 16px;\n    border: 2px solid #fff;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #613BEA;\n    color: #333;\n\n    &:hover span {\n      display: flex\n    }\n\n    & span {\n      position: absolute;\n      top: -35px;\n      color: var(--darkFontColor);\n      background: var(--darkColor);\n      padding: 3px .5rem 3px;\n      border-radius: 3px;\n      font-size: 12px;\n      left: 50%;\n      transform: translateX(-50%);\n      display: flex;\n\n      i {\n        display: none;\n      }\n\n      &:before {\n        content: "";\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-width: 10px 10px 0 10px;\n        border-color: var(--darkColor) #0000 #0000 #0000;\n        top: 20px;\n        left: 50%;\n        transform: translateX(-50%);\n      }\n    }\n\n    & i {\n      font-style: normal;\n    }\n  }\n\n  &-tracks div {\n    position: absolute;\n    height: 8px;\n    z-index: 1;\n    margin-top: 20px;\n    background-color: #613BEA;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n\n  &-ticks div {\n    position: absolute;\n    margin-top: 35px;\n    font-size: 12px;\n    color: #989BA0;\n    text-align: center;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}'],
                sourceRoot: ""
            }]);
            const i = t
        }
    }
]);
//# sourceMappingURL=2200-d97d5609.js.map