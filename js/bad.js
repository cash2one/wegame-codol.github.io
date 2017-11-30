var BJ_REPORT = function(a) {
	if (a.BJ_REPORT) return a.BJ_REPORT;
	var b = [],
		c = {},
		d = {
			id: 0,
			uin: 0,
			url: "",
			offline_url: "",
			offline_auto_url: "",
			ext: null,
			level: 4,
			ignore: [],
			random: 1,
			delay: 1e3,
			submit: null,
			repeat: 5,
			offlineLog: !0,
			offlineLogExp: 5,
			offlineLogAuto: !0
		},
		e = {
			db: null,
			ready: function(a) {
				var b = this;
				if (!window.indexedDB) return d.offlineLog = !1, a();
				if (this.db) return void setTimeout(function() {
					a(null, b)
				}, 0);
				var c = 1,
					e = window.indexedDB.open("badjs", c);
				e.onerror = function(b) {
					a(b), console.log("indexdb request error")
				}, e.onsuccess = function(c) {
					b.db = c.target.result, setTimeout(function() {
						a(null, b)
					}, 500)
				}, e.onupgradeneeded = function(a) {
					var b = a.target.result;
					b.objectStoreNames.contains("logs") || b.createObjectStore("logs", {
						autoIncrement: !0
					})
				}
			},
			insertToDB: function(a) {
				var b = this.getStore();
				b.add(a)
			},
			addLog: function(a) {
				this.db && this.insertToDB(a)
			},
			addLogs: function(a) {
				if (this.db)
					for (var b = 0; b < a.length; b++) this.addLog(a[b])
			},
			getLogs: function(a, b) {
				if (this.db) {
					var c = this.getStore(),
						d = c.openCursor(),
						e = [];
					d.onsuccess = function(c) {
						var d = c.target.result;
						d ? (d.value.time >= a.start && d.value.time <= a.end && d.value.id == a.id && d.value.uin == a.uin && e.push(d.value), d["continue"]()) : b(null, e)
					}, d.onerror = function(a) {
						b(a)
					}
				}
			},
			clearDB: function(a) {
				if (this.db) {
					var b = this.getStore();
					if (!a) return void b.clear();
					var c = Date.now() - 24 * (a || 2) * 3600 * 1e3,
						d = b.openCursor();
					d.onsuccess = function(a) {
						var d = a.target.result;
						d && (d.value.time < c || !d.value.time) && (b["delete"](d.primaryKey), d["continue"]())
					}
				}
			},
			getStore: function() {
				var a = this.db.transaction("logs", "readwrite");
				return a.objectStore("logs")
			}
		},
		f = {
			isOBJByType: function(a, b) {
				return Object.prototype.toString.call(a) === "[object " + (b || "Object") + "]"
			},
			isOBJ: function(a) {
				var b = typeof a;
				return "object" === b && !!a
			},
			isEmpty: function(a) {
				return null === a ? !0 : f.isOBJByType(a, "Number") ? !1 : !a
			},
			extend: function(a, b) {
				for (var c in b) a[c] = b[c];
				return a
			},
			processError: function(a) {
				try {
					if (a.stack) {
						var b = a.stack.match("https?://[^\n]+");
						b = b ? b[0] : "";
						var c = b.match(":(\\d+):(\\d+)");
						c || (c = [0, 0, 0]);
						var d = f.processStackMsg(a);
						return {
							msg: d,
							rowNum: c[1],
							colNum: c[2],
							target: b.replace(c[0], "")
						}
					}
					return a.name && a.message && a.description ? {
						msg: JSON.stringify(a)
					} : a
				} catch (e) {
					return a
				}
			},
			processStackMsg: function(a) {
				var b = a.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""),
					c = a.toString();
				return b.indexOf(c) < 0 && (b = c + "@" + b), b
			},
			isRepeat: function(a) {
				if (!f.isOBJ(a)) return !0;
				var b = a.msg,
					e = c[b] = (parseInt(c[b], 10) || 0) + 1;
				return e > d.repeat
			}
		},
		g = a.onerror;
	a.onerror = function(b, c, d, e, h) {
		var i = b;
		h && h.stack && (i = f.processStackMsg(h)), f.isOBJByType(i, "Event") && (i += i.type ? "--" + i.type + "--" + (i.target ? i.target.tagName + "::" + i.target.src : "") : ""), p.push({
			msg: i,
			target: c,
			rowNum: d,
			colNum: e
		}), o(), g && g.apply(a, arguments)
	};
	var h = function(a, b) {
			var c = [],
				e = [],
				g = [];
			if (f.isOBJ(a)) {
				a.level = a.level || d.level;
				for (var h in a) {
					var i = a[h];
					if (!f.isEmpty(i)) {
						if (f.isOBJ(i)) try {
							i = JSON.stringify(i)
						} catch (j) {
							i = "[BJ_REPORT detect value stringify error] " + j.toString()
						}
						g.push(h + ":" + i), c.push(h + "=" + encodeURIComponent(i)), e.push(h + "[" + b + "]=" + encodeURIComponent(i))
					}
				}
			}
			return [e.join("&"), g.join(","), c.join("&")]
		},
		i = [],
		j = function(a, b) {
			return b = f.extend({
				id: d.id,
				uin: d.uin,
				time: new Date - 0
			}, b), e.db ? void e.addLog(b) : (e.db || i.length || e.ready(function(a, b) {
				b && i.length && (b.addLogs(i), i = [])
			}), void i.push(b))
		},
		k = function() {
			var a = document.createElement("script");
			a.src = d.offline_auto_url || d.url.replace(/badjs$/, "offlineAuto") + "?id=" + d.id + "&uin=" + d.uin, window._badjsOfflineAuto = function(a) {
				a && BJ_REPORT.reportOfflineLog()
			}, document.head.appendChild(a)
		},
		l = [],
		m = 0,
		n = function() {
			if (clearTimeout(m), l.length) {
				var a = d._reportUrl + l.join("&") + "&count=" + l.length + "&_t=" + +new Date;
				if (d.submit) d.submit(a);
				else {
					var b = new Image;
					b.src = a
				}
				m = 0, l = []
			}
		},
		o = function(a) {
			if (d._reportUrl) {
				for (var c = Math.random() >= d.random; b.length;) {
					var e = !1,
						g = b.shift();
					if (g.msg = (g.msg + "" || "").substr(0, 500), !f.isRepeat(g)) {
						var i = h(g, l.length);
						if (f.isOBJByType(d.ignore, "Array"))
							for (var k = 0, o = d.ignore.length; o > k; k++) {
								var p = d.ignore[k];
								if (f.isOBJByType(p, "RegExp") && p.test(i[1]) || f.isOBJByType(p, "Function") && p(g, i[1])) {
									e = !0;
									break
								}
							}
						e || (d.offlineLog && j("badjs_" + d.id + d.uin, g), c || 20 == g.level || (l.push(i[0]), d.onReport && d.onReport(d.id, g)))
					}
				}
				a ? n() : m || (m = setTimeout(n, d.delay))
			}
		},
		p = a.BJ_REPORT = {
			push: function(a) {
				var c = f.isOBJ(a) ? f.processError(a) : {
					msg: a
				};
				return d.ext && !c.ext && (c.ext = d.ext), c.from || (c.from = location.href), b.push(c), o(), p
			},
			report: function(a, b) {
				return a && p.push(a), b && o(!0), p
			},
			info: function(a) {
				return a ? (f.isOBJ(a) ? a.level = 2 : a = {
					msg: a,
					level: 2
				}, p.push(a), p) : p
			},
			debug: function(a) {
				return a ? (f.isOBJ(a) ? a.level = 1 : a = {
					msg: a,
					level: 1
				}, p.push(a), p) : p
			},
			reportOfflineLog: function() {
				return window.indexedDB ? void e.ready(function(a, b) {
					if (b) {
						var c = new Date - 0 - 24 * d.offlineLogExp * 3600 * 1e3,
							e = new Date - 0;
						b.getLogs({
							start: c,
							end: e,
							id: d.id,
							uin: d.uin
						}, function(a, b) {
							var f = document.createElement("iframe");
							f.name = "badjs_offline_" + (new Date - 0), f.frameborder = 0, f.height = 0, f.width = 0, f.src = "javascript:false;", f.onload = function() {
								var a = document.createElement("form");
								a.style.display = "none", a.target = f.name, a.method = "POST", a.action = d.offline_url || d.url.replace(/badjs$/, "offlineLog"), a.enctype.method = "multipart/form-data";
								var g = document.createElement("input");
								g.style.display = "none", g.type = "hidden", g.name = "offline_log", g.value = JSON.stringify({
									logs: b,
									userAgent: navigator.userAgent,
									startDate: c,
									endDate: e,
									id: d.id,
									uin: d.uin
								}), f.contentDocument.body.appendChild(a), a.appendChild(g), a.submit(), setTimeout(function() {
									document.body.removeChild(f)
								}, 1e4), f.onload = null
							}, document.body.appendChild(f)
						})
					}
				}) : void BJ_REPORT.info("unsupport offlineLog")
			},
			offlineLog: function(a) {
				return a ? (f.isOBJ(a) ? a.level = 20 : a = {
					msg: a,
					level: 20
				}, p.push(a), p) : p
			},
			init: function(a) {
				if (f.isOBJ(a))
					for (var c in a) d[c] = a[c];
				var g = parseInt(d.id, 10);
				return g && (/qq\.com$/gi.test(location.hostname) && (d.url || (d.url = "//badjs2.qq.com/badjs"), d.uin || (d.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), d._reportUrl = (d.url || "/badjs") + "?id=" + g + "&uin=" + d.uin + "&"), b.length && o(), e._initing || (e._initing = !0, e.ready(function(a, b) {
					b && setTimeout(function() {
						b.clearDB(d.offlineLogExp), setTimeout(function() {
							d.offlineLogAuto && k()
						}, 5e3)
					}, 1e3)
				})), p
			},
			__onerror__: a.onerror
		};
	return "undefined" != typeof console && console.error && setTimeout(function() {
		var a = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
		a && console.error("BJ_ERROR", decodeURIComponent(a).replace(/(:\d+:\d+)\s*/g, "$1\n"))
	}, 0), p
}(window);
"undefined" != typeof module && (module.exports = BJ_REPORT),
	function(a) {
		if (!a.BJ_REPORT) return void console.error("please load bg-report first");
		var b = function(b) {
				a.BJ_REPORT.push(b)
			},
			c = {};
		a.BJ_REPORT.tryJs = function(a) {
			return a && (b = a), c
		};
		var d, e = function(a, b) {
				for (var c in b) a[c] = b[c]
			},
			f = function(a) {
				return "function" == typeof a
			},
			g = function(c, e) {
				return function() {
					try {
						return c.apply(this, e || arguments)
					} catch (f) {
						if (b(f), f.stack && console && console.error && console.error("[BJ-REPORT]", f.stack), !d) {
							var g = a.onerror;
							a.onerror = function() {}, d = setTimeout(function() {
								a.onerror = g, d = null
							}, 50)
						}
						throw f
					}
				}
			},
			h = function(a) {
				return function() {
					for (var b, c = [], d = 0, e = arguments.length; e > d; d++) b = arguments[d], f(b) && (b = g(b)), c.push(b);
					return a.apply(this, c)
				}
			},
			i = function(a) {
				return function(b, c) {
					if ("string" == typeof b) try {
						b = new Function(b)
					} catch (d) {
						throw d
					}
					var e = [].slice.call(arguments, 2);
					return b = g(b, e.length && e), a(b, c)
				}
			},
			j = function(a, b) {
				return function() {
					for (var c, d, e = [], h = 0, i = arguments.length; i > h; h++) c = arguments[h], f(c) && (c.tryWrap ? c = c.tryWrap : (d = g(c), c.tryWrap = d, c = d)), e.push(c);
					return a.apply(b || this, e)
				}
			},
			k = function(a) {
				var b, c;
				for (b in a) c = a[b], f(c) && (a[b] = g(c));
				return a
			};
		c.spyJquery = function() {
			var b = a.$;
			if (!b || !b.event) return c;
			var d, e;
			b.zepto ? (d = b.fn.on, e = b.fn.off, b.fn.on = j(d), b.fn.off = function() {
				for (var a, b = [], c = 0, d = arguments.length; d > c; c++) a = arguments[c], f(a) && a.tryWrap && (a = a.tryWrap), b.push(a);
				return e.apply(this, b)
			}) : window.jQuery && (d = b.event.add, e = b.event.remove, b.event.add = j(d), b.event.remove = function() {
				for (var a, b = [], c = 0, d = arguments.length; d > c; c++) a = arguments[c], f(a) && a.tryWrap && (a = a.tryWrap), b.push(a);
				return e.apply(this, b)
			});
			var g = b.ajax;
			return g && (b.ajax = function(a, c) {
				return c || (c = a, a = void 0), k(c), a ? g.call(b, a, c) : g.call(b, c)
			}), c
		}, c.spyModules = function() {
			var b = a.require,
				d = a.define;
			return d && d.amd && b && (a.require = h(b), e(a.require, b), a.define = h(d), e(a.define, d)), a.seajs && d && (a.define = function() {
				for (var a, b = [], c = 0, e = arguments.length; e > c; c++) a = arguments[c], f(a) && (a = g(a), a.toString = function(a) {
					return function() {
						return a.toString()
					}
				}(arguments[c])), b.push(a);
				return d.apply(this, b)
			}, a.seajs.use = h(a.seajs.use), e(a.define, d)), c
		}, c.spySystem = function() {
			return a.setTimeout = i(a.setTimeout), a.setInterval = i(a.setInterval), c
		}, c.spyCustom = function(a) {
			return f(a) ? g(a) : k(a)
		}, c.spyAll = function() {
			return c.spyJquery().spyModules().spySystem(), c
		}
	}(window);