(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], Array(84).concat([function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n = o(0),
            r = o(3),
            c = o(10);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m = {
                props: {
                    show: {
                        type: Boolean,
                        default: !1
                    },
                    text: {
                        type: String
                    }
                },
                computed: l(l({}, Object(r.e)({
                    locale: function(t) {
                        return t.locale
                    }
                })), {}, {
                    localizedTxt: function() {
                        return c.a[this.locale].booking[1].noRouteInfo
                    }
                })
            },
            f = o(2),
            component = Object(f.a)(m, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.show,
                        expression: "show"
                    }],
                    staticClass: "alert alert-info"
                }, [e("p", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [this._v(this._s(this.text || this.localizedTxt))])])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , function(t, e, o) {
        "use strict";
        var n = {
                props: {
                    msg: {
                        type: String,
                        default: "..."
                    }
                }
            },
            r = (o(348), o(2)),
            component = Object(r.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "loader-container"
                }, [o("div", {
                    staticClass: "loader"
                }), t._v(" "), o("p", {
                    staticClass: "text"
                }, [t._v("\n    " + t._s(t.msg) + "\n    "), o("span", {
                    staticClass: "dot one"
                }, [t._v(".")]), t._v(" "), o("span", {
                    staticClass: "dot two"
                }, [t._v(".")]), t._v(" "), o("span", {
                    staticClass: "dot three"
                }, [t._v(".")])])])
            }), [], !1, null, "e266567a", null);
        e.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        var content = o(333);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("7cacb474", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(335);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("2961d0e4", content, !0, {
            sourceMap: !1
        })
    }, , , , , function(t, e, o) {
        var content = o(349);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("2da8e849", content, !0, {
            sourceMap: !1
        })
    }, , , function(t, e, o) {
        var content = o(355);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("6c648bf1", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(357);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("2846c743", content, !0, {
            sourceMap: !1
        })
    }, , function(t, e, o) {
        var content = o(361);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("46622b50", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(365);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("c1ea8fd2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(367);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("1d9a7449", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(373);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("177c292e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(375);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("e7e669ca", content, !0, {
            sourceMap: !1
        })
    }, , function(t, e, o) {
        var content = o(379);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("006ae210", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(381);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("2e923608", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(383);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("7b8e245a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(386);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("6a95bc96", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/footer-youtube.2988f56.png"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n, r, c, d, l, m = o(0),
            f = o(1),
            v = [{
                name: "home",
                routeTo: (n = {}, Object(m.a)(n, f.d.VI, "/"), Object(m.a)(n, f.d.EN, "/"), n)
            }, {
                name: "routes",
                routeTo: (r = {}, Object(m.a)(r, f.d.VI, "/ve-xe-phuong-trang-lich-trinh.html"), Object(m.a)(r, f.d.EN, "/route.html"), r)
            }, {
                name: "news",
                routeTo: Object(m.a)({}, f.d.VI, "/ve-xe-phuong-trang-tin-tuc.html")
            }, {
                name: "recruitment",
                url: Object(m.a)({}, f.d.VI, "https://vieclam.futabus.vn/")
            }, {
                name: "contact",
                routeTo: (c = {}, Object(m.a)(c, f.d.VI, "/ve-xe-phuong-trang-lien-he.html"), Object(m.a)(c, f.d.EN, "/contact.html"), c)
            }, {
                name: "invoice",
                url: Object(m.a)({}, f.d.VI, "https://hoadon.futabus.vn/")
            }, {
                name: "about_us",
                routeTo: (d = {}, Object(m.a)(d, f.d.EN, "/about-us.html"), Object(m.a)(d, f.d.VI, "/ve-xe-phuong-trang-ve-chung-toi.html"), d)
            }],
            h = o(10),
            x = o(3),
            w = o(9),
            k = o(270),
            y = o(271),
            _ = o(63);

        function O(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function z(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? O(Object(source), !0).forEach((function(e) {
                    Object(m.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var j = (l = {}, Object(m.a)(l, f.d.VI, f.d.EN), Object(m.a)(l, f.d.EN, f.d.VI), l),
            I = {
                components: {
                    vietIcon: k.a,
                    engIcon: y.a,
                    Fragment: _.a
                },
                data: function() {
                    return {
                        localized: h.a,
                        langChangeMap: j
                    }
                },
                computed: z(z({}, Object(x.e)({
                    locale: function(t) {
                        return t.locale
                    },
                    isPortrait: function(t) {
                        return t.isPortrait
                    }
                })), {}, {
                    isSingleButton: function() {
                        return this.isPortrait || w.a.isMobile()
                    }
                }),
                methods: z(z({}, Object(x.d)({
                    set_language: "set_language"
                })), {}, {
                    ChangeLang: function(t) {
                        var e = j[t];
                        this.set_language(e), this.$router.push({
                            path: this.$route.path,
                            query: z(z({}, this.$route.query), {}, {
                                lang: e
                            })
                        })
                    }
                })
            },
            C = (o(332), o(2)),
            B = Object(C.a)(I, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [t.isSingleButton ? o("button", {
                    staticClass: "lang-btn",
                    on: {
                        click: function(e) {
                            return t.ChangeLang(t.locale)
                        }
                    }
                }, ["en-US" === t.locale ? o("vietIcon") : t._e(), t._v(" "), "vi-VN" === t.locale ? o("engIcon") : t._e()], 1) : o("Fragment", [o("button", {
                    staticClass: "lang-btn",
                    on: {
                        click: function(e) {
                            return t.ChangeLang("en-US")
                        }
                    }
                }, [o("vietIcon"), t._v(" "), o("span", [t._v("VN")])], 1), t._v(" "), o("button", {
                    staticClass: "lang-btn",
                    on: {
                        click: function(e) {
                            return t.ChangeLang("vi-VN")
                        }
                    }
                }, [o("engIcon"), t._v(" "), o("span", [t._v("EN")])], 1)])], 1)
            }), [], !1, null, "41c4dd7e", null).exports,
            P = o(89),
            A = {
                props: {
                    isMenuActive: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isActive: !1
                    }
                },
                methods: {
                    onClick: function() {
                        this.$refs.menuBtn;
                        this.isActive = !this.isActive, this.$emit("onClicked", this.isActive)
                    }
                },
                watch: {
                    isMenuActive: function(i) {
                        this.isActive !== i && (this.isActive = i)
                    }
                }
            },
            D = (o(334), Object(C.a)(A, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("button", {
                    ref: "menuBtn",
                    staticClass: "toggle-menu",
                    class: {
                        active: this.isActive
                    },
                    attrs: {
                        "aria-label": "menu"
                    },
                    on: {
                        click: this.onClick
                    }
                }, [e("i"), this._v(" "), e("i"), this._v(" "), e("i")])
            }), [], !1, null, "5f261f91", null).exports),
            L = o(105),
            S = o(272),
            U = o(180),
            X = o(177);

        function M(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function R(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? M(Object(source), !0).forEach((function(e) {
                    Object(m.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : M(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var E = {
                components: {
                    FutaIDIcon: S.a,
                    UserCircleIcon: U.a,
                    UserAvatar: X.a
                },
                data: function() {
                    return {
                        showMenu: !1,
                        userRootPath: L.a.ROUTING.ROOT,
                        menuButtons: L.a.ROUTING.PATHS,
                        uploadedImage: void 0
                    }
                },
                computed: R(R(R({}, Object(x.e)({
                    locale: function(t) {
                        return t.locale
                    },
                    isPortrait: function(t) {
                        return t.isPortrait
                    },
                    userInfo: function(s) {
                        return s.user.userInfo
                    }
                })), Object(x.c)({
                    userName: "user/userName"
                })), {}, {
                    localized: function() {
                        return h.a[this.locale].nav
                    },
                    localizedAccount: function() {
                        return h.a[this.locale].userAccount
                    }
                }),
                mounted: function() {
                    document.body.addEventListener("click", this.windowClicked)
                },
                destroyed: function() {
                    document.body.removeEventListener("click", this.windowClicked)
                },
                methods: R(R(R({}, Object(x.d)({
                    set_isShowLoginForm: "set_isShowLoginForm",
                    set_confirm_popup: "set_confirm_popup"
                })), Object(x.b)({
                    logout: "user/logout"
                })), {}, {
                    windowClicked: function(t) {
                        this.showMenu = !1
                    },
                    menuClicked: function(t) {
                        t.stopPropagation(), this.showMenu = !1
                    },
                    signinClicked: function(t) {
                        this.userInfo ? (this.showMenu = !this.showMenu, t.stopPropagation()) : (this.set_isShowLoginForm(!0), this.$emit("click"))
                    }
                })
            },
            T = (o(354), Object(C.a)(E, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "signin-button-container"
                }, [o("button", {
                    staticClass: "signin-btn",
                    class: {
                        signed: !!t.userInfo
                    },
                    on: {
                        click: t.signinClicked
                    }
                }, [o("UserCircleIcon"), t._v(" "), o("div", [t._v("\n      " + t._s(t.userName || t.localized.login) + "\n    ")])], 1), t._v(" "), o("div", {
                    staticClass: "menu-container",
                    class: {
                        show: t.showMenu, portrait: t.isPortrait
                    },
                    on: {
                        click: t.menuClicked
                    }
                }, [o("div", {
                    staticClass: "user"
                }, [o("UserAvatar"), t._v(" "), o("p", {
                    staticClass: "user-name"
                }, [t._v("\n        " + t._s(t.userName) + "\n      ")])], 1), t._v(" "), o("div", {
                    staticClass: "buttons"
                }, [t._l(Object.keys(t.menuButtons), (function(menu) {
                    return o("nuxt-link", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.menuButtons[menu].hide,
                            expression: "!menuButtons[menu].hide"
                        }],
                        key: menu,
                        staticClass: "context-menu-button",
                        attrs: {
                            to: t.userRootPath + t.menuButtons[menu].path
                        }
                    }, [t.menuButtons[menu].icon ? o("i", {
                        staticClass: "fa menu-icon",
                        class: t.menuButtons[menu].icon,
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }) : o("FutaIDIcon", {
                        staticClass: "menu-icon"
                    }), t._v(" "), o("span", [t._v(" " + t._s(t.localizedAccount.contextButtons[menu]))])], 1)
                })), t._v(" "), o("div", {
                    staticClass: "context-menu-button",
                    on: {
                        click: t.logout
                    }
                }, [o("i", {
                    staticClass: "fa fa-sign-out menu-icon"
                }), t._v(" "), o("span", [t._v(" " + t._s(t.localized.logout))])])], 2)])])
            }), [], !1, null, "6f990524", null).exports);

        function Z(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var F = null,
            Y = {
                components: {
                    FutaBusLinesIcon: P.a,
                    menuBtn: D,
                    languageButton: B,
                    userButton: T
                },
                data: function() {
                    return {
                        isActive: !1,
                        navigations: v,
                        localized: h.a
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? Z(Object(source), !0).forEach((function(e) {
                            Object(m.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Z(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(x.e)({
                    locale: function(t) {
                        return t.locale
                    }
                })),
                watch: {
                    locale: function(t) {
                        this.isActive = !1
                    }
                },
                methods: {
                    getUrl: function(nav) {
                        return nav.url && nav.url[this.locale]
                    },
                    onMenuButtonClicked: function(t) {
                        this.isActive = t
                    },
                    navClicked: function(t) {
                        this.isActive = !1
                    },
                    onMenuContainerClicked: function(t) {
                        this.isActive = !1
                    },
                    onMenuInnerClicked: function(t) {
                        t.stopPropagation()
                    },
                    lock: function(t) {
                        var p = t.changedTouches ? t.changedTouches[0] : t;
                        F = p.clientX
                    },
                    move: function(t) {
                        if (F || 0 === F) {
                            var e = (t.changedTouches ? t.changedTouches[0] : t).clientX - F;
                            e < -100 ? this.isActive = !1 : e > -100 && (this.isActive = !0), F = null
                        }
                    }
                }
            },
            N = (o(356), Object(C.a)(Y, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("menuBtn", {
                    attrs: {
                        isMenuActive: t.isActive
                    },
                    on: {
                        onClicked: t.onMenuButtonClicked
                    }
                }), t._v(" "), n("div", {
                    staticClass: "menu-container",
                    class: {
                        open: t.isActive
                    },
                    on: {
                        click: t.onMenuContainerClicked,
                        mousedown: t.lock,
                        touchstart: t.lock,
                        mouseup: t.move,
                        touchend: t.move
                    }
                }, [n("div", {
                    staticClass: "menu-inner",
                    on: {
                        click: t.onMenuInnerClicked
                    }
                }, [n("nuxt-link", {
                    attrs: {
                        to: "/"
                    }
                }, [n("FutaBusLinesIcon", {
                    staticClass: "logo-main"
                })], 1), t._v(" "), n("div", {
                    staticClass: "round-btns"
                }, [n("a", {
                    staticClass: "social-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.facebook.com/xephuongtrang",
                        rel: "noreferrer",
                        "aria-label": "facebook xe phuong trang"
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        viewBox: "0 0 28 28"
                    }
                }, [n("g", {
                    attrs: {
                        fill: "none"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "13.9",
                        cy: "13.9",
                        r: "13.9",
                        fill: "#3B5998"
                    }
                }), t._v(" "), n("path", {
                    attrs: {
                        fill: "#FFF",
                        d: "M17.395 14.445h-2.48v9.086h-3.758v-9.086H9.369V11.25h1.788V9.184c0-1.477.702-3.791 3.791-3.791l2.784.011v3.1h-2.02c-.331 0-.797.166-.797.87v1.88h2.808l-.328 3.19z"
                    }
                })])])]), t._v(" "), n("a", {
                    staticClass: "social-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber",
                        rel: "noreferrer",
                        "aria-label": "youtube xe phuong trang"
                    }
                }, [n("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(194),
                        alt: "youtube Icon"
                    }
                })]), t._v(" "), n("languageButton", {
                    staticClass: "lang-btn"
                })], 1), t._v(" "), n("userButton", {
                    staticClass: "user-button",
                    on: {
                        click: function(e) {
                            t.isActive = !1
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "nav-links"
                }, t._l(t.navigations, (function(e) {
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.getUrl(e) || e.routeTo && e.routeTo[t.locale],
                            expression: "\n            getUrl(navigation) ||\n              (navigation.routeTo && navigation.routeTo[locale])\n          "
                        }],
                        key: e.name,
                        staticClass: "link",
                        on: {
                            click: function(o) {
                                return t.navClicked(e)
                            }
                        }
                    }, [e.url ? n("a", {
                        attrs: {
                            target: "_blank",
                            href: t.getUrl(e),
                            rel: "noreferrer"
                        }
                    }, [n("div", {
                        staticClass: "link-inner"
                    }, [t._v("\n              " + t._s(t.localized[t.locale].nav[e.name]) + "\n            ")])]) : e.routeTo && e.routeTo[t.locale] ? n("nuxt-link", {
                        attrs: {
                            to: e.routeTo[t.locale]
                        }
                    }, [n("div", {
                        staticClass: "link-inner"
                    }, [t._v("\n              " + t._s(t.localized[t.locale].nav[e.name]) + "\n            ")])]) : t._e()], 1)
                })), 0)], 1)])], 1)
            }), [], !1, null, "4a2582ed", null).exports),
            V = o(204);

        function H(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function G(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? H(Object(source), !0).forEach((function(e) {
                    Object(m.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : H(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var $ = {
                components: {
                    FutaBusLinesIcon: P.a,
                    collapsedMenu: N,
                    languageButton: B,
                    Fragment: _.a,
                    userButton: T,
                    SearchBox: V.a
                },
                data: function() {
                    return {
                        navigations: v,
                        prevScrollpos: 0
                    }
                },
                mounted: function() {
                    this.prevScrollpos = window.pageYOffset, window.addEventListener("scroll", this.onScroll)
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.onScroll)
                },
                methods: {
                    getUrl: function(nav) {
                        return nav.url && nav.url[this.locale]
                    },
                    onScroll: function() {
                        var t = window.pageYOffset,
                            e = this.$refs.topBar;
                        if (e) {
                            var o = "function" == typeof e.getBoundingClientRect && e.getBoundingClientRect().height || 0;
                            this.prevScrollpos > t ? e.style.top = "0" : t > o && (e.style.top = "-100%")
                        }
                        this.prevScrollpos = t
                    }
                },
                computed: G(G({}, Object(x.e)({
                    locale: function(t) {
                        return t.locale
                    },
                    isPortrait: function(t) {
                        return t.isPortrait
                    }
                })), {}, {
                    localized: function() {
                        return h.a[this.locale].nav
                    },
                    isCollapsedMenuLayout: function() {
                        return this.isPortrait || w.a.isMobile()
                    }
                })
            },
            J = (o(360), Object(C.a)($, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "topBar",
                    staticClass: "top-bar",
                    attrs: {
                        id: "page-head"
                    }
                }, [n("div", {
                    staticClass: "top-bar-items"
                }, [n("div", {
                    staticClass: "top-bar-container"
                }, [n("ul", {
                    staticClass: "header-top-phone-mail"
                }, [n("div", {
                    staticClass: "logo-Mobile"
                }, [n("nuxt-link", {
                    staticClass: "col logo-main-link",
                    attrs: {
                        to: "/"
                    }
                }, [n("FutaBusLinesIcon", {
                    staticClass: "logo-main"
                })], 1)], 1), t._v(" "), t.isCollapsedMenuLayout ? t._e() : n("li", {
                    staticClass: "header-top-phone"
                }, [n("i", {
                    staticClass: "fa fa-phone",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), t._v(" "), n("a", {
                    attrs: {
                        href: "tel:19006067"
                    }
                }, [t._v("19006067")])]), t._v(" "), t.isCollapsedMenuLayout ? t._e() : n("li", {
                    staticClass: "header-top-email"
                }, [n("i", {
                    staticClass: "fa fa-envelope",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }), t._v(" "), n("a", {
                    attrs: {
                        href: "mailto:hotro@futabus.vn"
                    }
                }, [t._v("Hotro@futabus.vn")])])]), t._v(" "), n("div", {
                    staticClass: "col right-btns"
                }, [n("a", {
                    staticClass: "social-btn top-right-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.facebook.com/xephuongtrang",
                        rel: "noreferrer",
                        "aria-label": "facebook xephuongtrang"
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        viewBox: "0 0 28 28"
                    }
                }, [n("g", {
                    attrs: {
                        fill: "none"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "13.9",
                        cy: "13.9",
                        r: "13.9",
                        fill: "#3B5998"
                    }
                }), t._v(" "), n("path", {
                    attrs: {
                        fill: "#FFF",
                        d: "M17.395 14.445h-2.48v9.086h-3.758v-9.086H9.369V11.25h1.788V9.184c0-1.477.702-3.791 3.791-3.791l2.784.011v3.1h-2.02c-.331 0-.797.166-.797.87v1.88h2.808l-.328 3.19z"
                    }
                })])])]), t._v(" "), n("a", {
                    staticClass: "social-btn top-right-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber",
                        rel: "noreferrer"
                    }
                }, [n("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(194),
                        alt: "youtube Icon"
                    }
                })]), t._v(" "), n("languageButton", {
                    staticClass: "top-right-btn"
                }), t._v(" "), t.isCollapsedMenuLayout ? n("collapsedMenu", {
                    staticClass: "collapsed-menu"
                }) : n("userButton", {
                    staticClass: "top-right-btn"
                })], 1)])]), t._v(" "), t.isCollapsedMenuLayout ? t._e() : n("div", {
                    staticClass: "nav-container"
                }, [n("nuxt-link", {
                    staticClass: "col logo-main-link",
                    attrs: {
                        to: "/"
                    }
                }, [n("FutaBusLinesIcon", {
                    staticClass: "logo-main"
                })], 1), t._v(" "), n("div", {
                    attrs: {
                        id: "nav"
                    }
                }, t._l(t.navigations, (function(e) {
                    return n("Fragment", {
                        key: e.name,
                        staticClass: "links"
                    }, [t.getUrl(e) ? n("a", {
                        attrs: {
                            target: "_blank",
                            href: t.getUrl(e),
                            "aria-label": "xephuongtrang",
                            rel: "noopener"
                        }
                    }, [t._v(t._s(t.localized[e.name]))]) : e.routeTo && e.routeTo[t.locale] ? n("nuxt-link", {
                        attrs: {
                            to: e.routeTo[t.locale]
                        }
                    }, [t._v(t._s(t.localized[e.name]))]) : t._e()], 1)
                })), 1)], 1)])
            }), [], !1, null, "5778dee1", null));
        e.a = J.exports
    }, function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n = o(0),
            r = o(3),
            c = o(10);
        o(9);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m, f, v, h, x, w, k, y, _ = {
                computed: l(l({}, Object(r.e)({
                    locale: function(t) {
                        return t.locale
                    }
                })), {}, {
                    localized: function() {
                        return c.a[this.locale].contact
                    }
                })
            },
            O = (o(364), o(2)),
            z = Object(O.a)(_, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "left-container"
                }, [n("div", {
                    staticClass: "block-Hotline-BCT"
                }, [n("div", [n("p", {
                    staticClass: "left-content-title"
                }, [t._v("\n        " + t._s(t.localized.bookingCenterAndCustomerCare) + "\n      ")]), t._v(" "), t._m(0)]), t._v(" "), n("a", {
                    staticClass: "dangkyImg-link",
                    attrs: {
                        target: "_blank",
                        href: "http://www.online.gov.vn/CustomWebsiteDisplay.aspx?DocId=14037",
                        rel: "noreferrer"
                    }
                }, [n("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    staticClass: "dangkyImg",
                    attrs: {
                        "data-src": o(362),
                        alt: "d"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [n("p", {
                    staticClass: "desc-tit"
                }, [t._v(t._s(t.localized.title.toUpperCase()))]), t._v(" "), n("div", [n("span", {
                    staticClass: "tit-Phone"
                }, [t._v("\n        " + t._s(t.localized.phoneTit) + "\n        "), n("a", {
                    staticClass: "text-Phone",
                    attrs: {
                        href: "tel:02838386852"
                    }
                }, [t._v("028 3838 6852")])]), t._v("\n         \n      "), t._m(1)])]), t._v(" "), n("div", {
                    staticClass: "block-bottom"
                }, [n("div", {
                    staticClass: "connect-with-us"
                }, [n("p", {
                    staticClass: "content-title"
                }, [t._v(t._s(t.localized.connectWithUs))]), t._v(" "), n("a", {
                    staticClass: "social-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.facebook.com/xephuongtrang",
                        rel: "noreferrer"
                    }
                }, [n("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(363),
                        alt: "fIcon"
                    }
                })]), t._v(" "), n("a", {
                    staticClass: "social-btn",
                    attrs: {
                        target: "_blank",
                        href: "https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber",
                        rel: "noreferrer"
                    }
                }, [n("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(194),
                        alt: "youtube Icon"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "download-App"
                }, [n("p", {
                    staticClass: "content-title"
                }, [t._v(t._s(t.localized.downloadApp))]), t._v(" "), n("div", {
                    staticClass: "block-App"
                }, [n("a", {
                    staticClass: "app-Store",
                    attrs: {
                        href: "http://onelink.to/futa.ios",
                        target: "_blank",
                        rel: "noreferrer"
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "24",
                        viewBox: "0 0 20 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "#FFF",
                        d: "M18.996 8.073l.367.552-.528.4c-.756.57-2.134 1.609-2.134 3.668 0 2.439 1.561 3.377 2.31 3.828.332.2.674.405.674.854 0 .293-2.34 6.589-5.738 6.589-.831 0-1.42-.25-1.938-.47-.524-.224-.977-.416-1.724-.416-.38 0-.859.18-1.366.37-.694.258-1.479.552-2.37.552h-.022C2.955 23.98 0 16.688 0 12.975 0 6.909 4.55 5.58 6.304 5.58c.79 0 1.634.31 2.379.585.52.191 1.058.39 1.358.39.179 0 .601-.17.974-.317.795-.316 1.785-.71 2.937-.71.867 0 3.476.19 5.044 2.544zM14.312 0c.088 3.191-2.194 5.405-4.473 5.266C9.463 2.719 12.118 0 14.312 0z"
                    }
                })]), t._v(" "), n("p", [t._v("App Store")])]), t._v(" "), n("a", {
                    staticClass: "app-CHPlay",
                    attrs: {
                        href: "http://onelink.to/futa.android",
                        rel: "noreferrer",
                        target: "_blank"
                    }
                }, [n("svg", {
                    attrs: {
                        width: "16px",
                        height: "24px",
                        viewBox: "0 0 22 24",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("title", [t._v("icon_google_play")]), t._v(" "), n("desc", [t._v("Created with Sketch.")]), t._v(" "), n("g", {
                    attrs: {
                        id: "FUTA-busline",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [n("g", {
                    attrs: {
                        id: "Futa-busline_phone_Popup",
                        transform: "translate(-70.000000, -206.000000)",
                        fill: "#FFFFFF",
                        "fill-rule": "nonzero"
                    }
                }, [n("g", {
                    attrs: {
                        id: "Group-7",
                        transform: "translate(0.000000, 94.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        id: "Group-2-Copy",
                        transform: "translate(16.000000, 104.000000)"
                    }
                }, [n("g", {
                    attrs: {
                        id: "Group-15",
                        transform: "translate(54.000000, 8.000000)"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M3.23915625,0.305859375 C2.620875,-0.066328125 1.884,-0.099609375 1.24134375,0.210234375 L12.0165,11.0083594 L15.539625,7.46882813 L3.23915625,0.305859375 Z M0.25134375,1.20960937 C0.11540625,1.49742187 0.04228125,1.81757812 0.04228125,2.14710937 L0.04228125,21.8992969 C0.04228125,22.2302344 0.115875,22.5457031 0.25321875,22.8274219 L11.0241563,12.0053906 L0.25134375,1.20960937 Z M12.0179531,13.0010156 L1.26014063,23.8099219 C1.54560938,23.9421094 1.84935938,23.9997656 2.15264063,23.9997656 C2.52717188,23.9997656 2.90076563,23.9102344 3.23920313,23.7067969 L15.5420156,16.5330469 L12.0179531,13.0010156 Z M20.2243594,10.1969531 C20.2201406,10.1941406 20.2154531,10.1913281 20.2112344,10.1889844 L16.7959219,8.20007813 L13.0098281,12.0039844 L16.7982656,15.8003906 C16.7982656,15.8003906 20.2201406,13.8053906 20.2243594,13.8030469 C20.8595156,13.4172656 21.2387344,12.7432031 21.2387344,11.9997656 C21.2387344,11.2563281 20.8595156,10.5822656 20.2243594,10.1969531 Z",
                        id: "icon_google_play"
                    }
                })])])])])])]), t._v(" "), n("p", [t._v("CH Play")])])])])])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("p", {
                    staticClass: "phoneNumber"
                }, [e("a", {
                    attrs: {
                        href: "tel:1900 6067"
                    }
                }, [this._v("1900 6067")])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "tit-Phone"
                }, [this._v("\n        Fax:\n        "), e("a", {
                    staticClass: "text-Phone",
                    attrs: {
                        href: "tel:02838386853"
                    }
                }, [this._v("028 3838 6853")])])
            }], !1, null, "c4787510", null).exports,
            j = o(1);

        function I(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var C = [{
                title: "about_us",
                route: (m = {}, Object(n.a)(m, j.d.EN, "/about-us.html"), Object(n.a)(m, j.d.VI, "/ve-xe-phuong-trang-ve-chung-toi.html"), m)
            }, {
                title: "routes",
                route: (f = {}, Object(n.a)(f, j.d.EN, "/route.html"), Object(n.a)(f, j.d.VI, "/ve-xe-phuong-trang-lich-trinh.html"), f)
            }, {
                title: "news",
                route: Object(n.a)({}, j.d.VI, "/ve-xe-phuong-trang-tin-tuc.html")
            }, {
                title: "recruitment",
                url: "https://vieclam.futabus.vn/"
            }, {
                title: "search_booking",
                route: (v = {}, Object(n.a)(v, j.d.EN, "/search-booking.html"), Object(n.a)(v, j.d.VI, "/ve-xe-phuong-trang-tra-cuu-thong-tin-dat-ve.html"), v)
            }],
            B = [{
                title: "terms",
                route: (h = {}, Object(n.a)(h, j.d.EN, "/terms-of-use.html"), Object(n.a)(h, j.d.VI, "/ve-xe-phuong-trang-dieu-khoan-su-dung.html"), h)
            }, {
                title: "faq",
                route: (x = {}, Object(n.a)(x, j.d.EN, "/faq.html"), Object(n.a)(x, j.d.VI, "/cau-hoi-thuong-gap.html"), x)
            }, {
                title: "booking_guide_web",
                route: (w = {}, Object(n.a)(w, j.d.EN, "/booking-guide.html"), Object(n.a)(w, j.d.VI, "/ve-xe-phuong-trang-huong-dan-dat-ve.html"), w)
            }, {
                title: "booking_guide_app",
                route: (k = {}, Object(n.a)(k, j.d.EN, "/booking-guide-app-futa-busline.html"), Object(n.a)(k, j.d.VI, "/huong-dan-su-dung-app-futa-busline.html"), k)
            }, {
                title: "branchList",
                route: (y = {}, Object(n.a)(y, j.d.EN, "/contact.html"), Object(n.a)(y, j.d.VI, "/ve-xe-phuong-trang-lien-he.html"), y),
                query: {
                    hideContact: !0
                }
            }],
            P = {
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? I(Object(source), !0).forEach((function(e) {
                            Object(n.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : I(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(r.e)({
                    locale: function(t) {
                        return t.locale
                    }
                })),
                data: function() {
                    return {
                        items1: C,
                        items2: B
                    }
                },
                methods: {
                    getTitle: function(t) {
                        return c.a[this.locale].nav[t]
                    }
                }
            },
            A = (o(366), Object(O.a)(P, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "containter"
                }, [o("p", {
                    staticClass: "content-title"
                }, [t._v("FUTA Bus Lines")]), t._v(" "), o("div", {
                    staticClass: "item-list-container"
                }, [o("div", {
                    staticClass: "item-list list1"
                }, t._l(t.items1, (function(e, n) {
                    return o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.url || e.route && e.route[t.locale],
                            expression: "item.url || (item.route && item.route[locale])"
                        }],
                        key: n,
                        staticClass: "item"
                    }, [e.url ? o("a", {
                        attrs: {
                            target: "_blank",
                            href: e.url,
                            rel: "noreferrer"
                        }
                    }, [o("i", {
                        staticClass: "fa fa-angle-double-right"
                    }), t._v("\n          " + t._s(t.getTitle(e.title)) + "\n        ")]) : o("nuxt-link", {
                        attrs: {
                            to: {
                                path: e.route[t.locale],
                                query: e.query
                            }
                        }
                    }, [o("i", {
                        staticClass: "fa fa-angle-double-right"
                    }), t._v("\n          " + t._s(t.getTitle(e.title)) + "\n        ")])], 1)
                })), 0), t._v(" "), o("div", {
                    staticClass: "item-list list2"
                }, t._l(t.items2, (function(e, n) {
                    return o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.url || e.route && e.route[t.locale],
                            expression: "item.url || (item.route && item.route[locale])"
                        }],
                        key: n,
                        staticClass: "item"
                    }, [e.url ? o("a", {
                        attrs: {
                            target: "_blank",
                            href: e.url,
                            rel: "noreferrer"
                        }
                    }, [o("i", {
                        staticClass: "fa fa-angle-double-right"
                    }), t._v("\n          " + t._s(t.getTitle(e.title)) + "\n        ")]) : o("nuxt-link", {
                        attrs: {
                            to: {
                                path: e.route[t.locale],
                                query: e.query
                            }
                        }
                    }, [o("i", {
                        staticClass: "fa fa-angle-double-right"
                    }), t._v("\n          " + t._s(t.getTitle(e.title)) + "\n        ")])], 1)
                })), 0)])])
            }), [], !1, null, "52cc8afa", null).exports),
            D = (o(372), Object(O.a)({}, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "row"
                }, [e("div", {
                    staticClass: "col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12 app"
                }, [e("a", {
                    staticClass: "app-link",
                    attrs: {
                        target: "_blank",
                        href: "https://futabus.vn",
                        rel: "noreferrer",
                        "aria-label": "app"
                    }
                }, [e("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(368),
                        alt: "FUTA Bus Lines logo"
                    }
                })])]), this._v(" "), e("div", {
                    staticClass: "col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12 app"
                }, [e("a", {
                    staticClass: "app-link",
                    attrs: {
                        target: "_blank",
                        href: "https://futaexpress.vn/",
                        rel: "noreferrer",
                        "aria-label": "app"
                    }
                }, [e("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(369),
                        alt: "FUTA Express logo"
                    }
                })])]), this._v(" "), e("div", {
                    staticClass: "col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12 app"
                }, [e("a", {
                    staticClass: "app-link",
                    attrs: {
                        target: "_blank",
                        href: "http://futataxi.vn/",
                        rel: "noreferrer",
                        "aria-label": "app"
                    }
                }, [e("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(370),
                        alt: "FUTA Taxi logo"
                    }
                })])]), this._v(" "), e("div", {
                    staticClass: "col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ms-12 app"
                }, [e("a", {
                    staticClass: "app-link",
                    attrs: {
                        rel: "noreferrer",
                        "aria-label": "app"
                    }
                }, [e("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": o(371),
                        alt: "FUTA Advertising logo"
                    }
                })])])])
            }), [], !1, null, "f36adcf0", null).exports),
            L = o(5),
            S = o.n(L);

        function U(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function X(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? U(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : U(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var M = {
                components: {
                    LeftContent: z,
                    SiteMapList: A,
                    AppList: D
                },
                computed: X(X({}, Object(r.e)({
                    locale: function(s) {
                        return s.locale
                    }
                })), {}, {
                    currentYear: function() {
                        return S()().format("YYYY")
                    },
                    localized: function() {
                        return c.a[this.locale].contact
                    }
                })
            },
            R = (o(374), Object(O.a)(M, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "footer",
                    attrs: {
                        id: "page-footer"
                    }
                }, [o("div", {
                    staticClass: "row-container"
                }, [o("LeftContent"), t._v(" "), o("SiteMapList")], 1), t._v(" "), o("AppList"), t._v(" "), o("p", {
                    staticClass: "license"
                }, [t._v("© " + t._s(t.currentYear) + t._s(t.localized.banQuyen))])], 1)
            }), [], !1, null, "5b1f51eb", null));
        e.a = R.exports
    }, , , , function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n = o(0),
            r = o(3),
            c = o(10);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m = {
                computed: l(l({}, Object(r.e)({
                    locale: function(t) {
                        return t.locale
                    },
                    isShowError: function(t) {
                        return t.isShowError
                    },
                    errorMsg: function(t) {
                        return t.errorMsg
                    },
                    errorMsgKeys: function(t) {
                        return t.errorMsgKeys
                    },
                    isShowNotify: function(s) {
                        return s.isShowNotify
                    }
                })), {}, {
                    localized: function() {
                        return c.a[this.locale].errorMessages
                    },
                    error: function() {
                        var t = this;
                        if (this.errorMsgKeys.length) {
                            var e = "";
                            return this.errorMsgKeys.forEach((function(o) {
                                var n = t.localized[o];
                                e += (n || o) + "\n"
                            })), e.slice(0, -1)
                        }
                        return this.localized[this.errorMsg] || this.errorMsg
                    }
                }),
                methods: l(l({}, Object(r.d)({
                    set_isShowError: "set_isShowError"
                })), {}, {
                    CloseError: function() {
                        this.set_isShowError(!1)
                    }
                })
            },
            f = (o(378), o(2)),
            component = Object(f.a)(m, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "flashpool",
                    class: {
                        show: this.isShowError || this.isShowNotify, green: this.isShowNotify
                    },
                    on: {
                        click: this.CloseError
                    }
                }, [e("pre", {
                    staticClass: "message-text"
                }, [this._v(this._s(this.error))])])
            }), [], !1, null, "27e39dc8", null);
        e.a = component.exports
    }, function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n, r = o(0),
            c = o(3),
            d = o(10);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var f = {
                components: {
                    loader: o(86).a
                },
                computed: m(m({}, Object(c.e)({
                    loading: function(s) {
                        return s.loading
                    },
                    locale: function(s) {
                        return s.locale
                    },
                    loadingMsg: function(s) {
                        return s.loadingMsg
                    }
                })), {}, {
                    localized: function() {
                        return d.a[this.locale]
                    },
                    msg: function() {
                        return this.localized.loadingMessages[this.loadingMsg] || this.localized.loading
                    }
                }),
                methods: {
                    onClicked: function(t) {
                        t.stopPropagation()
                    }
                },
                watch: {
                    loading: function(t) {
                        n && clearTimeout(n), n = void 0
                    }
                }
            },
            v = (o(380), o(2)),
            component = Object(v.a)(f, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "loading-pane-container",
                    class: {
                        hide: !this.loading
                    },
                    on: {
                        click: this.onClicked
                    }
                }, [e("loader", {
                    attrs: {
                        msg: this.msg
                    }
                })], 1)
            }), [], !1, null, "6790cee8", null);
        e.a = component.exports
    }, function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n = o(0),
            r = o(3),
            c = o(10);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m = {
                computed: l(l({}, Object(r.e)({
                    locale: function(s) {
                        return s.locale
                    },
                    confirmPopup: function(s) {
                        return s.confirmPopup
                    }
                })), {}, {
                    localized: function() {
                        return c.a[this.locale].confirmPopup
                    }
                }),
                methods: l(l({}, Object(r.d)({
                    set_confirm_popup: "set_confirm_popup"
                })), {}, {
                    confirmClicked: function() {
                        var t, e = this.confirmPopup;
                        this.set_confirm_popup(l(l({}, e), {}, {
                            show: !1
                        })), null == e || null === (t = e.callback) || void 0 === t || t.call(e)
                    },
                    cancelClicked: function() {
                        var t = this.confirmPopup;
                        this.set_confirm_popup(l(l({}, t), {}, {
                            show: !1
                        }))
                    }
                })
            },
            f = (o(382), o(2)),
            component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return t.confirmPopup.show ? o("div", {
                    staticClass: "cover"
                }, [o("div", {
                    staticClass: "box"
                }, [o("p", {
                    staticClass: "title"
                }, [t._v(t._s(t.localized[t.confirmPopup.type].title))]), t._v(" "), o("p", {
                    staticClass: "message"
                }, [t._v(t._s(t.localized[t.confirmPopup.type].message))]), t._v(" "), o("div", {
                    staticClass: "buttons"
                }, [o("button", {
                    staticClass: "confirm",
                    on: {
                        click: t.confirmClicked
                    }
                }, [t._v("\n        " + t._s(t.localized.confirm) + "\n      ")]), t._v(" "), o("button", {
                    staticClass: "cancel",
                    on: {
                        click: t.cancelClicked
                    }
                }, [t._v("\n        " + t._s(t.localized.cancel) + "\n      ")])])])]) : t._e()
            }), [], !1, null, "4a3e0945", null);
        e.a = component.exports
    }, function(t, e, o) {
        "use strict";
        o(20), o(17), o(13), o(12), o(18);
        var n = o(0),
            r = o(3);
        o(9);

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var d = {
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) {
                            Object(n.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(r.e)({
                    isMobile: function(s) {
                        return s.isMobile
                    }
                }))
            },
            l = (o(385), o(2)),
            component = Object(l.a)(d, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.isMobile,
                        expression: "isMobile"
                    }],
                    staticClass: "btn-quick-alo-phone btn-quick-alo-green btn-quick-alo-show phone-mobile edit_btn_quick_phone position_0 big_size_button left_position"
                }, [e("a", {
                    staticClass: "phone",
                    attrs: {
                        href: "tel:19006067"
                    }
                }, [e("div", {
                    staticClass: "btn-quick-alo-ph-circle edit_btn_quick_ph_circle"
                }), this._v(" "), e("div", {
                    staticClass: "btn-quick-alo-ph-circle-fill edit_btn_quick_ph_circle_fill"
                }), this._v(" "), e("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    staticClass: "btn-quick-alo-ph-img-circle edit_btn_quick_ph_img_circle",
                    attrs: {
                        "data-src": o(384),
                        alt: "Vé xe Phương Trang | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067"
                    }
                })])])
            }), [], !1, null, "68ac1694", null);
        e.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        var content = o(311);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("f52d43e0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ":root{--tomato:#ef5222}body,html{min-height:100%;height:100%}body::-webkit-scrollbar{display:none}body,div,p,span{font-family:SFProText}button:focus{outline:none!important}input{padding:0 0 0 4px}input:focus{outline:none}div{-ms-overflow-style:none;scrollbar-width:none}div,p{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div::-webkit-scrollbar{display:none}div::-webkit-scrollbar-track{background:#f1f1f1}div::-webkit-scrollbar-thumb{background:#ef5222;border-radius:4px;cursor:pointer}.disabled{color:grey;pointer-events:none;background:grey;opacity:.1;opacity:.1!important;background-color:grey!important}.disabled :hover,input[disabled]{cursor:not-allowed!important}.page-container{display:flex;max-width:936px;width:inherit;flex-direction:column;justify-content:center;align-items:center;align-self:center}.grecaptcha-badge{visibility:hidden}@media print{iframe,iframe *{display:none!important}}blockquote{padding:21px 30px 18px;border-left:5px solid #e28c22;background:#f2f2f2;font-size:16px;line-height:26px;color:#212121;font-style:italic;width:100%}.modal{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.modal-dialog{margin:auto!important}.modal-body{max-height:80vh;overflow-y:auto}.modal-header{justify-content:center!important;align-items:center!important}.calendars-container{box-shadow:0 0 12px -3px #000}.calendars-container td:hover{background-color:#bbd5ec;transition:background-color .1s ease-out}.top-banner-container img,.top-img{width:100vw;-o-object-fit:cover;object-fit:cover;min-height:120px}@media (max-width:768px){input,select,textarea{font-size:16px!important}}", ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(313);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(15).default)("c3ae2b30", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(14),
            r = o(95),
            c = o(314),
            d = o(315),
            l = o(316),
            m = o(317),
            f = o(318),
            v = o(319),
            h = o(320);
        e = n(!1);
        var x = r(c),
            w = r(d),
            k = r(l),
            y = r(m),
            _ = r(f),
            O = r(v),
            z = r(h);
        e.push([t.i, '@font-face{font-family:"SFProText";src:url(' + x + ');font-weight:400;font-display:swap}@font-face{font-family:"SFProText";src:url(' + w + ');font-weight:700;font-display:swap}@font-face{font-family:"SFProText";src:url(' + k + ');font-weight:900;font-display:swap}@font-face{font-family:"FontAwesome";src:url(' + y + ");src:url(" + y + ') format("embedded-opentype"),url(' + _ + ') format("woff2"),url(' + O + ') format("woff"),url(' + z + ') format("truetype");font-weight:400;font-style:normal;font-display:swap}', ""]), t.exports = e
    }, function(t, e, o) {
        t.exports = o.p + "fonts/SFProText.85bd46c.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/SFProText-Bold.d6079ef.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/SFProText-Heavy.6c49879.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fontawesome-webfont.f7c2b4b.eot"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fontawesome-webfont.97493d3.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fontawesome-webfont.d9ee23d.woff"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fontawesome-webfont.706450d.ttf"
    }, , function(t, e, o) {
        t.exports = o.p + "img/zalopay.2047a03.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/futapay.9f18227.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/jcb.f23c1f0.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/master.89b733c.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/visa.08b8923.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/napas.d89127a.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/vnpay.87d30d4.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/momo.04fccd8.png"
    }, , , function(t, e, o) {
        "use strict";
        var n = o(122);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".lang-btn[data-v-41c4dd7e]{border:none;background:none;align-items:center}.lang-btn[data-v-41c4dd7e],.lang-btn a[data-v-41c4dd7e]{display:flex}.lang-btn[data-v-41c4dd7e]:focus{outline:none}.text[data-v-41c4dd7e]{margin-left:8px}.lang-btn.top-right-btn span[data-v-41c4dd7e]{margin:0 3px}.lang-btn svg[data-v-41c4dd7e]{margin-left:0}@media (max-width:768px){.lang-btn>span[data-v-41c4dd7e]{display:none}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(123);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".toggle-menu[data-v-5f261f91]{width:32px;height:32px;position:relative;border:none;background:none}.toggle-menu[data-v-5f261f91]:focus{outline:0}.toggle-menu i[data-v-5f261f91]{position:absolute;display:block;width:28px;height:4px;border-radius:2px;background-color:#ceced3;left:0;transition:all .3s}.toggle-menu i[data-v-5f261f91]:first-child{top:25%}.toggle-menu i[data-v-5f261f91]:nth-child(2){top:50%}.toggle-menu i[data-v-5f261f91]:nth-child(3){top:75%}.toggle-menu.active i[data-v-5f261f91]:first-child{top:50%;transform:rotate(45deg)}.toggle-menu.active i[data-v-5f261f91]:nth-child(2){background:transparent}.toggle-menu.active i[data-v-5f261f91]:nth-child(3){top:50%;transform:rotate(-45deg)}", ""]), t.exports = e
    }, , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        var n = o(128);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".loader-container[data-v-e266567a]{display:flex!important;justify-content:center;align-items:center;flex-direction:column}.loader[data-v-e266567a]{border-bottom:16px solid #1f8456;border-top:16px solid #1f8456;border-radius:50%;border-color:#ef5222 #1f8456;border-style:solid;border-width:16px;width:120px;height:120px;-webkit-animation:spin-data-v-e266567a 2s linear infinite;animation:spin-data-v-e266567a 2s linear infinite;margin:30px}.text[data-v-e266567a]{text-transform:uppercase;font-weight:700;font-size:clamp(16px,6vw,22px)}@-webkit-keyframes spin-data-v-e266567a{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-e266567a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dot[data-v-e266567a]{opacity:0;-webkit-animation:showHideDot-data-v-e266567a 1s ease-in-out infinite;animation:showHideDot-data-v-e266567a 1s ease-in-out infinite}.dot.one[data-v-e266567a]{-webkit-animation-delay:.2s;animation-delay:.2s}.dot.two[data-v-e266567a]{-webkit-animation-delay:.4s;animation-delay:.4s}.dot.three[data-v-e266567a]{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes showHideDot-data-v-e266567a{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}@keyframes showHideDot-data-v-e266567a{0%{opacity:0}50%{opacity:1}60%{opacity:1}to{opacity:0}}", ""]), t.exports = e
    }, , , , , function(t, e, o) {
        "use strict";
        var n = o(131);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".signin-btn[data-v-6f990524]{border-radius:4px;background-color:#ec2029;color:#fff;font-size:12px;font-weight:700;transition:.3s;display:flex;align-items:center;border:0;padding:3px 10px;min-width:116px;fill:#fff}.signin-btn i[data-v-6f990524]{margin-right:4px}.signin-btn div[data-v-6f990524]{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.signin-btn>span[data-v-6f990524]{font-size:13px;text-transform:capitalize;padding:0 8px;width:100%;display:flex;justify-content:center;color:#fff;font-weight:300}.signed[data-v-6f990524]{color:#fff;background-color:#ef5222}.signin-button-container[data-v-6f990524]{position:relative}.menu-container[data-v-6f990524]{display:flex;flex-direction:column;position:absolute;top:110%;right:0;background:#fff;border-radius:8px;box-shadow:0 0 4px 0 rgba(0,0,0,.24);background-color:#fff;z-index:10000;visibility:hidden;transition:.1s ease-out;transform:scaleY(0);transform-origin:top;color:#111}.context-menu-button[data-v-6f990524]{display:flex;align-items:center;color:#768092;fill:#768092;width:100%;background:none;white-space:nowrap;text-align:left;border:none;border-bottom:1px solid #f5f5f5;padding:16px 10px;transition:.3s ease-out;font-size:15px}.context-menu-button span[data-v-6f990524]{height:18px}.show[data-v-6f990524]{visibility:visible;transform:scaleY(1);transition:.1s ease-out}.portrait[data-v-6f990524]{left:0;right:auto}.buttons .context-menu-button[data-v-6f990524]:last-child{border:none}.buttons .context-menu-button[data-v-6f990524]:hover{background-color:rgba(239,82,34,.07451);color:rgba(239,82,34,.65098);fill:rgba(239,82,34,.65098);transition:.3s ease-out}.buttons .context-menu-button.active-link[data-v-6f990524]{background-color:rgba(239,82,34,.12157);color:#ef5222;fill:#ef5222}.menu-container .user[data-v-6f990524]{width:100%;text-align:center;padding:10px 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.user-name[data-v-6f990524]{font-size:20px;font-weight:500;text-align:center;color:#111}.menu-icon[data-v-6f990524]{width:24px;height:24px;margin:0 10px;font-size:24px}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(132);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".menu-container[data-v-4a2582ed]{width:100%;height:100%;position:fixed;left:-100%;top:0;z-index:9998}.menu-container[data-v-4a2582ed],.open[data-v-4a2582ed]{transition:.2s ease-out}.open[data-v-4a2582ed]{left:0}.open .menu-inner[data-v-4a2582ed]{box-shadow:0 10px 300px #000}.menu-inner[data-v-4a2582ed]{background-color:#f6f6f6;height:100%;width:200px;display:flex;flex-direction:column;align-items:center}.logo-main[data-v-4a2582ed]{width:100%;cursor:pointer;display:table;margin:5px auto}.round-btns[data-v-4a2582ed]{flex-direction:row;display:flex;align-items:center;justify-content:center;width:100%;margin:16px 0}.social-btn[data-v-4a2582ed]{margin-right:10px;width:25px;height:25px}.lang-btn[data-v-4a2582ed]{border:none;background:none;display:flex}.nav-links[data-v-4a2582ed]{display:flex;flex-direction:column;align-self:flex-start;text-align:left;width:100%}.link[data-v-4a2582ed]{list-style:none;font-size:16px;color:#637280;width:100%;padding-bottom:4px;border-bottom:1px solid #e0e0e0}.link[data-v-4a2582ed]:hover{cursor:pointer;background-image:linear-gradient(90deg,#fff,#ffb093);text-decoration:underline}.link-inner[data-v-4a2582ed]{height:100%;width:100%;padding:8px 8px 8px 16px}.nav-links a[data-v-4a2582ed]{font-size:16px;color:#637280;white-space:nowrap}.nav-links a.active-link[data-v-4a2582ed]{font-size:16px;color:#f15a24}.user-button[data-v-4a2582ed]{margin:4px auto 8px}", ""]), t.exports = e
    }, , , function(t, e, o) {
        "use strict";
        var n = o(134);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".top-bar[data-v-5778dee1]{width:100vw;background-color:#fff;flex-direction:column;z-index:100;transition:top .3s;position:-webkit-sticky;position:sticky;top:0;box-shadow:0 1px 4px 0 rgb(128 128 128/20%)}.top-bar[data-v-5778dee1],.top-bar-items[data-v-5778dee1]{display:flex;justify-content:center;align-items:center}.top-bar-items[data-v-5778dee1]{width:100%;background-color:#00613c;padding:2px 0}.top-bar-container[data-v-5778dee1]{max-width:936px;width:100vw;display:flex;align-items:center}.logo-main-link[data-v-5778dee1]{height:48px;align-items:center;display:flex}.logo-main[data-v-5778dee1]{max-width:unset;-o-object-fit:contain;object-fit:contain;cursor:pointer}.logo-Mobile .logo-main[data-v-5778dee1]{margin-left:8px}.right-btns[data-v-5778dee1]{justify-content:flex-end;padding:0}.nav-container[data-v-5778dee1],.right-btns[data-v-5778dee1]{display:flex;align-items:center}.nav-container[data-v-5778dee1]{flex-direction:row;position:relative;z-index:1;margin:10px 0;max-width:936px;width:100vw}#nav[data-v-5778dee1]{display:flex;justify-content:space-around;align-items:center;width:-webkit-fill-available}.nav-links[data-v-5778dee1]{display:flex;justify-content:flex-end;flex-wrap:wrap;-ms-overflow-style:none;scrollbar-width:none}.logo-Mobile[data-v-5778dee1],.nav-links[data-v-5778dee1]::-webkit-scrollbar{display:none}.links[data-v-5778dee1]{list-style:none;font-size:16px;font-weight:400;color:#637280;text-shadow:0 0 0 #fff;width:150px;text-align:center}#nav a[data-v-5778dee1]{text-transform:uppercase;font-size:13px;color:#656665;font-weight:600;white-space:nowrap;padding:7px auto;display:flex;justify-content:center;align-items:center;line-height:15px;border-radius:20px;letter-spacing:.5px}#nav a.active-link[data-v-5778dee1],#nav a[data-v-5778dee1]:hover{color:#ef5222;transition:.3s}.links[data-v-5778dee1]:hover{text-shadow:0 0 1px #fff}table tr[data-v-5778dee1]{width:100%}.social-btn[data-v-5778dee1]{width:25px;height:25px;border:none;background:none;padding:0;margin:0}.social-btn img[data-v-5778dee1]{height:auto}.collapsed-menu[data-v-5778dee1]{margin-left:16px}.top-right-btn[data-v-5778dee1]{margin-left:16px;display:flex;align-items:center;color:#fff}.header-top-phone-mail[data-v-5778dee1]{list-style:none;display:flex;color:#fff;margin:0;padding-left:0}.header-top-phone-mail a[data-v-5778dee1]{color:#fff}.header-top-phone[data-v-5778dee1]{margin-right:20px}@media (max-width:1024px){.header-top-phone-mail a[data-v-5778dee1]{padding:0}}@media (max-width:768px){.top-bar-items[data-v-5778dee1]{background-color:#fff}.logo-Mobile[data-v-5778dee1]{display:block}.right-btns .social-btn[data-v-5778dee1]{display:none}.lang-btn[data-v-5778dee1]{color:#00643f}}@media (max-width:640px){.menu-inner[data-v-5778dee1]{width:400px}.header-top-phone-mail[data-v-5778dee1]{padding:0}.item-collapse .collapse[data-v-5778dee1]{height:90px}}@media (max-width:372px){.social-btn[data-v-5778dee1]{display:none}}", ""]), t.exports = e
    }, function(t, e, o) {
        t.exports = o.p + "img/DaDangKy.108643c.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/footer-fb.095a727.png"
    }, function(t, e, o) {
        "use strict";
        var n = o(135);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".left-container[data-v-c4787510]{padding-right:60px}.block-Hotline-BCT[data-v-c4787510]{align-items:flex-end;flex-wrap:wrap}.block-bottom[data-v-c4787510],.block-Hotline-BCT[data-v-c4787510]{display:flex;justify-content:space-between}.block-bottom[data-v-c4787510]{flex-direction:row;align-items:center}.left-content-title[data-v-c4787510]{font-size:12px;font-weight:700;color:#637280;text-transform:uppercase}.left-content-title[data-v-c4787510],.phoneNumber[data-v-c4787510]{font-family:SFProText;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal}.phoneNumber[data-v-c4787510]{font-size:36px;font-weight:900;color:#f15a24;white-space:nowrap}.dangkyImg-link[data-v-c4787510]{width:128px!important;height:48px!important;margin-bottom:8px}.text-Phone[data-v-c4787510]{color:#00613d;white-space:nowrap;line-height:24px}.tit-Phone[data-v-c4787510]{color:#637280;white-space:nowrap}.content-title[data-v-c4787510]{font-family:SFProText;font-size:12px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#f15a24;text-transform:uppercase}.block-App[data-v-c4787510]{display:flex}.block-App a[data-v-c4787510]{display:flex;align-items:center;padding:2px 10px;border-radius:14px;color:#fff;font-size:12px}a.app-Store[data-v-c4787510]{background-color:#111;margin-right:8px}a.app-CHPlay[data-v-c4787510]{background-color:#4cb508}.block-App a p[data-v-c4787510]{margin-bottom:0;margin-left:6px}.desc-tit[data-v-c4787510]{font-weight:500}.desc[data-v-c4787510]{line-height:1;letter-spacing:normal;margin-bottom:20px}.desc[data-v-c4787510],.install-title[data-v-c4787510]{color:#637280}.install-btn[data-v-c4787510]{border:none;background:none}.store-img[data-v-c4787510]{width:91px;height:19px;-o-object-fit:contain;object-fit:contain}@media (max-width:700px){.block-bottom[data-v-c4787510]{margin-bottom:20px}}@media (max-width:690px){.left-container[data-v-c4787510]{padding-right:0}}.social-btn[data-v-c4787510]{margin-right:10px}.social-btn img[data-v-c4787510]{height:25px}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(136);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".containter[data-v-52cc8afa]{display:flex;flex-direction:column}.content-title[data-v-52cc8afa]{font-weight:700;color:#f15a24}.item-list-container[data-v-52cc8afa]{display:flex;flex-direction:row;flex-wrap:wrap}.item-list[data-v-52cc8afa]{padding-right:80px;max-width:170px;overflow:visible}@media (max-width:825px){.item-list-container[data-v-52cc8afa]{flex-direction:column;flex-wrap:nowrap}}@media (max-width:768px){.item-list[data-v-52cc8afa]{padding-right:0}}@media (max-width:693px){.item-list-container[data-v-52cc8afa]{flex-direction:row;flex-wrap:wrap}.item-list[data-v-52cc8afa]{padding-right:50px}}@media (max-width:420px){.item-list[data-v-52cc8afa]{padding-right:50px}}@media (max-width:350px){.item-list[data-v-52cc8afa]{padding-right:30px}}.list1[data-v-52cc8afa]{margin-right:10px}.list2[data-v-52cc8afa]{padding-right:0}.item[data-v-52cc8afa]{margin-bottom:16px}.item a[data-v-52cc8afa]{font-size:14px;color:#637280;white-space:nowrap}", ""]), t.exports = e
    }, function(t, e, o) {
        t.exports = o.p + "img/logo-buslines.0e80a74.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/logo-express.f96eb6f.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/logo-taxi.2363c3b.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/logo-advertising.351de5e.png"
    }, function(t, e, o) {
        "use strict";
        var n = o(137);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".row[data-v-f36adcf0]{overflow:auto;flex-direction:row;max-width:937px;margin:auto;font-size:16px;font-weight:600;color:#f15a24;flex-wrap:wrap;width:inherit;border-bottom:1px solid #637280}.app-link[data-v-f36adcf0],.row[data-v-f36adcf0]{justify-content:center;display:flex}.app-link[data-v-f36adcf0]{align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:4px 4px 12px}.app-icon[data-v-f36adcf0]{height:54px}@media (min-width:720px){.app[data-v-f36adcf0]{display:flex;justify-content:center}}@media (max-width:640px){.row-app[data-v-f36adcf0]{padding-left:16px;padding-right:16px;justify-content:space-around}.app-link[data-v-f36adcf0]{margin:0 0 10px}.app-icon[data-v-f36adcf0]{height:50px}}.vato[data-v-f36adcf0]{margin-left:8px}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(138);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".footer[data-v-5b1f51eb]{width:100%;border-bottom:none;background-color:#f6f6f6;display:flex;flex-direction:column;justify-content:center;align-items:center;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;font-weight:400;font-family:SFProText;font-size:14px;top:100%;position:-webkit-sticky;position:sticky;border-top:.5px solid hsla(0,0%,59.2%,.5)}.row-container[data-v-5b1f51eb]{width:inherit;padding:24px 16px;max-width:937px;display:flex;flex-direction:row;flex-wrap:wrap}.license[data-v-5b1f51eb]{margin:16px auto 24px;max-width:937px;font-size:13px;color:#637280;text-align:center;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal}", ""]), t.exports = e
    }, , , function(t, e, o) {
        "use strict";
        var n = o(140);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".flashpool[data-v-27e39dc8]{position:fixed;max-height:400px;max-width:250px;padding:10px;z-index:9999999999!important;bottom:300px;background-color:#ef5222;right:-100%;opacity:0;transition:.3s ease-out}.green[data-v-27e39dc8]{background-color:green}.flashpool.show[data-v-27e39dc8]{right:20px;opacity:1;transition:.3s ease-out}.message-text[data-v-27e39dc8]{font-family:SFProText;background:none;border:none;color:#fff;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;word-break:keep-all}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(141);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".hide[data-v-6790cee8]{visibility:hidden}.loading-pane-container[data-v-6790cee8]{width:100%;height:100%;position:fixed;display:flex!important;justify-content:center;align-items:center;flex-direction:column;background:hsla(0,0%,88.2%,.1);z-index:9999999998!important;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);text-shadow:0 0 20px #fff}.loading-pane-container[data-v-6790cee8]:hover{cursor:wait}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(142);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, ".cover[data-v-4a3e0945]{width:100%;height:100%;position:fixed;display:flex!important;justify-content:center;background-color:rgba(0,0,0,.3);z-index:9999999999!important;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.box[data-v-4a3e0945],.cover[data-v-4a3e0945]{align-items:center;flex-direction:column}.box[data-v-4a3e0945]{border-radius:8px;background:#f5f5f5;width:300px;min-height:200px;display:flex;justify-content:space-between;text-align:center;padding-bottom:20px}p[data-v-4a3e0945]{width:100%}.title[data-v-4a3e0945]{border-top-right-radius:8px;border-top-left-radius:8px;font-weight:700;background:#f15a24;color:#fff;min-height:30px;align-items:center;justify-content:center;display:flex}.buttons[data-v-4a3e0945]{display:flex;justify-content:space-around;width:100%}button[data-v-4a3e0945]{color:#fff;border:none;border-radius:8px;min-width:100px;height:40px}.confirm[data-v-4a3e0945]{background:green}.cancel[data-v-4a3e0945]{background:red}", ""]), t.exports = e
    }, function(t, e, o) {
        t.exports = o.p + "img/phone-ico.037da7e.png"
    }, function(t, e, o) {
        "use strict";
        var n = o(143);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(14)(!1)).push([t.i, '.animated[data-v-68ac1694]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite[data-v-68ac1694]{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes bounce-data-v-68ac1694{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}@keyframes bounce-data-v-68ac1694{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce[data-v-68ac1694]{-webkit-animation-name:bounce-data-v-68ac1694;animation-name:bounce-data-v-68ac1694;transform-origin:center bottom}@-webkit-keyframes flash-data-v-68ac1694{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash-data-v-68ac1694{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash[data-v-68ac1694]{-webkit-animation-name:flash-data-v-68ac1694;animation-name:flash-data-v-68ac1694}@-webkit-keyframes pulse-data-v-68ac1694{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}@keyframes pulse-data-v-68ac1694{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.pulse[data-v-68ac1694]{-webkit-animation-name:pulse-data-v-68ac1694;animation-name:pulse-data-v-68ac1694}@-webkit-keyframes rubberBand-data-v-68ac1694{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}@keyframes rubberBand-data-v-68ac1694{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.rubberBand[data-v-68ac1694]{-webkit-animation-name:rubberBand-data-v-68ac1694;animation-name:rubberBand-data-v-68ac1694}@-webkit-keyframes shake-data-v-68ac1694{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}@keyframes shake-data-v-68ac1694{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake[data-v-68ac1694]{-webkit-animation-name:shake-data-v-68ac1694;animation-name:shake-data-v-68ac1694}@-webkit-keyframes headShake-data-v-68ac1694{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}@keyframes headShake-data-v-68ac1694{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.headShake[data-v-68ac1694]{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake-data-v-68ac1694;animation-name:headShake-data-v-68ac1694}@-webkit-keyframes swing-data-v-68ac1694{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0)}}@keyframes swing-data-v-68ac1694{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0)}}.swing[data-v-68ac1694]{transform-origin:top center;-webkit-animation-name:swing-data-v-68ac1694;animation-name:swing-data-v-68ac1694}@-webkit-keyframes tada-data-v-68ac1694{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}@keyframes tada-data-v-68ac1694{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada[data-v-68ac1694]{-webkit-animation-name:tada-data-v-68ac1694;animation-name:tada-data-v-68ac1694}@-webkit-keyframes wobble-data-v-68ac1694{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}@keyframes wobble-data-v-68ac1694{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}.wobble[data-v-68ac1694]{-webkit-animation-name:wobble-data-v-68ac1694;animation-name:wobble-data-v-68ac1694}@-webkit-keyframes jello-data-v-68ac1694{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello-data-v-68ac1694{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello[data-v-68ac1694]{-webkit-animation-name:jello-data-v-68ac1694;animation-name:jello-data-v-68ac1694;transform-origin:center}@-webkit-keyframes bounceIn-data-v-68ac1694{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceIn-data-v-68ac1694{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounceIn[data-v-68ac1694]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn-data-v-68ac1694;animation-name:bounceIn-data-v-68ac1694}@-webkit-keyframes bounceInDown-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translateZ(0)}}@keyframes bounceInDown-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translateZ(0)}}.bounceInDown[data-v-68ac1694]{-webkit-animation-name:bounceInDown-data-v-68ac1694;animation-name:bounceInDown-data-v-68ac1694}@-webkit-keyframes bounceInLeft-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translateZ(0)}}@keyframes bounceInLeft-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translateZ(0)}}.bounceInLeft[data-v-68ac1694]{-webkit-animation-name:bounceInLeft-data-v-68ac1694;animation-name:bounceInLeft-data-v-68ac1694}@-webkit-keyframes bounceInRight-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translateZ(0)}}@keyframes bounceInRight-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translateZ(0)}}.bounceInRight[data-v-68ac1694]{-webkit-animation-name:bounceInRight-data-v-68ac1694;animation-name:bounceInRight-data-v-68ac1694}@-webkit-keyframes bounceInUp-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceInUp-data-v-68ac1694{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}.bounceInUp[data-v-68ac1694]{-webkit-animation-name:bounceInUp-data-v-68ac1694;animation-name:bounceInUp-data-v-68ac1694}@-webkit-keyframes bounceOut-data-v-68ac1694{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}@keyframes bounceOut-data-v-68ac1694{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut[data-v-68ac1694]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceOut-data-v-68ac1694;animation-name:bounceOut-data-v-68ac1694}@-webkit-keyframes bounceOutDown-data-v-68ac1694{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown-data-v-68ac1694{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown[data-v-68ac1694]{-webkit-animation-name:bounceOutDown-data-v-68ac1694;animation-name:bounceOutDown-data-v-68ac1694}@-webkit-keyframes bounceOutLeft-data-v-68ac1694{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft-data-v-68ac1694{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft[data-v-68ac1694]{-webkit-animation-name:bounceOutLeft-data-v-68ac1694;animation-name:bounceOutLeft-data-v-68ac1694}@-webkit-keyframes bounceOutRight-data-v-68ac1694{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight-data-v-68ac1694{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight[data-v-68ac1694]{-webkit-animation-name:bounceOutRight-data-v-68ac1694;animation-name:bounceOutRight-data-v-68ac1694}@-webkit-keyframes bounceOutUp-data-v-68ac1694{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp-data-v-68ac1694{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp[data-v-68ac1694]{-webkit-animation-name:bounceOutUp-data-v-68ac1694;animation-name:bounceOutUp-data-v-68ac1694}@-webkit-keyframes fadeIn-data-v-68ac1694{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-68ac1694{0%{opacity:0}to{opacity:1}}.fadeIn[data-v-68ac1694]{-webkit-animation-name:fadeIn-data-v-68ac1694;animation-name:fadeIn-data-v-68ac1694}@-webkit-keyframes fadeInDown-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInDown-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}.fadeInDown[data-v-68ac1694]{-webkit-animation-name:fadeInDown-data-v-68ac1694;animation-name:fadeInDown-data-v-68ac1694}@-webkit-keyframes fadeInDownBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInDownBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}.fadeInDownBig[data-v-68ac1694]{-webkit-animation-name:fadeInDownBig-data-v-68ac1694;animation-name:fadeInDownBig-data-v-68ac1694}@-webkit-keyframes fadeInLeft-data-v-68ac1694{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInLeft-data-v-68ac1694{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.fadeInLeft[data-v-68ac1694]{-webkit-animation-name:fadeInLeft-data-v-68ac1694;animation-name:fadeInLeft-data-v-68ac1694}@-webkit-keyframes fadeInLeftBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInLeftBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.fadeInLeftBig[data-v-68ac1694]{-webkit-animation-name:fadeInLeftBig-data-v-68ac1694;animation-name:fadeInLeftBig-data-v-68ac1694}.fadeInRight[data-v-68ac1694]{-webkit-animation-name:fadeInRight-data-v-68ac1694;animation-name:fadeInRight-data-v-68ac1694}@-webkit-keyframes fadeInRightBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInRightBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}.fadeInRightBig[data-v-68ac1694]{-webkit-animation-name:fadeInRightBig-data-v-68ac1694;animation-name:fadeInRightBig-data-v-68ac1694}@-webkit-keyframes fadeInUp-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUp-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.fadeInUp[data-v-68ac1694]{-webkit-animation-name:fadeInUp-data-v-68ac1694;animation-name:fadeInUp-data-v-68ac1694}@-webkit-keyframes fadeInUpBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fadeInUpBig-data-v-68ac1694{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}.fadeInUpBig[data-v-68ac1694]{-webkit-animation-name:fadeInUpBig-data-v-68ac1694;animation-name:fadeInUpBig-data-v-68ac1694}@-webkit-keyframes fadeOut-data-v-68ac1694{0%{opacity:1}to{opacity:0}}@keyframes fadeOut-data-v-68ac1694{0%{opacity:1}to{opacity:0}}.fadeOut[data-v-68ac1694]{-webkit-animation-name:fadeOut-data-v-68ac1694;animation-name:fadeOut-data-v-68ac1694}@-webkit-keyframes fadeOutDown-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes fadeOutDown-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown[data-v-68ac1694]{-webkit-animation-name:fadeOutDown-data-v-68ac1694;animation-name:fadeOutDown-data-v-68ac1694}@-webkit-keyframes fadeOutDownBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig[data-v-68ac1694]{-webkit-animation-name:fadeOutDownBig-data-v-68ac1694;animation-name:fadeOutDownBig-data-v-68ac1694}@-webkit-keyframes fadeOutLeft-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft[data-v-68ac1694]{-webkit-animation-name:fadeOutLeft-data-v-68ac1694;animation-name:fadeOutLeft-data-v-68ac1694}@-webkit-keyframes fadeOutLeftBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig[data-v-68ac1694]{-webkit-animation-name:fadeOutLeftBig-data-v-68ac1694;animation-name:fadeOutLeftBig-data-v-68ac1694}.fadeOutRight[data-v-68ac1694]{-webkit-animation-name:fadeOutRight-data-v-68ac1694;animation-name:fadeOutRight-data-v-68ac1694}@-webkit-keyframes fadeOutRightBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig[data-v-68ac1694]{-webkit-animation-name:fadeOutRightBig-data-v-68ac1694;animation-name:fadeOutRightBig-data-v-68ac1694}@-webkit-keyframes fadeOutUp-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp[data-v-68ac1694]{-webkit-animation-name:fadeOutUp-data-v-68ac1694;animation-name:fadeOutUp-data-v-68ac1694}@-webkit-keyframes fadeOutUpBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig[data-v-68ac1694]{-webkit-animation-name:fadeOutUpBig-data-v-68ac1694;animation-name:fadeOutUpBig-data-v-68ac1694}@-webkit-keyframes flip-data-v-68ac1694{0%{transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip-data-v-68ac1694{0%{transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip[data-v-68ac1694]{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-data-v-68ac1694;animation-name:flip-data-v-68ac1694}@-webkit-keyframes flipInX-data-v-68ac1694{0%{transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes flipInX-data-v-68ac1694{0%{transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.flipInX[data-v-68ac1694]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX-data-v-68ac1694;animation-name:flipInX-data-v-68ac1694}@-webkit-keyframes flipInY-data-v-68ac1694{0%{transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}@keyframes flipInY-data-v-68ac1694{0%{transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.flipInY[data-v-68ac1694]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY-data-v-68ac1694;animation-name:flipInY-data-v-68ac1694}@-webkit-keyframes flipOutX-data-v-68ac1694{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX-data-v-68ac1694{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX[data-v-68ac1694]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:flipOutX-data-v-68ac1694;animation-name:flipOutX-data-v-68ac1694;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY-data-v-68ac1694{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY-data-v-68ac1694{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY[data-v-68ac1694]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY-data-v-68ac1694;animation-name:flipOutY-data-v-68ac1694}@-webkit-keyframes lightSpeedIn-data-v-68ac1694{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:translateZ(0);opacity:1}}@keyframes lightSpeedIn-data-v-68ac1694{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:translateZ(0);opacity:1}}.lightSpeedIn[data-v-68ac1694]{-webkit-animation-name:lightSpeedIn-data-v-68ac1694;animation-name:lightSpeedIn-data-v-68ac1694;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut-data-v-68ac1694{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut-data-v-68ac1694{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut[data-v-68ac1694]{-webkit-animation-name:lightSpeedOut-data-v-68ac1694;animation-name:lightSpeedOut-data-v-68ac1694;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn-data-v-68ac1694{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:translateZ(0);opacity:1}}@keyframes rotateIn-data-v-68ac1694{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:translateZ(0);opacity:1}}.rotateIn[data-v-68ac1694]{-webkit-animation-name:rotateIn-data-v-68ac1694;animation-name:rotateIn-data-v-68ac1694}@-webkit-keyframes rotateInDownLeft-data-v-68ac1694{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:translateZ(0);opacity:1}}@keyframes rotateInDownLeft-data-v-68ac1694{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:translateZ(0);opacity:1}}.rotateInDownLeft[data-v-68ac1694]{-webkit-animation-name:rotateInDownLeft-data-v-68ac1694;animation-name:rotateInDownLeft-data-v-68ac1694}@-webkit-keyframes rotateInDownRight-data-v-68ac1694{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:translateZ(0);opacity:1}}@keyframes rotateInDownRight-data-v-68ac1694{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:translateZ(0);opacity:1}}.rotateInDownRight[data-v-68ac1694]{-webkit-animation-name:rotateInDownRight-data-v-68ac1694;animation-name:rotateInDownRight-data-v-68ac1694}@-webkit-keyframes rotateInUpLeft-data-v-68ac1694{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:translateZ(0);opacity:1}}@keyframes rotateInUpLeft-data-v-68ac1694{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:translateZ(0);opacity:1}}.rotateInUpLeft[data-v-68ac1694]{-webkit-animation-name:rotateInUpLeft-data-v-68ac1694;animation-name:rotateInUpLeft-data-v-68ac1694}@-webkit-keyframes rotateInUpRight-data-v-68ac1694{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:translateZ(0);opacity:1}}@keyframes rotateInUpRight-data-v-68ac1694{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:translateZ(0);opacity:1}}.rotateInUpRight[data-v-68ac1694]{-webkit-animation-name:rotateInUpRight-data-v-68ac1694;animation-name:rotateInUpRight-data-v-68ac1694}@-webkit-keyframes rotateOut-data-v-68ac1694{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}@keyframes rotateOut-data-v-68ac1694{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}.rotateOut[data-v-68ac1694]{-webkit-animation-name:rotateOut-data-v-68ac1694;animation-name:rotateOut-data-v-68ac1694}@-webkit-keyframes rotateOutDownLeft-data-v-68ac1694{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft-data-v-68ac1694{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}.rotateOutDownLeft[data-v-68ac1694]{-webkit-animation-name:rotateOutDownLeft-data-v-68ac1694;animation-name:rotateOutDownLeft-data-v-68ac1694}@-webkit-keyframes rotateOutDownRight-data-v-68ac1694{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight-data-v-68ac1694{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}.rotateOutDownRight[data-v-68ac1694]{-webkit-animation-name:rotateOutDownRight-data-v-68ac1694;animation-name:rotateOutDownRight-data-v-68ac1694}@-webkit-keyframes rotateOutUpLeft-data-v-68ac1694{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft-data-v-68ac1694{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft[data-v-68ac1694]{-webkit-animation-name:rotateOutUpLeft-data-v-68ac1694;animation-name:rotateOutUpLeft-data-v-68ac1694}@-webkit-keyframes rotateOutUpRight-data-v-68ac1694{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight-data-v-68ac1694{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}.rotateOutUpRight[data-v-68ac1694]{-webkit-animation-name:rotateOutUpRight-data-v-68ac1694;animation-name:rotateOutUpRight-data-v-68ac1694}@-webkit-keyframes hinge-data-v-68ac1694{0%{transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge-data-v-68ac1694{0%{transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.hinge[data-v-68ac1694]{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:hinge-data-v-68ac1694;animation-name:hinge-data-v-68ac1694}@-webkit-keyframes jackInTheBox-data-v-68ac1694{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}@keyframes jackInTheBox-data-v-68ac1694{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.jackInTheBox[data-v-68ac1694]{-webkit-animation-name:jackInTheBox-data-v-68ac1694;animation-name:jackInTheBox-data-v-68ac1694}@-webkit-keyframes rollIn-data-v-68ac1694{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}@keyframes rollIn-data-v-68ac1694{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}.rollIn[data-v-68ac1694]{-webkit-animation-name:rollIn-data-v-68ac1694;animation-name:rollIn-data-v-68ac1694}@-webkit-keyframes rollOut-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut[data-v-68ac1694]{-webkit-animation-name:rollOut-data-v-68ac1694;animation-name:rollOut-data-v-68ac1694}@-webkit-keyframes zoomIn-data-v-68ac1694{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn-data-v-68ac1694{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn[data-v-68ac1694]{-webkit-animation-name:zoomIn-data-v-68ac1694;animation-name:zoomIn-data-v-68ac1694}@-webkit-keyframes zoomInDown-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown[data-v-68ac1694]{-webkit-animation-name:zoomInDown-data-v-68ac1694;animation-name:zoomInDown-data-v-68ac1694}@-webkit-keyframes zoomInLeft-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft[data-v-68ac1694]{-webkit-animation-name:zoomInLeft-data-v-68ac1694;animation-name:zoomInLeft-data-v-68ac1694}@-webkit-keyframes zoomInRight-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight[data-v-68ac1694]{-webkit-animation-name:zoomInRight-data-v-68ac1694;animation-name:zoomInRight-data-v-68ac1694}@-webkit-keyframes zoomInUp-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp-data-v-68ac1694{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp[data-v-68ac1694]{-webkit-animation-name:zoomInUp-data-v-68ac1694;animation-name:zoomInUp-data-v-68ac1694}@-webkit-keyframes zoomOut-data-v-68ac1694{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut-data-v-68ac1694{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut[data-v-68ac1694]{-webkit-animation-name:zoomOut-data-v-68ac1694;animation-name:zoomOut-data-v-68ac1694}@-webkit-keyframes zoomOutDown-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown[data-v-68ac1694]{-webkit-animation-name:zoomOutDown-data-v-68ac1694;animation-name:zoomOutDown-data-v-68ac1694}@-webkit-keyframes zoomOutLeft-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}@keyframes zoomOutLeft-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft[data-v-68ac1694]{-webkit-animation-name:zoomOutLeft-data-v-68ac1694;animation-name:zoomOutLeft-data-v-68ac1694}@-webkit-keyframes zoomOutRight-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}@keyframes zoomOutRight-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight[data-v-68ac1694]{-webkit-animation-name:zoomOutRight-data-v-68ac1694;animation-name:zoomOutRight-data-v-68ac1694}@-webkit-keyframes zoomOutUp-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp-data-v-68ac1694{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp[data-v-68ac1694]{-webkit-animation-name:zoomOutUp-data-v-68ac1694;animation-name:zoomOutUp-data-v-68ac1694}@-webkit-keyframes slideInDown-data-v-68ac1694{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown-data-v-68ac1694{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown[data-v-68ac1694]{-webkit-animation-name:slideInDown-data-v-68ac1694;animation-name:slideInDown-data-v-68ac1694}@-webkit-keyframes slideInLeft-data-v-68ac1694{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInLeft-data-v-68ac1694{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInLeft[data-v-68ac1694]{-webkit-animation-name:slideInLeft-data-v-68ac1694;animation-name:slideInLeft-data-v-68ac1694}@-webkit-keyframes slideInRight-data-v-68ac1694{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInRight-data-v-68ac1694{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInRight[data-v-68ac1694]{-webkit-animation-name:slideInRight-data-v-68ac1694;animation-name:slideInRight-data-v-68ac1694}@-webkit-keyframes slideInUp-data-v-68ac1694{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInUp-data-v-68ac1694{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInUp[data-v-68ac1694]{-webkit-animation-name:slideInUp-data-v-68ac1694;animation-name:slideInUp-data-v-68ac1694}@-webkit-keyframes slideOutDown-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}@keyframes slideOutDown-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown[data-v-68ac1694]{-webkit-animation-name:slideOutDown-data-v-68ac1694;animation-name:slideOutDown-data-v-68ac1694}@-webkit-keyframes slideOutLeft-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft[data-v-68ac1694]{-webkit-animation-name:slideOutLeft-data-v-68ac1694;animation-name:slideOutLeft-data-v-68ac1694}@-webkit-keyframes slideOutRight-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}@keyframes slideOutRight-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight[data-v-68ac1694]{-webkit-animation-name:slideOutRight-data-v-68ac1694;animation-name:slideOutRight-data-v-68ac1694}@-webkit-keyframes slideOutUp-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}@keyframes slideOutUp-data-v-68ac1694{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp[data-v-68ac1694]{-webkit-animation-name:slideOutUp-data-v-68ac1694;animation-name:slideOutUp-data-v-68ac1694}#info-scroll-call[data-v-68ac1694]{position:fixed;bottom:33%;left:0;z-index:9995;height:52px;margin-top:-90px}#info-scroll-call li[data-v-68ac1694]{display:block;position:relative;left:-105px;float:none;width:auto;border-radius:0 25px 25px 0;margin-bottom:2px;background-color:#d34f07;color:#fff;font-size:16px;font-weight:700;transition:all .3s ease-in-out;height:52px;line-height:1.3em}#info-scroll-call li[data-v-68ac1694]:before{content:""!important}#info-scroll-call li a[data-v-68ac1694]{display:block;padding:2px 2px 2px 5px;font-family:sans-serif}#info-scroll-call li[data-v-68ac1694]:hover{left:0}#info-scroll-call li small[data-v-68ac1694]{display:block;font-size:16px;font-weight:400}#info-scroll-call li .text[data-v-68ac1694]{display:inline-block;text-align:center;font-size:16px}#info-scroll-call li .icon[data-v-68ac1694]{display:inline-block;float:right;width:47px;height:47px;margin:1px 0 0 5px}#info-scroll-call a:hover .text[data-v-68ac1694]{color:#fff}#info-scroll-mail[data-v-68ac1694]{position:fixed;bottom:24%;left:0;z-index:9995;height:52px;margin-top:-90px}#info-scroll-mail li[data-v-68ac1694]{display:block;position:relative;left:-155px;float:none;width:auto;border-radius:0 25px 25px 0;margin-bottom:2px;background-color:#d34f07;color:#fff;font-size:16px;font-weight:700;transition:all .3s ease-in-out;height:52px;line-height:1.3em}#info-scroll-mail li[data-v-68ac1694]:before{content:""!important}#info-scroll-mail li a[data-v-68ac1694]{display:block;padding:2px 2px 2px 5px;font-family:sans-serif}#info-scroll-mail li[data-v-68ac1694]:hover{left:0}#info-scroll-mail li small[data-v-68ac1694]{display:block;font-size:16px;font-weight:400}#info-scroll-mail li .text[data-v-68ac1694]{display:inline-block;text-align:center;font-size:16px}#info-scroll-mail li .icon[data-v-68ac1694]{display:inline-block;float:right;width:47px;height:47px;margin:1px 0 0 5px}#info-scroll-mail a:hover .text[data-v-68ac1694]{color:#fff}#info-scroll-facebook[data-v-68ac1694]{position:fixed;bottom:15%;left:0;z-index:9995;height:52px;margin-top:-90px}#info-scroll-facebook li[data-v-68ac1694]{display:block;position:relative;left:-92px;float:none;width:auto;border-radius:0 25px 25px 0;margin-bottom:2px;background-color:#d34f07;color:#fff;font-size:16px;font-weight:700;transition:all .3s ease-in-out;height:52px;line-height:1.3em}#info-scroll-facebook li[data-v-68ac1694]:before{content:""!important}#info-scroll-facebook li a[data-v-68ac1694]{display:block;padding:2px 2px 2px 5px;font-family:sans-serif}#info-scroll-facebook li[data-v-68ac1694]:hover{left:0}#info-scroll-facebook li small[data-v-68ac1694]{display:block;font-size:16px;font-weight:400}#info-scroll-facebook li .text[data-v-68ac1694]{display:inline-block;text-align:center;font-size:16px}#info-scroll-facebook li .icon[data-v-68ac1694]{display:inline-block;float:right;width:47px;height:47px;margin:1px 0 0 5px}#info-scroll-facebook a:hover .text[data-v-68ac1694]{color:#fff}.b24-widget-button-social-tooltip[data-v-68ac1694]{display:none!important}#menu-scroll[data-v-68ac1694]{position:fixed;bottom:25%;right:10px;z-index:9995;height:70px;margin-top:-35px;top:50%}#menu-scroll li[data-v-68ac1694]{display:block;position:relative;float:none}#menu-scroll .point[data-v-68ac1694]{display:inline-block;width:15px;height:15px;border-radius:50%;background-color:#fff;box-shadow:inset 2px 2px 3px #d6d6d6}#menu-scroll .text[data-v-68ac1694]{position:absolute;top:-5px;right:-1000px;width:130px;height:auto;padding:3px;border-radius:16px;background-color:rgba(0,0,0,.6);color:#fff;text-align:center;opacity:0;transition:all .2s ease-in-out}#menu-scroll a:hover .text[data-v-68ac1694]{right:20px;opacity:1}*[data-v-68ac1694],[data-v-68ac1694]:after,[data-v-68ac1694]:before{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.cf[data-v-68ac1694]:after,.cf[data-v-68ac1694]:before{content:"";display:table}.cf[data-v-68ac1694]:after{clear:both}.searchform[data-v-68ac1694]{background:#f4f4f4;background:hsla(0,0%,95.7%,.79);border:1px solid #d3d3d3;padding:2px 5px;margin:0 0 0 -230px;width:auto;box-shadow:0 4px 9px rgba(0,0,0,.37);-moz-box-shadow:0 4px 9px rgba(0,0,0,.37);-webkit-box-shadow:0 4px 9px rgba(0,0,0,.37);border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}.searchform button[data-v-68ac1694],.searchform input[data-v-68ac1694],.searchform select[data-v-68ac1694]{float:left}.searchform input[data-v-68ac1694]{background:#fefefe;border:none;margin-right:5px;padding:10px;width:auto;box-shadow:inset 0 0 4px rgba(0,0,0,.4),1px 1px 1px hsla(0,0%,100%,.75);-moz-box-shadow:0 0 4px rgba(0,0,0,.4) inset,1px 1px 1px hsla(0,0%,100%,.75);-webkit-box-shadow:0 0 4px rgba(0,0,0,.4) inset,1px 1px 1px hsla(0,0%,100%,.75);border-radius:9px;-moz-border-radius:9px;-webkit-border-radius:9px}.searchform input[data-v-68ac1694]:focus{outline:0;box-shadow:inset 0 0 4px #137d00;-moz-box-shadow:0 0 4px #137d00 inset;-webkit-box-shadow:0 0 4px #137d00 inset}.searchform input[data-v-68ac1694]::-webkit-input-placeholder{font-style:italic;line-height:15px}.searchform input[data-v-68ac1694]:-moz-placeholder{font-style:italic;line-height:15px}.searchform button[data-v-68ac1694]{background:#137d00;border:none;color:#fff;cursor:pointer;font:13px/13px HelveticaNeue,Helvetica,Arial,sans-serif;padding:10px;width:auto;box-shadow:inset 0 0 2px #137d00;-moz-box-shadow:0 0 2px #137d00 inset;-webkit-box-shadow:0 0 2px #137d00 inset;border-radius:9px;-moz-border-radius:9px;-webkit-border-radius:9px}.searchform button[data-v-68ac1694]:hover{opacity:.9}.searchform select[data-v-68ac1694]{background:#137d00;border:none;color:#fff;cursor:pointer;font:13px/13px HelveticaNeue,Helvetica,Arial,sans-serif;padding:10px;width:auto;box-shadow:inset 0 0 2px #137d00;-moz-box-shadow:0 0 2px #137d00 inset;-webkit-box-shadow:0 0 2px #137d00 inset;border-radius:9px;-moz-border-radius:9px;-webkit-border-radius:9px;margin-right:5px}.searchform select option[data-v-68ac1694]{padding:20px 0}.button_follow_facebook[data-v-68ac1694]{background:0 0;width:95px;height:30px;position:absolute;top:50px;right:0}.follow_facebook_none[data-v-68ac1694]{display:none}.btn-quick-alo-phone.btn-quick-alo-show[data-v-68ac1694]{visibility:visible}.btn-quick-alo-ph-img-circle[data-v-68ac1694]{width:75px;height:75px;top:70px;left:70px}.btn-quick-alo-phone[data-v-68ac1694]{position:fixed;visibility:hidden;cursor:pointer;z-index:200000!important;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);transition:visibility .5s;bottom:95px;right:0}.btn-quick-alo-ph-circle[data-v-68ac1694],.btn-quick-alo-phone[data-v-68ac1694]{background-color:transparent;width:80px;height:80px}.btn-quick-alo-ph-circle[data-v-68ac1694]{bottom:0;left:0;position:absolute;border-radius:100%;border:2px solid #bfebfc;opacity:.1;-webkit-animation:btn-quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;animation:btn-quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.btn-quick-alo-phone.btn-quick-alo-green .btn-quick-alo-ph-circle[data-v-68ac1694]{border-color:#00a1ff;opacity:.5}.btn-quick-alo-ph-circle-fill[data-v-68ac1694]{width:60px;height:60px;top:10px;left:10px;position:absolute;background-color:#000;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:btn-quick-alo-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;animation:btn-quick-alo-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.btn-quick-alo-phone.btn-quick-alo-green .btn-quick-alo-ph-circle-fill[data-v-68ac1694]{background-color:rgba(0,161,255,.5);background-color:#a6e3fa;opacity:.75!important}.btn-quick-alo-ph-img-circle[data-v-68ac1694]{width:40px;height:40px;background-size:30px;top:20px;left:20px;position:absolute;background-repeat:no-repeat;background-position:50%;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:btn-quick-alo-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;animation:btn-quick-alo-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;transform-origin:50% 50%}.btn-quick-alo-phone.btn-quick-alo-green .btn-quick-alo-ph-img-circle[data-v-68ac1694]{background-color:#00a1ff}.btn-quick-alo-phone.btn-quick-alo-hover[data-v-68ac1694],.btn-quick-alo-phone[data-v-68ac1694]:hover{opacity:1}.btn-quick-alo-phone.btn-quick-alo-green.btn-quick-alo-hover .btn-quick-alo-ph-img-circle[data-v-68ac1694],.btn-quick-alo-phone.btn-quick-alo-green:hover .btn-quick-alo-ph-img-circle[data-v-68ac1694]{background-color:#ff5a00}.btn-quick-alo-phone.btn-quick-alo-green.btn-quick-alo-hover .btn-quick-alo-ph-circle-fill[data-v-68ac1694],.btn-quick-alo-phone.btn-quick-alo-green:hover .btn-quick-alo-ph-circle-fill[data-v-68ac1694]{background-color:rgba(255,118,0,.5);background-color:#baf5a7;opacity:.75!important}.btn-quick-alo-ph-circle[data-v-68ac1694]{border-color:#00a1ff;opacity:.5}@-webkit-keyframes btn-quick-alo-circle-img-anim-data-v-68ac1694{0%{-webkit-transform:rotate(0) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}50%{-webkit-transform:rotate(0) scale(1) skew(1deg)}to{-webkit-transform:rotate(0) scale(1) skew(1deg)}}@-webkit-keyframes btn-quick-alo-circle-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.5) skew(1deg);opacity:.1}30%{transform:rotate(0) scale(.7) skew(1deg);opacity:.5}to{transform:rotate(0) scale(1) skew(1deg);opacity:.1}}@keyframes btn-quick-alo-circle-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.5) skew(1deg);opacity:.1}30%{transform:rotate(0) scale(.7) skew(1deg);opacity:.5}to{transform:rotate(0) scale(1) skew(1deg);opacity:.1}}@-webkit-keyframes btn-quick-alo-circle-fill-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{transform:rotate(0) scale(1) skew(1deg);opacity:.2}to{transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}.btn-quick-mail-phone.btn-quick-mail-show[data-v-68ac1694]{visibility:visible}.btn-quick-mail-ph-img-circle[data-v-68ac1694]{width:75px;height:75px;top:70px;left:70px}.btn-quick-mail-phone[data-v-68ac1694]{position:fixed;visibility:hidden;cursor:pointer;z-index:200000!important;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);transition:visibility .5s;right:0;bottom:180px}.btn-quick-mail-ph-circle[data-v-68ac1694],.btn-quick-mail-phone[data-v-68ac1694]{background-color:transparent;width:80px;height:80px}.btn-quick-mail-ph-circle[data-v-68ac1694]{top:0;left:0;position:absolute;border-radius:100%;border:2px solid #bfebfc;opacity:.1;-webkit-animation:btn-quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;animation:btn-quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.btn-quick-mail-phone.btn-quick-mail-green .btn-quick-mail-ph-circle[data-v-68ac1694]{border-color:#00a1ff;opacity:.5}.btn-quick-mail-ph-circle-fill[data-v-68ac1694]{width:60px;height:60px;top:10px;left:10px;position:absolute;background-color:#000;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:btn-quick-mail-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;animation:btn-quick-mail-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.btn-quick-mail-phone.btn-quick-mail-green .btn-quick-mail-ph-circle-fill[data-v-68ac1694]{background-color:rgba(0,161,255,.5);background-color:#a6e3fa;opacity:.75!important}.btn-quick-mail-ph-img-circle[data-v-68ac1694]{width:40px;height:40px;background-size:30px;top:20px;left:20px;position:absolute;background-repeat:no-repeat;background-position:50%;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:btn-quick-mail-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;animation:btn-quick-mail-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;transform-origin:50% 50%}.btn-quick-mail-phone.btn-quick-mail-green .btn-quick-mail-ph-img-circle[data-v-68ac1694]{background-color:#00a1ff}.btn-quick-mail-phone.btn-quick-mail-hover[data-v-68ac1694],.btn-quick-mail-phone[data-v-68ac1694]:hover{opacity:1}.btn-quick-mail-phone.btn-quick-mail-green.btn-quick-mail-hover .btn-quick-mail-ph-img-circle[data-v-68ac1694],.btn-quick-mail-phone.btn-quick-mail-green:hover .btn-quick-mail-ph-img-circle[data-v-68ac1694],.edit_btn_quick_mess_phone:hover .icon-facebook[data-v-68ac1694]{background-color:#ff5a00!important}.btn-quick-mail-phone.btn-quick-mail-green.btn-quick-mail-hover .btn-quick-mail-ph-circle-fill[data-v-68ac1694],.btn-quick-mail-phone.btn-quick-mail-green:hover .btn-quick-mail-ph-circle-fill[data-v-68ac1694]{background-color:rgba(255,118,0,.5);background-color:#baf5a7;opacity:.75!important}.btn-quick-mail-ph-circle[data-v-68ac1694]{border-color:#00a1ff;opacity:.5}@-webkit-keyframes btn-quick-mail-circle-img-anim-data-v-68ac1694{0%{-webkit-transform:rotate(0) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}50%{-webkit-transform:rotate(0) scale(1) skew(1deg)}to{-webkit-transform:rotate(0) scale(1) skew(1deg)}}@keyframes fadeInRight-data-v-68ac1694{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}@-webkit-keyframes fadeOutRight-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@keyframes fadeOutRight-data-v-68ac1694{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@-webkit-keyframes btn-quick-mail-circle-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.5) skew(1deg);opacity:.1}30%{transform:rotate(0) scale(.7) skew(1deg);opacity:.5}to{transform:rotate(0) scale(1) skew(1deg);opacity:.1}}@keyframes btn-quick-mail-circle-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.5) skew(1deg);opacity:.1}30%{transform:rotate(0) scale(.7) skew(1deg);opacity:.5}to{transform:rotate(0) scale(1) skew(1deg);opacity:.1}}@-webkit-keyframes btn-quick-mail-circle-fill-anim-data-v-68ac1694{0%{transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{transform:rotate(0) scale(1) skew(1deg);opacity:.2}to{transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}#chat-f-b img.chat-logo[data-v-68ac1694]{padding-right:15px;max-width:40px;max-height:40px}.quick-alo-show[data-v-68ac1694]{width:80px;height:80px;z-index:200000!important;bottom:265px;right:0;position:fixed}#b-c-facebook[data-v-68ac1694]{position:fixed;right:10px;background:#3a5897;bottom:0;z-index:9999999999;width:250px;height:auto;max-height:375px;min-height:38px;box-shadow:2px 6px 6px 6px rgba(0,0,0,.09);border-top-left-radius:5px;border-top-right-radius:5px;overflow:hidden}#b-c-facebook .f-chat-conent[data-v-68ac1694]{float:left;width:100%;height:335px;overflow:hidden;display:none;background-color:#fff;position:relative}#b-c-facebook .chat-f-b label[data-v-68ac1694]{width:185px}#b-c-facebook .chat-f-b[data-v-68ac1694],#b-c-facebook .chat-f-b label[data-v-68ac1694]{line-height:20px;margin:0;cursor:pointer;font-size:14px;color:#fff}#b-c-facebook .chat-f-b[data-v-68ac1694]{float:left;padding:0 25px 0 15px;width:250px;color:#fff;height:38px;line-height:38px;background-color:#00b6dc;border:0;z-index:9999999;margin-right:12px}#b-c-facebook .chat-f-b label[data-v-68ac1694]{position:absolute;top:10px}.title-f-chat-icon[data-v-68ac1694]{margin-left:-10px}#t_f_chat[data-v-68ac1694]{float:left;position:absolute;right:15px;top:0}#t_f_chat a[data-v-68ac1694]{color:#fff;font-size:17px;text-decoration:none}.chat-left-5[data-v-68ac1694]{margin-left:5px}#chat_f_close[data-v-68ac1694]{opacity:.5}#chat_f_close[data-v-68ac1694]:hover{opacity:1}#fb_alert_num[data-v-68ac1694]{background-color:#ff0;padding:0 7px;color:red;border-radius:40px;font-size:13px;font-family:Arial;font-weight:700;position:absolute;right:55px;top:12px;height:20px;line-height:20px;display:none!important}.quick-alo-green .quick-alo-ph-circle[data-v-68ac1694]{border-color:#6bdfff;opacity:.99}.quick-alo-ph-circle[data-v-68ac1694]{width:80px;height:80px;bottom:0;left:0;position:absolute;background-color:transparent;border-radius:100%;border:2px solid #bfebfc;opacity:.1;-webkit-animation:quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;animation:quick-alo-circle-anim-data-v-68ac1694 1.2s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.quick-alo-green .quick-alo-ph-circle-fill[data-v-68ac1694]{background-color:#00c7ff;opacity:.75!important}.quick-alo-ph-circle-fill[data-v-68ac1694]{width:60px;height:60px;bottom:10px;left:10px;position:absolute;background-color:#000;border-radius:100%;border:2px solid transparent;opacity:.1;-webkit-animation:quick-alo-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;animation:quick-alo-circle-fill-anim-data-v-68ac1694 2.3s ease-in-out infinite;transition:all .5s;transform-origin:50% 50%}.quick-alo-green .quick-alo-ph-img-circle[data-v-68ac1694]{background-color:#00a1ff!important;background-size:32px}.quick-alo-ph-img-circle[data-v-68ac1694]{width:42px;height:42px;bottom:20px;left:20px;position:absolute;border-radius:100%;border:2px solid transparent;opacity:.7;-webkit-animation:quick-alo-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;animation:quick-alo-circle-img-anim-data-v-68ac1694 1s ease-in-out infinite;transform-origin:50% 50%}.quick-alo-green.quick-alo-hover .quick-alo-ph-img-circle[data-v-68ac1694],.quick-alo-phone.quick-alo-green:hover .quick-alo-ph-img-circle[data-v-68ac1694]{background-color:#00b0ff}@-webkit-keyframes quick-alo-circle-anim-data-v-68ac1694{0%{-webkit-transform:rotate(0) scale(.5) skew(1deg);-webkit-opacity:.1}30%{-webkit-transform:rotate(0) scale(.7) skew(1deg);-webkit-opacity:.5}to{-webkit-transform:rotate(0) scale(1) skew(1deg);-webkit-opacity:.1}}@-webkit-keyframes quick-alo-circle-fill-anim-data-v-68ac1694{0%{-webkit-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}50%{-webkit-transform:rotate(0) scale(1) skew(1deg);opacity:.2}to{-webkit-transform:rotate(0) scale(.7) skew(1deg);opacity:.2}}@-webkit-keyframes quick-alo-circle-img-anim-data-v-68ac1694{0%{-webkit-transform:rotate(0) scale(1) skew(1deg)}10%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}20%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}30%{-webkit-transform:rotate(-25deg) scale(1) skew(1deg)}40%{-webkit-transform:rotate(25deg) scale(1) skew(1deg)}50%{-webkit-transform:rotate(0) scale(1) skew(1deg)}to{-webkit-transform:rotate(0) scale(1) skew(1deg)}}@-webkit-keyframes fadeInRight-data-v-68ac1694{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}.position_0[data-v-68ac1694]{bottom:95px}.position_1[data-v-68ac1694]{bottom:180px}.position_2[data-v-68ac1694]{bottom:265px}.position_3[data-v-68ac1694]{bottom:350px}.position_4[data-v-68ac1694]{bottom:435px}.position_0.left_position[data-v-68ac1694]{bottom:45px}.position_1.left_position[data-v-68ac1694]{bottom:130px}.position_2.left_position[data-v-68ac1694]{bottom:215px}.position_3.left_position[data-v-68ac1694]{bottom:300px}.position_4.left_position[data-v-68ac1694]{bottom:385px}.big_size_button.position_0[data-v-68ac1694]{bottom:120px}.big_size_button.position_1[data-v-68ac1694]{bottom:210px}.big_size_button.position_2[data-v-68ac1694]{bottom:300px}.big_size_button.position_3[data-v-68ac1694]{bottom:390px}.big_size_button.position_4[data-v-68ac1694]{bottom:480px}.big_size_button.position_0.left_position[data-v-68ac1694]{bottom:20px}.big_size_button.position_1.left_position[data-v-68ac1694]{bottom:135px}.big_size_button.position_2.left_position[data-v-68ac1694]{bottom:225px}.big_size_button.position_3.left_position[data-v-68ac1694]{bottom:315px}.big_size_button.position_4.left_position[data-v-68ac1694]{bottom:405px}.big_size_button .edit_btn_quick_ph_img_circle[data-v-68ac1694]{width:50px;height:50px}.big_size_button .edit_btn_quick_ph_circle_fill[data-v-68ac1694]{width:80px;height:80px;top:55px;left:55px}.big_size_button .edit_btn_quick_ph_circle[data-v-68ac1694]{width:100px;height:100px;top:45px;left:45px;top:0;left:0}.big_size_button .edit_btn_quick_ph_circle_fill[data-v-68ac1694]{top:10px;left:10px}.big_size_button .btn-quick-alo-ph-img-circle[data-v-68ac1694],.big_size_button .btn-quick-mail-ph-img-circle[data-v-68ac1694],.big_size_button .quick-alo-ph-img-circle[data-v-68ac1694]{top:25px;left:25px;background-size:40px}.big_size_button.btn-quick-alo-phone[data-v-68ac1694],.big_size_button.btn-quick-mail-phone[data-v-68ac1694],.big_size_button.quick-alo-show[data-v-68ac1694]{right:15px}.btn-quick-alo-phone.left_position[data-v-68ac1694],.btn-quick-mail-phone.left_position[data-v-68ac1694],.quick-alo-show.left_position[data-v-68ac1694]{left:15px}body .big_size_button .scroll-top[data-v-68ac1694]{width:50px;height:50px;line-height:50px;font-size:25px}.big_size_button .scroll-top.active[data-v-68ac1694]{right:20px}.big_size_button .icon-facebook[data-v-68ac1694]{background-size:40px 40px!important}.disabled-link[data-v-68ac1694]{color:currentColor;pointer-events:none;cursor:not-allowed;opacity:.5;text-decoration:none}.addcart-link[data-v-68ac1694]{cursor:pointer}#wb-modal-cart[data-v-68ac1694]{z-index:99999}#wb-modal-cart .modal-title[data-v-68ac1694]{font-size:24px;font-weight:700}.wb_cart .form-my-account input[type=text][data-v-68ac1694],.wb_cart .form-my-account span.edit_message[data-v-68ac1694]{border:1px solid #e5e5e5;color:#999;height:40px;padding:0 20px;text-transform:none!important;width:100%;margin-bottom:10px}.wb_cart .form-my-account .title[data-v-68ac1694]{margin-bottom:26px}.wb_cart .form-my-account[data-v-68ac1694]{width:100%;max-width:100%}.wb_cart .account-register[data-v-68ac1694]{float:left;position:relative;width:100%}.wb_cart .account-register .form-my-account[data-v-68ac1694]{float:right}.wb_cart .account-register[data-v-68ac1694]:before{border-right:1px solid #e5e5e5;content:"";height:100%;left:-15px;position:absolute;top:0;width:1px}.wb_cart .form-my-account>p[data-v-68ac1694]{position:relative}.wb_cart .form-my-account label[data-v-68ac1694]{color:#555;font-weight:400;margin:0}.wb_cart .form-my-account .ship-address label[data-v-68ac1694]{color:#333}.wb_cart .form-my-account input[type=checkbox]+label[data-v-68ac1694]:before{border:1px solid #e5e5e5;content:"";display:inline-block;font-family:FontAwesome;font-size:14px;font-weight:400;height:20px;line-height:18px;margin-right:17px;text-align:center;vertical-align:middle;width:20px}.wb_cart .form-my-account input[type=checkbox]:checked+label[data-v-68ac1694]:before{font-family:FontAwesome;content:"\\F00C"}.wb_cart .form-my-account input[type=checkbox][data-v-68ac1694]{display:none}.wb_cart .form-my-account a[data-v-68ac1694]{position:absolute;right:0;top:0}.wb_cart .form-my-account input[type=submit][data-v-68ac1694]{border:none;color:#fff;height:40px;margin-top:10px;transition:all .3s ease-out 0s;width:110px}.wb_cart .form-my-account input[type=submit][data-v-68ac1694]:hover{background-color:#333}.wb_cart .form-my-account>p[data-v-68ac1694]:last-child{margin-top:20px}.wb_cart .box-col2 input[type=text][data-v-68ac1694],.wb_cart .box-col2 span.edit_message[data-v-68ac1694]{float:left;width:47.5%}.wb_cart .box-col2 input[type=text][data-v-68ac1694]:first-child,.wb_cart .box-col2 span.edit_message[data-v-68ac1694]{margin-right:5%}.wb_cart .form-my-account textarea[data-v-68ac1694]{border:1px solid #e5e5e5;color:#999;padding:10px 15px;text-transform:none;width:100%;resize:none}.wb_cart .ship-address>label[data-v-68ac1694]{font-size:18px;text-transform:unset}.wb_cart .check-billing[data-v-68ac1694]{border-right:1px solid #e5e5e5;margin-right:-15px}.wb_cart .check-address[data-v-68ac1694]{float:left;width:100%}.wb_cart .check-address .form-my-account[data-v-68ac1694]{float:right}.wb_cart .order_review_heading[data-v-68ac1694]{color:#000;font-size:18px;font-weight:700;margin:50px 0 -1px;padding:20px 0 10px;position:relative;text-transform:capitalize}.wb_cart .shop_table.woocommerce-checkout-review-order-table thread[data-v-68ac1694]{position:relative}.shop_table p[data-v-68ac1694]{margin:0;text-align:left!important}.wb_cart td.product-thumbnail img[data-v-68ac1694]{max-width:100px}.wb_cart .woocommerce table.shop_table[data-v-68ac1694]{border:1px solid #e5e5e5;border-collapse:collapse;border-radius:0;margin:0 0 50px;text-align:left;width:100%}.wb_cart .woocommerce table.shop_table thead[data-v-68ac1694]{background:#f4f4f4 none repeat scroll 0 0;font-weight:700;position:relative;text-transform:uppercase}.wb_cart .woocommerce table.shop_table thead th[data-v-68ac1694]{padding:15px 20px;text-transform:capitalize}.wb_cart .woocommerce table.shop_table td[data-v-68ac1694]{border-top:1px solid #e5e5e5;padding:15px 20px;vertical-align:middle}.wb_cart .woocommerce table[data-v-68ac1694],.wb_cart .woocommerce td[data-v-68ac1694],.wb_cart .woocommerce th[data-v-68ac1694]{border:1px solid #e5e5e5!important;color:#555;margin:0;padding:15px 10px!important}.wb_cart .woocommerce tfoot th[data-v-68ac1694]{text-transform:uppercase}.wb_cart #shipping_method li[data-v-68ac1694]{padding:10px 0}.wb_cart #shipping_method li label[data-v-68ac1694]{cursor:pointer;margin:0;padding-left:25px;position:relative}.wb_cart #shipping_method li input[type=radio][data-v-68ac1694]{display:none}#shopping-cart .pname.product-name[data-v-68ac1694]{text-align:left}body.checkout input#coupon_code[data-v-68ac1694]{margin-bottom:0}@media screen and (-webkit-min-device-pixel-ratio:0){.wb_cart #shipping_method li input[type=radio]+label[data-v-68ac1694]:before{line-height:13px}}.wb_cart #shipping_method li input[type=radio]+label[data-v-68ac1694]:before{border:1px solid #e5e5e5;border-radius:50%;content:"";display:inline-block;font-family:FontAwesome;font-size:6px;font-weight:400;height:14px;left:0;line-height:13px;margin-right:10px;position:absolute;text-align:center;top:2px;vertical-align:middle;width:14px}.wb_cart #shipping_method li input[type=radio]:checked+label[data-v-68ac1694]:before{content:"\\F111"}.wb_cart .payment_methods.methods[data-v-68ac1694],.wb_cart .ship_methods.methods[data-v-68ac1694]{border:1px solid #e5e5e5;margin:0 0 -1px}.wb_cart .payment_methods.methods li[data-v-68ac1694],.wb_cart .ship_methods.methods li[data-v-68ac1694]{border-bottom:1px solid #e5e5e5;padding:20px}.wb_cart .payment_methods.methods li[data-v-68ac1694]:last-child,.wb_cart .ship_methods.methods li[data-v-68ac1694]:last-child{border:none}.wb_cart .payment_methods.methods li label[data-v-68ac1694],.wb_cart .ship_methods.methods li label[data-v-68ac1694]{font-size:18px;margin:0 0 0 7px;text-transform:capitalize}.wb_cart .payment_box.payment_method_bacs>p[data-v-68ac1694]{margin:5px 0 0;padding-left:24px}.wb_cart .payment_method_paypal img[data-v-68ac1694]{margin:-6px 10px 0;max-width:160px}.wb_cart .form-row.place-order[data-v-68ac1694]{border:1px solid #e5e5e5;padding:20px;text-align:right}.wb_cart .form-row.place-order input[type=submit][data-v-68ac1694]{border:none;color:#fff;height:40px;padding:0 25px;text-transform:capitalize;transition:all .3s ease-out 0s}.wb_cart .form-row.place-order input[type=submit][data-v-68ac1694]:hover{background-color:#333}.wb_cart .form-my-account select[data-v-68ac1694]{border:1px solid #e5e5e5;color:#999;height:40px;padding:0 20px;text-transform:capitalize;width:100%;-webkit-appearance:menulist;-moz-appearance:menulist;appearance:menulist;margin-bottom:10px}.wb_cart .form-my-account select option[data-v-68ac1694]{text-transform:capitalize;font-weight:400;padding:10px 20px}.wb_cart .woocommerce table.shop_table td.actions[data-v-68ac1694]{text-align:unset}.wb_cart .woocommerce table.shop_table td .coupon[data-v-68ac1694]{float:left;padding-bottom:20px}.wb_cart .woocommerce table.shop_table td.actions input[type=submit][data-v-68ac1694]{border:none;color:#fff;height:40px;padding:0 30px;font-size:20px}.wb_cart .woocommerce table.shop_table td.actions input[type=submit][data-v-68ac1694]:hover{background:#333 none repeat scroll 0 0}.wb_cart .woocommerce table.shop_table td.actions input[type=text][data-v-68ac1694],.wb_cart .woocommerce table.shop_table td.actions span.edit_message[data-v-68ac1694]{border:1px solid #e5e5e5;color:#999;height:36px;padding:0 20px;width:98%;margin-right:15px;margin-bottom:20px}.wb_cart .woocommerce .cart-content-page table.shop_table thead[data-v-68ac1694]{background:#f4f4f4}.wb_cart .woocommerce .cart-content-page table.shop_table thead th[data-v-68ac1694]{border-color:#e5e5e5;color:#333}.wb_cart .woocommerce .cart-content-page table.shop_table .product-thumbnail img[data-v-68ac1694]{max-width:70px}.wb_cart .cart-collaterals .cart_totals>h2[data-v-68ac1694]{background:#f4f4f4 none repeat scroll 0 0;border:1px solid #e5e5e5;font-size:18px;font-weight:700;margin:0 0 -1px;padding:15px 20px;text-transform:uppercase}.wb_cart .content-cart-checkout>h2[data-v-68ac1694]{margin-bottom:30px}.wb_cart .content-cart-checkout[data-v-68ac1694]{margin-bottom:50px}.wb_cart p[data-v-68ac1694]{margin:10px 0}.wb_cart .bg-color[data-v-68ac1694]{background:#45bf61}.wb_cart .title12[data-v-68ac1694],.wb_cart .title14[data-v-68ac1694],.wb_cart .title16[data-v-68ac1694],.wb_cart .title18[data-v-68ac1694],.wb_cart .title24[data-v-68ac1694],.wb_cart .title30[data-v-68ac1694],.wb_cart .title40[data-v-68ac1694],.wb_cart .title48[data-v-68ac1694],.wb_cart .title60[data-v-68ac1694],.wb_cart .title90[data-v-68ac1694],.wb_cart .title100[data-v-68ac1694],.wb_cart .title120[data-v-68ac1694]{margin:0;font-size:14px}.wb_cart .title12[data-v-68ac1694]{font-size:12px}.wb_cart .title16[data-v-68ac1694]{font-size:16px}.wb_cart .title18[data-v-68ac1694]{font-size:18px}.wb_cart .title24[data-v-68ac1694]{font-size:24px}.wb_cart .title30[data-v-68ac1694]{font-size:30px}.wb_cart .title40[data-v-68ac1694]{font-size:40px}.wb_cart .title48[data-v-68ac1694]{font-size:48px}.wb_cart .title60[data-v-68ac1694]{font-size:60px}.wb_cart .title90[data-v-68ac1694]{font-size:90px}.wb_cart .title120[data-v-68ac1694]{font-size:120px}.wb_cart .title100[data-v-68ac1694]{font-size:100px}.cardList[data-v-68ac1694]{display:none}.cardList.active[data-v-68ac1694]{display:block}.edit_bank_method[data-v-68ac1694]{border-bottom:none!important}.shop_table th[data-v-68ac1694]{text-align:center}span.message[data-v-68ac1694]{position:absolute;bottom:-20px;color:red}.form-my-account[data-v-68ac1694],.form-my-account>p[data-v-68ac1694]{max-width:100%}.form-my-account input[type=text][data-v-68ac1694],.form-my-account span.edit_message[data-v-68ac1694]{text-transform:inherit}.woocommerce .edit_table_cart table[data-v-68ac1694],.woocommerce .edit_table_cart table.shop_table[data-v-68ac1694],.woocommerce .edit_table_cart td[data-v-68ac1694],.woocommerce .edit_table_cart th[data-v-68ac1694]{border:none!important}.edit_hide[data-v-68ac1694]{display:none}.payment_bank[data-v-68ac1694]{margin-top:28px}.edit_payment[data-v-68ac1694]{margin-bottom:30px}.woocommerce table.shop_table td.actions input[type=button][data-v-68ac1694]{padding:0 10px}.wb_cart .form-my-account span.edit_message[data-v-68ac1694]{border:none;color:red;padding:10px 20px;float:right;margin-bottom:0}.wb_cart .woocommerce table.shop_table[data-v-68ac1694]{margin:0}.wb_cart .woocommerce table.shop_table.shopping-cart-mini[data-v-68ac1694],.woocommerce table.shop_table.shopping-cart-mini[data-v-68ac1694],.woocommerce table.shop_table.shopping-cart-mini td[data-v-68ac1694],.woocommerce table.shop_table.shopping-cart-mini th[data-v-68ac1694]{border:none!important}.woocommerce table.shop_table.shopping-cart-mini td[data-v-68ac1694]{border-bottom:1px solid #e5e5e5!important;text-align:unset}.wb_cart .actions.edit_coupon[data-v-68ac1694]{padding:20px 0 0!important}.mini-cart-link[data-v-68ac1694]{cursor:pointer}.edit_apply_coupon[data-v-68ac1694]{padding:8px 10px;height:auto;line-height:normal}#check-coupon[data-v-68ac1694]{font-size:14px}ul.bankList[data-v-68ac1694]{clear:both;height:202px;width:636px}ul.bankList li[data-v-68ac1694]{list-style-position:outside;list-style-type:none;cursor:pointer;float:left;margin-right:0;padding:5px 2px;text-align:center;width:90px}.list-content li[data-v-68ac1694]{list-style:none outside none;margin:0 0 10px}.list-content li .boxContent[data-v-68ac1694]{display:none;border:1px solid #ccc;padding:10px}.list-content li.active .boxContent[data-v-68ac1694]{display:block}.list-content li .boxContent ul[data-v-68ac1694]{height:auto}i.ACB[data-v-68ac1694],i.AGB[data-v-68ac1694],i.AMREX[data-v-68ac1694],i.BAB[data-v-68ac1694],i.BIDV[data-v-68ac1694],i.DAB[data-v-68ac1694],i.EXB[data-v-68ac1694],i.GPB[data-v-68ac1694],i.HDB[data-v-68ac1694],i.ICB[data-v-68ac1694],i.JCB[data-v-68ac1694],i.MASTE[data-v-68ac1694],i.MB[data-v-68ac1694],i.MSB[data-v-68ac1694],i.NAB[data-v-68ac1694],i.NVB[data-v-68ac1694],i.OJB[data-v-68ac1694],i.PGB[data-v-68ac1694],i.SCB[data-v-68ac1694],i.SEA[data-v-68ac1694],i.SGB[data-v-68ac1694],i.SHB[data-v-68ac1694],i.TCB[data-v-68ac1694],i.TPB[data-v-68ac1694],i.VAB[data-v-68ac1694],i.VCB[data-v-68ac1694],i.VIB[data-v-68ac1694],i.VISA[data-v-68ac1694],i.VPB[data-v-68ac1694]{width:80px;height:30px;display:block;background:url(https://www.nganluong.vn/webskins/skins/nganluong/checkout/version3/images/bank_logo.png) no-repeat}i.MASTE[data-v-68ac1694]{background-position:0 -31px}i.AMREX[data-v-68ac1694]{background-position:0 -62px}i.JCB[data-v-68ac1694]{background-position:0 -93px}i.VCB[data-v-68ac1694]{background-position:0 -124px}i.TCB[data-v-68ac1694]{background-position:0 -155px}i.MB[data-v-68ac1694]{background-position:0 -186px}i.VIB[data-v-68ac1694]{background-position:0 -217px}i.ICB[data-v-68ac1694]{background-position:0 -248px}i.EXB[data-v-68ac1694]{background-position:0 -279px}i.ACB[data-v-68ac1694]{background-position:0 -310px}i.HDB[data-v-68ac1694]{background-position:0 -341px}i.MSB[data-v-68ac1694]{background-position:0 -372px}i.NVB[data-v-68ac1694]{background-position:0 -403px}i.DAB[data-v-68ac1694]{background-position:0 -434px}i.SHB[data-v-68ac1694]{background-position:0 -465px}i.OJB[data-v-68ac1694]{background-position:0 -496px}i.SEA[data-v-68ac1694]{background-position:0 -527px}i.TPB[data-v-68ac1694]{background-position:0 -558px}i.PGB[data-v-68ac1694]{background-position:0 -589px}i.BIDV[data-v-68ac1694]{background-position:0 -620px}i.AGB[data-v-68ac1694]{background-position:0 -651px}i.SCB[data-v-68ac1694]{background-position:0 -682px}i.VPB[data-v-68ac1694]{background-position:0 -713px}i.VAB[data-v-68ac1694]{background-position:0 -744px}i.GPB[data-v-68ac1694]{background-position:0 -775px}i.SGB[data-v-68ac1694]{background-position:0 -806px}i.NAB[data-v-68ac1694]{background-position:0 -837px}i.BAB[data-v-68ac1694]{background-position:0 -868px}ul.cardList li[data-v-68ac1694]{cursor:pointer;float:left;margin-right:0;padding:5px 4px;text-align:center;width:90px}.woocommerce table.shop_table td.actions input[type=button][data-v-68ac1694]{border:none;height:36px;padding:0 20px}.payment_description[data-v-68ac1694]{margin-top:5px;line-height:20px;font-size:90%;padding-left:26px}.payment_description p[data-v-68ac1694],.ship_description p[data-v-68ac1694]{padding-top:15px}.payment_description em[data-v-68ac1694]{white-space:pre}.payment_method_bacs label[data-v-68ac1694],.ship_method_bacs label[data-v-68ac1694]{font-weight:400;width:90%}.edit_apply_coupon[data-v-68ac1694]{vertical-align:top}.noti_coupon[data-v-68ac1694]{width:100%;text-align:center;float:left;display:none}.noti_coupon .alert-danger[data-v-68ac1694]{border:2px dashed #ebccd1;background:0 0}.edit_coupon .coupon_message[data-v-68ac1694]{display:none;width:100%;float:left}.edit_coupon .coupon_message h6[data-v-68ac1694]{margin:10px 0}.edit_coupon .alert-success[data-v-68ac1694]{background:0 0;border:none;padding:5px}.edit_coupon .alert-success p[data-v-68ac1694]{color:#337ab7;margin:0}.shipping_fee .shipping_message[data-v-68ac1694]{float:left;color:red;width:100%;border:2px dashed #ebccd1;background:0 0}.shipping_fee .shipping_message_val[data-v-68ac1694]{display:none;width:100%}.order-total[data-v-68ac1694]{font-size:20px}#shopping-cart-mini .cart_item img.pimg.product-image[data-v-68ac1694]{border:1px solid #ccc;width:50px;height:50px;border-radius:5px;padding:3px}#shopping-cart-mini .cart_item .pqty[data-v-68ac1694]{position:absolute;left:35px;width:25px;height:25px;background:#4f8bc1;border-radius:50%;color:#fff;line-height:25px;top:-10px}#shopping-cart-mini .cart_item .pimg-name[data-v-68ac1694]{position:relative}.wb-tks-title[data-v-68ac1694]{color:#45bf61}.wb-back-to-home[data-v-68ac1694]{color:#337ab7}#shopping-cart-mini .alert[data-v-68ac1694]{padding:5px;margin-bottom:0}#coupon_list .close[data-v-68ac1694]{border-radius:50%;background:#bbb;width:25px;height:25px;font-size:20px;line-height:25px;text-align:center}.wb_cart .form-my-account input[type=number][data-v-68ac1694]{border:1px solid #e5e5e5;color:#999;height:40px;padding:0 20px;text-transform:capitalize;width:100%;margin-bottom:10px}.wb_cart .form-my-account input[type=number][data-v-68ac1694]::-webkit-inner-spin-button,.wb_cart .form-my-account input[type=number][data-v-68ac1694]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wb_cart .form-my-account input[type=number][data-v-68ac1694]{-moz-appearance:textfield}#shopping-cart .table[data-v-68ac1694]{border:none;width:100%}#shopping-cart .table td[data-v-68ac1694]{vertical-align:middle;padding:15px 0;border:none;border:none!important;text-align:left}#confirmGoToCartModal[data-v-68ac1694]{width:50%;margin:0 auto;z-index:99999}#confirmGoToCartModal .btn-default[data-v-68ac1694]{background-color:#fff;border-color:#ccc;color:#333}#confirmGoToCartModal .btn-default[data-v-68ac1694]:hover{background-color:#e6e6e6;border-color:#adadad;color:#333}#cartPage a.checkout-button[data-v-68ac1694]:hover{background-color:#333}#cartPage[data-v-68ac1694]{padding-bottom:30px}#cartPage #shopping-cart th[data-v-68ac1694]{text-transform:uppercase}#cartPage #note_rules[data-v-68ac1694]{text-align:center;margin-top:30px}#cartPage #order_review[data-v-68ac1694]{padding:20px}#cartPage #stotal-mini[data-v-68ac1694]{font-weight:700}#cartPage .panel-body[data-v-68ac1694]{padding:0}#cartPage a#continueShipping[data-v-68ac1694]{height:42px}#cartPage td.product-thumbnail[data-v-68ac1694],#cartPage td img[data-v-68ac1694]{max-width:50px}#wbFastOrderBox input[data-v-68ac1694]{height:40px}#wbFastOrderBox[data-v-68ac1694]{margin-bottom:10px}#wbFastOrderBox button[data-v-68ac1694]{color:#fff!important;display:inline-block;height:40px;line-height:unset;padding:0 25px;transition:all .3s ease-out 0s;border-radius:0;font-size:medium}.pr-0[data-v-68ac1694]{padding-right:0}body.cart #wbFastOrderBox button[data-v-68ac1694]{padding:0 15px}body.cart .gift-items[data-v-68ac1694]{margin-top:10px}body.cart h1[data-v-68ac1694]{margin-bottom:30px;font-weight:700;font-size:24px}body.cart .fast-order-note[data-v-68ac1694]{font-size:80%;color:#666;margin-bottom:5px;margin-top:-5px}body.cart #shopping-cart .wb-none-border-top[data-v-68ac1694]{border-top:none}body.cart .noti_coupon[data-v-68ac1694]{margin-top:10px}body.cart .noti_coupon .alert[data-v-68ac1694]{padding:5px}body.cart .wb-main-content[data-v-68ac1694]{padding-top:40px;background-color:#fafafa}body.cart .cart-item-data[data-v-68ac1694],body.cart .cart-item-total[data-v-68ac1694]{background-color:#fff;width:100%}body.cart .cart-item-data[data-v-68ac1694]{padding-top:20px}body.cart .order-breadcrumb[data-v-68ac1694]{display:none}body.cart .price-note[data-v-68ac1694]{font-size:80%;margin-top:5px}body.cart .price-note del[data-v-68ac1694]{color:#a2a2a2}body.cart .price-note span[data-v-68ac1694]{font-weight:700;position:relative;margin-left:13px}body.cart .price-note span[data-v-68ac1694]:before{content:"";width:1px;height:12px;background:#787878;position:absolute;left:-8px;top:2px}input[type=number][data-v-68ac1694]::-webkit-inner-spin-button,input[type=number][data-v-68ac1694]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-68ac1694]{-moz-appearance:textfield}.quantity input[data-v-68ac1694]{width:45px;height:42px;line-height:1.65;float:left;display:block;padding:0;margin:0;border:1px solid #eee;border-radius:unset}.quantity input[data-v-68ac1694]:focus{outline:0}.quantity-nav[data-v-68ac1694]{float:left;position:relative;height:42px;margin-left:20px}.quantity-button[data-v-68ac1694]{position:relative;cursor:pointer;border-right:1px solid #eee;width:20px;text-align:center;color:#333;font-size:13px;font-family:Trebuchet MS,Helvetica,sans-serif!important;line-height:1.7;transform:translateX(-100%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.quantity-button.quantity-up[data-v-68ac1694]{position:absolute;height:50%;top:0;border-bottom:1px solid #eee;border-top:1px solid #eee}.quantity-button.quantity-down[data-v-68ac1694]{position:absolute;bottom:0;height:50%;border-bottom:1px solid #eee}.shop_table .product-info[data-v-68ac1694]{position:relative}.edit_cart[data-v-68ac1694]{float:right;color:#337ab7}body.checkout a.btn-primary[data-v-68ac1694]:link,body.checkout a.btn-primary[data-v-68ac1694]:visited{color:#fff}#shopping-cart .pdelete[data-v-68ac1694]{margin-top:12px;font-size:14px}#shopping-cart .pdelete a.delete[data-v-68ac1694]:hover{text-decoration:underline}body.cart #loading[data-v-68ac1694]:before,body.checkout #loading[data-v-68ac1694]:before{background-color:rgba(21,185,173,0)}body.cart .sk-circle .sk-child[data-v-68ac1694]:before,body.checkout .sk-circle .sk-child[data-v-68ac1694]:before{background-color:#2f83b6}body.checkout .coupon_message[data-v-68ac1694]{text-align:left}body.cart #coupon_list[data-v-68ac1694],body.checkout #coupon_list[data-v-68ac1694]{margin-bottom:0;margin-top:0}body.cart #coupon_list label[data-v-68ac1694],body.checkout #coupon_list label[data-v-68ac1694]{font-weight:700;padding:5px 10px;margin-right:10px;position:relative;background-color:red;color:#fff;margin-bottom:0;margin-top:10px}body.cart #coupon_list label a[data-v-68ac1694],body.checkout #coupon_list label a[data-v-68ac1694]{position:absolute;top:-6px;right:-3px;background-color:#78a7ce;padding:1px 4px;border-radius:50%;color:#fff;font-weight:400;font-size:12px}@media only screen and (max-width:767px){.wb-product-delete[data-v-68ac1694],.wb-product-price[data-v-68ac1694],.wb-product-quantity[data-v-68ac1694],.wb-product-sub_total[data-v-68ac1694]{display:none}#shopping-cart .pname.product-name[data-v-68ac1694]{width:95%!important}#cartPage td.product-thumbnail[data-v-68ac1694]{padding:0!important}#cartPage td.product-info[data-v-68ac1694]{text-align:left}.shop_table p[data-v-68ac1694]{margin-bottom:10px}span.pdelete.product-remove[data-v-68ac1694]{position:absolute;top:15px;right:15px}span.pdelete.product-remove i[data-v-68ac1694]{font-size:18px;color:#797979}#cartPage td img[data-v-68ac1694]{width:80px;max-width:80px}}@media only screen and (max-width:480px){#shopping-cart .table td[data-v-68ac1694]{white-space:normal}span.pdelete.product-remove[data-v-68ac1694]{position:absolute;right:10px}}@media only screen and (max-width:360px){#btn_checkout[data-v-68ac1694],#continue_shopping[data-v-68ac1694]{float:left!important;margin-bottom:10px}}@media only screen and (max-width:350px){.edit_cart[data-v-68ac1694]{float:none}}.newsletters[data-v-68ac1694]{display:inline-block;width:100%}.newsletters h2[data-v-68ac1694]{font-size:20px;color:#000;font-weight:600;text-transform:uppercase}.newsletters input[data-v-68ac1694]{background:#f5f5f5 none repeat scroll 0 0;border:none;color:#000;height:55px;margin:0;padding:0 20px;width:390px}.newsletters button[data-v-68ac1694]{border-radius:0;background:#000;color:#fff;text-transform:uppercase;box-shadow:none;height:55px;float:right;width:180px;border:1px solid #000;transition:.5s;letter-spacing:.5px}.newsletters button.btn-default[data-v-68ac1694]:focus,.newsletters button[data-v-68ac1694]:hover{background:#fff;border-color:#000;color:#000;transition:.5s;box-shadow:none}.newsletter-popup .popup-text[data-v-68ac1694]{text-align:center}.newsletter-popup .popup-image[data-v-68ac1694]{margin-bottom:35px}.newsletter-popup .checkbox label[data-v-68ac1694]{color:#000}.newsletter-popup .popup-title[data-v-68ac1694]{font-family:Open Sans;font-size:80px;line-height:60px;text-transform:capitalize;color:#000;font-weight:700;padding-bottom:0;float:left}.newsletter-popup .popup-title span[data-v-68ac1694]{font-size:24px;margin-left:-20px}.newsletter-popup[data-v-68ac1694],.success_msg[data-v-68ac1694]{background:#f0f0f0;box-shadow:0 4px 5.94px .06px rgba(0,0,0,.13);height:auto;left:0;margin:0 auto;padding:25px;position:fixed;right:0;top:20%;width:750px}.newsletter-popup-top[data-v-68ac1694]{float:right;margin:55px auto 0 20px;overflow:visible;padding:0 0 50px;width:290px}.newsletter-popup-top .btn-default[data-v-68ac1694],.newsletter-popup-top .btn-default[data-v-68ac1694]:hover{border:0;transition:all .5s ease 0s;padding:10px 18px;margin:20px 0 0;float:left}.newsletter-popup-top .popup-desc[data-v-68ac1694]{padding:20px;color:#000;font-weight:400;font-size:14px;text-transform:uppercase;border-top:1px solid #cecece;border-bottom:1px solid #cecece;margin:0 0 30px;line-height:17px;text-align:left;clear:left}.newsletter-popup-top .popup-desc span[data-v-68ac1694]{font-weight:700}.newsletter-popup-top input[data-v-68ac1694]{background:#fff none repeat scroll 0 0;border:1px solid #fff;box-shadow:none;box-sizing:border-box;color:#333;font-size:14px;margin:0;padding:5px 18px;width:100%}#xout[data-v-68ac1694]{color:#000;cursor:pointer;font-size:27px;font-weight:300;height:30px;position:absolute;right:0;top:10px;width:30px}#xout[data-v-68ac1694]:hover{color:#555}#checkme[data-v-68ac1694]{margin:20px 5px 0 0;width:20px}label.checkme[data-v-68ac1694]{clear:left;display:block;float:left}.btn-quick-alo-phone.btn-quick-alo-green:hover .btn-quick-alo-ph-img-circle[data-v-68ac1694]{background-color:#00a1ff}', ""]), t.exports = e
    }, , , , , , , , , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/text-bubble.15f4971.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/grass1.90fdadb.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/grass2.22ed1c7.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/grass3.d5f965d.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/tree.64d39d9.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/tree-front.ff84f0e.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/mountain.e3b8053.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/mountain1.43be254.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/cloud.450ed2c.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/cloud1.ef508d8.png"
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAA8BAMAAAAQt5wCAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAH8aFQaPjZ8bV9HgAAAIgSURBVHja7N0/T5NRFAbwAy26ognoqFFjR41GO4IGWcE4MGpw6OhkOmoVPB/bJpDwp2+BSu17mvx+H+Ik99znPjdu6v3HQR4/e70eALU96OWJ0csAqGwjzzwNgLo2Mk0sYCl08qL9AKip28uLjrcCoKRhXvYrACrq5KS9ACion5NGAVBPJ5s8CoByhtnkKACq6WazbwFQzGY2+x0AxRxks+MAqKWb07wIgFJWc5qfAVDKMMfcEwLLoJdTqfIDSulmWmIBy2Etp/scAC1b2X31dvu0xr2XY5JYQFE7gxw7XI94k+fpmAGq+Z4nRlsf8hyNDUA598/mUV4nAFp0N2egKBloUz+bKGwA6lnLWXwSHQXa08/ZPDeygJZ0c1ZHJhbQjjvZQBgLqKifs3scAIu3kv9g5FAILNq99ejkNXz4BRSwM8h8splXUOQH1PAuL5EfBYrq5LX0YgE19PI2/gTAoqzm1dTMAGX08yb8RgG0byXHbN2BZbCWt7S/ux0Ai/Awb+8wABZgmHPwNQAaFQo16EsGFmiQ8/AlAP67PCWNBZSX6UwILImcj70AmFByh+UNNLAABzkXPwJgUsEcloEF/G3vjk0ABGIogF7nBOIG1rqi1Y1tYSXc2YjyD94bIpCQ/PSkbborWEBX1C2hbHfgUVJaw2UrAA2JQyypWEBTYE/oBTTQkbfYYIQF/GKqNx5AA8FmhznAMJa1vnHsBeBzJ37f3AXazaBpAAAAAElFTkSuQmCC"
    }, function(t, e, o) {
        t.exports = o.p + "img/car-wheels.436c3fc.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/car.864179f.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/car1.2fec0d2.png"
    }, function(t, e, o) {
        t.exports = o.p + "img/car-wheels1.ef24b85.png"
    }])
]);