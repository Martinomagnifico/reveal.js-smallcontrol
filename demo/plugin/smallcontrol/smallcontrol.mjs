 /*****************************************************************
 *
 * reveal.js-smallcontrol for Reveal.js 
 * Version 1.1.0
 * 
 * @link
 * https://github.com/martinomagnifico/reveal.js-smallcontrol
 * 
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/martinomagnifico
 *
 * @license 
 * MIT
 * 
 * Copyright (C) 2026 Martijn De Jongh (Martino)
 *
 ******************************************************************/


//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = /* @__PURE__ */ ((n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)))((/* @__PURE__ */ o(((e, t) => {
	var n = function(e) {
		return r(e) && !i(e);
	};
	function r(e) {
		return !!e && typeof e == "object";
	}
	function i(e) {
		var t = Object.prototype.toString.call(e);
		return t === "[object RegExp]" || t === "[object Date]" || o(e);
	}
	var a = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function o(e) {
		return e.$$typeof === a;
	}
	function s(e) {
		return Array.isArray(e) ? [] : {};
	}
	function c(e, t) {
		return t.clone !== !1 && t.isMergeableObject(e) ? g(s(e), e, t) : e;
	}
	function l(e, t, n) {
		return e.concat(t).map(function(e) {
			return c(e, n);
		});
	}
	function u(e, t) {
		if (!t.customMerge) return g;
		var n = t.customMerge(e);
		return typeof n == "function" ? n : g;
	}
	function d(e) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
			return Object.propertyIsEnumerable.call(e, t);
		}) : [];
	}
	function f(e) {
		return Object.keys(e).concat(d(e));
	}
	function p(e, t) {
		try {
			return t in e;
		} catch {
			return !1;
		}
	}
	function m(e, t) {
		return p(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
	}
	function h(e, t, n) {
		var r = {};
		return n.isMergeableObject(e) && f(e).forEach(function(t) {
			r[t] = c(e[t], n);
		}), f(t).forEach(function(i) {
			m(e, i) || (r[i] = p(e, i) && n.isMergeableObject(t[i]) ? u(i, n)(e[i], t[i], n) : c(t[i], n));
		}), r;
	}
	function g(e, t, r) {
		r ||= {}, r.arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || n, r.cloneUnlessOtherwiseSpecified = c;
		var i = Array.isArray(t);
		return i === Array.isArray(e) ? i ? r.arrayMerge(e, t, r) : h(e, t, r) : c(t, r);
	}
	g.all = function(e, t) {
		if (!Array.isArray(e)) throw Error("first argument should be an array");
		return e.reduce(function(e, n) {
			return g(e, n, t);
		}, {});
	}, t.exports = g;
})))(), 1), l = Object.defineProperty, u = (e, t) => {
	let n = {};
	for (var r in e) l(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || l(n, Symbol.toStringTag, { value: "Module" }), n;
}, d = [
	".js",
	".min.js",
	".mjs"
], f = (() => {
	let e = import.meta;
	if (typeof e?.url == "string" && e.url !== "") return e.url;
	let t = typeof document < "u" ? document.currentScript : null;
	return t && "src" in t && t.src ? t.src : "";
})(), p = (e) => {
	let t = e.lastIndexOf("/");
	return t === -1 ? "" : e.slice(0, t + 1);
}, m = (e) => {
	let t = e.split(/[?#]/)[0];
	return t.slice(t.lastIndexOf("/") + 1);
}, h = (e, t) => d.some((n) => e === `${t}${n}`), g = [
	/\/@fs\//,
	/\/@id\//,
	/\/\.vite\/deps\//,
	/[?&][vt]=/
], ee = (e) => g.some((t) => t.test(e)), _ = (e) => {
	if (typeof document < "u") {
		let t = d.map((t) => `script[src$="${e}${t}"]`).join(", "), n = document.querySelector(t)?.getAttribute("src");
		if (n) return { directory: p(n) };
	}
	return f && !ee(f) && h(m(f), e) ? { directory: p(f) } : { directory: null };
}, v = (e) => _(e).directory !== null, y = /* @__PURE__ */ new Map(), b = (e = "") => {
	let t = y.get(e);
	if (t) return t;
	let n = typeof window < "u", r = typeof document < "u", i = import.meta, a = !1;
	try {
		a = typeof module < "u" && !!module?.hot;
	} catch {}
	let o = !1;
	try {
		o = !!i?.hot;
	} catch {}
	let s = a || o, c = !1;
	try {
		c = i?.env?.DEV === !0;
	} catch {}
	let l = e !== "" && v(e), u = {
		hasResolvableSource: l,
		hasWindow: n,
		hasDocument: r,
		isBundled: !l,
		isDevelopment: s || c,
		hasHMR: s,
		isViteDev: c
	};
	return y.set(e, u), u;
}, x = class {
	defaultConfig;
	pluginInit;
	pluginId;
	mergedConfig = null;
	userConfigData = null;
	data = {};
	constructor(e, t, n) {
		typeof e == "string" ? (this.pluginId = e, this.pluginInit = t, this.defaultConfig = n || {}) : (this.pluginId = e.id, this.pluginInit = e.init, this.defaultConfig = e.defaultConfig || {});
	}
	initializeConfig(e) {
		let t = this.defaultConfig, n = e.getConfig()[this.pluginId] || {};
		this.userConfigData = n, this.mergedConfig = (0, c.default)(t, n, {
			arrayMerge: (e, t) => t,
			clone: !0
		});
	}
	getCurrentConfig() {
		if (!this.mergedConfig) throw Error("Plugin configuration has not been initialized");
		return this.mergedConfig;
	}
	getData() {
		return Object.keys(this.data).length > 0 ? this.data : void 0;
	}
	get userConfig() {
		return this.userConfigData || {};
	}
	getEnvironmentInfo = () => b(this.pluginId);
	init(e) {
		if (this.initializeConfig(e), this.pluginInit) return this.pluginInit(this, e, this.getCurrentConfig());
	}
	createInterface(e = {}) {
		return {
			id: this.pluginId,
			init: (e) => this.init(e),
			getConfig: () => this.getCurrentConfig(),
			getData: () => this.getData(),
			...e
		};
	}
}, S = "data-css-id", C = (e, t) => new Promise((n, r) => {
	let i = document.createElement("link");
	i.rel = "stylesheet", i.href = t, i.setAttribute(S, e);
	let a = setTimeout(() => {
		i.parentNode && i.parentNode.removeChild(i), r(/* @__PURE__ */ Error(`[${e}] Timeout loading CSS from: ${t}`));
	}, 5e3);
	i.onload = () => {
		clearTimeout(a), n();
	}, i.onerror = () => {
		clearTimeout(a), i.parentNode && i.parentNode.removeChild(i), r(/* @__PURE__ */ Error(`[${e}] Failed to load CSS from: ${t}`));
	}, document.head.appendChild(i);
}), te = (e) => document.querySelectorAll(`[${S}="${e}"]`).length > 0, w = 1e4, T = (e) => new Promise((t) => {
	if (E(e)) return t(!0);
	if (typeof MutationObserver > "u") return t(!1);
	let n = !1, r = (e) => {
		n || (n = !0, i.disconnect(), clearTimeout(o), window.removeEventListener("load", a), t(e));
	}, i = new MutationObserver(() => {
		E(e) && r(!0);
	});
	i.observe(document.documentElement, {
		childList: !0,
		subtree: !0,
		attributeFilter: ["href", "rel"]
	});
	let a = () => requestAnimationFrame(() => r(E(e)));
	document.readyState === "complete" ? a() : window.addEventListener("load", a, { once: !0 });
	let o = setTimeout(() => r(E(e)), w);
}), E = (e) => {
	if (te(e)) return !0;
	try {
		return window.getComputedStyle(document.documentElement).getPropertyValue(`--cssimported-${e}`).trim() !== "";
	} catch {
		return !1;
	}
}, D = "--r-main-color", O = () => {
	if (typeof document > "u" || typeof window > "u") return !1;
	try {
		return getComputedStyle(document.documentElement).getPropertyValue(D).trim() !== "";
	} catch {
		return !1;
	}
}, k = (e = 1e3) => O() ? Promise.resolve(!0) : new Promise((t) => {
	let n = Date.now() + e, r = () => {
		if (O()) {
			t(!0);
			return;
		}
		if (Date.now() >= n) {
			t(!1);
			return;
		}
		setTimeout(r, 16);
	};
	r();
}), A = ((e) => new Proxy(e, { get: (e, t) => {
	if (t in e) return e[t];
	let n = t.toString();
	if (typeof console[n] == "function") return (...t) => {
		e.debugLog(n, ...t);
	};
} }))(new class {
	debugMode = !1;
	label = "DEBUG";
	groupDepth = 0;
	pending = null;
	emit(e, t) {
		if (this.pending) {
			this.pending.push([e, t]);
			return;
		}
		let n = typeof e == "function" ? e : console[e];
		typeof n == "function" && n.call(console, ...t);
	}
	flush() {
		let e = this.pending;
		if (this.pending = null, e) for (let [t, n] of e) this.emit(t, n);
	}
	initialize(e, t = "DEBUG") {
		this.debugMode = e, this.label = t;
	}
	group = (...e) => {
		this.debugMode && this.groupDepth === 0 && !this.pending && (this.pending = []), this.debugLog("group", ...e), this.groupDepth++;
	};
	groupCollapsed = (...e) => {
		this.debugMode && this.groupDepth === 0 && !this.pending && (this.pending = []), this.debugLog("groupCollapsed", ...e), this.groupDepth++;
	};
	groupEnd = () => {
		this.groupDepth > 0 && (this.groupDepth--, this.debugLog("groupEnd"), this.groupDepth === 0 && this.flush());
	};
	error = (...e) => {
		let t = this.debugMode;
		this.debugMode = !0, this.formatAndLog(console.error, e), this.debugMode = t;
	};
	table = (e, t, n) => {
		if (this.debugMode) try {
			typeof e == "string" && t !== void 0 && typeof t != "string" ? (this.groupDepth === 0 ? this.emit("log", [`[${this.label}]: ${e}`]) : this.emit("log", [e]), n ? this.emit("table", [t, n]) : this.emit("table", [t])) : (this.groupDepth === 0 && this.emit("log", [`[${this.label}]: Table data`]), typeof t == "object" && Array.isArray(t) ? this.emit("table", [e, t]) : this.emit("table", [e]));
		} catch (t) {
			this.emit("error", [`[${this.label}]: Error showing table:`, t]), this.emit("log", [`[${this.label}]: Raw data:`, e]);
		}
	};
	formatAndLog = (e, t) => {
		if (this.debugMode) try {
			this.groupDepth > 0 ? this.emit(e, t) : t.length > 0 && typeof t[0] == "string" ? this.emit(e, [`[${this.label}]: ${t[0]}`, ...t.slice(1)]) : this.emit(e, [`[${this.label}]:`, ...t]);
		} catch (e) {
			this.emit("error", [`[${this.label}]: Error in logging:`, e]), this.emit("log", [`[${this.label}]: Original log data:`, ...t]);
		}
	};
	debugLog(e, ...t) {
		let n = console[e];
		if (!(!this.debugMode && e !== "error" || typeof n != "function")) {
			if (e === "group" || e === "groupCollapsed") {
				t.length > 0 && typeof t[0] == "string" ? this.emit(e, [`[${this.label}]: ${t[0]}`, ...t.slice(1)]) : this.emit(e, [`[${this.label}]:`, ...t]);
				return;
			}
			if (e === "groupEnd") {
				this.emit(e, []);
				return;
			}
			if (e === "table") {
				t.length === 1 ? this.table(t[0]) : t.length === 2 ? (t[0], this.table(t[0], t[1])) : t.length >= 3 && this.table(t[0], t[1], t[2]);
				return;
			}
			this.groupDepth > 0 ? this.emit(e, t) : t.length > 0 && typeof t[0] == "string" ? this.emit(e, [`[${this.label}]: ${t[0]}`, ...t.slice(1)]) : this.emit(e, [`[${this.label}]:`, ...t]);
		}
	}
}()), j = /* @__PURE__ */ new Set(), M = (e, t) => {
	let n = `${e}::${t}`;
	j.has(n) || (j.add(n), console.warn(`[${e}] ${t}`));
}, ne = (e) => [`dist/plugin/${e}/${e}.css`, `plugin/${e}/${e}.css`], N = (e) => typeof e == "string" && e.trim() !== "", P = async (e, t) => {
	let { cssautoload: n, csspath: r, debug: i = !1 } = t;
	if (n === !1 || r === !1) return i && console.log(`[${e}] CSS loading is switched off`), { status: "skipped" };
	if (N(r)) {
		let t = r.trim(), n = E(e), a = n && !!document.querySelector(`[data-css-id="${e}"]`);
		try {
			return await C(e, t), i && console.log(`[${e}] CSS loaded from: ${t}`), n && M(e, `Loaded CSS from ${t}, but a stylesheet for this plugin was already on the page (${a ? "a tagged <link>" : "an import or inline <style>"}) — csspath adds one, it cannot remove one. Both are live and the cascade decides. Remove the other import or <link>, or drop csspath.`), {
				status: "loaded",
				path: t
			};
		} catch {
			return console.warn(`[${e}] Could not load CSS from: ${t}`), {
				status: "failed",
				path: t
			};
		}
	}
	if (E(e)) return i && console.log(`[${e}] CSS is already imported, skipping`), { status: "present" };
	let { directory: a } = _(e);
	if (a !== null || n === !0) {
		let t = [...a === null ? [] : [`${a}${e}.css`], ...ne(e)].filter((e, t, n) => n.indexOf(e) === t);
		for (let n of t) try {
			return await C(e, n), i && console.log(`[${e}] CSS loaded from: ${n}`), {
				status: "loaded",
				path: n
			};
		} catch {
			i && console.log(`[${e}] No CSS at: ${n}`);
		}
		return console.warn(`[${e}] Could not load CSS. Tried: ${t.join(", ")}. Import the stylesheet yourself, or set csspath to where it is.`), { status: "failed" };
	}
	return T(e).then((t) => {
		t || M(e, `CSS could not be autoloaded here, because the plugin is part of a bundle. Import it once in your own code: import 'reveal.js-${e}/${e}.css'`);
	}), { status: "advised" };
};
async function F(e, t) {
	if ("getEnvironmentInfo" in e && t) {
		let n = e, r = n.userConfig, i = "cssautoload" in r && r.cssautoload !== "auto" ? t.cssautoload : void 0;
		return P(n.pluginId, {
			...t,
			cssautoload: i
		});
	}
	let { id: n, cssautoload: r, csspath: i, debug: a } = e;
	return P(n, {
		cssautoload: r === "auto" ? void 0 : r,
		csspath: i,
		debug: a
	});
}
var I = /* @__PURE__ */ u({ addThemeColor: () => ae }), L = Symbol.for("reveal.js-plugintoolkit.themeColor"), R = "has-light-background", z = "has-dark-background", B = "--c-theme-color", V = "--c-theme-heading-color", H = {
	text: "section",
	heading: "h1"
}, U = "c-theme-inverted", W = "reveal-scroll", G = "stack", K = (e, t, n) => {
	Object.defineProperty(e, t, {
		value: n,
		configurable: !0,
		enumerable: !1,
		writable: !1
	});
}, q = (e) => {
	let t = e.getElementsByClassName("slides")[0];
	if (!t) return null;
	let n = document.createElement("section"), r = document.createElement(H.heading);
	n.appendChild(r), t.appendChild(n);
	let i = () => ({
		text: getComputedStyle(n).getPropertyValue("color"),
		heading: getComputedStyle(r).getPropertyValue("color")
	}), a = i();
	n.classList.add(R);
	let o = i(), s = "dark";
	return o.text === a.text && o.heading === a.heading && (s = "light", n.classList.remove(R), n.classList.add(z), o = i()), n.remove(), {
		theme: s,
		text: {
			regular: a.text,
			inverse: o.text
		},
		heading: {
			regular: a.heading,
			inverse: o.heading
		}
	};
}, J = (e, t) => e?.classList.contains(t) ?? !1, re = (e, t, n) => {
	let r = J(n, W) ? n : t;
	if (J(r, R)) return "light";
	if (J(r, z)) return "dark";
	let i = e.getCurrentSlide?.()?.parentElement ?? null;
	if (i && J(i, G)) {
		if (J(i, R)) return "light";
		if (J(i, z)) return "dark";
	}
	return null;
}, Y = (e, t, n) => {
	let r = re(e, t, e.getViewportElement());
	return n.theme === "dark" ? r === "light" : r === "dark";
}, X = (e, t, n) => {
	let r = (e) => n ? e.inverse : e.regular;
	e.style.setProperty(B, r(t.text)), e.style.setProperty(V, r(t.heading)), e.classList.toggle(U, n);
}, ie = async (e, { timeout: t = 1e3 }) => {
	let n = e.getRevealElement();
	if (!n) return null;
	let r = e.getViewportElement() ?? n;
	await k(t);
	let i = q(n);
	if (!i) return null;
	let a = Y(e, n, i);
	X(r, i, a);
	let o = () => {
		let t = Y(e, n, i);
		t !== a && (a = t, X(r, i, t));
	}, s = new MutationObserver(o);
	return s.observe(n, {
		attributes: !0,
		attributeFilter: ["class"]
	}), r !== n && s.observe(r, {
		attributes: !0,
		attributeFilter: ["class"]
	}), e.on("slidechanged", o), i;
}, ae = (e, t = {}) => {
	let n = e[L];
	if (n) return n;
	let r = ie(e, t);
	return K(e, L, r), r;
}, Z = "smallcontrol", oe = "smallcontrol", se = "smallcontrol-autoscale", Q = "--smallcontrol-color", ce = "--smallcontrol-color-inverted", le = "--smallcontrol-maxscale", $ = {
	color: "",
	inversecolor: "",
	autoscale: !1,
	maxscale: 2,
	cssautoload: "auto",
	csspath: "",
	debug: !1
}, ue = (e, t) => {
	t.color && e.style.setProperty(Q, t.color), t.inversecolor && e.style.setProperty(ce, t.inversecolor);
}, de = (e, t) => {
	if (!t.autoscale) return;
	e.classList.add(se);
	let n = Number(t.maxscale);
	Number.isFinite(n) && n > 0 ? e.style.setProperty(le, String(n)) : M(Z, `\`maxscale\` should be a number, such as ${$.maxscale}. Using ${$.maxscale}.`);
}, fe = { async create(e, t) {
	let n = e.getRevealElement();
	n && (n.classList.add(oe), ue(n, t), de(n, t), await I.addThemeColor(e) || A.log("No Reveal theme was found, so no theme colors could be read. If this deck styles itself without a theme, set `color` and `inversecolor` in the Smallcontrol options."));
} }, pe = async (e, t, n) => {
	A && n.debug && A.initialize(!0, Z), e.userConfig.thisdeckonly === !1 && M(Z, "`thisdeckonly` has been removed. Smallcontrol only styles the deck it is loaded in; add the plugin to every deck that should have small controls."), await F(e, n), await fe.create(t, n);
}, me = () => new x(Z, pe, $).createInterface();
//#endregion
export { me as default };
