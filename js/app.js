webpackJsonp([6], {
	163: function(t, e, n) {
		"use strict";
		var r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("a", {
					attrs: {
						href: t.pcDownloadUrl,
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [n("span", [t._t("default")], 2)])
			},
			o = [],
			a = {
				render: r,
				staticRenderFns: o
			};
		e.a = a
	},
	164: function(t, e, n) {
		"use strict";
		var r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "tui-fr-header"
				}, [n("router-link", {
					staticClass: "logo",
					attrs: {
						to: "/"
					}
				}, [t._v("Tencent WeGame")]), n("nav", {
					staticClass: "tui-nav"
				}, [n("ul", {
					staticClass: "main-nav"
				}, [n("li", {
					class: {
						cur: t.isView("store")
					}
				}, [n("a", {
					attrs: {
						href: "javascript:void(0);"
					},
					on: {
						click: function(e) {
							t.toView("store")
						}
					}
				}, [t._v("å•†åº—")])]), n("li", {
					class: {
						cur: t.isView("index")
					}
				}, [n("a", {
					attrs: {
						href: "javascript:void(0);"
					},
					on: {
						click: function(e) {
							t.toView("index")
						}
					}
				}, [t._v("å®¢æˆ·ç«¯")])]), n("li", [n("a", {
					attrs: {
						href: "https://wings.wegame.com/wings/index.html",
						target: "_blank",
						rel: "noopener noreferrer"
					},
					on: {
						click: function(e) {
							t.$report("developer", "click")
						}
					}
				}, [t._v("ç¿¼è®¡åˆ’")])]), n("li", {
					class: {
						cur: t.isView("feedback")
					}
				}, [n("a", {
					attrs: {
						href: "javascript:void(0);"
					},
					on: {
						click: function(e) {
							t.toView("feedback")
						}
					}
				}, [t._v("å¸®åŠ©åé¦ˆ")])])])]), n("div", {
					staticClass: "toolbar"
				}, [t.changelogButtonVisible ? n("router-link", {
					staticClass: "btn btn-log",
					attrs: {
						to: "/client/changelog"
					},
					nativeOn: {
						click: function(e) {
							t.$report("changelog", "click")
						}
					}
				}, [n("span", [t._v("æ›´æ–°æ—¥å¿—")])]) : t._e(), n("div", {
					staticClass: "widget-login",
					class: {
						"widget-login--success": t.isLogined
					}
				}, [n("a", {
					staticClass: "btn btn-login",
					attrs: {
						href: "javascript:void(0);"
					},
					on: {
						click: t.login
					}
				}, [n("span", [t._v("ç™»å½•")])]), t.isLogined ? n("div", {
					staticClass: "widget-login-info"
				}, [n("p", {
					staticClass: "widget-login-figure"
				}, [n("img", {
					attrs: {
						src: t._f("toProtocolRelativeURL")(t.loginUser.faceurl)
					}
				})]), n("p", {
					staticClass: "widget-login-detail"
				}, [n("span", {
					staticClass: "widget-login-nick"
				}, [t._v(t._s(t.loginUser.nick))]), n("span", {
					staticClass: "widget-login-out",
					on: {
						click: t.logout
					}
				}, [t._v("ã€æ³¨é”€ã€‘")])])]) : t._e()]), n("we-pc-download-button", {
					staticClass: "btn btn-download",
					nativeOn: {
						click: function(e) {
							t.$report("nav_download", "click")
						}
					}
				}, [n("span", [t._v("ä¸‹è½½å®¢æˆ·ç«¯")])])], 1)], 1)
			},
			o = [],
			a = {
				render: r,
				staticRenderFns: o
			};
		e.a = a
	},
	165: function(t, e, n) {
		"use strict";
		var r = n(166),
			o = n(167),
			a = n(6),
			i = a(r.a, o.a, null, null, null);
		e.a = i.exports
	},
	166: function(t, e, n) {
		"use strict";
		var r = n(18),
			o = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			};
		e.a = {
			computed: o({}, r.a.mapGetters(["allDownloads", "allLinks"]), {
				currentYear: function() {
					return (new Date).getFullYear()
				}
			}),
			beforeMount: function() {
				this.$store.dispatch("FETCH_CONFIGS")
			}
		}
	},
	167: function(t, e, n) {
		"use strict";
		var r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "tui-fr-footer"
				}, [n("div", {
					staticClass: "tui-fr-container"
				}, [n("div", {
					staticClass: "widget-linkgroup"
				}, [t.allDownloads.length > 0 ? n("div", {
					staticClass: "widget-link widget-link--with-icon app-version",
					class: "app-version--num-" + t.allDownloads.length
				}, [n("h3", {
					staticClass: "widget-link-hd"
				}, [t._v("ä¸‹è½½å®¢æˆ·ç«¯ï¼š")]), n("div", {
					staticClass: "widget-link-bd"
				}, [n("ul", {
					staticClass: "widget-link-list"
				}, t._l(t.allDownloads, function(e) {
					return n("li", {
						key: e.name
					}, [n("a", {
						attrs: {
							href: e.url,
							target: "_blank",
							rel: "noopener noreferrer"
						},
						on: {
							click: function(n) {
								t.$report("footer_" + e.type, "click")
							}
						}
					}, [n("i", {
						class: ["icon", "app-" + e.type]
					}), t._v(t._s(e.name) + "\n              ")])])
				}))])]) : t._e(), t._m(1), t.allLinks.length > 0 ? n("div", {
					staticClass: "widget-link widget-link--txt friendship-link"
				}, [n("h3", {
					staticClass: "widget-link-hd"
				}, [t._v("å‹æƒ…é“¾æŽ¥ï¼š")]), n("div", {
					staticClass: "widget-link-bd"
				}, [n("ul", {
					staticClass: "widget-link-list"
				}, t._l(t.allLinks, function(e) {
					return n("li", {
						key: e.url
					}, [n("a", {
						attrs: {
							href: e.url,
							target: "_blank",
							rel: "noopener noreferrer"
						}
					}, [t._v(t._s(e.name))])])
				}))])]) : t._e()]), t._m(3)])])
			},
			o = [function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "widget-link-bd"
				}, [r("ul", {
					staticClass: "widget-link-list"
				}, [r("li", [r("a", {
					attrs: {
						href: "http://weibo.com/u/6068787464",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [r("i", {
					staticClass: "icon icon-weibo"
				}), t._v("å¾®åš\n              ")])]), r("li", [r("a", {
					attrs: {
						href: "javascript:void(0);"
					}
				}, [r("i", {
					staticClass: "icon icon-wechat"
				}), t._v("å¾®ä¿¡\n                "), r("span", {
					staticClass: "widget-link-rcode"
				}, [r("img", {
					attrs: {
						src: n(168)
					}
				})])])])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "widget-link widget-link--with-icon official-channels"
				}, [n("h3", {
					staticClass: "widget-link-hd"
				}, [t._v("å®˜æ–¹æ¸ é“ï¼š")]), t._m(0)])
			}, function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("p", [n("a", {
					attrs: {
						href: "https://www.tencent.com/law/mo_law.shtml?/law/copyright.htm",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("è…¾è®¯å…¬å¸ ç‰ˆæƒæ‰€æœ‰")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "widget-copyright"
				}, [n("p", [n("a", {
					attrs: {
						href: "https://www.tencent.com/zh-cn/index.html",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("å…³äºŽè…¾è®¯")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "https://www.tencent.com/en-us/index.html",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("About Tencent")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "http://www.qq.com/contract.shtml",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("æœåŠ¡æ¡æ¬¾")]), t._v(" |\n        "), n("router-link", {
					attrs: {
						to: "/contract",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("ç”¨æˆ·æœåŠ¡åè®®")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "http://www.qq.com/privacy.htm",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("éšç§æ”¿ç­–")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "https://developer.wegame.com/developer/static/infringement.html",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("ä¾µæƒé€šçŸ¥")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "http://www.tencentmind.com/",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("å¹¿å‘ŠæœåŠ¡")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "http://hr.tencent.com/",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("è…¾è®¯æ‹›è˜")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "https://kf.qq.com/index.html",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("å®¢æœä¸­å¿ƒ")]), t._v(" |\n        "), n("a", {
					attrs: {
						href: "http://www.qq.com/map/",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [t._v("ç½‘ç«™å¯¼èˆª")])], 1), n("p", {
					staticClass: "e"
				}, [t._v("COPYRIGHT Â© 1998 â€“ " + t._s(t.currentYear) + " TENCENT. ALL RIGHTS RESERVED.")]), t._m(2)])
			}],
			a = {
				render: r,
				staticRenderFns: o
			};
		e.a = a
	},
	168: function(t, e, n) {
		t.exports = n.p + "images/rcode.c64176e78fd78f48dda9878b4405c676.jpg"
	},
	169: function(t, e, n) {
		"use strict";
		var r = function() {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					class: t.classes,
					attrs: {
						id: "app"
					}
				}, [n("we-header"), n("div", {
					staticClass: "tui-fr-main"
				}, [n("router-view")], 1), n("we-footer")], 1)
			},
			o = [],
			a = {
				render: r,
				staticRenderFns: o
			};
		e.a = a
	},
	170: function(t, e, n) {
		"use strict";

		function r() {
			return new a.a.Store({
				state: {
					loginUser: null,
					configs: null,
					changelogs: null
				},
				actions: i.a,
				mutations: s.a,
				getters: c.a
			})
		}
		e.a = r;
		var o = n(7),
			a = n(18),
			i = n(171),
			s = n(175),
			c = n(176);
		o.a.use(a.a)
	},
	171: function(t, e, n) {
		"use strict";
		var r = n(26),
			o = n.n(r),
			a = n(172);
		e.a = {
			FETCH_LOGIN_USER: function(t) {
				var e = t.commit,
					n = t.state;
				return n.loginUser ? Promise.resolve(n.loginUser) : o.a.getLoginUser().then(function(t) {
					return e("SET_LOGIN_USER", {
						user: t
					})
				})
			},
			FETCH_CONFIGS: function(t) {
				var e = t.commit,
					n = t.state;
				return n.configs ? Promise.resolve(n.configs) : Object(a.b)().then(function(t) {
					return e("SET_CONFIGS", {
						configs: t
					})
				})
			},
			FETCH_CHANGELOGS: function(t) {
				var e = t.commit,
					n = t.state;
				return n.changelogs ? Promise.resolve(n.changelogs) : Object(a.a)().then(function(t) {
					return e("SET_CHANGELOGS", {
						changelogs: t
					})
				})
			}
		}
	},
	172: function(t, e, n) {
		"use strict";

		function r() {
			return Object(i.a)("wegame_home_configs").then(function(t) {
				return t.reduce(function(t, e) {
					return t[e.name] = JSON.parse(e.value), t
				}, {})
			})
		}

		function o() {
			return Object(i.a)("wegame_home_changelogs").then(function(t) {
				var e = t.reduce(function(t, e) {
						var n = Object(a.a)(e.date),
							r = n.getFullYear();
						return void 0 === t[r] && (t[r] = []), t[r].push({
							version: e.version,
							date: n,
							title: e.title,
							content: e.content
						}), t
					}, {}),
					n = function(t) {
						return t.sort(function(t, e) {
							return e.date - t.date
						})
					};
				return Object.keys(e).sort(function(t, e) {
					return e - t
				}).map(function(t) {
					return {
						year: t,
						logs: n(e[t])
					}
				})
			})
		}
		e.b = r, e.a = o;
		var a = n(48),
			i = n(173)
	},
	173: function(t, e, n) {
		"use strict";

		function r(t) {
			var e = "//cdn.tgp.qq.com/bin_res/ossjson/" + t + ".js?t=" + (new Date).getTime();
			return Object(i.a)(e).then(function() {
				return "object" === s(window[t]) ? window[t].data : Promise.reject(new Error("can not fetch oss " + t + " config"))
			})
		}
		e.a = r;
		var o = n(27),
			a = (n.n(o), n(39)),
			i = (n.n(a), n(174)),
			s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}
	},
	174: function(t, e, n) {
		"use strict";

		function r(t) {
			return !0 === o[t] ? Promise.resolve() : new Promise(function(e, n) {
				var r = document.getElementsByTagName("head")[0],
					a = document.createElement("script");
				a.onload = function() {
					o[t] = !0, e(), a.onload = a.onerror = null
				}, a.onerror = function() {
					n(), a.onload = a.onerror = null
				}, a.async = 1, a.src = t, r.insertBefore(a, r.lastChild)
			})
		}
		e.a = r;
		var o = {}
	},
	175: function(t, e, n) {
		"use strict";
		e.a = {
			SET_LOGIN_USER: function(t, e) {
				var n = e.user;
				t.loginUser = n
			},
			SET_CONFIGS: function(t, e) {
				var n = e.configs;
				t.configs = n
			},
			SET_CHANGELOGS: function(t, e) {
				var n = e.changelogs;
				t.changelogs = n
			}
		}
	},
	176: function(t, e, n) {
		"use strict";
		n(48);
		e.a = {
			isLogined: function(t) {
				return null !== t.loginUser
			},
			allDownloads: function(t) {
				return t.configs ? t.configs.downloads : []
			},
			allLinks: function(t) {
				return t.configs ? t.configs.links : []
			}
		}
	},
	177: function(t, e, n) {
		"use strict";

		function r() {
			return new a.a({
				mode: "history",
				scrollBehavior: function() {
					return {
						y: 0
					}
				},
				routes: [{
					path: "/store",
					name: "store",
					component: i,
					meta: {
						pageName: "store"
					}
				}, {
					path: "/store/:type/:gameId",
					name: "store-redirect",
					component: i,
					meta: {
						pageName: "store"
					}
				}, {
					path: "/feedback",
					name: "feedback",
					component: s,
					meta: {
						pageName: "feedback"
					}
				}, {
					path: "/contract",
					name: "contract",
					component: c,
					meta: {
						pageName: "contract"
					}
				}, {
					path: "/client",
					name: "client",
					component: l,
					meta: {
						pageName: "client"
					}
				}, {
					path: "/client/changelog",
					name: "changelog",
					component: u,
					meta: {
						pageName: "changelog"
					}
				}, {
					path: "/",
					name: "index",
					component: l,
					meta: {
						pageName: "client"
					}
				}]
			})
		}
		e.a = r;
		var o = n(7),
			a = n(178);
		o.a.use(a.a);
		var i = function() {
				return n.e(1).then(n.bind(null, 191))
			},
			s = function() {
				return n.e(2).then(n.bind(null, 192))
			},
			c = function() {
				return n.e(3).then(n.bind(null, 193))
			},
			l = function() {
				return n.e(0).then(n.bind(null, 194))
			},
			u = function() {
				return n.e(4).then(n.bind(null, 195))
			}
	},
	180: function(t, e, n) {
		"use strict";

		function r(t) {
			var e = t.$options.title;
			if (e) return "function" == typeof e ? e.call(t) : e
		}
		var o = {
			mounted: function() {
				var t = r(this);
				t && (document.title = t)
			}
		};
		e.a = o
	},
	181: function(t, e, n) {
		"use strict";
		var r = n(182),
			o = (n.n(r), Object(r.init)({
				main: "wegame_official",
				sub: "official_page",
				keys: ["action", "type"]
			}));
		e.a = o
	},
	188: function(t, e, n) {
		"use strict";

		function r(t) {
			var e = "_tqos_log_" + Math.floor(2147483648 * Math.random()).toString(36),
				n = new Image;
			window[e] = n;
			var r = function() {
				n.onload = null, n.onerror = null, n.onabort = null, window[e] = null, n = null
			};
			n.onload = n.onerror = n.onabort = r, n.src = t
		}

		function o() {
			var t = document.cookie.match(new RegExp("(^| )uin=([^;]*)(;|$)"));
			return null !== t ? unescape(t[2]).substr(1).replace(/^0+/, "") : "0"
		}

		function a(t, e) {
			for (var n = (new Date).getTime().toString(), a = [0, 0, Number(n.substr(0, 4)), Number(n.substr(4, 4)), c, -1, 0], i = o(), l = ["", "", "v" + s, t, i, location.protocol, "wegame-home", 1 === window.__spa ? "spa" : "ssr"], f = 0; f < e.length; f += 1) "string" == typeof e[f] ? l.push(e[f]) : "number" == typeof e[f] && a.push(e[f]);
			if (l.length > 10) throw new Error("TQOS: å­—ç¬¦ä¸²å‚æ•°ä¸èƒ½å¤šäºŽ10ä¸ª");
			if (a.length > 30) throw new Error("TQOS: æ•´åž‹å‚æ•°ä¸èƒ½å¤šäºŽ30ä¸ª");
			var d = {
				Head: {
					Cmd: 5
				},
				Body: {
					QOSRep: {
						BusinessID: 1,
						QosNum: 1,
						QosList: [{
							QosID: c,
							QosVal: 0,
							AppendDescFlag: 2,
							AppendDesc: {
								Comm: {
									IntNum: a.length,
									IntList: a,
									StrNum: l.length,
									StrList: l
								}
							}
						}]
					}
				}
			};
			r(u + "/?tqos=" + JSON.stringify(d))
		}

		function i() {
			var t = window.performance;
			if (!t) return void console.log("ä½ çš„æµè§ˆå™¨ä¸æ”¯æŒ performance æŽ¥å£");
			window.onload = function() {
				setTimeout(function() {
					var e = t.timing,
						n = {};
					if (n.firstPaint = 0, window.chrome && window.chrome.loadTimes) {
						var r = 1e3 * window.chrome.loadTimes().firstPaintTime;
						n.firstPaint = r > 0 ? r - window.performance.timing.navigationStart : 0
					}
					n.unloadEventTime = e.unloadEventEnd - e.unloadEventStart, n.redirectTime = e.redirectEnd - e.redirectStart, n.readyStart = e.fetchStart - e.navigationStart, n.appcacheTime = e.domainLookupStart - e.fetchStart, n.lookupDomainTime = e.domainLookupEnd - e.domainLookupStart, n.connectTime = e.connectEnd - e.connectStart, n.sslTime = e.secureConnectionStart > 0 ? e.secureConnectionStart - e.connectStart : 0, n.ttfbTime = e.responseStart - e.requestStart, n.requestTime = e.responseEnd - e.requestStart, n.initDomTreeTime = e.domInteractive - e.responseEnd, n.domReadyTime = e.domComplete - e.domInteractive, n.loadEventTime = e.loadEventEnd - e.loadEventStart, n.loadTime = e.loadEventEnd - e.fetchStart;
					var o = l.map(function(t) {
							return n[t]
						}),
						i = t.getEntriesByName(1 === window.__spa ? "viewMounted" : "bodyLoaded")[0];
					i && o.push(Math.floor(i.startTime)), a("timing", o)
				}, 100)
			}
		}
		e.a = i;
		var s = "1.0",
			c = 15555,
			l = ["unloadEventTime", "redirectTime", "readyStart", "appcacheTime", "lookupDomainTime", "connectTime", "sslTime", "ttfbTime", "requestTime", "initDomTreeTime", "domReadyTime", "loadEventTime", "firstPaint", "loadTime"],
			u = "https:" === location.protocol ? "https://tgp.ied-tqos-s.qq.com:8001" : "http://ied-tqos-tgp.qq.com:8001"
	},
	48: function(t, e, n) {
		"use strict";

		function r(t) {
			return new Date(t.replace(/-/g, "/"))
		}
		e.a = r
	},
	49: function(t, e, n) {
		"use strict";

		function r(t) {
			d.setOptions({
				s_url: location.href,
				pt_no_auth: 1
			}), d.login(t)
		}

		function o() {
			return d.logout()
		}

		function a(t) {
			return d.setOptions({
				s_url: location.href,
				pt_no_auth: 0
			}), d.checkAndLogin(t)
		}

		function i() {
			try {
				d.cancel()
			} catch (t) {
				console.log("Auth.cancel error", t)
			}
		}

		function s(t, e) {
			d.on(t, e)
		}

		function c(t, e) {
			d.off(t, e)
		}

		function l(t) {
			return f.a.getUrlWithSession(t)
		}
		e.d = r, e.e = o, e.b = a, e.a = i, e.g = s, e.f = c, e.c = l;
		var u = n(26),
			f = n.n(u),
			d = new f.a({
				appid: 1600001063,
				daid: 571,
				style: 20,
				width: 400,
				height: 382
			})
	},
	51: function(t, e, n) {
		"use strict";
		var r = n(96),
			o = n(163),
			a = n(6),
			i = a(r.a, o.a, null, null, null);
		e.a = i.exports
	},
	52: function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(53),
			o = (n.n(r), n(55)),
			a = (n.n(o), n(7)),
			i = n(56),
			s = n(181),
			c = n(188);
		a.a.mixin({
			beforeRouteUpdate: function(t, e, n) {
				var r = this.$options.asyncData;
				r ? r({
					store: this.$store,
					route: t
				}).then(n).catch(n) : n()
			},
			methods: {
				$report: function() {
					for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					return Object(s.a)(e)
				}
			}
		});
		var l = Object(i.a)(),
			u = l.app,
			f = l.router,
			d = l.store;
		window.__INITIAL_STATE__ && d.replaceState(window.__INITIAL_STATE__), f.afterEach(function(t) {
			Object(s.a)(["show_" + t.name, "pv"])
		}), f.onReady(function() {
			f.beforeResolve(function(t, e, n) {
				var r = f.getMatchedComponents(t),
					o = f.getMatchedComponents(e),
					a = !1,
					i = r.filter(function(t, e) {
						return a || (a = o[e] !== t)
					}),
					s = i.map(function(t) {
						return t.asyncData
					}).filter(function(t) {
						return t
					});
				if (!s.length) return n();
				Promise.all(s.map(function(e) {
					return e({
						store: d,
						route: t
					})
				})).then(function() {
					n()
				}).catch(n)
			}), u.$mount("#app")
		}), "https:" === location.protocol && navigator.serviceWorker && navigator.serviceWorker.register("/service-worker.js"), Object(c.a)()
	},
	55: function(t, e) {
		window.history && "pushState" in window.history || (window.__INITIAL_STATE__ = null, window.history.pushState = function(t, e, n) {
			location.href = n
		}, window.history.replaceState = function(t, e, n) {
			location.href = n
		})
	},
	56: function(t, e, n) {
		"use strict";

		function r() {
			var t = Object(i.a)(),
				e = Object(s.a)();
			return Object(c.sync)(t, e), {
				app: new o.a({
					router: e,
					store: t,
					render: function(t) {
						return t(a.a)
					}
				}),
				router: e,
				store: t
			}
		}
		e.a = r;
		var o = n(7),
			a = n(57),
			i = n(170),
			s = n(177),
			c = n(179),
			l = (n.n(c), n(180));
		o.a.mixin(l.a)
	},
	57: function(t, e, n) {
		"use strict";
		var r = n(58),
			o = n(169),
			a = n(6),
			i = a(r.a, o.a, null, null, null);
		e.a = i.exports
	},
	58: function(t, e, n) {
		"use strict";
		var r = n(59),
			o = (n.n(r), n(61)),
			a = (n.n(o), n(62)),
			i = n(165);
		e.a = {
			computed: {
				classes: function() {
					return ["tui-fr-wrapper", "wegame-frame", "page-" + this.$route.meta.pageName]
				}
			},
			components: {
				WeHeader: a.a,
				WeFooter: i.a
			}
		}
	},
	59: function(t, e) {},
	61: function(t, e) {},
	62: function(t, e, n) {
		"use strict";
		var r = n(63),
			o = n(164),
			a = n(6),
			i = a(r.a, o.a, null, null, null);
		e.a = i.exports
	},
	63: function(t, e, n) {
		"use strict";
		var r = n(18),
			o = n(49),
			a = n(51),
			i = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			};
		e.a = {
			computed: i({}, r.a.mapState(["loginUser"]), r.a.mapGetters(["isLogined"]), {
				changelogButtonVisible: function() {
					return ["index", "client", "changelog"].indexOf(this.$route.name) >= 0
				}
			}),
			beforeMount: function() {
				this.$store.dispatch("FETCH_LOGIN_USER")
			},
			methods: {
				toView: function(t) {
					this.$router.push({
						name: t
					}), this.$report(t, "click")
				},
				isView: function(t) {
					return this.$route.name.indexOf(t) >= 0
				},
				login: function() {
					Object(o.d)(), this.$report("nav_login", "click")
				},
				logout: function() {
					var t = this;
					Object(o.e)().then(function() {
						t.$store.commit("SET_LOGIN_USER", {
							user: null
						})
					})
				}
			},
			filters: {
				toProtocolRelativeURL: function(t) {
					return "string" == typeof t ? t.replace(, "") : t
				}
			},
			components: {
				WePcDownloadButton: a.a
			}
		}
	},
	96: function(t, e, n) {
		"use strict";
		var r = n(39),
			o = n.n(r);
		e.a = {
			computed: {
				pcDownloadUrl: function() {
					var t = o()(this.$store.getters.allDownloads, function(t) {
						return "pc" === t.type
					});
					return t ? t.url : "javascript:void(0);"
				}
			}
		}
	}
}, [52]);