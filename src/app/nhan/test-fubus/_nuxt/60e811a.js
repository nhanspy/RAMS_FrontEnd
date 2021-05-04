(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        121: function(t, e, n) {
            var content = n(309);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("62dedad6", content, !0, {
                sourceMap: !1
            })
        },
        182: function(t, e, n) {
            "use strict";
            n(13), n(65), n(17), n(57), n(71), n(38), n(48), n(49), n(12), n(41), n(43);
            var r = n(16);

            function o(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    h = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        h = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (h) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                h = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                f = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    h(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            f.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        195: function(t, e, n) {
            "use strict";
            e.a = {}
        },
        197: function(t, e, n) {
            n(58);
            var r = n(467);

            function o() {
                return (o = r(regeneratorRuntime.mark((function t() {
                    var e, r, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(!1 in navigator)) {
                                    t.next = 2;
                                    break
                                }
                                throw new Error("serviceWorker is not supported in current browser!");
                            case 2:
                                return t.next = 4, Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1)]).then(n.bind(null, 567));
                            case 4:
                                return e = t.sent, r = e.Workbox, o = new r("/sw.js", {
                                    scope: "/"
                                }), t.next = 9, o.register();
                            case 9:
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            window.$workbox = function() {
                return o.apply(this, arguments)
            }().catch((function(t) {}))
        },
        254: function(t) {
            t.exports = JSON.parse('{"title":"FUTA Bus Lines","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"FUTA Bus Lines"},{"hid":"author","name":"author","content":"anhdungsgu"},{"hid":"description","name":"description","content":"PT.WebsiteNuxtJS"},{"hid":"theme-color","name":"theme-color","content":"#ef5222"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"FUTA Bus Lines"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"FUTA Bus Lines"},{"hid":"og:description","name":"og:description","property":"og:description","content":"PT.WebsiteNuxtJS"}],"link":[{"rel":"shortcut icon","href":"/favicon.ico"}],"htmlAttrs":{"lang":"en"}}')
        },
        255: function(t, e, n) {
            n(13), n(65), n(17), n(57), n(71), n(48), n(49), n(12), n(55);
            var r = n(468);

            function o(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    h = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        h = !0, o = t
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (h) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function l(t, e, n) {
                return t.find((function(t) {
                    return n ? t[e] === n : t[e]
                }))
            }
            n(38), t.exports = function(t, e) {
                if ("function" != typeof t)
                    for (var n in e) {
                        var c = e[n];
                        if (Array.isArray(c)) {
                            t[n] = t[n] || [];
                            var h, f = o(c);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var d = h.value;
                                    d.hid && l(t[n], "hid", d.hid) || d.name && l(t[n], "name", d.name) || t[n].push(d)
                                }
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                        } else if ("object" === r(c))
                            for (var m in t[n] = t[n] || {}, c) t[n][m] = c[m];
                        else void 0 === t[n] && (t[n] = c)
                    } else console.warn("Cannot merge meta. Avoid using head as a function!")
            }
        },
        256: function(t, e, n) {
            "use strict";
            n(12), n(58);
            var r = n(21),
                o = n(16),
                c = n(8),
                l = window.__NUXT__;

            function h() {
                if (!this._hydrated) return this.$fetch()
            }

            function f() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function d() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = d.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", h))
                }
            }
        },
        274: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(65), n(17), n(71), n(48), n(49), n(57);
                    var e = n(59),
                        r = (n(58), n(283), n(21)),
                        o = (n(41), n(43), n(13), n(12), n(18), n(38), n(220), n(287), n(295), n(297), n(16)),
                        c = n(247),
                        l = n(195),
                        h = n(8),
                        f = n(61),
                        d = n(256),
                        m = n(182);

                    function v(t, e) {
                        var n;
                        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                            if (Array.isArray(t) || (n = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return y(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = t[Symbol.iterator]()
                            },
                            n: function() {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function(t) {
                                l = !0, o = t
                            },
                            f: function() {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (l) throw o
                                }
                            }
                        }
                    }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(d.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var x, _, w = [],
                        j = window.__NUXT__ || {};
                    Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var k = o.default.config.errorHandler || console.error;

                    function O(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(h.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function(i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) f(i);
                        return l
                    }

                    function C(t, e, n) {
                        return $.apply(this, arguments)
                    }

                    function $() {
                        return ($ = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, f, d = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(h.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(h.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return d._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: f
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function S(t, e) {
                        return j.serverRendered && e && Object(h.b)(t, e), t._Ctor = t, t
                    }

                    function A(t) {
                        var path = Object(h.f)(t.options.base, t.options.mode);
                        return Object(h.d)(t.match(path), function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var l;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return l = S(Object(h.s)(e), j.data ? j.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function T(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(h.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(h.o)(o, e)
                    }

                    function P(t, e, n) {
                        return E.apply(this, arguments)
                    }

                    function E() {
                        return (E = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, l, d, m, y, _, j, k, C, $, S, A, P, E, R, N = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (w = [], !0) : (c = [], w = Object(h.g)(n, c).map((function(t, i) {
                                            return Object(h.c)(n.matched[c[i]].path)(n.params)
                                        }))), l = !1, d = function(path) {
                                            n.path === path.path && N.$loading.finish && N.$loading.finish(), n.path !== path.path && N.$loading.pause && N.$loading.pause(), l || (l = !0, o(path))
                                        }, t.next = 8, Object(h.t)(x, {
                                            route: e,
                                            from: n,
                                            next: d.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(h.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, T.call(this, y, x.context);
                                    case 15:
                                        if (!l) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return _ = (f.a.options || f.a).layout, t.next = 20, this.loadLayout("function" == typeof _ ? _.call(f.a, x.context) : _);
                                    case 20:
                                        return j = t.sent, t.next = 23, T.call(this, y, x.context, j);
                                    case 23:
                                        if (!l) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return y.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(O(y, e, n)), t.prev = 29, t.next = 32, T.call(this, y, x.context);
                                    case 32:
                                        if (!l) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(k = y[0].options.layout) && (k = k(x.context)), t.next = 40, this.loadLayout(k);
                                    case 40:
                                        return k = t.sent, t.next = 43, T.call(this, y, x.context, k);
                                    case 43:
                                        if (!l) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        C = !0, t.prev = 48, $ = v(y), t.prev = 50, $.s();
                                    case 52:
                                        if ((S = $.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(A = S.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, A.options.validate(x.context);
                                    case 58:
                                        if (C = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), $.e(t.t0);
                                    case 68:
                                        return t.prev = 68, $.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if (C) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(y.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, l, f, d, v, y, _, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(h.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== w[i], N._routeChanged && o ? r._dataRefresh = !0 : N._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : N._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                    return N._diffQuery[t]
                                                                })) : "function" == typeof l && (P || (P = Object(h.h)(e)), r._dataRefresh = l.apply(P[i], [e.query, n.query]))), N._hadError || !N._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return f = [], d = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = d && v ? 30 : 45, d && ((_ = Object(h.q)(r.options.asyncData, x.context)).then((function(t) {
                                                                Object(h.b)(r, t), N.$loading.increase && N.$loading.increase(y)
                                                            })), f.push(_)), N.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                N.$loading.increase && N.$loading.increase(y)
                                                            })), f.push(p)), t.abrupt("return", Promise.all(f));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (E = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, E));
                                    case 90:
                                        return w = [], Object(h.k)(E), "function" == typeof(R = (f.a.options || f.a).layout) && (R = R(x.context)), t.next = 96, this.loadLayout(R);
                                    case 96:
                                        this.error(E), this.$nuxt.$emit("routeChanged", e, n, E), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        })))).apply(this, arguments)
                    }

                    function R(t, n) {
                        Object(h.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function N(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                    }

                    function L(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function U(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(h.h)(t),
                                c = Object(h.g)(t);
                            o.default.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                })), L(n)
                            }))
                        }
                    }

                    function I(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), _.afterEach((function(e, n) {
                            o.default.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function D() {
                        return (D = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, l, f;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return x = e.app, _ = e.router, e.store, n = new o.default(x), r = j.layout || "default", t.next = 7, n.loadLayout(r);
                                    case 7:
                                        return n.setLayout(r), c = function() {
                                            n.$mount("#__nuxt"), _.afterEach(R), _.afterEach(N.bind(n)), _.afterEach(U.bind(n)), o.default.nextTick((function() {
                                                I(n)
                                            }))
                                        }, t.next = 11, Promise.all(A(_));
                                    case 11:
                                        if (l = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(O(l, _.currentRoute)), w = _.currentRoute.matched.map((function(t) {
                                                return Object(h.c)(t.path)(_.currentRoute.params)
                                            }))), n.$loading = {}, j.error && n.error(j.error), _.beforeEach(C.bind(n)), _.beforeEach(P.bind(n)), !j.serverRendered || !Object(h.n)(j.routePath, n.context.route.path)) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return", c());
                                    case 20:
                                        return f = function() {
                                            R(_.currentRoute, _.currentRoute), N.call(n, _.currentRoute), L(n), c()
                                        }, t.next = 23, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 23:
                                        P.call(n, _.currentRoute, _.currentRoute, (function(path) {
                                            if (path) {
                                                var t = _.afterEach((function(e, n) {
                                                    t(), f()
                                                }));
                                                _.push(path, void 0, (function(t) {
                                                    t && k(t)
                                                }))
                                            } else f()
                                        }));
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(f.b)(null, j.config).then((function(t) {
                        return D.apply(this, arguments)
                    })).catch(k)
                }.call(this, n(64))
        },
        308: function(t, e, n) {
            "use strict";
            var r = n(121);
            n.n(r).a
        },
        309: function(t, e, n) {
            (e = n(14)(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = e
        },
        61: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return je
            })), n.d(e, "a", (function() {
                return nt.a
            }));
            n(20), n(17), n(13), n(18), n(12), n(58);
            var r = n(21),
                o = n(0),
                c = (n(38), n(16)),
                l = n(3),
                h = n(248),
                f = n(196),
                d = n.n(f),
                m = n(92),
                v = n.n(m),
                y = n(108),
                x = n(8);
            "scrollRestoration" in window.history && (Object(x.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(x.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(x.u)("manual")
            })));
            var _ = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(22)]).then(n.bind(null, 890)))
                },
                w = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(24)]).then(n.bind(null, 892)))
                },
                j = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(25)]).then(n.bind(null, 880)))
                },
                k = function() {
                    return Object(x.m)(n.e(26).then(n.bind(null, 893)))
                },
                O = function() {
                    return Object(x.m)(n.e(27).then(n.bind(null, 889)))
                },
                C = function() {
                    return Object(x.m)(n.e(28).then(n.bind(null, 894)))
                },
                $ = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(29)]).then(n.bind(null, 882)))
                },
                S = function() {
                    return Object(x.m)(n.e(30).then(n.bind(null, 895)))
                },
                A = function() {
                    return Object(x.m)(n.e(31).then(n.bind(null, 896)))
                },
                T = function() {
                    return Object(x.m)(n.e(32).then(n.bind(null, 897)))
                },
                P = function() {
                    return Object(x.m)(n.e(33).then(n.bind(null, 898)))
                },
                E = function() {
                    return Object(x.m)(n.e(34).then(n.bind(null, 899)))
                },
                R = function() {
                    return Object(x.m)(n.e(35).then(n.bind(null, 900)))
                },
                N = function() {
                    return Object(x.m)(n.e(37).then(n.bind(null, 901)))
                },
                L = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(38)]).then(n.bind(null, 883)))
                },
                U = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(39)]).then(n.bind(null, 886)))
                },
                I = function() {
                    return Object(x.m)(n.e(40).then(n.bind(null, 885)))
                },
                D = function() {
                    return Object(x.m)(n.e(41).then(n.bind(null, 902)))
                },
                M = function() {
                    return Object(x.m)(n.e(42).then(n.bind(null, 903)))
                },
                V = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(43)]).then(n.bind(null, 884)))
                },
                z = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(44)]).then(n.bind(null, 887)))
                },
                F = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(45)]).then(n.bind(null, 904)))
                },
                B = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(46)]).then(n.bind(null, 905)))
                },
                H = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(47)]).then(n.bind(null, 906)))
                },
                K = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(48)]).then(n.bind(null, 907)))
                },
                J = function() {
                    return Object(x.m)(n.e(49).then(n.bind(null, 888)))
                },
                Q = function() {
                    return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(36)]).then(n.bind(null, 881)))
                },
                W = function() {},
                X = y.a.prototype.push;
            y.a.prototype.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return X.call(this, t, e, n)
            }, c.default.use(y.a);
            var G = {
                mode: "history",
                base: decodeURI("/"),
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "active-link",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = Object(x.g)(t);
                    (o.some((function(t) {
                        return t.options.scrollToTop
                    })) || o.length < 2 && o.every((function(t) {
                        return !1 !== t.options.scrollToTop
                    }))) && (r = {
                        x: 0,
                        y: 0
                    }), n && (r = n);
                    var c = window.$nuxt;
                    return (t.path === e.path && t.hash !== e.hash || t === e) && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/aboutus",
                    component: _,
                    name: "aboutus"
                }, {
                    path: "/aboutus_new",
                    component: function() {
                        return Object(x.m)(Promise.all([n.e(0), n.e(9), n.e(3), n.e(7), n.e(8), n.e(2), n.e(4), n.e(5), n.e(6), n.e(1), n.e(23)]).then(n.bind(null, 891)))
                    },
                    name: "aboutus_new"
                }, {
                    path: "/app_futa",
                    component: w,
                    name: "app_futa"
                }, {
                    path: "/booking",
                    component: j,
                    name: "booking"
                }, {
                    path: "/booking_guide_app",
                    component: k,
                    name: "booking_guide_app"
                }, {
                    path: "/bookinginstruct",
                    component: O,
                    name: "bookinginstruct"
                }, {
                    path: "/busstop",
                    component: C,
                    name: "busstop"
                }, {
                    path: "/contact",
                    component: $,
                    name: "contact"
                }, {
                    path: "/driver_registration_guide",
                    component: S,
                    name: "driver_registration_guide"
                }, {
                    path: "/faqs",
                    component: A,
                    name: "faqs"
                }, {
                    path: "/faqs_detail",
                    component: T,
                    name: "faqs_detail"
                }, {
                    path: "/faqs_search",
                    component: P,
                    name: "faqs_search"
                }, {
                    path: "/faqs_sub",
                    component: E,
                    name: "faqs_sub"
                }, {
                    path: "/futapay_disclaimer",
                    component: R,
                    name: "futapay_disclaimer"
                }, {
                    path: "/login",
                    component: N,
                    name: "login"
                }, {
                    path: "/news",
                    component: L,
                    name: "news"
                }, {
                    path: "/newsdetail",
                    component: U,
                    name: "newsdetail"
                }, {
                    path: "/operating_regulations_and_terms",
                    component: I,
                    name: "operating_regulations_and_terms"
                }, {
                    path: "/passengertransport",
                    component: D,
                    name: "passengertransport"
                }, {
                    path: "/rent_prices",
                    component: M,
                    name: "rent_prices"
                }, {
                    path: "/schedule",
                    component: V,
                    name: "schedule"
                }, {
                    path: "/scheduledetail",
                    component: z,
                    name: "scheduledetail"
                }, {
                    path: "/search_booking",
                    component: F,
                    name: "search_booking"
                }, {
                    path: "/termsofuse",
                    component: B,
                    name: "termsofuse"
                }, {
                    path: "/ticket_detail",
                    component: H,
                    name: "ticket_detail"
                }, {
                    path: "/ticket_detail_tracking",
                    component: K,
                    name: "ticket_detail_tracking"
                }, {
                    path: "/user",
                    component: J,
                    name: "user"
                }, {
                    path: "/",
                    component: Q,
                    name: "index"
                }, {
                    path: "/",
                    component: Q,
                    name: "_index"
                }, {
                    path: "/vi-VN/",
                    component: Q,
                    name: "vi_index"
                }, {
                    path: "/en-US/",
                    component: Q,
                    name: "en_index"
                }, {
                    path: "/ve-xe-phuong-trang-ve-chung-toi.html",
                    component: _,
                    name: "_about"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-ve-chung-toi.html",
                    component: _,
                    name: "vi_about"
                }, {
                    path: "/about-us.html",
                    component: _,
                    name: "en_about"
                }, {
                    path: "/en-US/about-us.html",
                    component: _,
                    name: "en_loc_about"
                }, {
                    path: "/ve-xe-phuong-trang-huong-dan-dat-ve.html",
                    component: O,
                    name: "_booking_guide"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-huong-dan-dat-ve.html",
                    component: O,
                    name: "vi_booking_guide"
                }, {
                    path: "/booking-guide.html",
                    component: O,
                    name: "en_booking_guide"
                }, {
                    path: "/en-US/booking-guide.html",
                    component: O,
                    name: "en_loc_booking_guide"
                }, {
                    path: "/ve-xe-phuong-trang-tram-dung-chan.html",
                    component: C,
                    name: "_busstop"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-tram-dung-chan.html",
                    component: C,
                    name: "vi_busstop"
                }, {
                    path: "/rest-stop.html",
                    component: C,
                    name: "en_busstop"
                }, {
                    path: "/en-US/rest-stop.html",
                    component: C,
                    name: "en_loc_busstop"
                }, {
                    path: "/ve-xe-phuong-trang-van-chuyen-hanh-khach.html",
                    component: D,
                    name: "_passengertransport"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-van-chuyen-hanh-khach.html",
                    component: D,
                    name: "vi_passengertransport"
                }, {
                    path: "/bus.html",
                    component: D,
                    name: "en_passengertransport"
                }, {
                    path: "/en-US/bus.html",
                    component: D,
                    name: "en_loc_passengertransport"
                }, {
                    path: "/ve-xe-phuong-trang-dieu-khoan-su-dung.html",
                    component: B,
                    name: "_termsofuse"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-dieu-khoan-su-dung.html",
                    component: B,
                    name: "vi_termsofuse"
                }, {
                    path: "/terms-of-use.html",
                    component: B,
                    name: "en_termsofuse"
                }, {
                    path: "/en-US/terms-of-use.html",
                    component: B,
                    name: "en_loc_termsofuse"
                }, {
                    path: "/tin-tuc/*",
                    component: U,
                    name: "vi_newsdetail"
                }, {
                    path: "/vi-VN/tin-tuc/*",
                    component: U,
                    name: "vi_loc_newsdetail"
                }, {
                    path: "/vi-VN/2/*",
                    component: U,
                    name: "vi_loc_newsdetail_2"
                }, {
                    path: "/huongdan-huyve.aspx/2/*",
                    component: U,
                    name: "vi_loc_newsdetail_aspx_2"
                }, {
                    path: "/aboutus.aspx/*",
                    component: U,
                    name: "vi_aboutus_loc_newsdetail"
                }, {
                    path: "/ve-xe-phuong-trang-tin-tuc.html",
                    component: L,
                    name: "_news"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-tin-tuc.html",
                    component: L,
                    name: "vi_news"
                }, {
                    path: "/ve-xe-phuong-trang-lich-trinh.html",
                    component: V,
                    name: "_schedule"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-lich-trinh.html",
                    component: V,
                    name: "vi_schedule"
                }, {
                    path: "/route.html",
                    component: V,
                    name: "en_schedule"
                }, {
                    path: "/en-US/route.html",
                    component: V,
                    name: "en_loc_schedule"
                }, {
                    path: "/lich-trinh/*",
                    component: z,
                    name: "_scheduledetail"
                }, {
                    path: "/vi-VN/lich-trinh/*",
                    component: z,
                    name: "vi_scheduledetail"
                }, {
                    path: "/route/*",
                    component: z,
                    name: "en_scheduledetail"
                }, {
                    path: "/en-US/route/*",
                    component: z,
                    name: "en_loc_scheduledetail"
                }, {
                    path: "/ve-xe-phuong-trang-lien-he.html",
                    component: $,
                    name: "_contact"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-lien-he.html",
                    component: $,
                    name: "vi_contact"
                }, {
                    path: "/contact.html",
                    component: $,
                    name: "en_contact"
                }, {
                    path: "/en-US/contact.html",
                    component: $,
                    name: "en_loc_contact"
                }, {
                    path: "/cau-hoi-thuong-gap.html",
                    component: A,
                    name: "_faqs"
                }, {
                    path: "/vi-VN/cau-hoi-thuong-gap.html",
                    component: A,
                    name: "vi_faqs"
                }, {
                    path: "/faq.html",
                    component: A,
                    name: "en_faqs"
                }, {
                    path: "/en-US/faq.html",
                    component: A,
                    name: "en_loc_faqs"
                }, {
                    path: "/cau-hoi-thuong-gap/chi-tiet/*",
                    component: T,
                    name: "_faqs_detail"
                }, {
                    path: "/vi-VN/cau-hoi-thuong-gap/chi-tiet/*",
                    component: T,
                    name: "vi_faqs_detail"
                }, {
                    path: "/faq/detail/*",
                    component: T,
                    name: "en_faq_detail"
                }, {
                    path: "/en-US/faq/detail/*",
                    component: T,
                    name: "en_loc_faq_detail"
                }, {
                    path: "/cau-hoi-thuong-gap/danh-muc/*",
                    component: E,
                    name: "_faqs_sub"
                }, {
                    path: "/vi-VN/cau-hoi-thuong-gap/danh-muc/*",
                    component: E,
                    name: "vi_faqs_sub"
                }, {
                    path: "/faq/category/*",
                    component: E,
                    name: "en_faq_sub"
                }, {
                    path: "/en-US/faq/category/*",
                    component: E,
                    name: "en_loc_faq_sub"
                }, {
                    path: "/cau-hoi-thuong-gap/tim-kiem",
                    component: P,
                    name: "_faqs_search"
                }, {
                    path: "/vi-VN/cau-hoi-thuong-gap/tim-kiem",
                    component: P,
                    name: "vi_faqs_search"
                }, {
                    path: "/faq/search",
                    component: P,
                    name: "en_faq_search"
                }, {
                    path: "/en-US/faq/search",
                    component: P,
                    name: "en_loc_faq_search"
                }, {
                    path: "/ve-xe-phuong-trang-tra-cuu-thong-tin-dat-ve.html",
                    component: F,
                    name: "_search_booking"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-tra-cuu-thong-tin-dat-ve.html",
                    component: F,
                    name: "vn_search_booking"
                }, {
                    path: "/search-booking.html",
                    component: F,
                    name: "en_search_booking"
                }, {
                    path: "/en-US/search-booking.html",
                    component: F,
                    name: "en_loc_search_booking"
                }, {
                    path: "/ve-xe-phuong-trang-huong-dan-dat-ve-app.html",
                    component: k,
                    name: "_booking_guide_app"
                }, {
                    path: "/vi-VN/ve-xe-phuong-trang-huong-dan-dat-ve-app.html",
                    component: k,
                    name: "vi_booking_guide_app"
                }, {
                    path: "/booking-guide-app.html",
                    component: k,
                    name: "en_booking_guide_app"
                }, {
                    path: "/en-US/booking-guide-app.html",
                    component: k,
                    name: "en_loc_booking_guide_app"
                }, {
                    path: "/thoa-thuan-su-dung-futapay.html",
                    component: R,
                    name: "_thoa_thuan_su_dung_futapay"
                }, {
                    path: "/quy-che-hoat-dong-va-dieu-khoan-futa-app.html",
                    component: I,
                    name: "_quy-che-hoat-dong-va-dieu-khoan"
                }, {
                    path: "/huong-dan-dang-ky-lai-xe.html",
                    component: S,
                    name: "_huong-dan-dang-ky-lai-xe"
                }, {
                    path: "/bang-gia-tham-khao-dich-vu-xe-hop-dong.html",
                    component: M,
                    name: "_bang-gia-tham-khao-dich-vu-xe-hop-dong"
                }, {
                    path: "/huong-dan-su-dung-app-futa-busline.html",
                    component: w,
                    name: "_huong-dan-su-dung-app-futa-busline"
                }, {
                    path: "/booking-guide-app-futa-busline.html",
                    component: w,
                    name: "_booking-guide-app-futa-busline"
                }, {
                    path: "/login",
                    component: N,
                    name: "_login"
                }, {
                    path: "/user/*",
                    component: J,
                    name: "_user"
                }, {
                    path: "/mua-ve/*",
                    component: j,
                    name: "_book_ticket_"
                }, {
                    path: "/booking/*",
                    component: j,
                    name: "en_book_ticket_"
                }, {
                    path: "/mua-ve",
                    component: j,
                    name: "_book_ticket"
                }, {
                    path: "/booking",
                    component: j,
                    name: "en_book_ticket"
                }, {
                    path: "/chi-tiet-ve",
                    component: H,
                    name: "vi_ticket_detail"
                }, {
                    path: "/ticket-detail",
                    component: H,
                    name: "en_ticket_detail"
                }, {
                    path: "/thong-tin-ve/*",
                    component: K,
                    name: "_ticketinfomation"
                }, {
                    path: "/vi-VN/thong-tin-ve/*",
                    component: K,
                    name: "vi_ticketinfomation"
                }, {
                    path: "/ticket-information/*",
                    component: K,
                    name: "en_ticketinfomation"
                }, {
                    path: "/en-US/ticket-information/*",
                    component: K,
                    name: "en_loc_ticketinfomation"
                }],
                fallback: !1
            };

            function Y() {
                return new y.a(G)
            }
            var Z = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, h = n.$nuxt.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                        data.nuxtChildDepth = f;
                        var d = l[f] || h,
                            m = {};
                        tt.forEach((function(t) {
                            void 0 !== d[t] && (m[t] = d[t])
                        }));
                        var v = {};
                        et.forEach((function(t) {
                            "function" == typeof d[t] && (v[t] = d[t].bind(c))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(c, t)
                            }, !1 === d.css) {
                            var x = v.leave;
                            (!x || x.length < 2) && (v.leave = function(t, e) {
                                x && x.call(c, t), c.$nextTick(e)
                            })
                        }
                        var _ = o("routerView", data);
                        return r.keepAlive && (_ = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [_])), o("transition", {
                            props: m,
                            on: v
                        }, [_])
                    }
                },
                tt = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                et = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                nt = n(73),
                ot = (n(48), n(49), n(62), n(33)),
                at = {
                    name: "Nuxt",
                    components: {
                        NuxtChild: Z,
                        NuxtError: nt.a
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(ot.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(nt.a, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                },
                it = (n(65), n(71), n(57), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                ut = (n(308), n(2)),
                st = Object(ut.a)(it, void 0, void 0, !1, null, null, null).exports,
                ct = (n(310), n(312), n(259)),
                lt = n(260);

            function ht(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return pt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function pt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var ft = {
                    _default: Object(x.s)(ct.a),
                    _empty: Object(x.s)(lt.a)
                },
                mt = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(x.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map((function(e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(x.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = ht(Object(x.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(x.q)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var n in t) c.default.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(x.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (nt.a.options || nt.a).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && ft["_" + t] || (t = "default"), this.layoutName = t, this.layout = ft["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && ft["_" + t] || (t = "default"), Promise.resolve(ft["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: st
                    }
                };
            n(41), n(93);

            function gt(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return vt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function vt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            c.default.use(l.a);
            var bt = ["state", "getters", "actions", "mutations"],
                yt = {};
            yt.modules = yt.modules || {}, wt(n(420), "actions.js"), wt(n(421), "getters.js"), wt(n(422), "mutations.js"), wt(n(423), "state.js"), wt(n(424), "schedule/index.js"), wt(n(425), "news/index.js"), wt(n(426), "faqs/index.js"), wt(n(427), "booking/index.js"), wt(n(428), "booking/actions.js"), wt(n(429), "news/banner.js"), wt(n(430), "user/actions.js"), wt(n(436), "user/getters.js"), wt(n(437), "user/mutations.js"), wt(n(438), "user/state.js"), wt(n(439), "booking/step3/index.js"), wt(n(440), "booking/step1/actions.js"), wt(n(441), "booking/step1/getters.js"), wt(n(442), "booking/step1/mutations.js"), wt(n(443), "booking/step1/state.js"), wt(n(444), "booking/step2/actions.js"), wt(n(445), "booking/step2/getters.js"), wt(n(446), "booking/step2/mutations.js"), wt(n(447), "booking/step2/state.js"), wt(n(448), "booking/step3/getters.js");
            var xt = yt instanceof Function ? yt : function() {
                return new l.a.Store(Object.assign({
                    strict: !1
                }, yt))
            };

            function _t(t, e) {
                if (t.state && "function" != typeof t.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(e));
                    var n = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return n
                        }
                    })
                }
                return t
            }

            function wt(t, e) {
                t = t.default || t;
                var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                    r = n[n.length - 1],
                    o = "store/".concat(e);
                if (t = "state" === r ? function(t, e) {
                        if ("function" != typeof t) {
                            console.warn("".concat(e, " should export a method that returns an object"));
                            var n = Object.assign({}, t);
                            return function() {
                                return n
                            }
                        }
                        return _t(t, e)
                    }(t, o) : _t(t, o), bt.includes(r)) {
                    var c = r;
                    kt(jt(yt, n, {
                        isProperty: !0
                    }), t, c)
                } else {
                    "index" === r && (n.pop(), r = n[n.length - 1]);
                    var l, h = jt(yt, n),
                        f = gt(bt);
                    try {
                        for (f.s(); !(l = f.n()).done;) {
                            var d = l.value;
                            kt(h, t[d], d)
                        }
                    } catch (t) {
                        f.e(t)
                    } finally {
                        f.f()
                    }!1 === t.namespaced && delete h.namespaced
                }
            }

            function jt(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.isProperty,
                    o = void 0 !== r && r;
                if (!e.length || o && 1 === e.length) return t;
                var c = e.shift();
                return t.modules[c] = t.modules[c] || {}, t.modules[c].namespaced = !0, t.modules[c].modules = t.modules[c].modules || {}, jt(t.modules[c], e, {
                    isProperty: o
                })
            }

            function kt(t, e, n) {
                e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
            }
            var Ot = n(109),
                Ct = n.n(Ot),
                $t = n(253),
                St = n.n($t);

            function At(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Tt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? At(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : At(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function Pt(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Et(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Et(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function Et(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var Rt = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = Pt(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                if (!e) return void delete this.defaults.headers[c][t];
                                this.defaults.headers[c][t] = e
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return Ut(St()(t, this.defaults))
                    }
                }, Nt = function() {
                    var t = qt[Lt];
                    Rt["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, Lt = 0, qt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Lt < qt.length; Lt++) Nt();
            var Ut = function(t) {
                    var e = Ct.a.create(t);
                    return e.CancelToken = Ct.a.CancelToken, e.isCancel = Ct.a.isCancel,
                        function(t) {
                            for (var e in Rt) t[e] = Rt[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = Tt(Tt({}, e.defaults.headers.common), t.headers)
                        })), It(e), e
                },
                It = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, Ct.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                Dt = function(t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.baseURL || "http://localhost:3000/";
                    var o = Ut({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                },
                Mt = (n(94), n(43), n(37));

            function Vt(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return zt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            n(466);
            var s, Ft = {
                    images: !0,
                    videos: !0,
                    audios: !0,
                    iframes: !0,
                    native: !1,
                    polyfill: !0,
                    directiveOnly: !1,
                    loadingClass: "isLoading",
                    loadedClass: "isLoaded",
                    appendClass: "lazyLoad",
                    observerConfig: {},
                    globalName: "nuxt"
                },
                Bt = null,
                Ht = ["src", "poster", "srcset"],
                Kt = {
                    img: "images",
                    video: "videos",
                    audio: "audios",
                    iframe: "iframes",
                    picture: "images"
                },
                Jt = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.tagName.toLowerCase();
                    if ("svg" !== n) {
                        var r = t.children && t.children.length > 0 ? [].concat(Object(Mt.a)(t.children), [t]) : [t];
                        r.forEach((function(t) {
                            var r, o = Vt(Ht);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var c = r.value;
                                    t.dataset[c] && (t[c] = e ? Ft.defaultImage : t.dataset[c], e || t.removeAttribute("data-".concat(c))), t.load && t.load(), "audio" === n && "true" === t.getAttribute("data-lazy-controls") && (t.removeAttribute("controls"), t.removeAttribute("data-lazy-controls"))
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                        }))
                    }
                },
                Qt = function(t) {
                    t.style.backgroundImage = "url(".concat(t.getAttribute("lazy-background"), ")"), t.removeAttribute("lazy-background"), !1 !== Ft.loadedClass && t.classList.add(Ft.loadedClass)
                },
                Wt = function(t, e) {
                    var n = t.tagName.toLowerCase();
                    if (["img", "video"].includes(n)) {
                        var r = "img" === n ? "load" : "loadeddata";
                        !1 !== Ft.loadingClass && "loading" === e ? (t.classList.add(Ft.loadingClass), t.addEventListener(r, (function() {
                            t.classList.remove(Ft.loadingClass)
                        }))) : !1 !== Ft.loadedClass && "loaded" === e && t.addEventListener(r, (function() {
                            t.classList.add(Ft.loadedClass)
                        }))
                    } else "loaded" === e && !1 !== Ft.loadedClass && t.classList.add(Ft.loadedClass)
                },
                Xt = function(t) {
                    t.removeAttribute("data-no-lazy"), t.removeAttribute("data-not-lazy")
                },
                Gt = !1,
                Yt = ("string" != typeof(s = Ft.globalName) ? "" : s.charAt(0).toUpperCase() + s.slice(1)) || "Nuxt";
            window["on".concat(Yt, "Ready")]((function() {
                Gt = !0
            })), Bt = new IntersectionObserver((function(t, e) {
                Gt && t.forEach((function(t) {
                    if (t.isIntersecting) {
                        var n = t.target;
                        n.getAttribute("lazy-background") ? Qt(n) : (Jt(n), Wt(n, "loaded"), Wt(n, "loading"), e.unobserve(n))
                    }
                }))
            }), Ft.observerConfig);
            var Zt = c.default.directive("lazy-load", {
                    inserted: function(t, e) {
                        var n = e.value;
                        e.def.set(t, n)
                    },
                    update: function(t, e, n, r) {
                        var o, c = e.value,
                            l = e.def,
                            h = Vt(Ht);
                        try {
                            for (h.s(); !(o = h.n()).done;) {
                                var f = o.value;
                                if (r.data.attrs["data-".concat(f)] !== n.data.attrs["data-".concat(f)]) {
                                    l.set(t, c);
                                    break
                                }
                            }
                        } catch (t) {
                            h.e(t)
                        } finally {
                            h.f()
                        }
                    },
                    set: function(t, e) {
                        if (!0 === Ft.native) Ft.appendClass && t.classList.add(Ft.appendClass), ["notLazy", "noLazy"].every((function(e) {
                            return void 0 === t.dataset[e]
                        })) && (t.setAttribute("loading", "lazy"), Xt(t), Ft.loadedClass && t.addEventListener("load", (function() {
                            t.classList.add(Ft.loadedClass)
                        })));
                        else if (Ft.defaultImage && Jt(t, !0), e) {
                            var n = [];
                            for (var r in e.replace(/( )src=/g, " data-src="), e.replace(/( )srcset=/g, " data-srcset="), e.replace(/( )poster=/g, " data-poster="), t.innerHTML = e, Kt) Ft[Kt[r]] && n.push.apply(n, Object(Mt.a)(t.querySelectorAll(r)));
                            for (var o = 0, c = n; o < c.length; o++) {
                                var element = c[o];
                                !1 !== Ft.appendClass && element.classList.add(Ft.appendClass), Bt.observe(element)
                            }
                        } else {
                            var l = "source" === t.tagName.toLowerCase() ? t.parentNode : t;
                            !0 !== Ft[Kt[l.tagName.toLowerCase()]] || ["notLazy", "noLazy"].some((function(t) {
                                return void 0 !== l.dataset[t]
                            })) ? (Jt(l), Xt(l)) : void 0 === l.dataset.manualLazy && (!1 !== Ft.appendClass && l.classList.add(Ft.appendClass), "audio" !== l.tagName.toLowerCase() || l.getAttribute("controls") || (l.setAttribute("controls", ""), l.setAttribute("data-lazy-controls", "true")), Bt.observe(l))
                        }
                    }
                }),
                te = c.default.directive("lazy-background", {
                    inserted: function(t, e) {
                        e.def.set(t)
                    },
                    update: function(t, e, n, r) {
                        e.def.set(t, n.data.attrs["lazy-background"] !== r.data.attrs["lazy-background"])
                    },
                    set: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Ft.defaultImage && (t.style.backgroundImage = "url(".concat(Ft.defaultImage, ")")), ["notLazy", "noLazy"].some((function(e) {
                            return void 0 !== t.dataset[e]
                        })) ? Qt(t) : (void 0 === t.dataset.manualLazy && (!1 !== Ft.appendClass && t.classList.add(Ft.appendClass), Bt.observe(t)), e && (Bt.unobserve(t), Bt.observe(t)))
                    }
                });
            c.default.use(Zt), c.default.use(te);
            var ee, ne, re, oe, ae = function(t) {
                    t.removeAttribute("data-manual-lazy"), !1 !== Ft.appendClass && t.classList.add(Ft.appendClass), t.getAttribute("lazy-background") ? Qt(t) : (Jt(t), Wt(t, "loading"), Wt(t, "loaded"))
                },
                ie = function(t) {
                    if (t.target) {
                        var e = t.target.querySelectorAll("[data-manual-lazy]");
                        Object(Mt.a)(e).forEach((function(t) {
                            return ae(t)
                        }))
                    } else ae(t)
                };
            !Array.from && Ft.polyfill && (Array.from = (ee = Object.prototype.toString, ne = function(t) {
                return "function" == typeof t || "[object Function]" === ee.call(t)
            }, re = Math.pow(2, 53) - 1, oe = function(t) {
                var e = function(t) {
                    var e = Number(t);
                    return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
                }(t);
                return Math.min(Math.max(e, 0), re)
            }, function(t) {
                var e = this,
                    n = Object(t);
                if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var r, o = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== o) {
                    if (!ne(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (r = arguments[2])
                }
                for (var c, l = oe(n.length), h = ne(e) ? Object(new e(l)) : new Array(l), f = 0; f < l;) c = n[f], h[f] = o ? void 0 === r ? o(c, f) : o.call(r, c, f) : c, f += 1;
                return h.length = l, h
            }));
            var ue = function(t, e) {
                    e("lazyLoad", ie)
                },
                se = n(197),
                ce = n.n(se),
                meta = n(254),
                le = n(255),
                he = n.n(le),
                pe = function(t) {
                    var e = t.app;
                    he()(e.head, meta)
                },
                fe = n(198),
                de = n.n(fe),
                me = n(199),
                ge = n.n(me);

            function ve(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function be(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? ve(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ve(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            c.default.component(d.a.name, d.a), c.default.component(v.a.name, be(be({}, v.a), {}, {
                render: function(t, e) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
                }
            })), c.default.component(Z.name, Z), c.default.component("NChild", Z), c.default.component(at.name, at), Object.defineProperty(c.default.prototype, "$nuxt", {
                get: function() {
                    return this.$root.$options.$nuxt
                },
                configurable: !0
            }), c.default.use(h.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var ye = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                xe = l.a.Store.prototype.registerModule,
                _e = {
                    preserveState: !0
                };

            function we(path, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return xe.call(this, path, t, be(be({}, _e), e))
            }

            function je(t) {
                return ke.apply(this, arguments)
            }

            function ke() {
                return (ke = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, o, l, h, f, path, d, m = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return d = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    l[t = "$" + t] = e, l.context[t] || (l.context[t] = e), o[t] = l[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    c.default[n] || (c.default[n] = !0, c.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.default.prototype, t) || Object.defineProperty(c.default.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, t.next = 4, Y();
                            case 4:
                                return r = t.sent, (o = xt(e)).$router = r, o.registerModule = we, l = be({
                                    head: {
                                        title: "Vé xe Phương Trang | Công ty cổ phần xe khách Phương Trang | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067",
                                        htmlAttrs: {
                                            lang: "vi"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            hid: "viewport",
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
                                        }, {
                                            hid: "keywords",
                                            name: "keywords",
                                            content: "xe Phương Trang đi Đà Lạt, Cần Thơ, Nha Trang, Mũi Né, Quy Nhơn, Quảng Ngãi, Đà Nẵng, Huế, Hà Nội, Cà Mau, Rạch Giá, Bạc liêu,..."
                                        }, {
                                            hid: "name",
                                            itemprop: "name",
                                            content: "Vé xe Phương Trang | Công ty cổ phần xe khách Phương Trang | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067"
                                        }, {
                                            hid: "description",
                                            itemprop: "description",
                                            name: "description",
                                            content: "Đặt vé xe Phương Trang đi liên tỉnh trực tuyến. Số điện tổng đài thoại đặt vé xe phương trang: 1900 6067. Đặt vé nhanh qua ứng dụng Android, iOS. Trên 2000 xe đời mới, chất lượng cao, có phục vụ trung chuyển, khăn, nước uống, wifi, tivi miễn phí. Phương Trang là Công ty vận tải hành khách lớn và uy tín nhất Việt Nam."
                                        }, {
                                            hid: "image",
                                            itemprop: "image",
                                            name: "image",
                                            content: "https://futabus.vn/futa-thumb-about.png"
                                        }, {
                                            hid: "og:url",
                                            property: "og:url",
                                            name: "og:url",
                                            content: "https://futabus.vn"
                                        }, {
                                            hid: "og:type",
                                            property: "og:type",
                                            name: "og:type",
                                            content: "website"
                                        }, {
                                            hid: "og:title",
                                            property: "og:title",
                                            name: "og:title",
                                            content: "Vé xe Phương Trang | Công ty cổ phần xe khách Phương Trang | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067"
                                        }, {
                                            hid: "og:description",
                                            property: "og:description",
                                            name: "og:description",
                                            content: "Đặt vé xe Phương Trang đi liên tỉnh trực tuyến. Số điện tổng đài thoại đặt vé xe phương trang: 1900 6067. Đặt vé nhanh qua ứng dụng Android, iOS. Trên 2000 xe đời mới, chất lượng cao, có phục vụ trung chuyển, khăn, nước uống, wifi, tivi miễn phí. Phương Trang là Công ty vận tải hành khách lớn và uy tín nhất Việt Nam."
                                        }, {
                                            hid: "og:image",
                                            property: "og:image",
                                            name: "og:image",
                                            content: "https://futabus.vn/futa-thumb-about.png"
                                        }, {
                                            hid: "twitter:card",
                                            name: "twitter:card",
                                            content: "summary_large_image"
                                        }, {
                                            hid: "twitter:title",
                                            name: "twitter:title",
                                            content: "Vé xe Phương Trang | Công ty cổ phần xe khách Phương Trang | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067"
                                        }, {
                                            hid: "twitter:site",
                                            name: "twitter:site",
                                            content: "@futabuslines"
                                        }, {
                                            hid: "twitter:description",
                                            name: "twitter:description",
                                            content: "Đặt vé xe Phương Trang đi liên tỉnh trực tuyến. Số điện tổng đài thoại đặt vé xe phương trang: 1900 6067. Đặt vé nhanh qua ứng dụng Android, iOS. Trên 2000 xe đời mới, chất lượng cao, có phục vụ trung chuyển, khăn, nước uống, wifi, tivi miễn phí. Phương Trang là Công ty vận tải hành khách lớn và uy tín nhất Việt Nam."
                                        }, {
                                            hid: "twitter:image",
                                            name: "twitter:image",
                                            content: "https://futabus.vn/futa-thumb-about.png"
                                        }, {
                                            hid: "google-site-verification",
                                            name: "google-site-verification",
                                            content: "j6bvM-C4RCbHqaLPMwMtcg5KgCU-nHurQ6-zc8RIckQ"
                                        }],
                                        script: [{
                                            type: "application/ld+json",
                                            json: {
                                                "@context": "http://schema.org",
                                                "@type": "LocalBusiness",
                                                url: "https://futabus.vn",
                                                name: "Công ty cổ phần xe khách Phương Trang - FUTA Bus Lines",
                                                alternateName: "Đặt vé xe Phương Trang đi liên tỉnh trực tuyến. Số điện tổng đài thoại đặt vé xe phương trang: 1900 6067. Đặt vé nhanh qua ứng dụng Android, iOS. Trên 2000 xe đời mới, chất lượng cao, có phục vụ trung chuyển, khăn, nước uống, wifi, tivi miễn phí. Phương Trang là Công ty vận tải hành khách lớn và uy tín nhất Việt Nam.",
                                                aggregateRating: {
                                                    "@type": "AggregateRating",
                                                    ratingValue: "5.0",
                                                    reviewCount: "15386"
                                                },
                                                image: ["https://futabus.vn/img/SearchConsole/futa1x1.jpg", "https://futabus.vn/img/SearchConsole/futa4x3.jpg", "https://futabus.vn/img/SearchConsole/futa16x9.jpg"],
                                                logo: "https://futabus.vn/icon.png",
                                                photo: "https://futabus.vn/futa-thumb-about.png",
                                                address: [{
                                                    "@type": "PostalAddress",
                                                    streetAddress: "272 Đề Thám, Quận 1",
                                                    addressLocality: "Hồ Chí Minh",
                                                    addressRegion: "",
                                                    postalCode: "70000",
                                                    addressCountry: {
                                                        "@type": "Country",
                                                        name: "Vietnam"
                                                    }
                                                }, {
                                                    "@type": "PostalAddress",
                                                    streetAddress: "80 Trần Hưng Đạo, Quận 1",
                                                    addressLocality: "Hồ Chí Minh",
                                                    addressRegion: "",
                                                    postalCode: "70000",
                                                    addressCountry: {
                                                        "@type": "Country",
                                                        name: "Vietnam"
                                                    }
                                                }],
                                                contactPoint: {
                                                    "@type": "ContactPoint",
                                                    telephone: "+8419006067",
                                                    contactType: "Customer service"
                                                },
                                                email: "mailto:hotro@futabus.vn",
                                                telephone: "+842838386852",
                                                hasMap: "https://maps.google.com/maps?cid=70337827442867530",
                                                geo: {
                                                    "@type": "GeoCoordinates",
                                                    latitude: "10.7684534",
                                                    longitude: "106.6935194"
                                                },
                                                priceRange: "VND80000-385000"
                                            }
                                        }, {
                                            hid: "recaptcha",
                                            src: "https://www.google.com/recaptcha/api.js?render=explicit",
                                            type: "text/javascript",
                                            defer: !0,
                                            async: !0
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico"
                                        }, {
                                            rel: "canonical",
                                            href: "https://futabus.vn"
                                        }],
                                        noscript: [{
                                            innerHTML: "This website requires JavaScript."
                                        }],
                                        style: []
                                    },
                                    store: o,
                                    router: r,
                                    nuxt: {
                                        defaultTransition: ye,
                                        transitions: [ye],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, ye, {
                                                    name: t
                                                }) : Object.assign({}, ye, t) : ye
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, l.context._errored = Boolean(t), t = t ? Object(x.p)(t) : null;
                                            var n = l.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, mt), o.app = l, h = e ? e.next : function(t) {
                                    return l.router.push(t)
                                }, e ? f = r.resolve(e.url).route : (path = Object(x.f)(r.options.base, r.options.mode), f = r.resolve(path).route), t.next = 14, Object(x.t)(l, {
                                    store: o,
                                    route: f,
                                    next: h,
                                    error: l.nuxt.error.bind(l),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 14:
                                return d("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), t.next = 20, Dt(l.context, d);
                            case 20:
                                return t.next = 23, ue(l.context, d);
                            case 23:
                                if ("function" != typeof ce.a) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 26, ce()(l.context, d);
                            case 26:
                                return t.next = 29, pe(l.context);
                            case 29:
                                if ("function" != typeof de.a) {
                                    t.next = 32;
                                    break
                                }
                                return t.next = 32, de()(l.context, d);
                            case 32:
                                if ("function" != typeof ge.a) {
                                    t.next = 35;
                                    break
                                }
                                return t.next = 35, ge()(l.context, d);
                            case 35:
                                0, t.next = 39;
                                break;
                            case 39:
                                return t.abrupt("return", {
                                    store: o,
                                    app: l,
                                    router: r
                                });
                            case 40:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        8: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return y
            })), n.d(e, "m", (function() {
                return x
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "e", (function() {
                return w
            })), n.d(e, "b", (function() {
                return j
            })), n.d(e, "s", (function() {
                return k
            })), n.d(e, "g", (function() {
                return O
            })), n.d(e, "h", (function() {
                return C
            })), n.d(e, "d", (function() {
                return $
            })), n.d(e, "r", (function() {
                return S
            })), n.d(e, "j", (function() {
                return A
            })), n.d(e, "t", (function() {
                return P
            })), n.d(e, "o", (function() {
                return R
            })), n.d(e, "q", (function() {
                return N
            })), n.d(e, "f", (function() {
                return L
            })), n.d(e, "c", (function() {
                return U
            })), n.d(e, "i", (function() {
                return I
            })), n.d(e, "p", (function() {
                return D
            })), n.d(e, "a", (function() {
                return K
            })), n.d(e, "n", (function() {
                return Q
            })), n.d(e, "u", (function() {
                return W
            }));
            n(20), n(65), n(17), n(71), n(41), n(43);
            var r = n(33),
                o = (n(93), n(299), n(59)),
                c = (n(48), n(49), n(301), n(273), n(304), n(305), n(62), n(58), n(21)),
                l = (n(57), n(13), n(12), n(18), n(38), n(0)),
                h = n(16);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(e) {
                        Object(l.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function m(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function y(t) {
                h.default.config.errorHandler && h.default.config.errorHandler(t)
            }

            function x(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function _(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function w(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = m(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && w(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function j(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), d(d({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function k(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = h.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function C(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return O(t, e, "instances")
            }

            function $(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function S(t, e) {
                return Promise.all($(t, function() {
                    var t = Object(c.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3, n();
                                case 3:
                                    n = t.sent;
                                case 4:
                                    return o.components[c] = n = k(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function A(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, S(e);
                            case 4:
                                return t.abrupt("return", d(d({}, e), {}, {
                                    meta: O(e).map((function(t, n) {
                                        return d(d({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function P(t, e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = Object(c.a)(regeneratorRuntime.mark((function t(e, n) {
                    var c, l, h, f;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: "/",
                                    env: {
                                        googleTagID: "GTM-5TJW4VC"
                                    }
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var r = Object(o.a)(path);
                                        if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = path || {}, path = t, r = Object(o.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = H(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([A(n.route), A(n.from)]);
                            case 3:
                                c = t.sent, l = Object(r.a)(c, 2), h = l[0], f = l[1], n.route && (e.context.route = h), n.from && (e.context.from = f), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function R(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : N(t[0], e).then((function() {
                    return R(t.slice(1), e)
                }))
            }

            function N(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function L(base, t) {
                var path = decodeURI(window.location.pathname);
                return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && (path.endsWith("/") ? path : path + "/").startsWith(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
            }

            function U(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", B(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? V : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var h = data[l.name || "pathMatch"],
                                    f = void 0;
                                if (null == h) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(h)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                                    if (0 === h.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var d = 0; d < h.length; d++) {
                                        if (f = o(h[d]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                        path += (0 === d ? l.prefix : l.delimiter) + f
                                    }
                                } else {
                                    if (f = l.asterisk ? V(h, !0) : o(h), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                    path += l.prefix + f
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = M.exec(t));) {
                        var h = n[0],
                            f = n[1],
                            d = n.index;
                        if (path += t.slice(c, d), c = d + h.length, f) path += f[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                y = n[3],
                                x = n[4],
                                _ = n[5],
                                w = n[6],
                                j = n[7];
                            path && (r.push(path), path = "");
                            var k = null != v && null != m && m !== v,
                                O = "+" === w || "*" === w,
                                C = "?" === w || "*" === w,
                                $ = n[2] || l,
                                pattern = x || _;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: $,
                                optional: C,
                                repeat: O,
                                partial: k,
                                asterisk: Boolean(j),
                                pattern: pattern ? F(pattern) : j ? ".*" : "[^" + z($) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function I(t, e) {
                var n = {},
                    r = d(d({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function D(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return d(d({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var M = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function V(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function z(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function F(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function B(t) {
                return t && t.sensitive ? "" : "i"
            }

            function H(t, e) {
                var n, o = t.indexOf("://"); - 1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
                var c, l = t.split("/"),
                    h = (n ? n + "://" : "//") + l.shift(),
                    path = l.join("/");
                if ("" === path && 1 === l.length && (h += "/"), 2 === (l = path.split("#")).length) {
                    var f = l,
                        d = Object(r.a)(f, 2);
                    path = d[0], c = d[1]
                }
                return h += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (h += (2 === t.split("?").length ? "&" : "?") + function(t) {
                    return Object.keys(t).sort().map((function(e) {
                        var n = t[e];
                        return null == n ? "" : Array.isArray(n) ? n.slice().map((function(t) {
                            return [e, "=", t].join("")
                        })).join("&") : e + "=" + n
                    })).filter(Boolean).join("&")
                }(e)), h += c ? "#" + c : ""
            }

            function K(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }

            function J(path) {
                return path.replace(/\/+$/, "") || "/"
            }

            function Q(t, e) {
                return J(t) === J(e)
            }

            function W(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        }
    }
]);