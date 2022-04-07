"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5397], {
        32005: (A, n, e) => {
            e.r(n), e.d(n, {
                default: () => d
            });
            var i = e(78709),
                r = e(33801),
                t = e(63202),
                a = e(41647),
                o = e(80876),
                s = e(21775),
                C = (e(85174), e(95282), (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "CustomBanner"
                    },
                    isReady: function(A) {
                        var n = this.resolve(A);
                        return !0 === this.resolved[n] && !!e.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([e.e(8279), e.e(9839)]).then(e.bind(e, 65836))
                    },
                    requireAsync: function(A) {
                        var n = this,
                            e = this.resolve(A);
                        return this.resolved[e] = !1, this.importAsync(A).then((function(A) {
                            return n.resolved[e] = !0, A
                        }))
                    },
                    requireSync: function(A) {
                        var n = this.resolve(A);
                        return e(n)
                    },
                    resolve: function() {
                        return 65836
                    }
                })),
                l = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "DefaultBanner"
                    },
                    isReady: function(A) {
                        var n = this.resolve(A);
                        return !0 === this.resolved[n] && !!e.m[n]
                    },
                    importAsync: function() {
                        return Promise.all([e.e(8279), e.e(6599)]).then(e.bind(e, 73902))
                    },
                    requireAsync: function(A) {
                        var n = this,
                            e = this.resolve(A);
                        return this.resolved[e] = !1, this.importAsync(A).then((function(A) {
                            return n.resolved[e] = !0, A
                        }))
                    },
                    requireSync: function(A) {
                        var n = this.resolve(A);
                        return e(n)
                    },
                    resolve: function() {
                        return 73902
                    }
                });
            const d = (0, o.Z)((function(A) {
                var n = A.showCustom,
                    e = A.isAdditionalDomain,
                    o = A.isCustomDomain,
                    s = (0, a.v9)((function(A) {
                        var n = A.common;
                        return {
                            shop: n.generalInfo || {},
                            subscription: n.subscription || {}
                        }
                    })),
                    d = s.shop,
                    m = s.subscription,
                    p = (0, a.I0)(),
                    x = (0, r.UO)().name;
                (0, i.useEffect)((function() {
                    return h(), window.$crisp && window.$crisp.on && window.$crisp.do("chat:show"),
                        function() {
                            window.$crisp && window.$crisp.on && window.$crisp.do("chat:hide")
                        }
                }), [x, o, e]);
                var c = function(A) {
                        if (A) {
                            window.$crisp = [], window.CRISP_WEBSITE_ID = A;
                            var n = document.createElement("script");
                            n.src = "https://client.crisp.chat/l.js", n.type = "text/javascript", n.async = !0, n.id = "crisp", document.getElementsByTagName("head")[0].appendChild(n)
                        } else window.$crisp && window.$crisp.on && window.$crisp.do("chat:hide")
                    },
                    h = function() {
                        Object.keys(d).length ? c(d.crisp_website_id) : o ? p((0, t.wK)(o)).then((function(A) {
                            var n = A.shop;
                            return n ? c(n.crisp_website_id) : null
                        })) : e && p((0, t.wK)(e)).then((function(A) {
                            var n = A.shop;
                            return n ? c(n.crisp_website_id) : null
                        }))
                    };
                return Object.keys(d).length ? n ? i.createElement(C, {
                    shop: d,
                    subscription: m
                }) : i.createElement(l, {
                    shop: d,
                    subscription: m
                }) : null
            }))
        },
        55277: (A, n, e) => {
            e.d(n, {
                Z: () => o
            });
            var i = e(64162),
                r = e.n(i),
                t = e(68922),
                a = e.n(t)()(r());
            a.push([A.id, '.sellix-banner{display:flex;align-items:center;justify-content:center;position:relative;z-index:1;height:auto;border:1px solid var(--borderColor);border-radius:.5rem;margin:2rem auto;background:var(--darkColor)}@media(max-width: 768px){.sellix-banner{flex-direction:column;margin-top:1rem}}.sellix-banner.products-sold-hide .sellix-banner-feedback{width:25%}@media(max-width: 1024px){.sellix-banner.products-sold-hide .sellix-banner-feedback{width:25%}}@media(max-width: 768px){.sellix-banner.products-sold-hide .sellix-banner-feedback{width:100%}}.sellix-banner.products-sold-hide .sellix-banner-info{width:75%}@media(max-width: 1024px){.sellix-banner.products-sold-hide .sellix-banner-info{width:75%}}@media(max-width: 768px){.sellix-banner.products-sold-hide .sellix-banner-info{width:100%}}.sellix-banner-info{width:55%;border-right:1px solid var(--borderColor);display:flex;align-items:center;margin:1.5rem}@media(max-width: 1024px){.sellix-banner-info{font-size:.9rem;width:45%}}@media(max-width: 768px){.sellix-banner-info{align-items:flex-start;border-right:none;width:100%;padding:1rem;margin:0}}.sellix-banner-info-message{color:var(--darkFontColor);font-weight:300;margin-top:.5rem;padding-right:1rem;font-size:13px;line-height:1rem;opacity:.7}@media(max-width: 768px){.sellix-banner-info-message{padding-right:0;font-size:13px;margin-top:.25rem;line-height:17px;padding-right:5rem}}.sellix-banner-container{max-width:1140px;width:100%;padding:0 1rem}.sellix-banner-verified{font-size:1.1rem;margin-left:.2rem;position:absolute !important;right:1rem;top:-0.5rem}.sellix-banner-verified-badge{display:none}@media(max-width: 1024px){.sellix-banner-verified{right:.5rem}}.sellix-banner-verified:hover .sellix-banner-verified-tooltip{display:flex}.sellix-banner-verified-tooltip{position:absolute;top:100%;left:2rem;transform:translateY(-50%);font-size:14px;display:none;max-width:200px;min-width:170px;line-height:1.4;padding:.5rem .75rem;color:#fff;background-color:#000;border-radius:.25rem;overflow:hidden;white-space:nowrap;text-align:center}.sellix-banner-avatar{border-radius:.25rem;height:4rem;width:4rem;margin-right:1.5rem}@media(max-width: 1024px){.sellix-banner-avatar{margin-right:1rem}}.sellix-banner-avatar-container{position:relative}.sellix-banner-avatar-icon{display:inline-flex;justify-content:center;align-items:center;width:70px;height:70px;font-size:70px;color:var(--buttonColor);border-radius:100%;margin-right:1.5rem}.sellix-banner-description{display:flex;flex-direction:column}.sellix-banner-description>div{display:flex;align-items:center}.sellix-banner-feedback{font-size:1rem;color:var(--lightFontColor);margin-right:1.5rem;display:flex;justify-content:space-between;width:45%;font-weight:400}@media(max-width: 1024px){.sellix-banner-feedback{font-size:14px;width:55%}}@media(max-width: 768px){.sellix-banner-feedback{width:100%;padding:0 1rem 1rem 1rem;margin:0;flex-wrap:wrap}.sellix-banner-feedback>div{display:flex;align-items:center;justify-content:flex-start;width:100%}.sellix-banner-feedback>div>div{display:flex;white-space:nowrap;height:2rem;margin-bottom:0;align-items:center;margin-right:.5rem !important}}@media(max-width: 420px){.sellix-banner-feedback{padding-bottom:.5rem}}.sellix-banner-feedback-count{align-items:center;display:flex;margin-top:.75rem;color:var(--lightFontColor);height:2rem;font-size:1rem;font-weight:500}.sellix-banner-feedback-count span{font-weight:400;font-size:.9rem}@media(max-width: 1024px){.sellix-banner-feedback-count{font-size:1rem}}@media(max-width: 768px){.sellix-banner-feedback-count{margin:0 0 0 0}.sellix-banner-feedback-count span{font-size:.9rem}}.sellix-banner-feedback-star{display:flex;align-items:center;height:2rem;margin-top:.75rem;font-size:18px;color:var(--lightFontColor)}.sellix-banner-feedback-star .star-rating-container{display:flex;align-items:center;justify-content:center}.sellix-banner-feedback-star .star-rating-container img{width:18px}.sellix-banner-feedback-star span{margin-right:.1rem}.sellix-banner-feedback-star>span:first-of-type{margin-right:.5rem;font-size:1rem;font-weight:500}@media(max-width: 768px){.sellix-banner-feedback-star>span:first-of-type{margin-right:.25rem}}.sellix-banner-feedback-star a{display:flex;flex-direction:row;align-items:center}.sellix-banner-feedback-star span{display:flex;flex-direction:row}@media(max-width: 1024px){.sellix-banner-feedback-star{font-size:1rem}}@media(max-width: 768px){.sellix-banner-feedback-star{margin-top:0}.sellix-banner-feedback-star>span:last-of-type{display:flex;align-items:center;flex-direction:row;white-space:nowrap}.sellix-banner-feedback-star>span:last-of-type i{margin-top:2px;margin-left:.5rem}}@media(max-width: 640px){.sellix-banner-feedback-star{margin-top:0}.sellix-banner-feedback-star>span:last-of-type{flex-direction:row}}.sellix-banner-feedback-star i{color:var(--lightFontColor);font-style:normal;margin-left:.5rem;white-space:nowrap;font-size:13px;margin-top:0}@media(max-width: 768px){.sellix-banner-feedback-star i{display:flex;justify-content:flex-end;width:100%;margin-left:.3rem}}@media(max-width: 420px){.sellix-banner-feedback-star i{display:none}}.sellix-banner-name{font-weight:400;font-size:1.5rem;color:var(--lightFontColor)}@media(max-width: 768px){.sellix-banner-name{font-size:1.4rem;padding-right:5.5rem;width:100%;display:flex}}.sellix-banner-subscription{display:flex;align-items:center;justify-content:center;background:#5f40e514;color:#8a72ef;text-transform:capitalize;padding:.1rem .5em;font-weight:700;border-radius:.25rem;font-size:14px;height:29px}@media(max-width: 768px){.sellix-banner-subscription{position:absolute;top:1rem;right:1rem;height:25px}}.sellix-banner-subscription:empty{padding:0}.sellix-banner-subscription.business{background:#1bbbf314;color:#1bbbf3}.sellix-banner-subscription.verified{background:#7eef7220;color:#7eef72}.sellix-banner-navs{display:flex;align-items:flex-start;margin:0 auto 1.5rem;position:relative}.sellix-banner-navs:before{position:absolute;bottom:0;content:"";width:100%;height:1px;background:var(--borderColor);z-index:0}@media(max-width: 768px){.sellix-banner-navs{margin-bottom:1rem}}.sellix-banner-navs>div{width:50%;padding:.5rem 0 0 0;flex-wrap:nowrap}@media(max-width: 768px){.sellix-banner-navs>div{width:100%;padding-bottom:0;padding-top:0;display:flex;margin-top:-1rem;justify-content:space-between}}.sellix-banner-navs>div a{color:var(--lightFontColor) !important;border-bottom:1px solid transparent;padding:.5rem .75rem;font-size:14px;transition:all .3s ease;cursor:pointer;white-space:nowrap;border-radius:.5rem .5rem 0 0;display:inline-flex}@media(max-width: 768px){.sellix-banner-navs>div a{display:flex;align-items:center;justify-content:center;border-bottom:1px solid transparent;font-size:.8rem;padding:.75rem .5rem;width:16%;min-width:16%}.sellix-banner-navs>div a>span{display:none}}.sellix-banner-navs>div a[data-tooltip]:hover{border-bottom:2px solid transparent}@media(max-width: 768px){.sellix-banner-navs>div a[data-tooltip]:hover{border-bottom:1px solid transparent}}.sellix-banner-navs>div a:last-child{margin-right:0}.sellix-banner-navs>div a:hover{border-bottom-color:var(--borderColor)}.sellix-banner-navs>div a.active{color:var(--buttonColor) !important;border-bottom-color:var(--buttonColor);background:var(--darkColor);border-radius:.25rem .25rem 0 0;position:relative}@media(max-width: 768px){.sellix-banner-navs>div a.active{border-radius:.125rem .125rem 0 0}}', "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/layout/banner/index.scss"],
                names: [],
                mappings: "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",
                sourcesContent: ['.sellix-banner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  height: auto;\n  border: 1px solid var(--borderColor);\n  border-radius: .5rem;\n  margin: 2rem auto;\n  background: var(--darkColor);\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    margin-top: 1rem;\n  }\n\n  &.products-sold-hide {\n\n    .sellix-banner-feedback {\n      width: 25%;\n\n      @media (max-width: 1024px) {\n        width: 25%;\n      }\n\n      @media (max-width: 768px) {\n        width: 100%;\n      }\n    }\n\n    .sellix-banner-info {\n      width: 75%;\n\n      @media (max-width: 1024px) {\n        width: 75%;\n      }\n\n      @media (max-width: 768px) {\n        width: 100%;\n      }\n    }\n  }\n\n  &-info {\n    width: 55%;\n    border-right: 1px solid var(--borderColor);\n    display: flex;\n    align-items: center;\n    margin: 1.5rem;\n\n    @media (max-width: 1024px) {\n      font-size: .9rem;\n      width: 45%;\n    }\n\n    @media (max-width: 768px) {\n      align-items: flex-start;\n      border-right: none;\n      width: 100%;\n      padding: 1rem;\n      margin: 0;\n    }\n\n    &-message {\n      color: var(--darkFontColor);\n      font-weight: 300;\n      margin-top: .5rem;\n      padding-right: 1rem;\n      font-size: 13px;\n      line-height: 1rem;\n      opacity: .7;\n\n      @media (max-width: 768px) {\n        padding-right: 0;\n        font-size: 13px;\n        margin-top: .25rem;\n        line-height: 17px;\n        padding-right: 5rem;\n      }\n    }\n\n  }\n\n  &-container {\n    max-width: 1140px;\n    width: 100%;\n    padding: 0 1rem;\n  }\n\n  &-verified {\n    font-size: 1.1rem;\n    margin-left: .2rem;\n    position: absolute !important;\n    right: 1rem;\n    top: -.5rem;\n\n    &-badge {\n      display: none;\n    }\n\n    @media (max-width: 1024px) {\n      right: .5rem;\n    }\n\n    &:hover {\n      .sellix-banner-verified-tooltip {\n        display: flex;\n      }\n    }\n\n    &-tooltip {\n      position: absolute;\n      top: 100%;\n      left: 2rem;\n      transform: translateY(-50%);\n      font-size: 14px;\n      display: none;\n      max-width: 200px;\n      min-width: 170px;\n      line-height: 1.4;\n      padding: .5rem .75rem;\n      color: #fff;\n      background-color: #000;\n      border-radius: .25rem;\n      overflow: hidden;\n      white-space: nowrap;\n      text-align: center;\n    }\n  }\n\n  &-avatar {\n    border-radius: .25rem;\n    height: 4rem;\n    width: 4rem;\n    margin-right: 1.5rem;\n\n    @media (max-width: 1024px) {\n      margin-right: 1rem;\n    }\n\n    &-container {\n      position: relative;\n    }\n\n    &-icon {\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      width: 70px;\n      height: 70px;\n      font-size: 70px;\n      color: var(--buttonColor);\n      border-radius: 100%;\n      margin-right: 1.5rem;\n    }\n  }\n\n  &-description {\n    display: flex;\n    flex-direction: column;\n\n    & > div {\n      display: flex;\n      align-items: center;\n    }\n  }\n\n  &-feedback {\n    font-size: 1rem;\n    color: var(--lightFontColor);\n    margin-right: 1.5rem;\n    display: flex;\n    justify-content: space-between;\n    width: 45%;\n    font-weight: 400;\n\n    @media (max-width: 1024px) {\n      font-size: 14px;\n      width: 55%;\n    }\n\n    @media (max-width: 768px) {\n      width: 100%;\n      padding: 0 1rem 1rem 1rem;\n      margin: 0;\n      flex-wrap: wrap;\n\n      & > div {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        width: 100%;\n\n\n        & > div {\n          display: flex;\n          white-space: nowrap;\n          height: 2rem;\n          margin-bottom: 0;\n          align-items: center;\n          margin-right: .5rem !important\n        }\n      }\n    }\n\n\n    @media (max-width: 420px) {\n      padding-bottom: .5rem;\n    }\n\n    &-count {\n      align-items: center;\n      display: flex;\n      margin-top: .75rem;\n      color: var(--lightFontColor);\n      height: 2rem;\n      font-size: 1rem;\n      font-weight: 500;\n\n      span {\n        font-weight: 400;\n        font-size: .9rem;\n      }\n\n      @media (max-width: 1024px) {\n        font-size: 1rem;\n      }\n\n      @media (max-width: 768px) {\n        margin: 0 0 0 0;\n\n        span {\n          font-size: .9rem;\n        }\n      }\n    }\n\n    &-star {\n      display: flex;\n      align-items: center;\n      height: 2rem;\n      margin-top: .75rem;\n      font-size: 18px;\n      color: var(--lightFontColor);\n\n      .star-rating-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        img {\n          width: 18px;\n        }\n      }\n\n      & span {\n        margin-right: .1rem;\n      }\n\n      & > span:first-of-type {\n        margin-right: .5rem;\n        font-size: 1rem;\n        font-weight: 500;\n\n        @media (max-width: 768px) {\n          margin-right: .25rem;\n        }\n      }\n\n      a {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n\n      span {\n        display: flex;\n        flex-direction: row;\n      }\n\n      @media (max-width: 1024px) {\n        font-size: 1rem;\n      }\n\n      @media (max-width: 768px) {\n        margin-top: 0;\n\n        & > span:last-of-type {\n          display: flex;\n          align-items: center;\n          flex-direction: row;\n          white-space: nowrap;\n\n          i {\n            margin-top: 2px;\n            margin-left: .5rem;\n          }\n        }\n      }\n\n      @media (max-width: 640px) {\n        margin-top: 0;\n\n        & > span:last-of-type {\n          flex-direction: row;\n        }\n      }\n\n      i {\n        color: var(--lightFontColor);\n        font-style: normal;\n        margin-left: .5rem;\n        white-space: nowrap;\n        font-size: 13px;\n        margin-top: 0;\n\n        @media (max-width: 768px) {\n          display: flex;\n          justify-content: flex-end;\n          width: 100%;\n          margin-left: .3rem;\n        }\n\n        @media (max-width: 420px) {\n          display: none;\n        }\n      }\n    }\n  }\n\n  &-name {\n    font-weight: 400;\n    font-size: 1.5rem;\n    color: var(--lightFontColor);\n\n    @media (max-width: 768px) {\n      font-size: 1.4rem;\n      padding-right: 5.5rem;\n      width: 100%;\n      display: flex;\n    }\n  }\n\n  &-subscription {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #5f40e514;\n    color: #8A72EF;\n    text-transform: capitalize;\n    padding: .1rem .5em;\n    font-weight: 700;\n    border-radius: .25rem;\n    font-size: 14px;\n    //margin-left: .5rem;\n    height: 29px;\n\n    @media (max-width: 768px) {\n      position: absolute;\n      top: 1rem;\n      right: 1rem;\n      height: 25px;\n    }\n\n    &:empty {\n      padding: 0;\n    }\n\n    &.business {\n      background: #1bbbf314;\n      color: #1BBBF3;\n    }\n    &.verified {\n      background: #7eef7220;\n      color: #7eef72;\n    }\n  }\n\n  &-navs {\n    display: flex;\n    align-items: flex-start;\n    margin: 0 auto 1.5rem;\n    position: relative;\n\n    &:before {\n      position: absolute;\n      bottom: 0;\n      content: "";\n      width: 100%;\n      height: 1px;\n      background: var(--borderColor);\n      z-index: 0;\n    }\n\n    @media (max-width: 768px) {\n      margin-bottom: 1rem;\n    }\n\n    & > div {\n      width: 50%;\n      padding: .5rem 0 0 0;\n      flex-wrap: nowrap;\n\n      @media (max-width: 768px) {\n        width: 100%;\n        padding-bottom: 0;\n        padding-top: 0;\n        display: flex;\n        margin-top: -1rem;\n        justify-content: space-between;\n      }\n\n      & a {\n        color: var(--lightFontColor) !important;\n        border-bottom: 1px solid transparent;\n        padding: .5rem .75rem;\n        font-size: 14px;\n        transition: all .3s ease;\n        cursor: pointer;\n        white-space: nowrap;\n        border-radius: .5rem .5rem 0 0;\n        display: inline-flex;\n\n        &.report {\n          @media (max-width: 768px) {\n            //width: 8%;\n            //min-width: 8%;\n          }\n        }\n\n        @media (max-width: 768px) {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-bottom: 1px solid transparent;\n\n          font-size: .8rem;\n          padding: 0.75rem 0.5rem;\n          width: 16%;\n          min-width: 16%;\n\n          & > span {\n            display: none;\n          }\n        }\n\n        &[data-tooltip]:hover {\n          border-bottom: 2px solid transparent;\n\n          @media (max-width: 768px) {\n            border-bottom: 1px solid transparent;\n          }\n\n        }\n\n        &:last-child {\n          margin-right: 0;\n        }\n\n        &:hover {\n          border-bottom-color: var(--borderColor);\n        }\n\n        &.active {\n          color: var(--buttonColor) !important;\n          border-bottom-color: var(--buttonColor);\n          background: var(--darkColor);\n          border-radius: .25rem .25rem 0 0;\n          position: relative;\n\n          @media (max-width: 768px) {\n            border-radius: .125rem .125rem 0 0;\n          }\n        }\n      }\n    }\n  }\n\n}\n'],
                sourceRoot: ""
            }]);
            const o = a
        },
        85174: (A, n, e) => {
            var i = e(93379),
                r = e.n(i),
                t = e(7795),
                a = e.n(t),
                o = e(90569),
                s = e.n(o),
                C = e(3565),
                l = e.n(C),
                d = e(19216),
                m = e.n(d),
                p = e(44589),
                x = e.n(p),
                c = e(55277),
                h = {};
            h.styleTagTransform = x(), h.setAttributes = l(), h.insert = s().bind(null, "head"), h.domAPI = a(), h.insertStyleElement = m(), r()(c.Z, h), c.Z && c.Z.locals && c.Z.locals
        }
    }
]);
//# sourceMappingURL=ShopBanner-af0d112f.js.map