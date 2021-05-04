(window.webpackJsonp = window.webpackJsonp || []).push([
    [49], {
        646: function(e, t, o) {
            var content = o(823);
            "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(15).default)("754a74c4", content, !0, {
                sourceMap: !1
            })
        },
        822: function(e, t, o) {
            "use strict";
            var n = o(646);
            o.n(n).a
        },
        823: function(e, t, o) {
            (t = o(14)(!1)).push([e.i, ".user-page[data-v-4c9e6347]{max-width:936px;width:100%}", ""]), e.exports = t
        },
        888: function(e, t, o) {
            "use strict";
            o.r(t);
            o(20), o(17), o(13), o(12), o(18), o(41), o(43), o(38);
            var n = o(0),
                r = o(3),
                c = o(243),
                l = o(2),
                d = Object(l.a)({}, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("div", [this._v("booking")])
                }), [], !1, null, null, null).exports,
                f = o(244),
                h = o(245),
                v = Object(l.a)({}, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("div", [this._v("points")])
                }), [], !1, null, null, null).exports,
                m = o(105),
                O = o(86),
                _ = o(10);

            function w(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function j(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? w(Object(source), !0).forEach((function(t) {
                        Object(n.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var I = {
                    components: {
                        Loader: O.a,
                        Account: c.a,
                        BookTicket: d,
                        BookingHistory: f.a,
                        Info: h.a,
                        Points: v
                    },
                    computed: j(j({}, Object(r.e)({
                        didFetchUser: function(s) {
                            return s.user.didFetchUser
                        },
                        locale: function(e) {
                            return e.locale
                        },
                        userInfo: function(s) {
                            return s.user.userInfo
                        }
                    })), {}, {
                        localized: function() {
                            return _.a[this.locale]
                        },
                        currentComponent: function() {
                            var e;
                            return (null === (e = m.a.ROUTING.PATHS[this.$route.params.pathMatch]) || void 0 === e ? void 0 : e.component) || h.a
                        }
                    }),
                    methods: j(j({}, Object(r.d)({
                        show_error_message: "show_error_message",
                        set_apptransRequestAttemtCount: "booking/set_apptransRequestAttemtCount"
                    })), Object(r.b)({
                        updateBookingNo: "booking/updateBookingNo"
                    })),
                    beforeRouteLeave: function(e, t, o) {
                        var n, r;
                        (null == e || null === (n = e.name) || void 0 === n || null === (r = n.includes) || void 0 === r ? void 0 : r.call(n, "ticket_detail")) && (this.updateBookingNo(void 0), this.set_apptransRequestAttemtCount(0)), o()
                    },
                    beforeRouteEnter: function(e, t, o) {
                        o((function(e) {
                            e.userInfo && 0 == e.userInfo.Id && (e.show_error_message("updateUserInfo"), e.$router.push("/login"))
                        }))
                    },
                    mounted: function() {
                        var e = this.didFetchUser,
                            t = this.userInfo;
                        e && !(null == t ? void 0 : t.Id) && (this.show_error_message("updateUserInfo"), this.$router.push("/login"))
                    },
                    watch: {
                        userInfo: function(e) {
                            (null == e ? void 0 : e.Id) || (this.show_error_message("updateUserInfo"), this.$router.push("/login"))
                        },
                        didFetchUser: function(e) {
                            var t = this.userInfo;
                            e && !(null == t ? void 0 : t.Id) && (this.show_error_message("updateUserInfo"), this.$router.push("/login"))
                        }
                    }
                },
                k = (o(822), Object(l.a)(I, (function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "user-page"
                    }, [this.didFetchUser ? t(this.currentComponent, {
                        tag: "component"
                    }) : t("Loader", {
                        attrs: {
                            msg: this.localized.loadingMessages.gettingInformation
                        }
                    })], 1)
                }), [], !1, null, "4c9e6347", null));
            t.default = k.exports
        }
    }
]);