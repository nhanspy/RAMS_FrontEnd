(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        588: function(t, e, n) {
            var content = n(671);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("152c79fa", content, !0, {
                sourceMap: !1
            })
        },
        661: function(t, e, n) {
            t.exports = n.p + "img/aboutus-01.463a95e.png"
        },
        662: function(t, e, n) {
            t.exports = n.p + "img/aboutus-02.ccea39b.png"
        },
        663: function(t, e, n) {
            t.exports = n.p + "img/aboutus-03.f399bd7.png"
        },
        664: function(t, e, n) {
            t.exports = n.p + "img/aboutus-04.d367c5c.png"
        },
        665: function(t, e, n) {
            t.exports = n.p + "img/aboutus-05.835c719.png"
        },
        666: function(t, e, n) {
            t.exports = n.p + "img/aboutus-06.730c0a0.png"
        },
        667: function(t, e, n) {
            t.exports = n.p + "img/aboutus-07.d0581f9.png"
        },
        668: function(t, e, n) {
            t.exports = n.p + "img/aboutus-08.5c1c1cb.png"
        },
        669: function(t, e, n) {
            t.exports = n.p + "img/aboutus-09.b13f78d.png"
        },
        670: function(t, e, n) {
            "use strict";
            var o = n(588);
            n.n(o).a
        },
        671: function(t, e, n) {
            (e = n(14)(!1)).push([t.i, ".about-container[data-v-3751b6ae]{max-width:936px;width:inherit;display:flex;justify-content:center;align-items:center;flex-direction:column;justify-self:center;align-self:center}.inner-single-content[data-v-3751b6ae],.single-content[data-v-3751b6ae]{padding-top:0}.center[data-v-3751b6ae]{display:block;margin-left:auto;margin-right:auto;width:100%;padding-bottom:10px;padding-left:50px;padding-right:50px}", ""]), t.exports = e
        },
        890: function(t, e, n) {
            "use strict";
            n.r(e);
            n(20), n(17), n(13), n(12), n(18);
            var o, c = n(0),
                r = n(3),
                l = n(569),
                d = n(571),
                v = n(575),
                _ = n(10),
                y = n(63),
                f = n(203);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function x(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var z = (o = {
                    head: n.n(f).a
                }, Object(c.a)(o, "head", (function() {
                    return {
                        title: this.localizedHeadTitle
                    }
                })), Object(c.a)(o, "computed", x(x({}, Object(r.e)({
                    locale: function(t) {
                        return t.locale
                    }
                })), {}, {
                    localized: function() {
                        return v.a[this.locale]
                    },
                    localizedHeadTitle: function() {
                        return _.a[this.locale].pageHeadTitle.aboutUs
                    }
                })), Object(c.a)(o, "components", {
                    CompServices: d.a,
                    Sumary: l.a,
                    Fragment: y.a
                }), o),
                C = (n(670), n(2)),
                component = Object(C.a)(z, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "about-container"
                    }, [o("section", {
                        attrs: {
                            id: "body-content"
                        }
                    }, [o("div", {
                        staticClass: "single-content"
                    }, [o("div", {
                        staticClass: "container inner-single-content bg-white"
                    }, [o("h1", {
                        staticClass: "text-center text-primary"
                    }, [t._v(t._s(t.localized.name))]), t._v(" "), o("p", {
                        staticClass: "text-center quote"
                    }, [t._v('"' + t._s(t.localized.slogan) + '"')]), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("h3", [o("i", {
                        staticClass: "fa fa-share text-success"
                    }), t._v("\n            " + t._s(t.localized.about.title) + "\n          ")])]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(661)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "a" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_1[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(662)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "b" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_2[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(663)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "c" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_3[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(664)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "d" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_4[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(665)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "e" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_5[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(666)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "f" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_6[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(667)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "g" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_7[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(668)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "h" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_8[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), o("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "center",
                        attrs: {
                            "data-src": n(669)
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "body-text"
                    }, [o("blockquote", t._l(2, (function(e) {
                        return o("p", {
                            key: "i" + e
                        }, [t._v("\n              " + t._s(t.localized.about.texts_9[e - 1]) + "\n            ")])
                    })), 0)]), t._v(" "), t._l(t.localized.contents, (function(content, e) {
                        return o("div", {
                            key: "c" + e,
                            staticClass: "body-text"
                        }, [o("h3", [o("i", {
                            class: "fa text-success " + content.icon
                        }), t._v("\n            " + t._s(content.title) + "\n          ")]), t._v(" "), "images" == content.texts.type ? o("p", {
                            domProps: {
                                innerHTML: t._s(content.texts.content)
                            }
                        }) : t._e(), t._v(" "), "text" == content.texts.type ? o("p", [o("i", [o("blockquote", {
                            domProps: {
                                innerHTML: t._s(content.texts.content)
                            }
                        })])]) : t._e()])
                    }))], 2)])]), t._v(" "), o("Sumary"), t._v(" "), o("CompServices")], 1)
                }), [], !1, null, "3751b6ae", null);
            e.default = component.exports
        }
    }
]);