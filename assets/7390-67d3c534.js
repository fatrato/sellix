"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7390], {
        87390: (t, e, n) => {
            n.d(e, {
                Tb: () => Y
            });
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, r.apply(this, arguments)
            };

            function i(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, i, s = n.call(t),
                    o = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = s.next()).done;) o.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = s.return) && n.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
                return t
            }
            var o = n(24387);

            function a() {
                var t = (0, o.R)(),
                    e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var n = new Uint16Array(8);
                    e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                    var r = function(t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                }))
            }
            var c = n(48505),
                u = n(44326),
                p = (0, o.R)(),
                h = "Sentry Logger ",
                _ = ["debug", "info", "warn", "error", "log", "assert"];

            function f(t) {
                var e = (0, o.R)();
                if (!("console" in e)) return t();
                var n = e.console,
                    r = {};
                _.forEach((function(t) {
                    t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                }));
                var i = t();
                return Object.keys(r).forEach((function(t) {
                    n[t] = r[t]
                })), i
            }
            var d = function() {
                    function t() {
                        this._enabled = !1
                    }
                    return t.prototype.disable = function() {
                        this._enabled = !1
                    }, t.prototype.enable = function() {
                        this._enabled = !0
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && f((function() {
                            var e;
                            (e = p.console).log.apply(e, s([h + "[Log]:"], t))
                        }))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && f((function() {
                            var e;
                            (e = p.console).warn.apply(e, s([h + "[Warn]:"], t))
                        }))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && f((function() {
                            var e;
                            (e = p.console).error.apply(e, s([h + "[Error]:"], t))
                        }))
                    }, t
                }(),
                l = p.__SENTRY__ || {},
                g = l.logger || new d;
            (0, u.c)() && (l.logger = g, p.__SENTRY__ = l);
            var v = n(58029),
                y = Object.prototype.toString;

            function S(t) {
                return function(t, e) {
                    return y.call(t) === "[object " + e + "]"
                }(t, "Object")
            }

            function x(t) {
                return Boolean(t && t.then && "function" == typeof t.then)
            }
            var b = function() {
                    function t(t) {
                        var e = this;
                        this._state = 0, this._handlers = [], this._resolve = function(t) {
                            e._setResult(1, t)
                        }, this._reject = function(t) {
                            e._setResult(2, t)
                        }, this._setResult = function(t, n) {
                            0 === e._state && (x(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                        }, this._executeHandlers = function() {
                            if (0 !== e._state) {
                                var t = e._handlers.slice();
                                e._handlers = [], t.forEach((function(t) {
                                    t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0)
                                }))
                            }
                        };
                        try {
                            t(this._resolve, this._reject)
                        } catch (t) {
                            this._reject(t)
                        }
                    }
                    return t.prototype.then = function(e, n) {
                        var r = this;
                        return new t((function(t, i) {
                            r._handlers.push([!1, function(n) {
                                if (e) try {
                                    t(e(n))
                                } catch (t) {
                                    i(t)
                                } else t(n)
                            }, function(e) {
                                if (n) try {
                                    t(n(e))
                                } catch (t) {
                                    i(t)
                                } else i(e)
                            }]), r._executeHandlers()
                        }))
                    }, t.prototype.catch = function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }, t.prototype.finally = function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var i, s;
                            return n.then((function(t) {
                                s = !1, i = t, e && e()
                            }), (function(t) {
                                s = !0, i = t, e && e()
                            })).then((function() {
                                s ? r(i) : t(i)
                            }))
                        }))
                    }, t
                }(),
                m = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    return t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = s(e._breadcrumbs), n._tags = r({}, e._tags), n._extra = r({}, e._extra), n._contexts = r({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = s(e._eventProcessors), n._requestSession = e._requestSession), n
                    }, t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._session && this._session.update({
                            user: t
                        }), this._notifyScopeListeners(), this
                    }, t.prototype.getUser = function() {
                        return this._user
                    }, t.prototype.getRequestSession = function() {
                        return this._requestSession
                    }, t.prototype.setRequestSession = function(t) {
                        return this._requestSession = t, this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = r(r({}, this._tags), t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = r(r({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = r(r({}, this._extra), t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = r(r({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransactionName = function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this.setTransactionName(t)
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return null === e ? delete this._contexts[t] : this._contexts = r(r({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.prototype.getTransaction = function() {
                        var t = this.getSpan();
                        return t && t.transaction
                    }, t.prototype.setSession = function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }, t.prototype.getSession = function() {
                        return this._session
                    }, t.prototype.update = function(e) {
                        if (!e) return this;
                        if ("function" == typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = r(r({}, this._tags), e._tags), this._extra = r(r({}, this._extra), e._extra), this._contexts = r(r({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : S(e) && (e = e, this._tags = r(r({}, this._tags), e.tags), this._extra = r(r({}, this._extra), e.extra), this._contexts = r(r({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = "number" == typeof e ? Math.min(e, 100) : 100;
                        if (n <= 0) return this;
                        var i = r({
                            timestamp: (0, c.yW)()
                        }, t);
                        return this._breadcrumbs = s(this._breadcrumbs, [i]).slice(-n), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype.applyToEvent = function(t, e) {
                        if (this._extra && Object.keys(this._extra).length && (t.extra = r(r({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r(r({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = r(r({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = r(r({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = r({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var n = this._span.transaction && this._span.transaction.name;
                            n && (t.tags = r({
                                transaction: n
                            }, t.tags))
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = s(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(s(function() {
                            var t = (0, o.R)();
                            return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
                        }(), this._eventProcessors), t, e)
                    }, t.prototype.setSDKProcessingMetadata = function(t) {
                        return this._sdkProcessingMetadata = r(r({}, this._sdkProcessingMetadata), t), this
                    }, t.prototype._notifyEventProcessors = function(t, e, n, i) {
                        var s = this;
                        return void 0 === i && (i = 0), new b((function(o, a) {
                            var c = t[i];
                            if (null === e || "function" != typeof c) o(e);
                            else {
                                var u = c(r({}, e), n);
                                x(u) ? u.then((function(e) {
                                    return s._notifyEventProcessors(t, e, n, i + 1).then(o)
                                })).then(null, a) : s._notifyEventProcessors(t, u, n, i + 1).then(o).then(null, a)
                            }
                        }))
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t
                }();

            function E(t) {
                var e, n;
                if (S(t)) {
                    var r = t,
                        i = {};
                    try {
                        for (var s = function(t) {
                                var e = "function" == typeof Symbol && Symbol.iterator,
                                    n = e && t[e],
                                    r = 0;
                                if (n) return n.call(t);
                                if (t && "number" == typeof t.length) return {
                                    next: function() {
                                        return t && r >= t.length && (t = void 0), {
                                            value: t && t[r++],
                                            done: !t
                                        }
                                    }
                                };
                                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                            }(Object.keys(r)), o = s.next(); !o.done; o = s.next()) {
                            var a = o.value;
                            void 0 !== r[a] && (i[a] = E(r[a]))
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (n = s.return) && n.call(s)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return i
                }
                return Array.isArray(t) ? t.map(E) : t
            }
            var T = function() {
                    function t(t) {
                        this.errors = 0, this.sid = a(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                        var e = (0, c.ph)();
                        this.timestamp = e, this.started = e, t && this.update(t)
                    }
                    return t.prototype.update = function(t) {
                        if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || (0, c.ph)(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), t.sid && (this.sid = 32 === t.sid.length ? t.sid : a()), void 0 !== t.init && (this.init = t.init), !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), this.ignoreDuration) this.duration = void 0;
                        else if ("number" == typeof t.duration) this.duration = t.duration;
                        else {
                            var e = this.timestamp - this.started;
                            this.duration = e >= 0 ? e : 0
                        }
                        t.release && (this.release = t.release), t.environment && (this.environment = t.environment), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                    }, t.prototype.close = function(t) {
                        t ? this.update({
                            status: t
                        }) : "ok" === this.status ? this.update({
                            status: "exited"
                        }) : this.update()
                    }, t.prototype.toJSON = function() {
                        return E({
                            sid: "" + this.sid,
                            init: this.init,
                            started: new Date(1e3 * this.started).toISOString(),
                            timestamp: new Date(1e3 * this.timestamp).toISOString(),
                            status: this.status,
                            errors: this.errors,
                            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                            duration: this.duration,
                            attrs: {
                                release: this.release,
                                environment: this.environment,
                                ip_address: this.ipAddress,
                                user_agent: this.userAgent
                            }
                        })
                    }, t
                }(),
                w = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new m), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = e, t && this.bindClient(t)
                    }
                    return t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = m.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }, t.prototype.popScope = function() {
                        return !(this.getStack().length <= 1 || !this.getStack().pop())
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = e && e.event_id ? e.event_id : a(),
                            i = e;
                        if (!e) {
                            var s = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                s = t
                            }
                            i = {
                                originalException: t,
                                syntheticException: s
                            }
                        }
                        return this._invokeClient("captureException", t, r(r({}, i), {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var i = this._lastEventId = n && n.event_id ? n.event_id : a(),
                            s = n;
                        if (!n) {
                            var o = void 0;
                            try {
                                throw new Error(t)
                            } catch (t) {
                                o = t
                            }
                            s = {
                                originalException: t,
                                syntheticException: o
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, r(r({}, s), {
                            event_id: i
                        })), i
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = e && e.event_id ? e.event_id : a();
                        return "transaction" !== t.type && (this._lastEventId = n), this._invokeClient("captureEvent", t, r(r({}, e), {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop(),
                            i = n.scope,
                            s = n.client;
                        if (i && s) {
                            var o = s.getOptions && s.getOptions() || {},
                                a = o.beforeBreadcrumb,
                                u = void 0 === a ? null : a,
                                p = o.maxBreadcrumbs,
                                h = void 0 === p ? 100 : p;
                            if (!(h <= 0)) {
                                var _ = (0, c.yW)(),
                                    d = r({
                                        timestamp: _
                                    }, t),
                                    l = u ? f((function() {
                                        return u(d, e)
                                    })) : d;
                                null !== l && i.addBreadcrumb(l, h)
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getScope();
                        e && e.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getScope();
                        e && e.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getScope();
                        e && e.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getScope();
                        n && n.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getScope();
                        n && n.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getScope();
                        n && n.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        n && r && t(n)
                    }, t.prototype.run = function(t) {
                        var e = k(this);
                        try {
                            t(this)
                        } finally {
                            k(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (e) {
                            return (0, u.c)() && g.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t) {
                        return this._callExtensionMethod("startSpan", t)
                    }, t.prototype.startTransaction = function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype.captureSession = function(t) {
                        if (void 0 === t && (t = !1), t) return this.endSession();
                        this._sendSessionUpdate()
                    }, t.prototype.endSession = function() {
                        var t = this.getStackTop(),
                            e = t && t.scope,
                            n = e && e.getSession();
                        n && n.close(), this._sendSessionUpdate(), e && e.setSession()
                    }, t.prototype.startSession = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            i = e.client,
                            s = i && i.getOptions() || {},
                            a = s.release,
                            c = s.environment,
                            u = ((0, o.R)().navigator || {}).userAgent,
                            p = new T(r(r(r({
                                release: a,
                                environment: c
                            }, n && {
                                user: n.getUser()
                            }), u && {
                                userAgent: u
                            }), t));
                        if (n) {
                            var h = n.getSession && n.getSession();
                            h && "ok" === h.status && h.update({
                                status: "exited"
                            }), this.endSession(), n.setSession(p)
                        }
                        return p
                    }, t.prototype._sendSessionUpdate = function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client;
                        if (e) {
                            var r = e.getSession && e.getSession();
                            r && n && n.captureSession && n.captureSession(r)
                        }
                    }, t.prototype._invokeClient = function(t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var i = this.getStackTop(),
                            o = i.scope,
                            a = i.client;
                        a && a[t] && (e = a)[t].apply(e, s(n, [o]))
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = R(),
                            i = r.__SENTRY__;
                        if (i && i.extensions && "function" == typeof i.extensions[t]) return i.extensions[t].apply(this, e);
                        (0, u.c)() && g.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function R() {
                var t = (0, o.R)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function k(t) {
                var e = R(),
                    n = O(e);
                return A(e, t), n
            }

            function N() {
                var t = R();
                return L(t) && !O(t).isOlderThan(4) || A(t, new w), (0, v.KV)() ? function(t) {
                    try {
                        var e = R().__SENTRY__,
                            n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                        if (!n) return O(t);
                        if (!L(n) || O(n).isOlderThan(4)) {
                            var r = O(t).getStackTop();
                            A(n, new w(r.client, m.clone(r.scope)))
                        }
                        return O(n)
                    } catch (e) {
                        return O(t)
                    }
                }(t) : O(t)
            }

            function L(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function O(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new w), t.__SENTRY__.hub
            }

            function A(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }

            function Y(t, e) {
                return function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var r = N();
                    if (r && r[t]) return r[t].apply(r, s(e));
                    throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
                }("captureException", t, {
                    captureContext: e,
                    originalException: t,
                    syntheticException: new Error("Sentry syntheticException")
                })
            }
        },
        44326: (t, e, n) => {
            function r() {
                return !0
            }

            function i() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
            n.d(e, {
                c: () => r,
                n: () => i
            })
        },
        24387: (t, e, n) => {
            n.d(e, {
                R: () => s
            });
            var r = n(58029),
                i = {};

            function s() {
                return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
            }
        },
        58029: (t, e, n) => {
            n.d(e, {
                KV: () => i,
                l$: () => s
            });
            var r = n(44326);

            function i() {
                return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
            }

            function s(t, e) {
                return t.require(e)
            }
            t = n.hmd(t)
        },
        48505: (t, e, n) => {
            n.d(e, {
                yW: () => c,
                ph: () => u
            });
            var r = n(24387),
                i = n(58029);
            t = n.hmd(t);
            var s = {
                    nowSeconds: function() {
                        return Date.now() / 1e3
                    }
                },
                o = (0, i.KV)() ? function() {
                    try {
                        return (0, i.l$)(t, "perf_hooks").performance
                    } catch (t) {
                        return
                    }
                }() : function() {
                    var t = (0, r.R)().performance;
                    if (t && t.now) return {
                        now: function() {
                            return t.now()
                        },
                        timeOrigin: Date.now() - t.now()
                    }
                }(),
                a = void 0 === o ? s : {
                    nowSeconds: function() {
                        return (o.timeOrigin + o.now()) / 1e3
                    }
                },
                c = s.nowSeconds.bind(s),
                u = a.nowSeconds.bind(a);
            ! function() {
                var t = (0, r.R)().performance;
                if (t && t.now) {
                    var e = 36e5,
                        n = t.now(),
                        i = Date.now(),
                        s = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
                        o = s < e,
                        a = t.timing && t.timing.navigationStart,
                        c = "number" == typeof a ? Math.abs(a + n - i) : e;
                    (o || c < e) && (s <= c && t.timeOrigin)
                }
            }()
        }
    }
]);
//# sourceMappingURL=7390-67d3c534.js.map