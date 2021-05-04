// (window.webpackJsonp = window.webpackJsonp || []).push([
//     [10], {
//         149: function(t, n, e) {
//             var content = e(402);
//             "string" == typeof content && (content = [
//                 [t.i, content, ""]
//             ]), content.locals && (t.exports = content.locals);
//             (0, e(15).default)("f4d540c2", content, !0, {
//                 sourceMap: !1
//             })
//         },
//         150: function(t, n, e) {
//             var content = e(404);
//             "string" == typeof content && (content = [
//                 [t.i, content, ""]
//             ]), content.locals && (t.exports = content.locals);
//             (0, e(15).default)("d6e4e5d6", content, !0, {
//                 sourceMap: !1
//             })
//         },
//         198: function(t, n, e) {
//             e(94), e(62), String.prototype.format || (String.prototype.format = function() {
//                 var t = arguments;
//                 return this.replace(/{(\d+)}/g, (function(n, i) {
//                     return void 0 !== t[i] ? t[i] : n
//                 }))
//             }), Number.prototype.formatMoney = function() {
//                 var t = this,
//                     n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//                     e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
//                     i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
//                 return function(n, e, i) {
//                     var u = t,
//                         o = (n = isNaN(n = Math.abs(n)) ? 2 : n, e = null == e ? "." : e, i = null == i ? "," : i, u < 0 ? "-" : ""),
//                         r = parseInt(u = Math.abs(+u || 0).toFixed(n)) + "",
//                         d = (d = r.length) > 3 ? d % 3 : 0;
//                     return o + (d ? r.substr(0, d) + i : "") + r.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? e + Math.abs(u - r).toFixed(n).slice(2) : "")
//                 }(n, e, i)
//             }
//         },
//         199: function(t, n, e) {
//             ! function(t, n, s, e, i) {
//                 t[e] = t[e] || [], t[e].push({
//                     "gtm.start": (new Date).getTime(),
//                     event: "gtm.js"
//                 });
//                 var o = n.getElementsByTagName(s)[0],
//                     r = n.createElement(s);
//                 r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TJW4VC", o.parentNode.insertBefore(r, o)
//             }(window, document, "script", "dataLayer")
//         },
//         259: function(t, n, e) {
//             "use strict";
//             e(20), e(17), e(13), e(18), e(12);
//             var o = e(0),
//                 r = (e(62), e(41), e(43), e(38), e(257)),
//                 d = e(258),
//                 c = e(261),
//                 f = e(262),
//                 l = e(263),
//                 v = e(264),
//                 m = e(265),
//                 h = e(9),
//                 x = e(3),
//                 w = e(203),
//                 k = e.n(w),
//                 y = e(181),
//                 _ = e(266),
//                 z = e(1);
//
//             function C(object, t) {
//                 var n = Object.keys(object);
//                 if (Object.getOwnPropertySymbols) {
//                     var e = Object.getOwnPropertySymbols(object);
//                     t && (e = e.filter((function(t) {
//                         return Object.getOwnPropertyDescriptor(object, t).enumerable
//                     }))), n.push.apply(n, e)
//                 }
//                 return n
//             }
//
//             function O(t) {
//                 for (var i = 1; i < arguments.length; i++) {
//                     var source = null != arguments[i] ? arguments[i] : {};
//                     i % 2 ? C(Object(source), !0).forEach((function(n) {
//                         Object(o.a)(t, n, source[n])
//                     })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : C(Object(source)).forEach((function(n) {
//                         Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(source, n))
//                     }))
//                 }
//                 return t
//             }
//             var P = {
//                     data: function() {
//                         return {
//                             isLoaded: !1
//                         }
//                     },
//                     head: function() {
//                         var t = this,
//                             n = Object.assign({}, k.a),
//                             e = Object(y.b)(this.$route.name);
//                         if (e && (n.title = e, n.meta.forEach((function(n) {
//                                 n.hid && ((n.hid.includes("name") || n.hid.includes("title")) && (n.content = e), n.hid.includes("url") && (n.content = "https://futabus.vn" + t.$route.fullPath))
//                             }))), this.headStoreData) {
//                             var o = this.headStoreData,
//                                 title = o.Name,
//                                 r = o.hinhanhImageSample,
//                                 content = o.ShortContentNews,
//                                 d = o.url;
//                             n.title = title, n.meta = Object(y.a)(title, content, (r.includes("https") ? "" : "https://futabus.vn/") + r.replace("webp", "jpg"), d)
//                         } else if (this.headRouteData) {
//                             var c = this.headRouteData,
//                                 f = c.OriginName,
//                                 l = c.DestName;
//                             n.title = "".concat(f, " ⇒ ").concat(l, " | Vé xe Phương Trang | FUTA Bus Lines | Tổng Đài đặt vé và Chăm Sóc Khách Hàng 19006067"), n.meta = Object(y.a)(n.title, "Đặt vé xe Phương Trang đi liên tỉnh trực tuyến. Số điện tổng đài thoại đặt vé xe phương trang: 1900 6067. Đặt vé nhanh qua ứng dụng Android, iOS. Trên 2000 xe đời mới, chất lượng cao, có phục vụ trung chuyển, khăn, nước uống, wifi, tivi miễn phí. Phương Trang là Công ty vận tải hành khách lớn và uy tín nhất Việt Nam.", "https://futabus.vn/futa-thumb-about.png", "https://futabus.vn" + this.$route.fullPath)
//                         }
//                         return n
//                     },
//                     components: {
//                         Header: r.a,
//                         Footer: d.a,
//                         TermsPolicies: c.a,
//                         AnimatedError: f.a,
//                         loader: l.a,
//                         confirmPopup: v.a,
//                         phoneBtn: m.a,
//                         LoginPopup: _.a
//                     },
//                     created: function() {
//                         var t = this.$route.query.lang;
//                         (t === z.d.EN || this.$route.name.includes("en_")) && this.set_language(t || z.d.EN)
//                     },
//                     computed: O(O({}, Object(x.e)({
//                         isMobile: function(s) {
//                             return s.isMobile
//                         },
//                         headStoreData: function(s) {
//                             return s.headStoreData
//                         },
//                         headRouteData: function(s) {
//                             return s.headRouteData
//                         }
//                     })), {}, {
//                         gtm_id: function() {
//                             return this.$config.googleTagID
//                         }
//                     }),
//                     mounted: function() {
//                         this.getAppSetting();
//                         var t = this;
//                         Promise.resolve().then((function() {
//                             h.a.initTawk(), window.addEventListener("orientationchange", t.handleOrientation), window.addEventListener("resize", t.handleResized), t.set_isPortrait(h.a.isPortrait()), t.set_isMobile(h.a.isMobile())
//                         })).then((function() {
//                             t.isLoaded = !0
//                         })), this.initFirebase()
//                     },
//                     destroyed: function() {
//                         window.removeEventListener("orientationchange", this.handleOrientation), window.removeEventListener("resize", this.handleResized)
//                     },
//                     methods: O(O(O({}, Object(x.b)({
//                         getAppSetting: "getAppSetting",
//                         initFirebase: "user/initFirebase"
//                     })), Object(x.d)({
//                         set_language: "set_language",
//                         set_isPortrait: "set_isPortrait",
//                         set_isMobile: "set_isMobile",
//                         update_userInfo: "user/update_userInfo"
//                     })), {}, {
//                         handleResized: function() {
//                             this.set_isPortrait(window.innerHeight > window.innerWidth)
//                         },
//                         handleOrientation: function() {
//                             this.set_isPortrait(h.a.isPortrait())
//                         }
//                     })
//                 },
//                 j = (e(401), e(2)),
//                 component = Object(j.a)(P, (function() {
//                     var t = this,
//                         n = t.$createElement,
//                         e = t._self._c || n;
//                     return t.isLoaded ? e("div", {
//                         staticClass: "default-layout-container"
//                     }, [t.gtm_id ? e("noscript", [e("iframe", {
//                         directives: [{
//                             name: "lazy-load",
//                             rawName: "v-lazy-load"
//                         }],
//                         staticStyle: {
//                             display: "none",
//                             visibility: "hidden"
//                         },
//                         attrs: {
//                             "data-src": "https://www.googletagmanager.com/ns.html?id=" + t.gtm_id,
//                             height: "0",
//                             width: "0"
//                         }
//                     })]) : t._e(), t._v(" "), e("Header"), t._v(" "), e("nuxt"), t._v(" "), e("Footer"), t._v(" "), e("LoginPopup"), t._v(" "), e("TermsPolicies"), t._v(" "), e("AnimatedError"), t._v(" "), e("loader"), t._v(" "), e("confirmPopup"), t._v(" "), e("phoneBtn")], 1) : t._e()
//                 }), [], !1, null, null, null);
//             n.a = component.exports
//         },
//         260: function(t, n, e) {
//             "use strict";
//             var o = {
//                     head: {
//                         title: "Vé xe Phương Trang | FUTA Bus Lines"
//                     }
//                 },
//                 r = (e(403), e(2)),
//                 component = Object(r.a)(o, (function() {
//                     var t = this.$createElement;
//                     this._self._c;
//                     return this._m(0)
//                 }), [function() {
//                     var t = this,
//                         n = t.$createElement,
//                         e = t._self._c || n;
//                     return e("div", [e("div", {
//                         staticClass: "fix-wrp"
//                     }, [e("div", {
//                         staticClass: "animate-wrp"
//                     }, [e("div", {
//                         staticClass: "sky"
//                     }, [e("div", {
//                         staticClass: "car-wheels"
//                     }), t._v(" "), e("div", {
//                         staticClass: "car"
//                     }, [e("div", {
//                         staticClass: "msg"
//                     }, [e("b", [e("span", [t._v("Oops!")]), t._v("Website đang gặp sự cố. ")])])]), t._v(" "), e("div", {
//                         staticClass: "car-wheels c1"
//                     }), t._v(" "), e("div", {
//                         staticClass: "car1 c1"
//                     }), t._v(" "), e("div", {
//                         staticClass: "cloud"
//                     }), t._v(" "), e("div", {
//                         staticClass: "cloud2"
//                     }), t._v(" "), e("div", {
//                         staticClass: "cloud1"
//                     }), t._v(" "), e("div", {
//                         staticClass: "grass1"
//                     }), t._v(" "), e("div", {
//                         staticClass: "grass"
//                     }), t._v(" "), e("div", {
//                         staticClass: "grass2"
//                     }), t._v(" "), e("div", {
//                         staticClass: "mountain"
//                     }), t._v(" "), e("div", {
//                         staticClass: "mountain1"
//                     }), t._v(" "), e("div", {
//                         staticClass: "tree"
//                     }), t._v(" "), e("div", {
//                         staticClass: "tree-front"
//                     }), t._v(" "), e("div", {
//                         staticClass: "road"
//                     }), t._v(" "), e("div", {
//                         staticClass: "road-front"
//                     })])])]), t._v(" "), e("div", {
//                         staticClass: "main-wrapper"
//                     }, [e("div", {
//                         staticClass: "container"
//                     }, [e("div", {
//                         staticClass: "outer-wrapper"
//                     }, [t._v("\n        404\n        "), e("span", [t._v("Không tìm thấy trang này")])]), t._v(" "), e("div", {
//                         staticClass: "message"
//                     }, [e("p", [t._v("\n          Trang web bạn đang tìm kiếm có thể đã bị xóa hoặc giới hạn truy cập.\n        ")]), t._v(" "), e("br"), t._v(" "), e("p", [t._v("Hãy ghé thăm các trang khác của website.")])]), t._v(" "), e("div", {
//                         staticClass: "nav-wrapper"
//                     }, [e("a", {
//                         attrs: {
//                             href: "/"
//                         }
//                     }, [t._v("Trang chủ")]), t._v(" "), e("a", {
//                         attrs: {
//                             href: ""
//                         }
//                     }, [t._v("Giá vé")]), t._v(" "), e("a", {
//                         attrs: {
//                             href: ""
//                         }
//                     }, [t._v("Tin tức")]), t._v(" "), e("a", {
//                         attrs: {
//                             href: ""
//                         }
//                     }, [t._v("Liên hệ")])]), t._v(" "), e("div", {
//                         staticClass: "social-links"
//                     }, [e("a", {
//                         attrs: {
//                             target: "_blank",
//                             href: "https://www.facebook.com/xephuongtrang",
//                             rel: "noreferrer"
//                         }
//                     }, [e("i", {
//                         staticClass: "fa fa-facebook"
//                     })]), t._v(" "), e("a", {
//                         attrs: {
//                             href: "icon"
//                         }
//                     }, [e("i", {
//                         staticClass: "fa fa-google-plus"
//                     })])]), t._v(" "), e("p", {
//                         staticClass: "copyrights"
//                     }, [t._v("\n        Copyright © 2016 FUTA Bus Lines All Right Reserved\n      ")])])])])
//                 }], !1, null, "2f77b3aa", null);
//             n.a = component.exports
//         },
//         401: function(t, n, e) {
//             "use strict";
//             var o = e(149);
//             e.n(o).a
//         },
//         403: function(t, n, e) {
//             "use strict";
//             var o = e(150);
//             e.n(o).a
//         },
//         404: function(t, n, e) {
//             var o = e(14),
//                 r = e(95),
//                 d = e(405),
//                 c = e(406),
//                 f = e(407),
//                 l = e(408),
//                 v = e(409),
//                 m = e(410),
//                 h = e(411),
//                 x = e(412),
//                 w = e(413),
//                 k = e(414),
//                 y = e(415),
//                 _ = e(416),
//                 z = e(417),
//                 C = e(418),
//                 O = e(419);
//             n = o(!1);
//             var P = r(d),
//                 j = r(c),
//                 T = r(f),
//                 S = r(l),
//                 E = r(v),
//                 D = r(m),
//                 L = r(h),
//                 M = r(x),
//                 N = r(w),
//                 $ = r(k),
//                 A = r(y),
//                 F = r(_),
//                 R = r(z),
//                 Y = r(C),
//                 B = r(O);
//             n.push([t.i, '*[data-v-2f77b3aa]{margin:0;padding:0;box-sizing:border-box}body[data-v-2f77b3aa]{color:#fff;font-family:"Signika",sans-serif}.main-wrapper[data-v-2f77b3aa]{position:relative;top:0;left:0}.main-wrapper>.container[data-v-2f77b3aa]{padding-top:50px;margin:auto;text-align:center}.outer-wrapper[data-v-2f77b3aa]{font-family:"Leckerli One",cursive;font-weight:400;font-size:100px;line-height:1.2;text-align:center;border-radius:50px;padding:20px 0 30px;background-color:rgba(78,180,219,.33);box-shadow:0 10px 0 0 rgba(78,180,219,.6);width:600px;margin:0 auto 50px}.outer-wrapper span[data-v-2f77b3aa]{font-family:"Signika",sans-serif;font-size:30px;display:block;font-weight:600}.message[data-v-2f77b3aa]{text-align:center;margin-bottom:30px;font-size:18px;padding:0 20px}.nav-wrapper[data-v-2f77b3aa]{display:table;margin:0 auto 30px;width:600px;border-radius:40px;background-color:rgba(78,180,219,.5);box-shadow:0 1px 0 1px rgba(78,180,219,.6)}.nav-wrapper a[data-v-2f77b3aa]{display:table-cell;font-size:18px;color:#fff;padding:11px 0 10px;text-decoration:none;text-align:center;border-right:1px solid rgba(78,180,219,.8);width:25%;vertical-align:middle}.nav-wrapper a[data-v-2f77b3aa]:last-child{border-right:none}.nav-wrapper a[data-v-2f77b3aa]:first-child{border-radius:40px 0 0 40px}.nav-wrapper a[data-v-2f77b3aa]:last-child{border-radius:0 40px 40px 0}.nav-wrapper a[data-v-2f77b3aa]:hover{background:#fff;color:#000}.social-links[data-v-2f77b3aa]{width:100%;text-align:center;margin-bottom:15px;clear:both}.social-links a[data-v-2f77b3aa]{width:40px;height:40px;background:rgba(78,180,219,.5);display:inline-block;text-align:center;vertical-align:middle;color:#fff;font-size:19px;margin:1px;padding:9px 0 0;border-radius:20px;box-shadow:0 1px 0 1px rgba(78,180,219,.7)}p.copyrights[data-v-2f77b3aa]{font-size:12px;text-align:center;font-family:arial}.nav-wrapper a[data-v-2f77b3aa]:hover,.search-box .btn[data-v-2f77b3aa]:hover,.social-links a[data-v-2f77b3aa]:hover{background:#fff;color:#4eb4db}.msg b[data-v-2f77b3aa]{font-weight:600;color:#7ac8e4;font-size:18px;top:34px;padding:0 30px}.msg b span[data-v-2f77b3aa]{font-weight:700;font-size:30px;line-height:1.1;text-transform:uppercase}@media only screen and (min-width:768px) and (max-width:979px){.nav-wrapper[data-v-2f77b3aa],.outer-wrapper[data-v-2f77b3aa]{width:50%}}@media only screen and (min-width:200px) and (max-width:767px){.nav-wrapper[data-v-2f77b3aa],.outer-wrapper[data-v-2f77b3aa]{width:80%}.main-wrapper>.container[data-v-2f77b3aa]{padding-top:20px;padding-bottom:20px}.outer-wrapper[data-v-2f77b3aa]{font-size:70px;padding:18px 0 20px;border-radius:20px}.outer-wrapper span[data-v-2f77b3aa]{font-size:20px;margin-bottom:0}.nav-wrapper[data-v-2f77b3aa]{display:block}.nav-wrapper a[data-v-2f77b3aa]{display:block;width:100%}}@media only screen and (min-width:200px) and (max-width:419px){.nav-wrapper a[data-v-2f77b3aa]{padding:5px}.nav-wrapper[data-v-2f77b3aa]{border-radius:10px}.nav-wrapper a[data-v-2f77b3aa]{border-bottom:1px solid rgba(78,180,219,.8)}.nav-wrapper a[data-v-2f77b3aa]:first-child{border-radius:8px 8px 0 0}.nav-wrapper a[data-v-2f77b3aa]:last-child{border-radius:0 0 8px 8px}}@media only screen and (min-width:420px) and (max-width:599px){.nav-wrapper[data-v-2f77b3aa]{display:block}.nav-wrapper a[data-v-2f77b3aa]{display:block;width:100%}.nav-wrapper[data-v-2f77b3aa]{border-radius:10px}.nav-wrapper a[data-v-2f77b3aa]{border-bottom:1px solid rgba(78,180,219,.8)}.nav-wrapper a[data-v-2f77b3aa]:first-child{border-radius:8px 8px 0 0}.nav-wrapper a[data-v-2f77b3aa]:last-child{border-radius:0 0 8px 8px}}@media only screen and (min-width:600px) and (max-width:767px){.nav-wrapper[data-v-2f77b3aa]{display:table}.nav-wrapper a[data-v-2f77b3aa]{display:table-cell;width:25%}}.fix-wrp[data-v-2f77b3aa]{position:fixed;height:100%;width:100%;z-index:-111}.animate-wrp[data-v-2f77b3aa]{background:#8fd7f1;top:0;z-index:-1;overflow:hidden;height:800px}.animate-wrp[data-v-2f77b3aa],.sky[data-v-2f77b3aa]{position:absolute;left:0}.sky[data-v-2f77b3aa]{height:3000px;width:4000px;bottom:0;border:1px solid}.animate[data-v-2f77b3aa],.sky>div[data-v-2f77b3aa]{background-repeat:repeat-x;background-size:auto 100%;position:absolute;background-position:0 0;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.c1[data-v-2f77b3aa],.car[data-v-2f77b3aa],.car-wheels[data-v-2f77b3aa]{width:180px;bottom:110px;left:70px;position:absolute;z-index:7}.car-wheels[data-v-2f77b3aa]{z-index:8;bottom:90px}.c1[data-v-2f77b3aa]{left:600px;bottom:90px;z-index:9}.car-wheels.c1[data-v-2f77b3aa]{z-index:10;bottom:75px}.msg[data-v-2f77b3aa]{width:220px;height:200px;top:-165px;left:0;background:url(' + P + ") no-repeat;background-size:100%}.msg[data-v-2f77b3aa],.msg b[data-v-2f77b3aa]{position:absolute}.msg b[data-v-2f77b3aa]{width:100%;text-align:center}.msg b span[data-v-2f77b3aa]{display:block}.road[data-v-2f77b3aa],.road-front[data-v-2f77b3aa]{height:150px;background-color:#333;position:absolute;bottom:0;left:0;z-index:0;width:100%}.road-front[data-v-2f77b3aa]{height:60px;background-color:#72521e}.grass[data-v-2f77b3aa],.grass1[data-v-2f77b3aa],.mountain[data-v-2f77b3aa],.mountain1[data-v-2f77b3aa],.tree[data-v-2f77b3aa]{bottom:150px}.grass2[data-v-2f77b3aa]{bottom:0;z-index:16}.tree-front[data-v-2f77b3aa]{bottom:15px;z-index:15}.cloud[data-v-2f77b3aa]{bottom:15%}.cloud1[data-v-2f77b3aa]{bottom:24%}.cloud2[data-v-2f77b3aa]{bottom:20%}@-webkit-keyframes grass-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1100px bottom}}@keyframes grass-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1100px bottom}}.grass[data-v-2f77b3aa]{position:absolute;background:url(" + j + ") repeat-x;height:76px;width:100%;left:0;z-index:1;-webkit-animation-name:grass-data-v-2f77b3aa;animation-name:grass-data-v-2f77b3aa;-webkit-animation-duration:14s;animation-duration:14s}@-webkit-keyframes grass1-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-876px 0}}@keyframes grass1-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-876px 0}}.grass1[data-v-2f77b3aa]{background:url(" + T + ");left:0;width:100%;height:73px;z-index:3;-webkit-animation-name:grass1-data-v-2f77b3aa;animation-name:grass1-data-v-2f77b3aa;-webkit-animation-duration:10.4s;animation-duration:10.4s}@-webkit-keyframes grass2-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1189px bottom}}@keyframes grass2-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1189px bottom}}.grass2[data-v-2f77b3aa]{position:absolute;background:url(" + S + ") repeat-x;height:89px;width:100%;left:0;-webkit-animation-name:grass2-data-v-2f77b3aa;animation-name:grass2-data-v-2f77b3aa;-webkit-animation-duration:28s;animation-duration:28s}@-webkit-keyframes tree-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-2302px 0}}@keyframes tree-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-2302px 0}}.tree[data-v-2f77b3aa]{background:url(" + E + ");width:100%;height:181px;position:absolute;z-index:5;-webkit-animation-name:tree-data-v-2f77b3aa;animation-name:tree-data-v-2f77b3aa;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes tree-front-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1359px 0}}@keyframes tree-front-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1359px 0}}.tree-front[data-v-2f77b3aa]{background:url(" + D + ");width:100%;height:181px;position:absolute;-webkit-animation-name:tree-front-data-v-2f77b3aa;animation-name:tree-front-data-v-2f77b3aa;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes mountain-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1275px 0}}@keyframes mountain-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1275px 0}}.mountain[data-v-2f77b3aa]{background:url(" + L + ");left:0;width:100%;height:105px;z-index:0;-webkit-animation-name:mountain-data-v-2f77b3aa;animation-name:mountain-data-v-2f77b3aa;-webkit-animation-duration:14s;animation-duration:14s}@-webkit-keyframes mountain1-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1874px 0}}@keyframes mountain1-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-1874px 0}}.mountain1[data-v-2f77b3aa]{background:url(" + M + ");left:0;width:100%;height:171px;z-index:2;-webkit-animation-name:mountain1-data-v-2f77b3aa;animation-name:mountain1-data-v-2f77b3aa;-webkit-animation-duration:22s;animation-duration:22s}@-webkit-keyframes cloud-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-600px 0}}@keyframes cloud-data-v-2f77b3aa{0%{background-position:0 0}to{background-position:-600px 0}}.cloud[data-v-2f77b3aa]{position:absolute;background:url(" + N + ") repeat-x;height:84px;width:100%;left:0;z-index:1;-webkit-animation-name:cloud-data-v-2f77b3aa;animation-name:cloud-data-v-2f77b3aa;-webkit-animation-duration:12s;animation-duration:12s}@-webkit-keyframes cloud1-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-700px bottom}}@keyframes cloud1-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-700px bottom}}.cloud1[data-v-2f77b3aa]{position:absolute;background:url(" + $ + ") repeat-x;background-size:cover;height:60px;width:100%;left:0;z-index:1;-webkit-animation-name:cloud1-data-v-2f77b3aa;animation-name:cloud1-data-v-2f77b3aa;-webkit-animation-duration:12s;animation-duration:12s}@-webkit-keyframes cloud2-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1200px bottom}}@keyframes cloud2-data-v-2f77b3aa{0%{background-position:0 bottom}to{background-position:-1200px bottom}}.cloud2[data-v-2f77b3aa]{position:absolute;background:url(" + A + ") repeat-x;height:30px;width:100%;left:0;z-index:1;-webkit-animation-name:cloud2-data-v-2f77b3aa;animation-name:cloud2-data-v-2f77b3aa;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes car-data-v-2f77b3aa{0%{transform:translateY(0)}50%{transform:translateY(3px)}to{transform:translateY(0)}}@keyframes car-data-v-2f77b3aa{0%{transform:translateY(0)}50%{transform:translateY(3px)}to{transform:translateY(0)}}@-webkit-keyframes car1-data-v-2f77b3aa{0%{left:-10%}50%{left:50%}to{left:150%}}@keyframes car1-data-v-2f77b3aa{0%{transform:translateY(0)}50%{transform:translateY(3px)}to{transform:translateY(0)}}.car-wheels[data-v-2f77b3aa]{background-image:url(" + F + ");background-repeat:no-repeat!important;background-position:bottom!important;height:39px;width:204px}.car[data-v-2f77b3aa]{background-image:url(" + R + ");height:74px;width:204px;-webkit-animation-timing-function:cubic-bezier(.25,.46,.45,.94);animation-timing-function:cubic-bezier(.25,.46,.45,.94);-webkit-animation-name:car-data-v-2f77b3aa;animation-name:car-data-v-2f77b3aa;-webkit-animation-duration:.8s;animation-duration:.8s}.car1[data-v-2f77b3aa]{background:url(" + Y + ") no-repeat;height:88px;width:243px}.car-wheels.c1[data-v-2f77b3aa]{height:45px;width:243px;background-image:url(" + B + ")}.c1[data-v-2f77b3aa]{-webkit-animation-name:car1-data-v-2f77b3aa;animation-name:car1-data-v-2f77b3aa;-webkit-animation-timing-function:cubic-bezier(.25,.46,.45,.94);animation-timing-function:cubic-bezier(.25,.46,.45,.94);-webkit-animation-duration:18s;animation-duration:18s}.main-wrapper[data-v-2f77b3aa]{width:100vw;height:100vh;font-weight:700}.outer-wrapper[data-v-2f77b3aa]{color:#fff}.animate-wrp[data-v-2f77b3aa]{width:100%;height:100%}", ""]), t.exports = n
//         },
//         584: function(t, n, e) {
//             t.exports = e(274)
//         },
//         73: function(t, n, e) {
//             "use strict";
//             var o = {
//                     props: ["error"],
//                     layout: "empty"
//                 },
//                 r = e(2),
//                 component = Object(r.a)(o, (function() {
//                     var t = this.$createElement;
//                     return (this._self._c || t)("div")
//                 }), [], !1, null, null, null);
//             n.a = component.exports
//         }
//     }
// ]);
