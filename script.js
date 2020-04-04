/*
 *  yahiarefaiea-official-website-beta 1.0.0
 *  
 *  I’m a 22 years old handsome guy who grows up in a small town in Syria.
 *  http://beta.yahiarefaiea.com/
 *  hello@yahiarefaiea.com
 *  
 *  Last update on: 2019/8/17
 *  ©2019 Yahia Refaiea. all rights reserved.
 */

function inputTest(e) {
    var t = $(e).closest(".field"),
        n = $(e).closest("form, .form"),
        i = $.trim($(e).val()).length;
    i > 0 ? t.addClass("filled") : t.removeClass("filled"), i >= 4 ? (t.addClass("validated"), n.addClass("validated")) : (t.removeClass("validated"), n.removeClass("validated"))
}

function getPixel(e, t, n) {
    var i = 4 * (t + e.width * n),
        o = e.data;
    return {
        r: o[i],
        g: o[i + 1],
        b: o[i + 2],
        a: o[i + 3]
    }
}

function notFound() {
    setTimeout(function () {
        Timer.run(".template[data-template=notFound] time", function () {
            Router.route("#")
        }, 5)
    }, 1.25 * Identity.duration)
}

function notFoundCallback() {
    Timer.reset()
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return oe.each(e.match(xe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        G.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
    }

    function s() {
        this.expando = oe.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(ke, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                Te.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return oe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            u = (oe.cssNumber[t] || "px" !== c && +l) && De.exec(oe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, oe.style(e, t, u + c)
            } while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function u(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }

    function f(e, t, n, i, o) {
        for (var r, a, s, l, c, f, p = t.createDocumentFragment(), h = [], m = 0, g = e.length; m < g; m++)
            if ((r = e[m]) || 0 === r)
                if ("object" === oe.type(r)) oe.merge(h, r.nodeType ? [r] : r);
                else if (Re.test(r)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (Be.exec(r) || ["", ""])[1].toLowerCase(), l = Le[s] || Le._default, a.innerHTML = l[1] + oe.htmlPrefilter(r) + l[2], f = l[0]; f--;) a = a.lastChild;
            oe.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(r));
        for (p.textContent = "", m = 0; r = h[m++];)
            if (i && oe.inArray(r, i) > -1) o && o.push(r);
            else if (c = oe.contains(r.ownerDocument, r), a = u(p.appendChild(r), "script"), c && d(a), n)
            for (f = 0; r = a[f++];) je.test(r.type || "") && n.push(r);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function g(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) g(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = h;
        else if (!o) return e;
        return 1 === r && (a = o, o = function (e) {
            return oe().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, o, i, n)
        })
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (r = Ce.access(e), a = Ce.set(t, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) oe.event.add(t, o, c[o][n])
            }
            Te.hasData(e) && (s = Te.access(e), l = oe.extend({}, s), Te.set(t, l))
        }
    }

    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function S(e, t, n, i) {
        t = J.apply([], t);
        var o, r, a, s, l, c, d = 0,
            p = e.length,
            h = p - 1,
            m = t[0],
            g = oe.isFunction(m);
        if (g || p > 1 && "string" == typeof m && !ie.checkClone && We.test(m)) return e.each(function (o) {
            var r = e.eq(o);
            g && (t[0] = m.call(this, o, r.html())), S(r, t, n, i)
        });
        if (p && (o = f(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (a = oe.map(u(o, "script"), y), s = a.length; d < p; d++) l = o, d !== h && (l = oe.clone(l, !0, !0), s && oe.merge(a, u(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (c = a[a.length - 1].ownerDocument, oe.map(a, x), d = 0; d < s; d++) l = a[d], je.test(l.type || "") && !Ce.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace($e, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var i, o = t ? oe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || oe.cleanData(u(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function T(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function _(e) {
        var t = G,
            n = Xe[e];
        return n || (n = T(e, t), "none" !== n && n || (ze = (ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = T(e, t), ze.detach()), Xe[e] = n), n
    }

    function k(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || Ve(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), n && !ie.pixelMarginRight() && Ue.test(a) && Ye.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), void 0 !== a ? a + "" : a
    }

    function E(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in tt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
            if ((e = et[n] + t) in tt) return e
    }

    function I(e, t, n) {
        var i = De.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function M(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += oe.css(e, n + Ie[r], !0, o)), i ? ("content" === n && (a -= oe.css(e, "padding" + Ie[r], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + Ie[r] + "Width", !0, o))) : (a += oe.css(e, "padding" + Ie[r], !0, o), "padding" !== n && (a += oe.css(e, "border" + Ie[r] + "Width", !0, o)));
        return a
    }

    function A(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Ve(e),
            a = "border-box" === oe.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = k(e, t, r), (o < 0 || null == o) && (o = e.style[t]), Ue.test(o)) return o;
            i = a && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + M(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function B(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (r[a] = Ce.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Me(i) && (r[a] = Ce.access(i, "olddisplay", _(i.nodeName)))) : (o = Me(i), "none" === n && o || Ce.set(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function j(e, t, n, i, o) {
        return new j.prototype.init(e, t, n, i, o)
    }

    function L() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = oe.now()
    }

    function R(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ie[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function O(e, t, n) {
        for (var i, o = (P.tweeners[t] || []).concat(P.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function N(e, t, n) {
        var i, o, r, a, s, l, c, u = this,
            d = {},
            f = e.style,
            p = e.nodeType && Me(e),
            h = Ce.get(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), "inline" === ("none" === c ? Ce.get(e, "olddisplay") || _(e.nodeName) : c) && "none" === oe.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], ot.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[i]) continue;
                    p = !0
                }
                d[i] = h && h[i] || oe.style(e, i)
            } else c = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === c ? _(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = Ce.access(e, "fxshow", {}), r && (h.hidden = !p), p ? oe(e).show() : u.done(function () {
                oe(e).hide()
            }), u.done(function () {
                var t;
                Ce.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (i in d) a = O(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = oe.cssHooks[i]) && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function P(e, t, n) {
        var i, o, r = 0,
            a = P.prefilters.length,
            s = oe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = nt || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || L(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (H(u, c.opts.specialEasing); r < a; r++)
            if (i = P.prefilters[r].call(c, e, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(u, O, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(xe) || [];
            if (oe.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, oe.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = e === Tt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function $(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function z(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function X(e, t, n, i) {
        var o, r, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Y(e, t, n, i) {
        var o;
        if (oe.isArray(t)) oe.each(t, function (t, o) {
            n || Dt.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (o in t) Y(e + "[" + o + "]", t[o], n, i)
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = [],
        G = e.document,
        Q = V.slice,
        J = V.concat,
        K = V.push,
        Z = V.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        oe = function (e, t) {
            return new oe.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: "2.2.4",
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return oe.each(this, e)
        },
        map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (c && i && (oe.isPlainObject(i) || (o = oe.isArray(i))) ? (o ? (o = !1, r = n && oe.isArray(n) ? n : []) : r = n && oe.isPlainObject(n) ? n : {}, a[t] = oe.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }, oe.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function (e, t, i) {
            var o, r, a = 0,
                s = [];
            if (n(e))
                for (o = e.length; a < o; a++) null != (r = t(e[a], a, i)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return i = Q.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || oe.guid++, o
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = V[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, i) {
            var o, r, a, s, c, d, f, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : H) !== M && I(t), t = t || M, B)) {
                if (11 !== m && (d = me.exec(e)))
                    if (o = d[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (d[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                    } if (x.qsa && !$[e + " "] && (!j || !j.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = N), f = C(e), r = f.length, c = ue.test(s) ? "#" + s : "[id='" + s + "']"; r--;) f[r] = c + " " + u(f[r]);
                        p = f.join(","), h = ge.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === N && t.removeAttribute("id")
                    }
                }
            }
            return _(e.replace(re, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[N] = !0, e
        }

        function o(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = q++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, a) {
                var s, l, c, u = [P, r];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (c = t[N] || (t[N] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === P && s[1] === r) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function h(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
            return a
        }

        function m(e, t, n, o, r, a) {
            return o && !o[N] && (o = m(o)), r && !r[N] && (r = m(r, a)), i(function (i, a, s, l) {
                var c, u, d, f = [],
                    m = [],
                    g = a.length,
                    v = i || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : h(v, f, e, s, l),
                    x = n ? r || (i ? e : g || o) ? [] : a : y;
                if (n && n(y, x, s, l), o)
                    for (c = h(x, m), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[m[u]] = !(y[m[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = x.length; u--;)(d = x[u]) && c.push(y[u] = d);
                            r(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(d = x[u]) && (c = r ? K(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else x = h(x === a ? x.splice(g, x.length) : x), r ? r(null, a, x, l) : Q.apply(a, x)
            })
        }

        function g(e) {
            for (var t, n, i, o = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = d(function (e) {
                    return e === t
                }, a, !0), c = d(function (e) {
                    return K(t, e) > -1
                }, a, !0), p = [function (e, n, i) {
                    var o = !r && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; s < o; s++)
                if (n = w.relative[e[s].type]) p = [d(f(p), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[N]) {
                        for (i = ++s; i < o && !w.relative[e[i].type]; i++);
                        return m(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), n, s < i && g(e.slice(s, i)), i < o && g(e = e.slice(i)), i < o && u(e))
                    }
                    p.push(n)
                } return f(p)
        }

        function v(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                a = function (i, a, s, l, c) {
                    var u, d, f, p = 0,
                        m = "0",
                        g = i && [],
                        v = [],
                        y = k,
                        x = i || r && w.find.TAG("*", c),
                        b = P += null == y ? 1 : Math.random() || .1,
                        S = x.length;
                    for (c && (k = a === M || a || c); m !== S && null != (u = x[m]); m++) {
                        if (r && u) {
                            for (d = 0, a || u.ownerDocument === M || (I(u), s = !B); f = e[d++];)
                                if (f(u, a || M, s)) {
                                    l.push(u);
                                    break
                                } c && (P = b)
                        }
                        o && ((u = !f && u) && p--, i && g.push(u))
                    }
                    if (p += m, o && m !== p) {
                        for (d = 0; f = n[d++];) f(g, v, a, s);
                        if (i) {
                            if (p > 0)
                                for (; m--;) g[m] || v[m] || (v[m] = V.call(l));
                            v = h(v)
                        }
                        Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (P = b, k = y), g
                };
            return o ? i(a) : a
        }
        var y, x, w, b, S, C, T, _, k, E, D, I, M, A, B, j, L, R, O, N = "sizzle" + 1 * new Date,
            H = e.document,
            P = 0,
            q = 0,
            W = n(),
            F = n(),
            $ = n(),
            z = function (e, t) {
                return e === t && (D = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            U = [],
            V = U.pop,
            G = U.push,
            Q = U.push,
            J = U.slice,
            K = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            xe = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = function () {
                I()
            };
        try {
            Q.apply(U = J.call(H.childNodes), H.childNodes), U[H.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: U.length ? function (e, t) {
                    G.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, I = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, A = M.documentElement, B = !S(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function (e) {
                return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(M.getElementsByClassName), x.getById = o(function (e) {
                return A.appendChild(e).id = N, !M.getElementsByName || !M.getElementsByName(N).length
            }), x.getById ? (w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && B) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(ye, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var t = e.replace(ye, xe);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && B) return t.getElementsByClassName(e)
            }, L = [], j = [], (x.qsa = he.test(M.querySelectorAll)) && (o(function (e) {
                A.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + N + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || j.push(".#.+[+~]")
            }), o(function (e) {
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (x.matchesSelector = he.test(R = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function (e) {
                x.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), L.push("!=", ie)
            }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), t = he.test(A.compareDocumentPosition), O = t || he.test(A.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function (e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === H && O(H, e) ? -1 : t === M || t.ownerDocument === H && O(H, t) ? 1 : E ? K(E, e) - K(E, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !r) return e === M ? -1 : t === M ? 1 : o ? -1 : r ? 1 : E ? K(E, e) - K(E, t) : 0;
                if (o === r) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
            }, M) : M
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== M && I(e), n = n.replace(le, "='$1']"), x.matchesSelector && B && !$[n + " "] && (!L || !L.test(n)) && (!j || !j.test(n))) try {
                var i = R.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== M && I(e), O(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== M && I(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !B) : void 0;
            return void 0 !== i ? i : x.attributes || !B ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (D = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(z), D) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, b = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += b(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            x = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (f = g, d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++x && f === t) {
                                        u[e] = [P, p, x];
                                        break
                                    }
                            } else if (y && (f = t, d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p), !1 === x)
                                for (;
                                    (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && (d = f[N] || (f[N] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [P, x]), f !== t)););
                            return (x -= o) === i || x % i == 0 && x / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[N] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), a = o.length; a--;) i = K(e, o[a]), e[i] = !(t[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = T(e.replace(re, "$1"));
                    return o[N] ? i(function (e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(ye, xe),
                        function (t) {
                            return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = B ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === A
                },
                focus: function (e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !w.pseudos.empty(e)
                },
                header: function (e) {
                    return pe.test(e.nodeName)
                },
                input: function (e) {
                    return fe.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function () {
                    return [0]
                }),
                last: s(function (e, t) {
                    return [t - 1]
                }),
                eq: s(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: s(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: s(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) w.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, C = t.tokenize = function (e, n) {
            var i, o, r, a, s, l, c, u = F[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, " ")
                }), s = s.slice(i.length));
                for (a in w.filter) !(o = de[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : F(e, l).slice(0)
        }, T = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = $[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = g(t[n]), r[N] ? i.push(r) : o.push(r);
                r = $(e, v(o, i)), r.selector = e
            }
            return r
        }, _ = t.select = function (e, t, n, i) {
            var o, r, a, s, c, d = "function" == typeof e && e,
                f = !i && C(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && B && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
                    if ((c = w.find[s]) && (i = c(a.matches[0].replace(ye, xe), ge.test(r[0].type) && l(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && u(r))) return Q.apply(n, i), n;
                        break
                    }
            }
            return (d || T(e, f))(i, t, !B, n, !t || ge.test(e) && l(t.parentNode) || t), n
        }, x.sortStable = N.split("").sort(z).join("") === N, x.detectDuplicates = !!D, I(), x.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var ue = function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && oe(e).is(n)) break;
                    i.push(e)
                } return i
        },
        de = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        fe = oe.expr.match.needsContext,
        pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (oe.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) oe.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), pe.test(i[1]) && oe.isPlainObject(t))
                    for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return o = G.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    }).prototype = oe.fn, me = oe(G);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], a = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? oe.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ue(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ue(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return ue(e, "nextSibling")
        },
        prevAll: function (e) {
            return ue(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ue(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ue(e, "previousSibling", n)
        },
        siblings: function (e) {
            return de((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return de(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, i) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || oe.uniqueSort(o), ve.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var xe = /\S+/g;
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? r(e) : oe.extend({}, e);
        var t, n, i, o, a = [],
            s = [],
            l = -1,
            c = function () {
                for (o = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
            },
            u = {
                add: function () {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        oe.each(n, function (n, i) {
                            oe.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return oe.each(arguments, function (e, t) {
                        for (var n;
                            (n = oe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = s = [], a = n = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = s = [], n || (a = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, r) {
                                var a = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, oe.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                r = Q.call(arguments),
                a = r.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : oe.Deferred(),
                c = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    });
    var we;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || (we.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function (t) {
        return we || (we = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), we.promise(t)
    }, oe.ready.promise();
    var be = function (e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (s in n) be(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(oe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Se = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!Se(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (o = oe.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(xe) || [])), n = i.length;
                    for (; n--;) delete r[i[n]]
                }(void 0 === t || oe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ce = new s,
        Te = new s,
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Te.hasData(e) || Ce.hasData(e)
        },
        data: function (e, t, n) {
            return Te.access(e, t, n)
        },
        removeData: function (e, t) {
            Te.remove(e, t)
        },
        _data: function (e, t, n) {
            return Ce.access(e, t, n)
        },
        _removeData: function (e, t) {
            Ce.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Te.get(r), 1 === r.nodeType && !Ce.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    Ce.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                Te.set(this, e)
            }) : be(this, function (t) {
                var n, i;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Te.get(r, e) || Te.get(r, e.replace(ke, "-$&").toLowerCase()))) return n;
                    if (i = oe.camelCase(e), void 0 !== (n = Te.get(r, i))) return n;
                    if (void 0 !== (n = l(r, i, void 0))) return n
                } else i = oe.camelCase(e), this.each(function () {
                    var n = Te.get(this, i);
                    Te.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Te.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ce.get(e, t), n && (!i || oe.isArray(n) ? i = Ce.access(e, t, oe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = oe._queueHooks(e, t),
                a = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    Ce.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = oe.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ce.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        Ie = ["Top", "Right", "Bottom", "Left"],
        Me = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ae = /^(?:checkbox|radio)$/i,
        Be = /<([\w:-]+)/,
        je = /^$|\/(?:java|ecma)script/i,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td;
    var Re = /<|&#?\w+;/;
    ! function () {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Oe = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        He = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, p, h, m, g = Ce.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(xe) || [""], c = t.length; c--;) s = He.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = oe.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = oe.event.special[p] || {}, u = oe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), oe.event.global[p] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, p, h, m, g = Ce.hasData(e) && Ce.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(xe) || [""], c = t.length; c--;)
                    if (s = He.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || oe.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) oe.event.remove(e, p + t[c], n, i, !0);
                oe.isEmptyObject(l) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, a = [],
                s = Q.call(arguments),
                l = (Ce.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = oe.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? oe(o, this).index(l) > -1 : oe.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ne.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== m() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === m() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
        if (!(this instanceof oe.Event)) return new oe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), this[oe.expando] = !0
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || oe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, i) {
            return g(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return g(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^true\/(.*)/,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Pe, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, a, s = e.cloneNode(!0),
                l = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = u(s), r = u(e), i = 0, o = r.length; i < o; i++) b(r[i], a[i]);
            if (t)
                if (n)
                    for (r = r || u(e), a = a || u(s), i = 0, o = r.length; i < o; i++) w(r[i], a[i]);
                else w(e, s);
            return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, i, o = oe.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Se(n)) {
                    if (t = n[Ce.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[Ce.expando] = void 0
                    }
                    n[Te.expando] && (n[Te.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: S,
        detach: function (e) {
            return C(this, e, !0)
        },
        remove: function (e) {
            return C(this, e)
        },
        text: function (e) {
            return be(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return be(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !Le[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return S(this, arguments, function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, i = [], o = oe(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), oe(o[a])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ze, Xe = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Ue = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        Ve = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ge = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        },
        Qe = G.documentElement;
    ! function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(a)
        }
        var n, i, o, r, a = G.createElement("div"),
            s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(ie, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            pixelMarginRight: function () {
                return null == i && t(), o
            },
            reliableMarginLeft: function () {
                return null == i && t(), r
            },
            reliableMarginRight: function () {
                var t, n = s.appendChild(G.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Qe.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Qe.removeChild(a), s.removeChild(n), t
            }
        }))
    }();
    var Je = /^(none|table(?!-c[ea]).+)/,
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        et = ["Webkit", "O", "Moz", "ms"],
        tt = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                r = typeof n, "string" === r && (o = De.exec(n)) && o[1] && (n = c(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (oe.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = D(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = k(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return Je.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, Ke, function () {
                    return A(e, t, i)
                }) : A(e, t, i)
            },
            set: function (e, n, i) {
                var o, r = i && Ve(e),
                    a = i && M(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, r), r);
                return a && (o = De.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), I(e, n, a)
            }
        }
    }), oe.cssHooks.marginLeft = E(ie.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), oe.cssHooks.marginRight = E(ie.reliableMarginRight, function (e, t) {
        if (t) return Ge(e, {
            display: "inline-block"
        }, k, [e, "marginRight"])
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Ie[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = I)
    }), oe.fn.extend({
        css: function (e, t) {
            return be(this, function (e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (i = Ve(e), o = t.length; a < o; a++) r[t[a]] = oe.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return B(this, !0)
        },
        hide: function () {
            return B(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Me(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = j, j.prototype = {
        constructor: j,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = j.prototype.init, oe.fx.step = {};
    var nt, it, ot = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;
    oe.Animation = oe.extend(P, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, De.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t)
            },
            prefilters: [N],
            prefilter: function (e, t) {
                t ? P.prefilters.unshift(e) : P.prefilters.push(e)
            }
        }), oe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Me).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var o = oe.isEmptyObject(e),
                    r = oe.speed(t, n, i),
                    a = function () {
                        var t = P(this, oe.extend({}, e), r);
                        (o || Ce.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = oe.timers,
                        a = Ce.get(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && rt.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || oe.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Ce.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = oe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o)
            }
        }), oe.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            oe.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var e, t = 0,
                n = oe.timers;
            for (nt = oe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), nt = void 0
        }, oe.fx.timer = function (e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            it || (it = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            e.clearInterval(it), it = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function (t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(o)
                }
            })
        },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var at, st = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return be(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), o = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(xe);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), at = {
        set: function (e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = st[t] || oe.find.attr;
        st[t] = function (e, t, i) {
            var o, r;
            return i || (r = st[t], st[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, st[t] = r), o
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return be(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var ut = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(ut, " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = oe.trim(i), o !== s && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(ut, " ")) {
                        for (a = 0; r = t[a++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        s = oe.trim(i), o !== s && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, q(this), t), t)
            }) : this.each(function () {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = oe(this), r = e.match(xe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = q(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + q(n) + " ").replace(ut, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var dt = /\r/g,
        ft = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = oe.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ft, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = oe.inArray(oe.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, ie.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, i, o) {
            var r, a, s, l, c, u, d, f = [i || G],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !pt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !oe.isWindow(i)) {
                    for (l = d.delegateType || p, pt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (i.ownerDocument || G) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || p, u = (Ce.get(a, "events") || {})[t.type] && Ce.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Se(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Se(i) || c && oe.isFunction(i[p]) && !oe.isWindow(i) && (s = i[c], s && (i[c] = null), oe.event.triggered = p, i[p](), oe.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t)
        }
    }), oe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = Ce.access(i, t);
                o || i.addEventListener(e, n, !0), Ce.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = Ce.access(i, t) - 1;
                o ? Ce.access(i, t, o) : (i.removeEventListener(e, n, !0), Ce.remove(i, t))
            }
        }
    });
    var ht = e.location,
        mt = oe.now(),
        gt = /\?/;
    oe.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var vt = /#.*$/,
        yt = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        bt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Ct = {},
        Tt = {},
        _t = "*/".concat("*"),
        kt = G.createElement("a");
    kt.href = ht.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht.href,
            type: "GET",
            isLocal: wt.test(ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? $($(e, oe.ajaxSettings), t) : $(oe.ajaxSettings, e)
        },
        ajaxPrefilter: W(Ct),
        ajaxTransport: W(Tt),
        ajax: function (t, n) {
            function i(t, n, i, s) {
                var c, d, y, x, b, C = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, a = s || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = z(f, S, i)), x = X(f, x, S, c), c ? (f.ifModified && (b = S.getResponseHeader("Last-Modified"), b && (oe.lastModified[r] = b), (b = S.getResponseHeader("etag")) && (oe.etag[r] = b)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, y = x.error, c = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", c ? m.resolveWith(p, [d, C, S]) : m.rejectWith(p, [S, C, y]), S.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? d : y]), g.fireWith(p, [S, C]), u && (h.trigger("ajaxComplete", [S, f]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, a, s, l, c, u, d, f = oe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                m = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                x = {},
                w = 0,
                b = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; t = xt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else S.always(e[S.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (m.promise(S).complete = g.add, S.success = S.done, S.error = S.fail, f.url = ((t || f.url || ht.href) + "").replace(vt, "").replace(St, ht.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(xe) || [""], null == f.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = kt.protocol + "//" + kt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional)), F(Ct, f, n, S), 2 === w) return S;
            u = oe.event && f.global, u && 0 == oe.active++ && oe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !bt.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (gt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = yt.test(r) ? r.replace(yt, "$1_=" + mt++) : r + (gt.test(r) ? "&" : "?") + "_=" + mt++)), f.ifModified && (oe.lastModified[r] && S.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && S.setRequestHeader("If-None-Match", oe.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) S.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, S, f) || 2 === w)) return S.abort();
            b = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[d](f[d]);
            if (o = F(Tt, f, n, S)) {
                if (S.readyState = 1, u && h.trigger("ajaxSend", [S, f]), 2 === w) return S;
                f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                    S.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, o.send(y, i)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Et = /%20/g,
        Dt = /\[\]$/,
        It = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) Y(n, e[n], t, o);
        return i.join("&").replace(Et, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && At.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ae.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        jt = oe.ajaxSettings.xhr();
    ie.cors = !!jt && "withCredentials" in jt, ie.ajax = jt = !!jt, oe.ajaxTransport(function (t) {
        var n, i;
        if (ie.cors || jt && !t.crossDomain) return {
            send: function (o, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Lt = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Lt.pop() || oe.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, a, s = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Rt, "$1" + o) : !1 !== t.jsonp && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return a || oe.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === r ? oe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)), a && oe.isFunction(r) && r(a[0]), a = r = void 0
        }), "script"
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = pe.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = f([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var Ot = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, c, u = oe.css(e, "position"),
                d = oe(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            if (r) return t = r.documentElement, oe.contains(t, i) ? (o = i.getBoundingClientRect(), n = U(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (i) {
            return be(this, function (e, i, o) {
                var r = U(e);
                if (void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = E(ie.pixelPosition, function (e, n) {
            if (n) return n = k(e, t), Ue.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            oe.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return be(this, function (t, n, i) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var Nt = e.jQuery,
        Ht = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = Ht), t && e.jQuery === oe && (e.jQuery = Nt), oe
    }, t || (e.jQuery = e.$ = oe), oe
}),
function (e) {
    var t = new Array,
        n = new Array,
        i = function () {},
        o = 0,
        r = {
            splashVPos: "35%",
            loaderVPos: "75%",
            splashID: "#jpreContent",
            showSplash: !0,
            showPercentage: !0,
            autoClose: !0,
            closeBtnText: "Start!",
            onetimeLoad: !1,
            debugMode: !1,
            splashFunction: function () {}
        },
        a = function () {
            if (r.onetimeLoad) {
                for (var e, t = document.cookie.split("; "), n = 0; e = t[n] && t[n].split("="); n++)
                    if ("jpreLoader" === e.shift()) return e.join("=");
                return !1
            }
            return !1
        },
        s = function (e) {
            if (r.onetimeLoad) {
                var t = new Date;
                t.setDate(t.getDate() + e);
                var n = null == e ? "" : "expires=" + t.toUTCString();
                document.cookie = "jpreLoader=loaded; " + n
            }
        },
        l = function () {
            if (jOverlay = e("<div></div>").attr("id", "jpreOverlay").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 9999999
                }).appendTo("body"), r.showSplash) {
                jContent = e("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                var t = e(window).width() - e(jContent).width();
                e(jContent).css({
                    position: "absolute",
                    top: r.splashVPos,
                    left: Math.round(50 / e(window).width() * t) + "%"
                }), e(jContent).html(e(r.splashID).wrap("<div/>").parent().html()), e(r.splashID).remove(), r.splashFunction()
            }
            jLoader = e("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
            var n = e(window).width() - e(jLoader).width();
            e(jLoader).css({
                position: "absolute",
                top: r.loaderVPos,
                left: Math.round(50 / e(window).width() * n) + "%"
            }), jBar = e("<div></div>").attr("id", "jpreBar").css({
                width: "0%",
                height: "100%"
            }).appendTo(jLoader), r.showPercentage && (jPer = e("<div></div>").attr("id", "jprePercentage").css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).html("Loading...")), r.autoclose || (jButton = e("<div></div>").attr("id", "jpreButton").on("click", function () {
                p()
            }).css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).text(r.closeBtnText).hide())
        },
        c = function (n) {
            e(n).find("*:not(script)").each(function () {
                var n = "";
                if (-1 == e(this).css("background-image").indexOf("none") && -1 == e(this).css("background-image").indexOf("-gradient")) {
                    if (n = e(this).css("background-image"), -1 != n.indexOf("url")) {
                        var i = n.match(/url\((.*?)\)/);
                        n = i[1].replace(/\"/g, "")
                    }
                } else "img" == e(this).get(0).nodeName.toLowerCase() && void 0 !== e(this).attr("src") && (n = e(this).attr("src"));
                n.length > 0 && t.push(n)
            })
        },
        u = function () {
            for (var e = 0; e < t.length; e++) d(t[e])
        },
        d = function (t) {
            var i = new Image;
            e(i).load(function () {
                f()
            }).error(function () {
                n.push(e(this).attr("src")), f()
            }).attr("src", t)
        },
        f = function () {
            o++;
            var n = Math.round(o / t.length * 100);
            if (e(jBar).stop().animate({
                    width: n + "%"
                }, 500, "linear"), r.showPercentage && e(jPer).text(n + "%"), o >= t.length) {
                if (o = t.length, s(), r.showPercentage && e(jPer).text("100%"), r.debugMode) {
                    h()
                }
                e(jBar).stop().animate({
                    width: "100%"
                }, 500, "linear", function () {
                    r.autoClose ? p() : e(jButton).fadeIn(1e3)
                })
            }
        },
        p = function () {
            e(jOverlay).fadeOut(800, function () {
                e(jOverlay).remove(), i()
            })
        },
        h = function () {
            if (n.length > 0) {
                var e = "ERROR - IMAGE FILES MISSING!!!\n\r";
                e += n.length + " image files cound not be found. \n\r", e += "Please check your image paths and filenames:\n\r";
                for (var t = 0; t < n.length; t++) e += "- " + n[t] + "\n\r";
                return !0
            }
            return !1
        };
    e.fn.jpreLoader = function (t, n) {
        return t && e.extend(r, t), "function" == typeof n && (i = n), e("body").css({
            display: "block"
        }), this.each(function () {
            a() ? (e(r.splashID).remove(), i()) : (l(), c(this), u())
        })
    }
}(jQuery),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var a = t || window.event,
            s = l.call(arguments, 1),
            c = 0,
            d = 0,
            f = 0,
            p = 0,
            h = 0,
            m = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * f, f = 0), c = 0 === f ? d : f, "deltaY" in a && (f = -1 * a.deltaY, c = f), "deltaX" in a && (d = a.deltaX, 0 === f && (c = -1 * d)), 0 !== f || 0 !== d) {
            if (1 === a.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                c *= g, f *= g, d *= g
            } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                c *= v, f *= v, d *= v
            }
            if (p = Math.max(Math.abs(f), Math.abs(d)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (c /= 40, d /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                h = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = d, t.deltaY = f, t.deltaFactor = r, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, s.unshift(t, c, d, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function (t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var a = t || window.event,
            s = l.call(arguments, 1),
            c = 0,
            d = 0,
            f = 0,
            p = 0,
            h = 0,
            m = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (f = -1 * a.detail), "wheelDelta" in a && (f = a.wheelDelta), "wheelDeltaY" in a && (f = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * f, f = 0), c = 0 === f ? d : f, "deltaY" in a && (f = -1 * a.deltaY, c = f), "deltaX" in a && (d = a.deltaX, 0 === f && (c = -1 * d)), 0 !== f || 0 !== d) {
            if (1 === a.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                c *= g, f *= g, d *= g
            } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                c *= v, f *= v, d *= v
            }
            if (p = Math.max(Math.abs(f), Math.abs(d)), (!r || r > p) && (r = p, i(a, p) && (r /= 40)), i(a, p) && (c /= 40, d /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                h = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = d, t.deltaY = f, t.deltaFactor = r, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, s.unshift(t, c, d, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var o, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = a.length; c;) e.event.fixHooks[a[--c]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function (t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function (e) {
    "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
    ! function (t) {
        var n = "function" == typeof define && define.amd,
            i = "undefined" != typeof module && module.exports,
            o = "https:" == document.location.protocol ? "https:" : "http:";
        n || (i ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + o + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
            function () {
                var t, n = "mCustomScrollbar",
                    i = "mCS",
                    o = ".mCustomScrollbar",
                    r = {
                        setTop: 0,
                        setLeft: 0,
                        axis: "y",
                        scrollbarPosition: "inside",
                        scrollInertia: 950,
                        autoDraggerLength: !0,
                        alwaysShowScrollbar: 0,
                        snapOffset: 0,
                        mouseWheel: {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            deltaFactor: "auto",
                            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                        },
                        scrollButtons: {
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        keyboard: {
                            enable: !0,
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        contentTouchScroll: 25,
                        documentTouchScroll: !0,
                        advanced: {
                            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                            updateOnContentResize: !0,
                            updateOnImageLoad: "auto",
                            autoUpdateTimeout: 60
                        },
                        theme: "light",
                        callbacks: {
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            alwaysTriggerOffsets: !0
                        }
                    },
                    a = 0,
                    s = {},
                    l = window.attachEvent && !window.addEventListener ? 1 : 0,
                    c = !1,
                    u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                    d = {
                        init: function (t) {
                            var t = e.extend(!0, {}, r, t),
                                n = f.call(this);
                            if (t.live) {
                                var l = t.liveSelector || this.selector || o,
                                    c = e(l);
                                if ("off" === t.live) return void h(l);
                                s[l] = setTimeout(function () {
                                    c.mCustomScrollbar(t), "once" === t.live && c.length && h(l)
                                }, 500)
                            } else h(l);
                            return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                preventDefault: !1,
                                deltaFactor: "auto",
                                normalizeDelta: !1,
                                invert: !1
                            }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), p(t), e(n).each(function () {
                                var n = e(this);
                                if (!n.data(i)) {
                                    n.data(i, {
                                        idx: ++a,
                                        opt: t,
                                        scrollRatio: {
                                            y: null,
                                            x: null
                                        },
                                        overflowed: null,
                                        contentReset: {
                                            y: null,
                                            x: null
                                        },
                                        bindEvents: !1,
                                        tweenRunning: !1,
                                        sequential: {},
                                        langDir: n.css("direction"),
                                        cbOffsets: null,
                                        trigger: null,
                                        poll: {
                                            size: {
                                                o: 0,
                                                n: 0
                                            },
                                            img: {
                                                o: 0,
                                                n: 0
                                            },
                                            change: {
                                                o: 0,
                                                n: 0
                                            }
                                        }
                                    });
                                    var o = n.data(i),
                                        r = o.opt,
                                        s = n.data("mcs-axis"),
                                        l = n.data("mcs-scrollbar-position"),
                                        c = n.data("mcs-theme");
                                    s && (r.axis = s), l && (r.scrollbarPosition = l), c && (r.theme = c, p(r)), v.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), e("#mCSB_" + o.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), d.update.call(null, n)
                                }
                            })
                        },
                        update: function (t, n) {
                            var o = t || f.call(this);
                            return e(o).each(function () {
                                var t = e(this);
                                if (t.data(i)) {
                                    var o = t.data(i),
                                        r = o.opt,
                                        a = e("#mCSB_" + o.idx + "_container"),
                                        s = e("#mCSB_" + o.idx),
                                        l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                                    if (!a.length) return;
                                    o.tweenRunning && U(t), n && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(u[3]) && t.removeClass(u[3]), t.hasClass(u[4]) && t.removeClass(u[4]), s.css("max-height", "none"), s.height() !== t.height() && s.css("max-height", t.height()), x.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || a.css("width", y(a)), o.overflowed = T.call(this), D.call(this), r.autoDraggerLength && b.call(this), S.call(this), k.call(this);
                                    var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                                    "x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? _.call(this) : (V(t, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), o.contentReset.y = null) : (_.call(this), "y" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[1] && V(t, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? _.call(this) : (V(t, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }), o.contentReset.x = null) : (_.call(this), "x" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[0] && V(t, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), n && o && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), X.call(this)
                                }
                            })
                        },
                        scrollTo: function (t, n) {
                            if (void 0 !== t && null != t) {
                                var o = f.call(this);
                                return e(o).each(function () {
                                    var o = e(this);
                                    if (o.data(i)) {
                                        var r = o.data(i),
                                            a = r.opt,
                                            s = {
                                                trigger: "external",
                                                scrollInertia: a.scrollInertia,
                                                scrollEasing: "mcsEaseInOut",
                                                moveDragger: !1,
                                                timeout: 60,
                                                callbacks: !0,
                                                onStart: !0,
                                                onUpdate: !0,
                                                onComplete: !0
                                            },
                                            l = e.extend(!0, {}, s, n),
                                            c = $.call(this, t),
                                            u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                        c[0] = z.call(this, c[0], "y"), c[1] = z.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = ie() ? 0 : u, setTimeout(function () {
                                            null !== c[0] && void 0 !== c[0] && "x" !== a.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", V(o, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== a.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", V(o, c[1].toString(), l))
                                        }, l.timeout)
                                    }
                                })
                            }
                        },
                        stop: function () {
                            var t = f.call(this);
                            return e(t).each(function () {
                                var t = e(this);
                                t.data(i) && U(t)
                            })
                        },
                        disable: function (t) {
                            var n = f.call(this);
                            return e(n).each(function () {
                                var n = e(this);
                                n.data(i) && (n.data(i), X.call(this, "remove"), E.call(this), t && _.call(this), D.call(this, !0), n.addClass(u[3]))
                            })
                        },
                        destroy: function () {
                            var t = f.call(this);
                            return e(t).each(function () {
                                var o = e(this);
                                if (o.data(i)) {
                                    var r = o.data(i),
                                        a = r.opt,
                                        s = e("#mCSB_" + r.idx),
                                        l = e("#mCSB_" + r.idx + "_container"),
                                        c = e(".mCSB_" + r.idx + "_scrollbar");
                                    a.live && h(a.liveSelector || e(t).selector), X.call(this, "remove"), E.call(this), _.call(this), o.removeData(i), K(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), s.replaceWith(l.contents()), o.removeClass(n + " _" + i + "_" + r.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                                }
                            })
                        }
                    },
                    f = function () {
                        return "object" != typeof e(this) || e(this).length < 1 ? o : this
                    },
                    p = function (t) {
                        var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                            i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                            o = ["minimal", "minimal-dark"],
                            r = ["minimal", "minimal-dark"],
                            a = ["minimal", "minimal-dark"];
                        t.autoDraggerLength = !(e.inArray(t.theme, n) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, i) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, o) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, r) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, a) > -1 ? "outside" : t.scrollbarPosition
                    },
                    h = function (e) {
                        s[e] && (clearTimeout(s[e]), K(s, e))
                    },
                    m = function (e) {
                        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
                    },
                    g = function (e) {
                        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
                    },
                    v = function () {
                        var t = e(this),
                            o = t.data(i),
                            r = o.opt,
                            a = r.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                            s = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                            l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                            c = "yx" === r.axis ? s[0] + s[1] : "x" === r.axis ? s[1] : s[0],
                            d = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                            f = r.autoHideScrollbar ? " " + u[6] : "",
                            p = "x" !== r.axis && "rtl" === o.langDir ? " " + u[7] : "";
                        r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, t.addClass(n + " _" + i + "_" + o.idx + f + p).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + o.langDir + "' /></div>");
                        var h = e("#mCSB_" + o.idx),
                            m = e("#mCSB_" + o.idx + "_container");
                        "y" === r.axis || r.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), h.addClass("mCSB_outside").after(c)) : (h.addClass("mCSB_inside").append(c), m.wrap(d)), w.call(this);
                        var g = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                    },
                    y = function (t) {
                        var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
                                return e(this).outerWidth(!0)
                            }).get())],
                            i = t.parent().width();
                        return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
                    },
                    x = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = e("#mCSB_" + n.idx + "_container");
                        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                            r.css({
                                width: "auto",
                                "min-width": 0,
                                "overflow-x": "scroll"
                            });
                            var a = Math.ceil(r[0].scrollWidth);
                            3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && a > r.parent().width() ? r.css({
                                width: a,
                                "min-width": "100%",
                                "overflow-x": "inherit"
                            }) : r.css({
                                "overflow-x": "inherit",
                                position: "absolute"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                                "min-width": "100%",
                                position: "relative"
                            }).unwrap()
                        }
                    },
                    w = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = e(".mCSB_" + n.idx + "_scrollbar:first"),
                            a = te(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                            s = ["<a href='#' class='" + u[13] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + u[14] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + u[15] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + u[16] + "' oncontextmenu='return false;' " + a + " />"],
                            l = ["x" === o.axis ? s[2] : s[0], "x" === o.axis ? s[3] : s[1], s[2], s[3]];
                        o.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                    },
                    b = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = e("#mCSB_" + n.idx),
                            r = e("#mCSB_" + n.idx + "_container"),
                            a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                            s = [o.height() / r.outerHeight(!1), o.width() / r.outerWidth(!1)],
                            c = [parseInt(a[0].css("min-height")), Math.round(s[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(s[1] * a[1].parent().width())],
                            u = l && c[1] < c[0] ? c[0] : c[1],
                            d = l && c[3] < c[2] ? c[2] : c[3];
                        a[0].css({
                            height: u,
                            "max-height": a[0].parent().height() - 10
                        }).find(".mCSB_dragger_bar").css({
                            "line-height": c[0] + "px"
                        }), a[1].css({
                            width: d,
                            "max-width": a[1].parent().width() - 10
                        })
                    },
                    S = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = e("#mCSB_" + n.idx),
                            r = e("#mCSB_" + n.idx + "_container"),
                            a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                            s = [r.outerHeight(!1) - o.height(), r.outerWidth(!1) - o.width()],
                            l = [s[0] / (a[0].parent().height() - a[0].height()), s[1] / (a[1].parent().width() - a[1].width())];
                        n.scrollRatio = {
                            y: l[0],
                            x: l[1]
                        }
                    },
                    C = function (e, t, n) {
                        var i = n ? u[0] + "_expanded" : "",
                            o = e.closest(".mCSB_scrollTools");
                        "active" === t ? (e.toggleClass(u[0] + " " + i), o.toggleClass(u[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(u[0]), o.removeClass(u[1])) : (e.addClass(u[0]), o.addClass(u[1])))
                    },
                    T = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = e("#mCSB_" + n.idx),
                            r = e("#mCSB_" + n.idx + "_container"),
                            a = null == n.overflowed ? r.height() : r.outerHeight(!1),
                            s = null == n.overflowed ? r.width() : r.outerWidth(!1),
                            l = r[0].scrollHeight,
                            c = r[0].scrollWidth;
                        return l > a && (a = l), c > s && (s = c), [a > o.height(), s > o.width()]
                    },
                    _ = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = e("#mCSB_" + n.idx),
                            a = e("#mCSB_" + n.idx + "_container"),
                            s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (U(t), ("x" !== o.axis && !n.overflowed[0] || "y" === o.axis && n.overflowed[0]) && (s[0].add(a).css("top", 0), V(t, "_resetY")), "y" !== o.axis && !n.overflowed[1] || "x" === o.axis && n.overflowed[1]) {
                            var l = dx = 0;
                            "rtl" === n.langDir && (l = r.width() - a.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), a.css("left", l), s[1].css("left", dx), V(t, "_resetX")
                        }
                    },
                    k = function () {
                        function t() {
                            a = setTimeout(function () {
                                e.event.special.mousewheel ? (clearTimeout(a), j.call(n[0])) : t()
                            }, 100)
                        }
                        var n = e(this),
                            o = n.data(i),
                            r = o.opt;
                        if (!o.bindEvents) {
                            if (M.call(this), r.contentTouchScroll && A.call(this), B.call(this), r.mouseWheel.enable) {
                                var a;
                                t()
                            }
                            N.call(this), P.call(this), r.advanced.autoScrollOnFocus && H.call(this), r.scrollButtons.enable && q.call(this), r.keyboard.enable && W.call(this), o.bindEvents = !0
                        }
                    },
                    E = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = i + "_" + n.idx,
                            a = ".mCSB_" + n.idx + "_scrollbar",
                            s = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + a + " ." + u[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + a + ">a"),
                            l = e("#mCSB_" + n.idx + "_container");
                        o.advanced.releaseDraggableSelectors && s.add(e(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && s.add(e(o.advanced.extraDraggableSelectors)), n.bindEvents && (e(document).add(e(!R() || top.document)).unbind("." + r), s.each(function () {
                            e(this).unbind("." + r)
                        }), clearTimeout(t[0]._focusTimeout), K(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), K(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), K(l[0], "onCompleteTimeout"), n.bindEvents = !1)
                    },
                    D = function (t) {
                        var n = e(this),
                            o = n.data(i),
                            r = o.opt,
                            a = e("#mCSB_" + o.idx + "_container_wrapper"),
                            s = a.length ? a : e("#mCSB_" + o.idx + "_container"),
                            l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                            c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                        "x" !== r.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(u[8] + " " + u[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(u[10])) : (l[0].css("display", "none"), s.addClass(u[10])), s.addClass(u[8]))), "y" !== r.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(u[9] + " " + u[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(u[11])) : (l[1].css("display", "none"), s.addClass(u[11])), s.addClass(u[9]))), o.overflowed[0] || o.overflowed[1] ? n.removeClass(u[5]) : n.addClass(u[5])
                    },
                    I = function (t) {
                        var n = t.type,
                            i = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                            o = R() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                        switch (n) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return i ? [t.originalEvent.pageY - i[0] + o[0], t.originalEvent.pageX - i[1] + o[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                                    a = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                                return t.target.ownerDocument !== document ? [r.screenY, r.screenX, a > 1] : [r.pageY, r.pageX, a > 1];
                            default:
                                return i ? [t.pageY - i[0] + o[0], t.pageX - i[1] + o[1], !1] : [t.pageY, t.pageX, !1]
                        }
                    },
                    M = function () {
                        function t(e) {
                            var t = h.find("iframe");
                            if (t.length) {
                                var n = e ? "auto" : "none";
                                t.css("pointer-events", n)
                            }
                        }

                        function n(e, t, n, i) {
                            if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === p[1]) var r = "x",
                                a = (o[0].offsetLeft - t + i) * u.scrollRatio.x;
                            else var r = "y",
                                a = (o[0].offsetTop - e + n) * u.scrollRatio.y;
                            V(s, a.toString(), {
                                dir: r,
                                drag: !0
                            })
                        }
                        var o, r, a, s = e(this),
                            u = s.data(i),
                            d = u.opt,
                            f = i + "_" + u.idx,
                            p = ["mCSB_" + u.idx + "_dragger_vertical", "mCSB_" + u.idx + "_dragger_horizontal"],
                            h = e("#mCSB_" + u.idx + "_container"),
                            m = e("#" + p[0] + ",#" + p[1]),
                            g = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                            v = d.advanced.extraDraggableSelectors ? e(!R() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!R() || top.document);
                        m.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function (n) {
                            if (n.stopImmediatePropagation(), n.preventDefault(), Z(n)) {
                                c = !0, l && (document.onselectstart = function () {
                                    return !1
                                }), t(!1), U(s), o = e(this);
                                var i = o.offset(),
                                    u = I(n)[0] - i.top,
                                    f = I(n)[1] - i.left,
                                    p = o.height() + i.top,
                                    h = o.width() + i.left;
                                p > u && u > 0 && h > f && f > 0 && (r = u, a = f), C(o, "active", d.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + f, function (e) {
                            e.stopImmediatePropagation(), e.preventDefault();
                            var t = o.offset(),
                                i = I(e)[0] - t.top,
                                s = I(e)[1] - t.left;
                            n(r, a, i, s)
                        }), e(document).add(v).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function (e) {
                            if (o) {
                                var t = o.offset(),
                                    i = I(e)[0] - t.top,
                                    s = I(e)[1] - t.left;
                                if (r === i && a === s) return;
                                n(r, a, i, s)
                            }
                        }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function () {
                            o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, l && (document.onselectstart = null), t(!0)
                        })
                    },
                    A = function () {
                        function n(e) {
                            if (!ee(e) || c || I(e)[2]) return void(t = 0);
                            t = 1, S = 0, C = 0, u = 1, T.removeClass("mCS_touch_action");
                            var n = M.offset();
                            d = I(e)[0] - n.top, f = I(e)[1] - n.left, N = [I(e)[0], I(e)[1]]
                        }

                        function o(e) {
                            if (ee(e) && !c && !I(e)[2] && (k.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || S) && u)) {
                                g = Q();
                                var t = D.offset(),
                                    n = I(e)[0] - t.top,
                                    i = I(e)[1] - t.left,
                                    o = "mcsLinearOut";
                                if (B.push(n), j.push(i), N[2] = Math.abs(I(e)[0] - N[0]), N[3] = Math.abs(I(e)[1] - N[1]), _.overflowed[0]) var r = A[0].parent().height() - A[0].height(),
                                    a = d - n > 0 && n - d > -r * _.scrollRatio.y && (2 * N[3] < N[2] || "yx" === k.axis);
                                if (_.overflowed[1]) var s = A[1].parent().width() - A[1].width(),
                                    p = f - i > 0 && i - f > -s * _.scrollRatio.x && (2 * N[2] < N[3] || "yx" === k.axis);
                                a || p ? (q || e.preventDefault(), S = 1) : (C = 1, T.addClass("mCS_touch_action")), q && e.preventDefault(), w = "yx" === k.axis ? [d - n, f - i] : "x" === k.axis ? [null, f - i] : [d - n, null], M[0].idleTimer = 250, _.overflowed[0] && l(w[0], L, o, "y", "all", !0), _.overflowed[1] && l(w[1], L, o, "x", O, !0)
                            }
                        }

                        function r(e) {
                            if (!ee(e) || c || I(e)[2]) return void(t = 0);
                            t = 1, e.stopImmediatePropagation(), U(T), m = Q();
                            var n = D.offset();
                            p = I(e)[0] - n.top, h = I(e)[1] - n.left, B = [], j = []
                        }

                        function a(e) {
                            if (ee(e) && !c && !I(e)[2]) {
                                u = 0, e.stopImmediatePropagation(), S = 0, C = 0, v = Q();
                                var t = D.offset(),
                                    n = I(e)[0] - t.top,
                                    i = I(e)[1] - t.left;
                                if (!(v - g > 30)) {
                                    x = 1e3 / (v - m);
                                    var o = "mcsEaseOut",
                                        r = 2.5 > x,
                                        a = r ? [B[B.length - 2], j[j.length - 2]] : [0, 0];
                                    y = r ? [n - a[0], i - a[1]] : [n - p, i - h];
                                    var d = [Math.abs(y[0]), Math.abs(y[1])];
                                    x = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [x, x];
                                    var f = [Math.abs(M[0].offsetTop) - y[0] * s(d[0] / x[0], x[0]), Math.abs(M[0].offsetLeft) - y[1] * s(d[1] / x[1], x[1])];
                                    w = "yx" === k.axis ? [f[0], f[1]] : "x" === k.axis ? [null, f[1]] : [f[0], null], b = [4 * d[0] + k.scrollInertia, 4 * d[1] + k.scrollInertia];
                                    var T = parseInt(k.contentTouchScroll) || 0;
                                    w[0] = d[0] > T ? w[0] : 0, w[1] = d[1] > T ? w[1] : 0, _.overflowed[0] && l(w[0], b[0], o, "y", O, !1), _.overflowed[1] && l(w[1], b[1], o, "x", O, !1)
                                }
                            }
                        }

                        function s(e, t) {
                            var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
                            return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
                        }

                        function l(e, t, n, i, o, r) {
                            e && V(T, e.toString(), {
                                dur: t,
                                scrollEasing: n,
                                dir: i,
                                overwrite: o,
                                drag: r
                            })
                        }
                        var u, d, f, p, h, m, g, v, y, x, w, b, S, C, T = e(this),
                            _ = T.data(i),
                            k = _.opt,
                            E = i + "_" + _.idx,
                            D = e("#mCSB_" + _.idx),
                            M = e("#mCSB_" + _.idx + "_container"),
                            A = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")],
                            B = [],
                            j = [],
                            L = 0,
                            O = "yx" === k.axis ? "none" : "all",
                            N = [],
                            H = M.find("iframe"),
                            P = ["touchstart." + E + " pointerdown." + E + " MSPointerDown." + E, "touchmove." + E + " pointermove." + E + " MSPointerMove." + E, "touchend." + E + " pointerup." + E + " MSPointerUp." + E],
                            q = void 0 !== document.body.style.touchAction;
                        M.bind(P[0], function (e) {
                            n(e)
                        }).bind(P[1], function (e) {
                            o(e)
                        }), D.bind(P[0], function (e) {
                            r(e)
                        }).bind(P[2], function (e) {
                            a(e)
                        }), H.length && H.each(function () {
                            e(this).bind("load", function () {
                                R(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function (e) {
                                    n(e), r(e)
                                }).bind(P[1], function (e) {
                                    o(e)
                                }).bind(P[2], function (e) {
                                    a(e)
                                })
                            })
                        })
                    },
                    B = function () {
                        function n() {
                            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                        }

                        function o(e, t, n) {
                            u.type = n && r ? "stepped" : "stepless", u.scrollAmount = 10, F(a, e, t, "mcsLinearOut", n ? 60 : null)
                        }
                        var r, a = e(this),
                            s = a.data(i),
                            l = s.opt,
                            u = s.sequential,
                            d = i + "_" + s.idx,
                            f = e("#mCSB_" + s.idx + "_container"),
                            p = f.parent();
                        f.bind("mousedown." + d, function () {
                            t || r || (r = 1, c = !0)
                        }).add(document).bind("mousemove." + d, function (e) {
                            if (!t && r && n()) {
                                var i = f.offset(),
                                    a = I(e)[0] - i.top + f[0].offsetTop,
                                    c = I(e)[1] - i.left + f[0].offsetLeft;
                                a > 0 && a < p.height() && c > 0 && c < p.width() ? u.step && o("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (0 > a ? o("on", 38) : a > p.height() && o("on", 40)), "y" !== l.axis && s.overflowed[1] && (0 > c ? o("on", 37) : c > p.width() && o("on", 39)))
                            }
                        }).bind("mouseup." + d + " dragend." + d, function () {
                            t || (r && (r = 0, o("off", null)), c = !1)
                        })
                    },
                    j = function () {
                        function t(t, i) {
                            if (U(n), !O(n, t.target)) {
                                var a = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                                    u = r.scrollInertia;
                                if ("x" === r.axis || "x" === r.mouseWheel.axis) var d = "x",
                                    f = [Math.round(a * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                                    p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.width() ? .9 * s.width() : f[0],
                                    h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                                    m = c[1][0].offsetLeft,
                                    g = c[1].parent().width() - c[1].width(),
                                    v = "y" === r.mouseWheel.axis ? t.deltaY || i : t.deltaX;
                                else var d = "y",
                                    f = [Math.round(a * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                                    p = "auto" !== r.mouseWheel.scrollAmount ? f[1] : f[0] >= s.height() ? .9 * s.height() : f[0],
                                    h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
                                    m = c[0][0].offsetTop,
                                    g = c[0].parent().height() - c[0].height(),
                                    v = t.deltaY || i;
                                "y" === d && !o.overflowed[0] || "x" === d && !o.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), r.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== m || 0 > v && m !== g || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (p = t.deltaFactor, u = 17), V(n, (h - v * p).toString(), {
                                    dir: d,
                                    dur: u
                                }))
                            }
                        }
                        if (e(this).data(i)) {
                            var n = e(this),
                                o = n.data(i),
                                r = o.opt,
                                a = i + "_" + o.idx,
                                s = e("#mCSB_" + o.idx),
                                c = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                                u = e("#mCSB_" + o.idx + "_container").find("iframe");
                            u.length && u.each(function () {
                                e(this).bind("load", function () {
                                    R(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function (e, n) {
                                        t(e, n)
                                    })
                                })
                            }), s.bind("mousewheel." + a, function (e, n) {
                                t(e, n)
                            })
                        }
                    },
                    L = new Object,
                    R = function (t) {
                        var n = !1,
                            i = !1,
                            o = null;
                        if (void 0 === t ? i = "#empty" : void 0 !== e(t).attr("id") && (i = e(t).attr("id")), !1 !== i && void 0 !== L[i]) return L[i];
                        if (t) {
                            try {
                                var r = t.contentDocument || t.contentWindow.document;
                                o = r.body.innerHTML
                            } catch (e) {}
                            n = null !== o
                        } else {
                            try {
                                var r = top.document;
                                o = r.body.innerHTML
                            } catch (e) {}
                            n = null !== o
                        }
                        return !1 !== i && (L[i] = n), n
                    },
                    O = function (t, n) {
                        var o = n.nodeName.toLowerCase(),
                            r = t.data(i).opt.mouseWheel.disableOver,
                            a = ["select", "textarea"];
                        return e.inArray(o, r) > -1 && !(e.inArray(o, a) > -1 && !e(n).is(":focus"))
                    },
                    N = function () {
                        var t, n = e(this),
                            o = n.data(i),
                            r = i + "_" + o.idx,
                            a = e("#mCSB_" + o.idx + "_container"),
                            s = a.parent();
                        e(".mCSB_" + o.idx + "_scrollbar ." + u[12]).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function (n) {
                            c = !0, e(n.target).hasClass("mCSB_dragger") || (t = 1)
                        }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function () {
                            c = !1
                        }).bind("click." + r, function (i) {
                            if (t && (t = 0, e(i.target).hasClass(u[12]) || e(i.target).hasClass("mCSB_draggerRail"))) {
                                U(n);
                                var r = e(this),
                                    l = r.find(".mCSB_dragger");
                                if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!o.overflowed[1]) return;
                                    var c = "x",
                                        d = i.pageX > l.offset().left ? -1 : 1,
                                        f = Math.abs(a[0].offsetLeft) - d * (.9 * s.width())
                                } else {
                                    if (!o.overflowed[0]) return;
                                    var c = "y",
                                        d = i.pageY > l.offset().top ? -1 : 1,
                                        f = Math.abs(a[0].offsetTop) - d * (.9 * s.height())
                                }
                                V(n, f.toString(), {
                                    dir: c,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        })
                    },
                    H = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = i + "_" + n.idx,
                            a = e("#mCSB_" + n.idx + "_container"),
                            s = a.parent();
                        a.bind("focusin." + r, function () {
                            var n = e(document.activeElement),
                                i = a.find(".mCustomScrollBox").length;
                            n.is(o.advanced.autoScrollOnFocus) && (U(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? 17 * i : 0, t[0]._focusTimeout = setTimeout(function () {
                                var e = [ne(n)[0], ne(n)[1]],
                                    i = [a[0].offsetTop, a[0].offsetLeft],
                                    r = [i[0] + e[0] >= 0 && i[0] + e[0] < s.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < s.width() - n.outerWidth(!1)],
                                    l = "yx" !== o.axis || r[0] || r[1] ? "all" : "none";
                                "x" === o.axis || r[0] || V(t, e[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                }), "y" === o.axis || r[1] || V(t, e[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                })
                            }, t[0]._focusTimer))
                        })
                    },
                    P = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = i + "_" + n.idx,
                            r = e("#mCSB_" + n.idx + "_container").parent();
                        r.bind("scroll." + o, function () {
                            0 === r.scrollTop() && 0 === r.scrollLeft() || e(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
                        })
                    },
                    q = function () {
                        var t = e(this),
                            n = t.data(i),
                            o = n.opt,
                            r = n.sequential,
                            a = i + "_" + n.idx,
                            s = ".mCSB_" + n.idx + "_scrollbar";
                        e(s + ">a").bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function (i) {
                            function a(e, n) {
                                r.scrollAmount = o.scrollButtons.scrollAmount, F(t, e, n)
                            }
                            if (i.preventDefault(), Z(i)) {
                                var s = e(this).attr("class");
                                switch (r.type = o.scrollButtons.scrollType, i.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === r.type) return;
                                        c = !0, n.tweenRunning = !1, a("on", s);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === r.type) return;
                                        c = !1, r.dir && a("off", s);
                                        break;
                                    case "click":
                                        if ("stepped" !== r.type || n.tweenRunning) return;
                                        a("on", s)
                                }
                            }
                        })
                    },
                    W = function () {
                        function t(t) {
                            function i(e, t) {
                                a.type = r.keyboard.scrollType, a.scrollAmount = r.keyboard.scrollAmount, "stepped" === a.type && o.tweenRunning || F(n, e, t)
                            }
                            switch (t.type) {
                                case "blur":
                                    o.tweenRunning && a.dir && i("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var s = t.keyCode ? t.keyCode : t.which,
                                        l = "on";
                                    if ("x" !== r.axis && (38 === s || 40 === s) || "y" !== r.axis && (37 === s || 39 === s)) {
                                        if ((38 === s || 40 === s) && !o.overflowed[0] || (37 === s || 39 === s) && !o.overflowed[1]) return;
                                        "keyup" === t.type && (l = "off"), e(document.activeElement).is(d) || (t.preventDefault(), t.stopImmediatePropagation(), i(l, s))
                                    } else if (33 === s || 34 === s) {
                                        if ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                            U(n);
                                            var f = 34 === s ? -1 : 1;
                                            if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
                                                h = Math.abs(c[0].offsetLeft) - f * (.9 * u.width());
                                            else var p = "y",
                                                h = Math.abs(c[0].offsetTop) - f * (.9 * u.height());
                                            V(n, h.toString(), {
                                                dir: p,
                                                scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                    } else if ((35 === s || 36 === s) && !e(document.activeElement).is(d) && ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                        if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var p = "x",
                                            h = 35 === s ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                        else var p = "y",
                                            h = 35 === s ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                        V(n, h.toString(), {
                                            dir: p,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                            }
                        }
                        var n = e(this),
                            o = n.data(i),
                            r = o.opt,
                            a = o.sequential,
                            s = i + "_" + o.idx,
                            l = e("#mCSB_" + o.idx),
                            c = e("#mCSB_" + o.idx + "_container"),
                            u = c.parent(),
                            d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                            f = c.find("iframe"),
                            p = ["blur." + s + " keydown." + s + " keyup." + s];
                        f.length && f.each(function () {
                            e(this).bind("load", function () {
                                R(this) && e(this.contentDocument || this.contentWindow.document).bind(p[0], function (e) {
                                    t(e)
                                })
                            })
                        }), l.attr("tabindex", "0").bind(p[0], function (e) {
                            t(e)
                        })
                    },
                    F = function (t, n, o, r, a) {
                        function s(e) {
                            c.snapAmount && (d.scrollAmount = c.snapAmount instanceof Array ? "x" === d.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var n = "stepped" !== d.type,
                                i = a || (e ? n ? h / 1.5 : m : 1e3 / 60),
                                o = e ? n ? 7.5 : 40 : 2.5,
                                u = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)],
                                p = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                                g = "x" === d.dir[0] ? u[1] + d.dir[1] * (p[1] * o) : u[0] + d.dir[1] * (p[0] * o),
                                v = "x" === d.dir[0] ? u[1] + d.dir[1] * parseInt(d.scrollAmount) : u[0] + d.dir[1] * parseInt(d.scrollAmount),
                                y = "auto" !== d.scrollAmount ? v : g,
                                x = r || (e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                                w = !!e;
                            return e && 17 > i && (y = "x" === d.dir[0] ? u[1] : u[0]), V(t, y.toString(), {
                                dir: d.dir[0],
                                scrollEasing: x,
                                dur: i,
                                onComplete: w
                            }), e ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function () {
                                s()
                            }, i)))
                        }
                        var l = t.data(i),
                            c = l.opt,
                            d = l.sequential,
                            f = e("#mCSB_" + l.idx + "_container"),
                            p = "stepped" === d.type,
                            h = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                            m = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (n) {
                            case "on":
                                if (d.dir = [o === u[16] || o === u[15] || 39 === o || 37 === o ? "x" : "y", o === u[13] || o === u[15] || 38 === o || 37 === o ? -1 : 1], U(t), te(o) && "stepped" === d.type) return;
                                s(p);
                                break;
                            case "off":
                                (function () {
                                    clearTimeout(d.step), K(d, "step"), U(t)
                                })(), (p || l.tweenRunning && d.dir) && s(!0)
                        }
                    },
                    $ = function (t) {
                        var n = e(this).data(i).opt,
                            o = [];
                        return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
                    },
                    z = function (t, n) {
                        if (null != t && void 0 !== t) {
                            var o = e(this),
                                r = o.data(i),
                                a = r.opt,
                                s = e("#mCSB_" + r.idx + "_container"),
                                l = s.parent(),
                                c = typeof t;
                            n || (n = "x" === a.axis ? "x" : "y");
                            var u = "x" === n ? s.outerWidth(!1) - l.width() : s.outerHeight(!1) - l.height(),
                                f = "x" === n ? s[0].offsetLeft : s[0].offsetTop,
                                p = "x" === n ? "left" : "top";
                            switch (c) {
                                case "function":
                                    return t();
                                case "object":
                                    var h = t.jquery ? t : e(t);
                                    if (!h.length) return;
                                    return "x" === n ? ne(h)[1] : ne(h)[0];
                                case "string":
                                case "number":
                                    if (te(t)) return Math.abs(t);
                                    if (-1 !== t.indexOf("%")) return Math.abs(u * parseInt(t) / 100);
                                    if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                                    if (-1 !== t.indexOf("+=")) {
                                        var m = f + parseInt(t.split("+=")[1]);
                                        return m >= 0 ? 0 : Math.abs(m)
                                    }
                                    if (-1 !== t.indexOf("px") && te(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                                    if ("top" === t || "left" === t) return 0;
                                    if ("bottom" === t) return Math.abs(l.height() - s.outerHeight(!1));
                                    if ("right" === t) return Math.abs(l.width() - s.outerWidth(!1));
                                    if ("first" === t || "last" === t) {
                                        var h = s.find(":" + t);
                                        return "x" === n ? ne(h)[1] : ne(h)[0]
                                    }
                                    return e(t).length ? "x" === n ? ne(e(t))[1] : ne(e(t))[0] : (s.css(p, t), void d.update.call(null, o[0]))
                            }
                        }
                    },
                    X = function (t) {
                        function n() {
                            return clearTimeout(f[0].autoUpdate), 0 === s.parents("html").length ? void(s = null) : void(f[0].autoUpdate = setTimeout(function () {
                                return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void a(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = s[0].scrollHeight + s[0].scrollWidth + f[0].offsetHeight + s[0].offsetHeight + s[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void a(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = f.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void f.find("img").each(function () {
                                    o(this)
                                }))
                            }, c.advanced.autoUpdateTimeout))
                        }

                        function o(t) {
                            function n() {
                                this.onload = null, e(t).addClass(u[2]), a(2)
                            }
                            if (e(t).hasClass(u[2])) return void a();
                            var i = new Image;
                            i.onload = function (e, t) {
                                return function () {
                                    return t.apply(e, arguments)
                                }
                            }(i, n), i.src = t.src
                        }

                        function r() {
                            !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                            var e = 0,
                                t = f.find(c.advanced.updateOnSelectorChange);
                            return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
                                e += this.offsetHeight + this.offsetWidth
                            }), e
                        }

                        function a(e) {
                            clearTimeout(f[0].autoUpdate), d.update.call(null, s[0], e)
                        }
                        var s = e(this),
                            l = s.data(i),
                            c = l.opt,
                            f = e("#mCSB_" + l.idx + "_container");
                        return t ? (clearTimeout(f[0].autoUpdate), void K(f[0], "autoUpdate")) : void n()
                    },
                    Y = function (e, t, n) {
                        return Math.round(e / t) * t - n
                    },
                    U = function (t) {
                        var n = t.data(i);
                        e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal").each(function () {
                            J.call(this)
                        })
                    },
                    V = function (t, n, o) {
                        function r(e) {
                            return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
                        }

                        function a() {
                            return [c.callbacks.alwaysTriggerOffsets || w >= b[0] + T, c.callbacks.alwaysTriggerOffsets || -_ >= w]
                        }

                        function s() {
                            var e = [p[0].offsetTop, p[0].offsetLeft],
                                n = [y[0].offsetTop, y[0].offsetLeft],
                                i = [p.outerHeight(!1), p.outerWidth(!1)],
                                r = [f.height(), f.width()];
                            t[0].mcs = {
                                content: p,
                                top: e[0],
                                left: e[1],
                                draggerTop: n[0],
                                draggerLeft: n[1],
                                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(i[0]) - r[0])),
                                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(i[1]) - r[1])),
                                direction: o.dir
                            }
                        }
                        var l = t.data(i),
                            c = l.opt,
                            u = {
                                trigger: "internal",
                                dir: "y",
                                scrollEasing: "mcsEaseOut",
                                drag: !1,
                                dur: c.scrollInertia,
                                overwrite: "all",
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            },
                            o = e.extend(u, o),
                            d = [o.dur, o.drag ? 0 : o.dur],
                            f = e("#mCSB_" + l.idx),
                            p = e("#mCSB_" + l.idx + "_container"),
                            h = p.parent(),
                            m = c.callbacks.onTotalScrollOffset ? $.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                            g = c.callbacks.onTotalScrollBackOffset ? $.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (l.trigger = o.trigger, 0 === h.scrollTop() && 0 === h.scrollLeft() || (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                            if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount) {
                                var v = c.snapAmount instanceof Array ? "x" === o.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                                n = Y(n, v, c.snapOffset)
                            }
                            switch (o.dir) {
                                case "x":
                                    var y = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                        x = "left",
                                        w = p[0].offsetLeft,
                                        b = [f.width() - p.outerWidth(!1), y.parent().width() - y.width()],
                                        S = [n, 0 === n ? 0 : n / l.scrollRatio.x],
                                        T = m[1],
                                        _ = g[1],
                                        k = T > 0 ? T / l.scrollRatio.x : 0,
                                        E = _ > 0 ? _ / l.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var y = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                        x = "top",
                                        w = p[0].offsetTop,
                                        b = [f.height() - p.outerHeight(!1), y.parent().height() - y.height()],
                                        S = [n, 0 === n ? 0 : n / l.scrollRatio.y],
                                        T = m[0],
                                        _ = g[0],
                                        k = T > 0 ? T / l.scrollRatio.y : 0,
                                        E = _ > 0 ? _ / l.scrollRatio.y : 0
                            }
                            S[1] < 0 || 0 === S[0] && 0 === S[1] ? S = [0, 0] : S[1] >= b[1] ? S = [b[0], b[1]] : S[0] = -S[0], t[0].mcs || (s(), r("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(p[0].onCompleteTimeout), G(y[0], x, Math.round(S[1]), d[1], o.scrollEasing), !l.tweenRunning && (0 === w && S[0] >= 0 || w === b[0] && S[0] <= b[0]) || G(p[0], x, Math.round(S[0]), d[0], o.scrollEasing, o.overwrite, {
                                onStart: function () {
                                    o.callbacks && o.onStart && !l.tweenRunning && (r("onScrollStart") && (s(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, C(y), l.cbOffsets = a())
                                },
                                onUpdate: function () {
                                    o.callbacks && o.onUpdate && r("whileScrolling") && (s(), c.callbacks.whileScrolling.call(t[0]))
                                },
                                onComplete: function () {
                                    if (o.callbacks && o.onComplete) {
                                        "yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
                                        var e = p[0].idleTimer || 0;
                                        p[0].onCompleteTimeout = setTimeout(function () {
                                            r("onScroll") && (s(), c.callbacks.onScroll.call(t[0])), r("onTotalScroll") && S[1] >= b[1] - k && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && S[1] <= E && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, p[0].idleTimer = 0, C(y, "hide")
                                        }, e)
                                    }
                                }
                            })
                        }
                    },
                    G = function (e, t, n, i, o, r, a) {
                        function s() {
                            x.stop || (g || f.call(), g = Q() - m, l(), g >= x.time && (x.time = g > x.time ? g + u - (g - x.time) : g + u - 1, x.time < g + 1 && (x.time = g + 1)), x.time < i ? x.id = d(s) : h.call())
                        }

                        function l() {
                            i > 0 ? (x.currVal = c(x.time, v, w, i, o), y[t] = Math.round(x.currVal) + "px") : y[t] = n + "px", p.call()
                        }

                        function c(e, t, n, i, o) {
                            switch (o) {
                                case "linear":
                                case "mcsLinear":
                                    return n * e / i + t;
                                case "mcsLinearOut":
                                    return e /= i, e--, n * Math.sqrt(1 - e * e) + t;
                                case "easeInOutSmooth":
                                    return e /= i / 2, 1 > e ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
                                case "easeInOutStrong":
                                    return e /= i / 2, 1 > e ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (2 - Math.pow(2, -10 * e)) + t);
                                case "easeInOut":
                                case "mcsEaseInOut":
                                    return e /= i / 2, 1 > e ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
                                case "easeOutSmooth":
                                    return e /= i, e--, -n * (e * e * e * e - 1) + t;
                                case "easeOutStrong":
                                    return n * (1 - Math.pow(2, -10 * e / i)) + t;
                                case "easeOut":
                                case "mcsEaseOut":
                                default:
                                    var r = (e /= i) * e,
                                        a = r * e;
                                    return t + n * (.499999999999997 * a * r + -2.5 * r * r + 5.5 * a + -6.5 * r + 4 * e)
                            }
                        }
                        e._mTween || (e._mTween = {
                            top: {},
                            left: {}
                        });
                        var u, d, a = a || {},
                            f = a.onStart || function () {},
                            p = a.onUpdate || function () {},
                            h = a.onComplete || function () {},
                            m = Q(),
                            g = 0,
                            v = e.offsetTop,
                            y = e.style,
                            x = e._mTween[t];
                        "left" === t && (v = e.offsetLeft);
                        var w = n - v;
                        x.stop = 0, "none" !== r && function () {
                                null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id), x.id = null)
                            }(),
                            function () {
                                u = 1e3 / 60, x.time = g + u, d = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
                                    return l(), setTimeout(e, .01)
                                }, x.id = d(s)
                            }()
                    },
                    Q = function () {
                        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                    },
                    J = function () {
                        var e = this;
                        e._mTween || (e._mTween = {
                            top: {},
                            left: {}
                        });
                        for (var t = ["top", "left"], n = 0; n < t.length; n++) {
                            var i = t[n];
                            e._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[i].id) : clearTimeout(e._mTween[i].id), e._mTween[i].id = null, e._mTween[i].stop = 1)
                        }
                    },
                    K = function (e, t) {
                        try {
                            delete e[t]
                        } catch (n) {
                            e[t] = null
                        }
                    },
                    Z = function (e) {
                        return !(e.which && 1 !== e.which)
                    },
                    ee = function (e) {
                        var t = e.originalEvent.pointerType;
                        return !(t && "touch" !== t && 2 !== t)
                    },
                    te = function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    ne = function (e) {
                        var t = e.parents(".mCSB_container");
                        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
                    },
                    ie = function () {
                        var e = function () {
                            var e = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var t = 0; t < e.length; t++)
                                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                            return null
                        }();
                        return !!e && document[e]
                    };
                e.fn[n] = function (t) {
                    return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
                }, e[n] = function (t) {
                    return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
                }, e[n].defaults = r, window[n] = !0, e(window).bind("load", function () {
                    e(o)[n](), e.extend(e.expr[":"], {
                        mcsInView: e.expr[":"].mcsInView || function (t) {
                            var n, i, o = e(t),
                                r = o.parents(".mCSB_container");
                            if (r.length) return n = r.parent(), i = [r[0].offsetTop, r[0].offsetLeft], i[0] + ne(o)[0] >= 0 && i[0] + ne(o)[0] < n.height() - o.outerHeight(!1) && i[1] + ne(o)[1] >= 0 && i[1] + ne(o)[1] < n.width() - o.outerWidth(!1)
                        },
                        mcsInSight: e.expr[":"].mcsInSight || function (t) {
                            var n, i, o, r, a = e(t),
                                s = a.parents(".mCSB_container");
                            if (s.length) return n = [a.outerHeight(!1), a.outerWidth(!1)], o = [s[0].offsetTop + ne(a)[0], s[0].offsetLeft + ne(a)[1]], i = [s.parent()[0].offsetHeight, s.parent()[0].offsetWidth], r = [n[0] < i[0] ? [.9, .1] : [.6, .4], n[1] < i[1] ? [.9, .1] : [.6, .4]], o[0] - i[0] * r[0][0] < 0 && o[0] + n[0] - i[0] * r[0][1] >= 0 && o[1] - i[1] * r[1][0] < 0 && o[1] + n[1] - i[1] * r[1][1] >= 0
                        },
                        mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                            var n = e(t).data(i);
                            if (n) return n.overflowed[0] || n.overflowed[1]
                        }
                    })
                })
            }()
    }()
}), $(document).ready(function () {
    $(".field").find("input, textarea").keyup(function () {
        inputTest(this)
    })
}), $(document).ready(function () {
    $(".list").find("li.listItem a, li.archived a").hover(function () {
        $(this).closest(".list").addClass("hover")
    }, function () {
        $(this).closest(".list").removeClass("hover")
    })
});
var Timer = {
        length: null,
        time: null,
        selector: null,
        interval: null,
        callback: null,
        run: function (e, t, n) {
            Timer.length = n, Timer.time = Timer.length, Timer.selector = e, Timer.callback = t, $(Timer.selector).text(Timer.length), Timer.interval = setInterval(Timer.count, 1e3)
        },
        count: function () {
            Timer.time = Timer.time - 1, $(Timer.selector).text(Timer.time), Timer.time <= 0 && ("function" == typeof Timer.callback && Timer.callback && Timer.callback(), Timer.reset())
        },
        reset: function () {
            clearInterval(Timer.interval), Timer.length = null, Timer.time = null, Timer.selector = null, Timer.interval = null, Timer.callback = null
        }
    },
    Identity = {
        duration: 1400,
        delay: 500,
        iteration: 0,
        processing: !1,
        enough: !1,
        interval: null,
        callback: null,
        status: "loading",
        id: "#identity",
        selector: "#identity div",
        classes: "working rest robot",
        work: function () {
            "loading" != Identity.status && (Identity.status = "working"), Identity.wait(function () {
                $(Identity.id).addClass("working")
            })
        },
        robot: function () {
            Identity.status = "robot", Identity.wait(function () {
                $(Identity.id).addClass("robot")
            })
        },
        rest: function () {
            Identity.abort(), Identity.status = "rest", setTimeout(function () {
                Identity.abort(), $(Identity.id).addClass("rest")
            }, Identity.delay)
        },
        wait: function (e) {
            1 != Identity.processing && (Identity.abort(), Identity.processing = !0, setTimeout(function () {
                "function" == typeof e && e && e(), Identity.waiting(), Identity.interval = setInterval(Identity.waiting, Identity.duration)
            }, Identity.delay))
        },
        waiting: function () {
            if (1 != Identity.enough) return void++Identity.iteration;
            Identity.stopping()
        },
        stop: function (e) {
            setTimeout(function () {
                1 == Identity.processing && (Identity.enough = !0, Identity.callback = e, $(Identity.selector).attr("style", "animation-iteration-count: " + Identity.iteration + "; -webkit-animation-iteration-count: " + Identity.iteration + ";"))
            }, Identity.delay)
        },
        stopping: function () {
            clearInterval(Identity.interval), Identity.rest(), "function" == typeof Identity.callback && Identity.callback && Identity.callback(), Identity.reset()
        },
        abort: function () {
            "robot" == Identity.status ? $(Identity.id).removeClass("robot") : "loading" != Identity.status && 1 != Identity.processing ? ($(Identity.id).removeClass(Identity.classes + " loading"), $("#burger").removeClass("loading")) : $(Identity.id).removeClass(Identity.classes)
        },
        reset: function () {
            Identity.iteration = 0, Identity.processing = !1, Identity.enough = !1, Identity.interval = null, Identity.callback = null, $(Identity.selector).removeAttr("style")
        }
    };
$(document).ready(function () {
    $("#burger").on("click", function (e) {
        $(".wrapper").toggleClass("balls"), e.preventDefault()
    }), $(".wrapper:not(.balls) #identity > div").on("click", function (e) {
        $(".wrapper").addClass("balls"), e.preventDefault()
    })
});
var Stars = {
        canvas: null,
        context: null,
        circleArray: [],
        colorArray: ["#4c1a22", "#4c1a23", "#5d6268", "#1f2e37", "#474848", "#542619", "#ead8cf", "#4c241f", "#d6b9b1", "#964a47"],
        mouseDistance: 50,
        radius: .5,
        maxRadius: 1.5,
        mouse: {
            x: void 0,
            y: void 0,
            down: !1,
            move: !1
        },
        init: function () {
            this.canvas = document.getElementById("stars"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.canvas.style.display = "block", this.context = this.canvas.getContext("2d"), window.addEventListener("mousemove", this.mouseMove), window.addEventListener("resize", this.resize), this.prepare(), this.animate()
        },
        Circle: function (e, t, n, i, o, r) {
            this.x = e, this.y = t, this.dx = n, this.dy = i, this.radius = o, this.minRadius = this.radius, this.draw = function () {
                Stars.context.beginPath(), Stars.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), Stars.context.fillStyle = r, Stars.context.fill()
            }, this.update = function () {
                (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) && (this.dx = -this.dx), (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) && (this.dy = -this.dy), this.x += this.dx, this.y += this.dy, Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance ? this.radius < Stars.maxRadius && (this.radius += 1) : this.radius > this.minRadius && (this.radius -= 1), this.draw()
            }
        },
        prepare: function () {
            this.circleArray = [];
            for (var e = 0; e < 1200; e++) {
                var t = Stars.radius,
                    n = Math.random() * (this.canvas.width - 2 * t) + t,
                    i = Math.random() * (this.canvas.height - 2 * t) + t,
                    o = 1.5 * (Math.random() - .5),
                    r = 1.5 * (Math.random() - 1),
                    a = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
                this.circleArray.push(new this.Circle(n, i, o, r, t, a))
            }
        },
        animate: function () {
            requestAnimationFrame(Stars.animate), Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);
            for (var e = 0; e < Stars.circleArray.length; e++) {
                Stars.circleArray[e].update()
            }
        },
        mouseMove: function (e) {
            Stars.mouse.x = e.x, Stars.mouse.y = e.y
        },
        resize: function () {
            Stars.canvas.width = window.innerWidth, Stars.canvas.height = window.innerHeight
        }
    },
    renderer, scene, camera, ww, wh, particles;
ww = window.innerWidth, wh = window.innerHeight;
var centerVector = new THREE.Vector3(0, 0, 0),
    previousTime = 0;
speed = 10, isMouseDown = !1;
var getImageData = function (e) {
        var t = document.createElement("canvas");
        t.width = e.width, t.height = e.height;
        var n = t.getContext("2d");
        return n.clearRect(0, 0, t.width, t.height), n.drawImage(e, 0, 0), n.getImageData(0, 0, e.width, e.height)
    },
    drawTheMap = function () {
        particles && scene.remove(particles), e && e.dispose(), t && t.dispose();
        var e = new THREE.Geometry,
            t = new THREE.PointCloudMaterial;
        t.vertexColors = !0, t.transparent = !0;
        for (var n = 0, i = imagedata.height; n < i; n += 1)
            for (var o = 0, r = imagedata.width; o < r; o += 1)
                if (imagedata.data[4 * o + 4 * n * imagedata.width] > 0) {
                    var a = new THREE.Vector3;
                    a.x = o - imagedata.width / 2 + 280, a.y = -n + imagedata.height / 2, a.z = 500 * -Math.random(), a.speed = Math.random() / speed + .015;
                    var s = getPixel(imagedata, o, n),
                        l = "rgb(" + s.r + ", " + s.g + ", " + s.b + ")";
                    e.colors.push(new THREE.Color(l)), e.vertices.push(a)
                } particles = new THREE.Points(e, t), scene.add(particles), requestAnimationFrame(render)
    },
    init = function (e) {
        renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("yahia"),
            antialias: !0,
            alpha: !0
        }), renderer.setSize(ww, wh), scene = new THREE.Scene, camera = new THREE.OrthographicCamera(ww / -2, ww / 2, wh / 2, wh / -2, 1, 1e3), camera.position.set(0, -20, 4), camera.lookAt(centerVector), scene.add(camera), camera.zoom = 1, camera.updateProjectionMatrix(), imagedata = getImageData(e), drawTheMap(), window.addEventListener("mousemove", onMousemove, !1), window.addEventListener("mousedown", onMousedown, !1), window.addEventListener("mouseup", onMouseup, !1), window.addEventListener("resize", onResize, !1)
    },
    onResize = function () {
        ww = window.innerWidth, wh = window.innerHeight, renderer.setSize(ww, wh), camera.left = ww / -2, camera.right = ww / 2, camera.top = wh / 2, camera.bottom = wh / -2, camera.updateProjectionMatrix()
    },
    onMouseup = function () {
        isMouseDown = !1
    },
    onMousedown = function (e) {
        isMouseDown = !0, lastMousePos = {
            x: e.clientX,
            y: e.clientY
        }
    },
    onMousemove = function (e) {
        isMouseDown && (camera.position.x += (e.clientX - lastMousePos.x) / 100, camera.position.y -= (e.clientY - lastMousePos.y) / 100, camera.lookAt(centerVector), lastMousePos = {
            x: e.clientX,
            y: e.clientY
        })
    },
    render = function (e) {
        requestAnimationFrame(render), particles.geometry.verticesNeedUpdate = !0, isMouseDown || (camera.position.x += .06 * (0 - camera.position.x), camera.position.y += .06 * (0 - camera.position.y), camera.lookAt(centerVector)), renderer.render(scene, camera)
    },
    Yahia = {
        load: function (e) {
            var t;
            "home" == e ? t = "https://cdn.jsdelivr.net/gh/L1cardo/website-leading-page@master/home.png" : "bucket" == e ? t = "https://cdn.jsdelivr.net/gh/L1cardo/website-leading-page@master/home.png" : "projectsAll" == e ? t = "https://cdn.jsdelivr.net/gh/L1cardo/website-leading-page@master/home.png" : "aboutAll" == e ? t = "https://cdn.jsdelivr.net/gh/L1cardo/website-leading-page@master/home.png" : "notFound" == e && (t = "notFound.png");
            var n = document.createElement("img");
            n.onload = function () {
                init(n)
            }, n.src = t
        }
    },
    Submit = {
        data: function (e, t) {
            var n = {};
            for (i = 0; i < t.length; i++) {
                var o = $(t[i]),
                    r = o.attr("name"),
                    a = o.val().replace(/(?:\r\n|\r|\n)/g, "<br>");
                n[r] = a
            }
            return n
        },
        push: function (e) {
            var t = $(".template[data-template=" + e + "]"),
                n = t.find(".field input, .field textarea");
            Submit.view("[data-status=waiting]", t), $.ajax({
                type: "POST",
                url: "includes/php/" + e + ".php",
                data: {
                    dd: JSON.stringify(Submit.data(t, n))
                },
                dataType: "json",
                error: function (i, o, r) {
                    Submit.callback("error", e, t, n)
                },
                success: function (i) {
                    Submit.callback("success", e, t, n)
                }
            })
        },
        callback: function (e, t, n, i) {
            setTimeout(function () {
                "success" == e ? (n.find(".form .status").removeClass("current"), i.closest(".field").fadeOut(700), i.closest(".form").find(".submit").fadeOut(700), Identity.stop(), "secret" == t && (secretAvailability = !1), setTimeout(function () {
                    i.closest(".form").find(".submit").remove(), i.closest(".field").remove(), n.find(".form .status[data-status=success]").addClass("current")
                }, 750)) : (Submit.view("[data-status=error]", n), setTimeout(function () {
                    Submit.view(":not([data-status])", n)
                }, 6e3))
            }, 4e3)
        },
        view: function (e, t) {
            t.find(".form .status").removeClass("current"), t.find(".form .status" + e).addClass("current")
        },
        listen: function (e) {
            $(e).on("click", function (e) {
                if ($(this).closest(".form").hasClass("validated")) {
                    var t = $(this).attr("data-form");
                    Submit.push(t)
                }
                e.preventDefault()
            })
        }
    },
    Router = {
        wrapper: [],
        location: null,
        route: function (e, t) {
            Identity.work(), Router.location = Router.processLocation(e), Router.routes(t)
        },
        processLocation: function (e) {
            return void 0 === e && (e = window.location.hash), e.replace("#", "")
        },
        callback: function (e) {
            $(".wrapper").removeClass("balls"), setTimeout(function () {
                Identity.stop(function () {
                    Router.updateWrapper(), Router.updateTemplate(Router.wrapper[0]), window.location.hash = Router.location, Router.location = null, md.mobile() || Yahia.load(Router.wrapper[0]), Router.callbacks(Router.wrapper[0]), "function" == typeof e && e && e()
                })
            }, 200)
        },
        updateTemplate: function (e) {
            var t = $(".template"),
                n = $(".template[data-template=" + e + "]");
            t.removeClass("current"), setTimeout(function () {
                t.hide(), n.show().addClass("current")
            }, 1120)
        },
        updateWrapper: function (e, t) {
            e && Router.push(e), t && Router.pull(t);
            var n = Router.wrapper.toString().replace(/,/g, " ");
            $(".wrapper").attr("class", "wrapper " + n)
        },
        push: function (e) {
            for (e = e.split(" "), i = 0; i < e.length; i++) Router.wrapper.includes(e[i]) || "" == e[i] || Router.wrapper.push(e[i])
        },
        pull: function (e) {
            for (e = e.split(" "), i = 0; i < e.length; i++) Router.wrapper.includes(e[i]) && "" != e[i] && Router.wrapper.splice(Router.wrapper.indexOf(e[i]), 1)
        },
        listen: function () {
            $(".wrapper").on("click", ".router", function (e) {
                Router.route($(this).attr("href"), window[$(this).attr("data-callback")]), e.preventDefault()
            }), window.addEventListener("popstate", function (e) {
                Router.route(void 0)
            })
        }
    };
Router.routes = function (e) {
    Router.wrapper = [];
    var t = Router.location.split("/").filter(Boolean);
    void 0 === t[0] ? Router.push("home") : "secret" == t[0] && void 0 === t[1] ? Router.push("secret") : "bucket" == t[0] && void 0 === t[1] ? Router.push("bucket") : "bucket" == t[0] && "all" == t[1] && void 0 === t[2] ? Router.push("bucketAll") : "projects" == t[0] && void 0 === t[1] ? Router.push("projectsAll") : "about" == t[0] && void 0 === t[1] ? Router.push("aboutAll") : Router.push("notFound"), Router.callback(e)
}, Router.callbacks = function (e) {
    "secret" == e ? secret() : "notFound" == e && notFound()
};
var secretAvailability = !0,
    md = new MobileDetect(window.navigator.userAgent);
$(document).ready(function () {
    Identity.work(), $(".template main").mCustomScrollbar({
        theme: "dark"
    }), $("body").jpreLoader({
        showSplash: !1,
        showPercentage: !1,
        loaderVPos: 0,
        splashVPos: 0
    }, function () {
        Router.route(void 0, function () {
            Router.listen(), Submit.listen(".submit"), md.mobile() || Stars.init(), setTimeout(function () {
                $("#signature").removeClass("loading")
            }, 1.5 * Identity.delay)
        })
    })
});
