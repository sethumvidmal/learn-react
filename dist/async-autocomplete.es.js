import Ce, { useState as Q, useEffect as dr } from "react";
import { Autocomplete as vr, TextField as pr, CircularProgress as gr } from "@mui/material";
var ee = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function hr() {
  if (Pe) return W;
  Pe = 1;
  var R = Ce, E = Symbol.for("react.element"), C = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, _ = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(c, l, j) {
    var g, m = {}, S = null, L = null;
    j !== void 0 && (S = "" + j), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (L = l.ref);
    for (g in l) b.call(l, g) && !T.hasOwnProperty(g) && (m[g] = l[g]);
    if (c && c.defaultProps) for (g in l = c.defaultProps, l) m[g] === void 0 && (m[g] = l[g]);
    return { $$typeof: E, type: c, key: S, ref: L, props: m, _owner: _.current };
  }
  return W.Fragment = C, W.jsx = O, W.jsxs = O, W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function yr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var R = Ce, E = Symbol.for("react.element"), C = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), re = Symbol.iterator, je = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[je];
      return typeof r == "function" ? r : null;
    }
    var x = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Fe = !1, De = !1, Ie = !1, We = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === T || We || e === _ || e === j || e === g || Ie || e === L || Ae || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === O || e.$$typeof === c || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case C:
          return "Portal";
        case T:
          return "Profiler";
        case _:
          return "StrictMode";
        case j:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ne(r) + ".Consumer";
          case O:
            var t = e;
            return ne(t._context) + ".Provider";
          case l:
            return Ye(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case S: {
            var i = e, u = i._payload, o = i._init;
            try {
              return y(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, ae, oe, ie, ue, se, le, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ue() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: ue
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = x.ReactCurrentDispatcher, J;
    function U(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, V;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ve();
    }
    function de(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (p) {
              n = p;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, h), h;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = u, Ue(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", w = A ? U(A) : "";
      return typeof e == "function" && V.set(e, w), w;
    }
    function Me(e, r, t) {
      return de(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ne(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case j:
          return U("Suspense");
        case g:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Me(e.render);
          case m:
            return M(e.type, r, t);
          case S: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, ve = {}, pe = x.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(D);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, N(i), d("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Je = Array.isArray;
    function z(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ge(e);
    }
    var I = x.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, K;
    K = {};
    function Ge(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = y(I.current.type);
        K[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(I.current.type), e.ref), K[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), Ge(r) && (v = r.ref, He(r, i));
        for (u in r)
          D.call(r, u) && !Ke.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), v && Qe(o, f);
        }
        return er(e, a, v, i, n, I.current, o);
      }
    }
    var G = x.ReactCurrentOwner, me = x.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Ee() {
      {
        if (G.current) {
          var e = y(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Re = {};
    function nr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && _e(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && _e(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = y(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = tr();
          v ? a += v : a += Ee();
          var s;
          e === null ? s = "null" : z(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = rr(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (z(h)) {
                for (var A = 0; A < h.length; A++)
                  Te(h[A], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(h, e);
        }
        if (D.call(r, "key")) {
          var w = y(e), p = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), Z = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[w + Z]) {
            var fr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, w, fr, w), Oe[w + Z] = !0;
          }
        }
        return e === b ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Se(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    $.Fragment = b, $.jsx = sr, $.jsxs = lr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ee.exports = hr() : ee.exports = yr();
var Y = ee.exports;
function Er() {
  const [R, E] = Q(!1), [C, b] = Q([]), [_, T] = Q(!1), O = async () => {
    try {
      T(!0);
      const l = await (await fetch("https://dummyjson.com/users")).json();
      b(l.users || []);
    } catch (c) {
      console.error(c.message), b([]);
    } finally {
      T(!1);
    }
  };
  return dr(() => {
    R && C.length === 0 && O();
  }, [R]), /* @__PURE__ */ Y.jsx(
    vr,
    {
      open: R,
      fullWidth: !0,
      size: "small",
      onOpen: () => E(!0),
      onClose: () => E(!1),
      getOptionLabel: (c) => c.firstName,
      options: C,
      loading: _,
      renderInput: (c) => {
        var l;
        return /* @__PURE__ */ Y.jsx(
          pr,
          {
            ...c,
            size: "small",
            label: "Select User",
            fullWidth: !0,
            slotProps: {
              input: {
                ...c.InputProps,
                endAdornment: /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
                  _ ? /* @__PURE__ */ Y.jsx(gr, { color: "inherit", size: 20 }) : null,
                  (l = c.InputProps) == null ? void 0 : l.endAdornment
                ] })
              }
            }
          }
        );
      }
    }
  );
}
export {
  Er as default
};
