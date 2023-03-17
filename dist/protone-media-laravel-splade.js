import ne from "axios";
import { ref as y, computed as I, watch as lt, openBlock as B, createBlock as X, unref as W, createCommentVNode as Rr, h as V, onMounted as H, createElementBlock as Oe, createElementVNode as wr, provide as de, inject as z, nextTick as Ce, KeepAlive as li, normalizeStyle as Mt, createVNode as qs, Fragment as Br, renderList as Cs, cloneVNode as Fs, watchEffect as le, defineComponent as Y, onUnmounted as me, Teleport as ui, reactive as Ls, shallowRef as ks, normalizeClass as Ds, onBeforeUnmount as Rs, renderSlot as te, resolveComponent as jr, withCtx as ci, withModifiers as Bs, withDirectives as js, resolveDynamicComponent as Ms, normalizeProps as Ns, guardReactiveProps as Vs, vShow as Hs } from "vue";
function Us(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ws(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var zs = Ws();
const Gs = zs;
function Xs(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ks = typeof global == "object" && global && global.Object === Object && global;
const di = Ks;
var Ys = typeof self == "object" && self && self.Object === Object && self, Js = di || Ys || Function("return this")();
const ve = Js;
var Qs = ve.Symbol;
const Fe = Qs;
var fi = Object.prototype, Zs = fi.hasOwnProperty, ea = fi.toString, pt = Fe ? Fe.toStringTag : void 0;
function ta(e) {
  var t = Zs.call(e, pt), r = e[pt];
  try {
    e[pt] = void 0;
    var n = !0;
  } catch {
  }
  var i = ea.call(e);
  return n && (t ? e[pt] = r : delete e[pt]), i;
}
var ra = Object.prototype, na = ra.toString;
function ia(e) {
  return na.call(e);
}
var sa = "[object Null]", aa = "[object Undefined]", En = Fe ? Fe.toStringTag : void 0;
function De(e) {
  return e == null ? e === void 0 ? aa : sa : En && En in Object(e) ? ta(e) : ia(e);
}
function Le(e) {
  return e != null && typeof e == "object";
}
var oa = "[object Arguments]";
function Tn(e) {
  return Le(e) && De(e) == oa;
}
var pi = Object.prototype, la = pi.hasOwnProperty, ua = pi.propertyIsEnumerable, ca = Tn(function() {
  return arguments;
}()) ? Tn : function(e) {
  return Le(e) && la.call(e, "callee") && !ua.call(e, "callee");
};
const hi = ca;
var da = Array.isArray;
const j = da;
function fa() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, xn = mi && typeof module == "object" && module && !module.nodeType && module, pa = xn && xn.exports === mi, _n = pa ? ve.Buffer : void 0, ha = _n ? _n.isBuffer : void 0, ma = ha || fa;
const Sr = ma;
var va = 9007199254740991, ga = /^(?:0|[1-9]\d*)$/;
function Mr(e, t) {
  var r = typeof e;
  return t = t == null ? va : t, !!t && (r == "number" || r != "symbol" && ga.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ya = 9007199254740991;
function Nr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ya;
}
var ba = "[object Arguments]", wa = "[object Array]", Sa = "[object Boolean]", Oa = "[object Date]", $a = "[object Error]", Ea = "[object Function]", Ta = "[object Map]", xa = "[object Number]", _a = "[object Object]", Ia = "[object RegExp]", Aa = "[object Set]", Pa = "[object String]", qa = "[object WeakMap]", Ca = "[object ArrayBuffer]", Fa = "[object DataView]", La = "[object Float32Array]", ka = "[object Float64Array]", Da = "[object Int8Array]", Ra = "[object Int16Array]", Ba = "[object Int32Array]", ja = "[object Uint8Array]", Ma = "[object Uint8ClampedArray]", Na = "[object Uint16Array]", Va = "[object Uint32Array]", D = {};
D[La] = D[ka] = D[Da] = D[Ra] = D[Ba] = D[ja] = D[Ma] = D[Na] = D[Va] = !0;
D[ba] = D[wa] = D[Ca] = D[Sa] = D[Fa] = D[Oa] = D[$a] = D[Ea] = D[Ta] = D[xa] = D[_a] = D[Ia] = D[Aa] = D[Pa] = D[qa] = !1;
function Ha(e) {
  return Le(e) && Nr(e.length) && !!D[De(e)];
}
function Ua(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, bt = vi && typeof module == "object" && module && !module.nodeType && module, Wa = bt && bt.exports === vi, dr = Wa && di.process, za = function() {
  try {
    var e = bt && bt.require && bt.require("util").types;
    return e || dr && dr.binding && dr.binding("util");
  } catch {
  }
}();
const In = za;
var An = In && In.isTypedArray, Ga = An ? Ua(An) : Ha;
const gi = Ga;
var Xa = Object.prototype, Ka = Xa.hasOwnProperty;
function Ya(e, t) {
  var r = j(e), n = !r && hi(e), i = !r && !n && Sr(e), s = !r && !n && !i && gi(e), a = r || n || i || s, o = a ? Xs(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ka.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Mr(u, l))) && o.push(u);
  return o;
}
var Ja = Object.prototype;
function Qa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ja;
  return e === r;
}
function Za(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var eo = Za(Object.keys, Object);
const to = eo;
var ro = Object.prototype, no = ro.hasOwnProperty;
function io(e) {
  if (!Qa(e))
    return to(e);
  var t = [];
  for (var r in Object(e))
    no.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var so = "[object AsyncFunction]", ao = "[object Function]", oo = "[object GeneratorFunction]", lo = "[object Proxy]";
function yi(e) {
  if (!K(e))
    return !1;
  var t = De(e);
  return t == ao || t == oo || t == so || t == lo;
}
function zt(e) {
  return e != null && Nr(e.length) && !yi(e);
}
function Gt(e) {
  return zt(e) ? Ya(e) : io(e);
}
function Vr(e, t) {
  return e && Gs(e, t, Gt);
}
function uo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!zt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var co = uo(Vr);
const Hr = co;
function bi(e) {
  return e;
}
function wi(e) {
  return typeof e == "function" ? e : bi;
}
function fo(e, t) {
  var r = j(e) ? Us : Hr;
  return r(e, wi(t));
}
function Z(e, t) {
  return e && Vr(e, wi(t));
}
var po = Array.prototype, ho = po.reverse;
function mo(e) {
  return e == null ? e : ho.call(e);
}
class Si {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    !this.events[t] || (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    !this.events[t] || this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Nt = y(0), ie = y(1), R = y({}), ae = y(0), Xt = y({}), rt = {}, $e = typeof window > "u";
function vo(e, t, r) {
  $e || window.addEventListener("popstate", go.bind(this)), Object.keys(t).length > 0 && Nt.value++, rt[ie.value] = new Si(ie.value), Gr(r), Kt(r.head), Xr(e);
  const n = $e ? "" : location.href, i = Ur(
    n,
    r.head,
    e,
    t,
    {},
    ie.value,
    Nt.value,
    r.persistentLayout
  );
  Oi(i);
}
function go(e) {
  !e.state || (R.value = e.state, ae.value = 0, Xt.value = {}, Kr.value = {}, Wr.value = R.value.persistentLayoutKey, Kt(R.value.head), Xr(R.value.html, R.value.rememberedState.scrollY));
}
function Ur(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return R.value = l, l;
}
function yo(e) {
  $e || window.history.pushState(e, "", e.url);
}
function bo(e) {
  const t = Ur(
    e,
    JSON.parse(JSON.stringify(R.value.head)),
    R.value.html,
    JSON.parse(JSON.stringify(R.value.dynamics)),
    { ...R.value.rememberedState },
    R.value.pageVisitId,
    R.value.dynamicVisitId,
    R.value.persistentLayoutKey
  );
  $e || window.history.replaceState(t, "", t.url);
}
function Oi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const fr = y(0), Wr = y(null);
function wo(e, t) {
  var p;
  fr.value++;
  const r = e.request.responseURL;
  if (K((p = e.data) == null ? void 0 : p.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ae.value++;
  const n = Wr.value;
  if (Gr(e.data.splade), Kt(e.data.splade.head), r === R.value.url && (t = !0), e.data.splade.modal)
    return Ci(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ae.value = 0, Xt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(R.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && Z(s, (v, d) => {
    s[d] += `<!-- ${fr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${fr.value} -->`)) : (o && Nt.value++, (!o || !a) && (ie.value++, rt[ie.value] = rt[ie.value] || new Si(ie.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !$e && t && e.data.splade.preserveScroll && (u = window.scrollY), Xr(
    l ? R.value.html : i,
    u
  );
  const c = Ur(
    r,
    e.data.splade.head,
    l ? R.value.html : i,
    s,
    R.value.rememberedState ? { ...R.value.rememberedState } : {},
    ie.value,
    Nt.value,
    e.data.splade.persistentLayout
  );
  t ? Oi(c) : yo(c);
}
function So() {
  ae.value--, Kt($o(ae.value));
}
const $i = y({}), Ei = (e) => $i.value[e], Oo = (e) => Object.keys(Ei.value[e]).length > 0, Ti = y({}), $o = (e) => Ti.value[e], xi = y({}), Eo = (e) => xi.value[e], nt = y([]);
function To(e) {
  nt.value.push(e);
}
const xo = I(() => mo(nt.value));
function _o(e) {
  nt.value[e].dismissed = !0, nt.value[e].html = null;
}
const zr = y(null);
function Io(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, p) => {
    o = c, l = p;
  });
  return zr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function Ao() {
  zr.value = null;
}
const _i = y({});
function Gr(e) {
  Wr.value = e.persistentLayout, _i.value = e.shared ? e.shared : {}, xi.value[ae.value] = e.flash ? e.flash : {}, Ti.value[ae.value] = e.head ? e.head : {}, fo(e.toasts ? e.toasts : [], (t) => {
    nt.value.push(t);
  }), $i.value[ae.value] = e.errors ? e.errors : {};
}
const Ii = y(() => {
}), Ai = y(() => {
}), Pi = y(() => {
}), qi = y(() => {
});
function Kt(e) {
  Ii.value(e);
}
function Xr(e, t) {
  Ai.value(e, t);
}
function Ci(e, t) {
  Xt.value[ae.value] = !0, Pi.value(e, t);
}
function Po(e) {
  return Xt.value[e];
}
function Fi(e) {
  qi.value(e);
}
const Li = y({});
function ki(e, t, r) {
  Li.value[e] = t, r && qo(e, t);
}
function qo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Co(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Li.value[e];
}
function Ye(e, t, r, n, i) {
  if ($e || ki("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  gt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = ne({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), gt("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    wo(a, i), gt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (gt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Gr(o), a.response.status != 422 && Fi(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Di(e, t) {
  return typeof t > "u" && (t = {}), Ye(e, "GET", {}, t, !0);
}
function Fo(e, t) {
  return typeof t > "u" && (t = {}), Ye(e, "GET", {}, t, !1);
}
function Lo(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Kr = y({});
function ko(e) {
  const t = Kr.value[e];
  return t ? (ae.value++, Ci(t.html, t.type), !0) : !1;
}
function Do(e, t, r) {
  Kr.value[e] = { html: t, type: r };
}
function Ro(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Bo(e, t) {
  return Ye(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function jo(e, t) {
  return Ye(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Mo() {
  return Di(R.value.url);
}
function No(e, t) {
  rt[ie.value].on(e, t);
}
function Vo(e, t) {
  rt[ie.value].off(e, t);
}
function gt(e, t) {
  typeof t > "u" && (t = {}), rt[ie.value].emit(e, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const m = {
  init: vo,
  replace: Di,
  visit: Fo,
  modal: Lo,
  slideover: Ro,
  refresh: Mo,
  request: Ye,
  lazy: Bo,
  rehydrate: jo,
  replaceUrlOfCurrentPage: bo,
  htmlForDynamicComponent(e) {
    return R.value.dynamics[e];
  },
  setOnHead(e) {
    Ii.value = e;
  },
  setOnHtml(e) {
    Ai.value = e;
  },
  setOnModal(e) {
    Pi.value = e;
  },
  setOnServerError(e) {
    qi.value = e;
  },
  onServerError: Fi,
  hasValidationErrors: Oo,
  validationErrors: Ei,
  sharedData: _i,
  flashData: Eo,
  toasts: nt,
  toastsReversed: xo,
  confirmModal: zr,
  confirm: Io,
  clearConfirmModal: Ao,
  pushToast: To,
  dismissToast: _o,
  restore: Co,
  remember: ki,
  popStack: So,
  currentStack: ae,
  stackType: Po,
  pageVisitId: I(() => R.value.pageVisitId),
  dynamicVisitId: I(() => R.value.dynamicVisitId),
  isSsr: $e,
  openPreloadedModal: ko,
  registerPreloadedModal: Do,
  on: No,
  off: Vo,
  emit: gt
};
var Ho = "[object String]";
function se(e) {
  return typeof e == "string" || !j(e) && Le(e) && De(e) == Ho;
}
const ce = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = e, r = y(null);
    function n() {
      r.value = V({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      });
    }
    return lt(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (B(), X(W(r), { key: 0 })) : Rr("", !0);
  }
}, Uo = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = y(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return H(() => i()), (o, l) => (B(), Oe("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      wr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Wo = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: !1,
      default: ""
    },
    components: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    de("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = z("$spladeOptions") || {}, l = I(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, m.popStack();
    }
    function p(d) {
      const h = document.createElement("meta");
      Z(d, (f, g) => {
        h[g] = f;
      }), document.getElementsByTagName("head")[0].appendChild(h);
    }
    function v(d) {
      var f;
      let h = "meta";
      Z(d, (g, w) => {
        h = `${h}[${w}="${g}"]`;
      });
      try {
        (f = document.querySelector(h)) == null || f.remove();
      } catch {
      }
    }
    return m.setOnHead((d) => {
      var h;
      if (!m.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((f) => {
          v(f);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((f) => {
          p(f);
        }), (h = document.querySelector('link[rel="canonical"]')) == null || h.remove(), d.canonical) {
          const f = document.createElement("link");
          f.rel = "canonical", f.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(f);
        }
      }
    }), m.setOnHtml((d, h) => {
      n.value = [], r.value = d, Ce(() => {
        m.isSsr || window.scrollTo(0, h), o.transform_anchors && [...document.querySelectorAll("a")].forEach((f) => {
          f.href == "" || f.href.charAt(0) == "#" || f.__vnode.dynamicProps === null && (f.hasAttribute("download") || (f.onclick = function(g) {
            g.preventDefault(), m.visit(f.href);
          }));
        });
      });
    }), m.setOnModal(function(d, h) {
      n.value[m.currentStack.value] && (a.value = !1), n.value[m.currentStack.value] = { html: d, type: h }, Ce(() => {
        a.value = !0;
      });
    }), m.setOnServerError(function(d) {
      i.value = d;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), H(() => {
      if (m.isSsr)
        return;
      const d = se(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((h) => {
        delete d.dataset[h];
      });
    }), (d, h) => (B(), Oe("div", null, [
      W(m).isSsr ? (B(), X(ce, {
        key: `visit.${W(m).pageVisitId.value}`,
        style: Mt(W(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (B(), X(li, {
        key: 0,
        max: W(o).max_keep_alive
      }, [
        (B(), X(ce, {
          key: `visit.${W(m).pageVisitId.value}`,
          style: Mt(W(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      qs(ce, { html: e.components }, null, 8, ["html"]),
      (B(!0), Oe(Br, null, Cs(W(m).currentStack.value, (f) => (B(), X(ce, {
        key: `modal.${f}`,
        type: n.value[f].type,
        html: n.value[f].html,
        stack: f,
        "on-top-of-stack": W(m).currentStack.value === f,
        animate: a.value,
        onClose: (g) => c(f)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (B(), X(Uo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Rr("", !0)
    ]));
  }
};
function qp(e) {
  return () => V(Wo, e);
}
var zo = Object.prototype, Go = zo.hasOwnProperty;
function Xo(e, t) {
  return e != null && Go.call(e, t);
}
var Ko = "[object Symbol]";
function Yt(e) {
  return typeof e == "symbol" || Le(e) && De(e) == Ko;
}
var Yo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jo = /^\w*$/;
function Yr(e, t) {
  if (j(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Yt(e) ? !0 : Jo.test(e) || !Yo.test(e) || t != null && e in Object(t);
}
var Qo = ve["__core-js_shared__"];
const pr = Qo;
var Pn = function() {
  var e = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zo(e) {
  return !!Pn && Pn in e;
}
var el = Function.prototype, tl = el.toString;
function Je(e) {
  if (e != null) {
    try {
      return tl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rl = /[\\^$.*+?()[\]{}|]/g, nl = /^\[object .+?Constructor\]$/, il = Function.prototype, sl = Object.prototype, al = il.toString, ol = sl.hasOwnProperty, ll = RegExp(
  "^" + al.call(ol).replace(rl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ul(e) {
  if (!K(e) || Zo(e))
    return !1;
  var t = yi(e) ? ll : nl;
  return t.test(Je(e));
}
function cl(e, t) {
  return e == null ? void 0 : e[t];
}
function Qe(e, t) {
  var r = cl(e, t);
  return ul(r) ? r : void 0;
}
var dl = Qe(Object, "create");
const St = dl;
function fl() {
  this.__data__ = St ? St(null) : {}, this.size = 0;
}
function pl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hl = "__lodash_hash_undefined__", ml = Object.prototype, vl = ml.hasOwnProperty;
function gl(e) {
  var t = this.__data__;
  if (St) {
    var r = t[e];
    return r === hl ? void 0 : r;
  }
  return vl.call(t, e) ? t[e] : void 0;
}
var yl = Object.prototype, bl = yl.hasOwnProperty;
function wl(e) {
  var t = this.__data__;
  return St ? t[e] !== void 0 : bl.call(t, e);
}
var Sl = "__lodash_hash_undefined__";
function Ol(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = St && t === void 0 ? Sl : t, this;
}
function Xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Xe.prototype.clear = fl;
Xe.prototype.delete = pl;
Xe.prototype.get = gl;
Xe.prototype.has = wl;
Xe.prototype.set = Ol;
function $l() {
  this.__data__ = [], this.size = 0;
}
function Jr(e, t) {
  return e === t || e !== e && t !== t;
}
function Jt(e, t) {
  for (var r = e.length; r--; )
    if (Jr(e[r][0], t))
      return r;
  return -1;
}
var El = Array.prototype, Tl = El.splice;
function xl(e) {
  var t = this.__data__, r = Jt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Tl.call(t, r, 1), --this.size, !0;
}
function _l(e) {
  var t = this.__data__, r = Jt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Il(e) {
  return Jt(this.__data__, e) > -1;
}
function Al(e, t) {
  var r = this.__data__, n = Jt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ee.prototype.clear = $l;
Ee.prototype.delete = xl;
Ee.prototype.get = _l;
Ee.prototype.has = Il;
Ee.prototype.set = Al;
var Pl = Qe(ve, "Map");
const Ot = Pl;
function ql() {
  this.size = 0, this.__data__ = {
    hash: new Xe(),
    map: new (Ot || Ee)(),
    string: new Xe()
  };
}
function Cl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qt(e, t) {
  var r = e.__data__;
  return Cl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Fl(e) {
  var t = Qt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ll(e) {
  return Qt(this, e).get(e);
}
function kl(e) {
  return Qt(this, e).has(e);
}
function Dl(e, t) {
  var r = Qt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = ql;
Te.prototype.delete = Fl;
Te.prototype.get = Ll;
Te.prototype.has = kl;
Te.prototype.set = Dl;
var Rl = "Expected a function";
function Qr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Rl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Qr.Cache || Te)(), r;
}
Qr.Cache = Te;
var Bl = 500;
function jl(e) {
  var t = Qr(e, function(n) {
    return r.size === Bl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ml = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nl = /\\(\\)?/g, Vl = jl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ml, function(r, n, i, s) {
    t.push(i ? s.replace(Nl, "$1") : n || r);
  }), t;
});
const Hl = Vl;
function Ri(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ul = 1 / 0, qn = Fe ? Fe.prototype : void 0, Cn = qn ? qn.toString : void 0;
function Zt(e) {
  if (typeof e == "string")
    return e;
  if (j(e))
    return Ri(e, Zt) + "";
  if (Yt(e))
    return Cn ? Cn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ul ? "-0" : t;
}
function Zr(e) {
  return e == null ? "" : Zt(e);
}
function en(e, t) {
  return j(e) ? e : Yr(e, t) ? [e] : Hl(Zr(e));
}
var Wl = 1 / 0;
function Tt(e) {
  if (typeof e == "string" || Yt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Wl ? "-0" : t;
}
function Bi(e, t, r) {
  t = en(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Tt(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Nr(i) && Mr(a, i) && (j(e) || hi(e)));
}
function Q(e, t) {
  return e != null && Bi(e, t, Xo);
}
const zl = {
  props: {
    spinner: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function fe(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, fe), n;
}
var Vt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Vt || {}), qe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(qe || {});
function J({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Mi(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return hr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return fe(l, { [0]() {
      return null;
    }, [1]() {
      return hr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return hr(o);
}
function hr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Ni(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let p = !1, v = [];
    for (let [d, h] of Object.entries(n))
      typeof h == "boolean" && (p = !0), h === !0 && v.push(d);
    p && (c["data-headlessui-state"] = v.join(" "));
  }
  if (o === "template") {
    if (u = ji(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [p, ...v] = u != null ? u : [];
      if (!Gl(p) || v.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((f) => f.trim()).filter((f, g, w) => w.indexOf(f) === g).sort((f, g) => f.localeCompare(g)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let d = Mi((a = p.props) != null ? a : {}, l), h = Fs(p, d);
      for (let f in d)
        f.startsWith("on") && (h.props || (h.props = {}), h.props[f] = d[f]);
      return h;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return V(o, Object.assign({}, l, c), { default: () => u });
}
function ji(e) {
  return e.flatMap((t) => t.type === Br ? ji(t.children) : [t]);
}
function Mi(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Ni(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Gl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Xl = 0;
function Kl() {
  return ++Xl;
}
function Ze() {
  return Kl();
}
var Vi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Vi || {});
function N(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Hi = Symbol("Context");
var G = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(G || {});
function Yl() {
  return tn() !== null;
}
function tn() {
  return z(Hi, null);
}
function Jl(e) {
  de(Hi, e);
}
var Ql = Object.defineProperty, Zl = (e, t, r) => t in e ? Ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Fn = (e, t, r) => (Zl(e, typeof t != "symbol" ? t + "" : t, r), r);
class eu {
  constructor() {
    Fn(this, "current", this.detect()), Fn(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let xt = new eu();
function _t(e) {
  if (xt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = N(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Or = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Pe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Pe || {}), Ui = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ui || {}), tu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(tu || {});
function ru(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Or)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Wi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Wi || {});
function nu(e, t = 0) {
  var r;
  return e === ((r = _t(e)) == null ? void 0 : r.body) ? !1 : fe(t, { [0]() {
    return e.matches(Or);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Or))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function ze(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let iu = ["textarea", "input"].join(",");
function su(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, iu)) != null ? r : !1;
}
function au(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Rt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? au(e) : e : ru(e);
  i.length > 0 && o.length > 1 && (o = o.filter((h) => !i.includes(h))), n = n != null ? n : a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, p = 0, v = o.length, d;
  do {
    if (p >= v || p + v <= 0)
      return 0;
    let h = u + p;
    if (t & 16)
      h = (h + v) % v;
    else {
      if (h < 0)
        return 3;
      if (h >= v)
        return 1;
    }
    d = o[h], d == null || d.focus(c), p += l;
  } while (d !== a.activeElement);
  return t & 6 && su(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function mr(e, t, r) {
  xt.isServer || le((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function ou(e, t, r = I(() => !0)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : N(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !nu(o, Wi.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  mr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), mr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, !0), mr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ht || {});
let $r = Y({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return J({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function lu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function uu(e, t, r) {
  xt.isServer || le((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var yt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yt || {});
function cu() {
  let e = y(0);
  return uu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function zi(e, t, r, n) {
  xt.isServer || le((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Gi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Xi(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let n = N(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var Ki = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ki || {});
let ht = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = I(() => _t(i)), a = y(!1);
  H(() => a.value = !0), me(() => a.value = !1), fu({ ownerDocument: s }, I(() => a.value && Boolean(e.features & 16)));
  let o = pu({ ownerDocument: s, container: i, initialFocus: I(() => e.initialFocus) }, I(() => a.value && Boolean(e.features & 2)));
  hu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: o }, I(() => a.value && Boolean(e.features & 8)));
  let l = cu();
  function u(d) {
    let h = N(i);
    !h || ((f) => f())(() => {
      fe(l.value, { [yt.Forwards]: () => {
        Rt(h, Pe.First, { skipElements: [d.relatedTarget] });
      }, [yt.Backwards]: () => {
        Rt(h, Pe.Last, { skipElements: [d.relatedTarget] });
      } });
    });
  }
  let c = y(!1);
  function p(d) {
    d.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function v(d) {
    if (!a.value)
      return;
    let h = Xi(e.containers);
    N(i) instanceof HTMLElement && h.add(N(i));
    let f = d.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (Yi(h, f) || (c.value ? Rt(N(i), fe(l.value, { [yt.Forwards]: () => Pe.Next, [yt.Backwards]: () => Pe.Previous }) | Pe.WrapAround, { relativeTo: d.target }) : d.target instanceof HTMLElement && ze(d.target)));
  }
  return () => {
    let d = {}, h = { ref: i, onKeydown: p, onFocusout: v }, { features: f, initialFocus: g, containers: w, ...$ } = e;
    return V(Br, [Boolean(f & 4) && V($r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ht.Focusable }), J({ ourProps: h, theirProps: { ...t, ...$ }, slot: d, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && V($r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ht.Focusable })]);
  };
} }), { features: Ki }), Ue = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Ue[0] !== t.target && (Ue.unshift(t.target), Ue = Ue.filter((r) => r != null && r.isConnected), Ue.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function du(e) {
  let t = y(Ue.slice());
  return lt([e], ([r], [n]) => {
    n === !0 && r === !1 ? Gi(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = Ue.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function fu({ ownerDocument: e }, t) {
  let r = du(t);
  H(() => {
    le(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && ze(r());
    }, { flush: "post" });
  }), me(() => {
    ze(r());
  });
}
function pu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return H(() => s.value = !0), me(() => s.value = !1), H(() => {
    lt([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = N(t);
      l && Gi(() => {
        var u, c;
        if (!s.value)
          return;
        let p = N(r), v = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === v) {
            i.value = v;
            return;
          }
        } else if (l.contains(v)) {
          i.value = v;
          return;
        }
        p ? ze(p) : Rt(l, Pe.First | Pe.NoScroll) === Ui.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function hu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  zi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = Xi(r);
    N(t) instanceof HTMLElement && o.add(N(t));
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Yi(o, u) ? (n.value = u, ze(u)) : (a.preventDefault(), a.stopPropagation(), ze(l)) : ze(n.value);
  }, !0);
}
function Yi(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let vr = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
function Ln(e, t = y(!0)) {
  le((r) => {
    var n;
    if (!t.value)
      return;
    let i = N(e);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = mt.get(i)) != null ? a : 1;
      if (o === 1 ? mt.delete(i) : mt.set(i, o - 1), o !== 1)
        return;
      let l = vr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, vr.delete(i));
    });
    let s = (n = mt.get(i)) != null ? n : 0;
    mt.set(i, s + 1), s === 0 && (vr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let Ji = Symbol("ForcePortalRootContext");
function mu() {
  return z(Ji, !1);
}
let Er = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return de(Ji, e.force), () => {
    let { force: n, ...i } = e;
    return J({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function vu(e) {
  let t = _t(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Qi = Y({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = I(() => _t(n)), s = mu(), a = z(Zi, null), o = y(s === !0 || a == null ? vu(n.value) : a.resolveTarget());
  return le(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), me(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return V(ui, { to: o.value }, J({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Zi = Symbol("PortalGroupContext"), gu = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Ls({ resolveTarget() {
    return e.target;
  } });
  return de(Zi, n), () => {
    let { target: i, ...s } = e;
    return J({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), es = Symbol("StackContext");
var Tr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Tr || {});
function yu() {
  return z(es, () => {
  });
}
function bu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = yu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  H(() => {
    lt(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), me(() => {
    t.value && s(1, e, r);
  }), de(es, s);
}
let ts = Symbol("DescriptionContext");
function wu() {
  let e = z(ts, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Su({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return de(ts, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Cp = Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ze()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = wu();
  return H(() => me(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [p, v]) => Object.assign(c, { [p]: W(v) }), {}), id: o };
    return J({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Ou(e) {
  let t = ks(e.getSnapshot());
  return me(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function er() {
  let e = [], t = { addEventListener(r, n, i, s) {
    return r.addEventListener(n, i, s), t.add(() => r.removeEventListener(n, i, s));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, group(r) {
    let n = er();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let i of e.splice(n, 1))
          i();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function $u(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function Eu() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function Tu() {
  if (!lu())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: !1 }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function xu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function _u(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let We = $u(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: er(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: _u(r) }, i = [Tu(), Eu(), xu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
We.subscribe(() => {
  let e = We.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && We.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && We.dispatch("TEARDOWN", r);
  }
});
function Iu(e, t, r) {
  let n = Ou(We), i = I(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return lt([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    We.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (We.dispatch("POP", o != null ? o : s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var Au = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Au || {});
let xr = Symbol("DialogContext");
function It(e) {
  let t = z(xr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }
  return t;
}
let Ft = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", rn = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ft }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ze()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  H(() => {
    a.value = !0;
  });
  let o = y(0), l = tn(), u = I(() => e.open === Ft && l !== null ? (l.value & G.Open) === G.Open : e.open), c = y(null), p = y(null), v = I(() => _t(c));
  if (i({ el: c, $el: c }), !(e.open !== Ft || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ft ? void 0 : e.open}`);
  let d = I(() => a.value && u.value ? 0 : 1), h = I(() => d.value === 0), f = I(() => o.value > 1), g = z(xr, null) !== null, w = I(() => f.value ? "parent" : "leaf"), $ = I(() => l !== null ? (l.value & G.Closing) === G.Closing : !1), A = I(() => g || $.value ? !1 : h.value), S = I(() => {
    var E, T, q;
    return (q = Array.from((T = (E = v.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? T : []).find((F) => F.id === "headlessui-portal-root" ? !1 : F.contains(N(p)) && F instanceof HTMLElement)) != null ? q : null;
  });
  Ln(S, A);
  let O = I(() => f.value ? !0 : h.value), b = I(() => {
    var E, T, q;
    return (q = Array.from((T = (E = v.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? T : []).find((F) => F.contains(N(p)) && F instanceof HTMLElement)) != null ? q : null;
  });
  Ln(b, O), bu({ type: "Dialog", enabled: I(() => d.value === 0), element: c, onUpdate: (E, T) => {
    if (T === "Dialog")
      return fe(E, { [Tr.Add]: () => o.value += 1, [Tr.Remove]: () => o.value -= 1 });
  } });
  let x = Su({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), P = y(null), _ = { titleId: P, panelRef: y(null), dialogState: d, setTitleId(E) {
    P.value !== E && (P.value = E);
  }, close() {
    t("close", !1);
  } };
  de(xr, _);
  function L() {
    var E, T, q;
    return [...Array.from((T = (E = v.value) == null ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? T : []).filter((F) => !(F === document.body || F === document.head || !(F instanceof HTMLElement) || F.contains(N(p)) || _.panelRef.value && F.contains(_.panelRef.value))), (q = _.panelRef.value) != null ? q : c.value];
  }
  let C = I(() => !(!h.value || f.value));
  ou(() => L(), (E, T) => {
    _.close(), Ce(() => T == null ? void 0 : T.focus());
  }, C);
  let M = I(() => !(f.value || d.value !== 0));
  zi((s = v.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    M.value && (E.defaultPrevented || E.key === Vi.Escape && (E.preventDefault(), E.stopPropagation(), _.close()));
  });
  let k = I(() => !($.value || d.value !== 0 || g));
  return Iu(v, k, (E) => {
    var T;
    return { containers: [...(T = E.containers) != null ? T : [], L] };
  }), le((E) => {
    if (d.value !== 0)
      return;
    let T = N(c);
    if (!T)
      return;
    let q = new ResizeObserver((F) => {
      for (let ge of F) {
        let U = ge.target.getBoundingClientRect();
        U.x === 0 && U.y === 0 && U.width === 0 && U.height === 0 && _.close();
      }
    });
    q.observe(T), E(() => q.disconnect());
  }), () => {
    let { id: E, open: T, initialFocus: q, ...F } = e, ge = { ...r, ref: c, id: E, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": P.value, "aria-describedby": x.value }, U = { open: d.value === 0 };
    return V(Er, { force: !0 }, () => [V(Qi, () => V(gu, { target: c.value }, () => V(Er, { force: !1 }, () => V(ht, { initialFocus: q, containers: L, features: h.value ? fe(w.value, { parent: ht.features.RestoreFocus, leaf: ht.features.All & ~ht.features.FocusLock }) : ht.features.None }, () => J({ ourProps: ge, theirProps: F, slot: U, attrs: r, slots: n, visible: d.value === 0, features: Vt.RenderStrategy | Vt.Static, name: "Dialog" }))))), V($r, { features: Ht.Hidden, ref: p })]);
  };
} });
Y({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Ze()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = It("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return J({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
Y({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Ze()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = It("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), H(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return V(Er, { force: !0 }, () => V(Qi, () => J({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let nn = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ze()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = It("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return J({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
Y({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Ze()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = It("DialogTitle");
  return H(() => {
    n.setTitleId(e.id), me(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return J({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Pu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function gr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Lt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var _r = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(_r || {});
function qu(e, t) {
  let r = er();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function kn(e, t, r, n, i, s) {
  let a = er(), o = s !== void 0 ? Pu(s) : () => {
  };
  return Lt(e, ...i), gr(e, ...t, ...r), a.nextFrame(() => {
    Lt(e, ...r), gr(e, ...n), a.add(qu(e, (l) => (Lt(e, ...n, ...t), gr(e, ...i), o(l))));
  }), a.add(() => Lt(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ne(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let sn = Symbol("TransitionContext");
var Cu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cu || {});
function Fu() {
  return z(sn, null) !== null;
}
function Lu() {
  let e = z(sn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ku() {
  let e = z(an, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let an = Symbol("NestingContext");
function tr(e) {
  return "children" in e ? tr(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function rs(e) {
  let t = y([]), r = y(!1);
  H(() => r.value = !0), me(() => r.value = !1);
  function n(s, a = qe.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (fe(a, { [qe.Unmount]() {
      t.value.splice(o, 1);
    }, [qe.Hidden]() {
      t.value[o].state = "hidden";
    } }), !tr(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, qe.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let ns = Vt.RenderStrategy, ut = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = y(0);
  function a() {
    s.value |= G.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~G.Opening, t("afterEnter");
  }
  function l() {
    s.value |= G.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~G.Closing, t("afterLeave");
  }
  if (!Fu() && Yl())
    return () => V(ct, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), p = y("visible"), v = I(() => e.unmount ? qe.Unmount : qe.Hidden);
  i({ el: c, $el: c });
  let { show: d, appear: h } = Lu(), { register: f, unregister: g } = ku(), w = { value: !0 }, $ = Ze(), A = { value: !1 }, S = rs(() => {
    !A.value && p.value !== "hidden" && (p.value = "hidden", g($), u());
  });
  H(() => {
    let k = f($);
    me(k);
  }), le(() => {
    if (v.value === qe.Hidden && $) {
      if (d && p.value !== "visible") {
        p.value = "visible";
        return;
      }
      fe(p.value, { hidden: () => g($), visible: () => f($) });
    }
  });
  let O = Ne(e.enter), b = Ne(e.enterFrom), x = Ne(e.enterTo), P = Ne(e.entered), _ = Ne(e.leave), L = Ne(e.leaveFrom), C = Ne(e.leaveTo);
  H(() => {
    le(() => {
      if (p.value === "visible") {
        let k = N(c);
        if (k instanceof Comment && k.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function M(k) {
    let E = w.value && !h.value, T = N(c);
    !T || !(T instanceof HTMLElement) || E || (A.value = !0, d.value && a(), d.value || l(), k(d.value ? kn(T, O, b, x, P, (q) => {
      A.value = !1, q === _r.Finished && o();
    }) : kn(T, _, L, C, P, (q) => {
      A.value = !1, q === _r.Finished && (tr(S) || (p.value = "hidden", g($), u()));
    })));
  }
  return H(() => {
    lt([d], (k, E, T) => {
      M(T), w.value = !1;
    }, { immediate: !0 });
  }), de(an, S), Jl(I(() => fe(p.value, { visible: G.Open, hidden: G.Closed }) | s.value)), () => {
    let { appear: k, show: E, enter: T, enterFrom: q, enterTo: F, entered: ge, leave: U, leaveFrom: dt, leaveTo: Pt, ...xe } = e, et = { ref: c }, _e = { ...xe, ...h && d && xt.isServer ? { class: Ds([r.class, xe.class, ...O, ...b]) } : {} };
    return J({ theirProps: _e, ourProps: et, slot: {}, slots: n, attrs: r, features: ns, visible: p.value === "visible", name: "TransitionChild" });
  };
} }), Du = ut, ct = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = tn(), s = I(() => e.show === null && i !== null ? (i.value & G.Open) === G.Open : e.show);
  le(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = rs(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: I(() => e.appear || !l.value) };
  return H(() => {
    le(() => {
      l.value = !1, s.value ? a.value = "visible" : tr(o) || (a.value = "hidden");
    });
  }), de(an, o), de(sn, u), () => {
    let c = Ni(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return J({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [V(Du, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: ns, visible: a.value === "visible", name: "Transition" });
  };
} });
const Ru = {
  props: {
    defaultTitle: {
      type: String,
      required: !1,
      default: ""
    },
    defaultText: {
      type: String,
      required: !1,
      default: ""
    },
    defaultPasswordText: {
      type: String,
      required: !1,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: !1,
      default: ""
    },
    confirmPasswordRoute: {
      type: String,
      required: !1,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: !1,
      default: ""
    }
  },
  data() {
    return {
      isOpen: !1,
      password: "",
      passwordError: "",
      submitting: !1
    };
  },
  computed: {
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmPassword ? m.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmPasswordOnce ? m.confirmModal.value.confirmPasswordOnce : !1;
    },
    confirmDanger: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmDanger ? m.confirmModal.value.confirmDanger : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = !0;
      let e = this.password;
      this.passwordError = "", ne.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = !1;
      });
    },
    handleSuccess(e) {
      m.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ne.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), m.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), m.clearConfirmModal();
    },
    setPassword(e) {
      this.password = e;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: rn,
      DialogPanel: nn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
};
function is(e, t) {
  t = en(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Tt(t[r++])];
  return r && r == n ? e : void 0;
}
function ye(e, t, r) {
  var n = e == null ? void 0 : is(e, t);
  return n === void 0 ? r : n;
}
var Bu = function() {
  try {
    var e = Qe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Dn = Bu;
function ss(e, t, r) {
  t == "__proto__" && Dn ? Dn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ju = Object.prototype, Mu = ju.hasOwnProperty;
function Nu(e, t, r) {
  var n = e[t];
  (!(Mu.call(e, t) && Jr(n, r)) || r === void 0 && !(t in e)) && ss(e, t, r);
}
function Vu(e, t, r, n) {
  if (!K(e))
    return e;
  t = en(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Tt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = K(c) ? c : Mr(t[i + 1]) ? [] : {});
    }
    Nu(o, l, u), o = o[l];
  }
  return e;
}
function $t(e, t, r) {
  return e == null ? e : Vu(e, t, r);
}
const Hu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    remember: {
      type: [Boolean, String],
      default: !1,
      required: !1
    },
    localStorage: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  data() {
    return {
      values: Object.assign({}, { ...this.default })
    };
  },
  beforeMount() {
    if (this.remember) {
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return ye(e.values, r);
        },
        set(t, r, n) {
          $t(e.values, r, n);
        }
      })
    ) : null;
  }
}, Uu = {
  props: {
    parsed: {
      type: Object,
      required: !0
    },
    raw: {
      type: Object,
      required: !0
    },
    remember: {
      type: Array,
      required: !0
    },
    localStorage: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      stores: Object.assign({}, { ...this.parsed, ...this.raw })
    };
  },
  beforeMount() {
    this.remember.forEach((e) => {
      let t = m.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      m.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
    });
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.stores, {
        ownKeys() {
          return Object.keys(e.stores);
        },
        get(t, r) {
          return ye(e.stores, r);
        },
        set(t, r, n) {
          $t(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Wu = function() {
  return ve.Date.now();
};
const yr = Wu;
var zu = /\s/;
function Gu(e) {
  for (var t = e.length; t-- && zu.test(e.charAt(t)); )
    ;
  return t;
}
var Xu = /^\s+/;
function Ku(e) {
  return e && e.slice(0, Gu(e) + 1).replace(Xu, "");
}
var Rn = 0 / 0, Yu = /^[-+]0x[0-9a-f]+$/i, Ju = /^0b[01]+$/i, Qu = /^0o[0-7]+$/i, Zu = parseInt;
function Ir(e) {
  if (typeof e == "number")
    return e;
  if (Yt(e))
    return Rn;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ku(e);
  var r = Ju.test(e);
  return r || Qu.test(e) ? Zu(e.slice(2), r ? 2 : 8) : Yu.test(e) ? Rn : +e;
}
var ec = "Expected a function", tc = Math.max, rc = Math.min;
function rr(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(ec);
  t = Ir(t) || 0, K(r) && (c = !!r.leading, p = "maxWait" in r, s = p ? tc(Ir(r.maxWait) || 0, t) : s, v = "trailing" in r ? !!r.trailing : v);
  function d(b) {
    var x = n, P = i;
    return n = i = void 0, u = b, a = e.apply(P, x), a;
  }
  function h(b) {
    return u = b, o = setTimeout(w, t), c ? d(b) : a;
  }
  function f(b) {
    var x = b - l, P = b - u, _ = t - x;
    return p ? rc(_, s - P) : _;
  }
  function g(b) {
    var x = b - l, P = b - u;
    return l === void 0 || x >= t || x < 0 || p && P >= s;
  }
  function w() {
    var b = yr();
    if (g(b))
      return $(b);
    o = setTimeout(w, f(b));
  }
  function $(b) {
    return o = void 0, v && n ? d(b) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : $(yr());
  }
  function O() {
    var b = yr(), x = g(b);
    if (n = arguments, i = this, l = b, x) {
      if (o === void 0)
        return h(l);
      if (p)
        return clearTimeout(o), o = setTimeout(w, t), d(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), a;
  }
  return O.cancel = A, O.flush = S, O;
}
const nc = {
  props: {
    url: {
      type: String,
      required: !0
    },
    method: {
      type: String,
      required: !1,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: !1,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    poll: {
      type: Number,
      required: !1,
      default: null
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    request: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: !1,
      default: !1
    },
    watchDebounce: {
      type: Number,
      required: !1,
      default: 0
    },
    watchValue: {
      validator() {
        return !0;
      },
      required: !1,
      default: null
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: !1,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: !0,
      handler() {
        this.processing = !0, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = rr(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = !0;
      const e = {};
      this.acceptHeader && (e.Accept = this.acceptHeader);
      const t = {
        url: this.url,
        method: this.method,
        headers: { ...e, ...this.headers }
      };
      Object.keys(this.request).length > 0 && (t.data = this.request), ne(t).then((r) => {
        this.response = r.data, this.processing = !1, this.$emit("success", r.data);
      }).catch(() => {
        this.processing = !1, this.$emit("error");
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, ic = {
  data() {
    return {
      isActivated: !0
    };
  },
  deactivated() {
    this.isActivated = !1;
  },
  activated() {
    this.isActivated = !0;
  },
  render() {
    return this.$slots.default({
      Dialog: rn,
      DialogPanel: nn,
      isActivated: this.isActivated
    });
  }
}, as = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    },
    opened: {
      type: Boolean,
      required: !0
    },
    closeOnEscape: {
      type: Boolean,
      required: !1,
      default: !0
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = y(null), n = y(null), i = y(null);
    return H(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Rs(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (B(), Oe("div", {
      ref_key: "root",
      ref: n
    }, [
      te(s.$slots, "default")
    ], 512));
  }
};
function re(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ke(e) {
  var t = re(e).Element;
  return e instanceof t || e instanceof Element;
}
function ee(e) {
  var t = re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function on(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ge = Math.max, Ut = Math.min, it = Math.round;
function Ar() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function os() {
  return !/^((?!chrome|android).)*safari/i.test(Ar());
}
function st(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && ee(e) && (i = e.offsetWidth > 0 && it(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && it(n.height) / e.offsetHeight || 1);
  var a = Ke(e) ? re(e) : window, o = a.visualViewport, l = !os() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, p = n.width / i, v = n.height / s;
  return {
    width: p,
    height: v,
    top: c,
    right: u + p,
    bottom: c + v,
    left: u,
    x: u,
    y: c
  };
}
function ln(e) {
  var t = re(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function sc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ac(e) {
  return e === re(e) || !ee(e) ? ln(e) : sc(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Re(e) {
  return ((Ke(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function un(e) {
  return st(Re(e)).left + ln(e).scrollLeft;
}
function ue(e) {
  return re(e).getComputedStyle(e);
}
function cn(e) {
  var t = ue(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function oc(e) {
  var t = e.getBoundingClientRect(), r = it(t.width) / e.offsetWidth || 1, n = it(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function lc(e, t, r) {
  r === void 0 && (r = !1);
  var n = ee(t), i = ee(t) && oc(t), s = Re(t), a = st(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pe(t) !== "body" || cn(s)) && (o = ac(t)), ee(t) ? (l = st(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = un(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ls(e) {
  var t = st(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function nr(e) {
  return pe(e) === "html" ? e : e.assignedSlot || e.parentNode || (on(e) ? e.host : null) || Re(e);
}
function us(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : ee(e) && cn(e) ? e : us(nr(e));
}
function wt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = us(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = re(n), a = i ? [s].concat(s.visualViewport || [], cn(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(wt(nr(a)));
}
function uc(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function Bn(e) {
  return !ee(e) || ue(e).position === "fixed" ? null : e.offsetParent;
}
function cc(e) {
  var t = /firefox/i.test(Ar()), r = /Trident/i.test(Ar());
  if (r && ee(e)) {
    var n = ue(e);
    if (n.position === "fixed")
      return null;
  }
  var i = nr(e);
  for (on(i) && (i = i.host); ee(i) && ["html", "body"].indexOf(pe(i)) < 0; ) {
    var s = ue(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ir(e) {
  for (var t = re(e), r = Bn(e); r && uc(r) && ue(r).position === "static"; )
    r = Bn(r);
  return r && (pe(r) === "html" || pe(r) === "body" && ue(r).position === "static") ? t : r || cc(e) || t;
}
var oe = "top", he = "bottom", ke = "right", be = "left", sr = "auto", ar = [oe, he, ke, be], at = "start", Et = "end", dc = "clippingParents", cs = "viewport", vt = "popper", fc = "reference", jn = /* @__PURE__ */ ar.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + Et]);
}, []), pc = /* @__PURE__ */ [].concat(ar, [sr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + Et]);
}, []), hc = "beforeRead", mc = "read", vc = "afterRead", gc = "beforeMain", yc = "main", bc = "afterMain", wc = "beforeWrite", Sc = "write", Oc = "afterWrite", Pr = [hc, mc, vc, gc, yc, bc, wc, Sc, Oc];
function $c(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function Ec(e) {
  var t = $c(e);
  return Pr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Tc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ae(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Ve = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', xc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Mn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function _c(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Mn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ae(Ve, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ae(Ve, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Pr.indexOf(t.phase) < 0 && console.error(Ae(Ve, t.name, '"phase"', "either " + Pr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ae(Ve, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ae(Ve, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ae(Ve, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ae(Ve, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Mn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ae(xc, String(t.name), n, n));
      });
    });
  });
}
function Ic(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function we(e) {
  return e.split("-")[0];
}
function Ac(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function Pc(e, t) {
  var r = re(e), n = Re(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = os();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + un(e),
    y: l
  };
}
function qc(e) {
  var t, r = Re(e), n = ln(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ge(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ge(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + un(e), l = -n.scrollTop;
  return ue(i || r).direction === "rtl" && (o += Ge(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Cc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && on(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Fc(e, t) {
  var r = st(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Nn(e, t, r) {
  return t === cs ? qr(Pc(e, r)) : Ke(t) ? Fc(t, r) : qr(qc(Re(e)));
}
function Lc(e) {
  var t = wt(nr(e)), r = ["absolute", "fixed"].indexOf(ue(e).position) >= 0, n = r && ee(e) ? ir(e) : e;
  return Ke(n) ? t.filter(function(i) {
    return Ke(i) && Cc(i, n) && pe(i) !== "body";
  }) : [];
}
function kc(e, t, r, n) {
  var i = t === "clippingParents" ? Lc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Nn(e, u, n);
    return l.top = Ge(c.top, l.top), l.right = Ut(c.right, l.right), l.bottom = Ut(c.bottom, l.bottom), l.left = Ge(c.left, l.left), l;
  }, Nn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function ot(e) {
  return e.split("-")[1];
}
function ds(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fs(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? we(n) : null, s = n ? ot(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case oe:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case he:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ke:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case be:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? ds(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case at:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Et:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function ps() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dc(e) {
  return Object.assign({}, ps(), e);
}
function Rc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function dn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? dc : o, u = r.rootBoundary, c = u === void 0 ? cs : u, p = r.elementContext, v = p === void 0 ? vt : p, d = r.altBoundary, h = d === void 0 ? !1 : d, f = r.padding, g = f === void 0 ? 0 : f, w = Dc(typeof g != "number" ? g : Rc(g, ar)), $ = v === vt ? fc : vt, A = e.rects.popper, S = e.elements[h ? $ : v], O = kc(Ke(S) ? S : S.contextElement || Re(e.elements.popper), l, c, a), b = st(e.elements.reference), x = fs({
    reference: b,
    element: A,
    strategy: "absolute",
    placement: i
  }), P = qr(Object.assign({}, A, x)), _ = v === vt ? P : b, L = {
    top: O.top - _.top + w.top,
    bottom: _.bottom - O.bottom + w.bottom,
    left: O.left - _.left + w.left,
    right: _.right - O.right + w.right
  }, C = e.modifiersData.offset;
  if (v === vt && C) {
    var M = C[i];
    Object.keys(L).forEach(function(k) {
      var E = [ke, he].indexOf(k) >= 0 ? 1 : -1, T = [oe, he].indexOf(k) >= 0 ? "y" : "x";
      L[k] += M[T] * E;
    });
  }
  return L;
}
var Vn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Bc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Un() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function jc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Hn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, d = {
      state: c,
      setOptions: function(w) {
        var $ = typeof w == "function" ? w(c.options) : w;
        f(), c.options = Object.assign({}, s, c.options, $), c.scrollParents = {
          reference: Ke(o) ? wt(o) : o.contextElement ? wt(o.contextElement) : [],
          popper: wt(l)
        };
        var A = Ec(Ac([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Ic([].concat(A, c.options.modifiers), function(C) {
            var M = C.name;
            return M;
          });
          if (_c(S), we(c.options.placement) === sr) {
            var O = c.orderedModifiers.find(function(C) {
              var M = C.name;
              return M === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ue(l), x = b.marginTop, P = b.marginRight, _ = b.marginBottom, L = b.marginLeft;
          [x, P, _, L].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!v) {
          var w = c.elements, $ = w.reference, A = w.popper;
          if (!Un($, A)) {
            process.env.NODE_ENV !== "production" && console.error(Vn);
            return;
          }
          c.rects = {
            reference: lc($, ir(A), c.options.strategy === "fixed"),
            popper: ls(A)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var S = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Bc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var b = c.orderedModifiers[O], x = b.fn, P = b.options, _ = P === void 0 ? {} : P, L = b.name;
            typeof x == "function" && (c = x({
              state: c,
              options: _,
              name: L,
              instance: d
            }) || c);
          }
        }
      },
      update: Tc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        f(), v = !0;
      }
    };
    if (!Un(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Vn), d;
    d.setOptions(u).then(function(g) {
      !v && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, $ = g.options, A = $ === void 0 ? {} : $, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: c,
            name: w,
            instance: d,
            options: A
          }), b = function() {
          };
          p.push(O || b);
        }
      });
    }
    function f() {
      p.forEach(function(g) {
        return g();
      }), p = [];
    }
    return d;
  };
}
var kt = {
  passive: !0
};
function Mc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = re(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, kt);
  }), o && l.addEventListener("resize", r.update, kt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, kt);
    }), o && l.removeEventListener("resize", r.update, kt);
  };
}
const Nc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Mc,
  data: {}
};
function Vc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = fs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Hc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vc,
  data: {}
};
var Uc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: it(t * i) / i || 0,
    y: it(r * i) / i || 0
  };
}
function Wn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, v = a.x, d = v === void 0 ? 0 : v, h = a.y, f = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  d = g.x, f = g.y;
  var w = a.hasOwnProperty("x"), $ = a.hasOwnProperty("y"), A = be, S = oe, O = window;
  if (u) {
    var b = ir(r), x = "clientHeight", P = "clientWidth";
    if (b === re(r) && (b = Re(r), ue(b).position !== "static" && o === "absolute" && (x = "scrollHeight", P = "scrollWidth")), b = b, i === oe || (i === be || i === ke) && s === Et) {
      S = he;
      var _ = p && b === O && O.visualViewport ? O.visualViewport.height : b[x];
      f -= _ - n.height, f *= l ? 1 : -1;
    }
    if (i === be || (i === oe || i === he) && s === Et) {
      A = ke;
      var L = p && b === O && O.visualViewport ? O.visualViewport.width : b[P];
      d -= L - n.width, d *= l ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: o
  }, u && Uc), M = c === !0 ? Wc({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  if (d = M.x, f = M.y, l) {
    var k;
    return Object.assign({}, C, (k = {}, k[S] = $ ? "0" : "", k[A] = w ? "0" : "", k.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", k));
  }
  return Object.assign({}, C, (t = {}, t[S] = $ ? f + "px" : "", t[A] = w ? d + "px" : "", t.transform = "", t));
}
function zc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ue(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: we(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Gc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zc,
  data: {}
};
function Xc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !ee(s) || !pe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Kc(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ee(i) || !pe(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Yc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xc,
  effect: Kc,
  requires: ["computeStyles"]
};
var Jc = [Nc, Hc, Gc, Yc], Qc = /* @__PURE__ */ jc({
  defaultModifiers: Jc
});
function Zc(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e, t, r) {
  return Ge(e, Ut(t, r));
}
function ed(e, t, r) {
  var n = Bt(e, t, r);
  return n > r ? r : n;
}
function td(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, v = r.tether, d = v === void 0 ? !0 : v, h = r.tetherOffset, f = h === void 0 ? 0 : h, g = dn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), w = we(t.placement), $ = ot(t.placement), A = !$, S = ds(w), O = Zc(S), b = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, L = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var k, E = S === "y" ? oe : be, T = S === "y" ? he : ke, q = S === "y" ? "height" : "width", F = b[S], ge = F + g[E], U = F - g[T], dt = d ? -P[q] / 2 : 0, Pt = $ === at ? x[q] : P[q], xe = $ === at ? -P[q] : -x[q], et = t.elements.arrow, _e = d && et ? ls(et) : {
        width: 0,
        height: 0
      }, Ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ps(), ft = Ie[E], qt = Ie[T], je = Bt(0, x[q], _e[q]), lr = A ? x[q] / 2 - dt - je - ft - L.mainAxis : Pt - je - ft - L.mainAxis, Ts = A ? -x[q] / 2 + dt + je + qt + L.mainAxis : xe + je + qt + L.mainAxis, ur = t.elements.arrow && ir(t.elements.arrow), xs = ur ? S === "y" ? ur.clientTop || 0 : ur.clientLeft || 0 : 0, mn = (k = C == null ? void 0 : C[S]) != null ? k : 0, _s = F + lr - mn - xs, Is = F + Ts - mn, vn = Bt(d ? Ut(ge, _s) : ge, F, d ? Ge(U, Is) : U);
      b[S] = vn, M[S] = vn - F;
    }
    if (o) {
      var gn, As = S === "x" ? oe : be, Ps = S === "x" ? he : ke, Me = b[O], Ct = O === "y" ? "height" : "width", yn = Me + g[As], bn = Me - g[Ps], cr = [oe, be].indexOf(w) !== -1, wn = (gn = C == null ? void 0 : C[O]) != null ? gn : 0, Sn = cr ? yn : Me - x[Ct] - P[Ct] - wn + L.altAxis, On = cr ? Me + x[Ct] + P[Ct] - wn - L.altAxis : bn, $n = d && cr ? ed(Sn, Me, On) : Bt(d ? Sn : yn, Me, d ? On : bn);
      b[O] = $n, M[O] = $n - Me;
    }
    t.modifiersData[n] = M;
  }
}
const rd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: td,
  requiresIfExists: ["offset"]
};
var nd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return nd[t];
  });
}
var id = {
  start: "end",
  end: "start"
};
function zn(e) {
  return e.replace(/start|end/g, function(t) {
    return id[t];
  });
}
function sd(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? pc : l, c = ot(n), p = c ? o ? jn : jn.filter(function(h) {
    return ot(h) === c;
  }) : ar, v = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  v.length === 0 && (v = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = v.reduce(function(h, f) {
    return h[f] = dn(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[we(f)], h;
  }, {});
  return Object.keys(d).sort(function(h, f) {
    return d[h] - d[f];
  });
}
function ad(e) {
  if (we(e) === sr)
    return [];
  var t = jt(e);
  return [zn(e), t, zn(t)];
}
function od(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, v = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, f = r.allowedAutoPlacements, g = t.options.placement, w = we(g), $ = w === g, A = l || ($ || !h ? [jt(g)] : ad(g)), S = [g].concat(A).reduce(function(_e, Ie) {
      return _e.concat(we(Ie) === sr ? sd(t, {
        placement: Ie,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: f
      }) : Ie);
    }, []), O = t.rects.reference, b = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, _ = S[0], L = 0; L < S.length; L++) {
      var C = S[L], M = we(C), k = ot(C) === at, E = [oe, he].indexOf(M) >= 0, T = E ? "width" : "height", q = dn(t, {
        placement: C,
        boundary: c,
        rootBoundary: p,
        altBoundary: v,
        padding: u
      }), F = E ? k ? ke : be : k ? he : oe;
      O[T] > b[T] && (F = jt(F));
      var ge = jt(F), U = [];
      if (s && U.push(q[M] <= 0), o && U.push(q[F] <= 0, q[ge] <= 0), U.every(function(_e) {
        return _e;
      })) {
        _ = C, P = !1;
        break;
      }
      x.set(C, U);
    }
    if (P)
      for (var dt = h ? 3 : 1, Pt = function(Ie) {
        var ft = S.find(function(qt) {
          var je = x.get(qt);
          if (je)
            return je.slice(0, Ie).every(function(lr) {
              return lr;
            });
        });
        if (ft)
          return _ = ft, "break";
      }, xe = dt; xe > 0; xe--) {
        var et = Pt(xe);
        if (et === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const ld = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: od,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Be = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ud = {
  components: {
    OnClickOutside: as
  },
  props: {
    spladeId: {
      type: String,
      required: !0
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    strategy: {
      type: String,
      default: "absolute",
      required: !1
    },
    inline: {
      type: Boolean,
      default: !1,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    },
    teleport: {
      type: Boolean,
      default: !1,
      required: !1
    },
    closeOnClick: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  data() {
    return {
      opened: !1,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await Ce();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Qc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [ld, rd],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = !1;
    }
  }
}, cd = { ref: "tooltip" };
function dd(e, t, r, n, i, s) {
  const a = jr("OnClickOutside");
  return B(), X(a, {
    style: Mt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: ci(() => [
      wr("div", {
        ref: "button",
        style: Mt(s.buttonStyle)
      }, [
        te(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      wr("div", cd, [
        te(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const fd = /* @__PURE__ */ Be(ud, [["render", dd]]), pd = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = z("$splade") || {}, r = z("$spladeOptions") || {};
    return (n, i) => W(t).isSsr ? (B(), X(ce, {
      key: e.keepAliveKey,
      html: W(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (B(), X(li, {
      key: 0,
      max: W(r).max_keep_alive
    }, [
      (B(), X(ce, {
        key: e.keepAliveKey,
        html: W(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function hs(e) {
  return e && e.length ? e[0] : void 0;
}
const hd = {
  inject: ["stack"],
  computed: {
    values() {
      return m.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return Q(e.values, t);
      },
      first(t) {
        return hs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, md = {
  props: {
    private: {
      type: Boolean,
      required: !1,
      default: !1
    },
    channel: {
      type: String,
      required: !0
    },
    listeners: {
      type: Array,
      required: !0
    }
  },
  emits: ["subscribed", "event"],
  data() {
    return {
      subscribed: !1,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription ? this.bindListeners() : console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
  },
  methods: {
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
          let a = null, o = !1, l = [];
          Z(r, (u) => {
            !K(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
          }), a ? m.visit(a) : o ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
            m.pushToast(u);
          }), this.$root.$emit(`event.${e}`, r);
        });
        this.subscriptions.push(t);
      });
    },
    unsubscribe() {
      this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
    }
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function vd() {
  this.__data__ = new Ee(), this.size = 0;
}
function gd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function yd(e) {
  return this.__data__.get(e);
}
function bd(e) {
  return this.__data__.has(e);
}
var wd = 200;
function Sd(e, t) {
  var r = this.__data__;
  if (r instanceof Ee) {
    var n = r.__data__;
    if (!Ot || n.length < wd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Te(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Se(e) {
  var t = this.__data__ = new Ee(e);
  this.size = t.size;
}
Se.prototype.clear = vd;
Se.prototype.delete = gd;
Se.prototype.get = yd;
Se.prototype.has = bd;
Se.prototype.set = Sd;
var Od = "__lodash_hash_undefined__";
function $d(e) {
  return this.__data__.set(e, Od), this;
}
function Ed(e) {
  return this.__data__.has(e);
}
function Wt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Te(); ++t < r; )
    this.add(e[t]);
}
Wt.prototype.add = Wt.prototype.push = $d;
Wt.prototype.has = Ed;
function Td(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function xd(e, t) {
  return e.has(t);
}
var _d = 1, Id = 2;
function ms(e, t, r, n, i, s) {
  var a = r & _d, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, v = !0, d = r & Id ? new Wt() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var h = e[p], f = t[p];
    if (n)
      var g = a ? n(f, h, p, t, e, s) : n(h, f, p, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      v = !1;
      break;
    }
    if (d) {
      if (!Td(t, function(w, $) {
        if (!xd(d, $) && (h === w || i(h, w, r, n, s)))
          return d.push($);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === f || i(h, f, r, n, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var Ad = ve.Uint8Array;
const Gn = Ad;
function Pd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function qd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Cd = 1, Fd = 2, Ld = "[object Boolean]", kd = "[object Date]", Dd = "[object Error]", Rd = "[object Map]", Bd = "[object Number]", jd = "[object RegExp]", Md = "[object Set]", Nd = "[object String]", Vd = "[object Symbol]", Hd = "[object ArrayBuffer]", Ud = "[object DataView]", Xn = Fe ? Fe.prototype : void 0, br = Xn ? Xn.valueOf : void 0;
function Wd(e, t, r, n, i, s, a) {
  switch (r) {
    case Ud:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Hd:
      return !(e.byteLength != t.byteLength || !s(new Gn(e), new Gn(t)));
    case Ld:
    case kd:
    case Bd:
      return Jr(+e, +t);
    case Dd:
      return e.name == t.name && e.message == t.message;
    case jd:
    case Nd:
      return e == t + "";
    case Rd:
      var o = Pd;
    case Md:
      var l = n & Cd;
      if (o || (o = qd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Fd, a.set(e, t);
      var c = ms(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Vd:
      if (br)
        return br.call(e) == br.call(t);
  }
  return !1;
}
function zd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Gd(e, t, r) {
  var n = t(e);
  return j(e) ? n : zd(n, r(e));
}
function vs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Xd() {
  return [];
}
var Kd = Object.prototype, Yd = Kd.propertyIsEnumerable, Kn = Object.getOwnPropertySymbols, Jd = Kn ? function(e) {
  return e == null ? [] : (e = Object(e), vs(Kn(e), function(t) {
    return Yd.call(e, t);
  }));
} : Xd;
const Qd = Jd;
function Yn(e) {
  return Gd(e, Gt, Qd);
}
var Zd = 1, ef = Object.prototype, tf = ef.hasOwnProperty;
function rf(e, t, r, n, i, s) {
  var a = r & Zd, o = Yn(e), l = o.length, u = Yn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var p = l; p--; ) {
    var v = o[p];
    if (!(a ? v in t : tf.call(t, v)))
      return !1;
  }
  var d = s.get(e), h = s.get(t);
  if (d && h)
    return d == t && h == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++p < l; ) {
    v = o[p];
    var w = e[v], $ = t[v];
    if (n)
      var A = a ? n($, w, v, t, e, s) : n(w, $, v, e, t, s);
    if (!(A === void 0 ? w === $ || i(w, $, r, n, s) : A)) {
      f = !1;
      break;
    }
    g || (g = v == "constructor");
  }
  if (f && !g) {
    var S = e.constructor, O = t.constructor;
    S != O && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var nf = Qe(ve, "DataView");
const Cr = nf;
var sf = Qe(ve, "Promise");
const Fr = sf;
var af = Qe(ve, "Set");
const Lr = af;
var of = Qe(ve, "WeakMap");
const kr = of;
var Jn = "[object Map]", lf = "[object Object]", Qn = "[object Promise]", Zn = "[object Set]", ei = "[object WeakMap]", ti = "[object DataView]", uf = Je(Cr), cf = Je(Ot), df = Je(Fr), ff = Je(Lr), pf = Je(kr), He = De;
(Cr && He(new Cr(new ArrayBuffer(1))) != ti || Ot && He(new Ot()) != Jn || Fr && He(Fr.resolve()) != Qn || Lr && He(new Lr()) != Zn || kr && He(new kr()) != ei) && (He = function(e) {
  var t = De(e), r = t == lf ? e.constructor : void 0, n = r ? Je(r) : "";
  if (n)
    switch (n) {
      case uf:
        return ti;
      case cf:
        return Jn;
      case df:
        return Qn;
      case ff:
        return Zn;
      case pf:
        return ei;
    }
  return t;
});
const ri = He;
var hf = 1, ni = "[object Arguments]", ii = "[object Array]", Dt = "[object Object]", mf = Object.prototype, si = mf.hasOwnProperty;
function vf(e, t, r, n, i, s) {
  var a = j(e), o = j(t), l = a ? ii : ri(e), u = o ? ii : ri(t);
  l = l == ni ? Dt : l, u = u == ni ? Dt : u;
  var c = l == Dt, p = u == Dt, v = l == u;
  if (v && Sr(e)) {
    if (!Sr(t))
      return !1;
    a = !0, c = !1;
  }
  if (v && !c)
    return s || (s = new Se()), a || gi(e) ? ms(e, t, r, n, i, s) : Wd(e, t, l, r, n, i, s);
  if (!(r & hf)) {
    var d = c && si.call(e, "__wrapped__"), h = p && si.call(t, "__wrapped__");
    if (d || h) {
      var f = d ? e.value() : e, g = h ? t.value() : t;
      return s || (s = new Se()), i(f, g, r, n, s);
    }
  }
  return v ? (s || (s = new Se()), rf(e, t, r, n, i, s)) : !1;
}
function or(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Le(e) && !Le(t) ? e !== e && t !== t : vf(e, t, r, n, or, i);
}
var gf = 1, yf = 2;
function bf(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var p = new Se();
      if (n)
        var v = n(u, c, l, e, t, p);
      if (!(v === void 0 ? or(c, u, gf | yf, n, p) : v))
        return !1;
    }
  }
  return !0;
}
function gs(e) {
  return e === e && !K(e);
}
function wf(e) {
  for (var t = Gt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, gs(i)];
  }
  return t;
}
function ys(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Sf(e) {
  var t = wf(e);
  return t.length == 1 && t[0][2] ? ys(t[0][0], t[0][1]) : function(r) {
    return r === e || bf(r, e, t);
  };
}
function Of(e, t) {
  return e != null && t in Object(e);
}
function $f(e, t) {
  return e != null && Bi(e, t, Of);
}
var Ef = 1, Tf = 2;
function xf(e, t) {
  return Yr(e) && gs(t) ? ys(Tt(e), t) : function(r) {
    var n = ye(r, e);
    return n === void 0 && n === t ? $f(r, e) : or(t, n, Ef | Tf);
  };
}
function _f(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function If(e) {
  return function(t) {
    return is(t, e);
  };
}
function Af(e) {
  return Yr(e) ? _f(Tt(e)) : If(e);
}
function At(e) {
  return typeof e == "function" ? e : e == null ? bi : typeof e == "object" ? j(e) ? xf(e[0], e[1]) : Sf(e) : Af(e);
}
function Pf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!zt(t)) {
      var s = At(r);
      t = Gt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function qf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ai = 1 / 0, Cf = 17976931348623157e292;
function Ff(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ir(e), e === ai || e === -ai) {
    var t = e < 0 ? -1 : 1;
    return t * Cf;
  }
  return e === e ? e : 0;
}
function fn(e) {
  var t = Ff(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Lf = Math.max;
function kf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : fn(r);
  return i < 0 && (i = Lf(n + i, 0)), qf(e, At(t), i);
}
var Df = Pf(kf);
const pn = Df, Rf = {
  props: {
    form: {
      type: Object,
      required: !0
    },
    field: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      required: !0
    },
    filepond: {
      type: [Boolean, Object],
      required: !1,
      default: !0
    },
    jsFilepondOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    preview: {
      type: Boolean,
      required: !1,
      default: !1
    },
    server: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    accept: {
      type: Array,
      required: !1,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    existingSuffix: {
      type: String,
      required: !1,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: !1,
      default: "_order"
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: !1
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? se(e) ? e : j(e) ? e.map(this.extractMetadataFromExistingFile) : K(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-exif-orientation")), e.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const v = ne.CancelToken.source();
              return ne({
                url: a.preview_url,
                method: "GET",
                cancelToken: v.token,
                responseType: "blob"
              }).then((d) => {
                const h = new File([d.data], a.name, { type: a.type });
                o(h);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  v.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, p, v) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const f = ne.CancelToken.source();
            ne({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: f.token,
              onUploadProgress: (g) => {
                p(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var w;
              axios.isCancel(g) ? v() : c((w = g.response) == null ? void 0 : w.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ne({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = !1), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = pn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, Bf = { ref: "file" };
function jf(e, t, r, n, i, s) {
  return B(), Oe("div", Bf, [
    te(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Mf = /* @__PURE__ */ Be(Rf, [["render", jf]]), Nf = {
  inject: ["stack"],
  computed: {
    values() {
      return m.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return Q(e.values, t);
      },
      ...this.values
    });
  }
};
function hn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ws(t, bs(r, n), e[n]);
  return t;
}
function bs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ws(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ws(e, bs(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  hn(r, e, t);
}
var Vf = "[object Boolean]";
function Ss(e) {
  return e === !0 || e === !1 || Le(e) && De(e) == Vf;
}
function Os(e, t) {
  var r = {};
  return t = At(t), Vr(e, function(n, i, s) {
    ss(r, i, t(n, i, s));
  }), r;
}
function $s(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function tt(e, t, r) {
  return e = Zr(e), r = r == null ? 0 : $s(fn(r), 0, e.length), t = Zt(t), e.slice(r, r + t.length) == t;
}
const Hf = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: !0,
      default: ""
    },
    action: {
      type: String,
      required: !1,
      default() {
        return m.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: !1,
      default: "POST"
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: !1,
      default: ""
    },
    confirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    cancelButton: {
      type: String,
      required: !1,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: !1,
      default: !1
    },
    stay: {
      type: Boolean,
      require: !1,
      default: !1
    },
    restoreOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
    },
    resetOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
    },
    scrollOnError: {
      type: Boolean,
      required: !1,
      default: !0
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: !1,
      default: !1
    },
    escapeValidationMessages: {
      type: Boolean,
      required: !1,
      default: !0
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    },
    debounce: {
      type: Number,
      required: !1,
      default: 0
    },
    acceptHeader: {
      type: String,
      required: !1,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: !1,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      processingInBackground: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: !1,
      recentlyUnsuccessful: !1,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null,
      response: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return Os(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = rr(() => {
      this.request(this.background);
    }, this.debounce);
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === !0 ? this.$watch("values", () => {
      this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: !0 }) : j(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: !0 });
    }), this.isMounted = !0;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $fileAsUrl(e) {
      const t = this.values[e];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, !1), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e, t) {
      return $t(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = !0;
      if (e._flatpickr && (t = !1), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = !1), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        Ss(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton,
        !!this.requirePassword,
        this.requirePasswordOnce,
        !!this.confirmDanger
      ).then((t) => {
        if (!this.requirePassword) {
          this.request();
          return;
        }
        this.method.toUpperCase() !== "GET" && t && this.$put(
          se(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
          t
        ), this.request();
      }).catch(() => {
      });
    },
    async request(e) {
      if (typeof e > "u" && (e = !1), this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
      await this.$nextTick(), this.background ? this.processingInBackground = !0 : this.processing = !0, this.response = null, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = !1, this.recentlyUnsuccessful = !1, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : hn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      m.request(this.action, n, t, { ...r, ...this.headers }).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = pn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
        );
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            const n = [
              "$all",
              "$attrs",
              "$put",
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "$response",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ];
            return r === "$response" ? e.response : n.includes(r) || tt(r, "__v_") ? e[r] : (!e.isMounted && !Q(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), ye(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Uf = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    jsFlatpickrOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: !1,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: !0 });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Wf = { ref: "input" };
function zf(e, t, r, n, i, s) {
  return B(), Oe("div", Wf, [
    te(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Gf = /* @__PURE__ */ Be(Uf, [["render", zf]]), Xf = {
  components: { Render: ce },
  props: {
    name: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return m.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: !1,
      default: !0
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, m.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Kf(e, t, r, n, i, s) {
  const a = jr("Render");
  return i.html ? (B(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? te(e.$slots, "default", { key: 1 }) : Rr("", !0);
}
const Yf = /* @__PURE__ */ Be(Xf, [["render", Kf]]), Jf = ["href", "onClick"], Qf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !1,
      default: "#"
    },
    method: {
      type: String,
      required: !1,
      default: "GET"
    },
    data: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: !1,
      default: !1
    },
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
    },
    confirmText: {
      type: String,
      required: !1,
      default: ""
    },
    confirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    cancelButton: {
      type: String,
      required: !1,
      default: ""
    },
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    slideover: {
      type: Boolean,
      required: !1,
      default: !1
    },
    away: {
      type: Boolean,
      required: !1,
      default: !1
    },
    keepModal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = z("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      m.confirm(
        Ss(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
      ).then((a) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        a && (n.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const o = r > 0 && t.keepModal;
      if (t.modal && !o)
        return m.modal(t.href);
      if (t.slideover && !o)
        return m.slideover(t.href);
      if (tt(t.href, "#")) {
        if (m.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = m.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? m.replace(t.href, u) : m.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : hn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(se(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), m.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (B(), Oe("a", {
      href: e.href,
      onClick: Bs(i, ["prevent"])
    }, [
      te(a.$slots, "default")
    ], 8, Jf));
  }
}, Zf = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: !1,
      default: !0
    },
    type: {
      type: String,
      required: !0
    },
    stack: {
      type: Number,
      required: !0
    },
    onTopOfStack: {
      type: Boolean,
      required: !1,
      default: !1
    },
    maxWidth: {
      type: String,
      required: !1,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    },
    position: {
      type: String,
      required: !1,
      default: (e) => e.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: !1,
      default: null
    },
    animate: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: !0,
      isOpen: !1
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(!0);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      animate: this.staticAnimate,
      position: this.position,
      Dialog: rn,
      DialogPanel: nn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, ep = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: !0
    },
    html: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !1,
      default: "modal"
    },
    opened: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return m.registerPreloadedModal(t.name, t.html, t.type), t.opened && m.openPreloadedModal(t.name), () => {
    };
  }
}, tp = {
  components: { Render: ce },
  props: {
    name: {
      type: String,
      required: !0
    },
    on: {
      type: Array,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return m.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: !1,
      default: null
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: !1
    };
  },
  mounted() {
    this.on.forEach((e) => {
      this.$splade.on(e, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = !0, m.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function rp(e, t, r, n, i, s) {
  const a = jr("Render");
  return i.html ? (B(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? te(e.$slots, "placeholder", { key: 1 }) : te(e.$slots, "default", { key: 2 });
}
const np = /* @__PURE__ */ Be(tp, [["render", rp]]), ip = {
  props: {
    script: {
      type: String,
      required: !0
    }
  },
  mounted() {
    var e = new Function("obj", "with (obj) { " + this.script + "}");
    e = e.bind(this, this), e(this.script);
  },
  render() {
    return "";
  }
};
function sp(e, t) {
  var r = -1, n = zt(e) ? Array(e.length) : [];
  return Hr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function Es(e, t) {
  var r = j(e) ? Ri : sp;
  return r(e, At(t));
}
const ap = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    jsChoicesOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: [String, Number, Array],
      required: !1
    },
    placeholder: {
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    },
    remoteUrl: {
      type: String,
      required: !1,
      default: null
    },
    optionValue: {
      type: String,
      required: !1,
      default: null
    },
    optionLabel: {
      type: String,
      required: !1,
      default: null
    },
    remoteRoot: {
      type: String,
      required: !1,
      default: null
    },
    selectFirstRemoteOption: {
      type: Boolean,
      required: !1,
      default: !1
    },
    resetOnNewRemoteUrl: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: !1
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : !1 : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && j(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.stack > 0 && this.element.addEventListener("change", () => {
      this.element.blur();
    }), this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    async setOptionsFromRemote(e) {
      this.destroyChoicesInstance(), this.resetOnNewRemoteUrl && this.$emit("update:modelValue", this.multiple ? [] : "");
      let t = [];
      this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e, t);
      var r, n = this.element.options.length - 1;
      for (r = n; r >= 0; r--)
        this.element.remove(r);
      let i = !1;
      if (Z(t, (s) => {
        var a = document.createElement("option");
        a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && s.value !== "" && (i = !0), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
      }), !i && this.selectFirstRemoteOption) {
        const s = this.placeholder ? t[1] : t[0];
        s && (this.$emit("update:modelValue", this.multiple ? [s.value] : s.value), await this.$nextTick()), i = !0;
      }
      if (i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
        return this.initChoices(this.element).then(() => {
          this.loading = !1;
        });
      i ? this.element.value = this.modelValue : this.$nextTick(() => {
        this.element.selectedIndex = 0;
      });
    },
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = !0, ne({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.setOptionsFromRemote(this.remoteRoot ? ye(e.data, this.remoteRoot) : e.data);
      }).catch(() => {
        this.setOptionsFromRemote([]);
      }).finally(() => {
        this.loading = !1;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener, { capture: !0 }), this.headlessListener = null), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = j(e);
      if (!r && K(e))
        if (this.optionValue && this.optionLabel) {
          let n = ye(e, this.optionValue);
          se(n) || (n = `${n}`), t.push({
            value: n,
            label: ye(e, this.optionLabel)
          });
        } else
          Z(e, (n, i) => {
            se(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = Es(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return pn(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                if (!n.choicesInstance)
                  return;
                const l = n.choicesInstance.dropdown.isActive, u = n.choicesInstance.containerOuter.element.contains(o.target);
                !l && u ? n.choicesInstance.showDropdown() : l && !u && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: !0 })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(!0);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, op = { ref: "select" };
function lp(e, t, r, n, i, s) {
  return B(), Oe("div", op, [
    te(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const up = /* @__PURE__ */ Be(ap, [["render", lp]]), cp = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Os(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return Q(t, i);
      },
      hasShared(i) {
        return Q(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function dp(e, t, r) {
  e = Zr(e), t = Zt(t);
  var n = e.length;
  r = r === void 0 ? n : $s(fn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function fp(e, t) {
  var r = [];
  return Hr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function pp(e, t) {
  var r = j(e) ? vs : fp;
  return r(e, At(t));
}
function oi(e, t) {
  return or(e, t);
}
const hp = {
  inject: ["stack"],
  props: {
    baseUrl: {
      type: String,
      required: !1,
      default() {
        return window.location.pathname;
      }
    },
    striped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    columns: {
      type: Object,
      required: !0
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: !0
    },
    searchDebounce: {
      type: Number,
      required: !1,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: !1,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: !1,
      processingAction: !1
    };
  },
  computed: {
    columnsAreToggled() {
      return !oi(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = rr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Z(e, (r, n) => {
      if (tt(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Z(e, (t, r) => {
        tt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = pp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Es(r, (i) => i.key).sort();
      oi(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Ce(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!dp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], j(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (tt(e, "perPage") || tt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      Z(e, (u, c) => {
        if (!j(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((p, v) => {
          n[`${c}[${v}]`] = p;
        });
      });
      let i = "";
      Z(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : m.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": m.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      m.replace(s, o).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Ce(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = !1);
      let a = null;
      if (t)
        try {
          a = await m.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = se(s) && s ? s : "password";
        o[l] = a;
      }
      m.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = j(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? !0 : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, mp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ui
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function vp(e, t, r, n, i, s) {
  return js((B(), X(Ms(i.isMounted ? i.Teleport : "div"), Ns(Vs(e.$attrs)), {
    default: ci(() => [
      te(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Hs, i.isMounted]
  ]);
}
const gp = /* @__PURE__ */ Be(mp, [["render", vp]]), yp = {
  props: {
    autosize: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: [String, Number],
      required: !1
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        Ce(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, bp = { ref: "textarea" };
function wp(e, t, r, n, i, s) {
  return B(), Oe("div", bp, [
    te(e.$slots, "default")
  ], 512);
}
const Sp = /* @__PURE__ */ Be(yp, [["render", wp]]), Op = {
  props: {
    toastKey: {
      type: Number,
      required: !0
    },
    autoDismiss: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: !0
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(!1);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, $p = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Ep = {
  computed: {
    toasts: function() {
      return m.toastsReversed.value;
    },
    hasBackdrop: function() {
      return m.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: $p,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ce,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Tp = {
  props: {
    default: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : !1;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && hs(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, xp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, _p = {
  props: {
    backendRoute: {
      type: String,
      required: !0
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    initialInstance: {
      type: String,
      required: !0
    },
    initialSignature: {
      type: String,
      required: !0
    },
    methods: {
      type: Array,
      required: !0
    },
    originalUrl: {
      type: String,
      required: !0
    },
    verb: {
      type: String,
      required: !0
    }
  },
  data() {
    return {
      instance: this.initialInstance,
      signature: this.initialSignature,
      values: Object.assign({}, this.default)
    };
  },
  render() {
    const e = this, t = {
      props: new Proxy(this.values, {
        ownKeys: function() {
          return Object.keys(e.values);
        },
        get: (r, n) => ye(e.values, n),
        set: (r, n, i) => {
          $t(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && ye(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await ne.post(this.backendRoute, {
            instance: this.instance,
            signature: this.signature,
            url: this.originalUrl,
            verb: this.verb,
            props: this.values,
            method: r,
            data: n
          }, { headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "text/html, application/xhtml+xml"
          } });
        } catch (s) {
          m.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, Z(i.data.data, (s, a) => {
          $t(this.values, a, s);
        }), i.data.redirect ? m.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          m.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Ip = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && Ce(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", rr(i, 100)), i();
  }
}, Dr = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Dr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Dr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Fp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Q(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Q(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Q(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Q(t, "link_component") ? t.link_component : "Link", t.progress_bar = Q(t, "progress_bar") ? t.progress_bar : !1, t.components = Q(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, zl).component(`${r}Confirm`, Ru).component(`${r}DataStores`, Uu).component(`${r}Data`, Hu).component(`${r}Defer`, nc).component(`${r}Dialog`, ic).component(`${r}Dropdown`, fd).component(`${r}DynamicHtml`, pd).component(`${r}Errors`, hd).component(`${r}Event`, md).component(`${r}File`, Mf).component(`${r}Flash`, Nf).component(`${r}Form`, Hf).component(`${r}Input`, Gf).component(`${r}VueBridge`, _p).component(`${r}Lazy`, Yf).component(`${r}Modal`, Zf).component(`${r}OnClickOutside`, as).component(`${r}PreloadedModal`, ep).component(`${r}Rehydrate`, np).component(`${r}Render`, ce).component(`${r}Script`, ip).component(`${r}Select`, up).component(`${r}State`, cp).component(`${r}Table`, hp).component(`${r}Teleport`, gp).component(`${r}Textarea`, Sp).component(`${r}Toast`, Op).component(`${r}Toasts`, Ep).component(`${r}Toggle`, Tp).component(`${r}Transition`, xp).component(t.link_component, Qf).directive(`${r}PreserveScroll`, Ip), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      K(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        Q(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Dr.init(t.progress_bar);
    }
    Z(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Lp(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  m as Splade,
  Wo as SpladeApp,
  Fp as SpladePlugin,
  qp as renderSpladeApp,
  Lp as startServer
};
