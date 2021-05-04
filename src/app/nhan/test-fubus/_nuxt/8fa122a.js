/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        435: function(t, e, n) {
            "use strict";
            var r, o = n(19),
                c = n(60),
                l = n(4),
                f = n(23),
                h = n(251),
                d = ((r = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', r["not-registered"] = "Firebase Installation is not registered.", r["installation-not-found"] = "Firebase Installation not found.", r["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', r["app-offline"] = "Could not process request. Application offline.", r["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", r),
                v = new f.b("installations", "Installations", d);

            function m(t) {
                return t instanceof f.c && t.code.includes("request-failed")
            }

            function y(t) {
                return "https://firebaseinstallations.googleapis.com/v1/projects/" + t.projectId + "/installations"
            }

            function w(t) {
                return {
                    token: t.token,
                    requestStatus: 2,
                    expiresIn: (e = t.expiresIn, Number(e.replace("s", "000"))),
                    creationTime: Date.now()
                };
                var e
            }

            function O(t, e) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var n, r;
                    return Object(l.d)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, e.json()];
                            case 1:
                                return n = o.sent(), r = n.error, [2, v.create("request-failed", {
                                    requestName: t,
                                    serverCode: r.code,
                                    serverMessage: r.message,
                                    serverStatus: r.status
                                })]
                        }
                    }))
                }))
            }

            function j(t) {
                var e = t.apiKey;
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function I(t, e) {
                var n = e.refreshToken,
                    r = j(t);
                return r.append("Authorization", function(t) {
                    return "FIS_v2 " + t
                }(n)), r
            }

            function S(t) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e;
                    return Object(l.d)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, t()];
                            case 1:
                                return (e = n.sent()).status >= 500 && e.status < 600 ? [2, t()] : [2, e]
                        }
                    }))
                }))
            }

            function E(t, e) {
                var n = e.fid;
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e, r, body, o, c, f;
                    return Object(l.d)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return e = y(t), r = j(t), body = {
                                    fid: n,
                                    authVersion: "FIS_v2",
                                    appId: t.appId,
                                    sdkVersion: "w:0.4.18"
                                }, o = {
                                    method: "POST",
                                    headers: r,
                                    body: JSON.stringify(body)
                                }, [4, S((function() {
                                    return fetch(e, o)
                                }))];
                            case 1:
                                return (c = l.sent()).ok ? [4, c.json()] : [3, 3];
                            case 2:
                                return f = l.sent(), [2, {
                                    fid: f.fid || n,
                                    registrationStatus: 2,
                                    refreshToken: f.refreshToken,
                                    authToken: w(f.authToken)
                                }];
                            case 3:
                                return [4, O("Create Installation", c)];
                            case 4:
                                throw l.sent()
                        }
                    }))
                }))
            }

            function L(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }
            var C = /^[cdef][\w-]{21}$/;

            function T() {
                try {
                    var t = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
                    var e = function(t) {
                        return (e = t, btoa(String.fromCharCode.apply(String, Object(l.f)(e))).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
                        var e
                    }(t);
                    return C.test(e) ? e : ""
                } catch (t) {
                    return ""
                }
            }

            function R(t) {
                return t.appName + "!" + t.appId
            }
            var N = new Map;

            function D(t, e) {
                var n = R(t);
                k(n, e),
                    function(t, e) {
                        var n = _();
                        n && n.postMessage({
                            key: t,
                            fid: e
                        });
                        A()
                    }(n, e)
            }

            function k(t, e) {
                var n, r, o = N.get(t);
                if (o) try {
                    for (var c = Object(l.g)(o), f = c.next(); !f.done; f = c.next()) {
                        (0, f.value)(e)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        f && !f.done && (r = c.return) && r.call(c)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }
            var P = null;

            function _() {
                return !P && "BroadcastChannel" in self && ((P = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(t) {
                    k(t.data.key, t.data.fid)
                }), P
            }

            function A() {
                0 === N.size && P && (P.close(), P = null)
            }
            var H, F = "firebase-installations-store",
                B = null;

            function M() {
                return B || (B = Object(h.openDb)("firebase-installations-database", 1, (function(t) {
                    switch (t.oldVersion) {
                        case 0:
                            t.createObjectStore(F)
                    }
                }))), B
            }

            function U(t, e) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var n, r, o, c, f;
                    return Object(l.d)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return n = R(t), [4, M()];
                            case 1:
                                return r = l.sent(), o = r.transaction(F, "readwrite"), [4, (c = o.objectStore(F)).get(n)];
                            case 2:
                                return f = l.sent(), [4, c.put(e, n)];
                            case 3:
                                return l.sent(), [4, o.complete];
                            case 4:
                                return l.sent(), f && f.fid === e.fid || D(t, e.fid), [2, e]
                        }
                    }))
                }))
            }

            function V(t) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e, n, r;
                    return Object(l.d)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e = R(t), [4, M()];
                            case 1:
                                return n = o.sent(), [4, (r = n.transaction(F, "readwrite")).objectStore(F).delete(e)];
                            case 2:
                                return o.sent(), [4, r.complete];
                            case 3:
                                return o.sent(), [2]
                        }
                    }))
                }))
            }

            function z(t, e) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var n, r, o, c, f, h;
                    return Object(l.d)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return n = R(t), [4, M()];
                            case 1:
                                return r = l.sent(), o = r.transaction(F, "readwrite"), [4, (c = o.objectStore(F)).get(n)];
                            case 2:
                                return f = l.sent(), void 0 !== (h = e(f)) ? [3, 4] : [4, c.delete(n)];
                            case 3:
                                return l.sent(), [3, 6];
                            case 4:
                                return [4, c.put(h, n)];
                            case 5:
                                l.sent(), l.label = 6;
                            case 6:
                                return [4, o.complete];
                            case 7:
                                return l.sent(), !h || f && f.fid === h.fid || D(t, h.fid), [2, h]
                        }
                    }))
                }))
            }

            function x(t) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e, n, r;
                    return Object(l.d)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, z(t, (function(n) {
                                    var r = function(t) {
                                            return $(t || {
                                                fid: T(),
                                                registrationStatus: 0
                                            })
                                        }(n),
                                        o = function(t, e) {
                                            if (0 === e.registrationStatus) {
                                                if (!navigator.onLine) {
                                                    var n = Promise.reject(v.create("app-offline"));
                                                    return {
                                                        installationEntry: e,
                                                        registrationPromise: n
                                                    }
                                                }
                                                var r = {
                                                        fid: e.fid,
                                                        registrationStatus: 1,
                                                        registrationTime: Date.now()
                                                    },
                                                    o = function(t, e) {
                                                        return Object(l.b)(this, void 0, void 0, (function() {
                                                            var n, r;
                                                            return Object(l.d)(this, (function(o) {
                                                                switch (o.label) {
                                                                    case 0:
                                                                        return o.trys.push([0, 2, , 7]), [4, E(t, e)];
                                                                    case 1:
                                                                        return n = o.sent(), [2, U(t, n)];
                                                                    case 2:
                                                                        return m(r = o.sent()) && 409 === r.customData.serverCode ? [4, V(t)] : [3, 4];
                                                                    case 3:
                                                                        return o.sent(), [3, 6];
                                                                    case 4:
                                                                        return [4, U(t, {
                                                                            fid: e.fid,
                                                                            registrationStatus: 0
                                                                        })];
                                                                    case 5:
                                                                        o.sent(), o.label = 6;
                                                                    case 6:
                                                                        throw r;
                                                                    case 7:
                                                                        return [2]
                                                                }
                                                            }))
                                                        }))
                                                    }(t, r);
                                                return {
                                                    installationEntry: r,
                                                    registrationPromise: o
                                                }
                                            }
                                            return 1 === e.registrationStatus ? {
                                                installationEntry: e,
                                                registrationPromise: G(t)
                                            } : {
                                                installationEntry: e
                                            }
                                        }(t, r);
                                    return e = o.registrationPromise, o.installationEntry
                                }))];
                            case 1:
                                return "" !== (n = o.sent()).fid ? [3, 3] : (r = {}, [4, e]);
                            case 2:
                                return [2, (r.installationEntry = o.sent(), r)];
                            case 3:
                                return [2, {
                                    installationEntry: n,
                                    registrationPromise: e
                                }]
                        }
                    }))
                }))
            }

            function G(t) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e, n, r, o;
                    return Object(l.d)(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, W(t)];
                            case 1:
                                e = c.sent(), c.label = 2;
                            case 2:
                                return 1 !== e.registrationStatus ? [3, 5] : [4, L(100)];
                            case 3:
                                return c.sent(), [4, W(t)];
                            case 4:
                                return e = c.sent(), [3, 2];
                            case 5:
                                return 0 !== e.registrationStatus ? [3, 7] : [4, x(t)];
                            case 6:
                                return n = c.sent(), r = n.installationEntry, (o = n.registrationPromise) ? [2, o] : [2, r];
                            case 7:
                                return [2, e]
                        }
                    }))
                }))
            }

            function W(t) {
                return z(t, (function(t) {
                    if (!t) throw v.create("installation-not-found");
                    return $(t)
                }))
            }

            function $(t) {
                return 1 === (e = t).registrationStatus && e.registrationTime + 1e4 < Date.now() ? {
                    fid: t.fid,
                    registrationStatus: 0
                } : t;
                var e
            }

            function J(t, e) {
                var n = t.appConfig,
                    r = t.platformLoggerProvider;
                return Object(l.b)(this, void 0, void 0, (function() {
                    var t, o, c, body, f, h, d;
                    return Object(l.d)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return t = function(t, e) {
                                    var n = e.fid;
                                    return y(t) + "/" + n + "/authTokens:generate"
                                }(n, e), o = I(n, e), (c = r.getImmediate({
                                    optional: !0
                                })) && o.append("x-firebase-client", c.getPlatformInfoString()), body = {
                                    installation: {
                                        sdkVersion: "w:0.4.18"
                                    }
                                }, f = {
                                    method: "POST",
                                    headers: o,
                                    body: JSON.stringify(body)
                                }, [4, S((function() {
                                    return fetch(t, f)
                                }))];
                            case 1:
                                return (h = l.sent()).ok ? [4, h.json()] : [3, 3];
                            case 2:
                                return d = l.sent(), [2, w(d)];
                            case 3:
                                return [4, O("Generate Auth Token", h)];
                            case 4:
                                throw l.sent()
                        }
                    }))
                }))
            }

            function K(t, e) {
                return void 0 === e && (e = !1), Object(l.b)(this, void 0, void 0, (function() {
                    var n, r, o;
                    return Object(l.d)(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, z(t.appConfig, (function(r) {
                                    if (!Z(r)) throw v.create("not-registered");
                                    var o = r.authToken;
                                    if (!e && function(t) {
                                            return 2 === t.requestStatus && ! function(t) {
                                                var e = Date.now();
                                                return e < t.creationTime || t.creationTime + t.expiresIn < e + 36e5
                                            }(t)
                                        }(o)) return r;
                                    if (1 === o.requestStatus) return n = function(t, e) {
                                        return Object(l.b)(this, void 0, void 0, (function() {
                                            var n, r;
                                            return Object(l.d)(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, Y(t.appConfig)];
                                                    case 1:
                                                        n = o.sent(), o.label = 2;
                                                    case 2:
                                                        return 1 !== n.authToken.requestStatus ? [3, 5] : [4, L(100)];
                                                    case 3:
                                                        return o.sent(), [4, Y(t.appConfig)];
                                                    case 4:
                                                        return n = o.sent(), [3, 2];
                                                    case 5:
                                                        return 0 === (r = n.authToken).requestStatus ? [2, K(t, e)] : [2, r]
                                                }
                                            }))
                                        }))
                                    }(t, e), r;
                                    if (!navigator.onLine) throw v.create("app-offline");
                                    var c = function(t) {
                                        var e = {
                                            requestStatus: 1,
                                            requestTime: Date.now()
                                        };
                                        return Object(l.a)(Object(l.a)({}, t), {
                                            authToken: e
                                        })
                                    }(r);
                                    return n = function(t, e) {
                                        return Object(l.b)(this, void 0, void 0, (function() {
                                            var n, r, o;
                                            return Object(l.d)(this, (function(c) {
                                                switch (c.label) {
                                                    case 0:
                                                        return c.trys.push([0, 3, , 8]), [4, J(t, e)];
                                                    case 1:
                                                        return n = c.sent(), o = Object(l.a)(Object(l.a)({}, e), {
                                                            authToken: n
                                                        }), [4, U(t.appConfig, o)];
                                                    case 2:
                                                        return c.sent(), [2, n];
                                                    case 3:
                                                        return !m(r = c.sent()) || 401 !== r.customData.serverCode && 404 !== r.customData.serverCode ? [3, 5] : [4, V(t.appConfig)];
                                                    case 4:
                                                        return c.sent(), [3, 7];
                                                    case 5:
                                                        return o = Object(l.a)(Object(l.a)({}, e), {
                                                            authToken: {
                                                                requestStatus: 0
                                                            }
                                                        }), [4, U(t.appConfig, o)];
                                                    case 6:
                                                        c.sent(), c.label = 7;
                                                    case 7:
                                                        throw r;
                                                    case 8:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(t, c), c
                                }))];
                            case 1:
                                return r = c.sent(), n ? [4, n] : [3, 3];
                            case 2:
                                return o = c.sent(), [3, 4];
                            case 3:
                                o = r.authToken, c.label = 4;
                            case 4:
                                return [2, o]
                        }
                    }))
                }))
            }

            function Y(t) {
                return z(t, (function(t) {
                    if (!Z(t)) throw v.create("not-registered");
                    var e, n = t.authToken;
                    return 1 === (e = n).requestStatus && e.requestTime + 1e4 < Date.now() ? Object(l.a)(Object(l.a)({}, t), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : t
                }))
            }

            function Z(t) {
                return void 0 !== t && 2 === t.registrationStatus
            }

            function Q(t) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var e;
                    return Object(l.d)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, x(t)];
                            case 1:
                                return (e = n.sent().registrationPromise) ? [4, e] : [3, 3];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }

            function X(t, e) {
                return Object(l.b)(this, void 0, void 0, (function() {
                    var n, r, o, c;
                    return Object(l.d)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return n = function(t, e) {
                                    var n = e.fid;
                                    return y(t) + "/" + n
                                }(t, e), r = I(t, e), o = {
                                    method: "DELETE",
                                    headers: r
                                }, [4, S((function() {
                                    return fetch(n, o)
                                }))];
                            case 1:
                                return (c = l.sent()).ok ? [3, 3] : [4, O("Delete Installation", c)];
                            case 2:
                                throw l.sent();
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }

            function tt(t, e) {
                var n = t.appConfig;
                return function(t, e) {
                        _();
                        var n = R(t),
                            r = N.get(n);
                        r || (r = new Set, N.set(n, r)), r.add(e)
                    }(n, e),
                    function() {
                        ! function(t, e) {
                            var n = R(t),
                                r = N.get(n);
                            r && (r.delete(e), 0 === r.size && N.delete(n), A())
                        }(n, e)
                    }
            }

            function et(t) {
                return v.create("missing-app-config-values", {
                    valueName: t
                })
            }(H = o.a).INTERNAL.registerComponent(new c.a("installations", (function(t) {
                var e = t.getProvider("app").getImmediate(),
                    n = {
                        appConfig: function(t) {
                            var e, n;
                            if (!t || !t.options) throw et("App Configuration");
                            if (!t.name) throw et("App Name");
                            try {
                                for (var r = Object(l.g)(["projectId", "apiKey", "appId"]), o = r.next(); !o.done; o = r.next()) {
                                    var c = o.value;
                                    if (!t.options[c]) throw et(c)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return {
                                appName: t.name,
                                projectId: t.options.projectId,
                                apiKey: t.options.apiKey,
                                appId: t.options.appId
                            }
                        }(e),
                        platformLoggerProvider: t.getProvider("platform-logger")
                    };
                return {
                    app: e,
                    getId: function() {
                        return function(t) {
                            return Object(l.b)(this, void 0, void 0, (function() {
                                var e, n, r;
                                return Object(l.d)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, x(t.appConfig)];
                                        case 1:
                                            return e = o.sent(), n = e.installationEntry, (r = e.registrationPromise) ? r.catch(console.error) : K(t).catch(console.error), [2, n.fid]
                                    }
                                }))
                            }))
                        }(n)
                    },
                    getToken: function(t) {
                        return function(t, e) {
                            return void 0 === e && (e = !1), Object(l.b)(this, void 0, void 0, (function() {
                                return Object(l.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, Q(t.appConfig)];
                                        case 1:
                                            return n.sent(), [4, K(t, e)];
                                        case 2:
                                            return [2, n.sent().token]
                                    }
                                }))
                            }))
                        }(n, t)
                    },
                    delete: function() {
                        return function(t) {
                            return Object(l.b)(this, void 0, void 0, (function() {
                                var e, n;
                                return Object(l.d)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, z(e = t.appConfig, (function(t) {
                                                if (!t || 0 !== t.registrationStatus) return t
                                            }))];
                                        case 1:
                                            if (!(n = r.sent())) return [3, 6];
                                            if (1 !== n.registrationStatus) return [3, 2];
                                            throw v.create("delete-pending-registration");
                                        case 2:
                                            if (2 !== n.registrationStatus) return [3, 6];
                                            if (navigator.onLine) return [3, 3];
                                            throw v.create("app-offline");
                                        case 3:
                                            return [4, X(e, n)];
                                        case 4:
                                            return r.sent(), [4, V(e)];
                                        case 5:
                                            r.sent(), r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }(n)
                    },
                    onIdChange: function(t) {
                        return tt(n, t)
                    }
                }
            }), "PUBLIC")), H.registerVersion("@firebase/installations", "0.4.18")
        },
        60: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(4),
                o = n(23),
                c = function() {
                    function t(t, e, n) {
                        this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
                    }
                    return t.prototype.setInstantiationMode = function(t) {
                        return this.instantiationMode = t, this
                    }, t.prototype.setMultipleInstances = function(t) {
                        return this.multipleInstances = t, this
                    }, t.prototype.setServiceProps = function(t) {
                        return this.serviceProps = t, this
                    }, t
                }(),
                l = function() {
                    function t(t, e) {
                        this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
                    }
                    return t.prototype.get = function(t) {
                        void 0 === t && (t = "[DEFAULT]");
                        var e = this.normalizeInstanceIdentifier(t);
                        if (!this.instancesDeferred.has(e)) {
                            var n = new o.a;
                            this.instancesDeferred.set(e, n);
                            try {
                                var r = this.getOrInitializeService(e);
                                r && n.resolve(r)
                            } catch (t) {}
                        }
                        return this.instancesDeferred.get(e).promise
                    }, t.prototype.getImmediate = function(t) {
                        var e = Object(r.a)({
                                identifier: "[DEFAULT]",
                                optional: !1
                            }, t),
                            n = e.identifier,
                            o = e.optional,
                            c = this.normalizeInstanceIdentifier(n);
                        try {
                            var l = this.getOrInitializeService(c);
                            if (!l) {
                                if (o) return null;
                                throw Error("Service " + this.name + " is not available")
                            }
                            return l
                        } catch (t) {
                            if (o) return null;
                            throw t
                        }
                    }, t.prototype.getComponent = function() {
                        return this.component
                    }, t.prototype.setComponent = function(component) {
                        var t, e;
                        if (component.name !== this.name) throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
                        if (this.component) throw Error("Component for " + this.name + " has already been provided");
                        if (this.component = component, function(component) {
                                return "EAGER" === component.instantiationMode
                            }(component)) try {
                            this.getOrInitializeService("[DEFAULT]")
                        } catch (t) {}
                        try {
                            for (var n = Object(r.g)(this.instancesDeferred.entries()), o = n.next(); !o.done; o = n.next()) {
                                var c = Object(r.e)(o.value, 2),
                                    l = c[0],
                                    f = c[1],
                                    h = this.normalizeInstanceIdentifier(l);
                                try {
                                    var d = this.getOrInitializeService(h);
                                    f.resolve(d)
                                } catch (t) {}
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, t.prototype.clearInstance = function(t) {
                        void 0 === t && (t = "[DEFAULT]"), this.instancesDeferred.delete(t), this.instances.delete(t)
                    }, t.prototype.delete = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t;
                            return Object(r.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), [4, Promise.all(Object(r.f)(t.filter((function(t) {
                                            return "INTERNAL" in t
                                        })).map((function(t) {
                                            return t.INTERNAL.delete()
                                        })), t.filter((function(t) {
                                            return "_delete" in t
                                        })).map((function(t) {
                                            return t._delete()
                                        }))))];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, t.prototype.isComponentSet = function() {
                        return null != this.component
                    }, t.prototype.getOrInitializeService = function(t) {
                        var e = this.instances.get(t);
                        return !e && this.component && (e = this.component.instanceFactory(this.container, function(t) {
                            return "[DEFAULT]" === t ? void 0 : t
                        }(t)), this.instances.set(t, e)), e || null
                    }, t.prototype.normalizeInstanceIdentifier = function(t) {
                        return this.component ? this.component.multipleInstances ? t : "[DEFAULT]" : t
                    }, t
                }();
            var f = function() {
                function t(t) {
                    this.name = t, this.providers = new Map
                }
                return t.prototype.addComponent = function(component) {
                    var t = this.getProvider(component.name);
                    if (t.isComponentSet()) throw new Error("Component " + component.name + " has already been registered with " + this.name);
                    t.setComponent(component)
                }, t.prototype.addOrOverwriteComponent = function(component) {
                    this.getProvider(component.name).isComponentSet() && this.providers.delete(component.name), this.addComponent(component)
                }, t.prototype.getProvider = function(t) {
                    if (this.providers.has(t)) return this.providers.get(t);
                    var e = new l(t, this);
                    return this.providers.set(t, e), e
                }, t.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }, t
            }()
        },
        90: function(t, e, n) {
            "use strict";

            function r() {
                for (var s = 0, i = 0, t = arguments.length; i < t; i++) s += arguments[i].length;
                var e = Array(s),
                    n = 0;
                for (i = 0; i < t; i++)
                    for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++) e[n] = a[r];
                return e
            }
            var o;
            n.d(e, "a", (function() {
                return m
            })), n.d(e, "b", (function() {
                return y
            })), n.d(e, "c", (function() {
                return w
            }));
            var c, l = [];
            ! function(t) {
                t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
            }(c || (c = {}));
            var f = {
                    debug: c.DEBUG,
                    verbose: c.VERBOSE,
                    info: c.INFO,
                    warn: c.WARN,
                    error: c.ERROR,
                    silent: c.SILENT
                },
                h = c.INFO,
                d = ((o = {})[c.DEBUG] = "log", o[c.VERBOSE] = "log", o[c.INFO] = "info", o[c.WARN] = "warn", o[c.ERROR] = "error", o),
                v = function(t, e) {
                    for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
                    if (!(e < t.logLevel)) {
                        var c = (new Date).toISOString(),
                            l = d[e];
                        if (!l) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                        console[l].apply(console, r(["[" + c + "]  " + t.name + ":"], n))
                    }
                },
                m = function() {
                    function t(t) {
                        this.name = t, this._logLevel = h, this._logHandler = v, this._userLogHandler = null, l.push(this)
                    }
                    return Object.defineProperty(t.prototype, "logLevel", {
                        get: function() {
                            return this._logLevel
                        },
                        set: function(t) {
                            if (!(t in c)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
                            this._logLevel = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.setLogLevel = function(t) {
                        this._logLevel = "string" == typeof t ? f[t] : t
                    }, Object.defineProperty(t.prototype, "logHandler", {
                        get: function() {
                            return this._logHandler
                        },
                        set: function(t) {
                            if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userLogHandler", {
                        get: function() {
                            return this._userLogHandler
                        },
                        set: function(t) {
                            this._userLogHandler = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.debug = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._userLogHandler && this._userLogHandler.apply(this, r([this, c.DEBUG], t)), this._logHandler.apply(this, r([this, c.DEBUG], t))
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._userLogHandler && this._userLogHandler.apply(this, r([this, c.VERBOSE], t)), this._logHandler.apply(this, r([this, c.VERBOSE], t))
                    }, t.prototype.info = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._userLogHandler && this._userLogHandler.apply(this, r([this, c.INFO], t)), this._logHandler.apply(this, r([this, c.INFO], t))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._userLogHandler && this._userLogHandler.apply(this, r([this, c.WARN], t)), this._logHandler.apply(this, r([this, c.WARN], t))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._userLogHandler && this._userLogHandler.apply(this, r([this, c.ERROR], t)), this._logHandler.apply(this, r([this, c.ERROR], t))
                    }, t
                }();

            function y(t) {
                l.forEach((function(e) {
                    e.setLogLevel(t)
                }))
            }

            function w(t, e) {
                for (var n = function(n) {
                        var r = null;
                        e && e.level && (r = f[e.level]), n.userLogHandler = null === t ? null : function(e, n) {
                            for (var o = [], l = 2; l < arguments.length; l++) o[l - 2] = arguments[l];
                            var f = o.map((function(t) {
                                if (null == t) return null;
                                if ("string" == typeof t) return t;
                                if ("number" == typeof t || "boolean" == typeof t) return t.toString();
                                if (t instanceof Error) return t.message;
                                try {
                                    return JSON.stringify(t)
                                } catch (t) {
                                    return null
                                }
                            })).filter((function(t) {
                                return t
                            })).join(" ");
                            n >= (null != r ? r : e.logLevel) && t({
                                level: c[n].toLowerCase(),
                                message: f,
                                args: o,
                                type: e.name
                            })
                        }
                    }, r = 0, o = l; r < o.length; r++) {
                    n(o[r])
                }
            }
        }
    }
]);