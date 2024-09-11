import B, { useState as ee, useEffect as dr } from "react";
import { Autocomplete as vr, TextField as pr, CircularProgress as gr } from "@mui/material";
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function hr() {
  if (Ce) return $;
  Ce = 1;
  var m = B, g = Symbol.for("react.element"), b = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, T = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(f, c, j) {
    var h, _ = {}, w = null, L = null;
    j !== void 0 && (w = "" + j), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (h in c) R.call(c, h) && !O.hasOwnProperty(h) && (_[h] = c[h]);
    if (f && f.defaultProps) for (h in c = f.defaultProps, c) _[h] === void 0 && (_[h] = c[h]);
    return { $$typeof: g, type: f, key: w, ref: L, props: _, _owner: T.current };
  }
  return $.Fragment = b, $.jsx = S, $.jsxs = S, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function yr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var m = B, g = Symbol.for("react.element"), b = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, je = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[je];
      return typeof r == "function" ? r : null;
    }
    var x = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Fe = !1, De = !1, Ie = !1, We = !1, ne;
    ne = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === O || We || e === T || e === j || e === h || Ie || e === L || Ae || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === S || e.$$typeof === f || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case b:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return ae(r) + ".Consumer";
          case S:
            var t = e;
            return ae(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return E(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, oe, ie, se, ue, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Le() {
      {
        if (D === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: oe
            }),
            info: C({}, e, {
              value: ie
            }),
            warn: C({}, e, {
              value: se
            }),
            error: C({}, e, {
              value: ue
            }),
            group: C({}, e, {
              value: le
            }),
            groupCollapsed: C({}, e, {
              value: ce
            }),
            groupEnd: C({}, e, {
              value: fe
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = x.ReactCurrentDispatcher, q;
    function U(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var K = !1, V;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ve();
    }
    function ve(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, Le();
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
`), u = a.length - 1, l = v.length - 1; u >= 1 && l >= 0 && a[u] !== v[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== v[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== v[l]) {
                    var y = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, y), y;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", P = A ? U(A) : "";
      return typeof e == "function" && V.set(e, P), P;
    }
    function Me(e, r, t) {
      return ve(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ne(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case j:
          return U("Suspense");
        case h:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case _:
            return M(e.type, r, t);
          case w: {
            var n = e, i = n._payload, s = n._init;
            try {
              return M(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, pe = {}, ge = x.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(I);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (N(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, N(i), d("Failed %s type: %s", t, a.message), N(null));
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
    function Ke(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), he(e);
    }
    var W = x.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, me, G;
    G = {};
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = E(W.current.type);
        G[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(W.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          me || (me = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
        var s, o = {}, a = null, v = null;
        t !== void 0 && (ye(t), a = "" + t), Xe(r) && (ye(r.key), a = "" + r.key), Ge(r) && (v = r.ref, He(r, i));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), v && Qe(o, l);
        }
        return er(e, a, v, i, n, W.current, o);
      }
    }
    var X = x.ReactCurrentOwner, be = x.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Re() {
      {
        if (X.current) {
          var e = E(X.current.type);
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
    var _e = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + E(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Te(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && Te(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = E(r);
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
    var Se = {};
    function we(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = tr();
          v ? a += v : a += Re();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === g ? (u = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = rr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (z(y)) {
                for (var A = 0; A < y.length; A++)
                  Oe(y[A], e);
                Object.freeze && Object.freeze(y);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(y, e);
        }
        if (I.call(r, "key")) {
          var P = E(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[P + Q]) {
            var cr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, P, cr, P), Se[P + Q] = !0;
          }
        }
        return e === R ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    Y.Fragment = R, Y.jsx = ur, Y.jsxs = lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = hr() : re.exports = yr();
var F = re.exports;
class Er extends B.Component {
  constructor(g) {
    super(g), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(g) {
    return { hasError: !0 };
  }
  componentDidCatch(g, b) {
    console.error("Error caught by ErrorBoundary:", g, b);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ F.jsx("h1", { children: "Something went wrong." }) : this.props.children;
  }
}
const Rr = () => {
  console.log("AsyncAutocomplete rendering");
  const [m, g] = ee(!1), [b, R] = ee([]), [T, O] = ee(!1), S = async () => {
    try {
      console.log("Fetching options"), O(!0);
      const c = await (await fetch("https://dummyjson.com/users")).json();
      console.log("Fetched data:", c), R(c.users || []);
    } catch (f) {
      console.error("Error fetching options:", f.message), R([]);
    } finally {
      O(!1);
    }
  };
  return dr(() => {
    console.log("useEffect triggered", m, b.length), m && b.length === 0 && S();
  }, [m]), /* @__PURE__ */ F.jsx(Er, { children: /* @__PURE__ */ F.jsx(
    vr,
    {
      open: m,
      onOpen: () => g(!0),
      onClose: () => g(!1),
      getOptionLabel: (f) => f.firstName,
      options: b,
      loading: T,
      renderInput: (f) => /* @__PURE__ */ F.jsx(
        pr,
        {
          ...f,
          label: "Select User",
          InputProps: {
            ...f.InputProps,
            endAdornment: /* @__PURE__ */ F.jsxs(B.Fragment, { children: [
              T ? /* @__PURE__ */ F.jsx(gr, { color: "inherit", size: 20 }) : null,
              f.InputProps.endAdornment
            ] })
          }
        }
      )
    }
  ) });
};
export {
  Rr as default
};
