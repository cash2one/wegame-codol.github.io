webpackJsonp([0], {
	194: function(e, a, p) {
		"use strict";

		function t(e) {
			p(211)
		}
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var i = p(257),
			n = p(258),
			o = p(6),
			s = t,
			c = o(i.a, n.a, s, null, null);
		a.default = c.exports
	},
	196: function(e, a, p) {
		function t(e, a, p) {
			function t(a) {
				var p = f,
					t = h;
				return f = h = void 0, M = a, w = e.apply(t, p)
			}

			function A(e) {
				return M = e, v = setTimeout(g, a), I ? t(e) : w
			}

			function l(e) {
				var p = e - k,
					t = e - M,
					i = a - p;
				return D ? r(i, x - t) : i
			}

			function d(e) {
				var p = e - k,
					t = e - M;
				return void 0 === k || p >= a || p < 0 || D && t >= x
			}

			function g() {
				var e = n();
				if (d(e)) return m(e);
				v = setTimeout(g, l(e))
			}

			function m(e) {
				return v = void 0, j && f ? t(e) : (f = h = void 0, w)
			}

			function u() {
				void 0 !== v && clearTimeout(v), M = 0, f = k = h = v = void 0
			}

			function y() {
				return void 0 === v ? w : m(n())
			}

			function b() {
				var e = n(),
					p = d(e);
				if (f = arguments, h = this, k = e, p) {
					if (void 0 === v) return A(k);
					if (D) return v = setTimeout(g, a), t(k)
				}
				return void 0 === v && (v = setTimeout(g, a)), w
			}
			var f, h, x, w, v, k, M = 0,
				I = !1,
				D = !1,
				j = !0;
			if ("function" != typeof e) throw new TypeError(s);
			return a = o(a) || 0, i(p) && (I = !!p.leading, D = "maxWait" in p, x = D ? c(o(p.maxWait) || 0, a) : x, j = "trailing" in p ? !!p.trailing : j), b.cancel = u, b.flush = y, b
		}
		var i = p(3),
			n = p(197),
			o = p(50),
			s = "Expected a function",
			c = Math.max,
			r = Math.min;
		e.exports = t
	},
	197: function(e, a, p) {
		var t = p(0),
			i = function() {
				return t.Date.now()
			};
		e.exports = i
	},
	211: function(e, a, p) {
		var t = p(212);
		"string" == typeof t && (t = [
			[e.i, t, ""]
		]), t.locals && (e.exports = t.locals);
		p(190)("3c697048", t, !0)
	},
	212: function(e, a, p) {
		a = e.exports = p(189)(void 0), a.push([e.i, "@-webkit-keyframes slideUp{0%{opacity:0;-webkit-transform:translate3d(0,30px,0)}to{opacity:1;-webkit-transform:translateZ(0)}}@keyframes slideUp{0%{opacity:0;transform:translate3d(0,30px,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes slideInBottom{0%{opacity:0;-webkit-transform:translate3d(0,100px,0)}to{opacity:1;-webkit-transform:translateZ(0)}}@keyframes slideInBottom{0%{opacity:0;transform:translate3d(0,100px,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes slideInRight{0%{opacity:0;-webkit-transform:translate3d(100px,0,0)}to{opacity:1;-webkit-transform:translateZ(0)}}@keyframes slideInRight{0%{opacity:0;transform:translate3d(100px,0,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes slideInLeft{0%{opacity:0;transform:translate3d(-100px,0,0)}to{opacity:1;transform:translateZ(0)}}@-webkit-keyframes Updown{0%{-webkit-transform:translateZ(0)}50%{-webkit-transform:translate3d(0,8px,0)}to{-webkit-transform:translateZ(0)}}@keyframes Updown{0%{transform:translateZ(0)}50%{transform:translate3d(0,8px,0)}to{transform:translateZ(0)}}.page-client .tui-fr-header{position:absolute;left:0;top:0;width:100%;z-index:1}.page-client .tui-fr-main{position:relative;width:100%;overflow:hidden}.app-scene,.app-scene .tui-fr-container{position:relative}.app-scene{background-position:50% 0;background-repeat:no-repeat;overflow:hidden}.app-scene .tui-fr-container{height:100%;width:1260px}.app-scene-1{height:1000px;background-image:url(" + p(213) + ");background-color:#000}.app-scene-2{height:900px;background-image:url(" + p(214) + ")}.app-scene-3{height:1000px;background-image:url(" + p(215) + ")}.app-scene-4{height:900px;background-image:url(" + p(216) + ")}.app-scene-5{height:900px;background-image:url(" + p(217) + ')}.app-scene-1 .tui-fr-container{padding-left:156px;-webkit-transition:all .3s ease-out}.app-scene-2 .tui-fr-container{padding-left:40px}.app-scene-main{position:absolute}.app-scene-tit,.app-scene-tit-main,.app-scene-tit-sub{display:block;font-size:0;white-space:nowrap;color:transparent}.app-scene-tit-mian:after,.app-scene-tit-sub:after{content:"";display:block}.app-scene-des{font-size:18px;line-height:30px;color:#a0a0a0;text-align:center;letter-spacing:.5em}.app-counter,.app-keywordlist,.app-linklist,.app-scene-btngroup,.app-scene-des,.app-scene-logo,.app-scene-tit{opacity:0;opacity:1\\9}.app-scene-main.active .app-counter,.app-scene-main.active .app-keywordlist,.app-scene-main.active .app-linklist,.app-scene-main.active .app-scene-btngroup,.app-scene-main.active .app-scene-des,.app-scene-main.active .app-scene-logo,.app-scene-main.active .app-scene-tit{animation:slideUp 1s ease-in-out both}.app-scene-btngroup{font-size:0;white-space:nowrap;word-wrap:normal}.app-scene-btngroup>a{display:inline-block;margin-right:16px;font-size:0;color:transparent}.app-counter,.app-counter-numwp{font-size:0;white-space:nowrap;word-wrap:normal;color:transparent}.app-counter-num,.app-counter-numwp,.app-counter-tips{display:inline-block;vertical-align:top}.app-counter:before{content:"";display:inline-block;width:0;height:100%}.app-counter-numwp,.app-counter-tips,.app-counter:before{vertical-align:middle}.app-counter-tips{height:23px;background-image:url(' + p(218) + ')}.app-counter-tips-main{width:190px;margin-right:20px;background-position:0 0}.app-counter-tips-sub{width:24px;margin-left:20px;background-position:100% 0}.app-counter-num{width:24px;height:40px;margin:0 2px}.app-counter-num-0{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAIVBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yADCBdVkAAAACnRSTlMARLt3zIgRmTMijl3c+gAAADxJREFUKM9jwANSVkGBApBTBeMsZmBgXQUHExiYEBwB8jmG4kgcAeZRDgUhihw/DQxsXjD2UuQ4dUCNawDLT9zHfWazkwAAAABJRU5ErkJggg==)}.app-counter-num-1{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAGFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yADzjReCAAAAB3RSTlMAu3fdiFVE4/4y1QAAACVJREFUKM9jwAfYghzNy8sLIZxyIKAeR0lJHcyBAvZRDp05aAAAggBN3JEZ0ekAAAAASUVORK5CYII=)}.app-counter-num-2{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAKlBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yADHdR3SAAAADXRSTlMAu3dE7plmzDMRqiKIehFQkwAAAH9JREFUKM9jwAOm34UCAyBHFsbxZmDguQsD1xkYGO/CAQUcY1skDgMvIQ6bEhBAOVDQi8Th8EXitIDtgUsgOLlQL4AAG8Q1lcgSE0BsJojESrBELJh9FcxmhUgEIElcQpZIADJhPr3GgOBcMUDieDAgcRYpgcAG5NAxoCUHGQAANTT7Jg0X5ZUAAAAASUVORK5CYII=)}.app-counter-num-3{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAJFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yACBARZSAAAAC3RSTlMARLt3mcwzEaqI3adkvPwAAABdSURBVCjPY8ADSndDgQKQ0w3jbGZg4NwNBwkMTAiOAPkcQxEkjgAzSRw2YWMnVRgHApA52rvxcrYwIHEcGFBlMPVM0kK1B+EcanEoD1EO5Phhj4axtyDHaQBqXAMALofZ+N6IiX0AAAAASUVORK5CYII=)}.app-counter-num-4{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAMFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAA+X/6iAAAAD3RSTlMARHe73ZkzzO5mEaqIVSJxZ0ALAAAAkUlEQVQoz63NwQ2CQBSE4dWgRmNshcMmnu0AO1g7sARLoASvdqEl2IElGBIVgcMwkAy8ExeYy/++y64b3gXNsvZewmBrEVm8LILBBgZrixWPVHjzCEIMVLGQAIUwY0thwR6FG/sUrsDfCXfgK+yYnzBnDkLEPIQzcxICkDshBT7eJ0S+d+iXjYfnuqfb6dPpodVpxhkyfmRLvgAAAABJRU5ErkJggg==)}.app-counter-num-5{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAALVBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAAT9LiPAAAADnRSTlMAd0S7zJndVSIR7ohmM4j1FV8AAABhSURBVCjPY8ANGN/BwCPacwIFgUACylEA20+Q42wMBALIpj1H5rxqgHHAOvFw2JE5DHLIHG6QHWaEHMUjCFSjAOUwA0myOEKqMA4YkM9hRXAuMHD6wdhPgQ6eAuM4oEY2AJtXIyD9P2N4AAAAAElFTkSuQmCC)}.app-counter-num-6{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAMFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAA+X/6iAAAAD3RSTlMARLt3zJkRiFUz7t2qZiJAI4/tAAAAYklEQVQoz2PAA1L+Q4ECkKMP43xmYGD/DwcTGJgQHAHyOYaiSBwBZpwcXqXDxo0JUA7EmRCOhDEQCEA58SBiHQOSPV8YqORQJ20Ut1HMwQwDyh3Kihw/bP4w9nfkOHVAjWsAVgJLHRFDjocAAAAASUVORK5CYII=)}.app-counter-num-7{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAMFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAA+X/6iAAAAD3RSTlMAd5kRu+7MZt0zRCKqiFVisI7WAAAAiElEQVQoz2PADfj/w4EDVTkHkDkPGBgFQeA+kP0DZrU8kPMRxukHcn5D2VwQwyCACcQpgHLsgeyvyPo/Iev/iaw/AZf+/wbY9OcDOb+gbE6QqgZk/QJQjimIswHKqQey/yDr/4esPwBZ/wVc+r8h6/+OrD8YWb8Csv4JSPp/IOv/iOz/z1giGwCJodRie9M9sgAAAABJRU5ErkJggg==)}.app-counter-num-8{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAALVBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAAT9LiPAAAADnRSTlMARLt3mcwzEe6I3WZVIosPAOkAAABlSURBVCjPY8ADSt9BgQKQ4wfjPGZg4HwHBxcYmBAcAfI5hiJIHAFmyjmY9rD1wdhPgf45B+O0ATksMI4DkLMPxnnGwMAG1/+qAGKasxGKPTR0NfkcFgQngYE9DsZ+iRynAahxDQA25DsKEjdS/AAAAABJRU5ErkJggg==)}.app-counter-num-9{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoBAMAAAAWIydmAAAAMFBMVEUAAAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAD/yAA+X/6iAAAAD3RSTlMARLt3ZhHuM6qZ3cyIVSKPx5/EAAAAYElEQVQoz2PAA+r/Q4EDAwNrPozzl4GB4z8MfHvAwPQfDgTI5whKInEYmKnJUdICcyh3KAsyh2E+iN4D5QQbA0EwhAMGMBewCzobK5HmasodyoHgFCDF3Begs+QRcYoCADpfSlqj8eb5AAAAAElFTkSuQmCC)}.app-scene-dot{position:absolute;z-index:1;opacity:0;opacity:1\\9}.app-scene-dot:after{content:"";display:block;width:100%;height:100%}.app-scene-dot-jh{left:0;top:1520px;width:343px;height:672px}.app-scene-dot-jh:after{background-image:url(' + p(219) + ");-webkit-transform-origin:0 447px;-webkit-transition:all .3s ease-out}.app-scene-dot-jh.active{animation:slideInLeft 1s ease-out both;animation-delay:.8s}.app-scene-dot-game{right:0;top:2760px;width:289px;height:386px}.app-scene-dot-game:after{background-image:url(" + p(220) + ");-webkit-transform-origin:295px 147px;-webkit-transition:all .3s ease-out}.app-scene-dot-game.active{animation:slideInRight 1s ease-out both;animation-delay:.8s}@media screen and (max-width:1800px){.app-scene-dot:after{-webkit-transform:scale(.8)}}@media screen and (max-width:1500px){.app-scene-dot:after{-webkit-transform:scale(.6)}}.app-scene-1 .app-scene-bg{position:absolute;left:0;top:0;z-index:0;width:100%;height:100%;display:none}.app-scene-1 .app-scene-main{left:50%;top:346px;margin-left:100px;-webkit-transition:all .3s ease-out}.app-scene-1 .app-scene-logo{margin-bottom:28px;font-size:0;color:transparent}.app-scene-1 .app-scene-main.active .app-scene-logo{animation-delay:.2s}@media screen and (min-width:1420px){.app-scene-1 .tui-fr-container{width:1420px}.app-scene-1 .app-scene-main{margin-left:150px}}.app-pubtime{display:inline-block;width:36px;height:58px;margin-right:10px;background-image:url(" + p(221) + ")}.app-pubtime-num-0{background-position:0 0}.app-pubtime-num-1{background-position:-36px 0}.app-pubtime-num-2{background-position:-72px 0}.app-pubtime-num-3{background-position:-108px 0}.app-pubtime-num-4{background-position:-144px 0}.app-pubtime-num-5{background-position:-180px 0}.app-pubtime-num-6{background-position:-216px 0}.app-pubtime-num-7{background-position:-252px 0}.app-pubtime-num-8{background-position:-288px 0}.app-pubtime-num-9{background-position:-324px 0}.app-scene-1 .app-scene-main--countdown .app-scene-logo{width:433px;height:29px;background-image:url(" + p(222) + ')}.app-scene-1 .app-scene-main--countdown .app-scene-tit{animation-delay:.8s}.app-scene-1 .app-scene-main--countdown .app-scene-tit-main{width:502px;margin-bottom:82px;font-size:0;color:transparent;white-space:nowrap;word-wrap:normal}.app-scene-1 .app-scene-main--countdown .app-scene-tit-main:before{content:"";width:0;height:100%}.app-scene-1 .app-scene-main--countdown .app-pubtime,.app-scene-1 .app-scene-main--countdown .app-scene-tit-main:before,.app-scene-1 .app-scene-main--countdown .app-scene-txt{display:inline-block;vertical-align:middle}.app-scene-1 .app-scene-main--countdown .app-scene-txt{height:57px;background-image:url(' + p(223) + ")}.app-scene-1 .app-scene-main--countdown .app-scene-txt-a{width:52px;background-position:-45px 0;margin-right:10px}.app-scene-1 .app-scene-main--countdown .app-scene-txt-b{width:345px;background-position:100% 0}.app-scene-1 .app-scene-main--countdown .app-counter{animation-delay:1.2s}.app-scene-1 .app-scene-main--countdown .app-scene-btngroup{margin-top:40px;animation-delay:1.6s}.app-scene-1 .app-scene-main--countdown .app-btn-download{width:240px;height:50px;background:url(" + p(224) + ") no-repeat 0 0;opacity:.8;-webkit-transition:opacity .3s ease-out}.app-scene-1 .app-scene-main--countdown .app-btn-download:hover{opacity:1}.app-scene-1 .app-scene-main--countdown .app-btn-play{width:50px;height:50px;background:url(" + p(225) + ") no-repeat 0 0;opacity:.4;-webkit-transition:opacity .3s ease-out}.app-scene-1 .app-scene-main--countdown .app-btn-play:hover{opacity:.6}.app-scene-1 .app-scene-main--pub .app-scene-logo{width:332px;height:23px;background-image:url(" + p(226) + ")}.app-scene-1 .app-scene-main--pub .app-scene-tit{animation-delay:.5s}.app-scene-1 .app-scene-main--pub .app-scene-tit-main,.app-scene-1 .app-scene-main--pub .app-scene-tit-sub{width:421px;height:75px;margin-bottom:14px;font-size:0;color:transparent;background-image:url(" + p(227) + ");background-repeat:no-repeat}.app-scene-1 .app-scene-main--pub .app-scene-tit-main{background-position:0 0}.app-scene-1 .app-scene-main--pub .app-scene-tit-sub{background-position:0 100%}.app-scene-1 .app-scene-main--pub .app-scene-btngroup{margin:64px 0 22px;animation-delay:.8s}.app-scene-1 .app-scene-main--pub .app-btn-download{width:256px;height:50px;background:url(" + p(228) + ') no-repeat 0 0}.app-scene-1 .app-scene-main--pub .app-btn-download:hover{background-position:0 -50px}.app-scene-1 .app-scene-main--pub .app-linklist{animation-delay:1.1s}.app-linklist{overflow:hidden;padding-left:5px}.app-linklist>li{position:relative;float:left;padding-right:17px;margin-right:16px}.app-linklist>li:after{content:"";position:absolute;right:0;top:50%;width:1px;height:20px;margin-top:-10px;background-color:#797979;opacity:.4}.app-linklist>li:last-of-type{padding-right:0;margin-right:0}.app-linklist>li:last-of-type:after{display:none}.app-link{position:relative;display:block;padding-left:22px;font-size:13px;line-height:20px;color:#fff;opacity:.4}.app-link:hover{opacity:.6}.app-link:before{content:"";position:absolute;left:0;top:50%;width:16px;height:16px;margin-top:-8px;background-repeat:no-repeat;background-position:50% 50%}.app-link.app-mobile{padding-left:18px}.app-link.app-mobile:before{width:12px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQBAMAAADQT4M0AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAxIgR5tjKvkpJPD4c36cAAAA2SURBVAjXY5iyGwg8GZKUgECNQYABCBgppYSNgcCQYffu7dW7dzN47961evcWhpbdW6N3ewAAyXER3kXC3lgAAAAASUVORK5CYII=)}.app-link.app-wangba:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAMAAACXZR4WAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAZhEiprSId8O7yXhMB9JaFuuLhGgAAABHSURBVAjXZcxJDoAwEAPBBgJkY/H/PwuaSzJJnSzLMlFOJC/OTcDZCddhWsFmusX5qwyLtxXz6eokNCDJSWAeqdIpWYrF4gfdMwSv15jb2QAAAABJRU5ErkJggg==)}.app-link.app-global:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMABSvQlPitj8K1kGNYEAj65LJLRkDz8ezX1MvGmHdtVBoT3buknp1/TzcvDKBIaqUAAACmSURBVBjTJY9HEoMwEARbEiCiiY6Y5Bz2/++zJfo2vVO1NTi0PYShsZoVFYgj+9zOG5+vPu8KaGoFrPcyB2hT0KUXg5pcP9JYuXgTRsC3ssQtT5HKyAibSA700Mh2Xu45JP8iMRS7fQF4sXWCvDw2AEssR+wb6PYSmgyUSdE1wHwSkZd/S5ABFJXIyBQAKvFmkIA8Ueu4ulO0jy5y4zw6PRnTpxrgB77NDrDKHwBWAAAAAElFTkSuQmCC)}.app-link.app-pc:before{width:18px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAMAAAAs2N9uAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMA8RcvFQTUxTEN6KakmoV5XVdTI7MWsx0AAABJSURBVBjTY4ADThYmDkF+XnY2IJuVRZhDiJOVm41RBAQYGQT4eNi5RESYGYACECEIi0pCLExgwApjMLFgEaKqjZgewuZtzMABAHy8DKeRXVbvAAAAAElFTkSuQmCC)}.app-logo,.app-logo-bg,.app-logo-g{position:absolute}.app-logo{left:70px;bottom:0;width:580px;height:767px;opacity:0;opacity:1\\9}.app-logo-g{left:50%;top:-25px;z-index:3;width:401px;height:456px;margin-left:-230px;background-image:url(' + p(229) + ")}.app-logo-bg-1{left:-124px;top:176px;z-index:0;width:216px;height:162px;background-image:url(" + p(230) + ")}.app-logo-bg-2{right:-105px;top:444px;z-index:2;width:161px;height:167px;background-image:url(" + p(231) + ")}.app-logo-bg-3{left:-153px;top:285px;z-index:2;width:84px;height:56px;background-image:url(" + p(232) + ")}.app-logo-bg-4{left:-62px;bottom:-40px;z-index:1;width:683px;height:670px;background-image:url(" + p(233) + ')}.app-logo.active{animation:slideInBottom 1s ease-in-out both;animation-delay:.2s}.app-logo.active .app-logo-bg-1,.app-logo.active .app-logo-bg-2,.app-logo.active .app-logo-bg-3,.app-logo.active .app-logo-g{-webkit-animation:Updown 3s linear infinite;animation:Updown 3s linear infinite}.app-logo.active .app-logo-bg-1,.app-logo.active .app-logo-g{animation-delay:1.2s}.app-logo.active .app-logo-bg-2{animation-delay:1.5s}.app-logo.active .app-logo-bg-3{animation-delay:1.7s}.app-scene-2 .app-scene-main{top:254px}.app-scene-2 .app-scene-tit-main,.app-scene-2 .app-scene-tit-sub{display:block}.app-scene-2 .app-scene-tit-sub{position:relative;margin-bottom:30px}.app-scene-2 .app-scene-tit-main:after,.app-scene-2 .app-scene-tit-sub:after{content:"";display:block;height:73px;background-image:url(' + p(234) + ')}.app-scene-2 .app-scene-tit-main:after{width:150px;background-position:0 0}.app-scene-2 .app-scene-tit-sub:after{position:relative;width:309px;background-position:0 100%}.app-scene-2 .app-scene-tit-sub:before{content:"";position:absolute;right:-10px;bottom:25px;z-index:0;width:111px;height:81px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABRCAMAAADrawiPAAAAmVBMVEUAAAD/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1UT/1US+5nCpAAAAMnRSTlMAAwH3+9EK2gbezclPStW9ZC3y4GhfV8SRWzQhHbSXh4FvVEQ5JhbtjHt0PhDmqqSeeNBTQKoAAAHFSURBVGjevdZrUhpRFEXhc+mmeSnQgKIICL4VTfTOf3BJ+WelEiu2yN5rBl/3rV0nmnbXCmvz1TKMHec8GRuJg/y7kZwI773JTE+E9068CG3wPER4HiI8iFsdEZ6NCI+KbQrS8Wh+GyTg2YitfiaCKOdBfIIo4FmIR5k+Jlp4NKg9PIhvycSD6OFBfEwWHvVrAU9NbLUzGYjwmhE3XQuP2rWFRyVELQ/iQsATEOGZiFd578rLroVHw4WJB7GKr5Tg7Uu88fAgPlQWHnUaE08zCYgCHkQLD+JZ9TlvmA9YZ+fiQbTwqLfz8Aiilgfx2sOjdWXh0fRD4nnWtX428Ki/ubDxitVsGf+WOlnQy+tRFaTltS9vUpCUV4y2/DI17/7nKe9Rzes87FKQlFfOn26DtLzJj5O7aNbJ9yfr7LobpOUNHusgLa9YjfmKat7LmvmQ8ZiPRQqS8ooRIyzjMR9XVexd6u03HwZeOWI+ZDzm4/w5vt+42VHHfMh5JfMh5TEfh6vb+/98HFdBWl5/s2gFSXnccAbe/SvzcWDeNP/dkBuORLySG44EPG44bbM/5yOFNHjl/K0ORzNuOGXwpsyHoSXz4egX7dXPic/x4Z0AAAAASUVORK5CYII=)}.app-scene-2 .app-scene-des{text-align:left;margin-bottom:82px}.app-keywordlist{overflow:hidden}.app-keywordlist>li{position:relative;float:left;padding-right:32px;margin-right:32px}.app-keywordlist>li:after{content:"";position:absolute;right:0;top:50%;width:1px;height:50px;margin-top:-25px;background-color:#d1cece}.app-keywordlist>li:last-of-type{padding-right:0;margin-right:0}.app-keywordlist>li:last-of-type:after{display:none}.app-keyword{font-size:13px;color:#8c8c8c;text-align:center;white-space:nowrap}.app-keyword:before{content:"";display:block;width:42px;height:42px;margin:0 auto 8px;background-repeat:no-repeat;background-position:50% 50%}.app-keywordlist>li:first-of-type .app-keyword:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAn1BMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjK5bwf1AAAANHRSTlMA+5cHQ/Lu3RsWCuk8OS+cKSDSu66lbE4D9uPYyrJyYjQOxsGOe3dmShKQh35pXFUlgn9a+auS2gAAAgxJREFUOMuNlWl7gjAQhJPIoSCgeN9W6221tu///21VIzE8hdb5tBuGZXd2AFGEuCpexDdu7UVqAs7/rMp2P3YBwtZx/hexdvCwkM4qJcT++lFvBK3FAGBU3EhzAYSHWAgFdVFxEgm8FxSOQ3CnwTXS1CuqCdB6+8X0YPmQcw+RjpwQFkGeWR1CJ3tW5I2D7DyFSX6iJXSKRfFhbR98wLhEmE+XQfOZvnnIT1GCGbSf2RqUKMUYGibxc/6Ij53kw8p78J7FESTmwq4NwGD1nHlImMUr2BrmCA2rpXeIH+EEaWTugD9rRAo4Wx1sTKsjIw0M721OITXuyJrtKclQKbV9MLpZg9zkrKyVSsBXX4GoSTTkzRfKrL8Njlb1gbWoDNHwb+s6QE9TF/qmuq6kW985LiPHce5mO2XuiEHu7o06Tg9ajt5CSmitmP1VjrlvrTOG41OgpmUcvGUKuMYVGzg/ww9Lb43BTREzYS3zLyyslaeAnBiH3DQam6QFdfuVqEc7K71A1yRbWIoyVF28IGfJTRm1DSsrnUsG82JmF0a5d2kFoRmkf47MhZNE5ov0J+DVTSGZ6TwFZiKPYAnySz9JZYJU28D09+eyw83VlSe1dnFBbgoHGABe8t1IoDfvTiTgR6IQzQ55eMdAlKGxDzFIp2/iL/TjrvKhdTj9+5cxCryGFTRepAaXU9HxD2mzUnsDsCuNAAAAAElFTkSuQmCC)}.app-keywordlist>li:nth-of-type(2) .app-keyword:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAh1BMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjLYz/VCAAAALHRSTlMADkSrPBWXCmlm9hrQw/oh2cvVueFxUyjx3knSin4yEOvHoo98g2FcOh8G4w7ITp4AAAFNSURBVDjLzdTZdoIwFIXhzWRkVEoVhwoIDq097/98xYylzTJe+t+wVvjgJieBrV2KJ1sXy/RZSaSsWyrrlvNKWLeMwR7YOJBxCW63aq2e0Bnp5oCwutBOuTTWTj1Ym78ubVbrG0SLPnxED9QVR0/IdxosdFcIWtMKdXeWch9xKp5GjmbskgDoKy3HWE6URVomUsKnBmw54/KNvzfWSFGeBMtNbaSxWurlU9Vr+deGozxgkpLGZqNl8I5EZTuR27u8LRhUfkJ0Av7ZLy79b0oOU6ms91umiJLAP9N1IrkthTUSl4QBVaAk/7+xfOvTrThT16IF8jtthDQ2kzMwCIm2y68zWouNPVvHpR5S8JqSusuz88pe+MCsYp7+ool5vYXKcmnDjeN20faTSxutfVk2WibkoNZaWIu4vcsPOOK21NJtpXTbvZFuq6Q7Bls/3/g8cdLLwJoAAAAASUVORK5CYII=)}.app-keywordlist>li:nth-of-type(3) .app-keyword:before{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAmCAMAAABu6EIRAAAAllBMVEUAAAAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKnclhuAAAAMXRSTlMAiBD73NIt6aUGA/FMDGn27dbGnFgoFcmCdjgdGOPNuox9RDMkvpNTPzUhCcKtZWBuWTR9MQAAAdFJREFUOMuNlNm2ojAQRQsDMqmAAoJe5+lqO9z9/z/XNK10QOjlfkk4nFRSVSuRN4bbkTGZrPPTl/yP3uiqeBFll06f4VNDOUmrMbYBlut4lux3g81BASpzpYk7AYK1FiTNbWA6byZyAJxGFr+yABZJXRuDf5I3+ibYe11xwO5LC+kSzKFU3MHvdxTEAqf6+vJhIB1c9J8TOEonD4i8YizqNVeEPelmDLFIFnxLBpverBTz5bT/LNtq6XhSsoWriIHlmai+xb48/4Kl+zyROssTE+aShhxhOsVyX+sNKRjARl5kcBcZUWKmT3UN30U1bMZe5fwuC+VZAIuqu67Foicr/IvWapj+XYCdaA0McEbwEA0b+1mEWdUDwzAsUPjFpFIlIiib8Nh5VUA0RpXTQlVzLaZxg7FRi7kgbDq9XkEM6z+jW2WpiHRX9+6FevvM+QO5tDEAoyYc4PyRcw+mfOScwOYj507h9zquzm43166t1QjpDaUdByJXv62rQ7v1CEFfj2jp74q2tQMqrknnEMK4aZxFoO4NMTGB67bWMAcITu8Z3wBMY5tKwfCcjwGspLWOESW+adqUhLkrrXinleIf1s9Quknj48q0Q3M8Ge1F5zfADkPATyk/FAAAAABJRU5ErkJggg==)}.app-scene-2 .app-scene-main.active .app-scene-tit{animation-delay:.2s}.app-scene-2 .app-scene-main.active .app-scene-des{animation-delay:.5s}.app-scene-2 .app-scene-main.active .app-keywordlist{animation-delay:.8s}.app-slider{opacity:0;opacity:1\\9;position:absolute;bottom:142px;right:0;width:881px;height:597px;padding:112px 132px 0;background:url(' + p(235) + ")}.app-slider-focus{width:621px;height:220px;background:url(" + p(236) + ")}.app-slider-tit{width:620px;height:16px;margin:16px 0;background:url(" + p(237) + ")}.app-slider-itemlist{overflow:hidden;margin-right:-10px}.app-slider-itemlist>li{float:left;width:20%;padding-right:10px}.app-slider-item{width:116px;height:150px}.app-slider-itemlist>li:first-of-type .app-slider-item{background-image:url(" + p(238) + ")}.app-slider-itemlist>li:nth-of-type(2) .app-slider-item{background-image:url(" + p(239) + ")}.app-slider-itemlist>li:nth-of-type(3) .app-slider-item{background-image:url(" + p(240) + ")}.app-slider-itemlist>li:nth-of-type(4) .app-slider-item{background-image:url(" + p(241) + ")}.app-slider-itemlist>li:nth-of-type(5) .app-slider-item{background-image:url(" + p(242) + ")}.app-slider.active{animation:slideUp 1s ease-in-out 1 both;animation-delay:.2s}.app-scene-3 .app-scene-main{top:125px;width:100%}.app-scene-3 .app-scene-tit-main{width:533px;height:48px;margin:0 auto 18px;background-image:url(" + p(243) + ")}.app-scene-3 .app-scene-des{text-align:center;letter-spacing:.3em}.app-scene-3 .app-scene-main.active .app-scene-tit{animation-delay:.2s}.app-scene-3 .app-scene-main.active .app-scene-des{animation-delay:.5s}.app-category,.app-category>li{opacity:0;opacity:1\\9}.app-category{position:absolute;left:50%;bottom:116px;width:1250px;height:611px;padding:20px 46px 54px 27px;margin-left:-625px;background-image:url(" + p(244) + ")}.app-category-item{position:absolute;left:50%;top:50%;font-size:0;color:transparent}.app-category>li{position:absolute;height:269px}.app-category>li:first-of-type{left:27px;top:20px;width:238px}.app-category>li:nth-of-type(2){left:503px;top:20px;width:466px}.app-category>li:nth-of-type(3){left:969px;top:20px;width:237px}.app-category>li:nth-of-type(4){left:27px;bottom:54px;width:476px}.app-category>li:nth-of-type(5){left:503px;bottom:54px;width:232px}.app-category>li:first-of-type .app-category-item{width:145px;height:66px;margin:-33px 0 0 -72px;background-image:url(" + p(245) + ")}.app-category>li:nth-of-type(2) .app-category-item,.app-category>li:nth-of-type(4) .app-category-item{width:60px;height:60px;margin:-30px 0 0 -30px;background-image:url(" + p(246) + ")}.app-category>li:nth-of-type(3) .app-category-item{width:146px;height:66px;margin:-33px 0 0 -73px;background-image:url(" + p(247) + ")}.app-category>li:nth-of-type(5) .app-category-item{width:146px;height:61px;margin:-30px 0 0 -73px;background-image:url(" + p(248) + ")}.app-category.active,.app-category.active>li:first-of-type,.app-category.active>li:nth-of-type(3),.app-category.active>li:nth-of-type(5){animation:slideUp .8s ease-in-out both}.app-category.active{animation-delay:.5s}.app-category.active>li:first-of-type{animation-delay:.8s}.app-category.active>li:nth-of-type(3){animation-delay:1.15s}.app-category.active>li:nth-of-type(5){animation-delay:1.2s}.app-category.active>li:nth-of-type(2),.app-category.active>li:nth-of-type(4){opacity:1}.app-scene-4 .app-scene-main{top:142px;width:100%}.app-scene-4 .app-scene-tit-main{width:513px;height:53px;margin:0 auto 16px;background-image:url(" + p(249) + ')}.app-scene-4 .app-scene-des{text-align:center}.app-service{position:absolute;left:0;bottom:215px;width:100%}.app-service-itemlist{overflow:hidden}.app-service-itemlist>li{width:25%;float:left}.app-service-des,.app-service-tit{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.app-service-tit{margin-bottom:6px;font-size:32px;color:#333}.app-service-des{font-size:16px;color:#8c8c8c}.app-service-item:before{content:"";display:block;width:200px;height:200px;margin:0 auto 42px;background-image:url(' + p(250) + ")}.app-scene-4 .app-scene-main.active .app-scene-tit{animation-delay:.2s}.app-scene-4 .app-scene-main.active .app-scene-des{animation-delay:.4s}.app-service-itemlist>li{opacity:0;opacity:1\\9}.app-service-itemlist>li:first-of-type .app-service-item:before{background-position:-600px 0}.app-service-itemlist>li:nth-of-type(2) .app-service-item:before{background-position:-200px 0}.app-service-itemlist>li:nth-of-type(3) .app-service-item:before{background-position:-800px 0}.app-service-itemlist>li:nth-of-type(4) .app-service-item:before{background-position:-1000px 0}.app-service.active .app-service-itemlist>li{animation:slideUp .6s ease-in-out both}.app-service.active .app-service-itemlist>li:first-of-type{animation-delay:.5s}.app-service.active .app-service-itemlist>li:nth-of-type(2){animation-delay:.8s}.app-service.active .app-service-itemlist>li:nth-of-type(3){animation-delay:1s}.app-service.active .app-service-itemlist>li:nth-of-type(4){animation-delay:1.1s}.app-scene-5 .app-scene-main{right:50px;top:280px;width:345px}.app-scene-5 .app-scene-tit-main{width:318px;height:114px;margin-bottom:70px;background-image:url(" + p(251) + ")}.app-scene-5 .app-scene-des{text-align:left;margin-bottom:65px;letter-spacing:normal}.app-scene-5 .app-scene-btngroup .app-btn-more{display:block;width:240px;height:50px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:0;line-height:50px;color:transparent;border-radius:50px;background:url(" + p(252) + ");opacity:.8}.app-scene-5 .app-scene-btngroup .app-btn-more:hover{opacity:1}.app-scene-5 .app-scene-main.active .app-scene-tit{animation-delay:.2s}.app-scene-5 .app-scene-main.active .app-scene-des{animation-delay:.5s}.app-scene-5 .app-scene-main.active .app-scene-btngroup{animation-delay:.8s}.app-dev,.app-dev-bg,.app-dev-role{position:absolute}.app-dev{left:0;bottom:-40px;width:588px;height:650px;opacity:0;opacity:1\\9}.app-dev-bg{left:-83px;top:0;width:705px;height:525px;background-image:url(" + p(253) + ")}.app-dev-wegame{left:-15px;top:-60px;width:214px;height:202px;background-image:url(" + p(254) + ")}.app-dev-user{right:76px;top:-75px;width:124px;height:147px;background-image:url(" + p(255) + ")}.app-dev-developer{right:140px;top:150px;width:149px;height:177px;background-image:url(" + p(256) + ')}.app-dev.active{animation:slideUp 1s ease-in-out both;animation-delay:.2s}.app-dev.active .app-dev-role{-webkit-animation:Updown 3s linear infinite;animation:Updown 3s linear infinite}.app-dev.active .app-dev-wegame{animation-delay:1.2s}.app-dev.active .app-dev-user{animation-delay:1.5s}.app-dev.active .app-dev-developer{animation-delay:1.7s}.app-playerwp{position:fixed;left:0;top:0;z-index:999;width:100%;height:100%;background-color:rgba(0,0,0,.5);font-size:0;white-space:nowrap;word-wrap:normal;text-align:center}.app-playerbox,.app-playerwp:before{display:inline-block;vertical-align:middle}.app-playerwp:before{content:"";width:0;height:100%}.app-playerbox{position:relative;width:824px;height:624px;padding:12px;background-color:#333}.app-player{width:800px;height:600px;background-color:#000}.app-playerbox .app-btn-close{position:absolute;top:0;right:-60px;width:32px;height:32px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9oJYrRAAAAIHRSTlMyADDTLSkeBxs3Ecetp8TBtKFORzwKy7yVVEKGWRJ4bXwELUwAAADqSURBVDjLhZPZEsMgCEWJiGYxSdN97///Zc3YKrRNuU8O9wwoAlRFrSNrjCXXsmAGvDOQZZz/BOpkF6QWgCf4EvkC7Cz8kN29AV98SfgXQLAgSkANi6pnwJtlwPgIOPgjF4GcoO+bdNiuQk5RQZvpA4Ym+bjKwRZKhc2IMcfsH86lBhAUYojENnA/2hYEMQUcmR9t8ch1hzhuxEMl0ATECSRgud/j0OERRAli/oTd+rQXBAFr5OwDSMKxRl1mP+q6xztrVGUyMJzS4To+8h3Vz1K/WxsYbeT0odXHXl8cffX05S26vdf/xoJP9L0IcQYSUdwAAAAASUVORK5CYII=)}', ""])
	},
	213: function(e, a, p) {
		e.exports = p.p + "images/bg-1.f141a074bab1899171a6844638f65c62.png"
	},
	214: function(e, a, p) {
		e.exports = p.p + "images/bg-2.c48534d4edaeeb47c72c4c73f53b4008.png"
	},
	215: function(e, a, p) {
		e.exports = p.p + "images/bg-3.f517ac88962b2e345a1ff970c91ad63a.png"
	},
	216: function(e, a, p) {
		e.exports = p.p + "images/bg-4.a339fac1b9cfd5594a4b08ff0aacc7ba.png"
	},
	217: function(e, a, p) {
		e.exports = p.p + "images/bg-5.9c541046e5e6b98b64d1aa38481dc353.png"
	},
	218: function(e, a, p) {
		e.exports = p.p + "images/count-tips.c5955559ee2ffb05865927b5bd6c63d8.png"
	},
	219: function(e, a, p) {
		e.exports = p.p + "images/pic-1.f2997593b768e18a067c15c7b4b503bd.png"
	},
	220: function(e, a, p) {
		e.exports = p.p + "images/pic-4.7528227705b796c8e0d94a6eda794a2c.png"
	},
	221: function(e, a, p) {
		e.exports = p.p + "images/num.a56ec1f24a1725454ea43cb4adb1fbde.png"
	},
	222: function(e, a, p) {
		e.exports = p.p + "images/tencent-wegame.38b7782644bfd5f4f63e160cd764247e.png"
	},
	223: function(e, a, p) {
		e.exports = p.p + "images/tit-1.c8511c8b71aee32f612db9c07498bf8c.png"
	},
	224: function(e, a, p) {
		e.exports = p.p + "images/btn-down-1.c8c1a2f3718594e1f651bcd3768a8ecf.png"
	},
	225: function(e, a, p) {
		e.exports = p.p + "images/btn-play.a9a9c4e63c934e4b7cbb7380c0301deb.png"
	},
	226: function(e, a, p) {
		e.exports = p.p + "images/tencent-wegame-b.720f48a74b8e25ec842b7c58d5f773a9.png"
	},
	227: function(e, a, p) {
		e.exports = p.p + "images/tit-1-b.ea9eb1326e9627ee1ad1da7d159e0536.png"
	},
	228: function(e, a, p) {
		e.exports = p.p + "images/btn-down-2.7db8429cde5ae2079c2f233f43c57ca2.png"
	},
	229: function(e, a, p) {
		e.exports = p.p + "images/app-focus-logo.64ba7016c8db14ea42195c6baa3f6852.png"
	},
	230: function(e, a, p) {
		e.exports = p.p + "images/app-focus-k1.5eb44385bd32eddc7d153900599aba27.png"
	},
	231: function(e, a, p) {
		e.exports = p.p + "images/app-focus-k2.58ed134fef9dc023e2c04f968cea0164.png"
	},
	232: function(e, a, p) {
		e.exports = p.p + "images/app-focus-k3.ee2b290e729b091e7a6b048a9b5de4a2.png"
	},
	233: function(e, a, p) {
		e.exports = p.p + "images/app-focus-k4.1a6dff0ba99e1ce91e6239848b0af55a.png"
	},
	234: function(e, a, p) {
		e.exports = p.p + "images/tit-2.c05d45961034cbc088a25bf676131593.png"
	},
	235: function(e, a, p) {
		e.exports = p.p + "images/pic-2.51b54d7eae9df80cab064c7ff4a792ae.png"
	},
	236: function(e, a, p) {
		e.exports = p.p + "images/slider-focus.749235cae342714efbabe5ecf4272f16.png"
	},
	237: function(e, a, p) {
		e.exports = p.p + "images/slider-tit.3bedcdee0a06cbdf3600526fe9afe921.png"
	},
	238: function(e, a, p) {
		e.exports = p.p + "images/slider-item-1.210eb5066402cae9a40740775ee8b6ee.png"
	},
	239: function(e, a, p) {
		e.exports = p.p + "images/slider-item-2.99d928978258c8d8361102daccad7c1c.png"
	},
	240: function(e, a, p) {
		e.exports = p.p + "images/slider-item-3.f53e14104c59360f9c0fa7bc6e716c32.png"
	},
	241: function(e, a, p) {
		e.exports = p.p + "images/slider-item-4.e81661bc71de90bcda134a3f6cad9f64.png"
	},
	242: function(e, a, p) {
		e.exports = p.p + "images/slider-item-5.5279644757f28f16d3d1661decee5335.png"
	},
	243: function(e, a, p) {
		e.exports = p.p + "images/tit-3.dd98ad6b33f7fbd424f1db64b63b038c.png"
	},
	244: function(e, a, p) {
		e.exports = p.p + "images/pic-3.8656f62bb12ebefce7f0c805d4635bfd.png"
	},
	245: function(e, a, p) {
		e.exports = p.p + "images/sub-tit-1.f70272a3e29bdd664be5ed3c8d60c318.png"
	},
	246: function(e, a, p) {
		e.exports = p.p + "images/icon-v-b.355e2bd1fa66ae2e7714017a29d9d661.png"
	},
	247: function(e, a, p) {
		e.exports = p.p + "images/sub-tit-2.39c6aa60e7422804ec5e30ac422f6c6d.png"
	},
	248: function(e, a, p) {
		e.exports = p.p + "images/sub-tit-3.8d7e472047410189d714a64e55cc7a87.png"
	},
	249: function(e, a, p) {
		e.exports = p.p + "images/tit-4.8cd200fa15a7c1855a8dd5d38383ebd3.png"
	},
	250: function(e, a, p) {
		e.exports = p.p + "images/app-service.5e1cb1e52e202ba84c2a45e2460805a2.png"
	},
	251: function(e, a, p) {
		e.exports = p.p + "images/tit-5.c1aac261db4fad440d1353ce029b5a99.png"
	},
	252: function(e, a, p) {
		e.exports = p.p + "images/btn-more.06ba35be0e378521212f64d54dfb0d7a.png"
	},
	253: function(e, a, p) {
		e.exports = p.p + "images/app-devservice-bg.ec595fe4926f7a1e03fd6ccd881a1c61.png"
	},
	254: function(e, a, p) {
		e.exports = p.p + "images/app-devservice-plat.4ec8dc7709ac93bef1e71716a798a4cf.png"
	},
	255: function(e, a, p) {
		e.exports = p.p + "images/app-devservice-user.d61575a1be6d55cd984428dc1db7ef65.png"
	},
	256: function(e, a, p) {
		e.exports = p.p + "images/app-devservice-dever.11db7dab3a10812bdc0bdb2740dcb860.png"
	},
	257: function(e, a, p) {
		"use strict";

		function t(e) {
			var a = e.getBoundingClientRect(),
				p = window.innerHeight || document.documentElement.clientHeight,
				t = a.bottom - .1 * a.height > 0,
				i = a.top + .1 * a.height < p;
			return t && i
		}
		var i = p(196),
			n = p.n(i),
			o = p(49),
			s = p(51);
		a.a = {
			title: "Tencent WeGame(åŽŸTGP) - å‘çŽ°æ›´å¤§çš„æ¸¸æˆä¸–ç•Œ",
			computed: {
				pcDownloadUrl: function() {
					var e = find(this.$store.getters.allDownloads, function(e) {
						return "pc" === e.type
					});
					return e ? e.url : "javascript:void(0);"
				},
				otherDownloads: function() {
					return this.$store.getters.allDownloads.filter(function(e) {
						return "pc" !== e.type
					})
				}
			},
			mounted: function() {
				window.performance && window.performance.mark("viewMounted"), Object(o.a)(), this.elements = document.querySelectorAll("[data-animate]"), this.throttledEvent = n()(this.handleScroll, 15), window.addEventListener("scroll", this.throttledEvent, !1), this.handleScroll()
			},
			beforeDestroy: function() {
				window.removeEventListener("scroll", this.throttledEvent, !1), this.throttledEvent = null, this.elements = null
			},
			methods: {
				handleScroll: function() {
					for (var e = 0, a = this.elements.length; e < a; e++) {
						var p = this.elements[e];
						!p.getAttribute("data-animated") && t(p) && (p.className += " active", p.setAttribute("data-animated", !0))
					}
				}
			},
			components: {
				WePcDownloadButton: s.a
			}
		}
	},
	258: function(e, a, p) {
		"use strict";
		var t = function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", [p("div", {
					staticClass: "app-scene app-scene-1"
				}, [p("div", {
					staticClass: "tui-fr-container"
				}, [p("div", {
					staticClass: "app-animate active app-scene-main app-scene-main--pub"
				}, [p("p", {
					staticClass: "app-scene-logo"
				}, [e._v("Tencent WeGame")]), e._m(0), p("p", {
					staticClass: "app-scene-btngroup"
				}, [p("we-pc-download-button", {
					staticClass: "app-btn-download",
					nativeOn: {
						click: function(a) {
							e.$report("download_pc", "click")
						}
					}
				}, [e._v("ä¸‹è½½PCç‰ˆ")])], 1), e.otherDownloads.length > 0 ? p("ul", {
					staticClass: "app-linklist"
				}, e._l(e.otherDownloads, function(a) {
					return p("li", {
						key: a.name
					}, [p("a", {
						class: ["app-link", "app-" + a.type],
						attrs: {
							href: a.url,
							target: "_blank",
							rel: "noopener noreferrer"
						},
						on: {
							click: function(p) {
								e.$report("download_" + a.type, "click")
							}
						}
					}, [e._v(e._s(a.name))])])
				})) : e._e()]), e._m(1)])]), e._m(3), e._m(5), e._m(7), e._m(9), p("p", {
					staticClass: "app-scene-dot app-animate app-scene-dot-jh",
					attrs: {
						"data-animate": "true"
					}
				}), p("p", {
					staticClass: "app-scene-dot app-animate app-scene-dot-game",
					attrs: {
						"data-animate": "true"
					}
				})])
			},
			i = [function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("h2", {
					staticClass: "app-scene-tit"
				}, [p("span", {
					staticClass: "app-scene-tit-main"
				}, [e._v("å‘çŽ°æ›´å¤§çš„")]), p("span", {
					staticClass: "app-scene-tit-sub"
				}, [e._v("æ¸¸æˆä¸–ç•Œ")])])
			}, function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", {
					staticClass: "app-logo app-animate active"
				}, [p("div", {
					staticClass: "app-logo-g"
				}), p("div", {
					staticClass: "app-logo-bg app-logo-bg-1"
				}), p("div", {
					staticClass: "app-logo-bg app-logo-bg-2"
				}), p("div", {
					staticClass: "app-logo-bg app-logo-bg-3"
				}), p("div", {
					staticClass: "app-logo-bg app-logo-bg-4"
				})])
			}, function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", {
					staticClass: "tui-fr-container"
				}, [p("div", {
					staticClass: "app-scene-main app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("h2", {
					staticClass: "app-scene-tit"
				}, [p("span", {
					staticClass: "app-scene-tit-main"
				}, [e._v("å…¨æ–°")]), p("span", {
					staticClass: "app-scene-tit-sub"
				}, [e._v("æ¸¸æˆå•†åŸŽ")])]), p("p", {
					staticClass: "app-scene-des"
				}, [e._v("å¸¦ä½ å‘çŽ°æ›´å¤§çš„æ¸¸æˆä¸–ç•Œ")]), p("ul", {
					staticClass: "app-keywordlist"
				}, [p("li", [p("p", {
					staticClass: "app-keyword"
				}, [e._v("å¤šç»´åº¦æŽ¨è")])]), p("li", [p("p", {
					staticClass: "app-keyword"
				}, [e._v("æ›´å¤šæŠ˜æ‰£")])]), p("li", [p("p", {
					staticClass: "app-keyword"
				}, [e._v("è‡ªä¸»é€€æ¬¾")])])])]), p("div", {
					staticClass: "app-slider app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("p", {
					staticClass: "app-slider-focus"
				}), p("p", {
					staticClass: "app-slider-tit"
				}), p("ul", {
					staticClass: "app-slider-itemlist"
				}, [p("li", [p("p", {
					staticClass: "app-slider-item"
				})]), p("li", [p("p", {
					staticClass: "app-slider-item"
				})]), p("li", [p("p", {
					staticClass: "app-slider-item"
				})]), p("li", [p("p", {
					staticClass: "app-slider-item"
				})]), p("li", [p("p", {
					staticClass: "app-slider-item"
				})])])])])
			}, function() {
				var e = this,
					a = e.$createElement;
				return (e._self._c || a)("div", {
					staticClass: "app-scene app-scene-2"
				}, [e._m(2)])
			}, function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", {
					staticClass: "tui-fr-container"
				}, [p("div", {
					staticClass: "app-scene-main app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("h2", {
					staticClass: "app-scene-tit"
				}, [p("span", {
					staticClass: "app-scene-tit-main"
				}, [e._v("æ¸¸æˆå†…å®¹ä¸€ç½‘æ‰“å°½")])]), p("p", {
					staticClass: "app-scene-des"
				}, [e._v("ä¸ºä½ æä¾›ä¸“ä¸šã€å…¨é¢ã€æœ‰è¶£çš„æ¸¸æˆèµ„è®¯")])]), p("ul", {
					staticClass: "app-category app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("li", [p("p", {
					staticClass: "app-category-item"
				}, [e._v("æ¸¸æˆç¤¾åŒº")])]), p("li", [p("p", {
					staticClass: "app-category-item"
				}, [e._v("è§†é¢‘")])]), p("li", [p("p", {
					staticClass: "app-category-item"
				}, [e._v("æ¸¸æˆç›´æ’­")])]), p("li", [p("p", {
					staticClass: "app-category-item"
				}, [e._v("è§†é¢‘")])]), p("li", [p("p", {
					staticClass: "app-category-item"
				}, [e._v("æ¸¸æˆè§†é¢‘")])])])])
			}, function() {
				var e = this,
					a = e.$createElement;
				return (e._self._c || a)("div", {
					staticClass: "app-scene app-scene-3"
				}, [e._m(4)])
			}, function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", {
					staticClass: "tui-fr-container"
				}, [p("div", {
					staticClass: "app-scene-main app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("h2", {
					staticClass: "app-scene-tit"
				}, [p("span", {
					staticClass: "app-scene-tit-main"
				}, [e._v("å…¨æ–¹ä½çš„çŽ©å®¶æœåŠ¡")])]), p("p", {
					staticClass: "app-scene-des"
				}, [e._v("åšæœ€æ‡‚ä½ çš„æ¸¸æˆä¼™ä¼´")])]), p("div", {
					staticClass: "app-service app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("ul", {
					staticClass: "app-service-itemlist"
				}, [p("li", [p("div", {
					staticClass: "app-service-item"
				}, [p("h3", {
					staticClass: "app-service-tit"
				}, [e._v("ç½‘ç»œåŠ é€Ÿ")]), p("p", {
					staticClass: "app-service-des"
				}, [e._v("ä½Žå»¶è¿Ÿè¶…ç•…å¿«ï¼Œå°½äº«æ¸¸æˆä¹è¶£")])])]), p("li", [p("div", {
					staticClass: "app-service-item"
				}, [p("h3", {
					staticClass: "app-service-tit"
				}, [e._v("æ¸¸æˆè¾…åŠ©")]), p("p", {
					staticClass: "app-service-des"
				}, [e._v("æ¸¸æˆå¥½ä¼´ä¾£ï¼Œè½»æ¾å˜å¤§ç¥ž")])])]), p("li", [p("div", {
					staticClass: "app-service-item"
				}, [p("h3", {
					staticClass: "app-service-tit"
				}, [e._v("æ¸¸æˆç¤¾äº¤")]), p("p", {
					staticClass: "app-service-des"
				}, [e._v("æ¬¢ä¹å…±äº«ï¼Œæ¸¸æˆä¸–ç•Œä¸å†å­¤å•")])])]), p("li", [p("div", {
					staticClass: "app-service-item"
				}, [p("h3", {
					staticClass: "app-service-tit"
				}, [e._v("æ¸¸æˆæ”»ç•¥")]), p("p", {
					staticClass: "app-service-des"
				}, [e._v("å¿ƒå¾—æŒ‡å¼•ï¼Œæ¸¸æˆä¹‹è·¯æ›´åŠ é¡ºç•…")])])])])])])
			}, function() {
				var e = this,
					a = e.$createElement;
				return (e._self._c || a)("div", {
					staticClass: "app-scene app-scene-4"
				}, [e._m(6)])
			}, function() {
				var e = this,
					a = e.$createElement,
					p = e._self._c || a;
				return p("div", {
					staticClass: "tui-fr-container"
				}, [p("div", {
					staticClass: "app-scene-main app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("h2", {
					staticClass: "app-scene-tit"
				}, [p("span", {
					staticClass: "app-scene-tit-main"
				}, [e._v("æ›´è´´å¿ƒçš„å¼€å‘è€…æœåŠ¡")])]), p("p", {
					staticClass: "app-scene-des"
				}, [e._v("æˆ‘ä»¬è‡´åŠ›äºŽæä¾›å…¨æ–¹ä½çš„è¿è¥æœåŠ¡ä¸Žå¼ºå¤§çš„æŠ€æœ¯æ”¯æŒï¼Œæž„ç­‘çŽ©å®¶ä¸Žå¼€å‘è€…äº¤æµçš„æ¡¥æ¢ã€‚")]), p("p", {
					staticClass: "app-scene-btngroup"
				}, [p("a", {
					staticClass: "app-btn-more",
					attrs: {
						href: "https://wings.wegame.com/wings/index.html",
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}, [e._v("äº†è§£è¯¦æƒ…")])])]), p("div", {
					staticClass: "app-dev app-animate",
					attrs: {
						"data-animate": "true"
					}
				}, [p("div", {
					staticClass: "app-dev-bg"
				}), p("div", {
					staticClass: "app-dev-role app-dev-wegame"
				}), p("div", {
					staticClass: "app-dev-role app-dev-user"
				}), p("div", {
					staticClass: "app-dev-role app-dev-developer"
				})])])
			}, function() {
				var e = this,
					a = e.$createElement;
				return (e._self._c || a)("div", {
					staticClass: "app-scene app-scene-5"
				}, [e._m(8)])
			}],
			n = {
				render: t,
				staticRenderFns: i
			};
		a.a = n
	}
});