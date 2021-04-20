/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        19: function(t, e, n) {
            "use strict";
            var r, o, c = n(4),
                h = n(23),
                l = n(60),
                f = n(90),
                d = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", r["bad-app-name"] = "Illegal App name: '{$appName}", r["duplicate-app"] = "Firebase App named '{$appName}' already exists", r["app-deleted"] = "Firebase App named '{$appName}' already deleted", r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", r["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", r),
                v = new h.b("app", "Firebase", d),
                m = ((o = {})["@firebase/app"] = "fire-core", o["@firebase/analytics"] = "fire-analytics", o["@firebase/auth"] = "fire-auth", o["@firebase/database"] = "fire-rtdb", o["@firebase/functions"] = "fire-fn", o["@firebase/installations"] = "fire-iid", o["@firebase/messaging"] = "fire-fcm", o["@firebase/performance"] = "fire-perf", o["@firebase/remote-config"] = "fire-rc", o["@firebase/storage"] = "fire-gcs", o["@firebase/firestore"] = "fire-fst", o["fire-js"] = "fire-js", o["firebase-wrapper"] = "fire-js-all", o),
                y = new f.a("@firebase/app"),
                w = function() {
                    function t(t, e, n) {
                        var r, o, f = this;
                        this.firebase_ = n, this.isDeleted_ = !1, this.name_ = e.name, this.automaticDataCollectionEnabled_ = e.automaticDataCollectionEnabled || !1, this.options_ = Object(h.h)(t), this.container = new l.b(e.name), this._addComponent(new l.a("app", (function() {
                            return f
                        }), "PUBLIC"));
                        try {
                            for (var d = Object(c.g)(this.firebase_.INTERNAL.components.values()), v = d.next(); !v.done; v = d.next()) {
                                var component = v.value;
                                this._addComponent(component)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (o = d.return) && o.call(d)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                    return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
                        get: function() {
                            return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                        },
                        set: function(t) {
                            this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this.checkDestroyed_(), this.name_
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "options", {
                        get: function() {
                            return this.checkDestroyed_(), this.options_
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.delete = function() {
                        var t = this;
                        return new Promise((function(e) {
                            t.checkDestroyed_(), e()
                        })).then((function() {
                            return t.firebase_.INTERNAL.removeApp(t.name_), Promise.all(t.container.getProviders().map((function(t) {
                                return t.delete()
                            })))
                        })).then((function() {
                            t.isDeleted_ = !0
                        }))
                    }, t.prototype._getService = function(t, e) {
                        return void 0 === e && (e = "[DEFAULT]"), this.checkDestroyed_(), this.container.getProvider(t).getImmediate({
                            identifier: e
                        })
                    }, t.prototype._removeServiceInstance = function(t, e) {
                        void 0 === e && (e = "[DEFAULT]"), this.container.getProvider(t).clearInstance(e)
                    }, t.prototype._addComponent = function(component) {
                        try {
                            this.container.addComponent(component)
                        } catch (t) {
                            y.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, t)
                        }
                    }, t.prototype._addOrOverwriteComponent = function(component) {
                        this.container.addOrOverwriteComponent(component)
                    }, t.prototype.checkDestroyed_ = function() {
                        if (this.isDeleted_) throw v.create("app-deleted", {
                            appName: this.name_
                        })
                    }, t
                }();
            w.prototype.name && w.prototype.options || w.prototype.delete || console.log("dc");
            var I = function t() {
                    var e = function(t) {
                        var e = {},
                            n = new Map,
                            r = {
                                __esModule: !0,
                                initializeApp: function(n, o) {
                                    void 0 === o && (o = {});
                                    if ("object" != typeof o || null === o) {
                                        o = {
                                            name: o
                                        }
                                    }
                                    var c = o;
                                    void 0 === c.name && (c.name = "[DEFAULT]");
                                    var l = c.name;
                                    if ("string" != typeof l || !l) throw v.create("bad-app-name", {
                                        appName: String(l)
                                    });
                                    if (Object(h.f)(e, l)) throw v.create("duplicate-app", {
                                        appName: l
                                    });
                                    var f = new t(n, c, r);
                                    return e[l] = f, f
                                },
                                app: o,
                                registerVersion: function(t, e, n) {
                                    var r, o = null !== (r = m[t]) && void 0 !== r ? r : t;
                                    n && (o += "-" + n);
                                    var c = o.match(/\s|\//),
                                        h = e.match(/\s|\//);
                                    if (c || h) {
                                        var f = ['Unable to register library "' + o + '" with version "' + e + '":'];
                                        return c && f.push('library name "' + o + '" contains illegal characters (whitespace or "/")'), c && h && f.push("and"), h && f.push('version name "' + e + '" contains illegal characters (whitespace or "/")'), void y.warn(f.join(" "))
                                    }
                                    d(new l.a(o + "-version", (function() {
                                        return {
                                            library: o,
                                            version: e
                                        }
                                    }), "VERSION"))
                                },
                                setLogLevel: f.b,
                                onLog: function(t, e) {
                                    if (null !== t && "function" != typeof t) throw v.create("invalid-log-argument", {
                                        appName: name
                                    });
                                    Object(f.c)(t, e)
                                },
                                apps: null,
                                SDK_VERSION: "8.0.0",
                                INTERNAL: {
                                    registerComponent: d,
                                    removeApp: function(t) {
                                        delete e[t]
                                    },
                                    components: n,
                                    useAsService: function(t, e) {
                                        if ("serverAuth" === e) return null;
                                        return e
                                    }
                                }
                            };

                        function o(t) {
                            if (t = t || "[DEFAULT]", !Object(h.f)(e, t)) throw v.create("no-app", {
                                appName: t
                            });
                            return e[t]
                        }

                        function d(component) {
                            var l, f, d = component.name;
                            if (n.has(d)) return y.debug("There were multiple attempts to register component " + d + "."), "PUBLIC" === component.type ? r[d] : null;
                            if (n.set(d, component), "PUBLIC" === component.type) {
                                var m = function(t) {
                                    if (void 0 === t && (t = o()), "function" != typeof t[d]) throw v.create("invalid-app-argument", {
                                        appName: d
                                    });
                                    return t[d]()
                                };
                                void 0 !== component.serviceProps && Object(h.i)(m, component.serviceProps), r[d] = m, t.prototype[d] = function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    var n = this._getService.bind(this, d);
                                    return n.apply(this, component.multipleInstances ? t : [])
                                }
                            }
                            try {
                                for (var w = Object(c.g)(Object.keys(e)), I = w.next(); !I.done; I = w.next()) {
                                    var T = I.value;
                                    e[T]._addComponent(component)
                                }
                            } catch (t) {
                                l = {
                                    error: t
                                }
                            } finally {
                                try {
                                    I && !I.done && (f = w.return) && f.call(w)
                                } finally {
                                    if (l) throw l.error
                                }
                            }
                            return "PUBLIC" === component.type ? r[d] : null
                        }
                        return r.default = r, Object.defineProperty(r, "apps", {
                            get: function() {
                                return Object.keys(e).map((function(t) {
                                    return e[t]
                                }))
                            }
                        }), o.App = t, r
                    }(w);
                    return e.INTERNAL = Object(c.a)(Object(c.a)({}, e.INTERNAL), {
                        createFirebaseNamespace: t,
                        extendNamespace: function(t) {
                            Object(h.i)(e, t)
                        },
                        createSubscribe: h.g,
                        ErrorFactory: h.b,
                        deepExtend: h.i
                    }), e
                }(),
                T = function() {
                    function t(t) {
                        this.container = t
                    }
                    return t.prototype.getPlatformInfoString = function() {
                        return this.container.getProviders().map((function(t) {
                            if (function(t) {
                                    var component = t.getComponent();
                                    return "VERSION" === (null == component ? void 0 : component.type)
                                }(t)) {
                                var e = t.getImmediate();
                                return e.library + "/" + e.version
                            }
                            return null
                        })).filter((function(t) {
                            return t
                        })).join(" ")
                    }, t
                }();
            if (Object(h.j)() && void 0 !== self.firebase) {
                y.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                var E = self.firebase.SDK_VERSION;
                E && E.indexOf("LITE") >= 0 && y.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            var A = I.initializeApp;
            I.initializeApp = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return Object(h.m)() && y.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '), A.apply(void 0, t)
            };
            var k = I;
            ! function(t, e) {
                t.INTERNAL.registerComponent(new l.a("platform-logger", (function(t) {
                    return new T(t)
                }), "PRIVATE")), t.registerVersion("@firebase/app", "0.6.12", e), t.registerVersion("fire-js", "")
            }(k), e.a = k
        },
        432: function(t, e, n) {
            "use strict";
            (function(t) {
                var e = n(19);
                (function() {
                    var n, r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, t) {
                        a != Array.prototype && a != Object.prototype && (a[b] = t.value)
                    };
                    var o = function(a) {
                        a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof t && t, a];
                        for (var b = 0; b < a.length; ++b) {
                            var e = a[b];
                            if (e && e.Math == Math) return e
                        }
                        return globalThis
                    }(this);

                    function c(a) {
                        var b = 0;
                        return function() {
                            return b < a.length ? {
                                done: !1,
                                value: a[b++]
                            } : {
                                done: !0
                            }
                        }
                    }

                    function h(a) {
                        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
                        return b ? b.call(a) : {
                            next: c(a)
                        }
                    }! function(a, b) {
                        if (b) {
                            var t = o;
                            a = a.split(".");
                            for (var e = 0; e < a.length - 1; e++) {
                                var n = a[e];
                                n in t || (t[n] = {}), t = t[n]
                            }(b = b(e = t[a = a[a.length - 1]])) != e && null != b && r(t, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    }("Promise", (function(a) {
                        function b(g) {
                            this.b = 0, this.c = void 0, this.a = [];
                            var t = this.f();
                            try {
                                g(t.resolve, t.reject)
                            } catch (e) {
                                t.reject(e)
                            }
                        }

                        function t() {
                            this.a = null
                        }

                        function e(g) {
                            return g instanceof b ? g : new b((function(t) {
                                t(g)
                            }))
                        }
                        if (a) return a;
                        t.prototype.b = function(g) {
                            if (null == this.a) {
                                this.a = [];
                                var t = this;
                                this.c((function() {
                                    t.g()
                                }))
                            }
                            this.a.push(g)
                        };
                        var n = o.setTimeout;
                        t.prototype.c = function(g) {
                            n(g, 0)
                        }, t.prototype.g = function() {
                            for (; this.a && this.a.length;) {
                                var g = this.a;
                                this.a = [];
                                for (var t = 0; t < g.length; ++t) {
                                    var e = g[t];
                                    g[t] = null;
                                    try {
                                        e()
                                    } catch (t) {
                                        this.f(t)
                                    }
                                }
                            }
                            this.a = null
                        }, t.prototype.f = function(g) {
                            this.c((function() {
                                throw g
                            }))
                        }, b.prototype.f = function() {
                            function g(p) {
                                return function(n) {
                                    e || (e = !0, p.call(t, n))
                                }
                            }
                            var t = this,
                                e = !1;
                            return {
                                resolve: g(this.v),
                                reject: g(this.g)
                            }
                        }, b.prototype.v = function(g) {
                            if (g === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                            else if (g instanceof b) this.o(g);
                            else {
                                t: switch (typeof g) {
                                    case "object":
                                        var t = null != g;
                                        break t;
                                    case "function":
                                        t = !0;
                                        break t;
                                    default:
                                        t = !1
                                }
                                t ? this.m(g) : this.h(g)
                            }
                        }, b.prototype.m = function(g) {
                            var t = void 0;
                            try {
                                t = g.then
                            } catch (t) {
                                return void this.g(t)
                            }
                            "function" == typeof t ? this.u(t, g) : this.h(g)
                        }, b.prototype.g = function(g) {
                            this.i(2, g)
                        }, b.prototype.h = function(g) {
                            this.i(1, g)
                        }, b.prototype.i = function(g, t) {
                            if (0 != this.b) throw Error("Cannot settle(" + g + ", " + t + "): Promise already settled in state" + this.b);
                            this.b = g, this.c = t, this.l()
                        }, b.prototype.l = function() {
                            if (null != this.a) {
                                for (var g = 0; g < this.a.length; ++g) r.b(this.a[g]);
                                this.a = null
                            }
                        };
                        var r = new t;
                        return b.prototype.o = function(g) {
                            var t = this.f();
                            g.Pa(t.resolve, t.reject)
                        }, b.prototype.u = function(g, t) {
                            var e = this.f();
                            try {
                                g.call(t, e.resolve, e.reject)
                            } catch (t) {
                                e.reject(t)
                            }
                        }, b.prototype.then = function(g, t) {
                            function e(t, e) {
                                return "function" == typeof t ? function(e) {
                                    try {
                                        p(t(e))
                                    } catch (t) {
                                        n(t)
                                    }
                                } : e
                            }
                            var p, n, r = new b((function(t, e) {
                                p = t, n = e
                            }));
                            return this.Pa(e(g, p), e(t, n)), r
                        }, b.prototype.catch = function(g) {
                            return this.then(void 0, g)
                        }, b.prototype.Pa = function(g, t) {
                            function e() {
                                switch (p.b) {
                                    case 1:
                                        g(p.c);
                                        break;
                                    case 2:
                                        t(p.c);
                                        break;
                                    default:
                                        throw Error("Unexpected state: " + p.b)
                                }
                            }
                            var p = this;
                            null == this.a ? r.b(e) : this.a.push(e)
                        }, b.resolve = e, b.reject = function(g) {
                            return new b((function(t, e) {
                                e(g)
                            }))
                        }, b.race = function(g) {
                            return new b((function(t, n) {
                                for (var p = h(g), r = p.next(); !r.done; r = p.next()) e(r.value).Pa(t, n)
                            }))
                        }, b.all = function(g) {
                            var t = h(g),
                                n = t.next();
                            return n.done ? e([]) : new b((function(p, r) {
                                function o(t) {
                                    return function(e) {
                                        c[t] = e, 0 == --h && p(c)
                                    }
                                }
                                var c = [],
                                    h = 0;
                                do {
                                    c.push(void 0), h++, e(n.value).Pa(o(c.length - 1), r), n = t.next()
                                } while (!n.done)
                            }))
                        }, b
                    }));
                    var l = l || {},
                        f = this || self,
                        d = /^[\w+/_-]+[=]{0,2}$/,
                        v = null;

                    function m() {}

                    function y(a) {
                        var b = typeof a;
                        if ("object" == b) {
                            if (!a) return "null";
                            if (a instanceof Array) return "array";
                            if (a instanceof Object) return b;
                            var t = Object.prototype.toString.call(a);
                            if ("[object Window]" == t) return "object";
                            if ("[object Array]" == t || "number" == typeof a.length && void 0 !== a.splice && void 0 !== a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == t || void 0 !== a.call && void 0 !== a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                        } else if ("function" == b && void 0 === a.call) return "object";
                        return b
                    }

                    function w(a) {
                        var b = y(a);
                        return "array" == b || "object" == b && "number" == typeof a.length
                    }

                    function I(a) {
                        return "function" == y(a)
                    }

                    function T(a) {
                        var b = typeof a;
                        return "object" == b && null != a || "function" == b
                    }

                    function E(a) {
                        return Object.prototype.hasOwnProperty.call(a, A) && a[A] || (a[A] = ++k)
                    }
                    var A = "closure_uid_" + (1e9 * Math.random() >>> 0),
                        k = 0;

                    function N(a, b, t) {
                        return a.call.apply(a.bind, arguments)
                    }

                    function S(a, b, t) {
                        if (!a) throw Error();
                        if (2 < arguments.length) {
                            var e = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var t = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(t, e), a.apply(b, t)
                            }
                        }
                        return function() {
                            return a.apply(b, arguments)
                        }
                    }

                    function q(a, b, t) {
                        return (q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? N : S).apply(null, arguments)
                    }

                    function _(a, b) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var e = t.slice();
                            return e.push.apply(e, arguments), a.apply(this, e)
                        }
                    }
                    var O = Date.now || function() {
                        return +new Date
                    };

                    function C(a, b) {
                        function t() {}
                        t.prototype = b.prototype, a.$a = b.prototype, a.prototype = new t, a.prototype.constructor = a
                    }

                    function P(a, b, t) {
                        this.code = L + a, this.message = b || x[a] || "", this.a = t || null
                    }

                    function R(a) {
                        var b = a && a.code;
                        return b ? new P(b.substring(L.length), a.message, a.serverResponse) : null
                    }
                    C(P, Error), P.prototype.w = function() {
                        var a = {
                            code: this.code,
                            message: this.message
                        };
                        return this.a && (a.serverResponse = this.a), a
                    }, P.prototype.toJSON = function() {
                        return this.w()
                    };
                    var D, L = "auth/",
                        x = {
                            "admin-restricted-operation": "This operation is restricted to administrators only.",
                            "argument-error": "",
                            "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                            "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                            "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                            "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                            "cordova-not-ready": "Cordova framework is not ready.",
                            "cors-unsupported": "This browser is not supported.",
                            "credential-already-in-use": "This credential is already associated with a different user account.",
                            "custom-token-mismatch": "The custom token corresponds to a different audience.",
                            "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                            "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                            "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                            "email-already-in-use": "The email address is already in use by another account.",
                            "expired-action-code": "The action code has expired. ",
                            "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                            "internal-error": "An internal error has occurred.",
                            "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                            "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                            "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                            "invalid-auth-event": "An internal error has occurred.",
                            "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                            "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                            "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                            "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                            "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                            "invalid-email": "The email address is badly formatted.",
                            "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                            "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                            "invalid-credential": "The supplied auth credential is malformed or has expired.",
                            "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                            "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                            "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                            "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                            "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                            "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                            "wrong-password": "The password is invalid or the user does not have a password.",
                            "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                            "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                            "invalid-provider-id": "The specified provider ID is invalid.",
                            "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                            "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                            "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                            "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                            "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                            "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                            "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                            "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                            "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                            "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                            "missing-continue-uri": "A continue URL must be provided in the request.",
                            "missing-iframe-start": "An internal error has occurred.",
                            "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                            "missing-multi-factor-info": "No second factor identifier is provided.",
                            "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                            "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                            "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                            "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                            "app-deleted": "This instance of FirebaseApp has been deleted.",
                            "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                            "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                            "no-auth-event": "An internal error has occurred.",
                            "no-such-provider": "User was not linked to an account with the given provider.",
                            "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                            "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                            "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                            "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                            "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                            "provider-already-linked": "User can only be linked to one identity for the given provider.",
                            "quota-exceeded": "The project's quota for this operation has been exceeded.",
                            "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                            "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                            "rejected-credential": "The request contains malformed or mismatching credentials.",
                            "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                            "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                            "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                            timeout: "The operation has timed out.",
                            "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                            "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                            "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                            "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                            "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                            "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                            "unverified-email": "The operation requires a verified email.",
                            "user-cancelled": "The user did not grant your application the permissions it requested.",
                            "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                            "user-disabled": "The user account has been disabled by an administrator.",
                            "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                            "user-signed-out": "",
                            "weak-password": "The password must be 6 characters long or more.",
                            "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                        },
                        M = {
                            kd: {
                                Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                                Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                                Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                                id: "b"
                            },
                            rd: {
                                Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                                Ya: "https://securetoken.googleapis.com/v1/token",
                                Va: "https://identitytoolkit.googleapis.com/v2/",
                                id: "p"
                            },
                            td: {
                                Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                                Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                                Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                                id: "s"
                            },
                            ud: {
                                Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                                Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                                Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                                id: "t"
                            }
                        };

                    function j(a) {
                        for (var b in M)
                            if (M[b].id === a) return {
                                firebaseEndpoint: (a = M[b]).Sa,
                                secureTokenEndpoint: a.Ya,
                                identityPlatformEndpoint: a.Va
                            };
                        return null
                    }

                    function U(a) {
                        if (!a) return !1;
                        try {
                            return !!a.$goog_Thenable
                        } catch (t) {
                            return !1
                        }
                    }

                    function u(a) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, u);
                        else {
                            var b = Error().stack;
                            b && (this.stack = b)
                        }
                        a && (this.message = String(a))
                    }

                    function V(a, b) {
                        for (var t = "", e = (a = a.split("%s")).length - 1, n = 0; n < e; n++) t += a[n] + (n < b.length ? b[n] : "%s");
                        u.call(this, t + a[e])
                    }

                    function F(a, b) {
                        throw new V("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1))
                    }

                    function K(a, b) {
                        this.c = a, this.f = b, this.b = 0, this.a = null
                    }

                    function H(a, b) {
                        a.f(b), 100 > a.b && (a.b++, b.next = a.a, a.a = b)
                    }

                    function G() {
                        this.b = this.a = null
                    }
                    D = j("__EID__") ? "__EID__" : void 0, C(u, Error), u.prototype.name = "CustomError", C(V, u), V.prototype.name = "AssertionError", K.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var a = this.a;
                            this.a = a.next, a.next = null
                        } else a = this.c();
                        return a
                    };
                    var B = new K((function() {
                        return new X
                    }), (function(a) {
                        a.reset()
                    }));

                    function W() {
                        var a = ke,
                            b = null;
                        return a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null), b
                    }

                    function X() {
                        this.next = this.b = this.a = null
                    }
                    G.prototype.add = function(a, b) {
                        var t = B.get();
                        t.set(a, b), this.b ? this.b.next = t : this.a = t, this.b = t
                    }, X.prototype.set = function(a, b) {
                        this.a = a, this.b = b, this.next = null
                    }, X.prototype.reset = function() {
                        this.next = this.b = this.a = null
                    };
                    var J = Array.prototype.indexOf ? function(a, b) {
                            return Array.prototype.indexOf.call(a, b, void 0)
                        } : function(a, b) {
                            if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                            for (var t = 0; t < a.length; t++)
                                if (t in a && a[t] === b) return t;
                            return -1
                        },
                        Y = Array.prototype.forEach ? function(a, b, t) {
                            Array.prototype.forEach.call(a, b, t)
                        } : function(a, b, t) {
                            for (var e = a.length, n = "string" == typeof a ? a.split("") : a, r = 0; r < e; r++) r in n && b.call(t, n[r], r, a)
                        };
                    var z = Array.prototype.filter ? function(a, b) {
                            return Array.prototype.filter.call(a, b, void 0)
                        } : function(a, b) {
                            for (var t = a.length, e = [], n = 0, r = "string" == typeof a ? a.split("") : a, g = 0; g < t; g++)
                                if (g in r) {
                                    var o = r[g];
                                    b.call(void 0, o, g, a) && (e[n++] = o)
                                }
                            return e
                        },
                        $ = Array.prototype.map ? function(a, b) {
                            return Array.prototype.map.call(a, b, void 0)
                        } : function(a, b) {
                            for (var t = a.length, e = Array(t), n = "string" == typeof a ? a.split("") : a, r = 0; r < t; r++) r in n && (e[r] = b.call(void 0, n[r], r, a));
                            return e
                        },
                        Z = Array.prototype.some ? function(a, b) {
                            return Array.prototype.some.call(a, b, void 0)
                        } : function(a, b) {
                            for (var t = a.length, e = "string" == typeof a ? a.split("") : a, n = 0; n < t; n++)
                                if (n in e && b.call(void 0, e[n], n, a)) return !0;
                            return !1
                        };

                    function Q(a, b) {
                        return 0 <= J(a, b)
                    }

                    function tt(a, b) {
                        var t;
                        return (t = 0 <= (b = J(a, b))) && Array.prototype.splice.call(a, b, 1), t
                    }

                    function et(a, b) {
                        ! function(a, b) {
                            for (var t = "string" == typeof a ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in t && b.call(void 0, t[e], e, a)
                        }(a, (function(t, e) {
                            b.call(void 0, t, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && 0
                        }))
                    }

                    function nt(a) {
                        return Array.prototype.concat.apply([], arguments)
                    }

                    function it(a) {
                        var b = a.length;
                        if (0 < b) {
                            for (var t = Array(b), e = 0; e < b; e++) t[e] = a[e];
                            return t
                        }
                        return []
                    }
                    var ot, at = String.prototype.trim ? function(a) {
                            return a.trim()
                        } : function(a) {
                            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
                        },
                        st = /&/g,
                        ut = /</g,
                        ct = />/g,
                        ht = /"/g,
                        lt = /'/g,
                        ft = /\x00/g,
                        pt = /[\x00&<>"']/;

                    function vt(a, b) {
                        return -1 != a.indexOf(b)
                    }

                    function mt(a, b) {
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    t: {
                        var gt = f.navigator;
                        if (gt) {
                            var bt = gt.userAgent;
                            if (bt) {
                                ot = bt;
                                break t
                            }
                        }
                        ot = ""
                    }

                    function yt(a) {
                        return vt(ot, a)
                    }

                    function wt(a, b) {
                        for (var t in a) b.call(void 0, a[t], t, a)
                    }

                    function It(a) {
                        for (var b in a) return !1;
                        return !0
                    }

                    function Tt(a) {
                        var t, b = {};
                        for (t in a) b[t] = a[t];
                        return b
                    }
                    var Et = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                    function At(a, b) {
                        for (var t, e, n = 1; n < arguments.length; n++) {
                            for (t in e = arguments[n]) a[t] = e[t];
                            for (var r = 0; r < Et.length; r++) t = Et[r], Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t])
                        }
                    }

                    function kt(a, b) {
                        t: {
                            try {
                                var t = a && a.ownerDocument,
                                    e = t && (t.defaultView || t.parentWindow);
                                if ((e = e || f).Element && e.Location) {
                                    var n = e;
                                    break t
                                }
                            } catch (t) {}
                            n = null
                        }
                        if (n && void 0 !== n[b] && (!a || !(a instanceof n[b]) && (a instanceof n.Location || a instanceof n.Element))) {
                            if (T(a)) try {
                                var r = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                            } catch (t) {
                                r = "<object could not be stringified>"
                            } else r = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                            F("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, r)
                        }
                    }

                    function Nt(a, b) {
                        this.a = a === Ot && b || "", this.b = _t
                    }

                    function St(a) {
                        return a instanceof Nt && a.constructor === Nt && a.b === _t ? a.a : (F("expected object of type Const, got '" + a + "'"), "type_error:Const")
                    }
                    Nt.prototype.sa = !0, Nt.prototype.ra = function() {
                        return this.a
                    }, Nt.prototype.toString = function() {
                        return "Const{" + this.a + "}"
                    };
                    var _t = {},
                        Ot = {},
                        Ct = new Nt(Ot, "");

                    function Pt(a, b) {
                        this.a = a === jt && b || "", this.b = Mt
                    }

                    function Rt(a) {
                        return a instanceof Pt && a.constructor === Pt && a.b === Mt ? a.a : (F("expected object of type TrustedResourceUrl, got '" + a + "' of type " + y(a)), "type_error:TrustedResourceUrl")
                    }

                    function Dt(a, b) {
                        var t = St(a);
                        if (!xt.test(t)) throw Error("Invalid TrustedResourceUrl format: " + t);
                        return a = t.replace(Lt, (function(e, n) {
                            if (!Object.prototype.hasOwnProperty.call(b, n)) throw Error('Found marker, "' + n + '", in format string, "' + t + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                            return (e = b[n]) instanceof Nt ? St(e) : encodeURIComponent(String(e))
                        })), new Pt(jt, a)
                    }
                    Pt.prototype.sa = !0, Pt.prototype.ra = function() {
                        return this.a.toString()
                    }, Pt.prototype.toString = function() {
                        return "TrustedResourceUrl{" + this.a + "}"
                    };
                    var Lt = /%{(\w+)}/g,
                        xt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                        Mt = {},
                        jt = {};

                    function Ut(a, b) {
                        this.a = a === Ht && b || "", this.b = qt
                    }

                    function Vt(a) {
                        return a instanceof Ut && a.constructor === Ut && a.b === qt ? a.a : (F("expected object of type SafeUrl, got '" + a + "' of type " + y(a)), "type_error:SafeUrl")
                    }
                    Ut.prototype.sa = !0, Ut.prototype.ra = function() {
                        return this.a.toString()
                    }, Ut.prototype.toString = function() {
                        return "SafeUrl{" + this.a + "}"
                    };
                    var Ft = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                    function Kt(a) {
                        return a instanceof Ut ? a : (a = "object" == typeof a && a.sa ? a.ra() : String(a), Ft.test(a) || (a = "about:invalid#zClosurez"), new Ut(Ht, a))
                    }
                    var qt = {},
                        Ht = {};

                    function Gt() {
                        this.a = "", this.b = Wt
                    }

                    function Bt(a) {
                        return a instanceof Gt && a.constructor === Gt && a.b === Wt ? a.a : (F("expected object of type SafeHtml, got '" + a + "' of type " + y(a)), "type_error:SafeHtml")
                    }
                    Gt.prototype.sa = !0, Gt.prototype.ra = function() {
                        return this.a.toString()
                    }, Gt.prototype.toString = function() {
                        return "SafeHtml{" + this.a + "}"
                    };
                    var Wt = {};

                    function Xt(a) {
                        var b = new Gt;
                        return b.a = a, b
                    }
                    Xt("<!DOCTYPE html>");
                    var Jt = Xt("");

                    function Yt(a, b) {
                        for (var t = a.split("%s"), e = "", n = Array.prototype.slice.call(arguments, 1); n.length && 1 < t.length;) e += t.shift() + n.shift();
                        return e + t.join("%s")
                    }

                    function zt(a) {
                        return pt.test(a) && (-1 != a.indexOf("&") && (a = a.replace(st, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ut, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ct, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ht, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(lt, "&#39;")), -1 != a.indexOf("\0") && (a = a.replace(ft, "&#0;"))), a
                    }

                    function $t(a) {
                        return $t[" "](a), a
                    }
                    Xt("<br>"), $t[" "] = m;
                    var Zt, a, Qt = yt("Opera"),
                        te = yt("Trident") || yt("MSIE"),
                        ee = yt("Edge"),
                        ne = ee || te,
                        ie = yt("Gecko") && !(vt(ot.toLowerCase(), "webkit") && !yt("Edge")) && !(yt("Trident") || yt("MSIE")) && !yt("Edge"),
                        re = vt(ot.toLowerCase(), "webkit") && !yt("Edge");

                    function oe() {
                        var a = f.document;
                        return a ? a.documentMode : void 0
                    }
                    t: {
                        var ae = "",
                            se = (a = ot, ie ? /rv:([^\);]+)(\)|;)/.exec(a) : ee ? /Edge\/([\d\.]+)/.exec(a) : te ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a) : re ? /WebKit\/(\S+)/.exec(a) : Qt ? /(?:Version)[ \/]?(\S+)/.exec(a) : void 0);
                        if (se && (ae = se ? se[1] : ""), te) {
                            var ue = oe();
                            if (null != ue && ue > parseFloat(ae)) {
                                Zt = String(ue);
                                break t
                            }
                        }
                        Zt = ae
                    }
                    var ce, he = {};

                    function le(a) {
                        return function(a, b) {
                            var t = he;
                            return Object.prototype.hasOwnProperty.call(t, a) ? t[a] : t[a] = b(a)
                        }(a, (function() {
                            for (var b = 0, t = at(String(Zt)).split("."), e = at(String(a)).split("."), n = Math.max(t.length, e.length), r = 0; 0 == b && r < n; r++) {
                                var g = t[r] || "",
                                    o = e[r] || "";
                                do {
                                    if (g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""], o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], 0 == g[0].length && 0 == o[0].length) break;
                                    b = mt(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == o[1].length ? 0 : parseInt(o[1], 10)) || mt(0 == g[2].length, 0 == o[2].length) || mt(g[2], o[2]), g = g[3], o = o[3]
                                } while (0 == b)
                            }
                            return 0 <= b
                        }))
                    }
                    ce = f.document && te ? oe() : void 0;
                    try {
                        new self.OffscreenCanvas(0, 0).getContext("2d")
                    } catch (a) {}
                    var fe = !te || 9 <= Number(ce);

                    function pe(a) {
                        var b = document;
                        return "string" == typeof a ? b.getElementById(a) : a
                    }

                    function de(a, b) {
                        wt(b, (function(t, e) {
                            t && "object" == typeof t && t.sa && (t = t.ra()), "style" == e ? a.style.cssText = t : "class" == e ? a.className = t : "for" == e ? a.htmlFor = t : ge.hasOwnProperty(e) ? a.setAttribute(ge[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, t) : a[e] = t
                        }))
                    }
                    var ve, me, ge = {
                        cellpadding: "cellPadding",
                        cellspacing: "cellSpacing",
                        colspan: "colSpan",
                        frameborder: "frameBorder",
                        height: "height",
                        maxlength: "maxLength",
                        nonce: "nonce",
                        role: "role",
                        rowspan: "rowSpan",
                        type: "type",
                        usemap: "useMap",
                        valign: "vAlign",
                        width: "width"
                    };

                    function be(a, b, t) {
                        function e(g) {
                            g && b.appendChild("string" == typeof g ? a.createTextNode(g) : g)
                        }
                        for (var n = 2; n < t.length; n++) {
                            var r = t[n];
                            !w(r) || T(r) && 0 < r.nodeType ? e(r) : Y(we(r) ? it(r) : r, e)
                        }
                    }

                    function ye(a, b) {
                        return b = String(b), "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()), a.createElement(b)
                    }

                    function we(a) {
                        if (a && "number" == typeof a.length) {
                            if (T(a)) return "function" == typeof a.item || "string" == typeof a.item;
                            if (I(a)) return "function" == typeof a.item
                        }
                        return !1
                    }

                    function Ie(a) {
                        f.setTimeout((function() {
                            throw a
                        }), 0)
                    }

                    function Te() {
                        var a = f.MessageChannel;
                        if (void 0 === a && "undefined" != typeof window && window.postMessage && window.addEventListener && !yt("Presto") && (a = function() {
                                var t = ye(document, "IFRAME");
                                t.style.display = "none",
                                    function(a) {
                                        var b = new Pt(jt, St(Ct));
                                        kt(a, "HTMLIFrameElement"), a.src = Rt(b).toString()
                                    }(t), document.documentElement.appendChild(t);
                                var e = t.contentWindow;
                                (t = e.document).open(), t.write(Bt(Jt)), t.close();
                                var g = "callImmediate" + Math.random(),
                                    n = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                t = q((function(t) {
                                    "*" != n && t.origin != n || t.data != g || this.port1.onmessage()
                                }), this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                                    postMessage: function() {
                                        e.postMessage(g, n)
                                    }
                                }
                            }), void 0 !== a && !yt("Trident") && !yt("MSIE")) {
                            var b = new a,
                                t = {},
                                e = t;
                            return b.port1.onmessage = function() {
                                    if (void 0 !== t.next) {
                                        var e = (t = t.next).Fb;
                                        t.Fb = null, e()
                                    }
                                },
                                function(t) {
                                    e.next = {
                                        Fb: t
                                    }, e = e.next, b.port2.postMessage(0)
                                }
                        }
                        return function(t) {
                            f.setTimeout(t, 0)
                        }
                    }

                    function Ee(a, b) {
                        me || function() {
                            if (f.Promise && f.Promise.resolve) {
                                var a = f.Promise.resolve(void 0);
                                me = function() {
                                    a.then(Ne)
                                }
                            } else me = function() {
                                var b = Ne;
                                !I(f.setImmediate) || f.Window && f.Window.prototype && !yt("Edge") && f.Window.prototype.setImmediate == f.setImmediate ? (ve || (ve = Te()), ve(b)) : f.setImmediate(b)
                            }
                        }(), Ae || (me(), Ae = !0), ke.add(a, b)
                    }
                    var Ae = !1,
                        ke = new G;

                    function Ne() {
                        for (var a; a = W();) {
                            try {
                                a.a.call(a.b)
                            } catch (t) {
                                Ie(t)
                            }
                            H(B, a)
                        }
                        Ae = !1
                    }

                    function Se(a, b) {
                        if (this.a = _e, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, a != m) try {
                            var t = this;
                            a.call(b, (function(e) {
                                Fe(t, Oe, e)
                            }), (function(e) {
                                if (!(e instanceof Xe)) try {
                                    if (e instanceof Error) throw e;
                                    throw Error("Promise rejected.")
                                } catch (t) {}
                                Fe(t, Ce, e)
                            }))
                        } catch (t) {
                            Fe(this, Ce, t)
                        }
                    }
                    var _e = 0,
                        Oe = 2,
                        Ce = 3;

                    function Pe() {
                        this.next = this.f = this.b = this.g = this.a = null, this.c = !1
                    }
                    Pe.prototype.reset = function() {
                        this.f = this.b = this.g = this.a = null, this.c = !1
                    };
                    var Re = new K((function() {
                        return new Pe
                    }), (function(a) {
                        a.reset()
                    }));

                    function De(a, b, t) {
                        var e = Re.get();
                        return e.g = a, e.b = b, e.f = t, e
                    }

                    function Le(a) {
                        if (a instanceof Se) return a;
                        var b = new Se(m);
                        return Fe(b, Oe, a), b
                    }

                    function xe(a) {
                        return new Se((function(b, t) {
                            t(a)
                        }))
                    }

                    function Me(a, b, t) {
                        Ke(a, b, t, null) || Ee(_(b, a))
                    }

                    function je(a) {
                        return new Se((function(b) {
                            var t = a.length,
                                e = [];
                            if (t)
                                for (var n = function(n, r, p) {
                                        t--, e[n] = r ? {
                                            Ob: !0,
                                            value: p
                                        } : {
                                            Ob: !1,
                                            reason: p
                                        }, 0 == t && b(e)
                                    }, r = 0; r < a.length; r++) Me(a[r], _(n, r, !0), _(n, r, !1));
                            else b(e)
                        }))
                    }

                    function Ue(a, b) {
                        a.b || a.a != Oe && a.a != Ce || qe(a), a.f ? a.f.next = b : a.b = b, a.f = b
                    }

                    function Ve(a, b, t, e) {
                        var n = De(null, null, null);
                        return n.a = new Se((function(r, g) {
                            n.g = b ? function(t) {
                                try {
                                    var n = b.call(e, t);
                                    r(n)
                                } catch (t) {
                                    g(t)
                                }
                            } : r, n.b = t ? function(n) {
                                try {
                                    var o = t.call(e, n);
                                    void 0 === o && n instanceof Xe ? g(n) : r(o)
                                } catch (t) {
                                    g(t)
                                }
                            } : g
                        })), n.a.c = a, Ue(a, n), n.a
                    }

                    function Fe(a, b, t) {
                        a.a == _e && (a === t && (b = Ce, t = new TypeError("Promise cannot resolve to itself")), a.a = 1, Ke(t, a.Zc, a.$c, a) || (a.i = t, a.a = b, a.c = null, qe(a), b != Ce || t instanceof Xe || function(a, b) {
                            a.g = !0, Ee((function() {
                                a.g && We.call(null, b)
                            }))
                        }(a, t)))
                    }

                    function Ke(a, b, t, e) {
                        if (a instanceof Se) return Ue(a, De(b || m, t || null, e)), !0;
                        if (U(a)) return a.then(b, t, e), !0;
                        if (T(a)) try {
                            var n = a.then;
                            if (I(n)) return function(a, b, t, e, n) {
                                function r(t) {
                                    o || (o = !0, e.call(n, t))
                                }
                                var o = !1;
                                try {
                                    b.call(a, (function(e) {
                                        o || (o = !0, t.call(n, e))
                                    }), r)
                                } catch (t) {
                                    r(t)
                                }
                            }(a, n, b, t, e), !0
                        } catch (n) {
                            return t.call(e, n), !0
                        }
                        return !1
                    }

                    function qe(a) {
                        a.h || (a.h = !0, Ee(a.fc, a))
                    }

                    function He(a) {
                        var b = null;
                        return a.b && (b = a.b, a.b = b.next, b.next = null), a.b || (a.f = null), b
                    }

                    function Ge(a, b, t, e) {
                        if (t == Ce && b.b && !b.c)
                            for (; a && a.g; a = a.c) a.g = !1;
                        if (b.a) b.a.c = null, Be(b, t, e);
                        else try {
                            b.c ? b.g.call(b.f) : Be(b, t, e)
                        } catch (t) {
                            We.call(null, t)
                        }
                        H(Re, b)
                    }

                    function Be(a, b, t) {
                        b == Oe ? a.g.call(a.f, t) : a.b && a.b.call(a.f, t)
                    }
                    Se.prototype.then = function(a, b, t) {
                        return Ve(this, I(a) ? a : null, I(b) ? b : null, t)
                    }, Se.prototype.$goog_Thenable = !0, (n = Se.prototype).na = function(a, b) {
                        return (a = De(a, a, b)).c = !0, Ue(this, a), this
                    }, n.s = function(a, b) {
                        return Ve(this, null, a, b)
                    }, n.cancel = function(a) {
                        if (this.a == _e) {
                            var b = new Xe(a);
                            Ee((function() {
                                ! function t(a, b) {
                                    if (a.a == _e)
                                        if (a.c) {
                                            var e = a.c;
                                            if (e.b) {
                                                for (var n = 0, r = null, o = null, g = e.b; g && (g.c || (n++, g.a == a && (r = g), !(r && 1 < n))); g = g.next) r || (o = g);
                                                r && (e.a == _e && 1 == n ? t(e, b) : (o ? ((n = o).next == e.f && (e.f = n), n.next = n.next.next) : He(e), Ge(e, r, Ce, b)))
                                            }
                                            a.c = null
                                        } else Fe(a, Ce, b)
                                }(this, b)
                            }), this)
                        }
                    }, n.Zc = function(a) {
                        this.a = _e, Fe(this, Oe, a)
                    }, n.$c = function(a) {
                        this.a = _e, Fe(this, Ce, a)
                    }, n.fc = function() {
                        for (var a; a = He(this);) Ge(this, a, this.a, this.i);
                        this.h = !1
                    };
                    var We = Ie;

                    function Xe(a) {
                        u.call(this, a)
                    }

                    function Je() {
                        0 != Ye && (ze[E(this)] = this), this.xa = this.xa, this.oa = this.oa
                    }
                    C(Xe, u), Xe.prototype.name = "cancel";
                    var Ye = 0,
                        ze = {};

                    function $e(a) {
                        if (!a.xa && (a.xa = !0, a.Da(), 0 != Ye)) {
                            var b = E(a);
                            if (0 != Ye && a.oa && 0 < a.oa.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                            delete ze[b]
                        }
                    }
                    Je.prototype.xa = !1, Je.prototype.Da = function() {
                        if (this.oa)
                            for (; this.oa.length;) this.oa.shift()()
                    };
                    var Ze = Object.freeze || function(a) {
                            return a
                        },
                        Qe = !te || 9 <= Number(ce),
                        tn = te && !le("9"),
                        en = function() {
                            if (!f.addEventListener || !Object.defineProperty) return !1;
                            var a = !1,
                                b = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        a = !0
                                    }
                                });
                            try {
                                f.addEventListener("test", m, b), f.removeEventListener("test", m, b)
                            } catch (t) {}
                            return a
                        }();

                    function nn(a, b) {
                        this.type = a, this.b = this.target = b, this.defaultPrevented = !1
                    }

                    function rn(a, b) {
                        if (nn.call(this, a ? a.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, a) {
                            var t = this.type = a.type,
                                e = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
                            if (this.target = a.target || a.srcElement, this.b = b, b = a.relatedTarget) {
                                if (ie) {
                                    t: {
                                        try {
                                            $t(b.nodeName);
                                            var n = !0;
                                            break t
                                        } catch (t) {}
                                        n = !1
                                    }
                                    n || (b = null)
                                }
                            } else "mouseover" == t ? b = a.fromElement : "mouseout" == t && (b = a.toElement);
                            this.relatedTarget = b, e ? (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0), this.button = a.button, this.key = a.key || "", this.ctrlKey = a.ctrlKey, this.altKey = a.altKey, this.shiftKey = a.shiftKey, this.metaKey = a.metaKey, this.pointerId = a.pointerId || 0, this.pointerType = "string" == typeof a.pointerType ? a.pointerType : on[a.pointerType] || "", this.a = a, a.defaultPrevented && this.preventDefault()
                        }
                    }
                    nn.prototype.preventDefault = function() {
                        this.defaultPrevented = !0
                    }, C(rn, nn);
                    var on = Ze({
                        2: "touch",
                        3: "pen",
                        4: "mouse"
                    });
                    rn.prototype.preventDefault = function() {
                        rn.$a.preventDefault.call(this);
                        var a = this.a;
                        if (a.preventDefault) a.preventDefault();
                        else if (a.returnValue = !1, tn) try {
                            (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) && (a.keyCode = -1)
                        } catch (t) {}
                    }, rn.prototype.g = function() {
                        return this.a
                    };
                    var an = "closure_listenable_" + (1e6 * Math.random() | 0),
                        sn = 0;

                    function un(a, b, t, e, n) {
                        this.listener = a, this.proxy = null, this.src = b, this.type = t, this.capture = !!e, this.Ua = n, this.key = ++sn, this.va = this.Oa = !1
                    }

                    function cn(a) {
                        a.va = !0, a.listener = null, a.proxy = null, a.src = null, a.Ua = null
                    }

                    function dd(a) {
                        this.src = a, this.a = {}, this.b = 0
                    }

                    function hn(a, b) {
                        var t = b.type;
                        t in a.a && tt(a.a[t], b) && (cn(b), 0 == a.a[t].length && (delete a.a[t], a.b--))
                    }

                    function ln(a, b, t, e) {
                        for (var n = 0; n < a.length; ++n) {
                            var r = a[n];
                            if (!r.va && r.listener == b && r.capture == !!t && r.Ua == e) return n
                        }
                        return -1
                    }
                    dd.prototype.add = function(a, b, t, e, n) {
                        var r = a.toString();
                        (a = this.a[r]) || (a = this.a[r] = [], this.b++);
                        var g = ln(a, b, e, n);
                        return -1 < g ? (b = a[g], t || (b.Oa = !1)) : ((b = new un(b, this.src, r, !!e, n)).Oa = t, a.push(b)), b
                    };
                    var fn = "closure_lm_" + (1e6 * Math.random() | 0),
                        pn = {};

                    function dn(a, b, t, e, n) {
                        if (e && e.once) mn(a, b, t, e, n);
                        else if (Array.isArray(b))
                            for (var r = 0; r < b.length; r++) dn(a, b[r], t, e, n);
                        else t = An(t), a && a[an] ? Nn(a, b, t, T(e) ? !!e.capture : !!e, n) : vn(a, b, t, !1, e, n)
                    }

                    function vn(a, b, t, e, n, r) {
                        if (!b) throw Error("Invalid event type");
                        var g = T(n) ? !!n.capture : !!n,
                            o = Tn(a);
                        if (o || (a[fn] = o = new dd(a)), !(t = o.add(b, t, e, g, r)).proxy) {
                            if (e = function() {
                                    var a = In,
                                        b = Qe ? function(t) {
                                            return a.call(b.src, b.listener, t)
                                        } : function(t) {
                                            if (!(t = a.call(b.src, b.listener, t))) return t
                                        };
                                    return b
                                }(), t.proxy = e, e.src = a, e.listener = t, a.addEventListener) en || (n = g), void 0 === n && (n = !1), a.addEventListener(b.toString(), e, n);
                            else if (a.attachEvent) a.attachEvent(bn(b.toString()), e);
                            else {
                                if (!a.addListener || !a.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                                a.addListener(e)
                            }
                            0
                        }
                    }

                    function mn(a, b, t, e, n) {
                        if (Array.isArray(b))
                            for (var r = 0; r < b.length; r++) mn(a, b[r], t, e, n);
                        else t = An(t), a && a[an] ? Sn(a, b, t, T(e) ? !!e.capture : !!e, n) : vn(a, b, t, !0, e, n)
                    }

                    function gn(a, b, t, e, n) {
                        if (Array.isArray(b))
                            for (var r = 0; r < b.length; r++) gn(a, b[r], t, e, n);
                        else e = T(e) ? !!e.capture : !!e, t = An(t), a && a[an] ? (a = a.v, (b = String(b).toString()) in a.a && (-1 < (t = ln(r = a.a[b], t, e, n)) && (cn(r[t]), Array.prototype.splice.call(r, t, 1), 0 == r.length && (delete a.a[b], a.b--)))) : a && (a = Tn(a)) && (b = a.a[b.toString()], a = -1, b && (a = ln(b, t, e, n)), (t = -1 < a ? b[a] : null) && td(t))
                    }

                    function td(a) {
                        if ("number" != typeof a && a && !a.va) {
                            var b = a.src;
                            if (b && b[an]) hn(b.v, a);
                            else {
                                var t = a.type,
                                    e = a.proxy;
                                b.removeEventListener ? b.removeEventListener(t, e, a.capture) : b.detachEvent ? b.detachEvent(bn(t), e) : b.addListener && b.removeListener && b.removeListener(e), (t = Tn(b)) ? (hn(t, a), 0 == t.b && (t.src = null, b[fn] = null)) : cn(a)
                            }
                        }
                    }

                    function bn(a) {
                        return a in pn ? pn[a] : pn[a] = "on" + a
                    }

                    function yn(a, b, t, e) {
                        var n = !0;
                        if ((a = Tn(a)) && (b = a.a[b.toString()]))
                            for (b = b.concat(), a = 0; a < b.length; a++) {
                                var r = b[a];
                                r && r.capture == t && !r.va && (r = wn(r, e), n = n && !1 !== r)
                            }
                        return n
                    }

                    function wn(a, b) {
                        var t = a.listener,
                            e = a.Ua || a.src;
                        return a.Oa && td(a), t.call(e, b)
                    }

                    function In(a, b) {
                        if (a.va) return !0;
                        if (!Qe) {
                            if (!b) t: {
                                b = ["window", "event"];
                                for (var t = f, e = 0; e < b.length; e++)
                                    if (null == (t = t[b[e]])) {
                                        b = null;
                                        break t
                                    }
                                b = t
                            }
                            if (b = new rn(e = b, this), t = !0, !(0 > e.keyCode || null != e.returnValue)) {
                                t: {
                                    var n = !1;
                                    if (0 == e.keyCode) try {
                                        e.keyCode = -1;
                                        break t
                                    } catch (t) {
                                        n = !0
                                    }(n || null == e.returnValue) && (e.returnValue = !0)
                                }
                                for (e = [], n = b.b; n; n = n.parentNode) e.push(n);
                                for (a = a.type, n = e.length - 1; 0 <= n; n--) {
                                    b.b = e[n];
                                    var r = yn(e[n], a, !0, b);
                                    t = t && r
                                }
                                for (n = 0; n < e.length; n++) b.b = e[n],
                                r = yn(e[n], a, !1, b),
                                t = t && r
                            }
                            return t
                        }
                        return wn(a, new rn(b, this))
                    }

                    function Tn(a) {
                        return (a = a[fn]) instanceof dd ? a : null
                    }
                    var En = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                    function An(a) {
                        return I(a) ? a : (a[En] || (a[En] = function(b) {
                            return a.handleEvent(b)
                        }), a[En])
                    }

                    function kn() {
                        Je.call(this), this.v = new dd(this), this.$b = this, this.fb = null
                    }

                    function Nn(a, b, t, e, n) {
                        a.v.add(String(b), t, !1, e, n)
                    }

                    function Sn(a, b, t, e, n) {
                        a.v.add(String(b), t, !0, e, n)
                    }

                    function _n(a, b, t, e) {
                        if (!(b = a.v.a[String(b)])) return !0;
                        b = b.concat();
                        for (var n = !0, r = 0; r < b.length; ++r) {
                            var g = b[r];
                            if (g && !g.va && g.capture == t) {
                                var o = g.listener,
                                    c = g.Ua || g.src;
                                g.Oa && hn(a.v, g), n = !1 !== o.call(c, e) && n
                            }
                        }
                        return n && !e.defaultPrevented
                    }

                    function On(a, b, t) {
                        if (I(a)) t && (a = q(a, t));
                        else {
                            if (!a || "function" != typeof a.handleEvent) throw Error("Invalid listener argument");
                            a = q(a.handleEvent, a)
                        }
                        return 2147483647 < Number(b) ? -1 : f.setTimeout(a, b || 0)
                    }

                    function Cn(a) {
                        var b = null;
                        return new Se((function(t, e) {
                            -1 == (b = On((function() {
                                t(void 0)
                            }), a)) && e(Error("Failed to schedule timer."))
                        })).s((function(t) {
                            throw f.clearTimeout(b), t
                        }))
                    }

                    function Pn(a) {
                        if (a.V && "function" == typeof a.V) return a.V();
                        if ("string" == typeof a) return a.split("");
                        if (w(a)) {
                            for (var b = [], t = a.length, e = 0; e < t; e++) b.push(a[e]);
                            return b
                        }
                        for (e in b = [], t = 0, a) b[t++] = a[e];
                        return b
                    }

                    function Rn(a) {
                        if (a.Y && "function" == typeof a.Y) return a.Y();
                        if (!a.V || "function" != typeof a.V) {
                            if (w(a) || "string" == typeof a) {
                                var b = [];
                                a = a.length;
                                for (var t = 0; t < a; t++) b.push(t);
                                return b
                            }
                            for (var e in b = [], t = 0, a) b[t++] = e;
                            return b
                        }
                    }

                    function Dn(a, b) {
                        this.b = {}, this.a = [], this.c = 0;
                        var t = arguments.length;
                        if (1 < t) {
                            if (t % 2) throw Error("Uneven number of arguments");
                            for (var e = 0; e < t; e += 2) this.set(arguments[e], arguments[e + 1])
                        } else if (a)
                            if (a instanceof Dn)
                                for (t = a.Y(), e = 0; e < t.length; e++) this.set(t[e], a.get(t[e]));
                            else
                                for (e in a) this.set(e, a[e])
                    }

                    function Ln(a) {
                        if (a.c != a.a.length) {
                            for (var b = 0, t = 0; b < a.a.length;) {
                                var e = a.a[b];
                                xn(a.b, e) && (a.a[t++] = e), b++
                            }
                            a.a.length = t
                        }
                        if (a.c != a.a.length) {
                            var n = {};
                            for (t = b = 0; b < a.a.length;) xn(n, e = a.a[b]) || (a.a[t++] = e, n[e] = 1), b++;
                            a.a.length = t
                        }
                    }

                    function xn(a, b) {
                        return Object.prototype.hasOwnProperty.call(a, b)
                    }
                    C(kn, Je), kn.prototype[an] = !0, kn.prototype.addEventListener = function(a, b, t, e) {
                        dn(this, a, b, t, e)
                    }, kn.prototype.removeEventListener = function(a, b, t, e) {
                        gn(this, a, b, t, e)
                    }, kn.prototype.dispatchEvent = function(a) {
                        var b, t = this.fb;
                        if (t)
                            for (b = []; t; t = t.fb) b.push(t);
                        t = this.$b;
                        var e = a.type || a;
                        if ("string" == typeof a) a = new nn(a, t);
                        else if (a instanceof nn) a.target = a.target || t;
                        else {
                            var n = a;
                            At(a = new nn(e, t), n)
                        }
                        if (n = !0, b)
                            for (var r = b.length - 1; 0 <= r; r--) {
                                var g = a.b = b[r];
                                n = _n(g, e, !0, a) && n
                            }
                        if (n = _n(g = a.b = t, e, !0, a) && n, n = _n(g, e, !1, a) && n, b)
                            for (r = 0; r < b.length; r++) n = _n(g = a.b = b[r], e, !1, a) && n;
                        return n
                    }, kn.prototype.Da = function() {
                        if (kn.$a.Da.call(this), this.v) {
                            var t, a = this.v;
                            for (t in a.a) {
                                for (var e = a.a[t], n = 0; n < e.length; n++) cn(e[n]);
                                delete a.a[t], a.b--
                            }
                        }
                        this.fb = null
                    }, (n = Dn.prototype).V = function() {
                        Ln(this);
                        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
                        return a
                    }, n.Y = function() {
                        return Ln(this), this.a.concat()
                    }, n.clear = function() {
                        this.b = {}, this.c = this.a.length = 0
                    }, n.get = function(a, b) {
                        return xn(this.b, a) ? this.b[a] : b
                    }, n.set = function(a, b) {
                        xn(this.b, a) || (this.c++, this.a.push(a)), this.b[a] = b
                    }, n.forEach = function(a, b) {
                        for (var t = this.Y(), e = 0; e < t.length; e++) {
                            var n = t[e],
                                r = this.get(n);
                            a.call(b, r, n, this)
                        }
                    };
                    var Mn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                    function jn(a, b) {
                        var t;
                        this.a = this.l = this.f = "", this.g = null, this.h = this.c = "", this.i = !1, a instanceof jn ? (this.i = void 0 !== b ? b : a.i, Un(this, a.f), this.l = a.l, this.a = a.a, Vn(this, a.g), this.c = a.c, Fn(this, oi(a.b)), this.h = a.h) : a && (t = String(a).match(Mn)) ? (this.i = !!b, Un(this, t[1] || "", !0), this.l = Bn(t[2] || ""), this.a = Bn(t[3] || "", !0), Vn(this, t[4]), this.c = Bn(t[5] || "", !0), Fn(this, t[6] || "", !0), this.h = Bn(t[7] || "")) : (this.i = !!b, this.b = new Qn(null, this.i))
                    }

                    function Un(a, b, t) {
                        a.f = t ? Bn(b, !0) : b, a.f && (a.f = a.f.replace(/:$/, ""))
                    }

                    function Vn(a, b) {
                        if (b) {
                            if (b = Number(b), isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                            a.g = b
                        } else a.g = null
                    }

                    function Fn(a, b, t) {
                        b instanceof Qn ? (a.b = b, function(a, b) {
                            b && !a.f && (ti(a), a.c = null, a.a.forEach((function(t, e) {
                                var n = e.toLowerCase();
                                e != n && (ni(this, e), ri(this, n, t))
                            }), a)), a.f = b
                        }(a.b, a.i)) : (t || (b = Wn(b, $n)), a.b = new Qn(b, a.i))
                    }

                    function Kn(a, b, t) {
                        a.b.set(b, t)
                    }

                    function qn(a, b) {
                        return a.b.get(b)
                    }

                    function Hn(a) {
                        return a instanceof jn ? new jn(a) : new jn(a, void 0)
                    }

                    function Gn(a, b, t, e) {
                        var n = new jn(null, void 0);
                        return a && Un(n, a), b && (n.a = b), t && Vn(n, t), e && (n.c = e), n
                    }

                    function Bn(a, b) {
                        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
                    }

                    function Wn(a, b, t) {
                        return "string" == typeof a ? (a = encodeURI(a).replace(b, Xn), t && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
                    }

                    function Xn(a) {
                        return "%" + ((a = a.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & a).toString(16)
                    }
                    jn.prototype.toString = function() {
                        var a = [],
                            b = this.f;
                        b && a.push(Wn(b, Jn, !0), ":");
                        var t = this.a;
                        return (t || "file" == b) && (a.push("//"), (b = this.l) && a.push(Wn(b, Jn, !0), "@"), a.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (t = this.g) && a.push(":", String(t))), (t = this.c) && (this.a && "/" != t.charAt(0) && a.push("/"), a.push(Wn(t, "/" == t.charAt(0) ? zn : Yn, !0))), (t = this.b.toString()) && a.push("?", t), (t = this.h) && a.push("#", Wn(t, Zn)), a.join("")
                    }, jn.prototype.resolve = function(a) {
                        var b = new jn(this),
                            t = !!a.f;
                        t ? Un(b, a.f) : t = !!a.l, t ? b.l = a.l : t = !!a.a, t ? b.a = a.a : t = null != a.g;
                        var e = a.c;
                        if (t) Vn(b, a.g);
                        else if (t = !!a.c) {
                            if ("/" != e.charAt(0))
                                if (this.a && !this.c) e = "/" + e;
                                else {
                                    var n = b.c.lastIndexOf("/"); - 1 != n && (e = b.c.substr(0, n + 1) + e)
                                }
                            if (".." == (n = e) || "." == n) e = "";
                            else if (vt(n, "./") || vt(n, "/.")) {
                                e = 0 == n.lastIndexOf("/", 0), n = n.split("/");
                                for (var r = [], g = 0; g < n.length;) {
                                    var o = n[g++];
                                    "." == o ? e && g == n.length && r.push("") : ".." == o ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), e && g == n.length && r.push("")) : (r.push(o), e = !0)
                                }
                                e = r.join("/")
                            } else e = n
                        }
                        return t ? b.c = e : t = "" !== a.b.toString(), t ? Fn(b, oi(a.b)) : t = !!a.h, t && (b.h = a.h), b
                    };
                    var Jn = /[#\/\?@]/g,
                        Yn = /[#\?:]/g,
                        zn = /[#\?]/g,
                        $n = /[#\?@]/g,
                        Zn = /#/g;

                    function Qn(a, b) {
                        this.b = this.a = null, this.c = a || null, this.f = !!b
                    }

                    function ti(a) {
                        a.a || (a.a = new Dn, a.b = 0, a.c && function(a, b) {
                            if (a) {
                                a = a.split("&");
                                for (var t = 0; t < a.length; t++) {
                                    var e = a[t].indexOf("="),
                                        n = null;
                                    if (0 <= e) {
                                        var r = a[t].substring(0, e);
                                        n = a[t].substring(e + 1)
                                    } else r = a[t];
                                    b(r, n ? decodeURIComponent(n.replace(/\+/g, " ")) : "")
                                }
                            }
                        }(a.c, (function(b, t) {
                            a.add(decodeURIComponent(b.replace(/\+/g, " ")), t)
                        })))
                    }

                    function ei(a) {
                        var b = Rn(a);
                        if (void 0 === b) throw Error("Keys are undefined");
                        var t = new Qn(null, void 0);
                        a = Pn(a);
                        for (var e = 0; e < b.length; e++) {
                            var n = b[e],
                                r = a[e];
                            Array.isArray(r) ? ri(t, n, r) : t.add(n, r)
                        }
                        return t
                    }

                    function ni(a, b) {
                        ti(a), b = ai(a, b), xn(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, xn((a = a.a).b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Ln(a)))
                    }

                    function ii(a, b) {
                        return ti(a), b = ai(a, b), xn(a.a.b, b)
                    }

                    function ri(a, b, t) {
                        ni(a, b), 0 < t.length && (a.c = null, a.a.set(ai(a, b), it(t)), a.b += t.length)
                    }

                    function oi(a) {
                        var b = new Qn;
                        return b.c = a.c, a.a && (b.a = new Dn(a.a), b.b = a.b), b
                    }

                    function ai(a, b) {
                        return b = String(b), a.f && (b = b.toLowerCase()), b
                    }

                    function si(a) {
                        var b = [];
                        return function t(a, b, e) {
                            if (null == b) e.push("null");
                            else {
                                if ("object" == typeof b) {
                                    if (Array.isArray(b)) {
                                        var n = b;
                                        b = n.length, e.push("[");
                                        for (var r = "", o = 0; o < b; o++) e.push(r), t(a, n[o], e), r = ",";
                                        return void e.push("]")
                                    }
                                    if (!(b instanceof String || b instanceof Number || b instanceof Boolean)) {
                                        for (n in e.push("{"), r = "", b) Object.prototype.hasOwnProperty.call(b, n) && ("function" != typeof(o = b[n]) && (e.push(r), fi(n, e), e.push(":"), t(a, o, e), r = ","));
                                        return void e.push("}")
                                    }
                                    b = b.valueOf()
                                }
                                switch (typeof b) {
                                    case "string":
                                        fi(b, e);
                                        break;
                                    case "number":
                                        e.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                                        break;
                                    case "boolean":
                                        e.push(String(b));
                                        break;
                                    case "function":
                                        e.push("null");
                                        break;
                                    default:
                                        throw Error("Unknown type: " + typeof b)
                                }
                            }
                        }(new ui, a, b), b.join("")
                    }

                    function ui() {}(n = Qn.prototype).add = function(a, b) {
                        ti(this), this.c = null, a = ai(this, a);
                        var t = this.a.get(a);
                        return t || this.a.set(a, t = []), t.push(b), this.b += 1, this
                    }, n.clear = function() {
                        this.a = this.c = null, this.b = 0
                    }, n.forEach = function(a, b) {
                        ti(this), this.a.forEach((function(t, e) {
                            Y(t, (function(t) {
                                a.call(b, t, e, this)
                            }), this)
                        }), this)
                    }, n.Y = function() {
                        ti(this);
                        for (var a = this.a.V(), b = this.a.Y(), t = [], e = 0; e < b.length; e++)
                            for (var n = a[e], r = 0; r < n.length; r++) t.push(b[e]);
                        return t
                    }, n.V = function(a) {
                        ti(this);
                        var b = [];
                        if ("string" == typeof a) ii(this, a) && (b = nt(b, this.a.get(ai(this, a))));
                        else {
                            a = this.a.V();
                            for (var t = 0; t < a.length; t++) b = nt(b, a[t])
                        }
                        return b
                    }, n.set = function(a, b) {
                        return ti(this), this.c = null, ii(this, a = ai(this, a)) && (this.b -= this.a.get(a).length), this.a.set(a, [b]), this.b += 1, this
                    }, n.get = function(a, b) {
                        return a && 0 < (a = this.V(a)).length ? String(a[0]) : b
                    }, n.toString = function() {
                        if (this.c) return this.c;
                        if (!this.a) return "";
                        for (var a = [], b = this.a.Y(), t = 0; t < b.length; t++) {
                            var e = b[t],
                                n = encodeURIComponent(String(e));
                            e = this.V(e);
                            for (var r = 0; r < e.length; r++) {
                                var g = n;
                                "" !== e[r] && (g += "=" + encodeURIComponent(String(e[r]))), a.push(g)
                            }
                        }
                        return this.c = a.join("&")
                    };
                    var ci = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "/": "\\/",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\v": "\\u000b"
                        },
                        hi = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                    function fi(a, b) {
                        b.push('"', a.replace(hi, (function(t) {
                            var e = ci[t];
                            return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), ci[t] = e), e
                        })), '"')
                    }

                    function pi() {
                        var a = Ri();
                        return te && !!ce && 11 == ce || /Edge\/\d+/.test(a)
                    }

                    function di() {
                        return f.window && f.window.location.href || self && self.location && self.location.href || ""
                    }

                    function vi(a, b) {
                        b = b || f.window;
                        var t = "about:blank";
                        a && (t = Vt(Kt(a))), b.location.href = t
                    }

                    function mi(a) {
                        return !!((a = (a || Ri()).toLowerCase()).match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/))
                    }

                    function gi(a) {
                        a = a || f.window;
                        try {
                            a.close()
                        } catch (t) {}
                    }

                    function bi(a, b, t) {
                        var e = Math.floor(1e9 * Math.random()).toString();
                        b = b || 500, t = t || 600;
                        var n = (window.screen.availHeight - t) / 2,
                            r = (window.screen.availWidth - b) / 2;
                        for (g in b = {
                                width: b,
                                height: t,
                                top: 0 < n ? n : 0,
                                left: 0 < r ? r : 0,
                                location: !0,
                                resizable: !0,
                                statusbar: !0,
                                toolbar: !1
                            }, t = Ri().toLowerCase(), e && (b.target = e, vt(t, "crios/") && (b.target = "_blank")), Oi(Ri()) == Si && (a = a || "http://localhost", b.scrollbars = !0), t = a || "", (a = b) || (a = {}), e = window, b = t instanceof Ut ? t : Kt(void 0 !== t.href ? t.href : String(t)), t = a.target || t.target, n = [], a) switch (g) {
                            case "width":
                            case "height":
                            case "top":
                            case "left":
                                n.push(g + "=" + a[g]);
                                break;
                            case "target":
                            case "noopener":
                            case "noreferrer":
                                break;
                            default:
                                n.push(g + "=" + (a[g] ? 1 : 0))
                        }
                        var g = n.join(",");
                        if ((yt("iPhone") && !yt("iPod") && !yt("iPad") || yt("iPad") || yt("iPod")) && e.navigator && e.navigator.standalone && t && "_self" != t ? (kt(g = ye(document, "A"), "HTMLAnchorElement"), b instanceof Ut || b instanceof Ut || (b = "object" == typeof b && b.sa ? b.ra() : String(b), Ft.test(b) || (b = "about:invalid#zClosurez"), b = new Ut(Ht, b)), g.href = Vt(b), g.setAttribute("target", t), a.noreferrer && g.setAttribute("rel", "noreferrer"), (a = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, e, 1), g.dispatchEvent(a), g = {}) : a.noreferrer ? (g = e.open("", t, g), a = Vt(b), g && (ne && vt(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = Xt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + zt(a) + '">'), e = g.document) && (e.write(Bt(a)), e.close())) : (g = e.open(Vt(b), t, g)) && a.noopener && (g.opener = null), g) try {
                            g.focus()
                        } catch (t) {}
                        return g
                    }
                    var yi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                        wi = /^[^@]+@[^@]+$/;

                    function Ii() {
                        var a = null;
                        return new Se((function(b) {
                            "complete" == f.document.readyState ? b() : (a = function() {
                                b()
                            }, mn(window, "load", a))
                        })).s((function(b) {
                            throw gn(window, "load", a), b
                        }))
                    }

                    function Ti(a) {
                        return a = a || Ri(), !("file:" !== ji() && "ionic:" !== ji() || !a.toLowerCase().match(/iphone|ipad|ipod|android/))
                    }

                    function Ei() {
                        var a = f.window;
                        try {
                            return !(!a || a == a.top)
                        } catch (t) {
                            return !1
                        }
                    }

                    function Ai() {
                        return void 0 !== f.WorkerGlobalScope && "function" == typeof f.importScripts
                    }

                    function ki() {
                        return e.a.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : e.a.INTERNAL.hasOwnProperty("node") ? "Node" : Ai() ? "Worker" : "Browser"
                    }

                    function Ni() {
                        var a = ki();
                        return "ReactNative" === a || "Node" === a
                    }
                    var Si = "Firefox",
                        _i = "Chrome";

                    function Oi(a) {
                        var b = a.toLowerCase();
                        return vt(b, "opera/") || vt(b, "opr/") || vt(b, "opios/") ? "Opera" : vt(b, "iemobile") ? "IEMobile" : vt(b, "msie") || vt(b, "trident/") ? "IE" : vt(b, "edge/") ? "Edge" : vt(b, "firefox/") ? Si : vt(b, "silk/") ? "Silk" : vt(b, "blackberry") ? "Blackberry" : vt(b, "webos") ? "Webos" : !vt(b, "safari/") || vt(b, "chrome/") || vt(b, "crios/") || vt(b, "android") ? !vt(b, "chrome/") && !vt(b, "crios/") || vt(b, "edge/") ? vt(b, "android") ? "Android" : (a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length ? a[1] : "Other" : _i : "Safari"
                    }
                    var Ci = {
                        ld: "FirebaseCore-web",
                        nd: "FirebaseUI-web"
                    };

                    function Pi(a, b) {
                        b = b || [];
                        var t, e = [],
                            n = {};
                        for (t in Ci) n[Ci[t]] = !0;
                        for (t = 0; t < b.length; t++) void 0 !== n[b[t]] && (delete n[b[t]], e.push(b[t]));
                        return e.sort(), (b = e).length || (b = ["FirebaseCore-web"]), "Browser" === (e = ki()) ? e = Oi(n = Ri()) : "Worker" === e && (e = Oi(n = Ri()) + "-" + e), e + "/JsCore/" + a + "/" + b.join(",")
                    }

                    function Ri() {
                        return f.navigator && f.navigator.userAgent || ""
                    }

                    function Di(a, b) {
                        a = a.split("."), b = b || f;
                        for (var t = 0; t < a.length && "object" == typeof b && null != b; t++) b = b[a[t]];
                        return t != a.length && (b = void 0), b
                    }

                    function Li() {
                        try {
                            var a = f.localStorage,
                                b = qi();
                            if (a) return a.setItem(b, "1"), a.removeItem(b), !pi() || !!f.indexedDB
                        } catch (t) {
                            return Ai() && !!f.indexedDB
                        }
                        return !1
                    }

                    function xi() {
                        return (Mi() || "chrome-extension:" === ji() || Ti()) && !Ni() && Li() && !Ai()
                    }

                    function Mi() {
                        return "http:" === ji() || "https:" === ji()
                    }

                    function ji() {
                        return f.location && f.location.protocol || null
                    }

                    function Ui(a) {
                        return !mi(a = a || Ri()) && Oi(a) != Si
                    }

                    function Vi(a) {
                        return void 0 === a ? null : si(a)
                    }

                    function Fi(a) {
                        var t, b = {};
                        for (t in a) a.hasOwnProperty(t) && null !== a[t] && void 0 !== a[t] && (b[t] = a[t]);
                        return b
                    }

                    function Ki(a) {
                        if (null !== a) return JSON.parse(a)
                    }

                    function qi(a) {
                        return a || Math.floor(1e9 * Math.random()).toString()
                    }

                    function Hi(a) {
                        return "Safari" != Oi(a = a || Ri()) && !a.toLowerCase().match(/iphone|ipad|ipod/)
                    }

                    function Gi() {
                        var a = f.___jsl;
                        if (a && a.H)
                            for (var b in a.H)
                                if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)
                                    for (var t = 0; t < a.CP.length; t++) a.CP[t] = null
                    }

                    function Bi(a, b) {
                        if (a > b) throw Error("Short delay should be less than long delay!");
                        this.a = a, this.c = b, a = Ri(), b = ki(), this.b = mi(a) || "ReactNative" === b
                    }

                    function Wi() {
                        var a = f.document;
                        return !a || void 0 === a.visibilityState || "visible" == a.visibilityState
                    }

                    function Xi(a) {
                        "undefined" != typeof console && "function" == typeof console.warn && console.warn(a)
                    }

                    function Ji(a) {
                        try {
                            var b = new Date(parseInt(a, 10));
                            if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString()
                        } catch (t) {}
                        return null
                    }

                    function Yi() {
                        return !(!Di("fireauth.oauthhelper", f) && !Di("fireauth.iframe", f))
                    }
                    Bi.prototype.get = function() {
                        var a = f.navigator;
                        return !a || "boolean" != typeof a.onLine || !Mi() && "chrome-extension:" !== ji() && void 0 === a.connection || a.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                    };
                    var zi, $i = {};

                    function Zi(a) {
                        $i[a] || ($i[a] = !0, Xi(a))
                    }
                    try {
                        var Qi = {};
                        Object.defineProperty(Qi, "abcd", {
                            configurable: !0,
                            enumerable: !0,
                            value: 1
                        }), Object.defineProperty(Qi, "abcd", {
                            configurable: !0,
                            enumerable: !0,
                            value: 2
                        }), zi = 2 == Qi.abcd
                    } catch (a) {
                        zi = !1
                    }

                    function er(a, b, t) {
                        zi ? Object.defineProperty(a, b, {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        }) : a[b] = t
                    }

                    function nr(a, b) {
                        if (b)
                            for (var t in b) b.hasOwnProperty(t) && er(a, t, b[t])
                    }

                    function ir(a) {
                        var b = {};
                        return nr(b, a), b
                    }

                    function rr(a) {
                        var b = a;
                        if ("object" == typeof a && null != a)
                            for (var t in b = "length" in a ? [] : {}, a) er(b, t, rr(a[t]));
                        return b
                    }

                    function or(a) {
                        var b = a && (a[lr] ? "phone" : null);
                        if (!(b && a && a[cr])) throw new P("internal-error", "Internal assert: invalid MultiFactorInfo object");
                        er(this, "uid", a[cr]), er(this, "displayName", a[sr] || null);
                        var t = null;
                        a[ur] && (t = new Date(a[ur]).toUTCString()), er(this, "enrollmentTime", t), er(this, "factorId", b)
                    }

                    function ar(a) {
                        try {
                            var b = new fr(a)
                        } catch (t) {
                            b = null
                        }
                        return b
                    }
                    or.prototype.w = function() {
                        return {
                            uid: this.uid,
                            displayName: this.displayName,
                            factorId: this.factorId,
                            enrollmentTime: this.enrollmentTime
                        }
                    };
                    var sr = "displayName",
                        ur = "enrolledAt",
                        cr = "mfaEnrollmentId",
                        lr = "phoneInfo";

                    function fr(a) {
                        or.call(this, a), er(this, "phoneNumber", a[lr])
                    }

                    function pr(a) {
                        var b = {},
                            t = a[gr],
                            e = a[wr],
                            n = a[Ir];
                        if (a = ar(a[yr]), !n || n != vr && n != mr && !t || n == mr && !e || n == dr && !a) throw Error("Invalid checkActionCode response!");
                        n == mr ? (b[Er] = t || null, b[kr] = t || null, b[Tr] = e) : (b[Er] = e || null, b[kr] = e || null, b[Tr] = t || null), b[Ar] = a || null, er(this, Sr, n), er(this, Nr, rr(b))
                    }
                    C(fr, or), fr.prototype.w = function() {
                        var a = fr.$a.w.call(this);
                        return a.phoneNumber = this.phoneNumber, a
                    };
                    var dr = "REVERT_SECOND_FACTOR_ADDITION",
                        vr = "EMAIL_SIGNIN",
                        mr = "VERIFY_AND_CHANGE_EMAIL",
                        gr = "email",
                        yr = "mfaInfo",
                        wr = "newEmail",
                        Ir = "requestType",
                        Tr = "email",
                        Er = "fromEmail",
                        Ar = "multiFactorInfo",
                        kr = "previousEmail",
                        Nr = "data",
                        Sr = "operation";

                    function _r(a) {
                        var b = qn(a = Hn(a), Or) || null,
                            t = qn(a, Cr) || null,
                            e = qn(a, Dr) || null;
                        if (e = e && xr[e] || null, !b || !t || !e) throw new P("argument-error", Or + ", " + Cr + "and " + Dr + " are required in a valid action code URL.");
                        nr(this, {
                            apiKey: b,
                            operation: e,
                            code: t,
                            continueUrl: qn(a, Pr) || null,
                            languageCode: qn(a, Rr) || null,
                            tenantId: qn(a, Lr) || null
                        })
                    }
                    var Or = "apiKey",
                        Cr = "oobCode",
                        Pr = "continueUrl",
                        Rr = "languageCode",
                        Dr = "mode",
                        Lr = "tenantId",
                        xr = {
                            recoverEmail: "RECOVER_EMAIL",
                            resetPassword: "PASSWORD_RESET",
                            revertSecondFactorAddition: dr,
                            signIn: vr,
                            verifyAndChangeEmail: mr,
                            verifyEmail: "VERIFY_EMAIL"
                        };

                    function Mr(a) {
                        try {
                            return new _r(a)
                        } catch (t) {
                            return null
                        }
                    }

                    function jr(a) {
                        var b = a[qr];
                        if (void 0 === b) throw new P("missing-continue-uri");
                        if ("string" != typeof b || "string" == typeof b && !b.length) throw new P("invalid-continue-uri");
                        this.h = b, this.b = this.a = null, this.g = !1;
                        var t = a[Ur];
                        if (t && "object" == typeof t) {
                            b = t[Br];
                            var e = t[Hr];
                            if (t = t[Gr], "string" == typeof b && b.length) {
                                if (this.a = b, void 0 !== e && "boolean" != typeof e) throw new P("argument-error", Hr + " property must be a boolean when specified.");
                                if (this.g = !!e, void 0 !== t && ("string" != typeof t || "string" == typeof t && !t.length)) throw new P("argument-error", Gr + " property must be a non empty string when specified.");
                                this.b = t || null
                            } else {
                                if (void 0 !== b) throw new P("argument-error", Br + " property must be a non empty string when specified.");
                                if (void 0 !== e || void 0 !== t) throw new P("missing-android-pkg-name")
                            }
                        } else if (void 0 !== t) throw new P("argument-error", Ur + " property must be a non null object when specified.");
                        if (this.f = null, (b = a[Kr]) && "object" == typeof b) {
                            if ("string" == typeof(b = b[Wr]) && b.length) this.f = b;
                            else if (void 0 !== b) throw new P("argument-error", Wr + " property must be a non empty string when specified.")
                        } else if (void 0 !== b) throw new P("argument-error", Kr + " property must be a non null object when specified.");
                        if (void 0 !== (b = a[Fr]) && "boolean" != typeof b) throw new P("argument-error", Fr + " property must be a boolean when specified.");
                        if (this.c = !!b, void 0 !== (a = a[Vr]) && ("string" != typeof a || "string" == typeof a && !a.length)) throw new P("argument-error", Vr + " property must be a non empty string when specified.");
                        this.i = a || null
                    }
                    var Ur = "android",
                        Vr = "dynamicLinkDomain",
                        Fr = "handleCodeInApp",
                        Kr = "iOS",
                        qr = "url",
                        Hr = "installApp",
                        Gr = "minimumVersion",
                        Br = "packageName",
                        Wr = "bundleId";

                    function Xr(a) {
                        var b = {};
                        for (var t in b.continueUrl = a.h, b.canHandleCodeInApp = a.c, (b.androidPackageName = a.a) && (b.androidMinimumVersion = a.b, b.androidInstallApp = a.g), b.iOSBundleId = a.f, b.dynamicLinkDomain = a.i, b) null === b[t] && delete b[t];
                        return b
                    }
                    var Jr = null;

                    function Yr(a) {
                        var b = "";
                        return function(a, b) {
                            function t(t) {
                                for (; e < a.length;) {
                                    var p = a.charAt(e++),
                                        n = Jr[p];
                                    if (null != n) return n;
                                    if (!/^[\s\xa0]*$/.test(p)) throw Error("Unknown base64 encoding at char: " + p)
                                }
                                return t
                            }! function() {
                                if (!Jr) {
                                    Jr = {};
                                    for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], t = 0; 5 > t; t++)
                                        for (var e = a.concat(b[t].split("")), n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            void 0 === Jr[r] && (Jr[r] = n)
                                        }
                                }
                            }();
                            for (var e = 0;;) {
                                var n = t(-1),
                                    r = t(0),
                                    g = t(64),
                                    o = t(64);
                                if (64 === o && -1 === n) break;
                                b(n << 2 | r >> 4), 64 != g && (b(r << 4 & 240 | g >> 2), 64 != o && b(g << 6 & 192 | o))
                            }
                        }(a, (function(t) {
                            b += String.fromCharCode(t)
                        })), b
                    }

                    function zr(a) {
                        var b = Zr(a);
                        if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error("Invalid JWT");
                        this.g = a, this.c = b.exp, this.h = b.sub, O(), this.a = b.provider_id || b.firebase && b.firebase.sign_in_provider || null, this.f = b.firebase && b.firebase.tenant || null, this.b = !!b.is_anonymous || "anonymous" == this.a
                    }

                    function $r(a) {
                        try {
                            return new zr(a)
                        } catch (t) {
                            return null
                        }
                    }

                    function Zr(a) {
                        if (!a) return null;
                        if (3 != (a = a.split(".")).length) return null;
                        for (var b = (4 - (a = a[1]).length % 4) % 4, t = 0; t < b; t++) a += ".";
                        try {
                            return JSON.parse(Yr(a))
                        } catch (t) {}
                        return null
                    }
                    zr.prototype.S = function() {
                        return this.f
                    }, zr.prototype.i = function() {
                        return this.b
                    }, zr.prototype.toString = function() {
                        return this.g
                    };
                    var Qr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                        to = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                        eo = {
                            md: {
                                Ja: "locale",
                                ua: 700,
                                ta: 600,
                                fa: "facebook.com",
                                Wa: to
                            },
                            od: {
                                Ja: null,
                                ua: 500,
                                ta: 750,
                                fa: "github.com",
                                Wa: to
                            },
                            pd: {
                                Ja: "hl",
                                ua: 515,
                                ta: 680,
                                fa: "google.com",
                                Wa: to
                            },
                            vd: {
                                Ja: "lang",
                                ua: 485,
                                ta: 705,
                                fa: "twitter.com",
                                Wa: Qr
                            },
                            jd: {
                                Ja: "locale",
                                ua: 640,
                                ta: 600,
                                fa: "apple.com",
                                Wa: []
                            }
                        };

                    function no(a) {
                        for (var b in eo)
                            if (eo[b].fa == a) return eo[b];
                        return null
                    }

                    function io(a) {
                        var b = {};
                        b["facebook.com"] = uo, b["google.com"] = ho, b["github.com"] = co, b["twitter.com"] = lo;
                        var t = a && a[oo];
                        try {
                            if (t) return b[t] ? new b[t](a) : new so(a);
                            if (void 0 !== a[ro]) return new ao(a)
                        } catch (t) {}
                        return null
                    }
                    var ro = "idToken",
                        oo = "providerId";

                    function ao(a) {
                        var b = a[oo];
                        if (!b && a[ro]) {
                            var t = $r(a[ro]);
                            t && t.a && (b = t.a)
                        }
                        if (!b) throw Error("Invalid additional user info!");
                        "anonymous" != b && "custom" != b || (b = null), t = !1, void 0 !== a.isNewUser ? t = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (t = !0), er(this, "providerId", b), er(this, "isNewUser", t)
                    }

                    function so(a) {
                        ao.call(this, a), er(this, "profile", rr((a = Ki(a.rawUserInfo || "{}")) || {}))
                    }

                    function uo(a) {
                        if (so.call(this, a), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
                    }

                    function co(a) {
                        if (so.call(this, a), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                        er(this, "username", this.profile && this.profile.login || null)
                    }

                    function ho(a) {
                        if (so.call(this, a), "google.com" != this.providerId) throw Error("Invalid provider ID!")
                    }

                    function lo(a) {
                        if (so.call(this, a), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                        er(this, "username", a.screenName || null)
                    }

                    function fo(a) {
                        var b = Hn(a),
                            t = qn(b, "link"),
                            e = qn(Hn(t), "link");
                        return b = qn(b, "deep_link_id"), qn(Hn(b), "link") || b || e || t || a
                    }

                    function po(a, b) {
                        if (!a && !b) throw new P("internal-error", "Internal assert: no raw session string available");
                        if (a && b) throw new P("internal-error", "Internal assert: unable to determine the session type");
                        this.a = a || null, this.b = b || null, this.type = this.a ? vo : mo
                    }
                    C(so, ao), C(uo, so), C(co, so), C(ho, so), C(lo, so);
                    var vo = "enroll",
                        mo = "signin";

                    function go() {}

                    function bo(a, b) {
                        return a.then((function(t) {
                            if (t[is]) {
                                var e = $r(t[is]);
                                if (!e || b != e.h) throw new P("user-mismatch");
                                return t
                            }
                            throw new P("user-mismatch")
                        })).s((function(t) {
                            throw t && t.code && t.code == L + "user-not-found" ? new P("user-mismatch") : t
                        }))
                    }

                    function yo(a, b) {
                        if (!b) throw new P("internal-error", "failed to construct a credential");
                        this.a = b, er(this, "providerId", a), er(this, "signInMethod", a)
                    }

                    function wo(a) {
                        return {
                            pendingToken: a.a,
                            requestUri: "http://localhost"
                        }
                    }

                    function Io(a) {
                        if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken) try {
                            return new yo(a.providerId, a.pendingToken)
                        } catch (t) {}
                        return null
                    }

                    function To(a, b, t) {
                        if (this.a = null, b.idToken || b.accessToken) b.idToken && er(this, "idToken", b.idToken), b.accessToken && er(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && er(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);
                        else {
                            if (!b.oauthToken || !b.oauthTokenSecret) throw new P("internal-error", "failed to construct a credential");
                            er(this, "accessToken", b.oauthToken), er(this, "secret", b.oauthTokenSecret)
                        }
                        er(this, "providerId", a), er(this, "signInMethod", t)
                    }

                    function Eo(a) {
                        var b = {};
                        return a.idToken && (b.id_token = a.idToken), a.accessToken && (b.access_token = a.accessToken), a.secret && (b.oauth_token_secret = a.secret), b.providerId = a.providerId, a.nonce && !a.a && (b.nonce = a.nonce), b = {
                            postBody: ei(b).toString(),
                            requestUri: "http://localhost"
                        }, a.a && (delete b.postBody, b.pendingToken = a.a), b
                    }

                    function Ao(a) {
                        if (a && a.providerId && a.signInMethod) {
                            var b = {
                                idToken: a.oauthIdToken,
                                accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
                                oauthTokenSecret: a.oauthTokenSecret,
                                oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
                                nonce: a.nonce,
                                pendingToken: a.pendingToken
                            };
                            try {
                                return new To(a.providerId, b, a.signInMethod)
                            } catch (t) {}
                        }
                        return null
                    }

                    function ko(a, b) {
                        this.Pc = b || [], nr(this, {
                            providerId: a,
                            isOAuthProvider: !0
                        }), this.Hb = {}, this.ob = (no(a) || {}).Ja || null, this.nb = null
                    }

                    function No(a) {
                        if ("string" != typeof a || 0 != a.indexOf("saml.")) throw new P("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                        ko.call(this, a, [])
                    }

                    function So(a) {
                        ko.call(this, a, to), this.a = []
                    }

                    function _o() {
                        So.call(this, "facebook.com")
                    }

                    function Oo(a) {
                        if (!a) throw new P("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                        var b = a;
                        return T(a) && (b = a.accessToken), (new _o).credential({
                            accessToken: b
                        })
                    }

                    function Co() {
                        So.call(this, "github.com")
                    }

                    function Po(a) {
                        if (!a) throw new P("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
                        var b = a;
                        return T(a) && (b = a.accessToken), (new Co).credential({
                            accessToken: b
                        })
                    }

                    function Ro() {
                        So.call(this, "google.com"), this.Ca("profile")
                    }

                    function Do(a, b) {
                        var t = a;
                        return T(a) && (t = a.idToken, b = a.accessToken), (new Ro).credential({
                            idToken: t,
                            accessToken: b
                        })
                    }

                    function Lo() {
                        ko.call(this, "twitter.com", Qr)
                    }

                    function xo(a, b) {
                        var t = a;
                        if (T(t) || (t = {
                                oauthToken: a,
                                oauthTokenSecret: b
                            }), !t.oauthToken || !t.oauthTokenSecret) throw new P("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
                        return new To("twitter.com", t, "twitter.com")
                    }

                    function Mo(a, b, t) {
                        this.a = a, this.f = b, er(this, "providerId", "password"), er(this, "signInMethod", t === Uo.EMAIL_LINK_SIGN_IN_METHOD ? Uo.EMAIL_LINK_SIGN_IN_METHOD : Uo.EMAIL_PASSWORD_SIGN_IN_METHOD)
                    }

                    function jo(a) {
                        return a && a.email && a.password ? new Mo(a.email, a.password, a.signInMethod) : null
                    }

                    function Uo() {
                        nr(this, {
                            providerId: "password",
                            isOAuthProvider: !1
                        })
                    }

                    function Vo(a, b) {
                        if (!(b = Fo(b))) throw new P("argument-error", "Invalid email link!");
                        return new Mo(a, b.code, Uo.EMAIL_LINK_SIGN_IN_METHOD)
                    }

                    function Fo(a) {
                        return (a = Mr(a = fo(a))) && a.operation === vr ? a : null
                    }

                    function Ko(a) {
                        if (!(a.cb && a.bb || a.La && a.ea)) throw new P("internal-error");
                        this.a = a, er(this, "providerId", "phone"), this.fa = "phone", er(this, "signInMethod", "phone")
                    }

                    function qo(a) {
                        if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
                            var b = {};
                            return Y(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(t) {
                                a[t] && (b[t] = a[t])
                            })), new Ko(b)
                        }
                        return null
                    }

                    function Ho(a) {
                        return a.a.La && a.a.ea ? {
                            temporaryProof: a.a.La,
                            phoneNumber: a.a.ea
                        } : {
                            sessionInfo: a.a.cb,
                            code: a.a.bb
                        }
                    }

                    function Go(a) {
                        try {
                            this.a = a || e.a.auth()
                        } catch (t) {
                            throw new P("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                        }
                        nr(this, {
                            providerId: "phone",
                            isOAuthProvider: !1
                        })
                    }

                    function Bo(a, b) {
                        if (!a) throw new P("missing-verification-id");
                        if (!b) throw new P("missing-verification-code");
                        return new Ko({
                            cb: a,
                            bb: b
                        })
                    }

                    function Wo(a) {
                        if (a.temporaryProof && a.phoneNumber) return new Ko({
                            La: a.temporaryProof,
                            ea: a.phoneNumber
                        });
                        var b = a && a.providerId;
                        if (!b || "password" === b) return null;
                        var t = a && a.oauthAccessToken,
                            e = a && a.oauthTokenSecret,
                            n = a && a.nonce,
                            r = a && a.oauthIdToken,
                            g = a && a.pendingToken;
                        try {
                            switch (b) {
                                case "google.com":
                                    return Do(r, t);
                                case "facebook.com":
                                    return Oo(t);
                                case "github.com":
                                    return Po(t);
                                case "twitter.com":
                                    return xo(t, e);
                                default:
                                    return t || e || r || g ? g ? 0 == b.indexOf("saml.") ? new yo(b, g) : new To(b, {
                                        pendingToken: g,
                                        idToken: a.oauthIdToken,
                                        accessToken: a.oauthAccessToken
                                    }, b) : new So(b).credential({
                                        idToken: r,
                                        accessToken: t,
                                        rawNonce: n
                                    }) : null
                            }
                        } catch (t) {
                            return null
                        }
                    }

                    function Xo(a) {
                        if (!a.isOAuthProvider) throw new P("invalid-oauth-provider")
                    }

                    function Jo(a, b, t, e, n, r, g) {
                        if (this.c = a, this.b = b || null, this.g = t || null, this.f = e || null, this.i = r || null, this.h = g || null, this.a = n || null, !this.g && !this.a) throw new P("invalid-auth-event");
                        if (this.g && this.a) throw new P("invalid-auth-event");
                        if (this.g && !this.f) throw new P("invalid-auth-event")
                    }

                    function Yo(a) {
                        return (a = a || {}).type ? new Jo(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && R(a.error), a.postBody, a.tenantId) : null
                    }

                    function zo() {
                        this.b = null, this.a = []
                    }
                    po.prototype.Ha = function() {
                        return this.a ? Le(this.a) : Le(this.b)
                    }, po.prototype.w = function() {
                        return this.type == vo ? {
                            multiFactorSession: {
                                idToken: this.a
                            }
                        } : {
                            multiFactorSession: {
                                pendingCredential: this.b
                            }
                        }
                    }, go.prototype.ja = function() {}, go.prototype.b = function() {}, go.prototype.c = function() {}, go.prototype.w = function() {}, yo.prototype.ja = function(a) {
                        return ks(a, wo(this))
                    }, yo.prototype.b = function(a, b) {
                        var t = wo(this);
                        return t.idToken = b, Ns(a, t)
                    }, yo.prototype.c = function(a, b) {
                        return bo(Ss(a, wo(this)), b)
                    }, yo.prototype.w = function() {
                        return {
                            providerId: this.providerId,
                            signInMethod: this.signInMethod,
                            pendingToken: this.a
                        }
                    }, To.prototype.ja = function(a) {
                        return ks(a, Eo(this))
                    }, To.prototype.b = function(a, b) {
                        var t = Eo(this);
                        return t.idToken = b, Ns(a, t)
                    }, To.prototype.c = function(a, b) {
                        return bo(Ss(a, Eo(this)), b)
                    }, To.prototype.w = function() {
                        var a = {
                            providerId: this.providerId,
                            signInMethod: this.signInMethod
                        };
                        return this.idToken && (a.oauthIdToken = this.idToken), this.accessToken && (a.oauthAccessToken = this.accessToken), this.secret && (a.oauthTokenSecret = this.secret), this.nonce && (a.nonce = this.nonce), this.a && (a.pendingToken = this.a), a
                    }, ko.prototype.Ka = function(a) {
                        return this.Hb = Tt(a), this
                    }, C(No, ko), C(So, ko), So.prototype.Ca = function(a) {
                        return Q(this.a, a) || this.a.push(a), this
                    }, So.prototype.Pb = function() {
                        return it(this.a)
                    }, So.prototype.credential = function(a, b) {
                        var t;
                        if (!(t = T(a) ? {
                                idToken: a.idToken || null,
                                accessToken: a.accessToken || null,
                                nonce: a.rawNonce || null
                            } : {
                                idToken: a || null,
                                accessToken: b || null
                            }).idToken && !t.accessToken) throw new P("argument-error", "credential failed: must provide the ID token and/or the access token.");
                        return new To(this.providerId, t, this.providerId)
                    }, C(_o, So), er(_o, "PROVIDER_ID", "facebook.com"), er(_o, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), C(Co, So), er(Co, "PROVIDER_ID", "github.com"), er(Co, "GITHUB_SIGN_IN_METHOD", "github.com"), C(Ro, So), er(Ro, "PROVIDER_ID", "google.com"), er(Ro, "GOOGLE_SIGN_IN_METHOD", "google.com"), C(Lo, ko), er(Lo, "PROVIDER_ID", "twitter.com"), er(Lo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), Mo.prototype.ja = function(a) {
                        return this.signInMethod == Uo.EMAIL_LINK_SIGN_IN_METHOD ? uu(a, xs, {
                            email: this.a,
                            oobCode: this.f
                        }) : uu(a, iu, {
                            email: this.a,
                            password: this.f
                        })
                    }, Mo.prototype.b = function(a, b) {
                        return this.signInMethod == Uo.EMAIL_LINK_SIGN_IN_METHOD ? uu(a, Ms, {
                            idToken: b,
                            email: this.a,
                            oobCode: this.f
                        }) : uu(a, Ys, {
                            idToken: b,
                            email: this.a,
                            password: this.f
                        })
                    }, Mo.prototype.c = function(a, b) {
                        return bo(this.ja(a), b)
                    }, Mo.prototype.w = function() {
                        return {
                            email: this.a,
                            password: this.f,
                            signInMethod: this.signInMethod
                        }
                    }, nr(Uo, {
                        PROVIDER_ID: "password"
                    }), nr(Uo, {
                        EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                    }), nr(Uo, {
                        EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                    }), Ko.prototype.ja = function(a) {
                        return a.eb(Ho(this))
                    }, Ko.prototype.b = function(a, b) {
                        var t = Ho(this);
                        return t.idToken = b, uu(a, ou, t)
                    }, Ko.prototype.c = function(a, b) {
                        var t = Ho(this);
                        return t.operation = "REAUTH", bo(a = uu(a, au, t), b)
                    }, Ko.prototype.w = function() {
                        var a = {
                            providerId: "phone"
                        };
                        return this.a.cb && (a.verificationId = this.a.cb), this.a.bb && (a.verificationCode = this.a.bb), this.a.La && (a.temporaryProof = this.a.La), this.a.ea && (a.phoneNumber = this.a.ea), a
                    }, Go.prototype.eb = function(a, b) {
                        var t = this.a.a;
                        return Le(b.verify()).then((function(e) {
                            if ("string" != typeof e) throw new P("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                            switch (b.type) {
                                case "recaptcha":
                                    var n = T(a) ? a.session : null,
                                        r = T(a) ? a.phoneNumber : a;
                                    return (n && n.type == vo ? n.Ha().then((function(n) {
                                        return function(a, b) {
                                            return uu(a, $s, b).then((function(t) {
                                                return t.phoneSessionInfo.sessionInfo
                                            }))
                                        }(t, {
                                            idToken: n,
                                            phoneEnrollmentInfo: {
                                                phoneNumber: r,
                                                recaptchaToken: e
                                            }
                                        })
                                    })) : n && n.type == mo ? n.Ha().then((function(n) {
                                        return function(a, b) {
                                            return uu(a, Zs, b).then((function(t) {
                                                return t.phoneResponseInfo.sessionInfo
                                            }))
                                        }(t, {
                                            mfaPendingCredential: n,
                                            mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                                            phoneSignInInfo: {
                                                recaptchaToken: e
                                            }
                                        })
                                    })) : function(a, b) {
                                        return uu(a, Xs, b)
                                    }(t, {
                                        phoneNumber: r,
                                        recaptchaToken: e
                                    })).then((function(t) {
                                        return "function" == typeof b.reset && b.reset(), t
                                    }), (function(t) {
                                        throw "function" == typeof b.reset && b.reset(), t
                                    }));
                                default:
                                    throw new P("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                            }
                        }))
                    }, nr(Go, {
                        PROVIDER_ID: "phone"
                    }), nr(Go, {
                        PHONE_SIGN_IN_METHOD: "phone"
                    }), Jo.prototype.getUid = function() {
                        var a = [];
                        return a.push(this.c), this.b && a.push(this.b), this.f && a.push(this.f), this.h && a.push(this.h), a.join("-")
                    }, Jo.prototype.S = function() {
                        return this.h
                    }, Jo.prototype.w = function() {
                        return {
                            type: this.c,
                            eventId: this.b,
                            urlResponse: this.g,
                            sessionId: this.f,
                            postBody: this.i,
                            tenantId: this.h,
                            error: this.a && this.a.w()
                        }
                    };
                    var $o, Zo = null;

                    function th(a) {
                        var b = "unauthorized-domain",
                            t = void 0,
                            e = Hn(a);
                        a = e.a, "chrome-extension" == (e = e.f) ? t = Yt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == e || "https" == e ? t = Yt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment", P.call(this, b, t)
                    }

                    function Qo(a, b, t) {
                        P.call(this, a, t), (a = b || {}).Ib && er(this, "email", a.Ib), a.ea && er(this, "phoneNumber", a.ea), a.credential && er(this, "credential", a.credential), a.Yb && er(this, "tenantId", a.Yb)
                    }

                    function ta(a) {
                        if (a.code) {
                            var b = a.code || "";
                            0 == b.indexOf(L) && (b = b.substring(L.length));
                            var t = {
                                credential: Wo(a),
                                Yb: a.tenantId
                            };
                            if (a.email) t.Ib = a.email;
                            else if (a.phoneNumber) t.ea = a.phoneNumber;
                            else if (!t.credential) return new P(b, a.message || void 0);
                            return new Qo(b, t, a.message)
                        }
                        return null
                    }

                    function ea() {}

                    function na(a) {
                        return a.c || (a.c = a.b())
                    }

                    function ia() {}

                    function ra(a) {
                        if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], t = 0; t < b.length; t++) {
                                var e = b[t];
                                try {
                                    return new ActiveXObject(e), a.f = e
                                } catch (t) {}
                            }
                            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                        }
                        return a.f
                    }

                    function oa() {}

                    function aa() {
                        this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = q(this.pc, this), this.a.onerror = q(this.Rb, this), this.a.onprogress = q(this.qc, this), this.a.ontimeout = q(this.uc, this)
                    }

                    function sa(a, b) {
                        a.readyState = b, a.onreadystatechange && a.onreadystatechange()
                    }

                    function ua(a, b, t) {
                        this.reset(a, b, t, void 0, void 0)
                    }
                    C(th, P), C(Qo, P), Qo.prototype.w = function() {
                        var a = {
                            code: this.code,
                            message: this.message
                        };
                        this.email && (a.email = this.email), this.phoneNumber && (a.phoneNumber = this.phoneNumber), this.tenantId && (a.tenantId = this.tenantId);
                        var b = this.credential && this.credential.w();
                        return b && At(a, b), a
                    }, Qo.prototype.toJSON = function() {
                        return this.w()
                    }, ea.prototype.c = null, C(ia, ea), ia.prototype.a = function() {
                        var a = ra(this);
                        return a ? new ActiveXObject(a) : new XMLHttpRequest
                    }, ia.prototype.b = function() {
                        var a = {};
                        return ra(this) && (a[0] = !0, a[1] = !0), a
                    }, $o = new ia, C(oa, ea), oa.prototype.a = function() {
                        var a = new XMLHttpRequest;
                        if ("withCredentials" in a) return a;
                        if ("undefined" != typeof XDomainRequest) return new aa;
                        throw Error("Unsupported browser")
                    }, oa.prototype.b = function() {
                        return {}
                    }, (n = aa.prototype).open = function(a, b, t) {
                        if (null != t && !t) throw Error("Only async requests are supported.");
                        this.a.open(a, b)
                    }, n.send = function(a) {
                        if (a) {
                            if ("string" != typeof a) throw Error("Only string data is supported");
                            this.a.send(a)
                        } else this.a.send()
                    }, n.abort = function() {
                        this.a.abort()
                    }, n.setRequestHeader = function() {}, n.getResponseHeader = function(a) {
                        return "content-type" == a.toLowerCase() ? this.a.contentType : ""
                    }, n.pc = function() {
                        this.status = 200, this.response = this.responseText = this.a.responseText, sa(this, 4)
                    }, n.Rb = function() {
                        this.status = 500, this.response = this.responseText = "", sa(this, 4)
                    }, n.uc = function() {
                        this.Rb()
                    }, n.qc = function() {
                        this.status = 200, sa(this, 1)
                    }, n.getAllResponseHeaders = function() {
                        return "content-type: " + this.a.contentType
                    }, ua.prototype.a = null;

                    function ca(a) {
                        this.f = a, this.b = this.c = this.a = null
                    }

                    function ha(a, b) {
                        this.name = a, this.value = b
                    }
                    ua.prototype.reset = function(a, b, t, e, n) {
                        "number" == typeof n || 0, e || O(), delete this.a
                    }, ha.prototype.toString = function() {
                        return this.name
                    };
                    var la = new ha("SEVERE", 1e3),
                        fa = new ha("WARNING", 900),
                        pa = new ha("CONFIG", 700),
                        da = new ha("FINE", 500);
                    ca.prototype.log = function(a, b, t) {
                        if (a.value >= function t(a) {
                                return a.c ? a.c : a.a ? t(a.a) : (F("Root logger has no level set."), null)
                            }(this).value)
                            for (I(b) && (b = b()), a = new ua(a, String(b), this.f), t && (a.a = t), t = this; t;) t = t.a
                    };
                    var va = {},
                        ma = null;

                    function ga(a) {
                        var b;
                        if (ma || (ma = new ca(""), va[""] = ma, ma.c = pa), !(b = va[a])) {
                            b = new ca(a);
                            var t = a.lastIndexOf("."),
                                e = a.substr(t + 1);
                            (t = ga(a.substr(0, t))).b || (t.b = {}), t.b[e] = b, b.a = t, va[a] = b
                        }
                        return b
                    }

                    function ba(a, b) {
                        a && a.log(da, b, void 0)
                    }

                    function ya(a) {
                        this.f = a
                    }

                    function wa(a) {
                        kn.call(this), this.o = a, this.readyState = Ia, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.m = "GET", this.g = "", this.a = !1, this.h = ga("goog.net.FetchXmlHttp"), this.l = this.c = this.f = null
                    }
                    C(ya, ea), ya.prototype.a = function() {
                        return new wa(this.f)
                    }, ya.prototype.b = function(a) {
                        return function() {
                            return a
                        }
                    }({}), C(wa, kn);
                    var Ia = 0;

                    function Ta(a) {
                        a.c.read().then(a.oc.bind(a)).catch(a.Ta.bind(a))
                    }

                    function Ea(a, b) {
                        b && a.f && (a.status = a.f.status, a.statusText = a.f.statusText), a.readyState = 4, a.f = null, a.c = null, a.l = null, Aa(a)
                    }

                    function Aa(a) {
                        a.onreadystatechange && a.onreadystatechange.call(a)
                    }

                    function ka(a) {
                        kn.call(this), this.headers = new Dn, this.O = a || null, this.c = !1, this.A = this.a = null, this.h = this.P = this.l = "", this.f = this.N = this.i = this.G = !1, this.g = 0, this.o = null, this.m = Na, this.u = this.R = !1
                    }(n = wa.prototype).open = function(a, b) {
                        if (this.readyState != Ia) throw this.abort(), Error("Error reopening a connection");
                        this.m = a, this.g = b, this.readyState = 1, Aa(this)
                    }, n.send = function(a) {
                        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                        this.a = !0;
                        var b = {
                            headers: this.i,
                            method: this.m,
                            credentials: void 0,
                            cache: void 0
                        };
                        a && (b.body = a), this.o.fetch(new Request(this.g, b)).then(this.tc.bind(this), this.Ta.bind(this))
                    }, n.abort = function() {
                        this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, Ea(this, !1)), this.readyState = Ia
                    }, n.tc = function(a) {
                        this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Aa(this)), this.a && (this.readyState = 3, Aa(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : void 0 !== f.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder, Ta(this)) : a.text().then(this.sc.bind(this), this.Ta.bind(this)))))
                    }, n.oc = function(a) {
                        if (this.a) {
                            var b = this.l.decode(a.value ? a.value : new Uint8Array(0), {
                                stream: !a.done
                            });
                            b && (this.response = this.responseText += b), a.done ? Ea(this, !0) : Aa(this), 3 == this.readyState && Ta(this)
                        }
                    }, n.sc = function(a) {
                        this.a && (this.response = this.responseText = a, Ea(this, !0))
                    }, n.rc = function(a) {
                        this.a && (this.response = a, Ea(this, !0))
                    }, n.Ta = function(a) {
                        var b = this.h;
                        b && b.log(fa, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a)), this.a && Ea(this, !0)
                    }, n.setRequestHeader = function(a, b) {
                        this.i.append(a, b)
                    }, n.getResponseHeader = function(a) {
                        return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(fa, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "")
                    }, n.getAllResponseHeaders = function() {
                        if (!this.b) {
                            var a = this.h;
                            return a && a.log(fa, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), ""
                        }
                        a = [];
                        for (var b = this.b.entries(), t = b.next(); !t.done;) t = t.value, a.push(t[0] + ": " + t[1]), t = b.next();
                        return a.join("\r\n")
                    }, C(ka, kn);
                    var Na = "";
                    ka.prototype.b = ga("goog.net.XhrIo");
                    var Sa = /^https?$/i,
                        _a = ["POST", "PUT"];

                    function Oa(a, b, t, e, n) {
                        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
                        t = t ? t.toUpperCase() : "GET", a.l = b, a.h = "", a.P = t, a.G = !1, a.c = !0, a.a = a.O ? a.O.a() : $o.a(), a.A = a.O ? na(a.O) : na($o), a.a.onreadystatechange = q(a.Ub, a);
                        try {
                            ba(a.b, Ua(a, "Opening Xhr")), a.N = !0, a.a.open(t, String(b), !0), a.N = !1
                        } catch (t) {
                            return ba(a.b, Ua(a, "Error opening Xhr: " + t.message)), void Pa(a, t)
                        }
                        b = e || "";
                        var r = new Dn(a.headers);
                        n && function(a, b) {
                            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
                            else if (w(a) || "string" == typeof a) Y(a, b, void 0);
                            else
                                for (var t = Rn(a), e = Pn(a), n = e.length, r = 0; r < n; r++) b.call(void 0, e[r], t && t[r], a)
                        }(n, (function(g, t) {
                            r.set(t, g)
                        })), n = function(a) {
                            t: {
                                for (var b = Ca, t = a.length, e = "string" == typeof a ? a.split("") : a, n = 0; n < t; n++)
                                    if (n in e && b.call(void 0, e[n], n, a)) {
                                        b = n;
                                        break t
                                    }
                                b = -1
                            }
                            return 0 > b ? null : "string" == typeof a ? a.charAt(b) : a[b]
                        }(r.Y()), e = f.FormData && b instanceof f.FormData, !Q(_a, t) || n || e || r.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), r.forEach((function(g, t) {
                            this.a.setRequestHeader(t, g)
                        }), a), a.m && (a.a.responseType = a.m), "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);
                        try {
                            xa(a), 0 < a.g && (a.u = function(a) {
                                return te && le(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
                            }(a.a), ba(a.b, Ua(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q(a.Ma, a)) : a.o = On(a.Ma, a.g, a)), ba(a.b, Ua(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1
                        } catch (t) {
                            ba(a.b, Ua(a, "Send error: " + t.message)), Pa(a, t)
                        }
                    }

                    function Ca(a) {
                        return "content-type" == a.toLowerCase()
                    }

                    function Pa(a, b) {
                        a.c = !1, a.a && (a.f = !0, a.a.abort(), a.f = !1), a.h = b, Ra(a), La(a)
                    }

                    function Ra(a) {
                        a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
                    }

                    function Da(a) {
                        if (a.c && void 0 !== l)
                            if (a.A[1] && 4 == Ma(a) && 2 == ja(a)) ba(a.b, Ua(a, "Local request error detected and ignored"));
                            else if (a.i && 4 == Ma(a)) On(a.Ub, 0, a);
                        else if (a.dispatchEvent("readystatechange"), 4 == Ma(a)) {
                            ba(a.b, Ua(a, "Request complete")), a.c = !1;
                            try {
                                var t, b = ja(a);
                                t: switch (b) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var e = !0;
                                        break t;
                                    default:
                                        e = !1
                                }
                                if (!(t = e)) {
                                    var n;
                                    if (n = 0 === b) {
                                        var r = String(a.l).match(Mn)[1] || null;
                                        if (!r && f.self && f.self.location) {
                                            var g = f.self.location.protocol;
                                            r = g.substr(0, g.length - 1)
                                        }
                                        n = !Sa.test(r ? r.toLowerCase() : "")
                                    }
                                    t = n
                                }
                                if (t) a.dispatchEvent("complete"), a.dispatchEvent("success");
                                else {
                                    try {
                                        var o = 2 < Ma(a) ? a.a.statusText : ""
                                    } catch (t) {
                                        ba(a.b, "Can not get status: " + t.message), o = ""
                                    }
                                    a.h = o + " [" + ja(a) + "]", Ra(a)
                                }
                            } finally {
                                La(a)
                            }
                        }
                    }

                    function La(a, b) {
                        if (a.a) {
                            xa(a);
                            var t = a.a,
                                e = a.A[0] ? m : null;
                            a.a = null, a.A = null, b || a.dispatchEvent("ready");
                            try {
                                t.onreadystatechange = e
                            } catch (t) {
                                (a = a.b) && a.log(la, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                            }
                        }
                    }

                    function xa(a) {
                        a.a && a.u && (a.a.ontimeout = null), a.o && (f.clearTimeout(a.o), a.o = null)
                    }

                    function Ma(a) {
                        return a.a ? a.a.readyState : 0
                    }

                    function ja(a) {
                        try {
                            return 2 < Ma(a) ? a.a.status : -1
                        } catch (t) {
                            return -1
                        }
                    }

                    function Ua(a, b) {
                        return b + " [" + a.P + " " + a.l + " " + ja(a) + "]"
                    }

                    function li(a) {
                        var b = Ya;
                        this.g = [], this.u = b, this.o = a || null, this.f = this.a = !1, this.c = void 0, this.m = this.A = this.i = !1, this.h = 0, this.b = null, this.l = 0
                    }

                    function Va(a, b, t) {
                        a.a = !0, a.c = t, a.f = !b, Ha(a)
                    }

                    function Fa(a) {
                        if (a.a) {
                            if (!a.m) throw new Ga(a);
                            a.m = !1
                        }
                    }

                    function Ka(a, b, t, e) {
                        a.g.push([b, t, e]), a.a && Ha(a)
                    }

                    function qa(a) {
                        return Z(a.g, (function(b) {
                            return I(b[1])
                        }))
                    }

                    function Ha(a) {
                        if (a.h && a.a && qa(a)) {
                            var b = a.h,
                                t = Xa[b];
                            t && (f.clearTimeout(t.a), delete Xa[b]), a.h = 0
                        }
                        a.b && (a.b.l--, delete a.b), b = a.c;
                        for (var e = t = !1; a.g.length && !a.i;) {
                            var n = a.g.shift(),
                                r = n[0],
                                g = n[1];
                            if (n = n[2], r = a.f ? g : r) try {
                                var o = r.call(n || a.o, b);
                                void 0 !== o && (a.f = a.f && (o == b || o instanceof Error), a.c = b = o), (U(b) || "function" == typeof f.Promise && b instanceof f.Promise) && (e = !0, a.i = !0)
                            } catch (e) {
                                b = e, a.f = !0, qa(a) || (t = !0)
                            }
                        }
                        a.c = b, e && (o = q(a.v, a, !0), e = q(a.v, a, !1), b instanceof li ? (Ka(b, o, e), b.A = !0) : b.then(o, e)), t && (b = new Wa(b), Xa[b.a] = b, a.h = b.a)
                    }

                    function Ga() {
                        u.call(this)
                    }

                    function Ba() {
                        u.call(this)
                    }

                    function Wa(a) {
                        this.a = f.setTimeout(q(this.c, this), 0), this.b = a
                    }(n = ka.prototype).Ma = function() {
                        void 0 !== l && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", ba(this.b, Ua(this, this.h)), this.dispatchEvent("timeout"), this.abort(8))
                    }, n.abort = function() {
                        this.a && this.c && (ba(this.b, Ua(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), La(this))
                    }, n.Da = function() {
                        this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), La(this, !0)), ka.$a.Da.call(this)
                    }, n.Ub = function() {
                        this.xa || (this.N || this.i || this.f ? Da(this) : this.Ic())
                    }, n.Ic = function() {
                        Da(this)
                    }, n.getResponse = function() {
                        try {
                            if (!this.a) return null;
                            if ("response" in this.a) return this.a.response;
                            switch (this.m) {
                                case Na:
                                case "text":
                                    return this.a.responseText;
                                case "arraybuffer":
                                    if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                            }
                            var a = this.b;
                            return a && a.log(la, "Response type " + this.m + " is not supported on this browser", void 0), null
                        } catch (t) {
                            return ba(this.b, "Can not get response: " + t.message), null
                        }
                    }, li.prototype.cancel = function(a) {
                        if (this.a) this.c instanceof li && this.c.cancel();
                        else {
                            if (this.b) {
                                var b = this.b;
                                delete this.b, a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
                            }
                            this.u ? this.u.call(this.o, this) : this.m = !0, this.a || (a = new Ba(this), Fa(this), Va(this, !1, a))
                        }
                    }, li.prototype.v = function(a, b) {
                        this.i = !1, Va(this, a, b)
                    }, li.prototype.then = function(a, b, t) {
                        var e, n, r = new Se((function(g, t) {
                            e = g, n = t
                        }));
                        return Ka(this, e, (function(g) {
                            g instanceof Ba ? r.cancel() : n(g)
                        })), r.then(a, b, t)
                    }, li.prototype.$goog_Thenable = !0, C(Ga, u), Ga.prototype.message = "Deferred has already fired", Ga.prototype.name = "AlreadyCalledError", C(Ba, u), Ba.prototype.message = "Deferred was canceled", Ba.prototype.name = "CanceledError", Wa.prototype.c = function() {
                        throw delete Xa[this.a], this.b
                    };
                    var Xa = {};

                    function Ja(a) {
                        var b = {},
                            t = b.document || document,
                            e = Rt(a).toString(),
                            n = ye(document, "SCRIPT"),
                            r = {
                                Vb: n,
                                Ma: void 0
                            },
                            g = new li(r),
                            o = null,
                            c = null != b.timeout ? b.timeout : 5e3;
                        return 0 < c && (o = window.setTimeout((function() {
                                za(n, !0);
                                var p = new Qa(Za, "Timeout reached for loading script " + e);
                                Fa(g), Va(g, !1, p)
                            }), c), r.Ma = o), n.onload = n.onreadystatechange = function() {
                                n.readyState && "loaded" != n.readyState && "complete" != n.readyState || (za(n, b.wd || !1, o), Fa(g), Va(g, !0, null))
                            }, n.onerror = function() {
                                za(n, !0, o);
                                var p = new Qa($a, "Error while loading script " + e);
                                Fa(g), Va(g, !1, p)
                            }, At(r = b.attributes || {}, {
                                type: "text/javascript",
                                charset: "UTF-8"
                            }), de(n, r),
                            function(a, b) {
                                kt(a, "HTMLScriptElement"), a.src = Rt(b), null === v && (v = (b = (b = f.document).querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && d.test(b) ? b : ""), (b = v) && a.setAttribute("nonce", b)
                            }(n, a),
                            function(a) {
                                var b;
                                return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
                            }(t).appendChild(n), g
                    }

                    function Ya() {
                        if (this && this.Vb) {
                            var a = this.Vb;
                            a && "SCRIPT" == a.tagName && za(a, !0, this.Ma)
                        }
                    }

                    function za(a, b, t) {
                        null != t && f.clearTimeout(t), a.onload = m, a.onerror = m, a.onreadystatechange = m, b && window.setTimeout((function() {
                            a && a.parentNode && a.parentNode.removeChild(a)
                        }), 0)
                    }
                    var $a = 0,
                        Za = 1;

                    function Qa(a, b) {
                        var t = "Jsloader error (code #" + a + ")";
                        b && (t += ": " + b), u.call(this, t), this.code = a
                    }

                    function ts(a) {
                        this.f = a
                    }

                    function es(a, b, t) {
                        if (this.c = a, a = b || {}, this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.v = a.secureTokenTimeout || rs, this.g = Tt(a.secureTokenHeaders || os), this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.m = a.firebaseTimeout || as, this.a = Tt(a.firebaseHeaders || ss), t && (this.a["X-Client-Version"] = t, this.g["X-Client-Version"] = t), t = "Node" == ki(), !(t = f.XMLHttpRequest || t && e.a.INTERNAL.node && e.a.INTERNAL.node.XMLHttpRequest) && !Ai()) throw new P("internal-error", "The XMLHttpRequest compatibility library was not found.");
                        this.f = void 0, Ai() ? this.f = new ya(self) : Ni() ? this.f = new ts(t) : this.f = new oa, this.b = null
                    }
                    C(Qa, u), C(ts, ea), ts.prototype.a = function() {
                        return new this.f
                    }, ts.prototype.b = function() {
                        return {}
                    };
                    var ns, is = "idToken",
                        rs = new Bi(3e4, 6e4),
                        os = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        as = new Bi(3e4, 6e4),
                        ss = {
                            "Content-Type": "application/json"
                        };

                    function us(a, b) {
                        b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"]
                    }

                    function cs(a, b) {
                        b && (a.l = hs("https://securetoken.googleapis.com/v1/token", b), a.h = hs("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b), a.i = hs("https://identitytoolkit.googleapis.com/v2/", b))
                    }

                    function hs(a, b) {
                        return a = Hn(a), b = Hn(b.url), a.c = a.a + a.c, Un(a, b.f), a.a = b.a, Vn(a, b.g), a.toString()
                    }

                    function ls(a, b) {
                        b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"])
                    }

                    function fs(a, b, t, e, n, r, g) {
                        (function() {
                            var a = Ri();
                            return !((a = Oi(a) != _i ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null) && 30 > a) && (!te || !ce || 9 < ce)
                        })() || Ai() ? a = q(a.u, a) : (ns || (ns = new Se((function(t, e) {
                            ! function(a, b) {
                                if (((window.gapi || {}).client || {}).request) a();
                                else {
                                    f[ds] = function() {
                                            ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
                                        },
                                        function(a, b) {
                                            Ka(a, null, b, void 0)
                                        }(Ja(Dt(ps, {
                                            onload: ds
                                        })), (function() {
                                            b(Error("CORS_UNSUPPORTED"))
                                        }))
                                }
                            }(t, e)
                        }))), a = q(a.o, a)), a(b, t, e, n, r, g)
                    }
                    es.prototype.S = function() {
                        return this.b
                    }, es.prototype.u = function(a, b, t, e, n, r) {
                        if (Ai() && (void 0 === f.fetch || void 0 === f.Headers || void 0 === f.Request)) throw new P("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                        var g = new ka(this.f);
                        if (r) {
                            g.g = Math.max(0, r);
                            var o = setTimeout((function() {
                                g.dispatchEvent("timeout")
                            }), r)
                        }
                        Nn(g, "complete", (function() {
                            o && clearTimeout(o);
                            var t = null;
                            try {
                                t = JSON.parse(function(a) {
                                    try {
                                        return a.a ? a.a.responseText : ""
                                    } catch (t) {
                                        return ba(a.b, "Can not get responseText: " + t.message), ""
                                    }
                                }(this)) || null
                            } catch (e) {
                                t = null
                            }
                            b && b(t)
                        })), Sn(g, "ready", (function() {
                            o && clearTimeout(o), $e(this)
                        })), Sn(g, "timeout", (function() {
                            o && clearTimeout(o), $e(this), b && b(null)
                        })), Oa(g, a, t, e, n)
                    };
                    var ps = new Nt(Ot, "https://apis.google.com/js/client.js?onload=%{onload}"),
                        ds = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                    function vs(a, b, t, e, n, r, g) {
                        var o = Hn(b + t);
                        Kn(o, "key", a.c), g && Kn(o, "cb", O().toString());
                        var c = "GET" == e;
                        if (c)
                            for (var p in n) n.hasOwnProperty(p) && Kn(o, p, n[p]);
                        return new Se((function(t, h) {
                            fs(a, o.toString(), (function(e) {
                                e ? e.error ? h(hu(e, r || {})) : t(e) : h(new P("network-request-failed"))
                            }), e, c ? void 0 : si(Fi(n)), a.a, a.m.get())
                        }))
                    }

                    function ms(a) {
                        if ("string" != typeof(a = a.email) || !wi.test(a)) throw new P("invalid-email")
                    }

                    function gs(a) {
                        "email" in a && ms(a)
                    }

                    function bs(a) {
                        if (!a[is]) {
                            if (a.mfaPendingCredential) throw new P("multi-factor-auth-required", null, Tt(a));
                            throw new P("internal-error")
                        }
                    }

                    function ys(a) {
                        if (a.phoneNumber || a.temporaryProof) {
                            if (!a.phoneNumber || !a.temporaryProof) throw new P("internal-error")
                        } else {
                            if (!a.sessionInfo) throw new P("missing-verification-id");
                            if (!a.code) throw new P("missing-verification-code")
                        }
                    }
                    es.prototype.o = function(a, b, t, e, n) {
                        var r = this;
                        ns.then((function() {
                            window.gapi.client.setApiKey(r.c);
                            var g = window.gapi.auth.getToken();
                            window.gapi.auth.setToken(null), window.gapi.client.request({
                                path: a,
                                method: t,
                                body: e,
                                headers: n,
                                authType: "none",
                                callback: function(t) {
                                    window.gapi.auth.setToken(g), b && b(t)
                                }
                            })
                        })).s((function(g) {
                            b && b({
                                error: {
                                    message: g && g.message || "CORS_UNSUPPORTED"
                                }
                            })
                        }))
                    }, es.prototype.yb = function() {
                        return uu(this, zs, {})
                    }, es.prototype.Ab = function(a, b) {
                        return uu(this, Js, {
                            idToken: a,
                            email: b
                        })
                    }, es.prototype.Bb = function(a, b) {
                        return uu(this, Ys, {
                            idToken: a,
                            password: b
                        })
                    };
                    var ws = {
                        displayName: "DISPLAY_NAME",
                        photoUrl: "PHOTO_URL"
                    };

                    function Is(a) {
                        if (!a.phoneVerificationInfo) throw new P("internal-error");
                        if (!a.phoneVerificationInfo.sessionInfo) throw new P("missing-verification-id");
                        if (!a.phoneVerificationInfo.code) throw new P("missing-verification-code")
                    }

                    function Ts(a) {
                        if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new P("internal-error")
                    }

                    function Es(a, b) {
                        return b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (ii(a = new Qn(a.postBody), "nonce") && (b.nonce = a.get("nonce")))), b
                    }

                    function As(a) {
                        var b = null;
                        if (a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = ta(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = ta(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = ta(a)) : a.errorMessage && (b = cu(a.errorMessage)), b) throw b;
                        bs(a)
                    }

                    function ks(a, b) {
                        return b.returnIdpCredential = !0, uu(a, Qs, b)
                    }

                    function Ns(a, b) {
                        return b.returnIdpCredential = !0, uu(a, eu, b)
                    }

                    function Ss(a, b) {
                        return b.returnIdpCredential = !0, b.autoCreate = !1, uu(a, tu, b)
                    }

                    function _s(a) {
                        if (!a.oobCode) throw new P("invalid-action-code")
                    }(n = es.prototype).Cb = function(a, b) {
                        var t = {
                                idToken: a
                            },
                            e = [];
                        return wt(ws, (function(n, r) {
                            var g = b[r];
                            null === g ? e.push(n) : r in b && (t[r] = g)
                        })), e.length && (t.deleteAttribute = e), uu(this, Js, t)
                    }, n.ub = function(a, b) {
                        return At(a = {
                            requestType: "PASSWORD_RESET",
                            email: a
                        }, b), uu(this, Hs, a)
                    }, n.vb = function(a, b) {
                        return At(a = {
                            requestType: "EMAIL_SIGNIN",
                            email: a
                        }, b), uu(this, Fs, a)
                    }, n.tb = function(a, b) {
                        return At(a = {
                            requestType: "VERIFY_EMAIL",
                            idToken: a
                        }, b), uu(this, Ks, a)
                    }, n.Db = function(a, b, t) {
                        return At(a = {
                            requestType: "VERIFY_AND_CHANGE_EMAIL",
                            idToken: a,
                            newEmail: b
                        }, t), uu(this, qs, a)
                    }, n.eb = function(a) {
                        return uu(this, ru, a)
                    }, n.mb = function(a, b) {
                        return uu(this, Ws, {
                            oobCode: a,
                            newPassword: b
                        })
                    }, n.Qa = function(a) {
                        return uu(this, Cs, {
                            oobCode: a
                        })
                    }, n.ib = function(a) {
                        return uu(this, Os, {
                            oobCode: a
                        })
                    };
                    var Os = {
                            endpoint: "setAccountInfo",
                            B: _s,
                            Z: "email",
                            C: !0
                        },
                        Cs = {
                            endpoint: "resetPassword",
                            B: _s,
                            F: function(a) {
                                var b = a.requestType;
                                if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b) throw new P("internal-error")
                            },
                            C: !0
                        },
                        Ps = {
                            endpoint: "signupNewUser",
                            B: function(a) {
                                if (ms(a), !a.password) throw new P("weak-password")
                            },
                            F: bs,
                            U: !0,
                            C: !0
                        },
                        Rs = {
                            endpoint: "createAuthUri",
                            C: !0
                        },
                        Ds = {
                            endpoint: "deleteAccount",
                            M: ["idToken"]
                        },
                        Ls = {
                            endpoint: "setAccountInfo",
                            M: ["idToken", "deleteProvider"],
                            B: function(a) {
                                if ("array" != y(a.deleteProvider)) throw new P("internal-error")
                            }
                        },
                        xs = {
                            endpoint: "emailLinkSignin",
                            M: ["email", "oobCode"],
                            B: ms,
                            F: bs,
                            U: !0,
                            C: !0
                        },
                        Ms = {
                            endpoint: "emailLinkSignin",
                            M: ["idToken", "email", "oobCode"],
                            B: ms,
                            F: bs,
                            U: !0
                        },
                        js = {
                            endpoint: "accounts/mfaEnrollment:finalize",
                            M: ["idToken", "phoneVerificationInfo"],
                            B: Is,
                            F: bs,
                            C: !0,
                            Na: !0
                        },
                        Us = {
                            endpoint: "accounts/mfaSignIn:finalize",
                            M: ["mfaPendingCredential", "phoneVerificationInfo"],
                            B: Is,
                            F: bs,
                            C: !0,
                            Na: !0
                        },
                        Vs = {
                            endpoint: "getAccountInfo"
                        },
                        Fs = {
                            endpoint: "getOobConfirmationCode",
                            M: ["requestType"],
                            B: function(a) {
                                if ("EMAIL_SIGNIN" != a.requestType) throw new P("internal-error");
                                ms(a)
                            },
                            Z: "email",
                            C: !0
                        },
                        Ks = {
                            endpoint: "getOobConfirmationCode",
                            M: ["idToken", "requestType"],
                            B: function(a) {
                                if ("VERIFY_EMAIL" != a.requestType) throw new P("internal-error")
                            },
                            Z: "email",
                            C: !0
                        },
                        qs = {
                            endpoint: "getOobConfirmationCode",
                            M: ["idToken", "newEmail", "requestType"],
                            B: function(a) {
                                if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType) throw new P("internal-error")
                            },
                            Z: "email",
                            C: !0
                        },
                        Hs = {
                            endpoint: "getOobConfirmationCode",
                            M: ["requestType"],
                            B: function(a) {
                                if ("PASSWORD_RESET" != a.requestType) throw new P("internal-error");
                                ms(a)
                            },
                            Z: "email",
                            C: !0
                        },
                        Gs = {
                            kb: !0,
                            endpoint: "getProjectConfig",
                            Tb: "GET"
                        },
                        Bs = {
                            kb: !0,
                            endpoint: "getRecaptchaParam",
                            Tb: "GET",
                            F: function(a) {
                                if (!a.recaptchaSiteKey) throw new P("internal-error")
                            }
                        },
                        Ws = {
                            endpoint: "resetPassword",
                            B: _s,
                            Z: "email",
                            C: !0
                        },
                        Xs = {
                            endpoint: "sendVerificationCode",
                            M: ["phoneNumber", "recaptchaToken"],
                            Z: "sessionInfo",
                            C: !0
                        },
                        Js = {
                            endpoint: "setAccountInfo",
                            M: ["idToken"],
                            B: gs,
                            U: !0
                        },
                        Ys = {
                            endpoint: "setAccountInfo",
                            M: ["idToken"],
                            B: function(a) {
                                if (gs(a), !a.password) throw new P("weak-password")
                            },
                            F: bs,
                            U: !0
                        },
                        zs = {
                            endpoint: "signupNewUser",
                            F: bs,
                            U: !0,
                            C: !0
                        },
                        $s = {
                            endpoint: "accounts/mfaEnrollment:start",
                            M: ["idToken", "phoneEnrollmentInfo"],
                            B: function(a) {
                                if (!a.phoneEnrollmentInfo) throw new P("internal-error");
                                if (!a.phoneEnrollmentInfo.phoneNumber) throw new P("missing-phone-number");
                                if (!a.phoneEnrollmentInfo.recaptchaToken) throw new P("missing-app-credential")
                            },
                            F: function(a) {
                                if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo) throw new P("internal-error")
                            },
                            C: !0,
                            Na: !0
                        },
                        Zs = {
                            endpoint: "accounts/mfaSignIn:start",
                            M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                            B: function(a) {
                                if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken) throw new P("missing-app-credential")
                            },
                            F: function(a) {
                                if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo) throw new P("internal-error")
                            },
                            C: !0,
                            Na: !0
                        },
                        Qs = {
                            endpoint: "verifyAssertion",
                            B: Ts,
                            Xa: Es,
                            F: As,
                            U: !0,
                            C: !0
                        },
                        tu = {
                            endpoint: "verifyAssertion",
                            B: Ts,
                            Xa: Es,
                            F: function(a) {
                                if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new P("user-not-found");
                                if (a.errorMessage) throw cu(a.errorMessage);
                                bs(a)
                            },
                            U: !0,
                            C: !0
                        },
                        eu = {
                            endpoint: "verifyAssertion",
                            B: function(a) {
                                if (Ts(a), !a.idToken) throw new P("internal-error")
                            },
                            Xa: Es,
                            F: As,
                            U: !0
                        },
                        nu = {
                            endpoint: "verifyCustomToken",
                            B: function(a) {
                                if (!a.token) throw new P("invalid-custom-token")
                            },
                            F: bs,
                            U: !0,
                            C: !0
                        },
                        iu = {
                            endpoint: "verifyPassword",
                            B: function(a) {
                                if (ms(a), !a.password) throw new P("wrong-password")
                            },
                            F: bs,
                            U: !0,
                            C: !0
                        },
                        ru = {
                            endpoint: "verifyPhoneNumber",
                            B: ys,
                            F: bs,
                            C: !0
                        },
                        ou = {
                            endpoint: "verifyPhoneNumber",
                            B: function(a) {
                                if (!a.idToken) throw new P("internal-error");
                                ys(a)
                            },
                            F: function(a) {
                                if (a.temporaryProof) throw a.code = "credential-already-in-use", ta(a);
                                bs(a)
                            }
                        },
                        au = {
                            Gb: {
                                USER_NOT_FOUND: "user-not-found"
                            },
                            endpoint: "verifyPhoneNumber",
                            B: ys,
                            F: bs,
                            C: !0
                        },
                        su = {
                            endpoint: "accounts/mfaEnrollment:withdraw",
                            M: ["idToken", "mfaEnrollmentId"],
                            F: function(a) {
                                if (!!a[is] ^ !!a.refreshToken) throw new P("internal-error")
                            },
                            C: !0,
                            Na: !0
                        };

                    function uu(a, b, t) {
                        if (! function(a, b) {
                                if (!b || !b.length) return !0;
                                if (!a) return !1;
                                for (var t = 0; t < b.length; t++) {
                                    var e = a[b[t]];
                                    if (null == e || "" === e) return !1
                                }
                                return !0
                            }(t, b.M)) return xe(new P("internal-error"));
                        var e, n = !!b.Na,
                            r = b.Tb || "POST";
                        return Le(t).then(b.B).then((function() {
                            return b.U && (t.returnSecureToken = !0), b.C && a.b && void 0 === t.tenantId && (t.tenantId = a.b), vs(a, n ? a.i : a.h, b.endpoint, r, t, b.Gb, b.kb || !1)
                        })).then((function(g) {
                            return e = g, b.Xa ? b.Xa(t, e) : e
                        })).then(b.F).then((function() {
                            if (!b.Z) return e;
                            if (!(b.Z in e)) throw new P("internal-error");
                            return e[b.Z]
                        }))
                    }

                    function cu(a) {
                        return hu({
                            error: {
                                errors: [{
                                    message: a
                                }],
                                code: 400,
                                message: a
                            }
                        })
                    }

                    function hu(a, b) {
                        var t = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "",
                            e = {
                                keyInvalid: "invalid-api-key",
                                ipRefererBlocked: "app-not-authorized"
                            };
                        if (t = e[t] ? new P(e[t]) : null) return t;
                        for (var n in t = a.error && a.error.message || "", At(e = {
                                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_EMAIL: "invalid-email",
                                INVALID_PASSWORD: "wrong-password",
                                USER_DISABLED: "user-disabled",
                                MISSING_PASSWORD: "internal-error",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                                INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                                INVALID_SENDER: "invalid-sender",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                INVALID_PROVIDER_ID: "invalid-provider-id",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                CORS_UNSUPPORTED: "cors-unsupported",
                                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                                INVALID_APP_ID: "invalid-app-id",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                WEAK_PASSWORD: "weak-password",
                                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                                USER_CANCELLED: "user-cancelled",
                                CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                                INVALID_APP_CREDENTIAL: "invalid-app-credential",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_PHONE_NUMBER: "invalid-phone-number",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_APP_CREDENTIAL: "missing-app-credential",
                                MISSING_CODE: "missing-verification-code",
                                MISSING_PHONE_NUMBER: "missing-phone-number",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                QUOTA_EXCEEDED: "quota-exceeded",
                                SESSION_EXPIRED: "code-expired",
                                REJECTED_CREDENTIAL: "rejected-credential",
                                INVALID_CONTINUE_URI: "invalid-continue-uri",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                INVALID_CERT_HASH: "invalid-cert-hash",
                                UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                                INVALID_TENANT_ID: "invalid-tenant-id",
                                TENANT_ID_MISMATCH: "tenant-id-mismatch",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                                EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                                UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                                UNVERIFIED_EMAIL: "unverified-email"
                            }, b || {}), b = (b = t.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0, e)
                            if (0 === t.indexOf(n)) return new P(e[n], b);
                        return !b && a && (b = Vi(a)), new P("internal-error", b)
                    }

                    function lu(a) {
                        this.b = a, this.a = null, this.qb = function(a) {
                            return (vu || (vu = new Se((function(a, b) {
                                function t() {
                                    Gi(), Di("gapi.load")("gapi.iframes", {
                                        callback: a,
                                        ontimeout: function() {
                                            Gi(), b(Error("Network Error"))
                                        },
                                        timeout: pu.get()
                                    })
                                }
                                if (Di("gapi.iframes.Iframe")) a();
                                else if (Di("gapi.load")) t();
                                else {
                                    var e = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                    f[e] = function() {
                                        Di("gapi.load") ? t() : b(Error("Network Error"))
                                    }, Le(Ja(e = Dt(fu, {
                                        onload: e
                                    }))).s((function() {
                                        b(Error("Network Error"))
                                    }))
                                }
                            })).s((function(a) {
                                throw vu = null, a
                            })))).then((function() {
                                return new Se((function(b, t) {
                                    Di("gapi.iframes.getContext")().open({
                                        where: document.body,
                                        url: a.b,
                                        messageHandlersFilter: Di("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                        attributes: {
                                            style: {
                                                position: "absolute",
                                                top: "-100px",
                                                width: "1px",
                                                height: "1px"
                                            }
                                        },
                                        dontclear: !0
                                    }, (function(e) {
                                        function n() {
                                            clearTimeout(r), b()
                                        }
                                        a.a = e, a.a.restyle({
                                            setHideOnLeave: !1
                                        });
                                        var r = setTimeout((function() {
                                            t(Error("Network Error"))
                                        }), du.get());
                                        e.ping(n).then(n, (function() {
                                            t(Error("Network Error"))
                                        }))
                                    }))
                                }))
                            }))
                        }(this)
                    }
                    var fu = new Nt(Ot, "https://apis.google.com/js/api.js?onload=%{onload}"),
                        pu = new Bi(3e4, 6e4),
                        du = new Bi(5e3, 15e3),
                        vu = null;

                    function mu(a, b, t, e) {
                        this.l = a, this.h = b, this.i = t, this.g = e, this.f = null, this.g ? a = Gn((a = Hn(this.g.url)).f, a.a, a.g, "/emulator/auth/iframe") : a = Gn("https", this.l, null, "/__/auth/iframe"), this.a = a, Kn(this.a, "apiKey", this.h), Kn(this.a, "appName", this.i), this.b = null, this.c = []
                    }

                    function gu(a, b, t, e, n, r) {
                        this.u = a, this.o = b, this.c = t, this.v = e, this.m = r, this.i = this.g = this.l = null, this.a = n, this.h = this.f = null
                    }

                    function bu(a) {
                        try {
                            return e.a.app(a).auth().Ga()
                        } catch (t) {
                            return []
                        }
                    }

                    function yu(a, b, t, e, n, r) {
                        this.o = a, this.g = b, this.b = t, this.f = r, this.c = e || null, this.i = n || null, this.l = this.u = this.A = null, this.h = [], this.v = this.a = null
                    }

                    function wu(a) {
                        var b = di();
                        return function(a) {
                            return uu(a, Gs, {}).then((function(b) {
                                return b.authorizedDomains || []
                            }))
                        }(a).then((function(t) {
                            t: {
                                var e = Hn(b),
                                    n = e.f;e = e.a;
                                for (var r = 0; r < t.length; r++) {
                                    var g = t[r],
                                        o = e,
                                        c = n;
                                    if (0 == g.indexOf("chrome-extension://") ? o = Hn(g).a == o && "chrome-extension" == c : "http" != c && "https" != c ? o = !1 : yi.test(g) ? o = o == g : (g = g.split(".").join("\\."), o = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(o)), o) {
                                        t = !0;
                                        break t
                                    }
                                }
                                t = !1
                            }
                            if (!t) throw new th(di())
                        }))
                    }

                    function Iu(a) {
                        return a.v || (a.v = Ii().then((function() {
                            if (!a.u) {
                                var b = a.c,
                                    t = a.i,
                                    e = bu(a.b),
                                    n = new mu(a.o, a.g, a.b, a.f);
                                n.f = b, n.b = t, n.c = it(e || []), a.u = n.toString()
                            }
                            a.m = new lu(a.u),
                                function(a) {
                                    if (!a.m) throw Error("IfcHandler must be initialized!");
                                    ! function(a, b) {
                                        a.qb.then((function() {
                                            a.a.register("authEvent", b, Di("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        }))
                                    }(a.m, (function(b) {
                                        var t = {};
                                        if (b && b.authEvent) {
                                            var e = !1;
                                            for (b = Yo(b.authEvent), t = 0; t < a.h.length; t++) e = a.h[t](b) || e;
                                            return (t = {}).status = e ? "ACK" : "ERROR", Le(t)
                                        }
                                        return t.status = "ERROR", Le(t)
                                    }))
                                }(a)
                        }))), a.v
                    }

                    function Tu(a) {
                        return a.l || (a.A = a.c ? Pi(a.c, bu(a.b)) : null, a.l = new es(a.g, j(a.i), a.A), a.f && cs(a.l, a.f)), a.l
                    }

                    function Eu(a, b, t, e, n, r, g, o, c, p, h, l) {
                        return (a = new gu(a, b, t, e, n, l)).l = r, a.g = g, a.i = o, a.b = Tt(c || null), a.f = p, a.xb(h).toString()
                    }

                    function Au(a) {
                        if (this.a = a || e.a.INTERNAL.reactNative && e.a.INTERNAL.reactNative.AsyncStorage, !this.a) throw new P("internal-error", "The React Native compatibility library was not found.");
                        this.type = "asyncStorage"
                    }

                    function ku(a) {
                        this.b = a, this.a = {}, this.f = q(this.c, this)
                    }
                    mu.prototype.toString = function() {
                        return this.f ? Kn(this.a, "v", this.f) : ni(this.a.b, "v"), this.b ? Kn(this.a, "eid", this.b) : ni(this.a.b, "eid"), this.c.length ? Kn(this.a, "fw", this.c.join(",")) : ni(this.a.b, "fw"), this.a.toString()
                    }, gu.prototype.xb = function(a) {
                        return this.h = a, this
                    }, gu.prototype.toString = function() {
                        if (this.m) {
                            var a = Hn(this.m.url);
                            a = Gn(a.f, a.a, a.g, "/emulator/auth/handler")
                        } else a = Gn("https", this.u, null, "/__/auth/handler");
                        if (Kn(a, "apiKey", this.o), Kn(a, "appName", this.c), Kn(a, "authType", this.v), this.a.isOAuthProvider) {
                            var b = this.a;
                            try {
                                var t = e.a.app(this.c).auth().ka()
                            } catch (e) {
                                t = null
                            }
                            for (var n in b.nb = t, Kn(a, "providerId", this.a.providerId), b = Fi((t = this.a).Hb)) b[n] = b[n].toString();
                            n = t.Pc, b = Tt(b);
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                o in b && delete b[o]
                            }
                            t.ob && t.nb && !b[t.ob] && (b[t.ob] = t.nb), It(b) || Kn(a, "customParameters", Vi(b))
                        }
                        if ("function" == typeof this.a.Pb && ((t = this.a.Pb()).length && Kn(a, "scopes", t.join(","))), this.l ? Kn(a, "redirectUrl", this.l) : ni(a.b, "redirectUrl"), this.g ? Kn(a, "eventId", this.g) : ni(a.b, "eventId"), this.i ? Kn(a, "v", this.i) : ni(a.b, "v"), this.b)
                            for (var g in this.b) this.b.hasOwnProperty(g) && !qn(a, g) && Kn(a, g, this.b[g]);
                        return this.h ? Kn(a, "tid", this.h) : ni(a.b, "tid"), this.f ? Kn(a, "eid", this.f) : ni(a.b, "eid"), (g = bu(this.c)).length && Kn(a, "fw", g.join(",")), a.toString()
                    }, (n = yu.prototype).Nb = function(a, b, t) {
                        var e = new P("popup-closed-by-user"),
                            n = new P("web-storage-unsupported"),
                            r = this,
                            g = !1;
                        return this.la().then((function() {
                            (function(a) {
                                var b = {
                                    type: "webStorageSupport"
                                };
                                return Iu(a).then((function() {
                                    return function(a, b) {
                                        return a.qb.then((function() {
                                            return new Se((function(t) {
                                                a.a.send(b.type, b, t, Di("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                            }))
                                        }))
                                    }(a.m, b)
                                })).then((function(t) {
                                    if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
                                    throw Error()
                                }))
                            })(r).then((function(t) {
                                t || (a && gi(a), b(n), g = !0)
                            }))
                        })).s((function() {})).then((function() {
                            if (!g) return function(a) {
                                return new Se((function(b) {
                                    return function t() {
                                        Cn(2e3).then((function() {
                                            if (a && !a.closed) return t();
                                            b()
                                        }))
                                    }()
                                }))
                            }(a)
                        })).then((function() {
                            if (!g) return Cn(t).then((function() {
                                b(e)
                            }))
                        }))
                    }, n.Wb = function() {
                        var a = Ri();
                        return !Ui(a) && !Hi(a)
                    }, n.Sb = function() {
                        return !1
                    }, n.Lb = function(a, b, t, e, n, r, g, o) {
                        if (!a) return xe(new P("popup-blocked"));
                        if (g && !Ui()) return this.la().s((function(p) {
                            gi(a), n(p)
                        })), e(), Le();
                        this.a || (this.a = wu(Tu(this)));
                        var c = this;
                        return this.a.then((function() {
                            var p = c.la().s((function(t) {
                                throw gi(a), n(t), t
                            }));
                            return e(), p
                        })).then((function() {
                            (Xo(t), g) || vi(Eu(c.o, c.g, c.b, b, t, null, r, c.c, void 0, c.i, o, c.f), a)
                        })).s((function(p) {
                            throw "auth/network-request-failed" == p.code && (c.a = null), p
                        }))
                    }, n.Mb = function(a, b, t, e) {
                        this.a || (this.a = wu(Tu(this)));
                        var n = this;
                        return this.a.then((function() {
                            Xo(b), vi(Eu(n.o, n.g, n.b, a, b, di(), t, n.c, void 0, n.i, e, n.f))
                        })).s((function(t) {
                            throw "auth/network-request-failed" == t.code && (n.a = null), t
                        }))
                    }, n.la = function() {
                        var a = this;
                        return Iu(this).then((function() {
                            return a.m.qb
                        })).s((function() {
                            throw a.a = null, new P("network-request-failed")
                        }))
                    }, n.Zb = function() {
                        return !0
                    }, n.Ea = function(a) {
                        this.h.push(a)
                    }, n.Ra = function(a) {
                        et(this.h, (function(b) {
                            return b == a
                        }))
                    }, (n = Au.prototype).get = function(a) {
                        return Le(this.a.getItem(a)).then((function(b) {
                            return b && Ki(b)
                        }))
                    }, n.set = function(a, b) {
                        return Le(this.a.setItem(a, Vi(b)))
                    }, n.T = function(a) {
                        return Le(this.a.removeItem(a))
                    }, n.ca = function() {}, n.ia = function() {};
                    var Nu, Su = [];

                    function _u(a, b, t) {
                        It(a.a) && a.b.addEventListener("message", a.f), void 0 === a.a[b] && (a.a[b] = []), a.a[b].push(t)
                    }

                    function Ou(a) {
                        this.a = a
                    }

                    function Cu(a) {
                        this.c = a, this.b = !1, this.a = []
                    }

                    function Pu(a, b, t, e) {
                        var n, g, r, o, c = t || {},
                            p = null;
                        if (a.b) return xe(Error("connection_unavailable"));
                        var h = e ? 800 : 50,
                            l = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                        return new Se((function(t, e) {
                            l ? (n = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), r = setTimeout((function() {
                                e(Error("unsupported_event"))
                            }), h), p = {
                                messageChannel: l,
                                onMessage: g = function(c) {
                                    c.data.eventId === n && ("ack" === c.data.status ? (clearTimeout(r), o = setTimeout((function() {
                                        e(Error("timeout"))
                                    }), 3e3)) : "done" === c.data.status ? (clearTimeout(o), void 0 !== c.data.response ? t(c.data.response) : e(Error("unknown_error"))) : (clearTimeout(r), clearTimeout(o), e(Error("invalid_response"))))
                                }
                            }, a.a.push(p), l.port1.addEventListener("message", g), a.c.postMessage({
                                eventType: b,
                                eventId: n,
                                data: c
                            }, [l.port2])) : e(Error("connection_unavailable"))
                        })).then((function(t) {
                            return Ru(a, p), t
                        })).s((function(t) {
                            throw Ru(a, p), t
                        }))
                    }

                    function Ru(a, b) {
                        if (b) {
                            var t = b.messageChannel,
                                e = b.onMessage;
                            t && (t.port1.removeEventListener("message", e), t.port1.close()), et(a.a, (function(t) {
                                return t == b
                            }))
                        }
                    }

                    function Du() {
                        if (!Mu()) throw new P("web-storage-unsupported");
                        this.c = {}, this.a = [], this.b = 0, this.m = f.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.o = !1, this.h = null;
                        var a = this;
                        Ai() && self ? (this.l = function() {
                            var a = Ai() ? self : null;
                            if (Y(Su, (function(t) {
                                    t.b == a && (b = t)
                                })), !b) {
                                var b = new ku(a);
                                Su.push(b)
                            }
                            return b
                        }(), _u(this.l, "keyChanged", (function(b, t) {
                            return Ku(a).then((function(e) {
                                return 0 < e.length && Y(a.a, (function(t) {
                                    t(e)
                                })), {
                                    keyProcessed: Q(e, t.key)
                                }
                            }))
                        })), _u(this.l, "ping", (function() {
                            return Le(["keyChanged"])
                        }))) : function() {
                            var a = f.navigator;
                            return a && a.serviceWorker ? Le().then((function() {
                                return a.serviceWorker.ready
                            })).then((function(b) {
                                return b.active || null
                            })).s((function() {
                                return null
                            })) : Le(null)
                        }().then((function(b) {
                            (a.h = b) && (a.g = new Cu(new Ou(b)), Pu(a.g, "ping", null, !0).then((function(t) {
                                t[0].fulfilled && Q(t[0].value, "keyChanged") && (a.o = !0)
                            })).s((function() {})))
                        }))
                    }

                    function Lu(a) {
                        return new Se((function(b, t) {
                            var e = a.m.open("firebaseLocalStorageDb", 1);
                            e.onerror = function(e) {
                                try {
                                    e.preventDefault()
                                } catch (t) {}
                                t(Error(e.target.error))
                            }, e.onupgradeneeded = function(e) {
                                e = e.target.result;
                                try {
                                    e.createObjectStore("firebaseLocalStorage", {
                                        keyPath: "fbase_key"
                                    })
                                } catch (e) {
                                    t(e)
                                }
                            }, e.onsuccess = function(e) {
                                (e = e.target.result).objectStoreNames.contains("firebaseLocalStorage") ? b(e) : function(a) {
                                    return new Se((function(b, t) {
                                        var e = a.m.deleteDatabase("firebaseLocalStorageDb");
                                        e.onsuccess = function() {
                                            b()
                                        }, e.onerror = function(e) {
                                            t(Error(e.target.error))
                                        }
                                    }))
                                }(a).then((function() {
                                    return Lu(a)
                                })).then((function(t) {
                                    b(t)
                                })).s((function(e) {
                                    t(e)
                                }))
                            }
                        }))
                    }

                    function xu(a) {
                        return a.v || (a.v = Lu(a)), a.v
                    }

                    function Mu() {
                        try {
                            return !!f.indexedDB
                        } catch (t) {
                            return !1
                        }
                    }

                    function ju(a) {
                        return a.objectStore("firebaseLocalStorage")
                    }

                    function Uu(a, b) {
                        return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly")
                    }

                    function Vu(a) {
                        return new Se((function(b, t) {
                            a.onsuccess = function(t) {
                                t && t.target ? b(t.target.result) : b()
                            }, a.onerror = function(e) {
                                t(e.target.error)
                            }
                        }))
                    }

                    function Fu(a, b) {
                        return a.g && a.h && function() {
                            var a = f.navigator;
                            return a && a.serviceWorker && a.serviceWorker.controller || null
                        }() === a.h ? Pu(a.g, "keyChanged", {
                            key: b
                        }, a.o).then((function() {})).s((function() {})) : Le()
                    }

                    function Ku(a) {
                        return xu(a).then((function(b) {
                            var t = ju(Uu(b, !1));
                            return t.getAll ? Vu(t.getAll()) : new Se((function(e, n) {
                                var r = [],
                                    g = t.openCursor();
                                g.onsuccess = function(t) {
                                    (t = t.target.result) ? (r.push(t.value), t.continue()) : e(r)
                                }, g.onerror = function(t) {
                                    n(t.target.error)
                                }
                            }))
                        })).then((function(b) {
                            var t = {},
                                e = [];
                            if (0 == a.b) {
                                for (e = 0; e < b.length; e++) t[b[e].fbase_key] = b[e].value;
                                e = function t(a, b) {
                                    var e, n = [];
                                    for (e in a) e in b ? typeof a[e] != typeof b[e] ? n.push(e) : "object" == typeof a[e] && null != a[e] && null != b[e] ? 0 < t(a[e], b[e]).length && n.push(e) : a[e] !== b[e] && n.push(e) : n.push(e);
                                    for (e in b) e in a || n.push(e);
                                    return n
                                }(a.c, t), a.c = t
                            }
                            return e
                        }))
                    }

                    function qu(a) {
                        a.i && a.i.cancel("STOP_EVENT"), a.f && (clearTimeout(a.f), a.f = null)
                    }

                    function Hu(a) {
                        var b = this,
                            t = null;
                        this.a = [], this.type = "indexedDB", this.c = a, this.b = Le().then((function() {
                            if (Mu()) {
                                var e = qi(),
                                    n = "__sak" + e;
                                return Nu || (Nu = new Du), (t = Nu).set(n, e).then((function() {
                                    return t.get(n)
                                })).then((function(r) {
                                    if (r !== e) throw Error("indexedDB not supported!");
                                    return t.T(n)
                                })).then((function() {
                                    return t
                                })).s((function() {
                                    return b.c
                                }))
                            }
                            return b.c
                        })).then((function(t) {
                            return b.type = t.type, t.ca((function(t) {
                                Y(b.a, (function(e) {
                                    e(t)
                                }))
                            })), t
                        }))
                    }

                    function Gu() {
                        this.a = {}, this.type = "inMemory"
                    }

                    function Bu() {
                        if (! function() {
                                var a = "Node" == ki();
                                if (!(a = Wu() || a && e.a.INTERNAL.node && e.a.INTERNAL.node.localStorage)) return !1;
                                try {
                                    return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
                                } catch (t) {
                                    return !1
                                }
                            }()) {
                            if ("Node" == ki()) throw new P("internal-error", "The LocalStorage compatibility library was not found.");
                            throw new P("web-storage-unsupported")
                        }
                        this.a = Wu() || e.a.INTERNAL.node.localStorage, this.type = "localStorage"
                    }

                    function Wu() {
                        try {
                            var a = f.localStorage,
                                b = qi();
                            return a && (a.setItem(b, "1"), a.removeItem(b)), a
                        } catch (t) {
                            return null
                        }
                    }

                    function Xu() {
                        this.type = "nullStorage"
                    }

                    function Ju() {
                        if (! function() {
                                var a = "Node" == ki();
                                if (!(a = Yu() || a && e.a.INTERNAL.node && e.a.INTERNAL.node.sessionStorage)) return !1;
                                try {
                                    return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
                                } catch (t) {
                                    return !1
                                }
                            }()) {
                            if ("Node" == ki()) throw new P("internal-error", "The SessionStorage compatibility library was not found.");
                            throw new P("web-storage-unsupported")
                        }
                        this.a = Yu() || e.a.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
                    }

                    function Yu() {
                        try {
                            var a = f.sessionStorage,
                                b = qi();
                            return a && (a.setItem(b, "1"), a.removeItem(b)), a
                        } catch (t) {
                            return null
                        }
                    }

                    function zu() {
                        var a = {};
                        a.Browser = Qu, a.Node = tc, a.ReactNative = ec, a.Worker = nc, this.a = a[ki()]
                    }
                    ku.prototype.c = function(a) {
                        var b = a.data.eventType,
                            t = a.data.eventId,
                            e = this.a[b];
                        if (e && 0 < e.length) {
                            a.ports[0].postMessage({
                                status: "ack",
                                eventId: t,
                                eventType: b,
                                response: null
                            });
                            var n = [];
                            Y(e, (function(t) {
                                n.push(Le().then((function() {
                                    return t(a.origin, a.data.data)
                                })))
                            })), je(n).then((function(e) {
                                var g = [];
                                Y(e, (function(t) {
                                    g.push({
                                        fulfilled: t.Ob,
                                        value: t.value,
                                        reason: t.reason ? t.reason.message : void 0
                                    })
                                })), Y(g, (function(t) {
                                    for (var e in t) void 0 === t[e] && delete t[e]
                                })), a.ports[0].postMessage({
                                    status: "done",
                                    eventId: t,
                                    eventType: b,
                                    response: g
                                })
                            }))
                        }
                    }, Ou.prototype.postMessage = function(a, b) {
                        this.a.postMessage(a, b)
                    }, Cu.prototype.close = function() {
                        for (; 0 < this.a.length;) Ru(this, this.a[0]);
                        this.b = !0
                    }, (n = Du.prototype).set = function(a, b) {
                        var t, e = !1,
                            n = this;
                        return xu(this).then((function(e) {
                            return Vu((e = ju(Uu(t = e, !0))).get(a))
                        })).then((function(r) {
                            var g = ju(Uu(t, !0));
                            return r ? (r.value = b, Vu(g.put(r))) : (n.b++, e = !0, (r = {}).fbase_key = a, r.value = b, Vu(g.add(r)))
                        })).then((function() {
                            return n.c[a] = b, Fu(n, a)
                        })).na((function() {
                            e && n.b--
                        }))
                    }, n.get = function(a) {
                        return xu(this).then((function(b) {
                            return Vu(ju(Uu(b, !1)).get(a))
                        })).then((function(b) {
                            return b && b.value
                        }))
                    }, n.T = function(a) {
                        var b = !1,
                            t = this;
                        return xu(this).then((function(e) {
                            return b = !0, t.b++, Vu(ju(Uu(e, !0)).delete(a))
                        })).then((function() {
                            return delete t.c[a], Fu(t, a)
                        })).na((function() {
                            b && t.b--
                        }))
                    }, n.ca = function(a) {
                        0 == this.a.length && function(a) {
                            qu(a),
                                function b() {
                                    a.f = setTimeout((function() {
                                        a.i = Ku(a).then((function(t) {
                                            0 < t.length && Y(a.a, (function(e) {
                                                e(t)
                                            }))
                                        })).then((function() {
                                            b()
                                        })).s((function(t) {
                                            "STOP_EVENT" != t.message && b()
                                        }))
                                    }), 800)
                                }()
                        }(this), this.a.push(a)
                    }, n.ia = function(a) {
                        et(this.a, (function(b) {
                            return b == a
                        })), 0 == this.a.length && qu(this)
                    }, (n = Hu.prototype).get = function(a) {
                        return this.b.then((function(b) {
                            return b.get(a)
                        }))
                    }, n.set = function(a, b) {
                        return this.b.then((function(t) {
                            return t.set(a, b)
                        }))
                    }, n.T = function(a) {
                        return this.b.then((function(b) {
                            return b.T(a)
                        }))
                    }, n.ca = function(a) {
                        this.a.push(a)
                    }, n.ia = function(a) {
                        et(this.a, (function(b) {
                            return b == a
                        }))
                    }, (n = Gu.prototype).get = function(a) {
                        return Le(this.a[a])
                    }, n.set = function(a, b) {
                        return this.a[a] = b, Le()
                    }, n.T = function(a) {
                        return delete this.a[a], Le()
                    }, n.ca = function() {}, n.ia = function() {}, (n = Bu.prototype).get = function(a) {
                        var b = this;
                        return Le().then((function() {
                            return Ki(b.a.getItem(a))
                        }))
                    }, n.set = function(a, b) {
                        var t = this;
                        return Le().then((function() {
                            var e = Vi(b);
                            null === e ? t.T(a) : t.a.setItem(a, e)
                        }))
                    }, n.T = function(a) {
                        var b = this;
                        return Le().then((function() {
                            b.a.removeItem(a)
                        }))
                    }, n.ca = function(a) {
                        f.window && dn(f.window, "storage", a)
                    }, n.ia = function(a) {
                        f.window && gn(f.window, "storage", a)
                    }, (n = Xu.prototype).get = function() {
                        return Le(null)
                    }, n.set = function() {
                        return Le()
                    }, n.T = function() {
                        return Le()
                    }, n.ca = function() {}, n.ia = function() {}, (n = Ju.prototype).get = function(a) {
                        var b = this;
                        return Le().then((function() {
                            return Ki(b.a.getItem(a))
                        }))
                    }, n.set = function(a, b) {
                        var t = this;
                        return Le().then((function() {
                            var e = Vi(b);
                            null === e ? t.T(a) : t.a.setItem(a, e)
                        }))
                    }, n.T = function(a) {
                        var b = this;
                        return Le().then((function() {
                            b.a.removeItem(a)
                        }))
                    }, n.ca = function() {}, n.ia = function() {};
                    var $u, Zu, Qu = {
                            D: Bu,
                            ab: Ju
                        },
                        tc = {
                            D: Bu,
                            ab: Ju
                        },
                        ec = {
                            D: Au,
                            ab: Xu
                        },
                        nc = {
                            D: Bu,
                            ab: Xu
                        },
                        ic = {
                            qd: "local",
                            NONE: "none",
                            sd: "session"
                        };

                    function rc() {
                        var a = !(Hi(Ri()) || !Ei()),
                            b = Ui(),
                            t = Li();
                        this.v = a, this.h = b, this.l = t, this.a = {}, $u || ($u = new zu), a = $u;
                        try {
                            this.g = !pi() && Yi() || !f.indexedDB ? new a.a.D : new Hu(Ai() ? new Gu : new a.a.D)
                        } catch (t) {
                            this.g = new Gu, this.h = !0
                        }
                        try {
                            this.i = new a.a.ab
                        } catch (t) {
                            this.i = new Gu
                        }
                        this.m = new Gu, this.f = q(this.Xb, this), this.b = {}
                    }

                    function oc() {
                        return Zu || (Zu = new rc), Zu
                    }

                    function ac(a, b) {
                        switch (b) {
                            case "session":
                                return a.i;
                            case "none":
                                return a.m;
                            default:
                                return a.g
                        }
                    }

                    function sc(a, b) {
                        return "firebase:" + a.name + (b ? ":" + b : "")
                    }

                    function uc(a, b, t) {
                        return t = sc(b, t), "local" == b.D && (a.b[t] = null), ac(a, b.D).T(t)
                    }

                    function cc(a) {
                        a.c && (clearInterval(a.c), a.c = null)
                    }

                    function hc(a) {
                        this.a = a, this.b = oc()
                    }(n = rc.prototype).get = function(a, b) {
                        return ac(this, a.D).get(sc(a, b))
                    }, n.set = function(a, b, t) {
                        var e = sc(a, t),
                            n = this,
                            r = ac(this, a.D);
                        return r.set(e, b).then((function() {
                            return r.get(e)
                        })).then((function(g) {
                            "local" == a.D && (n.b[e] = g)
                        }))
                    }, n.addListener = function(a, b, t) {
                        a = sc(a, b), this.l && (this.b[a] = f.localStorage.getItem(a)), It(this.a) && (ac(this, "local").ca(this.f), this.h || (pi() || !Yi()) && f.indexedDB || !this.l || function(a) {
                            cc(a), a.c = setInterval((function() {
                                for (var b in a.a) {
                                    var t = f.localStorage.getItem(b),
                                        e = a.b[b];
                                    t != e && (a.b[b] = t, t = new rn({
                                        type: "storage",
                                        key: b,
                                        target: window,
                                        oldValue: e,
                                        newValue: t,
                                        a: !0
                                    }), a.Xb(t))
                                }
                            }), 1e3)
                        }(this)), this.a[a] || (this.a[a] = []), this.a[a].push(t)
                    }, n.removeListener = function(a, b, t) {
                        a = sc(a, b), this.a[a] && (et(this.a[a], (function(e) {
                            return e == t
                        })), 0 == this.a[a].length && delete this.a[a]), It(this.a) && (ac(this, "local").ia(this.f), cc(this))
                    }, n.Xb = function(a) {
                        if (a && a.g) {
                            var b = a.a.key;
                            if (null == b)
                                for (var t in this.a) {
                                    var e = this.b[t];
                                    void 0 === e && (e = null);
                                    var n = f.localStorage.getItem(t);
                                    n !== e && (this.b[t] = n, this.lb(t))
                                } else if (0 == b.indexOf("firebase:") && this.a[b]) {
                                    if (void 0 !== a.a.a ? ac(this, "local").ia(this.f) : cc(this), this.v)
                                        if (t = f.localStorage.getItem(b), (e = a.a.newValue) !== t) null !== e ? f.localStorage.setItem(b, e) : f.localStorage.removeItem(b);
                                        else if (this.b[b] === e && void 0 === a.a.a) return;
                                    var r = this;
                                    t = function() {
                                        void 0 === a.a.a && r.b[b] === f.localStorage.getItem(b) || (r.b[b] = f.localStorage.getItem(b), r.lb(b))
                                    }, te && ce && 10 == ce && f.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(t, 10) : t()
                                }
                        } else Y(a, q(this.lb, this))
                    }, n.lb = function(a) {
                        this.a[a] && Y(this.a[a], (function(b) {
                            b()
                        }))
                    };
                    var dl, lc = {
                        name: "authEvent",
                        D: "local"
                    };

                    function fc() {
                        this.a = oc()
                    }

                    function pc(a, b) {
                        this.b = dc, this.f = f.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = a, this.h = b, this.l = f.Int32Array ? new Int32Array(64) : Array(64), void 0 === dl && (dl = f.Int32Array ? new Int32Array(Ic) : Ic), this.reset()
                    }
                    C(pc, (function() {
                        this.b = -1
                    }));
                    for (var dc = 64, vc = dc - 1, mc = [], gc = 0; gc < vc; gc++) mc[gc] = 0;
                    var bc = nt(128, mc);

                    function yc(a) {
                        for (var b = a.f, t = a.l, e = 0, n = 0; n < b.length;) t[e++] = b[n] << 24 | b[n + 1] << 16 | b[n + 2] << 8 | b[n + 3], n = 4 * e;
                        for (b = 16; 64 > b; b++) {
                            n = 0 | t[b - 15], e = 0 | t[b - 2];
                            var r = (0 | t[b - 16]) + ((n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3) | 0,
                                g = (0 | t[b - 7]) + ((e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) | 0;
                            t[b] = r + g | 0
                        }
                        e = 0 | a.a[0], n = 0 | a.a[1];
                        var o = 0 | a.a[2],
                            c = 0 | a.a[3],
                            p = 0 | a.a[4],
                            h = 0 | a.a[5],
                            l = 0 | a.a[6];
                        for (r = 0 | a.a[7], b = 0; 64 > b; b++) {
                            var f = ((e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)) + (e & n ^ e & o ^ n & o) | 0;
                            g = (r = r + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0) + ((g = (g = p & h ^ ~p & l) + (0 | dl[b]) | 0) + (0 | t[b]) | 0) | 0, r = l, l = h, h = p, p = c + g | 0, c = o, o = n, n = e, e = g + f | 0
                        }
                        a.a[0] = a.a[0] + e | 0, a.a[1] = a.a[1] + n | 0, a.a[2] = a.a[2] + o | 0, a.a[3] = a.a[3] + c | 0, a.a[4] = a.a[4] + p | 0, a.a[5] = a.a[5] + h | 0, a.a[6] = a.a[6] + l | 0, a.a[7] = a.a[7] + r | 0
                    }

                    function wc(a, b, t) {
                        void 0 === t && (t = b.length);
                        var e = 0,
                            n = a.c;
                        if ("string" == typeof b)
                            for (; e < t;) a.f[n++] = b.charCodeAt(e++), n == a.b && (yc(a), n = 0);
                        else {
                            if (!w(b)) throw Error("message must be string or array");
                            for (; e < t;) {
                                var r = b[e++];
                                if (!("number" == typeof r && 0 <= r && 255 >= r && r == (0 | r))) throw Error("message must be a byte array");
                                a.f[n++] = r, n == a.b && (yc(a), n = 0)
                            }
                        }
                        a.c = n, a.g += t
                    }
                    pc.prototype.reset = function() {
                        this.g = this.c = 0, this.a = f.Int32Array ? new Int32Array(this.h) : it(this.h)
                    };
                    var Ic = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                    function Tc() {
                        pc.call(this, 8, Ec)
                    }
                    C(Tc, pc);
                    var Ec = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                    function Ac(a, b, t, e, n, r) {
                        this.m = a, this.i = b, this.l = t, this.v = e || null, this.u = n || null, this.o = r, this.h = b + ":" + t, this.A = new fc, this.g = new hc(this.h), this.f = null, this.b = [], this.a = this.c = null
                    }

                    function ol(a) {
                        return new P("invalid-cordova-configuration", a)
                    }

                    function kc(a) {
                        var b = new Tc;
                        wc(b, a), a = [];
                        var t = 8 * b.g;
                        56 > b.c ? wc(b, bc, 56 - b.c) : wc(b, bc, b.b - (b.c - 56));
                        for (var e = 63; 56 <= e; e--) b.f[e] = 255 & t, t /= 256;
                        for (yc(b), e = t = 0; e < b.i; e++)
                            for (var n = 24; 0 <= n; n -= 8) a[t++] = b.a[e] >> n & 255;
                        return function(a) {
                            return $(a, (function(b) {
                                return 1 < (b = b.toString(16)).length ? b : "0" + b
                            })).join("")
                        }(a)
                    }

                    function ul(a, b) {
                        for (var t = 0; t < a.b.length; t++) try {
                            a.b[t](b)
                        } catch (t) {}
                    }

                    function Nc(a) {
                        return a.f || (a.f = a.la().then((function() {
                            return new Se((function(b) {
                                a.Ea((function t(e) {
                                        return b(e), a.Ra(t), !1
                                    })),
                                    function(a) {
                                        function b(g) {
                                            e = !0, n && n.cancel(), Sc(a).then((function(e) {
                                                var n = t;
                                                if (e && g && g.url) {
                                                    var p = null; - 1 != (n = fo(g.url)).indexOf("/__/auth/callback") && (p = (p = "object" == typeof(p = Ki(qn(p = Hn(n), "firebaseError") || null)) ? R(p) : null) ? new Jo(e.c, e.b, null, null, p, null, e.S()) : new Jo(e.c, e.b, n, e.f, null, null, e.S())), n = p || t
                                                }
                                                ul(a, n)
                                            }))
                                        }
                                        var t = new Jo("unknown", null, null, null, new P("no-auth-event")),
                                            e = !1,
                                            n = Cn(500).then((function() {
                                                return Sc(a).then((function() {
                                                    e || ul(a, t)
                                                }))
                                            })),
                                            r = f.handleOpenURL;
                                        f.handleOpenURL = function(g) {
                                                if (0 == g.toLowerCase().indexOf(Di("BuildInfo.packageName", f).toLowerCase() + "://") && b({
                                                        url: g
                                                    }), "function" == typeof r) try {
                                                    r(g)
                                                } catch (t) {
                                                    console.error(t)
                                                }
                                            }, Zo || (Zo = new zo),
                                            function(a) {
                                                var b = Zo;
                                                b.a.push(a), b.b || (b.b = function(t) {
                                                    for (var e = 0; e < b.a.length; e++) b.a[e](t)
                                                }, "function" == typeof(a = Di("universalLinks.subscribe", f)) && a(null, b.b))
                                            }(b)
                                    }(a)
                            }))
                        }))), a.f
                    }

                    function Sc(a) {
                        var b = null;
                        return function(a) {
                            return a.b.get(lc, a.a).then((function(b) {
                                return Yo(b)
                            }))
                        }(a.g).then((function(t) {
                            return b = t, uc((t = a.g).b, lc, t.a)
                        })).then((function() {
                            return b
                        }))
                    }

                    function _c(a) {
                        this.a = a, this.b = oc()
                    }(n = Ac.prototype).la = function() {
                        return this.Ia ? this.Ia : this.Ia = (Ti(void 0) ? Ii().then((function() {
                            return new Se((function(a, b) {
                                var t = f.document,
                                    e = setTimeout((function() {
                                        b(Error("Cordova framework is not ready."))
                                    }), 1e3);
                                t.addEventListener("deviceready", (function() {
                                    clearTimeout(e), a()
                                }), !1)
                            }))
                        })) : xe(Error("Cordova must run in an Android or iOS file scheme."))).then((function() {
                            if ("function" != typeof Di("universalLinks.subscribe", f)) throw ol("cordova-universal-links-plugin-fix is not installed");
                            if (void 0 === Di("BuildInfo.packageName", f)) throw ol("cordova-plugin-buildinfo is not installed");
                            if ("function" != typeof Di("cordova.plugins.browsertab.openUrl", f)) throw ol("cordova-plugin-browsertab is not installed");
                            if ("function" != typeof Di("cordova.InAppBrowser.open", f)) throw ol("cordova-plugin-inappbrowser is not installed")
                        }), (function() {
                            throw new P("cordova-not-ready")
                        }))
                    }, n.Nb = function(a, b) {
                        return b(new P("operation-not-supported-in-this-environment")), Le()
                    }, n.Lb = function() {
                        return xe(new P("operation-not-supported-in-this-environment"))
                    }, n.Zb = function() {
                        return !1
                    }, n.Wb = function() {
                        return !0
                    }, n.Sb = function() {
                        return !0
                    }, n.Mb = function(a, b, t, e) {
                        if (this.c) return xe(new P("redirect-operation-pending"));
                        var n = this,
                            r = f.document,
                            g = null,
                            o = null,
                            c = null,
                            p = null;
                        return this.c = Le().then((function() {
                            return Xo(b), Nc(n)
                        })).then((function() {
                            return function(a, b, t, e, n) {
                                var r = function() {
                                        for (var a = 20, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
                                        return b.join("")
                                    }(),
                                    g = new Jo(b, e, null, r, new P("no-auth-event"), null, n),
                                    o = Di("BuildInfo.packageName", f);
                                if ("string" != typeof o) throw new P("invalid-cordova-configuration");
                                var c = Di("BuildInfo.displayName", f),
                                    p = {};
                                if (Ri().toLowerCase().match(/iphone|ipad|ipod/)) p.ibi = o;
                                else {
                                    if (!Ri().toLowerCase().match(/android/)) return xe(new P("operation-not-supported-in-this-environment"));
                                    p.apn = o
                                }
                                c && (p.appDisplayName = c), r = kc(r), p.sessionId = r;
                                var h = Eu(a.m, a.i, a.l, b, t, null, e, a.v, p, a.u, n, a.o);
                                return a.la().then((function() {
                                    var t = a.h;
                                    return a.A.a.set(lc, g.w(), t)
                                })).then((function() {
                                    var t = Di("cordova.plugins.browsertab.isAvailable", f);
                                    if ("function" != typeof t) throw new P("invalid-cordova-configuration");
                                    var e = null;
                                    t((function(t) {
                                        if (t) {
                                            if ("function" != typeof(e = Di("cordova.plugins.browsertab.openUrl", f))) throw new P("invalid-cordova-configuration");
                                            e(h)
                                        } else {
                                            if ("function" != typeof(e = Di("cordova.InAppBrowser.open", f))) throw new P("invalid-cordova-configuration");
                                            t = Ri(), a.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                        }
                                    }))
                                }))
                            }(n, a, b, t, e)
                        })).then((function() {
                            return new Se((function(t, e) {
                                o = function() {
                                    var e = Di("cordova.plugins.browsertab.close", f);
                                    return t(), "function" == typeof e && e(), n.a && "function" == typeof n.a.close && (n.a.close(), n.a = null), !1
                                }, n.Ea(o), c = function() {
                                    g || (g = Cn(2e3).then((function() {
                                        e(new P("redirect-cancelled-by-user"))
                                    })))
                                }, p = function() {
                                    Wi() && c()
                                }, r.addEventListener("resume", c, !1), Ri().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", p, !1)
                            })).s((function(t) {
                                return Sc(n).then((function() {
                                    throw t
                                }))
                            }))
                        })).na((function() {
                            c && r.removeEventListener("resume", c, !1), p && r.removeEventListener("visibilitychange", p, !1), g && g.cancel(), o && n.Ra(o), n.c = null
                        }))
                    }, n.Ea = function(a) {
                        this.b.push(a), Nc(this).s((function(b) {
                            "auth/invalid-cordova-configuration" === b.code && (b = new Jo("unknown", null, null, null, new P("no-auth-event")), a(b))
                        }))
                    }, n.Ra = function(a) {
                        et(this.b, (function(b) {
                            return b == a
                        }))
                    };
                    var Oc = {
                        name: "pendingRedirect",
                        D: "session"
                    };

                    function Cc(a) {
                        return uc(a.b, Oc, a.a)
                    }

                    function Pc(a, b, t, e) {
                        this.i = {}, this.u = 0, this.O = a, this.m = b, this.v = t, this.G = e, this.h = [], this.f = !1, this.l = q(this.o, this), this.b = new Wc, this.A = new $c, this.g = new _c(Gc(this.m, this.v)), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.A, this.c.linkViaPopup = this.A, this.c.reauthViaPopup = this.A, this.a = Rc(this.O, this.m, this.v, D, this.G)
                    }

                    function Rc(a, b, t, n, r) {
                        var o = e.a.SDK_VERSION || null;
                        return Ti() ? new Ac(a, b, t, o, n, r) : new yu(a, b, t, o, n, r)
                    }

                    function Dc(a) {
                        a.f || (a.f = !0, a.a.Ea(a.l));
                        var b = a.a;
                        return a.a.la().s((function(t) {
                            throw a.a == b && a.reset(), t
                        }))
                    }

                    function Lc(a) {
                        a.a.Wb() && Dc(a).s((function(b) {
                            var t = new Jo("unknown", null, null, null, new P("operation-not-supported-in-this-environment"));
                            Fc(b) && a.o(t)
                        })), a.a.Sb() || Xc(a.b)
                    }

                    function xc(a, b) {
                        Q(a.h, b) || a.h.push(b), a.f || function(a) {
                            return a.b.get(Oc, a.a).then((function(b) {
                                return "pending" == b
                            }))
                        }(a.g).then((function(t) {
                            t ? Cc(a.g).then((function() {
                                Dc(a).s((function(t) {
                                    var e = new Jo("unknown", null, null, null, new P("operation-not-supported-in-this-environment"));
                                    Fc(t) && a.o(e)
                                }))
                            })) : Lc(a)
                        })).s((function() {
                            Lc(a)
                        }))
                    }

                    function Mc(a, b) {
                        et(a.h, (function(t) {
                            return t == b
                        }))
                    }
                    Pc.prototype.reset = function() {
                        this.f = !1, this.a.Ra(this.l), this.a = Rc(this.O, this.m, this.v, null, this.G), this.i = {}
                    }, Pc.prototype.o = function(a) {
                        if (!a) throw new P("invalid-auth-event");
                        if (6e5 <= O() - this.u && (this.i = {}, this.u = 0), a && a.getUid() && this.i.hasOwnProperty(a.getUid())) return !1;
                        for (var b = !1, t = 0; t < this.h.length; t++) {
                            var e = this.h[t];
                            if (e.Eb(a.c, a.b)) {
                                (b = this.c[a.c]) && (b.h(a, e), a && (a.f || a.b) && (this.i[a.getUid()] = !0, this.u = O())), b = !0;
                                break
                            }
                        }
                        return Xc(this.b), b
                    };
                    var jc = new Bi(2e3, 1e4),
                        Uc = new Bi(3e4, 6e4);

                    function Vc(a, b, t, e, n, r, g) {
                        return a.a.Lb(b, t, e, (function() {
                            a.f || (a.f = !0, a.a.Ea(a.l))
                        }), (function() {
                            a.reset()
                        }), n, r, g)
                    }

                    function Fc(a) {
                        return !(!a || "auth/cordova-not-ready" != a.code)
                    }

                    function Kc(a, b, t, e, n) {
                        var r;
                        return function(a) {
                            return a.b.set(Oc, "pending", a.a)
                        }(a.g).then((function() {
                            return a.a.Mb(b, t, e, n).s((function(g) {
                                if (Fc(g)) throw new P("operation-not-supported-in-this-environment");
                                return r = g, Cc(a.g).then((function() {
                                    throw r
                                }))
                            })).then((function() {
                                return a.a.Zb() ? new Se((function() {})) : Cc(a.g).then((function() {
                                    return a.qa()
                                })).then((function() {})).s((function() {}))
                            }))
                        }))
                    }

                    function qc(a, b, t, e, n) {
                        return a.a.Nb(e, (function(e) {
                            b.ma(t, null, e, n)
                        }), jc.get())
                    }
                    Pc.prototype.qa = function() {
                        return this.b.qa()
                    };
                    var Hc = {};

                    function Gc(a, b, t) {
                        return a = a + ":" + b, t && (a = a + ":" + t.url), a
                    }

                    function Bc(a, b, t, e) {
                        var n = Gc(b, t, e);
                        return Hc[n] || (Hc[n] = new Pc(a, b, t, e)), Hc[n]
                    }

                    function Wc() {
                        this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
                    }

                    function Xc(a) {
                        a.g || (a.g = !0, zc(a, !1, null, null))
                    }

                    function Jc(a) {
                        a.g && !a.i && zc(a, !1, null, null)
                    }

                    function Yc(a, b) {
                        if (a.b = function() {
                                return Le(b)
                            }, a.f.length)
                            for (var t = 0; t < a.f.length; t++) a.f[t](b)
                    }

                    function zc(a, b, t, e) {
                        b ? e ? function(a, b) {
                            if (a.b = function() {
                                    return xe(b)
                                }, a.c.length)
                                for (var t = 0; t < a.c.length; t++) a.c[t](b)
                        }(a, e) : Yc(a, t) : Yc(a, {
                            user: null
                        }), a.f = [], a.c = []
                    }

                    function $c() {}

                    function Zc() {
                        this.hb = !1, Object.defineProperty(this, "appVerificationDisabled", {
                            get: function() {
                                return this.hb
                            },
                            set: function(a) {
                                this.hb = a
                            },
                            enumerable: !1
                        })
                    }

                    function Qc(a, b) {
                        this.a = b, er(this, "verificationId", a)
                    }

                    function eh(a, b, t, e) {
                        return new Go(a).eb(b, t).then((function(t) {
                            return new Qc(t, e)
                        }))
                    }

                    function nh(a) {
                        var b = Zr(a);
                        if (!(b && b.exp && b.auth_time && b.iat)) throw new P("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                        nr(this, {
                            token: a,
                            expirationTime: Ji(1e3 * b.exp),
                            authTime: Ji(1e3 * b.auth_time),
                            issuedAtTime: Ji(1e3 * b.iat),
                            signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
                            signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
                            claims: b
                        })
                    }

                    function ih(a, b, t) {
                        var e = b && b[em];
                        if (!e) throw new P("argument-error", "Internal assert: Invalid MultiFactorResolver");
                        this.a = a, this.f = Tt(b), this.g = t, this.c = new po(null, e), this.b = [];
                        var n = this;
                        Y(b[rh] || [], (function(t) {
                            (t = ar(t)) && n.b.push(t)
                        })), er(this, "auth", this.a), er(this, "session", this.c), er(this, "hints", this.b)
                    }
                    Wc.prototype.reset = function() {
                        this.b = null, this.a && (this.a.cancel(), this.a = null)
                    }, Wc.prototype.h = function(a, b) {
                        if (a) {
                            this.reset(), this.g = !0;
                            var t = a.c,
                                e = a.b,
                                n = a.a && "auth/web-storage-unsupported" == a.a.code,
                                r = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
                            this.i = !(!n && !r), "unknown" != t || n || r ? a.a ? (zc(this, !0, null, a.a), Le()) : b.Fa(t, e) ? function(a, b, t) {
                                t = t.Fa(b.c, b.b);
                                var e = b.g,
                                    n = b.f,
                                    r = b.i,
                                    g = b.S(),
                                    o = !!b.c.match(/Redirect$/);
                                t(e, n, g, r).then((function(t) {
                                    zc(a, o, t, null)
                                })).s((function(t) {
                                    zc(a, o, null, t)
                                }))
                            }(this, a, b) : xe(new P("invalid-auth-event")) : (zc(this, !1, null, null), Le())
                        } else xe(new P("invalid-auth-event"))
                    }, Wc.prototype.qa = function() {
                        var a = this;
                        return new Se((function(b, t) {
                            a.b ? a.b().then(b, t) : (a.f.push(b), a.c.push(t), function(a) {
                                var b = new P("timeout");
                                a.a && a.a.cancel(), a.a = Cn(Uc.get()).then((function() {
                                    a.b || (a.g = !0, zc(a, !0, null, b))
                                }))
                            }(a))
                        }))
                    }, $c.prototype.h = function(a, b) {
                        if (a) {
                            var t = a.c,
                                e = a.b;
                            a.a ? (b.ma(a.c, null, a.a, a.b), Le()) : b.Fa(t, e) ? function(a, b) {
                                var t = a.b,
                                    e = a.c;
                                b.Fa(e, t)(a.g, a.f, a.S(), a.i).then((function(n) {
                                    b.ma(e, n, null, t)
                                })).s((function(n) {
                                    b.ma(e, null, n, t)
                                }))
                            }(a, b) : xe(new P("invalid-auth-event"))
                        } else xe(new P("invalid-auth-event"))
                    }, Qc.prototype.confirm = function(a) {
                        return a = Bo(this.verificationId, a), this.a(a)
                    };
                    var rh = "mfaInfo",
                        em = "mfaPendingCredential";

                    function oh(a, b, t, e) {
                        P.call(this, "multi-factor-auth-required", e, b), this.b = new ih(a, b, t), er(this, "resolver", this.b)
                    }

                    function ah(a, b, t) {
                        if (a && T(a.serverResponse) && "auth/multi-factor-auth-required" === a.code) try {
                            return new oh(b, a.serverResponse, t, a.message)
                        } catch (t) {}
                        return null
                    }

                    function sh() {}

                    function uh(a) {
                        er(this, "factorId", a.fa), this.a = a
                    }

                    function ch(a) {
                        if (uh.call(this, a), this.a.fa != Go.PROVIDER_ID) throw new P("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
                    }

                    function hh(a, b) {
                        for (var t in nn.call(this, a), b) this[t] = b[t]
                    }

                    function lh(a, b) {
                        this.a = a, this.b = [], this.c = q(this.xc, this), dn(this.a, "userReloaded", this.c);
                        var t = [];
                        b && b.multiFactor && b.multiFactor.enrolledFactors && Y(b.multiFactor.enrolledFactors, (function(e) {
                            var n = null,
                                r = {};
                            if (e) {
                                e.uid && (r[cr] = e.uid), e.displayName && (r[sr] = e.displayName), e.enrollmentTime && (r[ur] = new Date(e.enrollmentTime).toISOString()), e.phoneNumber && (r[lr] = e.phoneNumber);
                                try {
                                    n = new fr(r)
                                } catch (t) {}
                                e = n
                            } else e = null;
                            e && t.push(e)
                        })), fh(this, t)
                    }

                    function fh(a, b) {
                        a.b = b, er(a, "enrolledFactors", b)
                    }

                    function ph(a, b, t) {
                        if (this.h = a, this.i = b, this.g = t, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
                    }

                    function dh(a) {
                        this.c = a, this.b = this.a = null
                    }

                    function vh(a) {
                        return a.b && 1e3 * a.b.c || 0
                    }

                    function mh(a, b) {
                        var t = b.refreshToken;
                        a.b = $r(b[is] || ""), a.a = t
                    }

                    function gh(a, b) {
                        return function(a, b) {
                            return new Se((function(t, e) {
                                "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? fs(a, a.l + "?key=" + encodeURIComponent(a.c), (function(n) {
                                    n ? n.error ? e(hu(n)) : n.access_token && n.refresh_token ? t(n) : e(new P("internal-error")) : e(new P("network-request-failed"))
                                }), "POST", ei(b).toString(), a.g, a.v.get()) : e(new P("internal-error"))
                            }))
                        }(a.c, b).then((function(t) {
                            return a.b = $r(t.access_token), a.a = t.refresh_token, {
                                accessToken: a.b.toString(),
                                refreshToken: a.a
                            }
                        })).s((function(t) {
                            throw "auth/user-token-expired" == t.code && (a.a = null), t
                        }))
                    }

                    function bh(a, b) {
                        this.a = a || null, this.b = b || null, nr(this, {
                            lastSignInTime: Ji(b || null),
                            creationTime: Ji(a || null)
                        })
                    }

                    function yh(a, b, t, e, n, r) {
                        nr(this, {
                            uid: a,
                            displayName: e || null,
                            photoURL: n || null,
                            email: t || null,
                            phoneNumber: r || null,
                            providerId: b
                        })
                    }

                    function wh(a, b, t) {
                        this.G = [], this.l = a.apiKey, this.m = a.appName, this.o = a.authDomain || null;
                        var n = e.a.SDK_VERSION ? Pi(e.a.SDK_VERSION) : null;
                        this.a = new es(this.l, j(D), n), a.emulatorConfig && cs(this.a, a.emulatorConfig), this.b = new dh(this.a), _h(this, b[is]), mh(this.b, b), er(this, "refreshToken", this.b.a), Ph(this, t || {}), kn.call(this), this.P = !1, this.o && xi() && (this.i = Bc(this.o, this.l, this.m)), this.R = [], this.f = null, this.u = function(a) {
                            return new ph((function() {
                                return a.I(!0)
                            }), (function(b) {
                                return !(!b || "auth/network-request-failed" != b.code)
                            }), (function() {
                                var b = vh(a.b) - O() - 3e5;
                                return 0 < b ? b : 0
                            }))
                        }(this), this.$ = q(this.gb, this);
                        var r = this;
                        this.pa = null, this.Ba = function(t) {
                            r.wa(t.h)
                        }, this.ba = null, this.za = function(t) {
                            cs(r.a, t.c)
                        }, this.W = null, this.X = [], this.Aa = function(t) {
                            Eh(r, t.f)
                        }, this.aa = null, this.N = new lh(this, t), er(this, "multiFactor", this.N)
                    }

                    function Ih(a, b) {
                        a.ba && gn(a.ba, "languageCodeChanged", a.Ba), (a.ba = b) && dn(b, "languageCodeChanged", a.Ba)
                    }

                    function Th(a, b) {
                        a.W && gn(a.W, "emulatorConfigChanged", a.za), (a.W = b) && dn(b, "emulatorConfigChanged", a.za)
                    }

                    function Eh(a, b) {
                        a.X = b, ls(a.a, e.a.SDK_VERSION ? Pi(e.a.SDK_VERSION, a.X) : null)
                    }

                    function Ah(a, b) {
                        a.aa && gn(a.aa, "frameworkChanged", a.Aa), (a.aa = b) && dn(b, "frameworkChanged", a.Aa)
                    }

                    function kh(a) {
                        try {
                            return e.a.app(a.m).auth()
                        } catch (t) {
                            throw new P("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!")
                        }
                    }

                    function Nh(a) {
                        a.A || a.u.b || (a.u.start(), gn(a, "tokenChanged", a.$), dn(a, "tokenChanged", a.$))
                    }

                    function Sh(a) {
                        gn(a, "tokenChanged", a.$), a.u.stop()
                    }

                    function _h(a, b) {
                        a.ya = b, er(a, "_lat", b)
                    }

                    function Oh(a) {
                        for (var b = [], t = 0; t < a.R.length; t++) b.push(a.R[t](a));
                        return je(b).then((function() {
                            return a
                        }))
                    }

                    function Ch(a) {
                        a.i && !a.P && (a.P = !0, xc(a.i, a))
                    }

                    function Ph(a, b) {
                        nr(a, {
                            uid: b.uid,
                            displayName: b.displayName || null,
                            photoURL: b.photoURL || null,
                            email: b.email || null,
                            emailVerified: b.emailVerified || !1,
                            phoneNumber: b.phoneNumber || null,
                            isAnonymous: b.isAnonymous || !1,
                            tenantId: b.tenantId || null,
                            metadata: new bh(b.createdAt, b.lastLoginAt),
                            providerData: []
                        }), a.a.b = a.tenantId
                    }

                    function Rh() {}

                    function Dh(a) {
                        return Le().then((function() {
                            if (a.A) throw new P("app-deleted")
                        }))
                    }

                    function Lh(a) {
                        return $(a.providerData, (function(b) {
                            return b.providerId
                        }))
                    }

                    function xh(a, b) {
                        b && (Mh(a, b.providerId), a.providerData.push(b))
                    }

                    function Mh(a, b) {
                        et(a.providerData, (function(t) {
                            return t.providerId == b
                        }))
                    }

                    function jh(a, b, t) {
                        ("uid" != b || t) && a.hasOwnProperty(b) && er(a, b, t)
                    }

                    function Uh(a, b) {
                        a != b && (nr(a, {
                            uid: b.uid,
                            displayName: b.displayName,
                            photoURL: b.photoURL,
                            email: b.email,
                            emailVerified: b.emailVerified,
                            phoneNumber: b.phoneNumber,
                            isAnonymous: b.isAnonymous,
                            tenantId: b.tenantId,
                            providerData: []
                        }), b.metadata ? er(a, "metadata", function(a) {
                            return new bh(a.a, a.b)
                        }(b.metadata)) : er(a, "metadata", new bh), Y(b.providerData, (function(t) {
                            xh(a, t)
                        })), function(a, b) {
                            a.b = b.b, a.a = b.a
                        }(a.b, b.b), er(a, "refreshToken", a.b.a), fh(a.N, b.N.b))
                    }

                    function Vh(a) {
                        return a.I().then((function(b) {
                            var t = a.isAnonymous;
                            return function(a, b) {
                                return uu(a.a, Vs, {
                                    idToken: b
                                }).then(q(a.Jc, a))
                            }(a, b).then((function() {
                                return t || jh(a, "isAnonymous", !1), b
                            }))
                        }))
                    }

                    function Fh(a, b) {
                        b[is] && a.ya != b[is] && (mh(a.b, b), a.dispatchEvent(new hh("tokenChanged")), _h(a, b[is]), jh(a, "refreshToken", a.b.a))
                    }

                    function Kh(a, b) {
                        return Vh(a).then((function() {
                            if (Q(Lh(a), b)) return Oh(a).then((function() {
                                throw new P("provider-already-linked")
                            }))
                        }))
                    }

                    function qh(a, b, t) {
                        return ir({
                            user: a,
                            credential: Wo(b),
                            additionalUserInfo: b = io(b),
                            operationType: t
                        })
                    }

                    function Hh(a, b) {
                        return Fh(a, b), a.reload().then((function() {
                            return a
                        }))
                    }

                    function Gh(a, b, t, n, r) {
                        if (!xi()) return xe(new P("operation-not-supported-in-this-environment"));
                        if (a.f && !r) return xe(a.f);
                        var o = no(t.providerId),
                            g = qi(a.uid + ":::"),
                            c = null;
                        (!Ui() || Ei()) && a.o && t.isOAuthProvider && (c = Eu(a.o, a.l, a.m, b, t, null, g, e.a.SDK_VERSION || null, null, null, a.tenantId));
                        var h = bi(c, o && o.ua, o && o.ta);
                        return n = n().then((function() {
                            if (Wh(a), !r) return a.I().then((function() {}))
                        })).then((function() {
                            return Vc(a.i, h, b, t, g, !!c, a.tenantId)
                        })).then((function() {
                            return new Se((function(p, t) {
                                a.ma(b, null, new P("cancelled-popup-request"), a.h || null), a.g = p, a.O = t, a.h = g, a.c = qc(a.i, a, b, h, g)
                            }))
                        })).then((function(p) {
                            return h && gi(h), p ? ir(p) : null
                        })).s((function(p) {
                            throw h && gi(h), p
                        })), Xh(a, n, r)
                    }

                    function Bh(a, b, t, e, n) {
                        if (!xi()) return xe(new P("operation-not-supported-in-this-environment"));
                        if (a.f && !n) return xe(a.f);
                        var r = null,
                            g = qi(a.uid + ":::");
                        return e = e().then((function() {
                            if (Wh(a), !n) return a.I().then((function() {}))
                        })).then((function() {
                            return a.ga = g, Oh(a)
                        })).then((function(t) {
                            return a.ha && (t = (t = a.ha).b.set(zh, a.w(), t.a)), t
                        })).then((function() {
                            return Kc(a.i, b, t, g, a.tenantId)
                        })).s((function(t) {
                            if (r = t, a.ha) return $h(a.ha);
                            throw r
                        })).then((function() {
                            if (r) throw r
                        })), Xh(a, e, n)
                    }

                    function Wh(a) {
                        if (!a.i || !a.P) {
                            if (a.i && !a.P) throw new P("internal-error");
                            throw new P("auth-domain-config-required")
                        }
                    }

                    function Xh(a, b, t) {
                        var e = function(a, b, t) {
                            return a.f && !t ? (b.cancel(), xe(a.f)) : b.s((function(t) {
                                throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (a.f || a.dispatchEvent(new hh("userInvalidated")), a.f = t), t
                            }))
                        }(a, b, t);
                        return a.G.push(e), e.na((function() {
                            tt(a.G, e)
                        })), e.s((function(t) {
                            var e = null;
                            throw t && "auth/multi-factor-auth-required" === t.code && (e = ah(t.w(), kh(a), q(a.ic, a))), e || t
                        }))
                    }

                    function Jh(a) {
                        if (!a.apiKey) return null;
                        var b = {
                                apiKey: a.apiKey,
                                authDomain: a.authDomain,
                                appName: a.appName,
                                emulatorConfig: a.emulatorConfig
                            },
                            t = {};
                        if (!a.stsTokenManager || !a.stsTokenManager.accessToken) return null;
                        t[is] = a.stsTokenManager.accessToken, t.refreshToken = a.stsTokenManager.refreshToken || null;
                        var e = new wh(b, t, a);
                        return a.providerData && Y(a.providerData, (function(t) {
                            t && xh(e, ir(t))
                        })), a.redirectEventId && (e.ga = a.redirectEventId), e
                    }

                    function Yh(a) {
                        this.a = a, this.b = oc()
                    }
                    ih.prototype.Qc = function(a) {
                        var b = this;
                        return a.rb(this.a.a, this.c).then((function(t) {
                            var e = Tt(b.f);
                            return delete e[rh], delete e[em], At(e, t), b.g(e)
                        }))
                    }, C(oh, P), sh.prototype.rb = function(a, b, t) {
                        return b.type == vo ? function(a, b, t, e) {
                            return t.Ha().then((function(t) {
                                return t = {
                                    idToken: t
                                }, void 0 !== e && (t.displayName = e), At(t, {
                                    phoneVerificationInfo: Ho(a.a)
                                }), uu(b, js, t)
                            }))
                        }(this, a, b, t) : function(a, b, t) {
                            return t.Ha().then((function(t) {
                                return At(t = {
                                    mfaPendingCredential: t
                                }, {
                                    phoneVerificationInfo: Ho(a.a)
                                }), uu(b, Us, t)
                            }))
                        }(this, a, b)
                    }, C(uh, sh), C(ch, uh), C(hh, nn), (n = lh.prototype).xc = function(a) {
                        fh(this, function(a) {
                            var b = [];
                            return Y(a.mfaInfo || [], (function(t) {
                                (t = ar(t)) && b.push(t)
                            })), b
                        }(a.gd))
                    }, n.Qb = function() {
                        return this.a.I().then((function(a) {
                            return new po(a, null)
                        }))
                    }, n.ec = function(a, b) {
                        var t = this,
                            e = this.a.a;
                        return this.Qb().then((function(t) {
                            return a.rb(e, t, b)
                        })).then((function(e) {
                            return Fh(t.a, e), t.a.reload()
                        }))
                    }, n.ad = function(a) {
                        var b = this,
                            t = "string" == typeof a ? a : a.uid,
                            e = this.a.a;
                        return this.a.I().then((function(n) {
                            return uu(e, su, {
                                idToken: n,
                                mfaEnrollmentId: t
                            })
                        })).then((function(e) {
                            var n = z(b.b, (function(g) {
                                return g.uid != t
                            }));
                            return fh(b, n), Fh(b.a, e), b.a.reload().s((function(g) {
                                if ("auth/user-token-expired" != g.code) throw g
                            }))
                        }))
                    }, n.w = function() {
                        return {
                            multiFactor: {
                                enrolledFactors: $(this.b, (function(a) {
                                    return a.w()
                                }))
                            }
                        }
                    }, ph.prototype.start = function() {
                        this.a = this.c,
                            function t(a, b) {
                                a.stop(), a.b = Cn(function(a, b) {
                                    return b ? (a.a = a.c, a.g()) : (b = a.a, a.a *= 2, a.a > a.f && (a.a = a.f), b)
                                }(a, b)).then((function() {
                                    return function() {
                                        var a = f.document,
                                            b = null;
                                        return Wi() || !a ? Le() : new Se((function(t) {
                                            b = function() {
                                                Wi() && (a.removeEventListener("visibilitychange", b, !1), t())
                                            }, a.addEventListener("visibilitychange", b, !1)
                                        })).s((function(t) {
                                            throw a.removeEventListener("visibilitychange", b, !1), t
                                        }))
                                    }()
                                })).then((function() {
                                    return a.h()
                                })).then((function() {
                                    t(a, !0)
                                })).s((function(e) {
                                    a.i(e) && t(a, !1)
                                }))
                            }(this, !0)
                    }, ph.prototype.stop = function() {
                        this.b && (this.b.cancel(), this.b = null)
                    }, dh.prototype.w = function() {
                        return {
                            apiKey: this.c.c,
                            refreshToken: this.a,
                            accessToken: this.b && this.b.toString(),
                            expirationTime: vh(this)
                        }
                    }, dh.prototype.getToken = function(a) {
                        return a = !!a, this.b && !this.a ? xe(new P("user-token-expired")) : a || !this.b || O() > vh(this) - 3e4 ? this.a ? gh(this, {
                            grant_type: "refresh_token",
                            refresh_token: this.a
                        }) : Le(null) : Le({
                            accessToken: this.b.toString(),
                            refreshToken: this.a
                        })
                    }, bh.prototype.w = function() {
                        return {
                            lastLoginAt: this.b,
                            createdAt: this.a
                        }
                    }, C(wh, kn), wh.prototype.wa = function(a) {
                        this.pa = a, us(this.a, a)
                    }, wh.prototype.ka = function() {
                        return this.pa
                    }, wh.prototype.Ga = function() {
                        return it(this.X)
                    }, wh.prototype.gb = function() {
                        this.u.b && (this.u.stop(), this.u.start())
                    }, er(wh.prototype, "providerId", "firebase"), (n = wh.prototype).reload = function() {
                        var a = this;
                        return Xh(this, Dh(this).then((function() {
                            return Vh(a).then((function() {
                                return Oh(a)
                            })).then(Rh)
                        })))
                    }, n.nc = function(a) {
                        return this.I(a).then((function(b) {
                            return new nh(b)
                        }))
                    }, n.I = function(a) {
                        var b = this;
                        return Xh(this, Dh(this).then((function() {
                            return b.b.getToken(a)
                        })).then((function(t) {
                            if (!t) throw new P("internal-error");
                            return t.accessToken != b.ya && (_h(b, t.accessToken), b.dispatchEvent(new hh("tokenChanged"))), jh(b, "refreshToken", t.refreshToken), t.accessToken
                        })))
                    }, n.Jc = function(a) {
                        if (!(a = a.users) || !a.length) throw new P("internal-error");
                        Ph(this, {
                            uid: (a = a[0]).localId,
                            displayName: a.displayName,
                            photoURL: a.photoUrl,
                            email: a.email,
                            emailVerified: !!a.emailVerified,
                            phoneNumber: a.phoneNumber,
                            lastLoginAt: a.lastLoginAt,
                            createdAt: a.createdAt,
                            tenantId: a.tenantId
                        });
                        for (var b = function(a) {
                                return (a = a.providerUserInfo) && a.length ? $(a, (function(b) {
                                    return new yh(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber)
                                })) : []
                            }(a), t = 0; t < b.length; t++) xh(this, b[t]);
                        jh(this, "isAnonymous", !(this.email && a.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new hh("userReloaded", {
                            gd: a
                        }))
                    }, n.Kc = function(a) {
                        return Zi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.sb(a)
                    }, n.sb = function(a) {
                        var b = this,
                            t = null;
                        return Xh(this, a.c(this.a, this.uid).then((function(e) {
                            return Fh(b, e), t = qh(b, e, "reauthenticate"), b.f = null, b.reload()
                        })).then((function() {
                            return t
                        })), !0)
                    }, n.Bc = function(a) {
                        return Zi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.pb(a)
                    }, n.pb = function(a) {
                        var b = this,
                            t = null;
                        return Xh(this, Kh(this, a.providerId).then((function() {
                            return b.I()
                        })).then((function(t) {
                            return a.b(b.a, t)
                        })).then((function(e) {
                            return t = qh(b, e, "link"), Hh(b, e)
                        })).then((function() {
                            return t
                        })))
                    }, n.Cc = function(a, b) {
                        var t = this;
                        return Xh(this, Kh(this, "phone").then((function() {
                            return eh(kh(t), a, b, q(t.pb, t))
                        })))
                    }, n.Lc = function(a, b) {
                        var t = this;
                        return Xh(this, Le().then((function() {
                            return eh(kh(t), a, b, q(t.sb, t))
                        })), !0)
                    }, n.Ab = function(a) {
                        var b = this;
                        return Xh(this, this.I().then((function(t) {
                            return b.a.Ab(t, a)
                        })).then((function(t) {
                            return Fh(b, t), b.reload()
                        })))
                    }, n.dd = function(a) {
                        var b = this;
                        return Xh(this, this.I().then((function(t) {
                            return a.b(b.a, t)
                        })).then((function(t) {
                            return Fh(b, t), b.reload()
                        })))
                    }, n.Bb = function(a) {
                        var b = this;
                        return Xh(this, this.I().then((function(t) {
                            return b.a.Bb(t, a)
                        })).then((function(t) {
                            return Fh(b, t), b.reload()
                        })))
                    }, n.Cb = function(a) {
                        if (void 0 === a.displayName && void 0 === a.photoURL) return Dh(this);
                        var b = this;
                        return Xh(this, this.I().then((function(t) {
                            return b.a.Cb(t, {
                                displayName: a.displayName,
                                photoUrl: a.photoURL
                            })
                        })).then((function(t) {
                            return Fh(b, t), jh(b, "displayName", t.displayName || null), jh(b, "photoURL", t.photoUrl || null), Y(b.providerData, (function(t) {
                                "password" === t.providerId && (er(t, "displayName", b.displayName), er(t, "photoURL", b.photoURL))
                            })), Oh(b)
                        })).then(Rh))
                    }, n.bd = function(a) {
                        var b = this;
                        return Xh(this, Vh(this).then((function(t) {
                            return Q(Lh(b), a) ? function(a, b, t) {
                                return uu(a, Ls, {
                                    idToken: b,
                                    deleteProvider: t
                                })
                            }(b.a, t, [a]).then((function(t) {
                                var e = {};
                                return Y(t.providerUserInfo || [], (function(t) {
                                    e[t.providerId] = !0
                                })), Y(Lh(b), (function(t) {
                                    e[t] || Mh(b, t)
                                })), e[Go.PROVIDER_ID] || er(b, "phoneNumber", null), Oh(b)
                            })) : Oh(b).then((function() {
                                throw new P("no-such-provider")
                            }))
                        })))
                    }, n.delete = function() {
                        var a = this;
                        return Xh(this, this.I().then((function(b) {
                            return uu(a.a, Ds, {
                                idToken: b
                            })
                        })).then((function() {
                            a.dispatchEvent(new hh("userDeleted"))
                        }))).then((function() {
                            for (var b = 0; b < a.G.length; b++) a.G[b].cancel("app-deleted");
                            Ih(a, null), Th(a, null), Ah(a, null), a.G = [], a.A = !0, Sh(a), er(a, "refreshToken", null), a.i && Mc(a.i, a)
                        }))
                    }, n.Eb = function(a, b) {
                        return !!("linkViaPopup" == a && (this.h || null) == b && this.g || "reauthViaPopup" == a && (this.h || null) == b && this.g || "linkViaRedirect" == a && (this.ga || null) == b || "reauthViaRedirect" == a && (this.ga || null) == b)
                    }, n.ma = function(a, b, t, e) {
                        "linkViaPopup" != a && "reauthViaPopup" != a || e != (this.h || null) || (t && this.O ? this.O(t) : b && !t && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O)
                    }, n.Fa = function(a, b) {
                        return "linkViaPopup" == a && b == (this.h || null) ? q(this.Jb, this) : "reauthViaPopup" == a && b == (this.h || null) ? q(this.Kb, this) : "linkViaRedirect" == a && (this.ga || null) == b ? q(this.Jb, this) : "reauthViaRedirect" == a && (this.ga || null) == b ? q(this.Kb, this) : null
                    }, n.Dc = function(a) {
                        var b = this;
                        return Gh(this, "linkViaPopup", a, (function() {
                            return Kh(b, a.providerId).then((function() {
                                return Oh(b)
                            }))
                        }), !1)
                    }, n.Mc = function(a) {
                        return Gh(this, "reauthViaPopup", a, (function() {
                            return Le()
                        }), !0)
                    }, n.Ec = function(a) {
                        var b = this;
                        return Bh(this, "linkViaRedirect", a, (function() {
                            return Kh(b, a.providerId)
                        }), !1)
                    }, n.Nc = function(a) {
                        return Bh(this, "reauthViaRedirect", a, (function() {
                            return Le()
                        }), !0)
                    }, n.Jb = function(a, b, t, e) {
                        var n = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var r = null;
                        return Xh(this, this.I().then((function(g) {
                            return Ns(n.a, {
                                requestUri: a,
                                postBody: e,
                                sessionId: b,
                                idToken: g
                            })
                        })).then((function(g) {
                            return r = qh(n, g, "link"), Hh(n, g)
                        })).then((function() {
                            return r
                        })))
                    }, n.Kb = function(a, b, t, e) {
                        var n = this;
                        this.c && (this.c.cancel(), this.c = null);
                        var r = null;
                        return Xh(this, Le().then((function() {
                            return bo(Ss(n.a, {
                                requestUri: a,
                                sessionId: b,
                                postBody: e,
                                tenantId: t
                            }), n.uid)
                        })).then((function(t) {
                            return r = qh(n, t, "reauthenticate"), Fh(n, t), n.f = null, n.reload()
                        })).then((function() {
                            return r
                        })), !0)
                    }, n.tb = function(a) {
                        var b = this,
                            t = null;
                        return Xh(this, this.I().then((function(e) {
                            return t = e, void 0 === a || It(a) ? {} : Xr(new jr(a))
                        })).then((function(e) {
                            return b.a.tb(t, e)
                        })).then((function(t) {
                            if (b.email != t) return b.reload()
                        })).then((function() {})))
                    }, n.Db = function(a, b) {
                        var t = this,
                            e = null;
                        return Xh(this, this.I().then((function(t) {
                            return e = t, void 0 === b || It(b) ? {} : Xr(new jr(b))
                        })).then((function(n) {
                            return t.a.Db(e, a, n)
                        })).then((function(e) {
                            if (t.email != e) return t.reload()
                        })).then((function() {})))
                    }, n.ic = function(a) {
                        var b = null,
                            t = this;
                        return Xh(this, a = bo(Le(a), t.uid).then((function(e) {
                            return b = qh(t, e, "reauthenticate"), Fh(t, e), t.f = null, t.reload()
                        })).then((function() {
                            return b
                        })), !0)
                    }, n.toJSON = function() {
                        return this.w()
                    }, n.w = function() {
                        var a = {
                            uid: this.uid,
                            displayName: this.displayName,
                            photoURL: this.photoURL,
                            email: this.email,
                            emailVerified: this.emailVerified,
                            phoneNumber: this.phoneNumber,
                            isAnonymous: this.isAnonymous,
                            tenantId: this.tenantId,
                            providerData: [],
                            apiKey: this.l,
                            appName: this.m,
                            authDomain: this.o,
                            stsTokenManager: this.b.w(),
                            redirectEventId: this.ga || null
                        };
                        return this.metadata && At(a, this.metadata.w()), Y(this.providerData, (function(b) {
                            a.providerData.push(function(a) {
                                var t, b = {};
                                for (t in a) a.hasOwnProperty(t) && (b[t] = a[t]);
                                return b
                            }(b))
                        })), At(a, this.N.w()), a
                    };
                    var zh = {
                        name: "redirectUser",
                        D: "session"
                    };

                    function $h(a) {
                        return uc(a.b, zh, a.a)
                    }

                    function Zh(a) {
                        this.a = a, this.b = oc(), this.c = null, this.f = function(a) {
                            var b = el("local"),
                                t = el("session"),
                                e = el("none");
                            return function(a, b, t) {
                                var e = sc(b, t),
                                    n = ac(a, b.D);
                                return a.get(b, t).then((function(r) {
                                    var g = null;
                                    try {
                                        g = Ki(f.localStorage.getItem(e))
                                    } catch (t) {}
                                    if (g && !r) return f.localStorage.removeItem(e), a.set(b, g, t);
                                    g && r && "localStorage" != n.type && f.localStorage.removeItem(e)
                                }))
                            }(a.b, b, a.a).then((function() {
                                return a.b.get(t, a.a)
                            })).then((function(n) {
                                return n ? t : a.b.get(e, a.a).then((function(t) {
                                    return t ? e : a.b.get(b, a.a).then((function(g) {
                                        return g ? b : a.b.get(tl, a.a).then((function(t) {
                                            return t ? el(t) : b
                                        }))
                                    }))
                                }))
                            })).then((function(t) {
                                return a.c = t, Qh(a, t.D)
                            })).s((function() {
                                a.c || (a.c = b)
                            }))
                        }(this), this.b.addListener(el("local"), this.a, q(this.g, this))
                    }

                    function Qh(a, b) {
                        var t, e = [];
                        for (t in ic) ic[t] !== b && e.push(uc(a.b, el(ic[t]), a.a));
                        return e.push(uc(a.b, tl, a.a)),
                            function(a) {
                                return new Se((function(b, t) {
                                    var e = a.length,
                                        n = [];
                                    if (e)
                                        for (var r = function(p, t) {
                                                e--, n[p] = t, 0 == e && b(n)
                                            }, g = function(p) {
                                                t(p)
                                            }, o = 0; o < a.length; o++) Me(a[o], _(r, o), g);
                                    else b(n)
                                }))
                            }(e)
                    }
                    Zh.prototype.g = function() {
                        var a = this,
                            b = el("local");
                        al(this, (function() {
                            return Le().then((function() {
                                return a.c && "local" != a.c.D ? a.b.get(b, a.a) : null
                            })).then((function(t) {
                                if (t) return Qh(a, "local").then((function() {
                                    a.c = b
                                }))
                            }))
                        }))
                    };
                    var tl = {
                        name: "persistence",
                        D: "session"
                    };

                    function el(a) {
                        return {
                            name: "authUser",
                            D: a
                        }
                    }

                    function nl(a, b) {
                        return al(a, (function() {
                            return a.b.set(a.c, b.w(), a.a)
                        }))
                    }

                    function il(a) {
                        return al(a, (function() {
                            return uc(a.b, a.c, a.a)
                        }))
                    }

                    function rl(a, b, t) {
                        return al(a, (function() {
                            return a.b.get(a.c, a.a).then((function(e) {
                                return e && b && (e.authDomain = b), e && t && (e.emulatorConfig = t), Jh(e || {})
                            }))
                        }))
                    }

                    function al(a, b) {
                        return a.f = a.f.then(b, b), a.f
                    }

                    function sl(a) {
                        if (this.m = !1, er(this, "settings", new Zc), er(this, "app", a), !bl(this).options || !bl(this).options.apiKey) throw new P("invalid-api-key");
                        a = e.a.SDK_VERSION ? Pi(e.a.SDK_VERSION) : null, this.a = new es(bl(this).options && bl(this).options.apiKey, j(D), a), this.R = [], this.u = [], this.P = [], this.ac = e.a.INTERNAL.createSubscribe(q(this.yc, this)), this.X = void 0, this.bc = e.a.INTERNAL.createSubscribe(q(this.zc, this)), ml(this, null), this.l = new Zh(bl(this).options.apiKey + ":" + bl(this).name), this.G = new Yh(bl(this).options.apiKey + ":" + bl(this).name), this.$ = Tl(this, function(a) {
                                var b = bl(a).options.authDomain,
                                    t = function(a) {
                                        var b = function(a, b) {
                                            return a.b.get(zh, a.a).then((function(t) {
                                                return t && b && (t.authDomain = b), Jh(t || {})
                                            }))
                                        }(a.G, bl(a).options.authDomain).then((function(t) {
                                            return (a.o = t) && (t.ha = a.G), $h(a.G)
                                        }));
                                        return Tl(a, b)
                                    }(a).then((function() {
                                        return rl(a.l, b, a.f)
                                    })).then((function(t) {
                                        return t ? (t.ha = a.G, a.o && (a.o.ga || null) == (t.ga || null) ? t : t.reload().then((function() {
                                            return nl(a.l, t).then((function() {
                                                return t
                                            }))
                                        })).s((function(e) {
                                            return "auth/network-request-failed" == e.code ? t : il(a.l)
                                        }))) : null
                                    })).then((function(t) {
                                        ml(a, t || null)
                                    }));
                                return Tl(a, t)
                            }(this)), this.i = Tl(this, function(a) {
                                return a.$.then((function() {
                                    return pl(a)
                                })).s((function() {})).then((function() {
                                    if (!a.m) return a.pa()
                                })).s((function() {})).then((function() {
                                    if (!a.m) {
                                        a.ba = !0;
                                        var b = a.l;
                                        b.b.addListener(el("local"), b.a, a.pa)
                                    }
                                }))
                            }(this)), this.ba = !1, this.pa = q(this.Yc, this), this.Ba = q(this.da, this), this.ya = q(this.kc, this), this.za = q(this.vc, this), this.Aa = q(this.wc, this), this.b = null,
                            function(a) {
                                var b = bl(a).options.authDomain,
                                    t = bl(a).options.apiKey;
                                b && xi() && (a.gb = a.$.then((function() {
                                    if (!a.m) {
                                        if (a.b = Bc(b, t, bl(a).name, a.f), xc(a.b, a), yl(a) && Ch(yl(a)), a.o) {
                                            Ch(a.o);
                                            var e = a.o;
                                            e.wa(a.ka()), Ih(e, a), Eh(e = a.o, a.N), Ah(e, a), cs((e = a.o).a, a.f), Th(e, a), a.o = null
                                        }
                                        return a.b
                                    }
                                })))
                            }(this), this.INTERNAL = {}, this.INTERNAL.delete = q(this.delete, this), this.INTERNAL.logFramework = q(this.Fc, this), this.A = 0, kn.call(this),
                            function(a) {
                                Object.defineProperty(a, "lc", {
                                    get: function() {
                                        return this.ka()
                                    },
                                    set: function(b) {
                                        this.wa(b)
                                    },
                                    enumerable: !1
                                }), a.aa = null, Object.defineProperty(a, "ti", {
                                    get: function() {
                                        return this.S()
                                    },
                                    set: function(b) {
                                        this.xb(b)
                                    },
                                    enumerable: !1
                                }), a.W = null
                            }(this), this.N = [], this.f = null
                    }

                    function cl(a) {
                        nn.call(this, "languageCodeChanged"), this.h = a
                    }

                    function hl(a) {
                        nn.call(this, "emulatorConfigChanged"), this.c = a
                    }

                    function ll(a) {
                        nn.call(this, "frameworkChanged"), this.f = a
                    }

                    function fl(a) {
                        return a.gb || xe(new P("auth-domain-config-required"))
                    }

                    function pl(a) {
                        if (!xi()) return xe(new P("operation-not-supported-in-this-environment"));
                        var b = fl(a).then((function() {
                            return a.b.qa()
                        })).then((function(t) {
                            return t ? ir(t) : null
                        }));
                        return Tl(a, b)
                    }

                    function vl(a, b) {
                        var t = {};
                        return t.apiKey = bl(a).options.apiKey, t.authDomain = bl(a).options.authDomain, t.appName = bl(a).name, a.f && (t.emulatorConfig = a.f), a.$.then((function() {
                            return function(a, b, t, e) {
                                var n = new wh(a, b);
                                return t && (n.ha = t), e && Eh(n, e), n.reload().then((function() {
                                    return n
                                }))
                            }(t, b, a.G, a.Ga())
                        })).then((function(t) {
                            return yl(a) && t.uid == yl(a).uid ? (Uh(yl(a), t), a.da(t)) : (ml(a, t), Ch(t), a.da(t))
                        })).then((function() {
                            Il(a)
                        }))
                    }

                    function ml(a, b) {
                        yl(a) && (function(a, b) {
                            et(a.R, (function(t) {
                                return t == b
                            }))
                        }(yl(a), a.Ba), gn(yl(a), "tokenChanged", a.ya), gn(yl(a), "userDeleted", a.za), gn(yl(a), "userInvalidated", a.Aa), Sh(yl(a))), b && (b.R.push(a.Ba), dn(b, "tokenChanged", a.ya), dn(b, "userDeleted", a.za), dn(b, "userInvalidated", a.Aa), 0 < a.A && Nh(b)), er(a, "currentUser", b), b && (b.wa(a.ka()), Ih(b, a), Eh(b, a.N), Ah(b, a), cs(b.a, a.f), Th(b, a))
                    }

                    function gl(a, b) {
                        var t = null,
                            e = null;
                        return Tl(a, b.then((function(n) {
                            return t = Wo(n), e = io(n), vl(a, n)
                        }), (function(t) {
                            var e = null;
                            throw t && "auth/multi-factor-auth-required" === t.code && (e = ah(t.w(), a, q(a.jc, a))), e || t
                        })).then((function() {
                            return ir({
                                user: yl(a),
                                credential: t,
                                additionalUserInfo: e,
                                operationType: "signIn"
                            })
                        })))
                    }

                    function bl(a) {
                        return a.app
                    }

                    function yl(a) {
                        return a.currentUser
                    }

                    function wl(a) {
                        return yl(a) && yl(a)._lat || null
                    }

                    function Il(a) {
                        if (a.ba) {
                            for (var b = 0; b < a.u.length; b++) a.u[b] && a.u[b](wl(a));
                            if (a.X !== a.getUid() && a.P.length)
                                for (a.X = a.getUid(), b = 0; b < a.P.length; b++) a.P[b] && a.P[b](wl(a))
                        }
                    }

                    function Tl(a, b) {
                        return a.R.push(b), b.na((function() {
                            tt(a.R, b)
                        })), b
                    }

                    function El() {}

                    function Al() {
                        this.a = {}, this.b = 1e12
                    }
                    Zh.prototype.wb = function(a) {
                        var b = null,
                            t = this;
                        return function(a) {
                            var b = new P("invalid-persistence-type"),
                                t = new P("unsupported-persistence-type");
                            t: {
                                for (e in ic)
                                    if (ic[e] == a) {
                                        var e = !0;
                                        break t
                                    }
                                e = !1
                            }
                            if (!e || "string" != typeof a) throw b;
                            switch (ki()) {
                                case "ReactNative":
                                    if ("session" === a) throw t;
                                    break;
                                case "Node":
                                    if ("none" !== a) throw t;
                                    break;
                                case "Worker":
                                    if ("session" === a || !Mu() && "none" !== a) throw t;
                                    break;
                                default:
                                    if (!Li() && "none" !== a) throw t
                            }
                        }(a), al(this, (function() {
                            return a != t.c.D ? t.b.get(t.c, t.a).then((function(e) {
                                return b = e, Qh(t, a)
                            })).then((function() {
                                if (t.c = el(a), b) return t.b.set(t.c, b, t.a)
                            })) : Le()
                        }))
                    }, C(sl, kn), C(cl, nn), C(hl, nn), C(ll, nn), (n = sl.prototype).wb = function(a) {
                        return Tl(this, a = this.l.wb(a))
                    }, n.wa = function(a) {
                        this.aa === a || this.m || (this.aa = a, us(this.a, this.aa), this.dispatchEvent(new cl(this.ka())))
                    }, n.ka = function() {
                        return this.aa
                    }, n.ed = function() {
                        var a = f.navigator;
                        this.wa(a && (a.languages && a.languages[0] || a.language || a.userLanguage) || null)
                    }, n.fd = function(a) {
                        if (!this.f) {
                            if (!/^https?:\/\//.test(a)) throw new P("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
                            Xi("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), f.document && Ii().then((function() {
                                var a = f.document.createElement("div");
                                a.innerText = "Running in emulator mode. Do not use with production credentials.", a.style.position = "fixed", a.style.width = "100%", a.style.backgroundColor = "#ffffff", a.style.border = ".1em solid #000000", a.style.color = "#ff0000", a.style.bottom = "0px", a.style.left = "0px", a.style.margin = "0px", a.style.zIndex = 1e4, a.style.textAlign = "center", a.classList.add("firebase-emulator-warning"), f.document.body.appendChild(a)
                            })), this.f = {
                                url: a
                            }, this.settings.hb = !0, cs(this.a, this.f), this.dispatchEvent(new hl(this.f))
                        }
                    }, n.Fc = function(a) {
                        this.N.push(a), ls(this.a, e.a.SDK_VERSION ? Pi(e.a.SDK_VERSION, this.N) : null), this.dispatchEvent(new ll(this.N))
                    }, n.Ga = function() {
                        return it(this.N)
                    }, n.xb = function(a) {
                        this.W === a || this.m || (this.W = a, this.a.b = this.W)
                    }, n.S = function() {
                        return this.W
                    }, n.toJSON = function() {
                        return {
                            apiKey: bl(this).options.apiKey,
                            authDomain: bl(this).options.authDomain,
                            appName: bl(this).name,
                            currentUser: yl(this) && yl(this).w()
                        }
                    }, n.Eb = function(a, b) {
                        switch (a) {
                            case "unknown":
                            case "signInViaRedirect":
                                return !0;
                            case "signInViaPopup":
                                return this.h == b && !!this.g;
                            default:
                                return !1
                        }
                    }, n.ma = function(a, b, t, e) {
                        "signInViaPopup" == a && this.h == e && (t && this.O ? this.O(t) : b && !t && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O)
                    }, n.Fa = function(a, b) {
                        return "signInViaRedirect" == a || "signInViaPopup" == a && this.h == b && this.g ? q(this.hc, this) : null
                    }, n.hc = function(a, b, t, e) {
                        var n = this,
                            r = {
                                requestUri: a,
                                postBody: e,
                                sessionId: b,
                                tenantId: t
                            };
                        return this.c && (this.c.cancel(), this.c = null), n.$.then((function() {
                            return gl(n, ks(n.a, r))
                        }))
                    }, n.Wc = function(a) {
                        if (!xi()) return xe(new P("operation-not-supported-in-this-environment"));
                        var b = this,
                            t = no(a.providerId),
                            n = qi(),
                            r = null;
                        (!Ui() || Ei()) && bl(this).options.authDomain && a.isOAuthProvider && (r = Eu(bl(this).options.authDomain, bl(this).options.apiKey, bl(this).name, "signInViaPopup", a, null, n, e.a.SDK_VERSION || null, null, null, this.S(), this.f));
                        var o = bi(r, t && t.ua, t && t.ta);
                        return Tl(this, t = fl(this).then((function(g) {
                            return Vc(g, o, "signInViaPopup", a, n, !!r, b.S())
                        })).then((function() {
                            return new Se((function(g, t) {
                                b.ma("signInViaPopup", null, new P("cancelled-popup-request"), b.h), b.g = g, b.O = t, b.h = n, b.c = qc(b.b, b, "signInViaPopup", o, n)
                            }))
                        })).then((function(g) {
                            return o && gi(o), g ? ir(g) : null
                        })).s((function(g) {
                            throw o && gi(o), g
                        })))
                    }, n.Xc = function(a) {
                        if (!xi()) return xe(new P("operation-not-supported-in-this-environment"));
                        var b = this;
                        return Tl(this, fl(this).then((function() {
                            return function(a) {
                                return al(a, (function() {
                                    return a.b.set(tl, a.c.D, a.a)
                                }))
                            }(b.l)
                        })).then((function() {
                            return Kc(b.b, "signInViaRedirect", a, void 0, b.S())
                        })))
                    }, n.qa = function() {
                        var a = this;
                        return pl(this).then((function(b) {
                            return a.b && Jc(a.b.b), b
                        })).s((function(b) {
                            throw a.b && Jc(a.b.b), b
                        }))
                    }, n.cd = function(a) {
                        if (!a) return xe(new P("null-user"));
                        if (this.W != a.tenantId) return xe(new P("tenant-id-mismatch"));
                        var b = this,
                            t = {};
                        t.apiKey = bl(this).options.apiKey, t.authDomain = bl(this).options.authDomain, t.appName = bl(this).name;
                        var e = function(a, b, t, e) {
                            var n = a.b,
                                r = {};
                            return r[is] = n.b && n.b.toString(), r.refreshToken = n.a, b = new wh(b || {
                                apiKey: a.l,
                                authDomain: a.o,
                                appName: a.m
                            }, r), t && (b.ha = t), e && Eh(b, e), Uh(b, a), b
                        }(a, t, b.G, b.Ga());
                        return Tl(this, this.i.then((function() {
                            if (bl(b).options.apiKey != a.l) return e.reload()
                        })).then((function() {
                            return yl(b) && a.uid == yl(b).uid ? (Uh(yl(b), a), b.da(a)) : (ml(b, e), Ch(e), b.da(e))
                        })).then((function() {
                            Il(b)
                        })))
                    }, n.zb = function() {
                        var a = this;
                        return Tl(this, this.i.then((function() {
                            return a.b && Jc(a.b.b), yl(a) ? (ml(a, null), il(a.l).then((function() {
                                Il(a)
                            }))) : Le()
                        })))
                    }, n.Yc = function() {
                        var a = this;
                        return rl(this.l, bl(this).options.authDomain).then((function(b) {
                            if (!a.m) {
                                var t;
                                if (t = yl(a) && b) {
                                    t = yl(a).uid;
                                    var e = b.uid;
                                    t = null != t && "" !== t && null != e && "" !== e && t == e
                                }
                                if (t) return Uh(yl(a), b), yl(a).I();
                                (yl(a) || b) && (ml(a, b), b && (Ch(b), b.ha = a.G), a.b && xc(a.b, a), Il(a))
                            }
                        }))
                    }, n.da = function(a) {
                        return nl(this.l, a)
                    }, n.kc = function() {
                        Il(this), this.da(yl(this))
                    }, n.vc = function() {
                        this.zb()
                    }, n.wc = function() {
                        this.zb()
                    }, n.jc = function(a) {
                        var b = this;
                        return this.i.then((function() {
                            return gl(b, Le(a))
                        }))
                    }, n.yc = function(a) {
                        var b = this;
                        this.addAuthTokenListener((function() {
                            a.next(yl(b))
                        }))
                    }, n.zc = function(a) {
                        var b = this;
                        ! function(a, b) {
                            a.P.push(b), Tl(a, a.i.then((function() {
                                !a.m && Q(a.P, b) && a.X !== a.getUid() && (a.X = a.getUid(), b(wl(a)))
                            })))
                        }(this, (function() {
                            a.next(yl(b))
                        }))
                    }, n.Hc = function(a, b, t) {
                        var e = this;
                        return this.ba && Promise.resolve().then((function() {
                            "function" == typeof a ? a(yl(e)) : "function" == typeof a.next && a.next(yl(e))
                        })), this.ac(a, b, t)
                    }, n.Gc = function(a, b, t) {
                        var e = this;
                        return this.ba && Promise.resolve().then((function() {
                            e.X = e.getUid(), "function" == typeof a ? a(yl(e)) : "function" == typeof a.next && a.next(yl(e))
                        })), this.bc(a, b, t)
                    }, n.mc = function(a) {
                        var b = this;
                        return Tl(this, this.i.then((function() {
                            return yl(b) ? yl(b).I(a).then((function(t) {
                                return {
                                    accessToken: t
                                }
                            })) : null
                        })))
                    }, n.Sc = function(a) {
                        var b = this;
                        return this.i.then((function() {
                            return gl(b, uu(b.a, nu, {
                                token: a
                            }))
                        })).then((function(t) {
                            var e = t.user;
                            return jh(e, "isAnonymous", !1), b.da(e), t
                        }))
                    }, n.Tc = function(a, b) {
                        var t = this;
                        return this.i.then((function() {
                            return gl(t, uu(t.a, iu, {
                                email: a,
                                password: b
                            }))
                        }))
                    }, n.dc = function(a, b) {
                        var t = this;
                        return this.i.then((function() {
                            return gl(t, uu(t.a, Ps, {
                                email: a,
                                password: b
                            }))
                        }))
                    }, n.Za = function(a) {
                        var b = this;
                        return this.i.then((function() {
                            return gl(b, a.ja(b.a))
                        }))
                    }, n.Rc = function(a) {
                        return Zi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.Za(a)
                    }, n.yb = function() {
                        var a = this;
                        return this.i.then((function() {
                            var b = yl(a);
                            if (b && b.isAnonymous) {
                                var t = ir({
                                    providerId: null,
                                    isNewUser: !1
                                });
                                return ir({
                                    user: b,
                                    credential: null,
                                    additionalUserInfo: t,
                                    operationType: "signIn"
                                })
                            }
                            return gl(a, a.a.yb()).then((function(t) {
                                var e = t.user;
                                return jh(e, "isAnonymous", !0), a.da(e), t
                            }))
                        }))
                    }, n.getUid = function() {
                        return yl(this) && yl(this).uid || null
                    }, n.cc = function(a) {
                        this.addAuthTokenListener(a), this.A++, 0 < this.A && yl(this) && Nh(yl(this))
                    }, n.Oc = function(a) {
                        var b = this;
                        Y(this.u, (function(t) {
                            t == a && b.A--
                        })), 0 > this.A && (this.A = 0), 0 == this.A && yl(this) && Sh(yl(this)), this.removeAuthTokenListener(a)
                    }, n.addAuthTokenListener = function(a) {
                        var b = this;
                        this.u.push(a), Tl(this, this.i.then((function() {
                            b.m || Q(b.u, a) && a(wl(b))
                        })))
                    }, n.removeAuthTokenListener = function(a) {
                        et(this.u, (function(b) {
                            return b == a
                        }))
                    }, n.delete = function() {
                        this.m = !0;
                        for (var a = 0; a < this.R.length; a++) this.R[a].cancel("app-deleted");
                        return this.R = [], this.l && (a = this.l).b.removeListener(el("local"), a.a, this.pa), this.b && (Mc(this.b, this), Jc(this.b.b)), Promise.resolve()
                    }, n.gc = function(a) {
                        return Tl(this, function(a, b) {
                            return uu(a, Rs, {
                                identifier: b,
                                continueUri: Mi() ? di() : "http://localhost"
                            }).then((function(t) {
                                return t.signinMethods || []
                            }))
                        }(this.a, a))
                    }, n.Ac = function(a) {
                        return !!Fo(a)
                    }, n.vb = function(a, b) {
                        var t = this;
                        return Tl(this, Le().then((function() {
                            var t = new jr(b);
                            if (!t.c) throw new P("argument-error", Fr + " must be true when sending sign in link to email");
                            return Xr(t)
                        })).then((function(e) {
                            return t.a.vb(a, e)
                        })).then((function() {})))
                    }, n.hd = function(a) {
                        return this.Qa(a).then((function(b) {
                            return b.data.email
                        }))
                    }, n.mb = function(a, b) {
                        return Tl(this, this.a.mb(a, b).then((function() {})))
                    }, n.Qa = function(a) {
                        return Tl(this, this.a.Qa(a).then((function(b) {
                            return new pr(b)
                        })))
                    }, n.ib = function(a) {
                        return Tl(this, this.a.ib(a).then((function() {})))
                    }, n.ub = function(a, b) {
                        var t = this;
                        return Tl(this, Le().then((function() {
                            return void 0 === b || It(b) ? {} : Xr(new jr(b))
                        })).then((function(e) {
                            return t.a.ub(a, e)
                        })).then((function() {})))
                    }, n.Vc = function(a, b) {
                        return Tl(this, eh(this, a, b, q(this.Za, this)))
                    }, n.Uc = function(a, b) {
                        var t = this;
                        return Tl(this, Le().then((function() {
                            var e = b || di(),
                                n = Vo(a, e);
                            if (!(e = Fo(e))) throw new P("argument-error", "Invalid email link!");
                            if (e.tenantId !== t.S()) throw new P("tenant-id-mismatch");
                            return t.Za(n)
                        })))
                    }, El.prototype.render = function() {}, El.prototype.reset = function() {}, El.prototype.getResponse = function() {}, El.prototype.execute = function() {};
                    var kl = null;

                    function Nl(a, b) {
                        return (b = Sl(b)) && a.a[b] || null
                    }

                    function Sl(a) {
                        return (a = void 0 === a ? 1e12 : a) ? a.toString() : null
                    }

                    function _l(a, b) {
                        this.g = !1, this.c = b, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = pe(a);
                        var t = this;
                        this.i = function() {
                            t.execute()
                        }, this.h ? this.execute() : dn(this.f, "click", this.i)
                    }

                    function Ol(a) {
                        if (a.g) throw Error("reCAPTCHA mock was already deleted!")
                    }

                    function Cl() {}

                    function Pl() {}
                    Al.prototype.render = function(a, b) {
                        return this.a[this.b.toString()] = new _l(a, b), this.b++
                    }, Al.prototype.reset = function(a) {
                        var b = Nl(this, a);
                        a = Sl(a), b && a && (b.delete(), delete this.a[a])
                    }, Al.prototype.getResponse = function(a) {
                        return (a = Nl(this, a)) ? a.getResponse() : null
                    }, Al.prototype.execute = function(a) {
                        (a = Nl(this, a)) && a.execute()
                    }, _l.prototype.getResponse = function() {
                        return Ol(this), this.b
                    }, _l.prototype.execute = function() {
                        Ol(this);
                        var a = this;
                        this.a || (this.a = setTimeout((function() {
                            a.b = function() {
                                for (var a = 50, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
                                return b.join("")
                            }();
                            var b = a.c.callback,
                                t = a.c["expired-callback"];
                            if (b) try {
                                b(a.b)
                            } catch (t) {}
                            a.a = setTimeout((function() {
                                if (a.a = null, a.b = null, t) try {
                                    t()
                                } catch (t) {}
                                a.h && a.execute()
                            }), 6e4)
                        }), 500))
                    }, _l.prototype.delete = function() {
                        Ol(this), this.g = !0, clearTimeout(this.a), this.a = null, gn(this.f, "click", this.i)
                    }, er(Cl, "FACTOR_ID", "phone"), Pl.prototype.g = function() {
                        return kl || (kl = new Al), Le(kl)
                    }, Pl.prototype.c = function() {};
                    var Rl = null;

                    function Dl() {
                        this.b = f.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                    }
                    var Ll = new Nt(Ot, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                        xl = new Bi(3e4, 6e4);
                    Dl.prototype.g = function(a) {
                        var b = this;
                        return new Se((function(t, e) {
                            var n = setTimeout((function() {
                                e(new P("network-request-failed"))
                            }), xl.get());
                            !f.grecaptcha || a !== b.f && !b.b ? (f[b.a] = function() {
                                if (f.grecaptcha) {
                                    b.f = a;
                                    var g = f.grecaptcha.render;
                                    f.grecaptcha.render = function(t, e) {
                                        return t = g(t, e), b.b++, t
                                    }, clearTimeout(n), t(f.grecaptcha)
                                } else clearTimeout(n), e(new P("internal-error"));
                                delete f[b.a]
                            }, Le(Ja(Dt(Ll, {
                                onload: b.a,
                                hl: a || ""
                            }))).s((function() {
                                clearTimeout(n), e(new P("internal-error", "Unable to load external reCAPTCHA dependencies!"))
                            }))) : (clearTimeout(n), t(f.grecaptcha))
                        }))
                    }, Dl.prototype.c = function() {
                        this.b--
                    };
                    var Ml = null;

                    function jl(a, b, t, e, n, r, g) {
                        if (er(this, "type", "recaptcha"), this.c = this.f = null, this.A = !1, this.m = b, this.g = null, g ? (Rl || (Rl = new Pl), g = Rl) : (Ml || (Ml = new Dl), g = Ml), this.v = g, this.a = t || {
                                theme: "light",
                                type: "image"
                            }, this.h = [], this.a[Fl]) throw new P("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                        if (this.i = "invisible" === this.a[Kl], !f.document) throw new P("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                        if (!pe(b) || !this.i && pe(b).hasChildNodes()) throw new P("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                        this.o = new es(a, r || null, n || null), this.u = e || function() {
                            return null
                        };
                        var o = this;
                        this.l = [];
                        var c = this.a[Ul];
                        this.a[Ul] = function(t) {
                            if (ql(o, t), "function" == typeof c) c(t);
                            else if ("string" == typeof c) {
                                var e = Di(c, f);
                                "function" == typeof e && e(t)
                            }
                        };
                        var p = this.a[Vl];
                        this.a[Vl] = function() {
                            if (ql(o, null), "function" == typeof p) p();
                            else if ("string" == typeof p) {
                                var t = Di(p, f);
                                "function" == typeof t && t()
                            }
                        }
                    }
                    var Ul = "callback",
                        Vl = "expired-callback",
                        Fl = "sitekey",
                        Kl = "size";

                    function ql(a, b) {
                        for (var t = 0; t < a.l.length; t++) try {
                            a.l[t](b)
                        } catch (t) {}
                    }

                    function Hl(a, b) {
                        return a.h.push(b), b.na((function() {
                            tt(a.h, b)
                        })), b
                    }

                    function Gl(a) {
                        if (a.A) throw new P("internal-error", "RecaptchaVerifier instance has been destroyed.")
                    }

                    function Bl(a, b, t) {
                        var n = !1;
                        try {
                            this.b = t || e.a.app()
                        } catch (t) {
                            throw new P("argument-error", "No firebase.app.App instance is currently initialized.")
                        }
                        if (!this.b.options || !this.b.options.apiKey) throw new P("invalid-api-key");
                        t = this.b.options.apiKey;
                        var r = this,
                            o = null;
                        try {
                            o = this.b.auth().Ga()
                        } catch (t) {}
                        try {
                            n = this.b.auth().settings.appVerificationDisabledForTesting
                        } catch (t) {}
                        o = e.a.SDK_VERSION ? Pi(e.a.SDK_VERSION, o) : null, jl.call(this, t, a, b, (function() {
                            try {
                                var g = r.b.auth().ka()
                            } catch (t) {
                                g = null
                            }
                            return g
                        }), o, j(D), n)
                    }

                    function Wl(a, b, t, e) {
                        t: {
                            t = Array.prototype.slice.call(t);
                            for (var n = 0, r = !1, g = 0; g < b.length; g++)
                                if (b[g].optional) r = !0;
                                else {
                                    if (r) throw new P("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                    n++
                                }
                            if (r = b.length, t.length < n || r < t.length) e = "Expected " + (n == r ? 1 == n ? "1 argument" : n + " arguments" : n + "-" + r + " arguments") + " but got " + t.length + ".";
                            else {
                                for (n = 0; n < t.length; n++)
                                    if (r = b[n].optional && void 0 === t[n], !b[n].K(t[n]) && !r) {
                                        if (b = b[n], 0 > n || n >= Xl.length) throw new P("internal-error", "Argument validator received an unsupported number of arguments.");
                                        t = Xl[n], e = (e ? "" : t + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.J + ".";
                                        break t
                                    }
                                e = null
                            }
                        }
                        if (e) throw new P("argument-error", a + " failed: " + e)
                    }(n = jl.prototype).Ia = function() {
                        var a = this;
                        return this.f ? this.f : this.f = Hl(this, Le().then((function() {
                            if (Mi() && !Ai()) return Ii();
                            throw new P("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                        })).then((function() {
                            return a.v.g(a.u())
                        })).then((function(b) {
                            return a.g = b, uu(a.o, Bs, {})
                        })).then((function(b) {
                            a.a[Fl] = b.recaptchaSiteKey
                        })).s((function(b) {
                            throw a.f = null, b
                        })))
                    }, n.render = function() {
                        Gl(this);
                        var a = this;
                        return Hl(this, this.Ia().then((function() {
                            if (null === a.c) {
                                var b = a.m;
                                if (!a.i) {
                                    var t = pe(b);
                                    b = function(a, b, t) {
                                        var e = arguments,
                                            n = document,
                                            r = String(e[0]),
                                            g = e[1];
                                        if (!fe && g && (g.name || g.type)) {
                                            if (r = ["<", r], g.name && r.push(' name="', zt(g.name), '"'), g.type) {
                                                r.push(' type="', zt(g.type), '"');
                                                var o = {};
                                                At(o, g), delete o.type, g = o
                                            }
                                            r.push(">"), r = r.join("")
                                        }
                                        return r = ye(n, r), g && ("string" == typeof g ? r.className = g : Array.isArray(g) ? r.className = g.join(" ") : de(r, g)), 2 < e.length && be(n, r, e), r
                                    }("DIV"), t.appendChild(b)
                                }
                                a.c = a.g.render(b, a.a)
                            }
                            return a.c
                        })))
                    }, n.verify = function() {
                        Gl(this);
                        var a = this;
                        return Hl(this, this.render().then((function(b) {
                            return new Se((function(t) {
                                var e = a.g.getResponse(b);
                                if (e) t(e);
                                else {
                                    var n = function(e) {
                                        e && (function(a, b) {
                                            et(a.l, (function(t) {
                                                return t == b
                                            }))
                                        }(a, n), t(e))
                                    };
                                    a.l.push(n), a.i && a.g.execute(a.c)
                                }
                            }))
                        })))
                    }, n.reset = function() {
                        Gl(this), null !== this.c && this.g.reset(this.c)
                    }, n.clear = function() {
                        Gl(this), this.A = !0, this.v.c();
                        for (var a = 0; a < this.h.length; a++) this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
                        if (!this.i) {
                            a = pe(this.m);
                            for (var b; b = a.firstChild;) a.removeChild(b)
                        }
                    }, C(Bl, jl);
                    var Xl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                    function Jl(a, b) {
                        return {
                            name: a || "",
                            J: "a valid string",
                            optional: !!b,
                            K: function(t) {
                                return "string" == typeof t
                            }
                        }
                    }

                    function Yl(a, b) {
                        return {
                            name: a || "",
                            J: "a boolean",
                            optional: !!b,
                            K: function(t) {
                                return "boolean" == typeof t
                            }
                        }
                    }

                    function zl(a, b) {
                        return {
                            name: a || "",
                            J: "a valid object",
                            optional: !!b,
                            K: T
                        }
                    }

                    function $l(a, b) {
                        return {
                            name: a || "",
                            J: "a function",
                            optional: !!b,
                            K: function(t) {
                                return "function" == typeof t
                            }
                        }
                    }

                    function Zl(a, b) {
                        return {
                            name: a || "",
                            J: "null",
                            optional: !!b,
                            K: function(t) {
                                return null === t
                            }
                        }
                    }

                    function Ql(a) {
                        return {
                            name: a ? a + "Credential" : "credential",
                            J: a ? "a valid " + a + " credential" : "a valid credential",
                            optional: !1,
                            K: function(b) {
                                if (!b) return !1;
                                var t = !a || b.providerId === a;
                                return !(!b.ja || !t)
                            }
                        }
                    }

                    function tf(a, b) {
                        return T(a) && "string" == typeof a.type && a.type === b && "function" == typeof a.Ha
                    }

                    function ef(a) {
                        return T(a) && "string" == typeof a.uid
                    }

                    function nf(a, b, t, e) {
                        return {
                            name: t || "",
                            J: a.J + " or " + b.J,
                            optional: !!e,
                            K: function(t) {
                                return a.K(t) || b.K(t)
                            }
                        }
                    }

                    function rf(a, b) {
                        for (var t in b) {
                            var e = b[t].name;
                            a[e] = sf(e, a[t], b[t].j)
                        }
                    }

                    function of (a, b) {
                        for (var t in b) {
                            var e = b[t].name;
                            e !== t && Object.defineProperty(a, e, {
                                get: _((function(t) {
                                    return this[t]
                                }), t),
                                set: _((function(t, e, g, n) {
                                    Wl(t, [g], [n], !0), this[e] = n
                                }), e, t, b[t].jb),
                                enumerable: !0
                            })
                        }
                    }

                    function af(a, b, t, e) {
                        a[b] = sf(b, t, e)
                    }

                    function sf(a, b, t) {
                        function e() {
                            var g = Array.prototype.slice.call(arguments);
                            return Wl(r, t, g), b.apply(this, g)
                        }
                        if (!t) return b;
                        var n, r = function(a) {
                            return (a = a.split("."))[a.length - 1]
                        }(a);
                        for (n in b) e[n] = b[n];
                        for (n in b.prototype) e.prototype[n] = b.prototype[n];
                        return e
                    }
                    rf(sl.prototype, {
                            ib: {
                                name: "applyActionCode",
                                j: [Jl("code")]
                            },
                            Qa: {
                                name: "checkActionCode",
                                j: [Jl("code")]
                            },
                            mb: {
                                name: "confirmPasswordReset",
                                j: [Jl("code"), Jl("newPassword")]
                            },
                            dc: {
                                name: "createUserWithEmailAndPassword",
                                j: [Jl("email"), Jl("password")]
                            },
                            gc: {
                                name: "fetchSignInMethodsForEmail",
                                j: [Jl("email")]
                            },
                            qa: {
                                name: "getRedirectResult",
                                j: []
                            },
                            Ac: {
                                name: "isSignInWithEmailLink",
                                j: [Jl("emailLink")]
                            },
                            Gc: {
                                name: "onAuthStateChanged",
                                j: [nf(zl(), $l(), "nextOrObserver"), $l("opt_error", !0), $l("opt_completed", !0)]
                            },
                            Hc: {
                                name: "onIdTokenChanged",
                                j: [nf(zl(), $l(), "nextOrObserver"), $l("opt_error", !0), $l("opt_completed", !0)]
                            },
                            ub: {
                                name: "sendPasswordResetEmail",
                                j: [Jl("email"), nf(zl("opt_actionCodeSettings", !0), Zl(null, !0), "opt_actionCodeSettings", !0)]
                            },
                            vb: {
                                name: "sendSignInLinkToEmail",
                                j: [Jl("email"), zl("actionCodeSettings")]
                            },
                            wb: {
                                name: "setPersistence",
                                j: [Jl("persistence")]
                            },
                            Rc: {
                                name: "signInAndRetrieveDataWithCredential",
                                j: [Ql()]
                            },
                            yb: {
                                name: "signInAnonymously",
                                j: []
                            },
                            Za: {
                                name: "signInWithCredential",
                                j: [Ql()]
                            },
                            Sc: {
                                name: "signInWithCustomToken",
                                j: [Jl("token")]
                            },
                            Tc: {
                                name: "signInWithEmailAndPassword",
                                j: [Jl("email"), Jl("password")]
                            },
                            Uc: {
                                name: "signInWithEmailLink",
                                j: [Jl("email"), Jl("emailLink", !0)]
                            },
                            Vc: {
                                name: "signInWithPhoneNumber",
                                j: [Jl("phoneNumber"), {
                                    name: "applicationVerifier",
                                    J: "an implementation of firebase.auth.ApplicationVerifier",
                                    optional: !1,
                                    K: function(a) {
                                        return !(!a || "string" != typeof a.type || "function" != typeof a.verify)
                                    }
                                }]
                            },
                            Wc: {
                                name: "signInWithPopup",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Xc: {
                                name: "signInWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            cd: {
                                name: "updateCurrentUser",
                                j: [nf({
                                    name: "user",
                                    J: "an instance of Firebase User",
                                    optional: !1,
                                    K: function(b) {
                                        return !!(b && b instanceof wh)
                                    }
                                }, Zl(), "user")]
                            },
                            zb: {
                                name: "signOut",
                                j: []
                            },
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            },
                            ed: {
                                name: "useDeviceLanguage",
                                j: []
                            },
                            fd: {
                                name: "useEmulator",
                                j: [Jl("url")]
                            },
                            hd: {
                                name: "verifyPasswordResetCode",
                                j: [Jl("code")]
                            }
                        }), of (sl.prototype, {
                            lc: {
                                name: "languageCode",
                                jb: nf(Jl(), Zl(), "languageCode")
                            },
                            ti: {
                                name: "tenantId",
                                jb: nf(Jl(), Zl(), "tenantId")
                            }
                        }), sl.Persistence = ic, sl.Persistence.LOCAL = "local", sl.Persistence.SESSION = "session", sl.Persistence.NONE = "none", rf(wh.prototype, {
                            delete: {
                                name: "delete",
                                j: []
                            },
                            nc: {
                                name: "getIdTokenResult",
                                j: [Yl("opt_forceRefresh", !0)]
                            },
                            I: {
                                name: "getIdToken",
                                j: [Yl("opt_forceRefresh", !0)]
                            },
                            Bc: {
                                name: "linkAndRetrieveDataWithCredential",
                                j: [Ql()]
                            },
                            pb: {
                                name: "linkWithCredential",
                                j: [Ql()]
                            },
                            Cc: {
                                name: "linkWithPhoneNumber",
                                j: [Jl("phoneNumber"), {
                                    name: "applicationVerifier",
                                    J: "an implementation of firebase.auth.ApplicationVerifier",
                                    optional: !1,
                                    K: function(a) {
                                        return !(!a || "string" != typeof a.type || "function" != typeof a.verify)
                                    }
                                }]
                            },
                            Dc: {
                                name: "linkWithPopup",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Ec: {
                                name: "linkWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Kc: {
                                name: "reauthenticateAndRetrieveDataWithCredential",
                                j: [Ql()]
                            },
                            sb: {
                                name: "reauthenticateWithCredential",
                                j: [Ql()]
                            },
                            Lc: {
                                name: "reauthenticateWithPhoneNumber",
                                j: [Jl("phoneNumber"), {
                                    name: "applicationVerifier",
                                    J: "an implementation of firebase.auth.ApplicationVerifier",
                                    optional: !1,
                                    K: function(a) {
                                        return !(!a || "string" != typeof a.type || "function" != typeof a.verify)
                                    }
                                }]
                            },
                            Mc: {
                                name: "reauthenticateWithPopup",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            Nc: {
                                name: "reauthenticateWithRedirect",
                                j: [{
                                    name: "authProvider",
                                    J: "a valid Auth provider",
                                    optional: !1,
                                    K: function(a) {
                                        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                                    }
                                }]
                            },
                            reload: {
                                name: "reload",
                                j: []
                            },
                            tb: {
                                name: "sendEmailVerification",
                                j: [nf(zl("opt_actionCodeSettings", !0), Zl(null, !0), "opt_actionCodeSettings", !0)]
                            },
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            },
                            bd: {
                                name: "unlink",
                                j: [Jl("provider")]
                            },
                            Ab: {
                                name: "updateEmail",
                                j: [Jl("email")]
                            },
                            Bb: {
                                name: "updatePassword",
                                j: [Jl("password")]
                            },
                            dd: {
                                name: "updatePhoneNumber",
                                j: [Ql("phone")]
                            },
                            Cb: {
                                name: "updateProfile",
                                j: [zl("profile")]
                            },
                            Db: {
                                name: "verifyBeforeUpdateEmail",
                                j: [Jl("email"), nf(zl("opt_actionCodeSettings", !0), Zl(null, !0), "opt_actionCodeSettings", !0)]
                            }
                        }), rf(Al.prototype, {
                            execute: {
                                name: "execute"
                            },
                            render: {
                                name: "render"
                            },
                            reset: {
                                name: "reset"
                            },
                            getResponse: {
                                name: "getResponse"
                            }
                        }), rf(El.prototype, {
                            execute: {
                                name: "execute"
                            },
                            render: {
                                name: "render"
                            },
                            reset: {
                                name: "reset"
                            },
                            getResponse: {
                                name: "getResponse"
                            }
                        }), rf(Se.prototype, {
                            na: {
                                name: "finally"
                            },
                            s: {
                                name: "catch"
                            },
                            then: {
                                name: "then"
                            }
                        }), of (Zc.prototype, {
                            appVerificationDisabled: {
                                name: "appVerificationDisabledForTesting",
                                jb: Yl("appVerificationDisabledForTesting")
                            }
                        }), rf(Qc.prototype, {
                            confirm: {
                                name: "confirm",
                                j: [Jl("verificationCode")]
                            }
                        }), af(go, "fromJSON", (function(a) {
                            a = "string" == typeof a ? JSON.parse(a) : a;
                            for (var b, t = [Ao, jo, qo, Io], e = 0; e < t.length; e++)
                                if (b = t[e](a)) return b;
                            return null
                        }), [nf(Jl(), zl(), "json")]), af(Uo, "credential", (function(a, b) {
                            return new Mo(a, b)
                        }), [Jl("email"), Jl("password")]), rf(Mo.prototype, {
                            w: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(_o.prototype, {
                            Ca: {
                                name: "addScope",
                                j: [Jl("scope")]
                            },
                            Ka: {
                                name: "setCustomParameters",
                                j: [zl("customOAuthParameters")]
                            }
                        }), af(_o, "credential", Oo, [nf(Jl(), zl(), "token")]), af(Uo, "credentialWithLink", Vo, [Jl("email"), Jl("emailLink")]), rf(Co.prototype, {
                            Ca: {
                                name: "addScope",
                                j: [Jl("scope")]
                            },
                            Ka: {
                                name: "setCustomParameters",
                                j: [zl("customOAuthParameters")]
                            }
                        }), af(Co, "credential", Po, [nf(Jl(), zl(), "token")]), rf(Ro.prototype, {
                            Ca: {
                                name: "addScope",
                                j: [Jl("scope")]
                            },
                            Ka: {
                                name: "setCustomParameters",
                                j: [zl("customOAuthParameters")]
                            }
                        }), af(Ro, "credential", Do, [nf(Jl(), nf(zl(), Zl()), "idToken"), nf(Jl(), Zl(), "accessToken", !0)]), rf(Lo.prototype, {
                            Ka: {
                                name: "setCustomParameters",
                                j: [zl("customOAuthParameters")]
                            }
                        }), af(Lo, "credential", xo, [nf(Jl(), zl(), "token"), Jl("secret", !0)]), rf(So.prototype, {
                            Ca: {
                                name: "addScope",
                                j: [Jl("scope")]
                            },
                            credential: {
                                name: "credential",
                                j: [nf(Jl(), nf(zl(), Zl()), "optionsOrIdToken"), nf(Jl(), Zl(), "accessToken", !0)]
                            },
                            Ka: {
                                name: "setCustomParameters",
                                j: [zl("customOAuthParameters")]
                            }
                        }), rf(To.prototype, {
                            w: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(yo.prototype, {
                            w: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), af(Go, "credential", Bo, [Jl("verificationId"), Jl("verificationCode")]), rf(Go.prototype, {
                            eb: {
                                name: "verifyPhoneNumber",
                                j: [nf(Jl(), {
                                    name: "phoneInfoOptions",
                                    J: "valid phone info options",
                                    optional: !1,
                                    K: function(t) {
                                        return !!t && (t.session && t.phoneNumber ? tf(t.session, vo) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? tf(t.session, mo) && ef(t.multiFactorHint) : t.session && t.multiFactorUid ? tf(t.session, mo) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber)
                                    }
                                }, "phoneInfoOptions"), {
                                    name: "applicationVerifier",
                                    J: "an implementation of firebase.auth.ApplicationVerifier",
                                    optional: !1,
                                    K: function(a) {
                                        return !(!a || "string" != typeof a.type || "function" != typeof a.verify)
                                    }
                                }]
                            }
                        }), rf(Ko.prototype, {
                            w: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(P.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(Qo.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(th.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(oh.prototype, {
                            toJSON: {
                                name: "toJSON",
                                j: [Jl(null, !0)]
                            }
                        }), rf(ih.prototype, {
                            Qc: {
                                name: "resolveSignIn",
                                j: [{
                                    name: "multiFactorAssertion",
                                    J: "a valid multiFactorAssertion",
                                    optional: !1,
                                    K: function(a) {
                                        return !!a && !!a.rb
                                    }
                                }]
                            }
                        }), rf(lh.prototype, {
                            Qb: {
                                name: "getSession",
                                j: []
                            },
                            ec: {
                                name: "enroll",
                                j: [{
                                    name: "multiFactorAssertion",
                                    J: "a valid multiFactorAssertion",
                                    optional: !1,
                                    K: function(a) {
                                        return !!a && !!a.rb
                                    }
                                }, Jl("displayName", !0)]
                            },
                            ad: {
                                name: "unenroll",
                                j: [nf({
                                    name: "multiFactorInfo",
                                    J: "a valid multiFactorInfo",
                                    optional: !1,
                                    K: ef
                                }, Jl(), "multiFactorInfoIdentifier")]
                            }
                        }), rf(Bl.prototype, {
                            clear: {
                                name: "clear",
                                j: []
                            },
                            render: {
                                name: "render",
                                j: []
                            },
                            verify: {
                                name: "verify",
                                j: []
                            }
                        }), af(_r, "parseLink", Mr, [Jl("link")]), af(Cl, "assertion", (function(a) {
                            return new ch(a)
                        }), [Ql("phone")]),
                        function() {
                            if (void 0 === e.a || !e.a.INTERNAL || !e.a.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                            var a = {
                                ActionCodeInfo: {
                                    Operation: {
                                        EMAIL_SIGNIN: vr,
                                        PASSWORD_RESET: "PASSWORD_RESET",
                                        RECOVER_EMAIL: "RECOVER_EMAIL",
                                        REVERT_SECOND_FACTOR_ADDITION: dr,
                                        VERIFY_AND_CHANGE_EMAIL: mr,
                                        VERIFY_EMAIL: "VERIFY_EMAIL"
                                    }
                                },
                                Auth: sl,
                                AuthCredential: go,
                                Error: P
                            };
                            af(a, "EmailAuthProvider", Uo, []), af(a, "FacebookAuthProvider", _o, []), af(a, "GithubAuthProvider", Co, []), af(a, "GoogleAuthProvider", Ro, []), af(a, "TwitterAuthProvider", Lo, []), af(a, "OAuthProvider", So, [Jl("providerId")]), af(a, "SAMLAuthProvider", No, [Jl("providerId")]), af(a, "PhoneAuthProvider", Go, [{
                                name: "auth",
                                J: "an instance of Firebase Auth",
                                optional: !0,
                                K: function(a) {
                                    return !!(a && a instanceof sl)
                                }
                            }]), af(a, "RecaptchaVerifier", Bl, [nf(Jl(), {
                                name: "",
                                J: "an HTML element",
                                optional: !1,
                                K: function(a) {
                                    return !!(a && a instanceof Element)
                                }
                            }, "recaptchaContainer"), zl("recaptchaParameters", !0), {
                                name: "app",
                                J: "an instance of Firebase App",
                                optional: !0,
                                K: function(a) {
                                    return !!(a && a instanceof e.a.app.App)
                                }
                            }]), af(a, "ActionCodeURL", _r, []), af(a, "PhoneMultiFactorGenerator", Cl, []), e.a.INTERNAL.registerComponent({
                                name: "auth",
                                instanceFactory: function(b) {
                                    return new sl(b = b.getProvider("app").getImmediate())
                                },
                                multipleInstances: !1,
                                serviceProps: a,
                                instantiationMode: "LAZY",
                                type: "PUBLIC"
                            }), e.a.INTERNAL.registerComponent({
                                name: "auth-internal",
                                instanceFactory: function(b) {
                                    return {
                                        getUid: q((b = b.getProvider("auth").getImmediate()).getUid, b),
                                        getToken: q(b.mc, b),
                                        addAuthTokenListener: q(b.cc, b),
                                        removeAuthTokenListener: q(b.Oc, b)
                                    }
                                },
                                multipleInstances: !1,
                                instantiationMode: "LAZY",
                                type: "PRIVATE"
                            }), e.a.registerVersion("@firebase/auth", "0.15.1"), e.a.INTERNAL.extendNamespace({
                                User: wh
                            })
                        }()
                }).apply(void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }).call(this, n(64))
        }
    }
]);