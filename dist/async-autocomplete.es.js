import re, { useState as Q, useEffect as dr } from "react";
import { Autocomplete as pr, TextField as gr, CircularProgress as hr } from "@mui/material";
var ee = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function yr() {
  if (we) return $;
  we = 1;
  var R = re, C = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, b = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(f, v, S) {
    var g, m = {}, E = null, x = null;
    S !== void 0 && (E = "" + S), v.key !== void 0 && (E = "" + v.key), v.ref !== void 0 && (x = v.ref);
    for (g in v) j.call(v, g) && !T.hasOwnProperty(g) && (m[g] = v[g]);
    if (f && f.defaultProps) for (g in v = f.defaultProps, v) m[g] === void 0 && (m[g] = v[g]);
    return { $$typeof: C, type: f, key: E, ref: x, props: m, _owner: b.current };
  }
  return $.Fragment = _, $.jsx = O, $.jsxs = O, $;
}
var Y = {}, Ce;
function br() {
  if (Ce) return Y;
  Ce = 1;
  var R = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return R.NODE_ENV !== "production" && function() {
    var C = re, _ = Symbol.for("react.element"), j = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), v = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), je = Symbol.for("react.offscreen"), te = Symbol.iterator, xe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var k = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, De = !1, Ie = !1, We = !1, $e = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === O || $e || e === T || e === g || e === m || We || e === je || Fe || De || Ie || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === E || e.$$typeof === f || e.$$typeof === v || e.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case j:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case g:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ae(r) + ".Consumer";
          case f:
            var t = e;
            return ae(t._context) + ".Provider";
          case S:
            return Le(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case x: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, oe, ie, se, ue, le, fe, ce;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ue() {
      {
        if (D === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, le = console.group, fe = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
    function Ve() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: oe
            }),
            info: P({}, e, {
              value: ie
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ue
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: fe
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        D < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = k.ReactCurrentDispatcher, J;
    function L(e, r, t) {
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
    var q = !1, U;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Me();
    }
    function de(e, r) {
      if (!e || q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Ue();
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
`), d = n.stack.split(`
`), u = a.length - 1, l = d.length - 1; u >= 1 && l >= 0 && a[u] !== d[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== d[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== d[l]) {
                    var h = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = s, Ve(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", w = F ? L(F) : "";
      return typeof e == "function" && U.set(e, w), w;
    }
    function Ne(e, r, t) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case g:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return Ne(e.render);
          case E:
            return V(e.type, r, t);
          case x: {
            var n = e, i = n._payload, s = n._init;
            try {
              return V(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind(I);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (M(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, M(i), c("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function ze(e) {
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
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), he(e);
    }
    var W = k.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, _e, K;
    K = {};
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = y(W.current.type);
        K[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(W.current.type), e.ref), K[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
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
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, d = null;
        t !== void 0 && (ye(t), a = "" + t), He(r) && (ye(r.key), a = "" + r.key), Xe(r) && (d = r.ref, Ze(r, i));
        for (s in r)
          I.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), d && er(o, l);
        }
        return rr(e, a, d, i, n, W.current, o);
      }
    }
    var G = k.ReactCurrentOwner, me = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
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
    function nr(e) {
      return "";
    }
    var Re = {};
    function ar(e) {
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
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), A(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Te(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              H(o.value) && Te(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Se = {};
    function Pe(e, r, t, n, i, s) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = nr();
          d ? a += d : a += Ee();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === _ ? (u = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = tr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (z(h)) {
                for (var F = 0; F < h.length; F++)
                  Oe(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(h, e);
        }
        if (I.call(r, "key")) {
          var w = y(e), p = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Z = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[w + Z]) {
            var cr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, w, cr, w), Se[w + Z] = !0;
          }
        }
        return e === b ? ir(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var lr = ur, fr = sr;
    Y.Fragment = b, Y.jsx = lr, Y.jsxs = fr;
  }(), Y;
}
var _r = {};
_r.NODE_ENV === "production" ? ee.exports = yr() : ee.exports = br();
var N = ee.exports;
const Rr = () => {
  const [R, C] = Q(!1), [_, j] = Q([]), [b, T] = Q(!1), O = async () => {
    try {
      T(!0);
      const v = await (await fetch("https://dummyjson.com/users")).json();
      j(v.users || []);
    } catch (f) {
      console.error(f.message), j([]);
    } finally {
      T(!1);
    }
  };
  return dr(() => {
    R && _.length === 0 && O();
  }, [R]), /* @__PURE__ */ N.jsx(
    pr,
    {
      open: R,
      fullWidth: !0,
      size: "small",
      onOpen: () => C(!0),
      onClose: () => C(!1),
      getOptionLabel: (f) => f.firstName,
      options: _,
      loading: b,
      renderInput: (f) => /* @__PURE__ */ N.jsx(
        gr,
        {
          ...f,
          size: "small",
          label: "Select User",
          fullWidth: !0,
          InputProps: {
            ...f.InputProps,
            endAdornment: /* @__PURE__ */ N.jsxs(re.Fragment, { children: [
              b ? /* @__PURE__ */ N.jsx(hr, { color: "inherit", size: 20 }) : null,
              f.InputProps.endAdornment
            ] })
          }
        }
      )
    }
  );
};
export {
  Rr as default
};
