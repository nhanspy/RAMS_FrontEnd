(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        622: function(t, e, r) {
            var content = r(775);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(15).default)("8adae6c8", content, !0, {
                sourceMap: !1
            })
        },
        623: function(t, e, r) {
            var content = r(777);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(15).default)("645feae4", content, !0, {
                sourceMap: !1
            })
        },
        624: function(t, e, r) {
            var content = r(779);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(15).default)("55977983", content, !0, {
                sourceMap: !1
            })
        },
        625: function(t, e, r) {
            var content = r(781);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(15).default)("4d628073", content, !0, {
                sourceMap: !1
            })
        },
        774: function(t, e, r) {
            "use strict";
            var n = r(622);
            r.n(n).a
        },
        775: function(t, e, r) {
            (e = r(14)(!1)).push([t.i, ".item-date[data-v-60a4e22c]{font-size:15px;color:#637280;margin-bottom:8px}.item-title[data-v-60a4e22c]{font-size:18px;font-weight:600;color:#141414}.image[data-v-60a4e22c]{max-height:100px;width:100%;-o-object-fit:cover;object-fit:cover}.item-content[data-v-60a4e22c]{font-size:15px;color:#141414;max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.item-more[data-v-60a4e22c]{font-family:SFProText;font-style:italic;color:#637280;border-bottom:2px solid #637280}.item[data-v-60a4e22c]{margin-bottom:30px;width:100%;max-height:220px}", ""]), t.exports = e
        },
        776: function(t, e, r) {
            "use strict";
            var n = r(623);
            r.n(n).a
        },
        777: function(t, e, r) {
            (e = r(14)(!1)).push([t.i, ".title[data-v-290d47ba]{font-size:24px;font-weight:600;color:#f15a24;margin-bottom:24px;text-transform:uppercase}.items[data-v-290d47ba]{overflow:auto;display:flex;flex-direction:row;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.pair[data-v-290d47ba]{width:100%;position:relative;min-height:1px;flex:0 0 100%;max-width:100%;float:left;scroll-snap-align:start}.indicators[data-v-290d47ba]{padding:15px}.indicator[data-v-290d47ba]{border-radius:50%;width:8px;height:8px;border:none;background-color:#d1d1d1;padding:0;margin-right:16px}.indicator[data-v-290d47ba]:disabled{width:10px;height:10px;border:2px solid #f15a24;background-color:#fff}", ""]), t.exports = e
        },
        778: function(t, e, r) {
            "use strict";
            var n = r(624);
            r.n(n).a
        },
        779: function(t, e, r) {
            (e = r(14)(!1)).push([t.i, ".title[data-v-22e198e8]{font-size:24px;font-weight:600;color:#f15a24;margin-bottom:24px;text-transform:uppercase}.items[data-v-22e198e8]{overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.news-item-container[data-v-22e198e8]{width:100%;position:relative;min-height:1px;flex:0 0 100%;max-width:100%;float:left;scroll-snap-align:start}.image[data-v-22e198e8]{width:100%;height:178px;border-radius:8px;-o-object-fit:contain;object-fit:contain;border:none}.indicators[data-v-22e198e8]{padding:15px;position:-webkit-sticky;position:sticky;top:100%}.indicator[data-v-22e198e8]{border-radius:50%;width:8px;height:8px;border:none;background-color:#d1d1d1;padding:0;margin-right:16px}.indicator[data-v-22e198e8]:disabled{width:10px;height:10px;border:2px solid #f15a24;background-color:#fff}.item-date[data-v-22e198e8]{font-size:15px;color:#637280;margin-bottom:8px}.item-title[data-v-22e198e8]{font-size:18px;font-weight:600;color:#141414}.item-content[data-v-22e198e8]{font-size:15px;color:#141414}.item-more[data-v-22e198e8]{font-family:SFProText;font-style:italic;color:#637280;border-bottom:2px solid #637280}", ""]), t.exports = e
        },
        780: function(t, e, r) {
            "use strict";
            var n = r(625);
            r.n(n).a
        },
        781: function(t, e, r) {
            (e = r(14)(!1)).push([t.i, ".title[data-v-b856a5e0]{font-size:24px;font-weight:600;color:#f15a24;margin-bottom:24px;text-transform:uppercase}.new-items[data-v-b856a5e0]{overflow:hidden;padding-left:15px;padding-right:15px}.container[data-v-b856a5e0]{max-width:936px;margin-top:10px}.search-box[data-v-b856a5e0]{width:inherit;max-width:936px;margin:0}", ""]), t.exports = e
        },
        883: function(t, e, r) {
            "use strict";
            r.r(e);
            r(20), r(17), r(13), r(12), r(18), r(62), r(273);
            var n = r(0),
                o = r(3),
                c = r(9),
                l = r(37),
                f = r(5),
                d = r.n(f),
                m = {
                    props: {
                        info: {
                            type: Object
                        }
                    },
                    computed: {
                        imageSrc: function() {
                            var t = this.info.hinhanhImageSample;
                            return c.a.getNewsImageURL(t)
                        }
                    },
                    methods: {
                        getTime: function(t) {
                            return d()(t).format("DD/MM/YYYY")
                        },
                        getUrl: function(t) {
                            return c.a.newsLink(t)
                        }
                    }
                },
                h = (r(774), r(2));

            function v(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function w(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? v(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var x = {
                    components: {
                        LatestItem: Object(h.a)(m, (function() {
                            var t = this,
                                e = t.$createElement,
                                r = t._self._c || e;
                            return r("div", {
                                staticClass: "item"
                            }, [r("p", {
                                staticClass: "item-date"
                            }, [t._v(t._s(t.getTime(t.info.NgayDeliver)))]), t._v(" "), r("nuxt-link", {
                                attrs: {
                                    to: t.getUrl(t.info)
                                }
                            }, [t.info.ShortContentNews ? t._e() : r("img", {
                                directives: [{
                                    name: "lazy-load",
                                    rawName: "v-lazy-load"
                                }],
                                staticClass: "image",
                                attrs: {
                                    "data-src": t.imageSrc,
                                    alt: t.info.Name
                                }
                            }), t._v(" "), r("p", {
                                staticClass: "item-title"
                            }, [t._v(t._s(t.info.Name))]), t._v(" "), r("p", {
                                staticClass: "item-content"
                            }, [t._v(t._s(t.info.ShortContentNews))])]), t._v(" "), r("nuxt-link", {
                                staticClass: "item-more",
                                attrs: {
                                    to: t.getUrl(t.info)
                                }
                            }, [t._v("Xem thêm")])], 1)
                        }), [], !1, null, "60a4e22c", null).exports
                    },
                    data: function() {
                        return {
                            currentIdx: 0
                        }
                    },
                    computed: w({
                        pairItems: function() {
                            return this.latestNews.reduce((function(p, t, i) {
                                var e = ~~(i / 2);
                                return p[e] = [].concat(Object(l.a)(p[e] || []), [t]), p
                            }), [])
                        }
                    }, Object(o.e)({
                        latestNews: function(t) {
                            return t.news.latestNews
                        }
                    })),
                    mounted: function() {
                        this.getLatestNews()
                    },
                    methods: w(w({}, Object(o.b)({
                        getLatestNews: "news/getLatestNews"
                    })), {}, {
                        onScroll: function() {
                            var t = this.$refs.latestNewScroller;
                            t && (this.currentIdx = ~~(t.scrollLeft / t.scrollWidth * this.pairItems.length + .5))
                        },
                        scrollTo: function(t) {
                            var e = this.$refs.latestNewScroller;
                            e && e.scrollTo({
                                top: 0,
                                left: t * ~~(e.scrollWidth / this.pairItems.length),
                                behavior: "smooth"
                            })
                        }
                    })
                },
                O = (r(776), Object(h.a)(x, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.latestNews.length ? r("div", {
                        staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12 col-ms-12"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Mới cập nhật")]), t._v(" "), r("div", {
                        ref: "latestNewScroller",
                        staticClass: "items",
                        on: {
                            scroll: t.onScroll
                        }
                    }, t._l(t.pairItems, (function(e, n) {
                        return r("div", {
                            key: "pair" + n,
                            staticClass: "pair"
                        }, t._l(e, (function(t, e) {
                            return r("LatestItem", {
                                key: e,
                                attrs: {
                                    info: t
                                }
                            })
                        })), 1)
                    })), 0), t._v(" "), r("div", {
                        staticClass: "indicators"
                    }, t._l(t.pairItems.length, (function(e, n) {
                        return r("button", {
                            key: n,
                            staticClass: "indicator",
                            attrs: {
                                "aria-label": "indicator",
                                disabled: t.currentIdx === n
                            },
                            on: {
                                click: function(e) {
                                    return t.scrollTo(n)
                                }
                            }
                        })
                    })), 0)]) : t._e()
                }), [], !1, null, "290d47ba", null).exports);

            function y(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function j(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? y(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var _ = {
                    data: function() {
                        return {
                            currentIdx: 0
                        }
                    },
                    computed: Object(o.e)({
                        newsItems: function(t) {
                            return t.news.hotNews
                        }
                    }),
                    mounted: function() {
                        this.getHotNews()
                    },
                    methods: j(j({}, Object(o.b)({
                        getHotNews: "news/getHotNews"
                    })), {}, {
                        getImage: function(t) {
                            return c.a.getNewsImageURL(t)
                        },
                        getTime: function(t) {
                            return d()(t).format("DD/MM/YYYY")
                        },
                        getUrl: function(t) {
                            return c.a.newsLink(t)
                        },
                        onScroll: function() {
                            var t = this.$refs.hotNewsScroller;
                            t && (this.currentIdx = ~~(t.scrollLeft / t.scrollWidth * this.newsItems.length + .5))
                        },
                        scrollTo: function(t) {
                            var e = this.$refs.hotNewsScroller;
                            if (e) {
                                e.scrollLeft;
                                e.scrollTo({
                                    top: 0,
                                    left: t * ~~(e.scrollWidth / this.newsItems.length),
                                    behavior: "smooth"
                                })
                            }
                        }
                    })
                },
                P = (r(778), Object(h.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12 col-ms-12"
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("Tin nổi bật")]), t._v(" "), r("div", {
                        ref: "hotNewsScroller",
                        staticClass: "items",
                        on: {
                            scroll: t.onScroll
                        }
                    }, t._l(t.newsItems, (function(e, n) {
                        return r("div", {
                            key: n,
                            staticClass: "news-item-container"
                        }, [r("nuxt-link", {
                            attrs: {
                                to: t.getUrl(e)
                            }
                        }, [r("img", {
                            directives: [{
                                name: "lazy-load",
                                rawName: "v-lazy-load"
                            }],
                            staticClass: "image",
                            attrs: {
                                "data-src": t.getImage(e.hinhanhImageSample),
                                alt: e.Name
                            }
                        }), t._v(" "), r("p", {
                            staticClass: "item-date"
                        }, [t._v(t._s(t.getTime(e.NgayDeliver)))]), t._v(" "), r("p", {
                            staticClass: "item-title"
                        }, [t._v(t._s(e.Name))]), t._v(" "), r("p", {
                            staticClass: "item-content"
                        }, [t._v(t._s(e.ShortContentNews))])]), t._v(" "), r("nuxt-link", {
                            staticClass: "item-more",
                            attrs: {
                                to: t.getUrl(e)
                            }
                        }, [t._v("Xem thêm")])], 1)
                    })), 0), t._v(" "), r("div", {
                        staticClass: "indicators"
                    }, t._l(t.newsItems.length, (function(e, n) {
                        return r("button", {
                            key: n,
                            staticClass: "indicator",
                            attrs: {
                                "aria-label": "indicator",
                                disabled: t.currentIdx === n
                            },
                            on: {
                                click: function(e) {
                                    return t.scrollTo(n)
                                }
                            }
                        })
                    })), 0)])
                }), [], !1, null, "22e198e8", null).exports),
                N = r(580);

            function C(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var k = {
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? C(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : C(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.e)({
                        info: function(t) {
                            return t.news.info
                        }
                    })),
                    methods: {
                        isVisible: function(t) {
                            return this.info.CurrentPage <= 3 && t <= 5 || Math.abs(this.info.CurrentPage - t) <= 2 || this.info.CurrentPage > this.info.TotalPage - 3 && t > this.info.TotalPage - 5
                        },
                        pageUrl: function(t) {
                            return "?page=" + Math.min(Math.max((this.info.CurrentPage || 1) + t, 1), this.info.TotalPage)
                        }
                    }
                },
                S = Object(h.a)(k, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("nav", {
                        staticClass: "text-center"
                    }, [r("ul", {
                        staticClass: "pagination"
                    }, [t.info.CurrentPage > 1 ? r("li", [r("nuxt-link", {
                        attrs: {
                            to: t.pageUrl(-1),
                            "aria-label": "page"
                        }
                    }, [r("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [t._v("«")])])], 1) : t._e(), t._v(" "), t._l(t.info.TotalPage, (function(e) {
                        return r("li", {
                            key: e
                        }, [t.isVisible(e) ? r("nuxt-link", {
                            attrs: {
                                to: "?page=" + e,
                                "aria-label": "page"
                            }
                        }, [t._v(t._s(e))]) : t._e()], 1)
                    })), t._v(" "), t.info.CurrentPage < t.info.TotalPage ? r("li", [r("nuxt-link", {
                        attrs: {
                            to: t.pageUrl(1),
                            "aria-label": "page"
                        }
                    }, [r("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [t._v("»")])])], 1) : t._e()], 2)])
                }), [], !1, null, null, null).exports;

            function I(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function D(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? I(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : I(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var T = {
                    head: function() {
                        return {
                            title: "Tin tức"
                        }
                    },
                    components: {
                        Banner: r(568).a,
                        LatestNews: O,
                        HotNews: P,
                        NewsItem: N.a,
                        NewsPageNavigator: S
                    },
                    data: function() {
                        return {
                            searchText: ""
                        }
                    },
                    computed: D({}, Object(o.e)({
                        info: function(t) {
                            return t.news.info
                        }
                    })),
                    mounted: function() {
                        var t = this.$route.query.search;
                        t && (this.searchText = c.a.nonAccentVietnamese(t).replace(/-/g, " "));
                        var e = this.$route.query.page;
                        e = e && parseInt(e) || this.info.currentPage || 1, this.getNews({
                            page: e,
                            pageSize: 6
                        })
                    },
                    watch: Object(n.a)({}, "$route.query", (function(t) {
                        var e = t.page;
                        if (e) {
                            var r = parseInt(e);
                            r && this.getNews({
                                page: r,
                                pageSize: 6
                            })
                        }
                    })),
                    methods: D(D({}, Object(o.b)({
                        getNews: "news/getNews"
                    })), {}, {
                        searchChanged: function() {
                            this.$router.push({
                                path: this.$route.path,
                                query: D(D({}, this.$route.query || {}), {}, {
                                    search: c.a.nonAccentVietnamese(this.searchText)
                                })
                            })
                        }
                    })
                },
                z = (r(780), Object(h.a)(T, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "page-container"
                    }, [r("Banner"), t._v(" "), r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row"
                    }, [r("HotNews"), t._v(" "), r("LatestNews")], 1), t._v(" "), r("div", {
                        staticClass: "title"
                    }, [t._v("tất cả")]), t._v(" "), r("div", {
                        staticClass: "row"
                    }, t._l(t.info.Data, (function(t, e) {
                        return r("NewsItem", {
                            key: e,
                            staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12",
                            attrs: {
                                news: t
                            }
                        })
                    })), 1)]), t._v(" "), r("NewsPageNavigator")], 1)
                }), [], !1, null, "b856a5e0", null));
            e.default = z.exports
        }
    }
]);