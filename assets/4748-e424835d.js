"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4748], {
        94748: (A, n, e) => {
            e.d(n, {
                H8: () => G,
                OZ: () => U,
                Tr: () => Z,
                KM: () => N,
                _Z: () => I,
                FP: () => F
            });
            var t = e(78709),
                o = e(25936),
                r = e(93379),
                a = e.n(r),
                i = e(7795),
                s = e.n(i),
                C = e(90569),
                l = e.n(C),
                c = e(3565),
                d = e.n(c),
                m = e(19216),
                p = e.n(m),
                x = e(44589),
                g = e.n(x),
                u = e(39334),
                h = {};
            h.styleTagTransform = g(), h.setAttributes = d(), h.insert = l().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = p(), a()(u.Z, h), u.Z && u.Z.locals && u.Z.locals;
            var b = e(58737),
                f = {};
            f.styleTagTransform = g(), f.setAttributes = d(), f.insert = l().bind(null, "head"), f.domAPI = s(), f.insertStyleElement = p(), a()(b.Z, f), b.Z && b.Z.locals && b.Z.locals;
            var w = e(76359),
                B = {};
            B.styleTagTransform = g(), B.setAttributes = d(), B.insert = l().bind(null, "head"), B.domAPI = s(), B.insertStyleElement = p(), a()(w.Z, B), w.Z && w.Z.locals && w.Z.locals;
            var E = e(83639),
                k = {};
            k.styleTagTransform = g(), k.setAttributes = d(), k.insert = l().bind(null, "head"), k.domAPI = s(), k.insertStyleElement = p(), a()(E.Z, k), E.Z && E.Z.locals && E.Z.locals;
            var v = e(6210),
                y = {};
            y.styleTagTransform = g(), y.setAttributes = d(), y.insert = l().bind(null, "head"), y.domAPI = s(), y.insertStyleElement = p(), a()(v.Z, y), v.Z && v.Z.locals && v.Z.locals;
            var z = e(51324),
                S = {};
            S.styleTagTransform = g(), S.setAttributes = d(), S.insert = l().bind(null, "head"), S.domAPI = s(), S.insertStyleElement = p(), a()(z.Z, S), z.Z && z.Z.locals && z.Z.locals;
            var F = function() {
                    return t.createElement("div", {
                        className: "sw-container"
                    }, t.createElement("div", {
                        className: "sw",
                        style: {
                            width: 140,
                            top: "-.75rem",
                            backgroundColor: "transparent"
                        }
                    }, t.createElement("div", {
                        className: "sw-icon-success"
                    }, t.createElement("div", {
                        className: "elem-1"
                    }), t.createElement("span", {
                        className: "elem-2"
                    }), t.createElement("span", {
                        className: "elem-3"
                    }), t.createElement("div", {
                        className: "elem-4"
                    }), t.createElement("div", {
                        className: "elem-5"
                    }), t.createElement("div", {
                        className: "elem-6"
                    }))))
                },
                N = function(A) {
                    var n = A.openModal,
                        e = A.closeModal,
                        r = A.invoice,
                        a = "",
                        i = "";
                    return r.cashapp_partial_amount_received ? (a = t.createElement(t.Fragment, null, t.createElement("b", null, "$", r.cashapp_partial_amount_received), " of ", t.createElement("b", null, "$", r.total_display)), i = "The payment") : (a = t.createElement(t.Fragment, null, t.createElement("b", null, r.crypto_received), " of ", t.createElement("b", null, r.crypto_amount)), i = "Transaction"), t.createElement(o.u_, {
                        open: n,
                        closeModal: e,
                        className: "partial"
                    }, t.createElement("div", {
                        className: "sellix-modal-header"
                    }, "We haven't received the full amount"), t.createElement("div", {
                        className: "sellix-modal-body"
                    }, t.createElement("div", {
                        className: "d-flex align-items-center"
                    }, t.createElement("div", {
                        className: "partial-icon"
                    }, t.createElement("div", {
                        className: "elem-1"
                    }), t.createElement("div", {
                        className: "elem-2"
                    })), t.createElement("div", {
                        className: "partial-text"
                    }, i, " has been received but it’s not enough. We only received ", a, ", please send the remaining amount in order to fulfill the invoice"))))
                },
                U = function(A) {
                    var n = "The invoice has been voided, this means that your payment may not went as expected or that you reached the time limit.";
                    return A.refunded && (n = "The transaction has been refunded, you have received your money back and the invoice has been canceled."), A.reversed && (n = "PayPal has reversed this transaction, you have received your money back and the invoice has been canceled."), t.createElement("div", {
                        className: "cancelled-container"
                    }, t.createElement("div", {
                        className: "cancelled"
                    }, t.createElement("div", {
                        className: "cancelled-icon"
                    }, t.createElement("span", {
                        className: "elem-1"
                    }, t.createElement("span", {
                        className: "elem-2"
                    }), t.createElement("span", {
                        className: "elem-3"
                    }))), t.createElement("div", {
                        className: "cancelled-text"
                    }, n)))
                },
                Z = function() {
                    return t.createElement("div", {
                        className: "dispute-container"
                    }, t.createElement("div", {
                        className: "dispute"
                    }, t.createElement("div", {
                        className: "dispute-icon"
                    }, t.createElement("i", {
                        className: "fa fa-gavel"
                    })), t.createElement("div", {
                        className: "dispute-text"
                    }, "This invoice is currently under a dispute from the customer.")))
                },
                G = function(A) {
                    var n = A.cashapp,
                        e = A.message;
                    return t.createElement("div", {
                        className: "await-container"
                    }, t.createElement("div", {
                        className: "await"
                    }, t.createElement("div", {
                        className: "await-icon"
                    }, t.createElement("div", {
                        className: "elem"
                    }), t.createElement("i", {
                        className: "fas fa-hourglass-half"
                    })), t.createElement("div", {
                        className: "await-text"
                    }, n ? e ? t.createElement(e, null) : t.createElement("span", null, "The shop must now accept your ", t.createElement("b", {
                        style: {
                            color: "#00d81e"
                        }
                    }, "Cash App"), " transaction. ", t.createElement("br", null), "Once this action has been processed, you will automatically receive an email with the product you bought.  ", t.createElement("br", null), "This action may require a few hours, you can close this page.") : t.createElement("span", null, "We have received your transaction.", t.createElement("br", null), "Once it reaches the required confirmations, the product you bought will be shipped to your email."))))
                },
                I = function(A) {
                    return A.message, t.createElement("div", {
                        className: "processing-container"
                    }, t.createElement("div", {
                        className: "processing"
                    }, t.createElement("div", {
                        className: "processing-icon"
                    }, t.createElement("div", {
                        className: "elem"
                    }), t.createElement("i", {
                        className: "fas fa-hourglass-half"
                    })), t.createElement("div", {
                        className: "processing-text"
                    }, t.createElement("span", null, "The invoice is currently being processed, this might take up to 5 minutes. Bear with us for a while whilst we get your digital good ASAP!"))))
                }
        },
        39334: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".await{display:flex;overflow:hidden;outline:none;width:100%;margin:auto;text-align:center;position:relative;flex-direction:column;justify-content:center;max-width:100%;z-index:7}.await-text{text-align:center;color:var(--darkFontColor);font-size:.9rem;font-weight:300;overflow-wrap:break-word;line-height:1.5rem;padding:0 .5rem 1rem .5rem}.await-icon{width:80px;height:80px;border:6px solid var(--borderColor);border-radius:50%;margin:1rem auto;position:relative;box-sizing:content-box}.await-icon i{z-index:2;position:absolute;color:var(--darkFontColor);font-size:2.5rem;top:50%;left:50%;transform:translate(-50%, -50%) rotate(180deg);animation:3s ease .5s infinite normal none running animateAwait;transition:all 3s ease}.await-icon .elem{width:80px;height:80px;border:6px solid var(--borderColor);background-color:var(--darkColor);border-radius:50%;box-sizing:content-box;position:absolute;left:-6px;top:-6px;z-index:2}.await-container{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:0;overflow:hidden}@keyframes animateAwait{0%,20%{transition:transform 3s ease;transform:translate(-50%, -50%) rotate(0deg)}80%,100%{transition:transform 3s ease;transform:translate(-50%, -50%) rotate(180deg)}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/await.scss"],
                names: [],
                mappings: "AAAA,OACE,YAAA,CACA,eAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,sBAAA,CACA,cAAA,CAEA,SAAA,CAEA,YACE,iBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,wBAAA,CACA,kBAAA,CACA,0BAAA,CAGF,YACE,UAAA,CACA,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CAEA,cACE,SAAA,CACA,iBAAA,CACA,0BAAA,CACA,gBAAA,CACA,OAAA,CACA,QAAA,CACA,8CAAA,CACA,+DAAA,CACA,sBAAA,CAGF,kBACE,UAAA,CACA,WAAA,CACA,mCAAA,CACA,iCAAA,CACA,iBAAA,CACA,sBAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CAIJ,iBACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CAIJ,wBACI,OACE,4BAAA,CACA,4CAAA,CAEF,SACE,4BAAA,CACA,8CAAA,CAAA",
                sourcesContent: [".await {\n  display: flex;\n  overflow: hidden;\n  outline: none;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 100%;\n  //background-color: var(--lightColor) !important;\n  z-index: 7;\n\n  &-text {\n    text-align: center;\n    color: var(--darkFontColor);\n    font-size: .9rem;\n    font-weight: 300;\n    overflow-wrap: break-word;\n    line-height: 1.5rem;\n    padding: 0 .5rem 1rem .5rem;\n  }\n\n  &-icon {\n    width: 80px;\n    height: 80px;\n    border: 6px solid var(--borderColor);\n    border-radius: 50%;\n    margin: 1rem auto;\n    position: relative;\n    box-sizing: content-box;\n\n    i {\n      z-index: 2;\n      position: absolute;\n      color: var(--darkFontColor);\n      font-size: 2.5rem;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(180deg);\n      animation: 3s ease .5s infinite normal none running animateAwait;\n      transition: all 3s ease;\n    }\n\n    .elem {\n      width: 80px;\n      height: 80px;\n      border: 6px solid var(--borderColor);\n      background-color: var(--darkColor);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -6px;\n      top: -6px;\n      z-index: 2;\n    }\n  }\n\n  &-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n    overflow: hidden;\n  }\n}\n\n@keyframes animateAwait {\n    0%, 20% {\n      transition: transform 3s ease;\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    80%, 100% {\n      transition: transform 3s ease;\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n}"],
                sourceRoot: ""
            }]);
            const i = a
        },
        76359: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".cancelled{display:flex;overflow:hidden;outline:none;width:100%;margin:auto;border-radius:.5rem;text-align:center;position:relative;max-width:100%;background-color:transparent;flex-direction:column}.cancelled-container{z-index:5400;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:0;overflow:hidden}.cancelled-text{text-align:center;color:var(--darkFontColor);font-size:.9rem;font-weight:300;overflow-wrap:break-word;line-height:1.5rem;padding:0 1rem 1rem 1rem}.cancelled-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-color:#d43f3a;border-radius:50%;margin:20px auto;position:relative;box-sizing:content-box;animation:.5s ease 1s 1 normal none running animateErrorIcon}.cancelled-icon .elem-1{position:relative;display:block;animation:.5s ease 1s 1 normal none running animateXMark}.cancelled-icon .elem-2{position:absolute;height:5px;width:47px;background-color:#d9534f;display:block;top:37px;border-radius:2px;transform:rotate(45deg);left:17px}.cancelled-icon .elem-3{position:absolute;height:5px;width:47px;background-color:#d9534f;display:block;top:37px;border-radius:2px;transform:rotate(-45deg);right:16px}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);-webkit-transform:rotateX(0deg);opacity:1}}@keyframes animateXMark{0%{transform:scale(0.4);-webkit-transform:scale(0.4);margin-top:26px;opacity:0}50%{transform:scale(0.4);-webkit-transform:scale(0.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/cancelled.scss"],
                names: [],
                mappings: "AAAA,WACE,YAAA,CACA,eAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,4BAAA,CACA,qBAAA,CAEA,qBACE,YAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CAGF,gBACE,iBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,wBAAA,CACA,kBAAA,CACA,wBAAA,CAGF,gBACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,oBAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CACA,4DAAA,CAEA,wBACE,iBAAA,CACA,aAAA,CACA,wDAAA,CAGF,wBACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,wBAAA,CACA,aAAA,CACA,QAAA,CACA,iBAAA,CACA,uBAAA,CACA,SAAA,CAGF,wBACE,iBAAA,CACA,UAAA,CACA,UAAA,CACA,wBAAA,CACA,aAAA,CACA,QAAA,CACA,iBAAA,CACA,wBAAA,CACA,UAAA,CAON,4BACE,GACE,yBAAA,CACA,iCAAA,CACA,SAAA,CAEF,KACE,uBAAA,CACA,+BAAA,CACA,SAAA,CAAA,CAGJ,wBACE,GACE,oBAAA,CACA,4BAAA,CACA,eAAA,CACA,SAAA,CAEF,IACE,oBAAA,CACA,4BAAA,CACA,eAAA,CACA,SAAA,CAEF,IACE,qBAAA,CACA,6BAAA,CACA,eAAA,CAEF,KACE,kBAAA,CACA,0BAAA,CACA,YAAA,CACA,SAAA,CAAA",
                sourcesContent: [".cancelled {\n  display: flex;\n  overflow: hidden;\n  outline: none;\n  width: 100%;\n  margin: auto;\n  border-radius: .5rem;\n  text-align: center;\n  position: relative;\n  max-width: 100%;\n  background-color: transparent;\n  flex-direction: column;\n\n  &-container {\n    z-index: 5400;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n    overflow: hidden;\n  }\n\n  &-text {\n    text-align: center;\n    color: var(--darkFontColor);\n    font-size: .9rem;\n    font-weight: 300;\n    overflow-wrap: break-word;\n    line-height: 1.5rem;\n    padding: 0 1rem 1rem 1rem;\n  }\n\n  &-icon {\n    width: 80px;\n    height: 80px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: rgb(212, 63, 58);\n    border-radius: 50%;\n    margin: 20px auto;\n    position: relative;\n    box-sizing: content-box;\n    animation: 0.5s ease 1s 1 normal none running animateErrorIcon;\n\n    .elem-1 {\n      position: relative;\n      display: block;\n      animation: 0.5s ease 1s 1 normal none running animateXMark;\n    }\n\n    .elem-2 {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: rgb(217, 83, 79);\n      display: block;\n      top: 37px;\n      border-radius: 2px;\n      transform: rotate(45deg);\n      left: 17px;\n    }\n\n    .elem-3 {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: rgb(217, 83, 79);\n      display: block;\n      top: 37px;\n      border-radius: 2px;\n      transform: rotate(-45deg);\n      right: 16px;\n    }\n  }\n\n}\n\n\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0;\n  }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0;\n  }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px;\n  }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1;\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const i = a
        },
        83639: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".dispute{display:flex;overflow:hidden;outline:none;width:100%;margin:auto;border-radius:.5rem;text-align:center;position:relative;max-width:100%;background-color:transparent;flex-direction:column}.dispute-container{z-index:5400;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:0;overflow:hidden}.dispute-text{text-align:center;color:var(--darkFontColor);font-size:.9rem;font-weight:300;overflow-wrap:break-word;line-height:1.5rem;padding:0 1rem}.dispute-icon{width:80px;height:80px;display:flex;align-items:center;justify-content:center;align-self:center;margin-bottom:1rem;border-radius:100%;border:2px solid #d43f3a}.dispute-icon i{color:#d43f3a;font-size:3rem}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/dispute.scss"],
                names: [],
                mappings: "AAAA,SACE,YAAA,CACA,eAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,4BAAA,CACA,qBAAA,CAEA,mBACE,YAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CAGF,cACE,iBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,wBAAA,CACA,kBAAA,CACA,cAAA,CAGF,cACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,wBAAA,CAEA,gBACE,aAAA,CACA,cAAA",
                sourcesContent: [".dispute {\n  display: flex;\n  overflow: hidden;\n  outline: none;\n  width: 100%;\n  margin: auto;\n  border-radius: .5rem;\n  text-align: center;\n  position: relative;\n  max-width: 100%;\n  background-color: transparent;\n  flex-direction: column;\n\n  &-container {\n    z-index: 5400;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n    overflow: hidden;\n  }\n\n  &-text {\n    text-align: center;\n    color: var(--darkFontColor);\n    font-size: .9rem;\n    font-weight: 300;\n    overflow-wrap: break-word;\n    line-height: 1.5rem;\n    padding: 0 1rem;\n  }\n\n  &-icon {\n    width: 80px;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-bottom: 1rem;\n    border-radius: 100%;\n    border: 2px solid #d43f3a;\n\n    i {\n      color: #d43f3a;\n      font-size: 3rem;\n    }\n  }\n\n}\n"],
                sourceRoot: ""
            }]);
            const i = a
        },
        58737: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".partial-text{color:var(--darkFontColor);font-size:.9rem;font-weight:300;line-height:1.5rem}.partial-icon{width:80px;min-width:80px;height:80px;border-width:4px;border-style:solid;border-color:#46b8da;border-radius:50%;margin:20px auto;margin-right:1.5rem;position:relative;box-sizing:content-box}.partial-icon .elem-1{position:absolute;width:5px;height:29px;left:50%;bottom:17px;border-radius:2px;margin-left:-2px;background-color:#5bc0de}.partial-icon .elem-2{position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;left:50%;top:19px;background-color:#5bc0de}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/partial.scss"],
                names: [],
                mappings: "AAEE,cACE,0BAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CAGF,cACE,UAAA,CACA,cAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,oBAAA,CACA,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,iBAAA,CACA,sBAAA,CAEA,sBACE,iBAAA,CACA,SAAA,CACA,WAAA,CACA,QAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,wBAAA,CAGF,sBACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,gBAAA,CACA,QAAA,CACA,QAAA,CACA,wBAAA",
                sourcesContent: [".partial {\n\n  &-text {\n    color: var(--darkFontColor);\n    font-size: .9rem;\n    font-weight: 300;\n    line-height: 1.5rem;\n  }\n\n  &-icon {\n    width: 80px;\n    min-width: 80px;\n    height: 80px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: rgb(70, 184, 218);\n    border-radius: 50%;\n    margin: 20px auto;\n    margin-right: 1.5rem;\n    position: relative;\n    box-sizing: content-box;\n\n    .elem-1 {\n      position: absolute;\n      width: 5px;\n      height: 29px;\n      left: 50%;\n      bottom: 17px;\n      border-radius: 2px;\n      margin-left: -2px;\n      background-color: rgb(91, 192, 222);\n    }\n\n    .elem-2 {\n      position: absolute;\n      width: 7px;\n      height: 7px;\n      border-radius: 50%;\n      margin-left: -3px;\n      left: 50%;\n      top: 19px;\n      background-color: rgb(91, 192, 222);\n    }\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const i = a
        },
        6210: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".processing{display:flex;overflow:hidden;outline:none;width:100%;margin:auto;text-align:center;position:relative;flex-direction:column;justify-content:center;max-width:100%;z-index:7}.processing-text{text-align:center;color:var(--darkFontColor);font-size:.9rem;font-weight:300;overflow-wrap:break-word;line-height:1.5rem;padding:0 .5rem 1rem .5rem}.processing-icon{width:80px;height:80px;border:6px solid #1bbbf34f;border-radius:50%;margin:1rem auto;position:relative;box-sizing:content-box}.processing-icon i{z-index:2;position:absolute;color:#1bbbf3;font-size:2.5rem;top:50%;left:50%;transform:translate(-50%, -50%) rotate(180deg);animation:3s ease .5s infinite normal none running animateAwait;transition:all 3s ease}.processing-icon .elem{width:80px;height:80px;border:6px solid #1bbbf34f;background-color:var(--darkColor);border-radius:50%;box-sizing:content-box;position:absolute;left:-6px;top:-6px;z-index:2}.processing-container{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:0;overflow:hidden}@keyframes animateAwait{0%,20%{transition:transform 3s ease;transform:translate(-50%, -50%) rotate(0deg)}80%,100%{transition:transform 3s ease;transform:translate(-50%, -50%) rotate(180deg)}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/processing.scss"],
                names: [],
                mappings: "AAAA,YACE,YAAA,CACA,eAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,sBAAA,CACA,cAAA,CAEA,SAAA,CAEA,iBACE,iBAAA,CACA,0BAAA,CACA,eAAA,CACA,eAAA,CACA,wBAAA,CACA,kBAAA,CACA,0BAAA,CAGF,iBACE,UAAA,CACA,WAAA,CACA,0BAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CAEA,mBACE,SAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,OAAA,CACA,QAAA,CACA,8CAAA,CACA,+DAAA,CACA,sBAAA,CAGF,uBACE,UAAA,CACA,WAAA,CACA,0BAAA,CACA,iCAAA,CACA,iBAAA,CACA,sBAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CAIJ,sBACE,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CAIJ,wBACI,OACE,4BAAA,CACA,4CAAA,CAEF,SACE,4BAAA,CACA,8CAAA,CAAA",
                sourcesContent: [".processing {\n  display: flex;\n  overflow: hidden;\n  outline: none;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 100%;\n  //background-color: var(--lightColor) !important;\n  z-index: 7;\n\n  &-text {\n    text-align: center;\n    color: var(--darkFontColor);\n    font-size: .9rem;\n    font-weight: 300;\n    overflow-wrap: break-word;\n    line-height: 1.5rem;\n    padding: 0 .5rem 1rem .5rem;\n  }\n\n  &-icon {\n    width: 80px;\n    height: 80px;\n    border: 6px solid #1bbbf34f;\n    border-radius: 50%;\n    margin: 1rem auto;\n    position: relative;\n    box-sizing: content-box;\n\n    i {\n      z-index: 2;\n      position: absolute;\n      color: #1bbbf3;\n      font-size: 2.5rem;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(180deg);\n      animation: 3s ease .5s infinite normal none running animateAwait;\n      transition: all 3s ease;\n    }\n\n    .elem {\n      width: 80px;\n      height: 80px;\n      border: 6px solid #1bbbf34f;\n      background-color: var(--darkColor);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -6px;\n      top: -6px;\n      z-index: 2;\n    }\n  }\n\n  &-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n    overflow: hidden;\n  }\n}\n\n@keyframes animateAwait {\n    0%, 20% {\n      transition: transform 3s ease;\n      transform: translate(-50%, -50%) rotate(0deg);\n    }\n    80%, 100% {\n      transition: transform 3s ease;\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n}"],
                sourceRoot: ""
            }]);
            const i = a
        },
        51324: (A, n, e) => {
            e.d(n, {
                Z: () => i
            });
            var t = e(64162),
                o = e.n(t),
                r = e(68922),
                a = e.n(r)()(o());
            a.push([A.id, ".sw-container{z-index:11;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:140px;height:auto;margin-bottom:0;overflow:hidden}.sw-container .sw{display:flex;overflow:hidden;background-color:#241e47;outline:none;width:100%;margin:auto;text-align:center;position:relative;flex-direction:column;justify-content:center;max-width:100%;z-index:5600;min-height:140px;border-radius:0}.sw-container .sw-icon-success{width:79px;height:79px;border-width:6px;border-style:solid;border-color:#28a745;border-radius:50%;margin:1rem auto;position:relative;box-sizing:content-box;transform:scale(1.25)}.sw-container .sw-icon-success .elem-1{border-radius:120px 0 0 120px;position:absolute;width:67px;height:100px;background:var(--darkColor);transform:rotate(-45deg);top:-2px;left:-33px;transform-origin:60px 60px}.sw-container .sw-icon-success .elem-2{height:6px;background-color:#28a745;display:block;border-radius:5px;position:absolute;z-index:3;width:25px;left:14px;top:46px;transform:rotate(45deg);animation:.75s ease 0s 1 normal none running animateSuccessTip}.sw-container .sw-icon-success .elem-3{height:6px;background-color:#28a745;display:block;border-radius:5px;position:absolute;z-index:3;width:47px;right:8px;top:38px;transform:rotate(-45deg);animation:.75s ease 0s 1 normal none running animateSuccessLong}.sw-container .sw-icon-success .elem-4{width:80px;height:80px;border:6px solid #28a745;background-color:transparent;border-radius:50%;box-sizing:content-box;position:absolute;left:-6px;top:-6px;z-index:2}.sw-container .sw-icon-success .elem-5{width:6px;height:90px;background-color:var(--darkColor);position:absolute;left:25px;top:6px;z-index:1;transform:rotate(-45deg)}.sw-container .sw-icon-success .elem-6{border-radius:0 120px 120px 0;position:absolute;width:60px;height:120px;background:var(--darkColor);transform:rotate(-45deg);top:-11px;left:30px;transform-origin:0 60px;animation:4.25s ease-in 0s 1 normal none running rotatePlaceholder}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px;background-color:#28a745}54%{width:0;left:1px;top:19px;background-color:#28a745}70%{width:50px;left:-8px;top:37px;background-color:#28a745;transition:all .1s ease}84%{width:17px;left:21px;top:3rem;background-color:#28a745;transition:all .1s ease}100%{width:25px;left:14px;top:45px;transition:all .1s ease;background-color:#28a745}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px;background-color:#28a745}65%{width:0;right:46px;top:54px;background-color:#28a745}84%{width:55px;right:0;top:35px;background-color:#28a745;transition:all .1s ease}100%{width:47px;right:8px;top:38px;background-color:#28a745;transition:all .1s ease}}@keyframes animateSuccessBack{0%{border-color:#693ce32b;background-color:#623eea3d;transition:all .7s ease}50%{border-color:#693ce32b;background-color:#623eea3d;transition:all .7s ease}100%{border-color:#28a745;background-color:#28a745;transition:all .7s ease}}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}", "", {
                version: 3,
                sources: ["webpack://./client/entrypoints/shop/screens/invoice/sections/alerts/success.scss"],
                names: [],
                mappings: "AAAA,cACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,WAAA,CACA,eAAA,CACA,eAAA,CAEA,kBACE,YAAA,CACA,eAAA,CACA,wBAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,sBAAA,CACA,cAAA,CACA,YAAA,CACA,gBAAA,CACA,eAAA,CAEA,+BACE,UAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,oBAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CACA,qBAAA,CAEA,uCACE,6BAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,2BAAA,CACA,wBAAA,CACA,QAAA,CACA,UAAA,CACA,0BAAA,CAGF,uCACE,UAAA,CACA,wBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CACA,QAAA,CACA,uBAAA,CACA,8DAAA,CAGF,uCACE,UAAA,CACA,wBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CACA,QAAA,CACA,wBAAA,CACA,+DAAA,CAGF,uCACE,UAAA,CACA,WAAA,CACA,wBAAA,CACA,4BAAA,CACA,iBAAA,CACA,sBAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CAGF,uCACE,SAAA,CACA,WAAA,CACA,iCAAA,CACA,iBAAA,CACA,SAAA,CACA,OAAA,CACA,SAAA,CACA,wBAAA,CAGF,uCACE,6BAAA,CACA,iBAAA,CACA,UAAA,CACA,YAAA,CACA,2BAAA,CACA,wBAAA,CACA,SAAA,CACA,SAAA,CACA,uBAAA,CACA,kEAAA,CAUR,6BACE,GACE,OAAA,CACA,QAAA,CACA,QAAA,CACA,wBAAA,CAEF,IACE,OAAA,CACA,QAAA,CACA,QAAA,CACA,wBAAA,CAEF,IACE,UAAA,CACA,SAAA,CACA,QAAA,CACA,wBAAA,CACA,uBAAA,CAEF,IACE,UAAA,CACA,SAAA,CACA,QAAA,CACA,wBAAA,CACA,uBAAA,CAEF,KACE,UAAA,CACA,SAAA,CACA,QAAA,CACA,uBAAA,CACA,wBAAA,CAAA,CAGJ,8BACE,GACE,OAAA,CACA,UAAA,CACA,QAAA,CACA,wBAAA,CAEF,IACE,OAAA,CACA,UAAA,CACA,QAAA,CACA,wBAAA,CAEF,IACE,UAAA,CACA,OAAA,CACA,QAAA,CACA,wBAAA,CACA,uBAAA,CAEF,KACE,UAAA,CACA,SAAA,CACA,QAAA,CACA,wBAAA,CACA,uBAAA,CAAA,CAGJ,8BACE,GACE,sBAAA,CACA,0BAAA,CACA,uBAAA,CAEF,IACE,sBAAA,CACA,0BAAA,CACA,uBAAA,CAEF,KACE,oBAAA,CACA,wBAAA,CACA,uBAAA,CAAA,CAGJ,6BACE,GACE,wBAAA,CAEF,GACE,wBAAA,CAEF,IACE,yBAAA,CAEF,KACE,yBAAA,CAAA",
                sourcesContent: [".sw-container {\n  z-index: 11;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-height: 140px;\n  height: auto;\n  margin-bottom: 0;\n  overflow: hidden;\n\n  .sw {\n    display: flex;\n    overflow: hidden;\n    background-color: #241e47;\n    outline: none;\n    width: 100%;\n    margin: auto;\n    text-align: center;\n    position: relative;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 100%;\n    z-index: 5600;\n    min-height: 140px;\n    border-radius: 0;\n\n    &-icon-success {\n      width: 79px;\n      height: 79px;\n      border-width: 6px;\n      border-style: solid;\n      border-color: #28a745;\n      border-radius: 50%;\n      margin: 1rem auto;\n      position: relative;\n      box-sizing: content-box;\n      transform: scale(1.25);\n\n      .elem-1 {\n        border-radius: 120px 0 0 120px;\n        position: absolute;\n        width: 67px;\n        height: 100px;\n        background: var(--darkColor);\n        transform: rotate(-45deg);\n        top: -2px;\n        left: -33px;\n        transform-origin: 60px 60px;\n      }\n\n      .elem-2 {\n        height: 6px;\n        background-color: #28a745;\n        display: block;\n        border-radius: 5px;\n        position: absolute;\n        z-index: 3;\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        transform: rotate(45deg);\n        animation: 0.75s ease 0s 1 normal none running animateSuccessTip;\n      }\n\n      .elem-3 {\n        height: 6px;\n        background-color: #28a745;\n        display: block;\n        border-radius: 5px;\n        position: absolute;\n        z-index: 3;\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        transform: rotate(-45deg);\n        animation: 0.75s ease 0s 1 normal none running animateSuccessLong;\n      }\n\n      .elem-4 {\n        width: 80px;\n        height: 80px;\n        border: 6px solid #28a745;\n        background-color: transparent;\n        border-radius: 50%;\n        box-sizing: content-box;\n        position: absolute;\n        left: -6px;\n        top: -6px;\n        z-index: 2;\n      }\n\n      .elem-5 {\n        width: 6px;\n        height: 90px;\n        background-color: var(--darkColor);\n        position: absolute;\n        left: 25px;\n        top: 6px;\n        z-index: 1;\n        transform: rotate(-45deg);\n      }\n\n      .elem-6 {\n        border-radius: 0 120px 120px 0;\n        position: absolute;\n        width: 60px;\n        height: 120px;\n        background: var(--darkColor);\n        transform: rotate(-45deg);\n        top: -11px;\n        left: 30px;\n        transform-origin: 0 60px;\n        animation: 4.25s ease-in 0s 1 normal none running rotatePlaceholder;\n      }\n    }\n\n  }\n}\n\n\n\n\n@keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n    background-color: #28a745;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n    background-color: #28a745;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n    background-color: #28a745;\n    transition: all .1s ease;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 3rem;\n    background-color: #28a745;\n    transition: all .1s ease;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n    transition: all .1s ease;\n    background-color: #28a745;\n  }\n}\n@keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n    background-color: #28a745;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n    background-color: #28a745;\n  }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px;\n    background-color: #28a745;\n    transition: all .1s ease;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n    background-color: #28a745;\n    transition: all .1s ease;\n  }\n}\n@keyframes animateSuccessBack {\n  0% {\n    border-color: #693ce32b;\n    background-color: #623eea3d;\n    transition: all .7s ease;\n  }\n  50% {\n    border-color: #693ce32b;\n    background-color: #623eea3d;\n    transition: all .7s ease;\n  }\n  100% {\n    border-color: #28a745;\n    background-color: #28a745;\n    transition: all .7s ease;\n  }\n}\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n"],
                sourceRoot: ""
            }]);
            const i = a
        }
    }
]);
//# sourceMappingURL=4748-e424835d.js.map