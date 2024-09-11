var oc = Object.defineProperty;
var ic = (e, t, n) => t in e ? oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zn = (e, t, n) => ic(e, typeof t != "symbol" ? t + "" : t, n);
import * as S from "react";
import _t, { forwardRef as ac, useContext as sc, Children as lc, isValidElement as qr, cloneElement as Yr, useState as Bo, useEffect as cc } from "react";
import * as uc from "react-dom";
import Dr from "react-dom";
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = { exports: {} }, Qn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function dc() {
  if (la) return Qn;
  la = 1;
  var e = _t, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var p, m = {}, g = null, y = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (p in c) o.call(c, p) && !a.hasOwnProperty(p) && (m[p] = c[p]);
    if (l && l.defaultProps) for (p in c = l.defaultProps, c) m[p] === void 0 && (m[p] = c[p]);
    return { $$typeof: t, type: l, key: g, ref: y, props: m, _owner: i.current };
  }
  return Qn.Fragment = n, Qn.jsx = s, Qn.jsxs = s, Qn;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function fc() {
  return ca || (ca = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _t, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function f(E) {
      if (E === null || typeof E != "object")
        return null;
      var L = v && E[v] || E[h];
      return typeof L == "function" ? L : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(E) {
      {
        for (var L = arguments.length, Q = new Array(L > 1 ? L - 1 : 0), P = 1; P < L; P++)
          Q[P - 1] = arguments[P];
        b("error", E, Q);
      }
    }
    function b(E, L, Q) {
      {
        var P = T.ReactDebugCurrentFrame, $ = P.getStackAddendum();
        $ !== "" && (L += "%s", Q = Q.concat([$]));
        var H = Q.map(function(ne) {
          return String(ne);
        });
        H.unshift("Warning: " + L), Function.prototype.apply.call(console[E], console, H);
      }
    }
    var O = !1, x = !1, R = !1, k = !1, F = !1, d;
    d = Symbol.for("react.module.reference");
    function w(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === o || E === a || F || E === i || E === u || E === p || k || E === y || O || x || R || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === m || E.$$typeof === s || E.$$typeof === l || E.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === d || E.getModuleId !== void 0));
    }
    function j(E, L, Q) {
      var P = E.displayName;
      if (P)
        return P;
      var $ = L.displayName || L.name || "";
      return $ !== "" ? Q + "(" + $ + ")" : Q;
    }
    function A(E) {
      return E.displayName || "Context";
    }
    function V(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case l:
            var L = E;
            return A(L) + ".Consumer";
          case s:
            var Q = E;
            return A(Q._context) + ".Provider";
          case c:
            return j(E, E.render, "ForwardRef");
          case m:
            var P = E.displayName || null;
            return P !== null ? P : V(E.type) || "Memo";
          case g: {
            var $ = E, H = $._payload, ne = $._init;
            try {
              return V(ne(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, q = 0, _, Y, K, ie, D, W, ae;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function U() {
      {
        if (q === 0) {
          _ = console.log, Y = console.info, K = console.warn, ie = console.error, D = console.group, W = console.groupCollapsed, ae = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        q++;
      }
    }
    function X() {
      {
        if (q--, q === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, E, {
              value: _
            }),
            info: z({}, E, {
              value: Y
            }),
            warn: z({}, E, {
              value: K
            }),
            error: z({}, E, {
              value: ie
            }),
            group: z({}, E, {
              value: D
            }),
            groupCollapsed: z({}, E, {
              value: W
            }),
            groupEnd: z({}, E, {
              value: ae
            })
          });
        }
        q < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = T.ReactCurrentDispatcher, se;
    function G(E, L, Q) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch ($) {
            var P = $.stack.trim().match(/\n( *(at )?)/);
            se = P && P[1] || "";
          }
        return `
` + se + E;
      }
    }
    var re = !1, J;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ue();
    }
    function M(E, L) {
      if (!E || re)
        return "";
      {
        var Q = J.get(E);
        if (Q !== void 0)
          return Q;
      }
      var P;
      re = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = oe.current, oe.current = null, U();
      try {
        if (L) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (st) {
              P = st;
            }
            Reflect.construct(E, [], ne);
          } else {
            try {
              ne.call();
            } catch (st) {
              P = st;
            }
            E.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (st) {
            P = st;
          }
          E();
        }
      } catch (st) {
        if (st && P && typeof st.stack == "string") {
          for (var ee = st.stack.split(`
`), be = P.stack.split(`
`), me = ee.length - 1, Oe = be.length - 1; me >= 1 && Oe >= 0 && ee[me] !== be[Oe]; )
            Oe--;
          for (; me >= 1 && Oe >= 0; me--, Oe--)
            if (ee[me] !== be[Oe]) {
              if (me !== 1 || Oe !== 1)
                do
                  if (me--, Oe--, Oe < 0 || ee[me] !== be[Oe]) {
                    var nt = `
` + ee[me].replace(" at new ", " at ");
                    return E.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", E.displayName)), typeof E == "function" && J.set(E, nt), nt;
                  }
                while (me >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        re = !1, oe.current = H, X(), Error.prepareStackTrace = $;
      }
      var En = E ? E.displayName || E.name : "", Zt = En ? G(En) : "";
      return typeof E == "function" && J.set(E, Zt), Zt;
    }
    function ge(E, L, Q) {
      return M(E, !1);
    }
    function I(E) {
      var L = E.prototype;
      return !!(L && L.isReactComponent);
    }
    function pe(E, L, Q) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return M(E, I(E));
      if (typeof E == "string")
        return G(E);
      switch (E) {
        case u:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            return ge(E.render);
          case m:
            return pe(E.type, L, Q);
          case g: {
            var P = E, $ = P._payload, H = P._init;
            try {
              return pe(H($), L, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Fe = {}, he = T.ReactDebugCurrentFrame;
    function Ce(E) {
      if (E) {
        var L = E._owner, Q = pe(E.type, E._source, L ? L.type : null);
        he.setExtraStackFrame(Q);
      } else
        he.setExtraStackFrame(null);
    }
    function Le(E, L, Q, P, $) {
      {
        var H = Function.call.bind(te);
        for (var ne in E)
          if (H(E, ne)) {
            var ee = void 0;
            try {
              if (typeof E[ne] != "function") {
                var be = Error((P || "React class") + ": " + Q + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              ee = E[ne](L, ne, P, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              ee = me;
            }
            ee && !(ee instanceof Error) && (Ce($), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", Q, ne, typeof ee), Ce(null)), ee instanceof Error && !(ee.message in Fe) && (Fe[ee.message] = !0, Ce($), C("Failed %s type: %s", Q, ee.message), Ce(null));
          }
      }
    }
    var xe = Array.isArray;
    function Ge(E) {
      return xe(E);
    }
    function ce(E) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, Q = L && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Q;
      }
    }
    function _e(E) {
      try {
        return ot(E), !1;
      } catch {
        return !0;
      }
    }
    function ot(E) {
      return "" + E;
    }
    function it(E) {
      if (_e(E))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(E)), ot(E);
    }
    var Xe = T.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Qe, Se;
    Se = {};
    function dt(E) {
      if (te.call(E, "ref")) {
        var L = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ct(E) {
      if (te.call(E, "key")) {
        var L = Object.getOwnPropertyDescriptor(E, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function ht(E, L) {
      if (typeof E.ref == "string" && Xe.current && L && Xe.current.stateNode !== L) {
        var Q = V(Xe.current.type);
        Se[Q] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Xe.current.type), E.ref), Se[Q] = !0);
      }
    }
    function le(E, L) {
      {
        var Q = function() {
          we || (we = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Ee(E, L) {
      {
        var Q = function() {
          Qe || (Qe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var He = function(E, L, Q, P, $, H, ne) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: L,
        ref: Q,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function wt(E, L, Q, P, $) {
      {
        var H, ne = {}, ee = null, be = null;
        Q !== void 0 && (it(Q), ee = "" + Q), Ct(L) && (it(L.key), ee = "" + L.key), dt(L) && (be = L.ref, ht(L, $));
        for (H in L)
          te.call(L, H) && !We.hasOwnProperty(H) && (ne[H] = L[H]);
        if (E && E.defaultProps) {
          var me = E.defaultProps;
          for (H in me)
            ne[H] === void 0 && (ne[H] = me[H]);
        }
        if (ee || be) {
          var Oe = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ee && le(ne, Oe), be && Ee(ne, Oe);
        }
        return He(E, ee, be, $, P, Xe.current, ne);
      }
    }
    var ct = T.ReactCurrentOwner, Rt = T.ReactDebugCurrentFrame;
    function ft(E) {
      if (E) {
        var L = E._owner, Q = pe(E.type, E._source, L ? L.type : null);
        Rt.setExtraStackFrame(Q);
      } else
        Rt.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function jt(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Jt() {
      {
        if (ct.current) {
          var E = V(ct.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function gn(E) {
      return "";
    }
    var bn = {};
    function an(E) {
      {
        var L = Jt();
        if (!L) {
          var Q = typeof E == "string" ? E : E.displayName || E.name;
          Q && (L = `

Check the top-level render call using <` + Q + ">.");
        }
        return L;
      }
    }
    function Pn(E, L) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Q = an(L);
        if (bn[Q])
          return;
        bn[Q] = !0;
        var P = "";
        E && E._owner && E._owner !== ct.current && (P = " It was passed a child from " + V(E._owner.type) + "."), ft(E), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, P), ft(null);
      }
    }
    function yn(E, L) {
      {
        if (typeof E != "object")
          return;
        if (Ge(E))
          for (var Q = 0; Q < E.length; Q++) {
            var P = E[Q];
            jt(P) && Pn(P, L);
          }
        else if (jt(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var $ = f(E);
          if (typeof $ == "function" && $ !== E.entries)
            for (var H = $.call(E), ne; !(ne = H.next()).done; )
              jt(ne.value) && Pn(ne.value, L);
        }
      }
    }
    function sn(E) {
      {
        var L = E.type;
        if (L == null || typeof L == "string")
          return;
        var Q;
        if (typeof L == "function")
          Q = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === m))
          Q = L.propTypes;
        else
          return;
        if (Q) {
          var P = V(L);
          Le(Q, E.props, "prop", P, E);
        } else if (L.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var $ = V(L);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vn(E) {
      {
        for (var L = Object.keys(E.props), Q = 0; Q < L.length; Q++) {
          var P = L[Q];
          if (P !== "children" && P !== "key") {
            ft(E), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), ft(null);
            break;
          }
        }
        E.ref !== null && (ft(E), C("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var ln = {};
    function $n(E, L, Q, P, $, H) {
      {
        var ne = w(E);
        if (!ne) {
          var ee = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = gn();
          be ? ee += be : ee += Jt();
          var me;
          E === null ? me = "null" : Ge(E) ? me = "array" : E !== void 0 && E.$$typeof === t ? (me = "<" + (V(E.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : me = typeof E, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, ee);
        }
        var Oe = wt(E, L, Q, $, H);
        if (Oe == null)
          return Oe;
        if (ne) {
          var nt = L.children;
          if (nt !== void 0)
            if (P)
              if (Ge(nt)) {
                for (var En = 0; En < nt.length; En++)
                  yn(nt[En], E);
                Object.freeze && Object.freeze(nt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(nt, E);
        }
        if (te.call(L, "key")) {
          var Zt = V(E), st = Object.keys(L).filter(function(Xn) {
            return Xn !== "key";
          }), cn = st.length > 0 ? "{key: someKey, " + st.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ln[Zt + cn]) {
            var In = st.length > 0 ? "{" + st.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cn, Zt, In, Zt), ln[Zt + cn] = !0;
          }
        }
        return E === o ? vn(Oe) : sn(Oe), Oe;
      }
    }
    function Gn(E, L, Q) {
      return $n(E, L, Q, !0);
    }
    function kn(E, L, Q) {
      return $n(E, L, Q, !1);
    }
    var jr = kn, xn = Gn;
    er.Fragment = o, er.jsx = jr, er.jsxs = xn;
  }()), er;
}
process.env.NODE_ENV === "production" ? ni.exports = dc() : ni.exports = fc();
var B = ni.exports;
const hr = {
  black: "#000",
  white: "#fff"
}, An = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Nn = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Mn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, jn = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, _n = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, tr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, mc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function qt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const go = "$$material";
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, eo.apply(null, arguments);
}
function Ps(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var hc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gc = /* @__PURE__ */ Ps(
  function(e) {
    return hc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bc = !1;
function yc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function vc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var xc = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(i) {
      var a;
      o.tags.length === 0 ? o.insertionPoint ? a = o.insertionPoint.nextSibling : o.prepend ? a = o.container.firstChild : a = o.before : a = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, a), o.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !bc : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vc(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = yc(i);
      try {
        a.insertRule(o, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      var i;
      return (i = o.parentNode) == null ? void 0 : i.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ut = "-ms-", to = "-moz-", Pe = "-webkit-", $s = "comm", Oi = "rule", Ci = "decl", Ec = "@import", ks = "@keyframes", Sc = "@layer", Tc = Math.abs, bo = String.fromCharCode, Oc = Object.assign;
function Cc(e, t) {
  return lt(e, 0) ^ 45 ? (((t << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function Is(e) {
  return e.trim();
}
function wc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $e(e, t, n) {
  return e.replace(t, n);
}
function ri(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function gr(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function wi(e) {
  return e.length;
}
function Fr(e, t) {
  return t.push(e), e;
}
function Rc(e, t) {
  return e.map(t).join("");
}
var yo = 1, Vn = 1, As = 0, vt = 0, tt = 0, qn = "";
function vo(e, t, n, o, i, a, s) {
  return { value: e, root: t, parent: n, type: o, props: i, children: a, line: yo, column: Vn, length: s, return: "" };
}
function nr(e, t) {
  return Oc(vo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Pc() {
  return tt;
}
function $c() {
  return tt = vt > 0 ? lt(qn, --vt) : 0, Vn--, tt === 10 && (Vn = 1, yo--), tt;
}
function Tt() {
  return tt = vt < As ? lt(qn, vt++) : 0, Vn++, tt === 10 && (Vn = 1, yo++), tt;
}
function Ut() {
  return lt(qn, vt);
}
function Kr() {
  return vt;
}
function wr(e, t) {
  return gr(qn, e, t);
}
function br(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ns(e) {
  return yo = Vn = 1, As = Vt(qn = e), vt = 0, [];
}
function Ms(e) {
  return qn = "", e;
}
function Gr(e) {
  return Is(wr(vt - 1, oi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kc(e) {
  for (; (tt = Ut()) && tt < 33; )
    Tt();
  return br(e) > 2 || br(tt) > 3 ? "" : " ";
}
function Ic(e, t) {
  for (; --t && Tt() && !(tt < 48 || tt > 102 || tt > 57 && tt < 65 || tt > 70 && tt < 97); )
    ;
  return wr(e, Kr() + (t < 6 && Ut() == 32 && Tt() == 32));
}
function oi(e) {
  for (; Tt(); )
    switch (tt) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && oi(tt);
        break;
      case 40:
        e === 41 && oi(e);
        break;
      case 92:
        Tt();
        break;
    }
  return vt;
}
function Ac(e, t) {
  for (; Tt() && e + tt !== 57; )
    if (e + tt === 84 && Ut() === 47)
      break;
  return "/*" + wr(t, vt - 1) + "*" + bo(e === 47 ? e : Tt());
}
function Nc(e) {
  for (; !br(Ut()); )
    Tt();
  return wr(e, vt);
}
function Mc(e) {
  return Ms(Xr("", null, null, null, [""], e = Ns(e), 0, [0], e));
}
function Xr(e, t, n, o, i, a, s, l, c) {
  for (var u = 0, p = 0, m = s, g = 0, y = 0, v = 0, h = 1, f = 1, T = 1, C = 0, b = "", O = i, x = a, R = o, k = b; f; )
    switch (v = C, C = Tt()) {
      case 40:
        if (v != 108 && lt(k, m - 1) == 58) {
          ri(k += $e(Gr(C), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Gr(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += kc(v);
        break;
      case 92:
        k += Ic(Kr() - 1, 7);
        continue;
      case 47:
        switch (Ut()) {
          case 42:
          case 47:
            Fr(jc(Ac(Tt(), Kr()), t, n), c);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * h:
        l[u++] = Vt(k) * T;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            f = 0;
          case 59 + p:
            T == -1 && (k = $e(k, /\f/g, "")), y > 0 && Vt(k) - m && Fr(y > 32 ? pa(k + ";", o, n, m - 1) : pa($e(k, " ", "") + ";", o, n, m - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (Fr(R = ua(k, t, n, u, p, i, l, b, O = [], x = [], m), a), C === 123)
              if (p === 0)
                Xr(k, t, R, R, O, a, m, l, x);
              else
                switch (g === 99 && lt(k, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(e, R, R, o && Fr(ua(e, R, R, 0, 0, i, l, b, i, O = [], m), x), i, x, m, l, o ? O : x);
                    break;
                  default:
                    Xr(k, R, R, R, [""], x, 0, l, x);
                }
        }
        u = p = y = 0, h = T = 1, b = k = "", m = s;
        break;
      case 58:
        m = 1 + Vt(k), y = v;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && $c() == 125)
            continue;
        }
        switch (k += bo(C), C * h) {
          case 38:
            T = p > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = (Vt(k) - 1) * T, T = 1;
            break;
          case 64:
            Ut() === 45 && (k += Gr(Tt())), g = Ut(), p = m = Vt(b = k += Nc(Kr())), C++;
            break;
          case 45:
            v === 45 && Vt(k) == 2 && (h = 0);
        }
    }
  return a;
}
function ua(e, t, n, o, i, a, s, l, c, u, p) {
  for (var m = i - 1, g = i === 0 ? a : [""], y = wi(g), v = 0, h = 0, f = 0; v < o; ++v)
    for (var T = 0, C = gr(e, m + 1, m = Tc(h = s[v])), b = e; T < y; ++T)
      (b = Is(h > 0 ? g[T] + " " + C : $e(C, /&\f/g, g[T]))) && (c[f++] = b);
  return vo(e, t, n, i === 0 ? Oi : l, c, u, p);
}
function jc(e, t, n) {
  return vo(e, t, n, $s, bo(Pc()), gr(e, 2, -2), 0);
}
function pa(e, t, n, o) {
  return vo(e, t, n, Ci, gr(e, 0, o), gr(e, o + 1, -1), o);
}
function Ln(e, t) {
  for (var n = "", o = wi(e), i = 0; i < o; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function _c(e, t, n, o) {
  switch (e.type) {
    case Sc:
      if (e.children.length) break;
    case Ec:
    case Ci:
      return e.return = e.return || e.value;
    case $s:
      return "";
    case ks:
      return e.return = e.value + "{" + Ln(e.children, o) + "}";
    case Oi:
      e.value = e.props.join(",");
  }
  return Vt(n = Ln(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Dc(e) {
  var t = wi(e);
  return function(n, o, i, a) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, o, i, a) || "";
    return s;
  };
}
function Fc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Lc = function(t, n, o) {
  for (var i = 0, a = 0; i = a, a = Ut(), i === 38 && a === 12 && (n[o] = 1), !br(a); )
    Tt();
  return wr(t, vt);
}, Bc = function(t, n) {
  var o = -1, i = 44;
  do
    switch (br(i)) {
      case 0:
        i === 38 && Ut() === 12 && (n[o] = 1), t[o] += Lc(vt - 1, n, o);
        break;
      case 2:
        t[o] += Gr(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = Ut() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += bo(i);
    }
  while (i = Tt());
  return t;
}, Vc = function(t, n) {
  return Ms(Bc(Ns(t), n));
}, da = /* @__PURE__ */ new WeakMap(), zc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !da.get(o)) && !i) {
      da.set(t, !0);
      for (var a = [], s = Vc(n, a), l = o.props, c = 0, u = 0; c < s.length; c++)
        for (var p = 0; p < l.length; p++, u++)
          t.props[u] = a[c] ? s[c].replace(/&\f/g, l[p]) : l[p] + " " + s[c];
    }
  }
}, Wc = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function js(e, t) {
  switch (Cc(e, t)) {
    case 5103:
      return Pe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + to + e + ut + e + e;
    case 6828:
    case 4268:
      return Pe + e + ut + e + e;
    case 6165:
      return Pe + e + ut + "flex-" + e + e;
    case 5187:
      return Pe + e + $e(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + ut + "flex-$1$2") + e;
    case 5443:
      return Pe + e + ut + "flex-item-" + $e(e, /flex-|-self/, "") + e;
    case 4675:
      return Pe + e + ut + "flex-line-pack" + $e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Pe + e + ut + $e(e, "shrink", "negative") + e;
    case 5292:
      return Pe + e + ut + $e(e, "basis", "preferred-size") + e;
    case 6060:
      return Pe + "box-" + $e(e, "-grow", "") + Pe + e + ut + $e(e, "grow", "positive") + e;
    case 4554:
      return Pe + $e(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    case 6187:
      return $e($e($e(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    case 4968:
      return $e($e(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Pe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(e) - 1 - t > 6) switch (lt(e, t + 1)) {
        case 109:
          if (lt(e, t + 4) !== 45) break;
        case 102:
          return $e(e, /(.+:)(.+)-([^]+)/, "$1" + Pe + "$2-$3$1" + to + (lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~ri(e, "stretch") ? js($e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115) break;
    case 6444:
      switch (lt(e, Vt(e) - 3 - (~ri(e, "!important") && 10))) {
        case 107:
          return $e(e, ":", ":" + Pe) + e;
        case 101:
          return $e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Pe + (lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Pe + "$2$3$1" + ut + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (lt(e, t + 11)) {
        case 114:
          return Pe + e + ut + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Pe + e + ut + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Pe + e + ut + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Pe + e + ut + e + e;
  }
  return e;
}
var Uc = function(t, n, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ci:
      t.return = js(t.value, t.length);
      break;
    case ks:
      return Ln([nr(t, {
        value: $e(t.value, "@", "@" + Pe)
      })], i);
    case Oi:
      if (t.length) return Rc(t.props, function(a) {
        switch (wc(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ln([nr(t, {
              props: [$e(a, /:(read-\w+)/, ":" + to + "$1")]
            })], i);
          case "::placeholder":
            return Ln([nr(t, {
              props: [$e(a, /:(plac\w+)/, ":" + Pe + "input-$1")]
            }), nr(t, {
              props: [$e(a, /:(plac\w+)/, ":" + to + "$1")]
            }), nr(t, {
              props: [$e(a, /:(plac\w+)/, ut + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Hc = [Uc], qc = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(h) {
      var f = h.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Hc, a = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var f = h.getAttribute("data-emotion").split(" "), T = 1; T < f.length; T++)
        a[f[T]] = !0;
      l.push(h);
    }
  );
  var c, u = [zc, Wc];
  {
    var p, m = [_c, Fc(function(h) {
      p.insert(h);
    })], g = Dc(u.concat(i, m)), y = function(f) {
      return Ln(Mc(f), g);
    };
    c = function(f, T, C, b) {
      p = C, y(f ? f + "{" + T.styles + "}" : T.styles), b && (v.inserted[T.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new xc({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return v.sheet.hydrate(l), v;
}, Lr = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Yc() {
  if (fa) return ke;
  fa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function b(x) {
    if (typeof x == "object" && x !== null) {
      var R = x.$$typeof;
      switch (R) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case o:
            case a:
            case i:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case p:
                case v:
                case y:
                case s:
                  return x;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function O(x) {
    return b(x) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = s, ke.Element = t, ke.ForwardRef = p, ke.Fragment = o, ke.Lazy = v, ke.Memo = y, ke.Portal = n, ke.Profiler = a, ke.StrictMode = i, ke.Suspense = m, ke.isAsyncMode = function(x) {
    return O(x) || b(x) === c;
  }, ke.isConcurrentMode = O, ke.isContextConsumer = function(x) {
    return b(x) === l;
  }, ke.isContextProvider = function(x) {
    return b(x) === s;
  }, ke.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ke.isForwardRef = function(x) {
    return b(x) === p;
  }, ke.isFragment = function(x) {
    return b(x) === o;
  }, ke.isLazy = function(x) {
    return b(x) === v;
  }, ke.isMemo = function(x) {
    return b(x) === y;
  }, ke.isPortal = function(x) {
    return b(x) === n;
  }, ke.isProfiler = function(x) {
    return b(x) === a;
  }, ke.isStrictMode = function(x) {
    return b(x) === i;
  }, ke.isSuspense = function(x) {
    return b(x) === m;
  }, ke.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === u || x === a || x === i || x === m || x === g || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === y || x.$$typeof === s || x.$$typeof === l || x.$$typeof === p || x.$$typeof === f || x.$$typeof === T || x.$$typeof === C || x.$$typeof === h);
  }, ke.typeOf = b, ke;
}
var Ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Kc() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function b(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === o || M === u || M === a || M === i || M === m || M === g || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === y || M.$$typeof === s || M.$$typeof === l || M.$$typeof === p || M.$$typeof === f || M.$$typeof === T || M.$$typeof === C || M.$$typeof === h);
    }
    function O(M) {
      if (typeof M == "object" && M !== null) {
        var ge = M.$$typeof;
        switch (ge) {
          case t:
            var I = M.type;
            switch (I) {
              case c:
              case u:
              case o:
              case a:
              case i:
              case m:
                return I;
              default:
                var pe = I && I.$$typeof;
                switch (pe) {
                  case l:
                  case p:
                  case v:
                  case y:
                  case s:
                    return pe;
                  default:
                    return ge;
                }
            }
          case n:
            return ge;
        }
      }
    }
    var x = c, R = u, k = l, F = s, d = t, w = p, j = o, A = v, V = y, z = n, q = a, _ = i, Y = m, K = !1;
    function ie(M) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(M) || O(M) === c;
    }
    function D(M) {
      return O(M) === u;
    }
    function W(M) {
      return O(M) === l;
    }
    function ae(M) {
      return O(M) === s;
    }
    function Z(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function U(M) {
      return O(M) === p;
    }
    function X(M) {
      return O(M) === o;
    }
    function oe(M) {
      return O(M) === v;
    }
    function se(M) {
      return O(M) === y;
    }
    function G(M) {
      return O(M) === n;
    }
    function re(M) {
      return O(M) === a;
    }
    function J(M) {
      return O(M) === i;
    }
    function ue(M) {
      return O(M) === m;
    }
    Ie.AsyncMode = x, Ie.ConcurrentMode = R, Ie.ContextConsumer = k, Ie.ContextProvider = F, Ie.Element = d, Ie.ForwardRef = w, Ie.Fragment = j, Ie.Lazy = A, Ie.Memo = V, Ie.Portal = z, Ie.Profiler = q, Ie.StrictMode = _, Ie.Suspense = Y, Ie.isAsyncMode = ie, Ie.isConcurrentMode = D, Ie.isContextConsumer = W, Ie.isContextProvider = ae, Ie.isElement = Z, Ie.isForwardRef = U, Ie.isFragment = X, Ie.isLazy = oe, Ie.isMemo = se, Ie.isPortal = G, Ie.isProfiler = re, Ie.isStrictMode = J, Ie.isSuspense = ue, Ie.isValidElementType = b, Ie.typeOf = O;
  }()), Ie;
}
var ha;
function Ri() {
  return ha || (ha = 1, process.env.NODE_ENV === "production" ? Lr.exports = Yc() : Lr.exports = Kc()), Lr.exports;
}
var _s = Ri(), Gc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ds = {};
Ds[_s.ForwardRef] = Gc;
Ds[_s.Memo] = Xc;
var Jc = !0;
function Zc(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : o += i + " ";
  }), o;
}
var Fs = function(t, n, o) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Jc === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Ls = function(t, n, o) {
  Fs(t, n, o);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Qc(e) {
  for (var t = 0, n, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var eu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tu = !1, nu = /[A-Z]|^ms/g, ru = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bs = function(t) {
  return t.charCodeAt(1) === 45;
}, ga = function(t) {
  return t != null && typeof t != "boolean";
}, Vo = /* @__PURE__ */ Ps(function(e) {
  return Bs(e) ? e : e.replace(nu, "-$&").toLowerCase();
}), ba = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ru, function(o, i, a) {
          return zt = {
            name: i,
            styles: a,
            next: zt
          }, i;
        });
  }
  return eu[t] !== 1 && !Bs(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ou = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function yr(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return zt = {
          name: i.name,
          styles: i.styles,
          next: zt
        }, i.name;
      var a = n;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            zt = {
              name: s.name,
              styles: s.styles,
              next: zt
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return iu(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = zt, u = n(e);
        return zt = c, yr(e, t, u);
      }
      break;
    }
  }
  var p = n;
  if (t == null)
    return p;
  var m = t[p];
  return m !== void 0 ? m : p;
}
function iu(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      o += yr(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var s = n[a];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? o += a + "{" + t[l] + "}" : ga(l) && (o += Vo(a) + ":" + ba(a, l) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && tu)
          throw new Error(ou);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            ga(s[c]) && (o += Vo(a) + ":" + ba(a, s[c]) + ";");
        else {
          var u = yr(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              o += Vo(a) + ":" + u + ";";
              break;
            }
            default:
              o += a + "{" + u + "}";
          }
        }
      }
    }
  return o;
}
var ya = /label:\s*([^\s;\n{]+)\s*(;|$)/g, zt;
function Pi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  zt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    o = !1, i += yr(n, t, a);
  else {
    var s = a;
    i += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += yr(n, t, e[l]), o) {
      var c = a;
      i += c[l];
    }
  ya.lastIndex = 0;
  for (var u = "", p; (p = ya.exec(i)) !== null; )
    u += "-" + p[1];
  var m = Qc(i) + u;
  return {
    name: m,
    styles: i,
    next: zt
  };
}
var au = function(t) {
  return t();
}, Vs = S.useInsertionEffect ? S.useInsertionEffect : !1, su = Vs || au, va = Vs || S.useLayoutEffect, zs = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qc({
    key: "css"
  }) : null
);
zs.Provider;
var Ws = function(t) {
  return /* @__PURE__ */ ac(function(n, o) {
    var i = sc(zs);
    return t(n, i, o);
  });
}, $i = /* @__PURE__ */ S.createContext({}), lu = /* @__PURE__ */ Ws(function(e, t) {
  var n = e.styles, o = Pi([n], void 0, S.useContext($i)), i = S.useRef();
  return va(function() {
    var a = t.key + "-global", s = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + o.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), s.hydrate([c])), i.current = [s, l], function() {
      s.flush();
    };
  }, [t]), va(function() {
    var a = i.current, s = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (o.next !== void 0 && Ls(t, o.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", o, s, !1);
  }, [t, o.name]), null;
});
function ki() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pi(t);
}
var Rr = function() {
  var t = ki.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, cu = gc, uu = function(t) {
  return t !== "theme";
}, xa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? cu : uu;
}, Ea = function(t, n, o) {
  var i;
  if (n) {
    var a = n.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && o && (i = t.__emotion_forwardProp), i;
}, pu = !1, du = function(t) {
  var n = t.cache, o = t.serialized, i = t.isStringTag;
  return Fs(n, o, i), su(function() {
    return Ls(n, o, i);
  }), null;
}, fu = function e(t, n) {
  var o = t.__emotion_real === t, i = o && t.__emotion_base || t, a, s;
  n !== void 0 && (a = n.label, s = n.target);
  var l = Ea(t, n, o), c = l || xa(i), u = !c("as");
  return function() {
    var p = arguments, m = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && m.push("label:" + a + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var g = p.length, y = 1; y < g; y++)
        m.push(p[y], p[0][y]);
    }
    var v = Ws(function(h, f, T) {
      var C = u && h.as || i, b = "", O = [], x = h;
      if (h.theme == null) {
        x = {};
        for (var R in h)
          x[R] = h[R];
        x.theme = S.useContext($i);
      }
      typeof h.className == "string" ? b = Zc(f.registered, O, h.className) : h.className != null && (b = h.className + " ");
      var k = Pi(m.concat(O), f.registered, x);
      b += f.key + "-" + k.name, s !== void 0 && (b += " " + s);
      var F = u && l === void 0 ? xa(C) : c, d = {};
      for (var w in h)
        u && w === "as" || F(w) && (d[w] = h[w]);
      return d.className = b, T && (d.ref = T), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(du, {
        cache: f,
        serialized: k,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ S.createElement(C, d));
    });
    return v.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = m, v.__emotion_forwardProp = l, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && pu ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(h, f) {
      return e(h, eo({}, n, f, {
        shouldForwardProp: Ea(v, f, !0)
      })).apply(void 0, m);
    }, v;
  };
}, mu = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ii = fu.bind();
mu.forEach(function(e) {
  ii[e] = ii(e);
});
var ai = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zo, Sa;
function hu() {
  if (Sa) return zo;
  Sa = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zo = i() ? Object.assign : function(a, s) {
    for (var l, c = o(a), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          n.call(l, u[g]) && (c[u[g]] = l[u[g]]);
      }
    }
    return c;
  }, zo;
}
var Wo, Ta;
function Ii() {
  if (Ta) return Wo;
  Ta = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wo = e, Wo;
}
var Uo, Oa;
function Us() {
  return Oa || (Oa = 1, Uo = Function.call.bind(Object.prototype.hasOwnProperty)), Uo;
}
var Ho, Ca;
function gu() {
  if (Ca) return Ho;
  Ca = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ii(), n = {}, o = Us();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (o(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var g = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = a[p](s, p, c, l, null, t);
          } catch (v) {
            m = v;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ho = i, Ho;
}
var qo, wa;
function bu() {
  if (wa) return qo;
  wa = 1;
  var e = Ri(), t = hu(), n = Ii(), o = Us(), i = gu(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return qo = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(D) {
      var W = D && (u && D[u] || D[p]);
      if (typeof W == "function")
        return W;
    }
    var g = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: C(),
      arrayOf: b,
      element: O(),
      elementType: x(),
      instanceOf: R,
      node: w(),
      objectOf: F,
      oneOf: k,
      oneOfType: d,
      shape: A,
      exact: V
    };
    function v(D, W) {
      return D === W ? D !== 0 || 1 / D === 1 / W : D !== D && W !== W;
    }
    function h(D, W) {
      this.message = D, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function f(D) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, ae = 0;
      function Z(X, oe, se, G, re, J, ue) {
        if (G = G || g, J = J || se, ue !== n) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = G + ":" + se;
            !W[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[ge] = !0, ae++);
          }
        }
        return oe[se] == null ? X ? oe[se] === null ? new h("The " + re + " `" + J + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new h("The " + re + " `" + J + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : D(oe, se, G, re, J);
      }
      var U = Z.bind(null, !1);
      return U.isRequired = Z.bind(null, !0), U;
    }
    function T(D) {
      function W(ae, Z, U, X, oe, se) {
        var G = ae[Z], re = _(G);
        if (re !== D) {
          var J = Y(G);
          return new h(
            "Invalid " + X + " `" + oe + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return f(W);
    }
    function C() {
      return f(s);
    }
    function b(D) {
      function W(ae, Z, U, X, oe) {
        if (typeof D != "function")
          return new h("Property `" + oe + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var se = ae[Z];
        if (!Array.isArray(se)) {
          var G = _(se);
          return new h("Invalid " + X + " `" + oe + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var re = 0; re < se.length; re++) {
          var J = D(se, re, U, X, oe + "[" + re + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return f(W);
    }
    function O() {
      function D(W, ae, Z, U, X) {
        var oe = W[ae];
        if (!l(oe)) {
          var se = _(oe);
          return new h("Invalid " + U + " `" + X + "` of type " + ("`" + se + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(D);
    }
    function x() {
      function D(W, ae, Z, U, X) {
        var oe = W[ae];
        if (!e.isValidElementType(oe)) {
          var se = _(oe);
          return new h("Invalid " + U + " `" + X + "` of type " + ("`" + se + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(D);
    }
    function R(D) {
      function W(ae, Z, U, X, oe) {
        if (!(ae[Z] instanceof D)) {
          var se = D.name || g, G = ie(ae[Z]);
          return new h("Invalid " + X + " `" + oe + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + se + "`."));
        }
        return null;
      }
      return f(W);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function W(ae, Z, U, X, oe) {
        for (var se = ae[Z], G = 0; G < D.length; G++)
          if (v(se, D[G]))
            return null;
        var re = JSON.stringify(D, function(ue, M) {
          var ge = Y(M);
          return ge === "symbol" ? String(M) : M;
        });
        return new h("Invalid " + X + " `" + oe + "` of value `" + String(se) + "` " + ("supplied to `" + U + "`, expected one of " + re + "."));
      }
      return f(W);
    }
    function F(D) {
      function W(ae, Z, U, X, oe) {
        if (typeof D != "function")
          return new h("Property `" + oe + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var se = ae[Z], G = _(se);
        if (G !== "object")
          return new h("Invalid " + X + " `" + oe + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var re in se)
          if (o(se, re)) {
            var J = D(se, re, U, X, oe + "." + re, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return f(W);
    }
    function d(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var W = 0; W < D.length; W++) {
        var ae = D[W];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(ae) + " at index " + W + "."
          ), s;
      }
      function Z(U, X, oe, se, G) {
        for (var re = [], J = 0; J < D.length; J++) {
          var ue = D[J], M = ue(U, X, oe, se, G, n);
          if (M == null)
            return null;
          M.data && o(M.data, "expectedType") && re.push(M.data.expectedType);
        }
        var ge = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new h("Invalid " + se + " `" + G + "` supplied to " + ("`" + oe + "`" + ge + "."));
      }
      return f(Z);
    }
    function w() {
      function D(W, ae, Z, U, X) {
        return z(W[ae]) ? null : new h("Invalid " + U + " `" + X + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return f(D);
    }
    function j(D, W, ae, Z, U) {
      return new h(
        (D || "React class") + ": " + W + " type `" + ae + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function A(D) {
      function W(ae, Z, U, X, oe) {
        var se = ae[Z], G = _(se);
        if (G !== "object")
          return new h("Invalid " + X + " `" + oe + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var re in D) {
          var J = D[re];
          if (typeof J != "function")
            return j(U, X, oe, re, Y(J));
          var ue = J(se, re, U, X, oe + "." + re, n);
          if (ue)
            return ue;
        }
        return null;
      }
      return f(W);
    }
    function V(D) {
      function W(ae, Z, U, X, oe) {
        var se = ae[Z], G = _(se);
        if (G !== "object")
          return new h("Invalid " + X + " `" + oe + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var re = t({}, ae[Z], D);
        for (var J in re) {
          var ue = D[J];
          if (o(D, J) && typeof ue != "function")
            return j(U, X, oe, J, Y(ue));
          if (!ue)
            return new h(
              "Invalid " + X + " `" + oe + "` key `" + J + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(ae[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var M = ue(se, J, U, X, oe + "." + J, n);
          if (M)
            return M;
        }
        return null;
      }
      return f(W);
    }
    function z(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(z);
          if (D === null || l(D))
            return !0;
          var W = m(D);
          if (W) {
            var ae = W.call(D), Z;
            if (W !== D.entries) {
              for (; !(Z = ae.next()).done; )
                if (!z(Z.value))
                  return !1;
            } else
              for (; !(Z = ae.next()).done; ) {
                var U = Z.value;
                if (U && !z(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(D, W) {
      return D === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function _(D) {
      var W = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : q(W, D) ? "symbol" : W;
    }
    function Y(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var W = _(D);
      if (W === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function K(D) {
      var W = Y(D);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function ie(D) {
      return !D.constructor || !D.constructor.name ? g : D.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, qo;
}
var Yo, Ra;
function yu() {
  if (Ra) return Yo;
  Ra = 1;
  var e = Ii();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Yo = function() {
    function o(s, l, c, u, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function i() {
      return o;
    }
    var a = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: i,
      element: o,
      elementType: o,
      instanceOf: i,
      node: o,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Yo;
}
if (process.env.NODE_ENV !== "production") {
  var vu = Ri(), xu = !0;
  ai.exports = bu()(vu.isElement, xu);
} else
  ai.exports = yu()();
var Eu = ai.exports;
const r = /* @__PURE__ */ pc(Eu);
function Su(e) {
  return e == null || Object.keys(e).length === 0;
}
function Hs(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (i) => t(Su(i) ? n : i) : t;
  return /* @__PURE__ */ B.jsx(lu, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
  defaultTheme: r.object,
  styles: r.oneOfType([r.array, r.string, r.object, r.func])
});
/**
 * @mui/styled-engine v6.0.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Tu(e, t) {
  const n = ii(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
const Ou = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function en(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qs(e) {
  if (!en(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = qs(e[n]);
  }), t;
}
function pt(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return en(e) && en(t) && Object.keys(t).forEach((i) => {
    en(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && en(e[i]) ? o[i] = pt(e[i], t[i], n) : n.clone ? o[i] = en(t[i]) ? qs(t[i]) : t[i] : o[i] = t[i];
  }), o;
}
const Cu = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function wu(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: o = 5,
    ...i
  } = e, a = Cu(t), s = Object.keys(a);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n})`;
  }
  function c(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - o / 100}${n})`;
  }
  function u(g, y) {
    const v = s.indexOf(y);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : y) - o / 100}${n})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function m(g) {
    const y = s.indexOf(g);
    return y === 0 ? l(s[1]) : y === s.length - 1 ? c(s[y]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: u,
    only: p,
    not: m,
    unit: n,
    ...i
  };
}
function Ru(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, i) => {
    var s, l;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = o.match(a)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(a)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((o, i) => {
    const a = t[i];
    return delete o[i], o[i] = a, o;
  }, {
    ...t
  }) : t;
}
function Pu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function $u(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : qt(18, `(${t})`));
    return null;
  }
  const [, o, i] = n, a = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(i).up(a);
}
function ku(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function n(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, i = (a) => (n(o, a), o);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Iu = {
  borderRadius: 4
}, mn = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.string, r.object, r.array]) : {};
function cr(e, t) {
  return t ? pt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const xo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Pa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${xo[e]}px)`
}, Au = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : xo[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function tn(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const a = o.breakpoints || Pa;
    return t.reduce((s, l, c) => (s[a.up(a.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = o.breakpoints || Pa;
    return Object.keys(t).reduce((s, l) => {
      if (Pu(a.keys, l)) {
        const c = $u(o.containerQueries ? o : Au, l);
        c && (s[c] = n(t[l], l));
      } else if (Object.keys(a.values || xo).includes(l)) {
        const c = a.up(l);
        s[c] = n(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Nu(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((o, i) => {
    const a = e.up(i);
    return o[a] = {}, o;
  }, {})) || {};
}
function Mu(e, t) {
  return e.reduce((n, o) => {
    const i = n[o];
    return (!i || Object.keys(i).length === 0) && delete n[o], n;
  }, t);
}
function de(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : qt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Eo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, i) => o && o[i] != null ? o[i] : null, e);
}
function no(e, t, n, o = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || o : i = Eo(e, n) || o, t && (i = t(i, o, e)), i;
}
function et(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: i
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = Eo(c, o) || {};
    return tn(s, l, (m) => {
      let g = no(u, i, m);
      return m === g && typeof m == "string" && (g = no(u, i, `${t}${m === "default" ? "" : de(m)}`, m)), n === !1 ? g : {
        [n]: g
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: mn
  } : {}, a.filterProps = [t], a;
}
function ju(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const _u = {
  m: "margin",
  p: "padding"
}, Du = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $a = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fu = ju((e) => {
  if (e.length > 2)
    if ($a[e])
      e = $a[e];
    else
      return [e];
  const [t, n] = e.split(""), o = _u[t], i = Du[n] || "";
  return Array.isArray(i) ? i.map((a) => o + a) : [o + i];
}), So = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], To = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Lu = [...So, ...To];
function Pr(e, t, n, o) {
  const i = Eo(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${a}.`), typeof i == "string" ? `calc(${a} * ${i})` : i * a) : Array.isArray(i) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[s];
    return a >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ai(e) {
  return Pr(e, "spacing", 8, "spacing");
}
function $r(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Bu(e, t) {
  return (n) => e.reduce((o, i) => (o[i] = $r(t, n), o), {});
}
function Vu(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const i = Fu(n), a = Bu(i, o), s = e[n];
  return tn(e, s, a);
}
function Ys(e, t) {
  const n = Ai(e.theme);
  return Object.keys(e).map((o) => Vu(e, t, o, n)).reduce(cr, {});
}
function Je(e) {
  return Ys(e, So);
}
Je.propTypes = process.env.NODE_ENV !== "production" ? So.reduce((e, t) => (e[t] = mn, e), {}) : {};
Je.filterProps = So;
function Ze(e) {
  return Ys(e, To);
}
Ze.propTypes = process.env.NODE_ENV !== "production" ? To.reduce((e, t) => (e[t] = mn, e), {}) : {};
Ze.filterProps = To;
process.env.NODE_ENV !== "production" && Lu.reduce((e, t) => (e[t] = mn, e), {});
function Ks(e = 8, t = Ai({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Oo(...e) {
  const t = e.reduce((o, i) => (i.filterProps.forEach((a) => {
    o[a] = i;
  }), o), {}), n = (o) => Object.keys(o).reduce((i, a) => t[a] ? cr(i, t[a](o)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, i) => Object.assign(o, i.propTypes), {}) : {}, n.filterProps = e.reduce((o, i) => o.concat(i.filterProps), []), n;
}
function kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Mt(e, t) {
  return et({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const zu = Mt("border", kt), Wu = Mt("borderTop", kt), Uu = Mt("borderRight", kt), Hu = Mt("borderBottom", kt), qu = Mt("borderLeft", kt), Yu = Mt("borderColor"), Ku = Mt("borderTopColor"), Gu = Mt("borderRightColor"), Xu = Mt("borderBottomColor"), Ju = Mt("borderLeftColor"), Zu = Mt("outline", kt), Qu = Mt("outlineColor"), Co = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Pr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: $r(t, o)
    });
    return tn(e, e.borderRadius, n);
  }
  return null;
};
Co.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: mn
} : {};
Co.filterProps = ["borderRadius"];
Oo(zu, Wu, Uu, Hu, qu, Yu, Ku, Gu, Xu, Ju, Co, Zu, Qu);
const wo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Pr(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: $r(t, o)
    });
    return tn(e, e.gap, n);
  }
  return null;
};
wo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: mn
} : {};
wo.filterProps = ["gap"];
const Ro = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Pr(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: $r(t, o)
    });
    return tn(e, e.columnGap, n);
  }
  return null;
};
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: mn
} : {};
Ro.filterProps = ["columnGap"];
const Po = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Pr(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: $r(t, o)
    });
    return tn(e, e.rowGap, n);
  }
  return null;
};
Po.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: mn
} : {};
Po.filterProps = ["rowGap"];
const ep = et({
  prop: "gridColumn"
}), tp = et({
  prop: "gridRow"
}), np = et({
  prop: "gridAutoFlow"
}), rp = et({
  prop: "gridAutoColumns"
}), op = et({
  prop: "gridAutoRows"
}), ip = et({
  prop: "gridTemplateColumns"
}), ap = et({
  prop: "gridTemplateRows"
}), sp = et({
  prop: "gridTemplateAreas"
}), lp = et({
  prop: "gridArea"
});
Oo(wo, Ro, Po, ep, tp, np, rp, op, ip, ap, sp, lp);
function Bn(e, t) {
  return t === "grey" ? t : e;
}
const cp = et({
  prop: "color",
  themeKey: "palette",
  transform: Bn
}), up = et({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Bn
}), pp = et({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Bn
});
Oo(cp, up, pp);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const dp = et({
  prop: "width",
  transform: St
}), Ni = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a, s, l, c;
      const o = ((s = (a = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[n]) || xo[n];
      return o ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: St(n)
      };
    };
    return tn(e, e.maxWidth, t);
  }
  return null;
};
Ni.filterProps = ["maxWidth"];
const fp = et({
  prop: "minWidth",
  transform: St
}), mp = et({
  prop: "height",
  transform: St
}), hp = et({
  prop: "maxHeight",
  transform: St
}), gp = et({
  prop: "minHeight",
  transform: St
});
et({
  prop: "size",
  cssProperty: "width",
  transform: St
});
et({
  prop: "size",
  cssProperty: "height",
  transform: St
});
const bp = et({
  prop: "boxSizing"
});
Oo(dp, Ni, fp, mp, hp, gp, bp);
const $o = {
  // borders
  border: {
    themeKey: "borders",
    transform: kt
  },
  borderTop: {
    themeKey: "borders",
    transform: kt
  },
  borderRight: {
    themeKey: "borders",
    transform: kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: kt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: kt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Co
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Bn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Bn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Bn
  },
  // spacing
  p: {
    style: Ze
  },
  pt: {
    style: Ze
  },
  pr: {
    style: Ze
  },
  pb: {
    style: Ze
  },
  pl: {
    style: Ze
  },
  px: {
    style: Ze
  },
  py: {
    style: Ze
  },
  padding: {
    style: Ze
  },
  paddingTop: {
    style: Ze
  },
  paddingRight: {
    style: Ze
  },
  paddingBottom: {
    style: Ze
  },
  paddingLeft: {
    style: Ze
  },
  paddingX: {
    style: Ze
  },
  paddingY: {
    style: Ze
  },
  paddingInline: {
    style: Ze
  },
  paddingInlineStart: {
    style: Ze
  },
  paddingInlineEnd: {
    style: Ze
  },
  paddingBlock: {
    style: Ze
  },
  paddingBlockStart: {
    style: Ze
  },
  paddingBlockEnd: {
    style: Ze
  },
  m: {
    style: Je
  },
  mt: {
    style: Je
  },
  mr: {
    style: Je
  },
  mb: {
    style: Je
  },
  ml: {
    style: Je
  },
  mx: {
    style: Je
  },
  my: {
    style: Je
  },
  margin: {
    style: Je
  },
  marginTop: {
    style: Je
  },
  marginRight: {
    style: Je
  },
  marginBottom: {
    style: Je
  },
  marginLeft: {
    style: Je
  },
  marginX: {
    style: Je
  },
  marginY: {
    style: Je
  },
  marginInline: {
    style: Je
  },
  marginInlineStart: {
    style: Je
  },
  marginInlineEnd: {
    style: Je
  },
  marginBlock: {
    style: Je
  },
  marginBlockStart: {
    style: Je
  },
  marginBlockEnd: {
    style: Je
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: wo
  },
  rowGap: {
    style: Po
  },
  columnGap: {
    style: Ro
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: St
  },
  maxWidth: {
    style: Ni
  },
  minWidth: {
    transform: St
  },
  height: {
    transform: St
  },
  maxHeight: {
    transform: St
  },
  minHeight: {
    transform: St
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function yp(...e) {
  const t = e.reduce((o, i) => o.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function vp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xp() {
  function e(n, o, i, a) {
    const s = {
      [n]: o,
      theme: i
    }, l = a[n];
    if (!l)
      return {
        [n]: o
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: p,
      style: m
    } = l;
    if (o == null)
      return null;
    if (u === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const g = Eo(i, u) || {};
    return m ? m(s) : tn(s, o, (v) => {
      let h = no(g, p, v);
      return v === h && typeof v == "string" && (h = no(g, p, `${n}${v === "default" ? "" : de(v)}`, v)), c === !1 ? h : {
        [c]: h
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = i.unstable_sxConfig ?? $o;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Nu(i.breakpoints), p = Object.keys(u);
      let m = u;
      return Object.keys(c).forEach((g) => {
        const y = vp(c[g], i);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              m = cr(m, e(g, y, i, a));
            else {
              const v = tn({
                theme: i
              }, y, (h) => ({
                [g]: h
              }));
              yp(v, y) ? m[g] = t({
                sx: y,
                theme: i
              }) : m = cr(m, v);
            }
          else
            m = cr(m, e(g, y, i, a));
      }), Ru(i, Mu(p, m));
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const kr = xp();
kr.filterProps = ["sx"];
function Ep(e, t) {
  var o;
  const n = this;
  if (n.vars) {
    if (!((o = n.colorSchemes) != null && o[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return (i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    };
  }
  return n.palette.mode === e ? t : {};
}
function Mi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: i,
    shape: a = {},
    ...s
  } = e, l = wu(n), c = Ks(i);
  let u = pt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...Iu,
      ...a
    }
  }, s);
  return u = ku(u), u.applyStyles = Ep, u = t.reduce((p, m) => pt(p, m), u), u.unstable_sxConfig = {
    ...$o,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return kr({
      sx: m,
      theme: this
    });
  }, u;
}
function Sp(e) {
  return Object.keys(e).length === 0;
}
function Tp(e = null) {
  const t = S.useContext($i);
  return !t || Sp(t) ? e : t;
}
const Op = Mi();
function ji(e = Op) {
  return Tp(e);
}
function Gs({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = ji(n), i = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ B.jsx(Hs, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: r.object,
  /**
   * @ignore
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool]),
  /**
   * @ignore
   */
  themeId: r.string
});
const ka = (e) => e, Cp = () => {
  let e = ka;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ka;
    }
  };
}, wp = Cp();
function Xs(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Xs(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ye() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Xs(e)) && (o && (o += " "), o += t);
  return o;
}
const Rp = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ze(e, t, n = "Mui") {
  const o = Rp[t];
  return o ? `${n}-${o}` : `${wp.generate(e)}-${t}`;
}
function Ue(e, t, n = "Mui") {
  const o = {};
  return t.forEach((i) => {
    o[i] = ze(e, i, n);
  }), o;
}
var si = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function Pp() {
  if (Ia) return Ae;
  Ia = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(f) {
    if (typeof f == "object" && f !== null) {
      var T = f.$$typeof;
      switch (T) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case o:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case g:
                case m:
                case a:
                  return f;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = e, Ae.ForwardRef = c, Ae.Fragment = n, Ae.Lazy = g, Ae.Memo = m, Ae.Portal = t, Ae.Profiler = i, Ae.StrictMode = o, Ae.Suspense = u, Ae.SuspenseList = p, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(f) {
    return h(f) === s;
  }, Ae.isContextProvider = function(f) {
    return h(f) === a;
  }, Ae.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ae.isForwardRef = function(f) {
    return h(f) === c;
  }, Ae.isFragment = function(f) {
    return h(f) === n;
  }, Ae.isLazy = function(f) {
    return h(f) === g;
  }, Ae.isMemo = function(f) {
    return h(f) === m;
  }, Ae.isPortal = function(f) {
    return h(f) === t;
  }, Ae.isProfiler = function(f) {
    return h(f) === i;
  }, Ae.isStrictMode = function(f) {
    return h(f) === o;
  }, Ae.isSuspense = function(f) {
    return h(f) === u;
  }, Ae.isSuspenseList = function(f) {
    return h(f) === p;
  }, Ae.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === p || f === y || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === m || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
  }, Ae.typeOf = h, Ae;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function $p() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = !1, h = !1, f = !1, T = !1, C = !1, b;
    b = Symbol.for("react.module.reference");
    function O(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === i || C || I === o || I === u || I === p || T || I === y || v || h || f || typeof I == "object" && I !== null && (I.$$typeof === g || I.$$typeof === m || I.$$typeof === a || I.$$typeof === s || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === b || I.getModuleId !== void 0));
    }
    function x(I) {
      if (typeof I == "object" && I !== null) {
        var pe = I.$$typeof;
        switch (pe) {
          case e:
            var te = I.type;
            switch (te) {
              case n:
              case i:
              case o:
              case u:
              case p:
                return te;
              default:
                var Fe = te && te.$$typeof;
                switch (Fe) {
                  case l:
                  case s:
                  case c:
                  case g:
                  case m:
                  case a:
                    return Fe;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var R = s, k = a, F = e, d = c, w = n, j = g, A = m, V = t, z = i, q = o, _ = u, Y = p, K = !1, ie = !1;
    function D(I) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(I) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(I) {
      return x(I) === s;
    }
    function Z(I) {
      return x(I) === a;
    }
    function U(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function X(I) {
      return x(I) === c;
    }
    function oe(I) {
      return x(I) === n;
    }
    function se(I) {
      return x(I) === g;
    }
    function G(I) {
      return x(I) === m;
    }
    function re(I) {
      return x(I) === t;
    }
    function J(I) {
      return x(I) === i;
    }
    function ue(I) {
      return x(I) === o;
    }
    function M(I) {
      return x(I) === u;
    }
    function ge(I) {
      return x(I) === p;
    }
    Ne.ContextConsumer = R, Ne.ContextProvider = k, Ne.Element = F, Ne.ForwardRef = d, Ne.Fragment = w, Ne.Lazy = j, Ne.Memo = A, Ne.Portal = V, Ne.Profiler = z, Ne.StrictMode = q, Ne.Suspense = _, Ne.SuspenseList = Y, Ne.isAsyncMode = D, Ne.isConcurrentMode = W, Ne.isContextConsumer = ae, Ne.isContextProvider = Z, Ne.isElement = U, Ne.isForwardRef = X, Ne.isFragment = oe, Ne.isLazy = se, Ne.isMemo = G, Ne.isPortal = re, Ne.isProfiler = J, Ne.isStrictMode = ue, Ne.isSuspense = M, Ne.isSuspenseList = ge, Ne.isValidElementType = O, Ne.typeOf = x;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? si.exports = Pp() : si.exports = $p();
var Na = si.exports;
function Js(e, t = "") {
  return e.displayName || e.name || t;
}
function Ma(e, t, n) {
  const o = Js(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function kp(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Js(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Na.ForwardRef:
          return Ma(e, e.render, "ForwardRef");
        case Na.Memo:
          return Ma(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ip = Mi();
function Ko(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function li(e, t, n) {
  return Mp(t) ? n : t[e] || t;
}
const Br = Symbol("mui.processed_props");
function Vr(e, t, n) {
  if (Br in e)
    return e[Br];
  const o = {
    ...e,
    theme: li(t, e.theme, n)
  };
  return e[Br] = o, o[Br] = o, o;
}
function Ap(e) {
  return e ? (t, n) => n[e] : null;
}
function Jr(e, t) {
  var o;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => Jr(i, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const {
      variants: i,
      ...a
    } = n;
    let s = a, l;
    e: for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      if (typeof u.props == "function") {
        if (l ?? (l = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !u.props(l))
          continue;
      } else
        for (const p in u.props)
          if (t[p] !== u.props[p] && ((o = t.ownerState) == null ? void 0 : o[p]) !== u.props[p])
            continue e;
      Array.isArray(s) || (s = [s]), typeof u.style == "function" ? (l ?? (l = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), s.push(u.style(l))) : s.push(u.style);
    }
    return s;
  }
  return n;
}
function Np(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ip,
    rootShouldForwardProp: o = Ko,
    slotShouldForwardProp: i = Ko
  } = e, a = (l) => kr(Vr(l, t, n));
  return a.__mui_systemSx = !0, (l, c = {}) => {
    Ou(l, (R) => R.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = Ap(ja(p)),
      ...v
    } = c, h = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), f = g || !1;
    let T;
    process.env.NODE_ENV !== "production" && u && (T = `${u}-${ja(p || "Root")}`);
    let C = Ko;
    p === "Root" || p === "root" ? C = o : p ? C = i : jp(l) && (C = void 0);
    const b = Tu(l, {
      shouldForwardProp: C,
      label: T,
      ...v
    }), O = (R) => typeof R == "function" && R.__emotion_real !== R || en(R) ? (k) => Jr(R, Vr(k, t, n)) : R, x = (R, ...k) => {
      let F = O(R);
      const d = k ? k.map(O) : [];
      u && y && d.push((A) => {
        const V = li(t, A.theme, n);
        if (!V.components || !V.components[u] || !V.components[u].styleOverrides)
          return null;
        const z = V.components[u].styleOverrides, q = {}, _ = Vr(A, t, n);
        for (const Y in z)
          q[Y] = Jr(z[Y], _);
        return y(A, q);
      }), u && !h && d.push((A) => {
        var q, _;
        const V = li(t, A.theme, n), z = (_ = (q = V == null ? void 0 : V.components) == null ? void 0 : q[u]) == null ? void 0 : _.variants;
        return z ? Jr({
          variants: z
        }, Vr(A, t, n)) : null;
      }), f || d.push(a);
      const w = d.length - k.length;
      if (Array.isArray(R) && w > 0) {
        const A = new Array(w).fill("");
        F = [...R, ...A], F.raw = [...R.raw, ...A];
      }
      const j = b(F, ...d);
      if (process.env.NODE_ENV !== "production") {
        let A;
        u && (A = `${u}${de(p || "")}`), A === void 0 && (A = `Styled(${kp(l)})`), j.displayName = A;
      }
      return l.muiName && (j.muiName = l.muiName), j;
    };
    return b.withConfig && (x.withConfig = b.withConfig), x;
  };
}
function Mp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function jp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ja(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ro(e, t) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const c = l;
              n[i][c] = ro(a[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function _p(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : ro(t.components[n].defaultProps, o);
}
function Dp({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let i = ji(n);
  return o && (i = i[o] || i), _p({
    theme: i,
    name: t,
    props: e
  });
}
const nn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function Fp(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function _i(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Fp(e, t, n);
}
function Lp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, i) => i < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function fn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return fn(Lp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : qt(9, e));
  let o = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (o = o.split(" "), i = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : qt(10, i));
  } else
    o = o.split(",");
  return o = o.map((a) => parseFloat(a)), {
    type: n,
    values: o,
    colorSpace: i
  };
}
const Bp = (e) => {
  const t = fn(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, ar = (e, t) => {
  try {
    return Bp(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ko(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Zs(e) {
  e = fn(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, i = t[2] / 100, a = o * Math.min(i, 1 - i), s = (u, p = (u + n / 30) % 12) => i - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ko({
    type: l,
    values: c
  });
}
function ci(e) {
  e = fn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? fn(Zs(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function _a(e, t) {
  const n = ci(e), o = ci(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function at(e, t) {
  return e = fn(e), t = _i(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ko(e);
}
function zr(e, t, n) {
  try {
    return at(e, t);
  } catch {
    return e;
  }
}
function Di(e, t) {
  if (e = fn(e), t = _i(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ko(e);
}
function Be(e, t, n) {
  try {
    return Di(e, t);
  } catch {
    return e;
  }
}
function Fi(e, t) {
  if (e = fn(e), t = _i(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ko(e);
}
function Ve(e, t, n) {
  try {
    return Fi(e, t);
  } catch {
    return e;
  }
}
function Vp(e, t = 0.15) {
  return ci(e) > 0.5 ? Di(e, t) : Fi(e, t);
}
function Wr(e, t, n) {
  try {
    return Vp(e, t);
  } catch {
    return e;
  }
}
function Yt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function zp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Qs(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = a.type;
  return typeof c == "function" && !zp(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ir = Yt(r.element, Qs);
Ir.isRequired = Yt(r.element.isRequired, Qs);
function Wp(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Up(e, t, n, o, i) {
  const a = e[t], s = i || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof a == "function" && !Wp(a) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Li = Yt(r.elementType, Up), Hp = "exact-prop: ​";
function el(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Hp]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function rn(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = i || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Dt = r.oneOfType([r.func, r.object]);
function Da(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function tl(e, t = 166) {
  let n;
  function o(...i) {
    const a = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Go(e, t) {
  var n, o, i;
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((i = (o = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : o.value) == null ? void 0 : i.muiName)
  ) !== -1;
}
function mt(e) {
  return e && e.ownerDocument || document;
}
function wn(e) {
  return mt(e).defaultView || window;
}
function oo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Fa = 0;
function qp(e) {
  const [t, n] = S.useState(e), o = e || t;
  return S.useEffect(() => {
    t == null && (Fa += 1, n(`mui-${Fa}`));
  }, [t]), o;
}
const La = S.useId;
function Bi(e) {
  if (La !== void 0) {
    const t = La();
    return e ?? t;
  }
  return qp(e);
}
function Yp(e, t, n, o, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function ur({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: i
  } = S.useRef(e !== void 0), [a, s] = S.useState(t), l = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    S.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, e]);
    const {
      current: u
    } = S.useRef(t);
    S.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = S.useCallback((u) => {
    i || s(u);
  }, []);
  return [l, c];
}
function Wt(e) {
  const t = S.useRef(e);
  return nn(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function rt(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      oo(n, t);
    });
  }, e);
}
const Ba = {};
function nl(e, t) {
  const n = S.useRef(Ba);
  return n.current === Ba && (n.current = e(t)), n;
}
const Kp = [];
function Gp(e) {
  S.useEffect(e, Kp);
}
class Vi {
  constructor() {
    Zn(this, "currentId", null);
    Zn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Zn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Vi();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function rl() {
  const e = nl(Vi.create).current;
  return Gp(e.disposeEffect), e;
}
function Va(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function ol(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Xp = (e) => {
  const t = S.useRef({});
  return S.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Jp(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function il(e, t, n, o) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const a = Jp(i);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function al(e, t, ...n) {
  return e[t] === void 0 ? null : il(e, t, ...n);
}
function ui() {
  return null;
}
al.isRequired = il;
ui.isRequired = ui;
const zi = process.env.NODE_ENV === "production" ? ui : al;
function qe(e, t, n = void 0) {
  const o = {};
  for (const i in e) {
    const a = e[i];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const u = a[c];
      u && (s += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (s += " " + n[u]));
    }
    o[i] = s;
  }
  return o;
}
function Zp(e) {
  return typeof e == "string";
}
function sl(e, t, n) {
  return e === void 0 || Zp(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function ll(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function za(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function cl(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: i,
    className: a
  } = e;
  if (!t) {
    const y = ye(n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), v = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...o == null ? void 0 : o.style
    }, h = {
      ...n,
      ...i,
      ...o
    };
    return y.length > 0 && (h.className = y), Object.keys(v).length > 0 && (h.style = v), {
      props: h,
      internalRef: void 0
    };
  }
  const s = ll({
    ...i,
    ...o
  }), l = za(o), c = za(i), u = t(s), p = ye(u == null ? void 0 : u.className, n == null ? void 0 : n.className, a, i == null ? void 0 : i.className, o == null ? void 0 : o.className), m = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...o == null ? void 0 : o.style
  }, g = {
    ...u,
    ...n,
    ...c,
    ...l
  };
  return p.length > 0 && (g.className = p), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: u.ref
  };
}
function ul(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function pi(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1,
    ...a
  } = e, s = i ? {} : ul(n, o), {
    props: l,
    internalRef: c
  } = cl({
    ...a,
    externalSlotProps: s
  }), u = rt(c, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return sl(t, {
    ...l,
    ref: u
  }, o);
}
function Ar(e) {
  return !e || !/* @__PURE__ */ S.isValidElement(e) ? null : e.props.propertyIsEnumerable("ref") ? e.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    e.ref
  );
}
const Qp = /* @__PURE__ */ S.createContext();
process.env.NODE_ENV !== "production" && (r.node, r.bool);
const pl = () => S.useContext(Qp) ?? !1, ed = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (r.node, r.object);
function td(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const i = t.components[n];
  return i.defaultProps ? ro(i.defaultProps, o) : !i.styleOverrides && !i.variants ? ro(i, o) : o;
}
function nd({
  props: e,
  name: t
}) {
  const n = S.useContext(ed);
  return td({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function rd(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const i = o[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...o.slice(1))})` : `, ${i}`;
  }
  return (o, ...i) => `var(--${e ? `${e}-` : ""}${o}${t(...i)})`;
}
const Wa = (e, t, n, o = []) => {
  let i = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = o.includes(a) ? [] : {}), i = i[a]);
  });
}, od = (e, t, n) => {
  function o(i, a = [], s = []) {
    Object.entries(i).forEach(([l, c]) => {
      (!n || n && !n([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  o(e);
}, id = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function Xo(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, i = {}, a = {}, s = {};
  return od(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(l, c))) {
        const p = `--${n ? `${n}-` : ""}${l.join("-")}`, m = id(l, c);
        Object.assign(i, {
          [p]: m
        }), Wa(a, l, `var(${p})`, u), Wa(s, l, `var(${p}, ${m})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: a,
    varsWithDefaults: s
  };
}
function ad(e, t = {}) {
  const {
    getSelector: n = f,
    disableCssColorScheme: o,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...c
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: m
  } = Xo(c, t);
  let g = m;
  const y = {}, {
    [l]: v,
    ...h
  } = a;
  if (Object.entries(h || {}).forEach(([b, O]) => {
    const {
      vars: x,
      css: R,
      varsWithDefaults: k
    } = Xo(O, t);
    g = pt(g, k), y[b] = {
      css: R,
      vars: x
    };
  }), v) {
    const {
      css: b,
      vars: O,
      varsWithDefaults: x
    } = Xo(v, t);
    g = pt(g, x), y[l] = {
      css: b,
      vars: O
    };
  }
  function f(b, O) {
    var R, k;
    let x = i;
    if (i === "class" && (x = ".%s"), i === "data" && (x = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (x = `[${i}="%s"]`), b) {
      if (x === "media")
        return e.defaultColorScheme === b ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (R = a[b]) == null ? void 0 : R.palette) == null ? void 0 : k.mode) || b})`]: {
            ":root": O
          }
        };
      if (x)
        return e.defaultColorScheme === b ? `:root, ${x.replace("%s", String(b))}` : x.replace("%s", String(b));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let b = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: O
      }]) => {
        b = pt(b, O);
      }), b;
    },
    generateStyleSheets: () => {
      var F, d;
      const b = [], O = e.defaultColorScheme || "light";
      function x(w, j) {
        Object.keys(j).length && b.push(typeof w == "string" ? {
          [w]: {
            ...j
          }
        } : w);
      }
      x(n(void 0, {
        ...p
      }), p);
      const {
        [O]: R,
        ...k
      } = y;
      if (R) {
        const {
          css: w
        } = R, j = (d = (F = a[O]) == null ? void 0 : F.palette) == null ? void 0 : d.mode, A = !o && j ? {
          colorScheme: j,
          ...w
        } : {
          ...w
        };
        x(n(O, {
          ...A
        }), A);
      }
      return Object.entries(k).forEach(([w, {
        css: j
      }]) => {
        var z, q;
        const A = (q = (z = a[w]) == null ? void 0 : z.palette) == null ? void 0 : q.mode, V = !o && A ? {
          colorScheme: A,
          ...j
        } : {
          ...j
        };
        x(n(w, {
          ...V
        }), V);
      }), b;
    }
  };
}
function sd(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Ua = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: hr.white,
    default: hr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Jo = {
  text: {
    primary: hr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: hr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ha(e, t, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fi(e.main, i) : t === "dark" && (e.dark = Di(e.main, a)));
}
function ld(e = "light") {
  return e === "dark" ? {
    main: Mn[200],
    light: Mn[50],
    dark: Mn[400]
  } : {
    main: Mn[700],
    light: Mn[400],
    dark: Mn[800]
  };
}
function cd(e = "light") {
  return e === "dark" ? {
    main: Nn[200],
    light: Nn[50],
    dark: Nn[400]
  } : {
    main: Nn[500],
    light: Nn[300],
    dark: Nn[700]
  };
}
function ud(e = "light") {
  return e === "dark" ? {
    main: An[500],
    light: An[300],
    dark: An[700]
  } : {
    main: An[700],
    light: An[400],
    dark: An[800]
  };
}
function pd(e = "light") {
  return e === "dark" ? {
    main: jn[400],
    light: jn[300],
    dark: jn[700]
  } : {
    main: jn[700],
    light: jn[500],
    dark: jn[900]
  };
}
function dd(e = "light") {
  return e === "dark" ? {
    main: _n[400],
    light: _n[300],
    dark: _n[700]
  } : {
    main: _n[800],
    light: _n[500],
    dark: _n[900]
  };
}
function fd(e = "light") {
  return e === "dark" ? {
    main: tr[400],
    light: tr[300],
    dark: tr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: tr[500],
    dark: tr[900]
  };
}
function Wi(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    ...i
  } = e, a = e.primary || ld(t), s = e.secondary || cd(t), l = e.error || ud(t), c = e.info || pd(t), u = e.success || dd(t), p = e.warning || fd(t);
  function m(h) {
    const f = _a(h, Jo.text.primary) >= n ? Jo.text.primary : Ua.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = _a(h, f);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${f} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const g = ({
    color: h,
    name: f,
    mainShade: T = 500,
    lightShade: C = 300,
    darkShade: b = 700
  }) => {
    if (h = {
      ...h
    }, !h.main && h[T] && (h.main = h[T]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : qt(11, f ? ` (${f})` : "", T));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : qt(12, f ? ` (${f})` : "", JSON.stringify(h.main)));
    return Ha(h, "light", C, o), Ha(h, "dark", b, o), h.contrastText || (h.contrastText = m(h.main)), h;
  }, y = {
    dark: Jo,
    light: Ua
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), pt({
    // A collection of common colors.
    common: {
      ...hr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: mc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...y[t]
  }, i);
}
function md(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [i, a] = o;
    typeof a == "object" && (t[i] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function hd(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function gd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const qa = {
  textTransform: "uppercase"
}, Ya = '"Roboto", "Helvetica", "Arial", sans-serif';
function bd(e, t) {
  const {
    fontFamily: n = Ya,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, y = p || ((f) => `${f / c * g}rem`), v = (f, T, C, b, O) => ({
    fontFamily: n,
    fontWeight: f,
    fontSize: y(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ya ? {
      letterSpacing: `${gd(b / T)}em`
    } : {},
    ...O,
    ...u
  }), h = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(a, 48, 1.167, 0),
    h4: v(a, 34, 1.235, 0.25),
    h5: v(a, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(a, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(a, 16, 1.5, 0.15),
    body2: v(a, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, qa),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, qa),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pt({
    htmlFontSize: c,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...h
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const yd = 0.2, vd = 0.14, xd = 0.12;
function Ye(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xd})`].join(",");
}
const Ed = ["none", Ye(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ye(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ye(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ye(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ye(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ye(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ye(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ye(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ye(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ye(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ye(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ye(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ye(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ye(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ye(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ye(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ye(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ye(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ye(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ye(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ye(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ye(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ye(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ye(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Td = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ka(e) {
  return `${Math.round(e)}ms`;
}
function Od(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Cd(e) {
  const t = {
    ...Sd,
    ...e.easing
  }, n = {
    ...Td,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Od,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof s == "string" ? s : Ka(s)} ${l} ${typeof c == "string" ? c : Ka(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const wd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function di(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: i,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : qt(20));
  const p = Wi(a), m = Mi(e);
  let g = pt(m, {
    mixins: hd(m.breakpoints, o),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ed.slice(),
    typography: bd(p, l),
    transitions: Cd(s),
    zIndex: {
      ...wd
    }
  });
  if (g = pt(g, u), g = t.reduce((y, v) => pt(y, v), g), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (h, f) => {
      let T;
      for (T in h) {
        const C = h[T];
        if (y.includes(T) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = ze("", T);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((h) => {
      const f = g.components[h].styleOverrides;
      f && h.startsWith("Mui") && v(f, h);
    });
  }
  return g.unstable_sxConfig = {
    ...$o,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return kr({
      sx: v,
      theme: this
    });
  }, g;
}
function fi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Rd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const n = fi(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function dl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function fl(e) {
  return e === "dark" ? Rd : [];
}
function Pd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    ...i
  } = e, a = Wi(t);
  return {
    palette: a,
    opacity: {
      ...dl(a.mode),
      ...n
    },
    overlays: o || fl(a.mode),
    ...i
  };
}
function $d(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const kd = (e) => [...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Id = (e) => (t, n) => {
  const o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return kd(e.cssVarPrefix).forEach((s) => {
        a[s] = n[s], delete n[s];
      }), i === "media" ? {
        ":root": n,
        "@media (prefers-color-scheme: dark)": {
          ":root": a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`:root, ${i.replace("%s", t)}`]: n
      } : {
        ":root": {
          ...n,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `:root, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return ":root";
};
function Ad(e) {
  return en(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Nd(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const i = Object.entries(o);
    for (let a = 0; a < i.length; a++) {
      const [s, l] = i[a];
      !Ad(l) || s.startsWith("unstable_") ? delete o[s] : en(l) && (o[s] = {
        ...l
      }, n(o[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Md(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function N(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function sr(e) {
  return !e || !e.startsWith("hsl") ? e : Zs(e);
}
function Qt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ar(sr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function jd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Bt = (e) => {
  try {
    return e();
  } catch {
  }
}, _d = (e = "mui") => rd(e);
function Zo(e, t, n, o) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    e[o] = Pd({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = di({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[o] = {
    ...t,
    palette: a,
    opacity: {
      ...dl(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || fl(i)
  }, s;
}
function Dd(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: i = !1,
    cssVarPrefix: a = "mui",
    shouldSkipGeneratingVar: s = $d,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    ...c
  } = e, u = Object.keys(n)[0], p = o || (n.light && u !== "light" ? "light" : u), m = _d(a), {
    [p]: g,
    light: y,
    dark: v,
    ...h
  } = n, f = {
    ...h
  };
  let T = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : qt(21, p));
  const C = Zo(f, T, c, p);
  y && !f.light && Zo(f, y, void 0, "light"), v && !f.dark && Zo(f, v, void 0, "dark");
  let b = {
    defaultColorScheme: p,
    ...C,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    getCssVar: m,
    colorSchemes: f,
    font: {
      ...md(C.typography),
      ...C.font
    },
    spacing: jd(c.spacing)
  };
  Object.keys(b.colorSchemes).forEach((F) => {
    const d = b.colorSchemes[F].palette, w = (j) => {
      const A = j.split("-"), V = A[1], z = A[2];
      return m(j, d[V][z]);
    };
    if (d.mode === "light" && (N(d.common, "background", "#fff"), N(d.common, "onBackground", "#000")), d.mode === "dark" && (N(d.common, "background", "#000"), N(d.common, "onBackground", "#fff")), Md(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      N(d.Alert, "errorColor", Be(d.error.light, 0.6)), N(d.Alert, "infoColor", Be(d.info.light, 0.6)), N(d.Alert, "successColor", Be(d.success.light, 0.6)), N(d.Alert, "warningColor", Be(d.warning.light, 0.6)), N(d.Alert, "errorFilledBg", w("palette-error-main")), N(d.Alert, "infoFilledBg", w("palette-info-main")), N(d.Alert, "successFilledBg", w("palette-success-main")), N(d.Alert, "warningFilledBg", w("palette-warning-main")), N(d.Alert, "errorFilledColor", Bt(() => d.getContrastText(d.error.main))), N(d.Alert, "infoFilledColor", Bt(() => d.getContrastText(d.info.main))), N(d.Alert, "successFilledColor", Bt(() => d.getContrastText(d.success.main))), N(d.Alert, "warningFilledColor", Bt(() => d.getContrastText(d.warning.main))), N(d.Alert, "errorStandardBg", Ve(d.error.light, 0.9)), N(d.Alert, "infoStandardBg", Ve(d.info.light, 0.9)), N(d.Alert, "successStandardBg", Ve(d.success.light, 0.9)), N(d.Alert, "warningStandardBg", Ve(d.warning.light, 0.9)), N(d.Alert, "errorIconColor", w("palette-error-main")), N(d.Alert, "infoIconColor", w("palette-info-main")), N(d.Alert, "successIconColor", w("palette-success-main")), N(d.Alert, "warningIconColor", w("palette-warning-main")), N(d.AppBar, "defaultBg", w("palette-grey-100")), N(d.Avatar, "defaultBg", w("palette-grey-400")), N(d.Button, "inheritContainedBg", w("palette-grey-300")), N(d.Button, "inheritContainedHoverBg", w("palette-grey-A100")), N(d.Chip, "defaultBorder", w("palette-grey-400")), N(d.Chip, "defaultAvatarColor", w("palette-grey-700")), N(d.Chip, "defaultIconColor", w("palette-grey-700")), N(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(d.LinearProgress, "primaryBg", Ve(d.primary.main, 0.62)), N(d.LinearProgress, "secondaryBg", Ve(d.secondary.main, 0.62)), N(d.LinearProgress, "errorBg", Ve(d.error.main, 0.62)), N(d.LinearProgress, "infoBg", Ve(d.info.main, 0.62)), N(d.LinearProgress, "successBg", Ve(d.success.main, 0.62)), N(d.LinearProgress, "warningBg", Ve(d.warning.main, 0.62)), N(d.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.11)`), N(d.Slider, "primaryTrack", Ve(d.primary.main, 0.62)), N(d.Slider, "secondaryTrack", Ve(d.secondary.main, 0.62)), N(d.Slider, "errorTrack", Ve(d.error.main, 0.62)), N(d.Slider, "infoTrack", Ve(d.info.main, 0.62)), N(d.Slider, "successTrack", Ve(d.success.main, 0.62)), N(d.Slider, "warningTrack", Ve(d.warning.main, 0.62));
      const j = Wr(d.background.default, 0.8);
      N(d.SnackbarContent, "bg", j), N(d.SnackbarContent, "color", Bt(() => d.getContrastText(j))), N(d.SpeedDialAction, "fabHoverBg", Wr(d.background.paper, 0.15)), N(d.StepConnector, "border", w("palette-grey-400")), N(d.StepContent, "border", w("palette-grey-400")), N(d.Switch, "defaultColor", w("palette-common-white")), N(d.Switch, "defaultDisabledColor", w("palette-grey-100")), N(d.Switch, "primaryDisabledColor", Ve(d.primary.main, 0.62)), N(d.Switch, "secondaryDisabledColor", Ve(d.secondary.main, 0.62)), N(d.Switch, "errorDisabledColor", Ve(d.error.main, 0.62)), N(d.Switch, "infoDisabledColor", Ve(d.info.main, 0.62)), N(d.Switch, "successDisabledColor", Ve(d.success.main, 0.62)), N(d.Switch, "warningDisabledColor", Ve(d.warning.main, 0.62)), N(d.TableCell, "border", Ve(zr(d.divider, 1), 0.88)), N(d.Tooltip, "bg", zr(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      N(d.Alert, "errorColor", Ve(d.error.light, 0.6)), N(d.Alert, "infoColor", Ve(d.info.light, 0.6)), N(d.Alert, "successColor", Ve(d.success.light, 0.6)), N(d.Alert, "warningColor", Ve(d.warning.light, 0.6)), N(d.Alert, "errorFilledBg", w("palette-error-dark")), N(d.Alert, "infoFilledBg", w("palette-info-dark")), N(d.Alert, "successFilledBg", w("palette-success-dark")), N(d.Alert, "warningFilledBg", w("palette-warning-dark")), N(d.Alert, "errorFilledColor", Bt(() => d.getContrastText(d.error.dark))), N(d.Alert, "infoFilledColor", Bt(() => d.getContrastText(d.info.dark))), N(d.Alert, "successFilledColor", Bt(() => d.getContrastText(d.success.dark))), N(d.Alert, "warningFilledColor", Bt(() => d.getContrastText(d.warning.dark))), N(d.Alert, "errorStandardBg", Be(d.error.light, 0.9)), N(d.Alert, "infoStandardBg", Be(d.info.light, 0.9)), N(d.Alert, "successStandardBg", Be(d.success.light, 0.9)), N(d.Alert, "warningStandardBg", Be(d.warning.light, 0.9)), N(d.Alert, "errorIconColor", w("palette-error-main")), N(d.Alert, "infoIconColor", w("palette-info-main")), N(d.Alert, "successIconColor", w("palette-success-main")), N(d.Alert, "warningIconColor", w("palette-warning-main")), N(d.AppBar, "defaultBg", w("palette-grey-900")), N(d.AppBar, "darkBg", w("palette-background-paper")), N(d.AppBar, "darkColor", w("palette-text-primary")), N(d.Avatar, "defaultBg", w("palette-grey-600")), N(d.Button, "inheritContainedBg", w("palette-grey-800")), N(d.Button, "inheritContainedHoverBg", w("palette-grey-700")), N(d.Chip, "defaultBorder", w("palette-grey-700")), N(d.Chip, "defaultAvatarColor", w("palette-grey-300")), N(d.Chip, "defaultIconColor", w("palette-grey-300")), N(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(d.LinearProgress, "primaryBg", Be(d.primary.main, 0.5)), N(d.LinearProgress, "secondaryBg", Be(d.secondary.main, 0.5)), N(d.LinearProgress, "errorBg", Be(d.error.main, 0.5)), N(d.LinearProgress, "infoBg", Be(d.info.main, 0.5)), N(d.LinearProgress, "successBg", Be(d.success.main, 0.5)), N(d.LinearProgress, "warningBg", Be(d.warning.main, 0.5)), N(d.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.13)`), N(d.Slider, "primaryTrack", Be(d.primary.main, 0.5)), N(d.Slider, "secondaryTrack", Be(d.secondary.main, 0.5)), N(d.Slider, "errorTrack", Be(d.error.main, 0.5)), N(d.Slider, "infoTrack", Be(d.info.main, 0.5)), N(d.Slider, "successTrack", Be(d.success.main, 0.5)), N(d.Slider, "warningTrack", Be(d.warning.main, 0.5));
      const j = Wr(d.background.default, 0.98);
      N(d.SnackbarContent, "bg", j), N(d.SnackbarContent, "color", Bt(() => d.getContrastText(j))), N(d.SpeedDialAction, "fabHoverBg", Wr(d.background.paper, 0.15)), N(d.StepConnector, "border", w("palette-grey-600")), N(d.StepContent, "border", w("palette-grey-600")), N(d.Switch, "defaultColor", w("palette-grey-300")), N(d.Switch, "defaultDisabledColor", w("palette-grey-600")), N(d.Switch, "primaryDisabledColor", Be(d.primary.main, 0.55)), N(d.Switch, "secondaryDisabledColor", Be(d.secondary.main, 0.55)), N(d.Switch, "errorDisabledColor", Be(d.error.main, 0.55)), N(d.Switch, "infoDisabledColor", Be(d.info.main, 0.55)), N(d.Switch, "successDisabledColor", Be(d.success.main, 0.55)), N(d.Switch, "warningDisabledColor", Be(d.warning.main, 0.55)), N(d.TableCell, "border", Be(zr(d.divider, 1), 0.68)), N(d.Tooltip, "bg", zr(d.grey[700], 0.92));
    }
    Qt(d.background, "default"), Qt(d.background, "paper"), Qt(d.common, "background"), Qt(d.common, "onBackground"), Qt(d, "divider"), Object.keys(d).forEach((j) => {
      const A = d[j];
      A && typeof A == "object" && (A.main && N(d[j], "mainChannel", ar(sr(A.main))), A.light && N(d[j], "lightChannel", ar(sr(A.light))), A.dark && N(d[j], "darkChannel", ar(sr(A.dark))), A.contrastText && N(d[j], "contrastTextChannel", ar(sr(A.contrastText))), j === "text" && (Qt(d[j], "primary"), Qt(d[j], "secondary")), j === "action" && (A.active && Qt(d[j], "active"), A.selected && Qt(d[j], "selected")));
    });
  }), b = t.reduce((F, d) => pt(F, d), b);
  const O = {
    prefix: a,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Id(b)
  }, {
    vars: x,
    generateThemeVars: R,
    generateStyleSheets: k
  } = ad(b, O);
  return b.vars = x, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([F, d]) => {
    b[F] = d;
  }), b.generateThemeVars = R, b.generateStyleSheets = k, b.generateSpacing = function() {
    return Ks(c.spacing, Ai(this));
  }, b.getColorSchemeSelector = sd(l), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = s, b.unstable_sxConfig = {
    ...$o,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, b.unstable_sx = function(d) {
    return kr({
      sx: d,
      theme: this
    });
  }, b.toRuntimeSource = Nd, b;
}
function Ga(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Wi({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Fd(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = n == null ? void 0 : n.mode,
    ...s
  } = e, l = a || "light", c = i == null ? void 0 : i[l], u = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return di(e, ...t);
    let p = n;
    "palette" in e || u[l] && (u[l] !== !0 ? p = u[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const m = di({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, Ga(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, Ga(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Dd({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof o != "boolean" && o
  }, ...t);
}
const Io = Fd();
function Ui() {
  const e = ji(Io);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[go] || e;
}
function Ld({
  props: e,
  name: t
}) {
  return Dp({
    props: e,
    name: t,
    defaultTheme: Io,
    themeId: go
  });
}
function ml(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Gt = (e) => ml(e) && e !== "classes", fe = Np({
  themeId: go,
  defaultTheme: Io,
  rootShouldForwardProp: Gt
});
function hl(e) {
  return /* @__PURE__ */ B.jsx(Gs, {
    ...e,
    defaultTheme: Io,
    themeId: go
  });
}
process.env.NODE_ENV !== "production" && (hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: r.oneOfType([r.array, r.func, r.number, r.object, r.string, r.bool])
});
function Bd(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ B.jsx(hl, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...n
        }) : e
      })
    );
  };
}
const Xa = {
  theme: void 0
};
function De(e) {
  let t, n;
  return (o) => {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Xa.theme = o.theme, i = e(Xa), t = i, n = o.theme), i;
  };
}
process.env.NODE_ENV !== "production" && (r.node, r.object.isRequired);
function Ke(e) {
  return nd(e);
}
function Vd(e) {
  return ze("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const zd = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, i = {
    root: ["root", t !== "inherit" && `color${de(t)}`, `fontSize${de(n)}`]
  };
  return qe(i, Vd, o);
}, Wd = fe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${de(n.color)}`], t[`fontSize${de(n.fontSize)}`]];
  }
})(De(({
  theme: e
}) => {
  var t, n, o, i, a, s, l, c, u, p, m, g, y, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (o = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : o.shorter
    }),
    variants: [
      {
        props: (h) => !h.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : p.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, h]) => h && h.main).map(([h]) => {
        var f, T;
        return {
          props: {
            color: h
          },
          style: {
            color: (T = (f = (e.vars ?? e).palette) == null ? void 0 : f[h]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : v.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), vr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...y
  } = o, v = /* @__PURE__ */ S.isValidElement(i) && i.type === "svg", h = {
    ...o,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: v
  }, f = {};
  p || (f.viewBox = g);
  const T = zd(h);
  return /* @__PURE__ */ B.jsxs(Wd, {
    as: l,
    className: ye(T.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...f,
    ...y,
    ...v && i.props,
    ownerState: h,
    children: [v ? i.props.children : i, m ? /* @__PURE__ */ B.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (vr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: r.oneOfType([r.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: r.oneOfType([r.oneOf(["inherit", "large", "medium", "small"]), r.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: r.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: r.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: r.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: r.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: r.string
});
vr && (vr.muiName = "SvgIcon");
function Hi(e, t) {
  function n(o, i) {
    return /* @__PURE__ */ B.jsx(vr, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...o,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = vr.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(n));
}
var mi = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function Ud() {
  if (Ja) return Me;
  Ja = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(f) {
    if (typeof f == "object" && f !== null) {
      var T = f.$$typeof;
      switch (T) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case o:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case s:
                case c:
                case g:
                case m:
                case a:
                  return f;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Me.ContextConsumer = s, Me.ContextProvider = a, Me.Element = e, Me.ForwardRef = c, Me.Fragment = n, Me.Lazy = g, Me.Memo = m, Me.Portal = t, Me.Profiler = i, Me.StrictMode = o, Me.Suspense = u, Me.SuspenseList = p, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(f) {
    return h(f) === s;
  }, Me.isContextProvider = function(f) {
    return h(f) === a;
  }, Me.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Me.isForwardRef = function(f) {
    return h(f) === c;
  }, Me.isFragment = function(f) {
    return h(f) === n;
  }, Me.isLazy = function(f) {
    return h(f) === g;
  }, Me.isMemo = function(f) {
    return h(f) === m;
  }, Me.isPortal = function(f) {
    return h(f) === t;
  }, Me.isProfiler = function(f) {
    return h(f) === i;
  }, Me.isStrictMode = function(f) {
    return h(f) === o;
  }, Me.isSuspense = function(f) {
    return h(f) === u;
  }, Me.isSuspenseList = function(f) {
    return h(f) === p;
  }, Me.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === p || f === y || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === m || f.$$typeof === a || f.$$typeof === s || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
  }, Me.typeOf = h, Me;
}
var je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function Hd() {
  return Za || (Za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = !1, h = !1, f = !1, T = !1, C = !1, b;
    b = Symbol.for("react.module.reference");
    function O(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === n || I === i || C || I === o || I === u || I === p || T || I === y || v || h || f || typeof I == "object" && I !== null && (I.$$typeof === g || I.$$typeof === m || I.$$typeof === a || I.$$typeof === s || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === b || I.getModuleId !== void 0));
    }
    function x(I) {
      if (typeof I == "object" && I !== null) {
        var pe = I.$$typeof;
        switch (pe) {
          case e:
            var te = I.type;
            switch (te) {
              case n:
              case i:
              case o:
              case u:
              case p:
                return te;
              default:
                var Fe = te && te.$$typeof;
                switch (Fe) {
                  case l:
                  case s:
                  case c:
                  case g:
                  case m:
                  case a:
                    return Fe;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var R = s, k = a, F = e, d = c, w = n, j = g, A = m, V = t, z = i, q = o, _ = u, Y = p, K = !1, ie = !1;
    function D(I) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(I) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(I) {
      return x(I) === s;
    }
    function Z(I) {
      return x(I) === a;
    }
    function U(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function X(I) {
      return x(I) === c;
    }
    function oe(I) {
      return x(I) === n;
    }
    function se(I) {
      return x(I) === g;
    }
    function G(I) {
      return x(I) === m;
    }
    function re(I) {
      return x(I) === t;
    }
    function J(I) {
      return x(I) === i;
    }
    function ue(I) {
      return x(I) === o;
    }
    function M(I) {
      return x(I) === u;
    }
    function ge(I) {
      return x(I) === p;
    }
    je.ContextConsumer = R, je.ContextProvider = k, je.Element = F, je.ForwardRef = d, je.Fragment = w, je.Lazy = j, je.Memo = A, je.Portal = V, je.Profiler = z, je.StrictMode = q, je.Suspense = _, je.SuspenseList = Y, je.isAsyncMode = D, je.isConcurrentMode = W, je.isContextConsumer = ae, je.isContextProvider = Z, je.isElement = U, je.isForwardRef = X, je.isFragment = oe, je.isLazy = se, je.isMemo = G, je.isPortal = re, je.isProfiler = J, je.isStrictMode = ue, je.isSuspense = M, je.isSuspenseList = ge, je.isValidElementType = O, je.typeOf = x;
  }()), je;
}
process.env.NODE_ENV === "production" ? mi.exports = Ud() : mi.exports = Hd();
var qi = mi.exports;
function gl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    n[o] = e[o];
  }
  return n;
}
function hi(e, t) {
  return hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, hi(e, t);
}
function bl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, hi(e, t);
}
const Qa = {
  disabled: !1
};
var qd = process.env.NODE_ENV !== "production" ? r.oneOfType([r.number, r.shape({
  enter: r.number,
  exit: r.number,
  appear: r.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && r.oneOfType([r.string, r.shape({
  enter: r.string,
  exit: r.string,
  active: r.string
}), r.shape({
  enter: r.string,
  enterDone: r.string,
  enterActive: r.string,
  exit: r.string,
  exitDone: r.string,
  exitActive: r.string
})]);
const io = _t.createContext(null);
var Yd = function(t) {
  return t.scrollTop;
}, lr = "unmounted", Sn = "exited", Tn = "entering", Fn = "entered", gi = "exiting", Xt = /* @__PURE__ */ function(e) {
  bl(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = i, l = s && !s.isMounting ? o.enter : o.appear, c;
    return a.appearStatus = null, o.in ? l ? (c = Sn, a.appearStatus = Tn) : c = Fn : o.unmountOnExit || o.mountOnEnter ? c = lr : c = Sn, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === lr ? {
      status: Sn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Tn && s !== Fn && (a = Tn) : (s === Tn || s === Fn) && (a = gi);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, s, l;
    return a = s = l = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, l = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Tn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Dr.findDOMNode(this);
          s && Yd(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Sn && this.setState({
      status: lr
    });
  }, n.performEnter = function(i) {
    var a = this, s = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Dr.findDOMNode(this), l], u = c[0], p = c[1], m = this.getTimeouts(), g = l ? m.appear : m.enter;
    if (!i && !s || Qa.disabled) {
      this.safeSetState({
        status: Fn
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: Tn
    }, function() {
      a.props.onEntering(u, p), a.onTransitionEnd(g, function() {
        a.safeSetState({
          status: Fn
        }, function() {
          a.props.onEntered(u, p);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Dr.findDOMNode(this);
    if (!a || Qa.disabled) {
      this.safeSetState({
        status: Sn
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: gi
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Sn
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Dr.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], p = c[1];
      this.props.addEndListener(u, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === lr)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = gl(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _t.createElement(io.Provider, {
        value: null
      }, typeof s == "function" ? s(i, l) : _t.cloneElement(_t.Children.only(s), l))
    );
  }, t;
}(_t.Component);
Xt.contextType = io;
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: r.shape({
    current: typeof Element > "u" ? r.any : function(e, t, n, o, i, a) {
      var s = e[t];
      return r.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, o, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: r.oneOfType([r.func.isRequired, r.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: r.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: r.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: r.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: r.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: r.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: r.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = qd;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: r.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: r.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: r.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: r.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: r.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: r.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: r.func
} : {};
function Dn() {
}
Xt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Dn,
  onEntering: Dn,
  onEntered: Dn,
  onExit: Dn,
  onExiting: Dn,
  onExited: Dn
};
Xt.UNMOUNTED = lr;
Xt.EXITED = Sn;
Xt.ENTERING = Tn;
Xt.ENTERED = Fn;
Xt.EXITING = gi;
function Kd(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yi(e, t) {
  var n = function(a) {
    return t && qr(a) ? t(a) : a;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && lc.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    o[i.key] = n(i);
  }), o;
}
function Gd(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var o = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in t ? i.length && (o[a] = i, i = []) : i.push(a);
  var s, l = {};
  for (var c in t) {
    if (o[c])
      for (s = 0; s < o[c].length; s++) {
        var u = o[c][s];
        l[o[c][s]] = n(u);
      }
    l[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    l[i[s]] = n(i[s]);
  return l;
}
function On(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Xd(e, t) {
  return Yi(e.children, function(n) {
    return Yr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: On(n, "appear", e),
      enter: On(n, "enter", e),
      exit: On(n, "exit", e)
    });
  });
}
function Jd(e, t, n) {
  var o = Yi(e.children), i = Gd(t, o);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (qr(s)) {
      var l = a in t, c = a in o, u = t[a], p = qr(u) && !u.props.in;
      c && (!l || p) ? i[a] = Yr(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: On(s, "exit", e),
        enter: On(s, "enter", e)
      }) : !c && l && !p ? i[a] = Yr(s, {
        in: !1
      }) : c && l && qr(u) && (i[a] = Yr(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: On(s, "exit", e),
        enter: On(s, "enter", e)
      }));
    }
  }), i;
}
var Zd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Qd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ki = /* @__PURE__ */ function(e) {
  bl(t, e);
  function t(o, i) {
    var a;
    a = e.call(this, o, i) || this;
    var s = a.handleExited.bind(Kd(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, a) {
    var s = a.children, l = a.handleExited, c = a.firstRender;
    return {
      children: c ? Xd(i, l) : Jd(i, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, a) {
    var s = Yi(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(l) {
      var c = eo({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, l = gl(i, ["component", "childFactory"]), c = this.state.contextValue, u = Zd(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, a === null ? /* @__PURE__ */ _t.createElement(io.Provider, {
      value: c
    }, u) : /* @__PURE__ */ _t.createElement(io.Provider, {
      value: c
    }, /* @__PURE__ */ _t.createElement(a, l, u));
  }, t;
}(_t.Component);
Ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: r.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: r.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: r.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: r.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: r.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: r.func
} : {};
Ki.defaultProps = Qd;
const yl = (e) => e.scrollTop;
function ao(e, t) {
  const {
    timeout: n,
    easing: o,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: i.transitionDelay
  };
}
function ef(e) {
  return ze("MuiPaper", e);
}
Ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const tf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: i
  } = e, a = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return qe(a, ef, i);
}, nf = fe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(De(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Ao = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var y;
  const o = Ke({
    props: t,
    name: "MuiPaper"
  }), i = Ui(), {
    className: a,
    component: s = "div",
    elevation: l = 1,
    square: c = !1,
    variant: u = "elevation",
    ...p
  } = o, m = {
    ...o,
    component: s,
    elevation: l,
    square: c,
    variant: u
  }, g = tf(m);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ B.jsx(nf, {
    as: s,
    ownerState: m,
    className: ye(g.root, a),
    ref: n,
    ...p,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (y = i.vars.overlays) == null ? void 0 : y[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${at("#fff", fi(l))}, ${at("#fff", fi(l))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Yt(zi, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: r.oneOfType([r.oneOf(["elevation", "outlined"]), r.string])
});
function gt(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: i,
    externalForwardedProps: a,
    getSlotOwnerState: s,
    internalForwardedProps: l,
    ...c
  } = t, {
    component: u,
    slots: p = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = a, y = p[e] || o, v = ul(m[e], i), {
    props: {
      component: h,
      ...f
    },
    internalRef: T
  } = cl({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: v
  }), C = rt(T, v == null ? void 0 : v.ref, t.ref), b = s ? s(f) : {}, O = {
    ...i,
    ...b
  }, x = e === "root" ? h || u : h, R = sl(y, {
    ...e === "root" && !u && !p[e] && l,
    ...e !== "root" && !p[e] && l,
    ...f,
    ...x && {
      as: x
    },
    ref: C
  }, O);
  return Object.keys(b).forEach((k) => {
    delete R[k];
  }), [y, R];
}
class so {
  constructor() {
    Zn(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new so();
  }
  static use() {
    const t = nl(so.create).current, [n, o] = S.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, S.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = of(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function rf() {
  return so.use();
}
function of() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function vl(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [p, m] = S.useState(!1), g = ye(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, v = ye(n.child, p && n.childLeaving, o && n.childPulsate);
  return !l && !p && m(!0), S.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ B.jsx("span", {
    className: g,
    style: y,
    children: /* @__PURE__ */ B.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (vl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object.isRequired,
  className: r.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: r.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: r.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: r.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: r.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: r.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: r.number,
  /**
   * exit delay
   */
  timeout: r.number.isRequired
});
const $t = Ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), bi = 550, af = 80, sf = Rr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, lf = Rr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, cf = Rr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, uf = fe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), pf = fe(vl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${$t.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${sf};
    animation-duration: ${bi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${$t.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${$t.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${$t.childLeaving} {
    opacity: 0;
    animation-name: ${lf};
    animation-duration: ${bi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${$t.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${cf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, xl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s,
    ...l
  } = o, [c, u] = S.useState([]), p = S.useRef(0), m = S.useRef(null);
  S.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const g = S.useRef(!1), y = rl(), v = S.useRef(null), h = S.useRef(null), f = S.useCallback((O) => {
    const {
      pulsate: x,
      rippleX: R,
      rippleY: k,
      rippleSize: F,
      cb: d
    } = O;
    u((w) => [...w, /* @__PURE__ */ B.jsx(pf, {
      classes: {
        ripple: ye(a.ripple, $t.ripple),
        rippleVisible: ye(a.rippleVisible, $t.rippleVisible),
        ripplePulsate: ye(a.ripplePulsate, $t.ripplePulsate),
        child: ye(a.child, $t.child),
        childLeaving: ye(a.childLeaving, $t.childLeaving),
        childPulsate: ye(a.childPulsate, $t.childPulsate)
      },
      timeout: bi,
      pulsate: x,
      rippleX: R,
      rippleY: k,
      rippleSize: F
    }, p.current)]), p.current += 1, m.current = d;
  }, [a]), T = S.useCallback((O = {}, x = {}, R = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: F = i || x.pulsate,
      fakeElement: d = !1
      // For test purposes
    } = x;
    if ((O == null ? void 0 : O.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (O == null ? void 0 : O.type) === "touchstart" && (g.current = !0);
    const w = d ? null : h.current, j = w ? w.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, V, z;
    if (F || O === void 0 || O.clientX === 0 && O.clientY === 0 || !O.clientX && !O.touches)
      A = Math.round(j.width / 2), V = Math.round(j.height / 2);
    else {
      const {
        clientX: q,
        clientY: _
      } = O.touches && O.touches.length > 0 ? O.touches[0] : O;
      A = Math.round(q - j.left), V = Math.round(_ - j.top);
    }
    if (F)
      z = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const q = Math.max(Math.abs((w ? w.clientWidth : 0) - A), A) * 2 + 2, _ = Math.max(Math.abs((w ? w.clientHeight : 0) - V), V) * 2 + 2;
      z = Math.sqrt(q ** 2 + _ ** 2);
    }
    O != null && O.touches ? v.current === null && (v.current = () => {
      f({
        pulsate: k,
        rippleX: A,
        rippleY: V,
        rippleSize: z,
        cb: R
      });
    }, y.start(af, () => {
      v.current && (v.current(), v.current = null);
    })) : f({
      pulsate: k,
      rippleX: A,
      rippleY: V,
      rippleSize: z,
      cb: R
    });
  }, [i, f, y]), C = S.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), b = S.useCallback((O, x) => {
    if (y.clear(), (O == null ? void 0 : O.type) === "touchend" && v.current) {
      v.current(), v.current = null, y.start(0, () => {
        b(O, x);
      });
      return;
    }
    v.current = null, u((R) => R.length > 0 ? R.slice(1) : R), m.current = x;
  }, [y]);
  return S.useImperativeHandle(n, () => ({
    pulsate: C,
    start: T,
    stop: b
  }), [C, T, b]), /* @__PURE__ */ B.jsx(uf, {
    className: ye($t.root, a.root, s),
    ref: h,
    ...l,
    children: /* @__PURE__ */ B.jsx(Ki, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (xl.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string
});
function df(e) {
  return ze("MuiButtonBase", e);
}
const ff = Ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), mf = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: i
  } = e, s = qe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, df, i);
  return n && o && (s.root += ` ${o}`), s;
}, hf = fe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ff.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), lo = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: g = !1,
    focusVisibleClassName: y,
    LinkComponent: v = "a",
    onBlur: h,
    onClick: f,
    onContextMenu: T,
    onDragLeave: C,
    onFocus: b,
    onFocusVisible: O,
    onKeyDown: x,
    onKeyUp: R,
    onMouseDown: k,
    onMouseLeave: F,
    onMouseUp: d,
    onTouchEnd: w,
    onTouchMove: j,
    onTouchStart: A,
    tabIndex: V = 0,
    TouchRippleProps: z,
    touchRippleRef: q,
    type: _,
    ...Y
  } = o, K = S.useRef(null), ie = rf(), D = rt(ie.ref, q), [W, ae] = S.useState(!1);
  u && W && ae(!1), S.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ae(!0), K.current.focus();
    }
  }), []);
  const Z = ie.shouldMount && !p && !u;
  S.useEffect(() => {
    W && g && !p && ie.pulsate();
  }, [p, g, W, ie]);
  function U(ce, _e, ot = m) {
    return Wt((it) => (_e && _e(it), ot || ie[ce](it), !0));
  }
  const X = U("start", k), oe = U("stop", T), se = U("stop", C), G = U("stop", d), re = U("stop", (ce) => {
    W && ce.preventDefault(), F && F(ce);
  }), J = U("start", A), ue = U("stop", w), M = U("stop", j), ge = U("stop", (ce) => {
    Va(ce.target) || ae(!1), h && h(ce);
  }, !1), I = Wt((ce) => {
    K.current || (K.current = ce.currentTarget), Va(ce.target) && (ae(!0), O && O(ce)), b && b(ce);
  }), pe = () => {
    const ce = K.current;
    return c && c !== "button" && !(ce.tagName === "A" && ce.href);
  }, te = Wt((ce) => {
    g && !ce.repeat && W && ce.key === " " && ie.stop(ce, () => {
      ie.start(ce);
    }), ce.target === ce.currentTarget && pe() && ce.key === " " && ce.preventDefault(), x && x(ce), ce.target === ce.currentTarget && pe() && ce.key === "Enter" && !u && (ce.preventDefault(), f && f(ce));
  }), Fe = Wt((ce) => {
    g && ce.key === " " && W && !ce.defaultPrevented && ie.stop(ce, () => {
      ie.pulsate(ce);
    }), R && R(ce), f && ce.target === ce.currentTarget && pe() && ce.key === " " && !ce.defaultPrevented && f(ce);
  });
  let he = c;
  he === "button" && (Y.href || Y.to) && (he = v);
  const Ce = {};
  he === "button" ? (Ce.type = _ === void 0 ? "button" : _, Ce.disabled = u) : (!Y.href && !Y.to && (Ce.role = "button"), u && (Ce["aria-disabled"] = u));
  const Le = rt(n, K), xe = {
    ...o,
    centerRipple: a,
    component: c,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: V,
    focusVisible: W
  }, Ge = mf(xe);
  return /* @__PURE__ */ B.jsxs(hf, {
    as: he,
    className: ye(Ge.root, l),
    ownerState: xe,
    onBlur: ge,
    onClick: f,
    onContextMenu: oe,
    onFocus: I,
    onKeyDown: te,
    onKeyUp: Fe,
    onMouseDown: X,
    onMouseLeave: re,
    onMouseUp: G,
    onDragLeave: se,
    onTouchEnd: ue,
    onTouchMove: M,
    onTouchStart: J,
    ref: Le,
    tabIndex: u ? -1 : V,
    type: _,
    ...Ce,
    ...Y,
    children: [s, Z ? /* @__PURE__ */ B.jsx(xl, {
      ref: D,
      center: a,
      ...z
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: r.bool,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Li,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: r.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: r.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: r.string,
  /**
   * @ignore
   */
  href: r.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: r.elementType,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onContextMenu: r.func,
  /**
   * @ignore
   */
  onDragLeave: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * @ignore
   */
  onMouseDown: r.func,
  /**
   * @ignore
   */
  onMouseLeave: r.func,
  /**
   * @ignore
   */
  onMouseUp: r.func,
  /**
   * @ignore
   */
  onTouchEnd: r.func,
  /**
   * @ignore
   */
  onTouchMove: r.func,
  /**
   * @ignore
   */
  onTouchStart: r.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @default 0
   */
  tabIndex: r.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: r.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: r.oneOfType([r.func, r.shape({
    current: r.shape({
      pulsate: r.func.isRequired,
      start: r.func.isRequired,
      stop: r.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: r.oneOfType([r.oneOf(["button", "reset", "submit"]), r.string])
});
function gf(e) {
  return ze("MuiIconButton", e);
}
const bf = Ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), yf = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: i,
    size: a
  } = e, s = {
    root: ["root", n && "disabled", o !== "default" && `color${de(o)}`, i && `edge${de(i)}`, `size${de(a)}`]
  };
  return qe(s, gf, t);
}, vf = fe(lo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${de(n.color)}`], n.edge && t[`edge${de(n.edge)}`], t[`size${de(n.size)}`]];
  }
})(De(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), De(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(([, t]) => t && t.main).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(([, t]) => t && t.main).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${bf.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Gi = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: a,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    disableRipple: p = !1,
    size: m = "medium",
    ...g
  } = o, y = {
    ...o,
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    disableRipple: p,
    size: m
  }, v = yf(y);
  return /* @__PURE__ */ B.jsx(vf, {
    className: ye(v.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    disableRipple: p,
    ref: n,
    ...g,
    ownerState: y,
    children: a
  });
});
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Yt(r.node, (e) => S.Children.toArray(e.children).some((n) => /* @__PURE__ */ S.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const xf = Hi(/* @__PURE__ */ B.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function es(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Ef(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: o,
    matchFrom: i = "any",
    stringify: a,
    trim: s = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let p = s ? c.trim() : c;
    n && (p = p.toLowerCase()), t && (p = es(p));
    const m = p ? l.filter((g) => {
      let y = (a || u)(g);
      return n && (y = y.toLowerCase()), t && (y = es(y)), i === "start" ? y.indexOf(p) === 0 : y.indexOf(p) > -1;
    }) : l;
    return typeof o == "number" ? m.slice(0, o) : m;
  };
}
const Sf = Ef(), ts = 5, Tf = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
}, Of = [];
function Cf(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Tf,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: o = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: s = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: p = e.multiple ? Of : null,
    disableClearable: m = !1,
    disableCloseOnSelect: g = !1,
    disabled: y,
    disabledItemsFocusable: v = !1,
    disableListWrap: h = !1,
    filterOptions: f = Sf,
    filterSelectedOptions: T = !1,
    freeSolo: C = !1,
    getOptionDisabled: b,
    getOptionKey: O,
    getOptionLabel: x = (P) => P.label ?? P,
    groupBy: R,
    handleHomeEndKeys: k = !e.freeSolo,
    id: F,
    includeInputInList: d = !1,
    inputValue: w,
    isOptionEqualToValue: j = (P, $) => P === $,
    multiple: A = !1,
    onChange: V,
    onClose: z,
    onHighlightChange: q,
    onInputChange: _,
    onOpen: Y,
    open: K,
    openOnFocus: ie = !1,
    options: D,
    readOnly: W = !1,
    selectOnFocus: ae = !e.freeSolo,
    value: Z
  } = e, U = Bi(F);
  let X = x;
  X = (P) => {
    const $ = x(P);
    if (typeof $ != "string") {
      if (process.env.NODE_ENV !== "production") {
        const H = $ === void 0 ? "undefined" : `${typeof $} (${$})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${H} instead of a string for ${JSON.stringify(P)}.`);
      }
      return String($);
    }
    return $;
  };
  const oe = S.useRef(!1), se = S.useRef(!0), G = S.useRef(null), re = S.useRef(null), [J, ue] = S.useState(null), [M, ge] = S.useState(-1), I = i ? 0 : -1, pe = S.useRef(I), [te, Fe] = ur({
    controlled: Z,
    default: p,
    name: u
  }), [he, Ce] = ur({
    controlled: w,
    default: "",
    name: u,
    state: "inputValue"
  }), [Le, xe] = S.useState(!1), Ge = S.useCallback((P, $, H) => {
    if (!(A ? te.length < $.length : $ !== null) && !l)
      return;
    let ee;
    if (A)
      ee = "";
    else if ($ == null)
      ee = "";
    else {
      const be = X($);
      ee = typeof be == "string" ? be : "";
    }
    he !== ee && (Ce(ee), _ && _(P, ee, H));
  }, [X, he, A, _, Ce, l, te]), [ce, _e] = ur({
    controlled: K,
    default: !1,
    name: u,
    state: "open"
  }), [ot, it] = S.useState(!0), Xe = !A && te != null && he === X(te), We = ce && !W, we = We ? f(
    D.filter((P) => !(T && (A ? te : [te]).some(($) => $ !== null && j(P, $)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Xe && ot ? "" : he,
      getOptionLabel: X
    }
  ) : [], Qe = Xp({
    filteredOptions: we,
    value: te,
    inputValue: he
  });
  S.useEffect(() => {
    const P = te !== Qe.value;
    Le && !P || C && !P || Ge(null, te, "reset");
  }, [te, Ge, Le, Qe.value, C]);
  const Se = ce && we.length > 0 && !W, dt = Wt((P) => {
    P === -1 ? G.current.focus() : J.querySelector(`[data-tag-index="${P}"]`).focus();
  });
  S.useEffect(() => {
    A && M > te.length - 1 && (ge(-1), dt(-1));
  }, [te, A, M, dt]);
  function Ct(P, $) {
    if (!re.current || P < 0 || P >= we.length)
      return -1;
    let H = P;
    for (; ; ) {
      const ne = re.current.querySelector(`[data-option-index="${H}"]`), ee = v ? !1 : !ne || ne.disabled || ne.getAttribute("aria-disabled") === "true";
      if (ne && ne.hasAttribute("tabindex") && !ee)
        return H;
      if ($ === "next" ? H = (H + 1) % we.length : H = (H - 1 + we.length) % we.length, H === P)
        return -1;
    }
  }
  const ht = Wt(({
    event: P,
    index: $,
    reason: H = "auto"
  }) => {
    if (pe.current = $, $ === -1 ? G.current.removeAttribute("aria-activedescendant") : G.current.setAttribute("aria-activedescendant", `${U}-option-${$}`), q && q(P, $ === -1 ? null : we[$], H), !re.current)
      return;
    const ne = re.current.querySelector(`[role="option"].${n}-focused`);
    ne && (ne.classList.remove(`${n}-focused`), ne.classList.remove(`${n}-focusVisible`));
    let ee = re.current;
    if (re.current.getAttribute("role") !== "listbox" && (ee = re.current.parentElement.querySelector('[role="listbox"]')), !ee)
      return;
    if ($ === -1) {
      ee.scrollTop = 0;
      return;
    }
    const be = re.current.querySelector(`[data-option-index="${$}"]`);
    if (be && (be.classList.add(`${n}-focused`), H === "keyboard" && be.classList.add(`${n}-focusVisible`), ee.scrollHeight > ee.clientHeight && H !== "mouse" && H !== "touch")) {
      const me = be, Oe = ee.clientHeight + ee.scrollTop, nt = me.offsetTop + me.offsetHeight;
      nt > Oe ? ee.scrollTop = nt - ee.clientHeight : me.offsetTop - me.offsetHeight * (R ? 1.3 : 0) < ee.scrollTop && (ee.scrollTop = me.offsetTop - me.offsetHeight * (R ? 1.3 : 0));
    }
  }), le = Wt(({
    event: P,
    diff: $,
    direction: H = "next",
    reason: ne = "auto"
  }) => {
    if (!We)
      return;
    const be = Ct((() => {
      const me = we.length - 1;
      if ($ === "reset")
        return I;
      if ($ === "start")
        return 0;
      if ($ === "end")
        return me;
      const Oe = pe.current + $;
      return Oe < 0 ? Oe === -1 && d ? -1 : h && pe.current !== -1 || Math.abs($) > 1 ? 0 : me : Oe > me ? Oe === me + 1 && d ? -1 : h || Math.abs($) > 1 ? me : 0 : Oe;
    })(), H);
    if (ht({
      index: be,
      reason: ne,
      event: P
    }), o && $ !== "reset")
      if (be === -1)
        G.current.value = he;
      else {
        const me = X(we[be]);
        G.current.value = me, me.toLowerCase().indexOf(he.toLowerCase()) === 0 && he.length > 0 && G.current.setSelectionRange(he.length, me.length);
      }
  }), Ee = () => {
    const P = ($, H) => {
      const ne = $ ? X($) : "", ee = H ? X(H) : "";
      return ne === ee;
    };
    if (pe.current !== -1 && Qe.filteredOptions && Qe.filteredOptions.length !== we.length && Qe.inputValue === he && (A ? te.length === Qe.value.length && Qe.value.every(($, H) => X(te[H]) === X($)) : P(Qe.value, te))) {
      const $ = Qe.filteredOptions[pe.current];
      if ($)
        return we.findIndex((H) => X(H) === X($));
    }
    return -1;
  }, He = S.useCallback(() => {
    if (!We)
      return;
    const P = Ee();
    if (P !== -1) {
      pe.current = P;
      return;
    }
    const $ = A ? te[0] : te;
    if (we.length === 0 || $ == null) {
      le({
        diff: "reset"
      });
      return;
    }
    if (re.current) {
      if ($ != null) {
        const H = we[pe.current];
        if (A && H && te.findIndex((ee) => j(H, ee)) !== -1)
          return;
        const ne = we.findIndex((ee) => j(ee, $));
        ne === -1 ? le({
          diff: "reset"
        }) : ht({
          index: ne
        });
        return;
      }
      if (pe.current >= we.length - 1) {
        ht({
          index: we.length - 1
        });
        return;
      }
      ht({
        index: pe.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    we.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    A ? !1 : te,
    T,
    le,
    ht,
    We,
    he,
    A
  ]), wt = Wt((P) => {
    oo(re, P), P && He();
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    (!G.current || G.current.nodeName !== "INPUT") && (G.current && G.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${G.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), S.useEffect(() => {
    He();
  }, [He]);
  const ct = (P) => {
    ce || (_e(!0), it(!0), Y && Y(P));
  }, Rt = (P, $) => {
    ce && (_e(!1), z && z(P, $));
  }, ft = (P, $, H, ne) => {
    if (A) {
      if (te.length === $.length && te.every((ee, be) => ee === $[be]))
        return;
    } else if (te === $)
      return;
    V && V(P, $, H, ne), Fe($);
  }, Ft = S.useRef(!1), jt = (P, $, H = "selectOption", ne = "options") => {
    let ee = H, be = $;
    if (A) {
      if (be = Array.isArray(te) ? te.slice() : [], process.env.NODE_ENV !== "production") {
        const Oe = be.filter((nt) => j($, nt));
        Oe.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Oe.length} matches.`].join(`
`));
      }
      const me = be.findIndex((Oe) => j($, Oe));
      me === -1 ? be.push($) : ne !== "freeSolo" && (be.splice(me, 1), ee = "removeOption");
    }
    Ge(P, be, ee), ft(P, be, ee, {
      option: $
    }), !g && (!P || !P.ctrlKey && !P.metaKey) && Rt(P, ee), (s === !0 || s === "touch" && Ft.current || s === "mouse" && !Ft.current) && G.current.blur();
  };
  function Jt(P, $) {
    if (P === -1)
      return -1;
    let H = P;
    for (; ; ) {
      if ($ === "next" && H === te.length || $ === "previous" && H === -1)
        return -1;
      const ne = J.querySelector(`[data-tag-index="${H}"]`);
      if (!ne || !ne.hasAttribute("tabindex") || ne.disabled || ne.getAttribute("aria-disabled") === "true")
        H += $ === "next" ? 1 : -1;
      else
        return H;
    }
  }
  const gn = (P, $) => {
    if (!A)
      return;
    he === "" && Rt(P, "toggleInput");
    let H = M;
    M === -1 ? he === "" && $ === "previous" && (H = te.length - 1) : (H += $ === "next" ? 1 : -1, H < 0 && (H = 0), H === te.length && (H = -1)), H = Jt(H, $), ge(H), dt(H);
  }, bn = (P) => {
    oe.current = !0, Ce(""), _ && _(P, "", "clear"), ft(P, A ? [] : null, "clear");
  }, an = (P) => ($) => {
    if (P.onKeyDown && P.onKeyDown($), !$.defaultMuiPrevented && (M !== -1 && ["ArrowLeft", "ArrowRight"].indexOf($.key) === -1 && (ge(-1), dt(-1)), $.which !== 229))
      switch ($.key) {
        case "Home":
          We && k && ($.preventDefault(), le({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: $
          }));
          break;
        case "End":
          We && k && ($.preventDefault(), le({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: $
          }));
          break;
        case "PageUp":
          $.preventDefault(), le({
            diff: -ts,
            direction: "previous",
            reason: "keyboard",
            event: $
          }), ct($);
          break;
        case "PageDown":
          $.preventDefault(), le({
            diff: ts,
            direction: "next",
            reason: "keyboard",
            event: $
          }), ct($);
          break;
        case "ArrowDown":
          $.preventDefault(), le({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: $
          }), ct($);
          break;
        case "ArrowUp":
          $.preventDefault(), le({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: $
          }), ct($);
          break;
        case "ArrowLeft":
          gn($, "previous");
          break;
        case "ArrowRight":
          gn($, "next");
          break;
        case "Enter":
          if (pe.current !== -1 && We) {
            const H = we[pe.current], ne = b ? b(H) : !1;
            if ($.preventDefault(), ne)
              return;
            jt($, H, "selectOption"), o && G.current.setSelectionRange(G.current.value.length, G.current.value.length);
          } else C && he !== "" && Xe === !1 && (A && $.preventDefault(), jt($, he, "createOption", "freeSolo"));
          break;
        case "Escape":
          We ? ($.preventDefault(), $.stopPropagation(), Rt($, "escape")) : c && (he !== "" || A && te.length > 0) && ($.preventDefault(), $.stopPropagation(), bn($));
          break;
        case "Backspace":
          if (A && !W && he === "" && te.length > 0) {
            const H = M === -1 ? te.length - 1 : M, ne = te.slice();
            ne.splice(H, 1), ft($, ne, "removeOption", {
              option: te[H]
            });
          }
          break;
        case "Delete":
          if (A && !W && he === "" && te.length > 0 && M !== -1) {
            const H = M, ne = te.slice();
            ne.splice(H, 1), ft($, ne, "removeOption", {
              option: te[H]
            });
          }
          break;
      }
  }, Pn = (P) => {
    xe(!0), ie && !oe.current && ct(P);
  }, yn = (P) => {
    if (t(re)) {
      G.current.focus();
      return;
    }
    xe(!1), se.current = !0, oe.current = !1, a && pe.current !== -1 && We ? jt(P, we[pe.current], "blur") : a && C && he !== "" ? jt(P, he, "blur", "freeSolo") : l && Ge(P, te, "blur"), Rt(P, "blur");
  }, sn = (P) => {
    const $ = P.target.value;
    he !== $ && (Ce($), it(!1), _ && _(P, $, "input")), $ === "" ? !m && !A && ft(P, null, "clear") : ct(P);
  }, vn = (P) => {
    const $ = Number(P.currentTarget.getAttribute("data-option-index"));
    pe.current !== $ && ht({
      event: P,
      index: $,
      reason: "mouse"
    });
  }, ln = (P) => {
    ht({
      event: P,
      index: Number(P.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Ft.current = !0;
  }, $n = (P) => {
    const $ = Number(P.currentTarget.getAttribute("data-option-index"));
    jt(P, we[$], "selectOption"), Ft.current = !1;
  }, Gn = (P) => ($) => {
    const H = te.slice();
    H.splice(P, 1), ft($, H, "removeOption", {
      option: te[P]
    });
  }, kn = (P) => {
    ce ? Rt(P, "toggleInput") : ct(P);
  }, jr = (P) => {
    P.currentTarget.contains(P.target) && P.target.getAttribute("id") !== U && P.preventDefault();
  }, xn = (P) => {
    P.currentTarget.contains(P.target) && (G.current.focus(), ae && se.current && G.current.selectionEnd - G.current.selectionStart === 0 && G.current.select(), se.current = !1);
  }, E = (P) => {
    !y && (he === "" || !ce) && kn(P);
  };
  let L = C && he.length > 0;
  L = L || (A ? te.length > 0 : te !== null);
  let Q = we;
  if (R) {
    const P = /* @__PURE__ */ new Map();
    let $ = !1;
    Q = we.reduce((H, ne, ee) => {
      const be = R(ne);
      return H.length > 0 && H[H.length - 1].group === be ? H[H.length - 1].options.push(ne) : (process.env.NODE_ENV !== "production" && (P.get(be) && !$ && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), $ = !0), P.set(be, !0)), H.push({
        key: ee,
        index: ee,
        group: be,
        options: [ne]
      })), H;
    }, []);
  }
  return y && Le && yn(), {
    getRootProps: (P = {}) => ({
      "aria-owns": Se ? `${U}-listbox` : null,
      ...P,
      onKeyDown: an(P),
      onMouseDown: jr,
      onClick: xn
    }),
    getInputLabelProps: () => ({
      id: `${U}-label`,
      htmlFor: U
    }),
    getInputProps: () => ({
      id: U,
      value: he,
      onBlur: yn,
      onFocus: Pn,
      onChange: sn,
      onMouseDown: E,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": We ? "" : null,
      "aria-autocomplete": o ? "both" : "list",
      "aria-controls": Se ? `${U}-listbox` : void 0,
      "aria-expanded": Se,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: G,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: y
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: bn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: kn
    }),
    getTagProps: ({
      index: P
    }) => ({
      key: P,
      "data-tag-index": P,
      tabIndex: -1,
      ...!W && {
        onDelete: Gn(P)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${U}-listbox`,
      "aria-labelledby": `${U}-label`,
      ref: wt,
      onMouseDown: (P) => {
        P.preventDefault();
      }
    }),
    getOptionProps: ({
      index: P,
      option: $
    }) => {
      const H = (A ? te : [te]).some((ee) => ee != null && j($, ee)), ne = b ? b($) : !1;
      return {
        key: (O == null ? void 0 : O($)) ?? X($),
        tabIndex: -1,
        role: "option",
        id: `${U}-option-${P}`,
        onMouseMove: vn,
        onClick: $n,
        onTouchStart: ln,
        "data-option-index": P,
        "aria-disabled": ne,
        "aria-selected": H
      };
    },
    id: U,
    inputValue: he,
    value: te,
    dirty: L,
    expanded: We && J,
    popupOpen: We,
    focused: Le || M !== -1,
    anchorEl: J,
    setAnchorEl: ue,
    focusedTag: M,
    groupedOptions: Q
  };
}
var bt = "top", At = "bottom", Nt = "right", yt = "left", Xi = "auto", Nr = [bt, At, Nt, yt], zn = "start", xr = "end", wf = "clippingParents", El = "viewport", rr = "popper", Rf = "reference", ns = /* @__PURE__ */ Nr.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + xr]);
}, []), Sl = /* @__PURE__ */ [].concat(Nr, [Xi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + xr]);
}, []), Pf = "beforeRead", $f = "read", kf = "afterRead", If = "beforeMain", Af = "main", Nf = "afterMain", Mf = "beforeWrite", jf = "write", _f = "afterWrite", Df = [Pf, $f, kf, If, Af, Nf, Mf, jf, _f];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ot(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Rn(e) {
  var t = Ot(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = Ot(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ot(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ff(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, i = t.attributes[n] || {}, a = t.elements[n];
    !It(a) || !Kt(a) || (Object.assign(a.style, o), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? a.removeAttribute(s) : a.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Lf(e) {
  var t = e.state, n = {
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
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var i = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !It(i) || !Kt(i) || (Object.assign(i.style, l), Object.keys(a).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Bf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ff,
  effect: Lf,
  requires: ["computeStyles"]
};
function Ht(e) {
  return e.split("-")[0];
}
var Cn = Math.max, co = Math.min, Wn = Math.round;
function yi() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tl() {
  return !/^((?!chrome|android).)*safari/i.test(yi());
}
function Un(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), i = 1, a = 1;
  t && It(e) && (i = e.offsetWidth > 0 && Wn(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Wn(o.height) / e.offsetHeight || 1);
  var s = Rn(e) ? Ot(e) : window, l = s.visualViewport, c = !Tl() && n, u = (o.left + (c && l ? l.offsetLeft : 0)) / i, p = (o.top + (c && l ? l.offsetTop : 0)) / a, m = o.width / i, g = o.height / a;
  return {
    width: m,
    height: g,
    top: p,
    right: u + m,
    bottom: p + g,
    left: u,
    x: u,
    y: p
  };
}
function Zi(e) {
  var t = Un(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Ol(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ji(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function on(e) {
  return Ot(e).getComputedStyle(e);
}
function Vf(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function hn(e) {
  return ((Rn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function No(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hn(e)
  );
}
function rs(e) {
  return !It(e) || // https://github.com/popperjs/popper-core/issues/837
  on(e).position === "fixed" ? null : e.offsetParent;
}
function zf(e) {
  var t = /firefox/i.test(yi()), n = /Trident/i.test(yi());
  if (n && It(e)) {
    var o = on(e);
    if (o.position === "fixed")
      return null;
  }
  var i = No(e);
  for (Ji(i) && (i = i.host); It(i) && ["html", "body"].indexOf(Kt(i)) < 0; ) {
    var a = on(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Mr(e) {
  for (var t = Ot(e), n = rs(e); n && Vf(n) && on(n).position === "static"; )
    n = rs(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && on(n).position === "static") ? t : n || zf(e) || t;
}
function Qi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pr(e, t, n) {
  return Cn(e, co(t, n));
}
function Wf(e, t, n) {
  var o = pr(e, t, n);
  return o > n ? n : o;
}
function Cl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wl(e) {
  return Object.assign({}, Cl(), e);
}
function Rl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Uf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, wl(typeof t != "number" ? t : Rl(t, Nr));
};
function Hf(e) {
  var t, n = e.state, o = e.name, i = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Ht(n.placement), c = Qi(l), u = [yt, Nt].indexOf(l) >= 0, p = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = Uf(i.padding, n), g = Zi(a), y = c === "y" ? bt : yt, v = c === "y" ? At : Nt, h = n.rects.reference[p] + n.rects.reference[c] - s[c] - n.rects.popper[p], f = s[c] - n.rects.reference[c], T = Mr(a), C = T ? c === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, b = h / 2 - f / 2, O = m[y], x = C - g[p] - m[v], R = C / 2 - g[p] / 2 + b, k = pr(O, R, x), F = c;
    n.modifiersData[o] = (t = {}, t[F] = k, t.centerOffset = k - R, t);
  }
}
function qf(e) {
  var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ol(t.elements.popper, i) && (t.elements.arrow = i));
}
const Yf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Hf,
  effect: qf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Hn(e) {
  return e.split("-")[1];
}
var Kf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gf(e, t) {
  var n = e.x, o = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Wn(n * i) / i || 0,
    y: Wn(o * i) / i || 0
  };
}
function os(e) {
  var t, n = e.popper, o = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, m = e.isFixed, g = s.x, y = g === void 0 ? 0 : g, v = s.y, h = v === void 0 ? 0 : v, f = typeof p == "function" ? p({
    x: y,
    y: h
  }) : {
    x: y,
    y: h
  };
  y = f.x, h = f.y;
  var T = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), b = yt, O = bt, x = window;
  if (u) {
    var R = Mr(n), k = "clientHeight", F = "clientWidth";
    if (R === Ot(n) && (R = hn(n), on(R).position !== "static" && l === "absolute" && (k = "scrollHeight", F = "scrollWidth")), R = R, i === bt || (i === yt || i === Nt) && a === xr) {
      O = At;
      var d = m && R === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[k]
      );
      h -= d - o.height, h *= c ? 1 : -1;
    }
    if (i === yt || (i === bt || i === At) && a === xr) {
      b = Nt;
      var w = m && R === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[F]
      );
      y -= w - o.width, y *= c ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: l
  }, u && Kf), A = p === !0 ? Gf({
    x: y,
    y: h
  }, Ot(n)) : {
    x: y,
    y: h
  };
  if (y = A.x, h = A.y, c) {
    var V;
    return Object.assign({}, j, (V = {}, V[O] = C ? "0" : "", V[b] = T ? "0" : "", V.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + h + "px)" : "translate3d(" + y + "px, " + h + "px, 0)", V));
  }
  return Object.assign({}, j, (t = {}, t[O] = C ? h + "px" : "", t[b] = T ? y + "px" : "", t.transform = "", t));
}
function Xf(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Ht(t.placement),
    variation: Hn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, os(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, os(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Jf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xf,
  data: {}
};
var Ur = {
  passive: !0
};
function Zf(e) {
  var t = e.state, n = e.instance, o = e.options, i = o.scroll, a = i === void 0 ? !0 : i, s = o.resize, l = s === void 0 ? !0 : s, c = Ot(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, Ur);
  }), l && c.addEventListener("resize", n.update, Ur), function() {
    a && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Ur);
    }), l && c.removeEventListener("resize", n.update, Ur);
  };
}
const Qf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zf,
  data: {}
};
var em = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return em[t];
  });
}
var tm = {
  start: "end",
  end: "start"
};
function is(e) {
  return e.replace(/start|end/g, function(t) {
    return tm[t];
  });
}
function ea(e) {
  var t = Ot(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function ta(e) {
  return Un(hn(e)).left + ea(e).scrollLeft;
}
function nm(e, t) {
  var n = Ot(e), o = hn(e), i = n.visualViewport, a = o.clientWidth, s = o.clientHeight, l = 0, c = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Tl();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l + ta(e),
    y: c
  };
}
function rm(e) {
  var t, n = hn(e), o = ea(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Cn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Cn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -o.scrollLeft + ta(e), c = -o.scrollTop;
  return on(i || n).direction === "rtl" && (l += Cn(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function na(e) {
  var t = on(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + o);
}
function Pl(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : It(e) && na(e) ? e : Pl(No(e));
}
function dr(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Pl(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ot(o), s = i ? [a].concat(a.visualViewport || [], na(o) ? o : []) : o, l = t.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(dr(No(s)))
  );
}
function vi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function om(e, t) {
  var n = Un(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function as(e, t, n) {
  return t === El ? vi(nm(e, n)) : Rn(t) ? om(t, n) : vi(rm(hn(e)));
}
function im(e) {
  var t = dr(No(e)), n = ["absolute", "fixed"].indexOf(on(e).position) >= 0, o = n && It(e) ? Mr(e) : e;
  return Rn(o) ? t.filter(function(i) {
    return Rn(i) && Ol(i, o) && Kt(i) !== "body";
  }) : [];
}
function am(e, t, n, o) {
  var i = t === "clippingParents" ? im(e) : [].concat(t), a = [].concat(i, [n]), s = a[0], l = a.reduce(function(c, u) {
    var p = as(e, u, o);
    return c.top = Cn(p.top, c.top), c.right = co(p.right, c.right), c.bottom = co(p.bottom, c.bottom), c.left = Cn(p.left, c.left), c;
  }, as(e, s, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function $l(e) {
  var t = e.reference, n = e.element, o = e.placement, i = o ? Ht(o) : null, a = o ? Hn(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case bt:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case At:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Nt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case yt:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Qi(i) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (a) {
      case zn:
        c[u] = c[u] - (t[p] / 2 - n[p] / 2);
        break;
      case xr:
        c[u] = c[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return c;
}
function Er(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, l = n.boundary, c = l === void 0 ? wf : l, u = n.rootBoundary, p = u === void 0 ? El : u, m = n.elementContext, g = m === void 0 ? rr : m, y = n.altBoundary, v = y === void 0 ? !1 : y, h = n.padding, f = h === void 0 ? 0 : h, T = wl(typeof f != "number" ? f : Rl(f, Nr)), C = g === rr ? Rf : rr, b = e.rects.popper, O = e.elements[v ? C : g], x = am(Rn(O) ? O : O.contextElement || hn(e.elements.popper), c, p, s), R = Un(e.elements.reference), k = $l({
    reference: R,
    element: b,
    strategy: "absolute",
    placement: i
  }), F = vi(Object.assign({}, b, k)), d = g === rr ? F : R, w = {
    top: x.top - d.top + T.top,
    bottom: d.bottom - x.bottom + T.bottom,
    left: x.left - d.left + T.left,
    right: d.right - x.right + T.right
  }, j = e.modifiersData.offset;
  if (g === rr && j) {
    var A = j[i];
    Object.keys(w).forEach(function(V) {
      var z = [Nt, At].indexOf(V) >= 0 ? 1 : -1, q = [bt, At].indexOf(V) >= 0 ? "y" : "x";
      w[V] += A[q] * z;
    });
  }
  return w;
}
function sm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, i = n.boundary, a = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Sl : c, p = Hn(o), m = p ? l ? ns : ns.filter(function(v) {
    return Hn(v) === p;
  }) : Nr, g = m.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(v, h) {
    return v[h] = Er(e, {
      placement: h,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Ht(h)], v;
  }, {});
  return Object.keys(y).sort(function(v, h) {
    return y[v] - y[h];
  });
}
function lm(e) {
  if (Ht(e) === Xi)
    return [];
  var t = Zr(e);
  return [is(e), t, is(t)];
}
function cm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !0 : s, c = n.fallbackPlacements, u = n.padding, p = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, v = y === void 0 ? !0 : y, h = n.allowedAutoPlacements, f = t.options.placement, T = Ht(f), C = T === f, b = c || (C || !v ? [Zr(f)] : lm(f)), O = [f].concat(b).reduce(function(U, X) {
      return U.concat(Ht(X) === Xi ? sm(t, {
        placement: X,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: h
      }) : X);
    }, []), x = t.rects.reference, R = t.rects.popper, k = /* @__PURE__ */ new Map(), F = !0, d = O[0], w = 0; w < O.length; w++) {
      var j = O[w], A = Ht(j), V = Hn(j) === zn, z = [bt, At].indexOf(A) >= 0, q = z ? "width" : "height", _ = Er(t, {
        placement: j,
        boundary: p,
        rootBoundary: m,
        altBoundary: g,
        padding: u
      }), Y = z ? V ? Nt : yt : V ? At : bt;
      x[q] > R[q] && (Y = Zr(Y));
      var K = Zr(Y), ie = [];
      if (a && ie.push(_[A] <= 0), l && ie.push(_[Y] <= 0, _[K] <= 0), ie.every(function(U) {
        return U;
      })) {
        d = j, F = !1;
        break;
      }
      k.set(j, ie);
    }
    if (F)
      for (var D = v ? 3 : 1, W = function(X) {
        var oe = O.find(function(se) {
          var G = k.get(se);
          if (G)
            return G.slice(0, X).every(function(re) {
              return re;
            });
        });
        if (oe)
          return d = oe, "break";
      }, ae = D; ae > 0; ae--) {
        var Z = W(ae);
        if (Z === "break") break;
      }
    t.placement !== d && (t.modifiersData[o]._skip = !0, t.placement = d, t.reset = !0);
  }
}
const um = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ss(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ls(e) {
  return [bt, Nt, At, yt].some(function(t) {
    return e[t] >= 0;
  });
}
function pm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, s = Er(t, {
    elementContext: "reference"
  }), l = Er(t, {
    altBoundary: !0
  }), c = ss(s, o), u = ss(l, i, a), p = ls(c), m = ls(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const dm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pm
};
function fm(e, t, n) {
  var o = Ht(e), i = [yt, bt].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], l = a[1];
  return s = s || 0, l = (l || 0) * i, [yt, Nt].indexOf(o) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function mm(e) {
  var t = e.state, n = e.options, o = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, s = Sl.reduce(function(p, m) {
    return p[m] = fm(m, t.rects, a), p;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
const hm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mm
};
function gm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $l({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const bm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gm,
  data: {}
};
function ym(e) {
  return e === "x" ? "y" : "x";
}
function vm(e) {
  var t = e.state, n = e.options, o = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, s = n.altAxis, l = s === void 0 ? !1 : s, c = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, v = n.tetherOffset, h = v === void 0 ? 0 : v, f = Er(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), T = Ht(t.placement), C = Hn(t.placement), b = !C, O = Qi(T), x = ym(O), R = t.modifiersData.popperOffsets, k = t.rects.reference, F = t.rects.popper, d = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, w = typeof d == "number" ? {
    mainAxis: d,
    altAxis: d
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, d), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var V, z = O === "y" ? bt : yt, q = O === "y" ? At : Nt, _ = O === "y" ? "height" : "width", Y = R[O], K = Y + f[z], ie = Y - f[q], D = y ? -F[_] / 2 : 0, W = C === zn ? k[_] : F[_], ae = C === zn ? -F[_] : -k[_], Z = t.elements.arrow, U = y && Z ? Zi(Z) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cl(), oe = X[z], se = X[q], G = pr(0, k[_], U[_]), re = b ? k[_] / 2 - D - G - oe - w.mainAxis : W - G - oe - w.mainAxis, J = b ? -k[_] / 2 + D + G + se + w.mainAxis : ae + G + se + w.mainAxis, ue = t.elements.arrow && Mr(t.elements.arrow), M = ue ? O === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, ge = (V = j == null ? void 0 : j[O]) != null ? V : 0, I = Y + re - ge - M, pe = Y + J - ge, te = pr(y ? co(K, I) : K, Y, y ? Cn(ie, pe) : ie);
      R[O] = te, A[O] = te - Y;
    }
    if (l) {
      var Fe, he = O === "x" ? bt : yt, Ce = O === "x" ? At : Nt, Le = R[x], xe = x === "y" ? "height" : "width", Ge = Le + f[he], ce = Le - f[Ce], _e = [bt, yt].indexOf(T) !== -1, ot = (Fe = j == null ? void 0 : j[x]) != null ? Fe : 0, it = _e ? Ge : Le - k[xe] - F[xe] - ot + w.altAxis, Xe = _e ? Le + k[xe] + F[xe] - ot - w.altAxis : ce, We = y && _e ? Wf(it, Le, Xe) : pr(y ? it : Ge, Le, y ? Xe : ce);
      R[x] = We, A[x] = We - Le;
    }
    t.modifiersData[o] = A;
  }
}
const xm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vm,
  requiresIfExists: ["offset"]
};
function Em(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Sm(e) {
  return e === Ot(e) || !It(e) ? ea(e) : Em(e);
}
function Tm(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, o = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Om(e, t, n) {
  n === void 0 && (n = !1);
  var o = It(t), i = It(t) && Tm(t), a = hn(t), s = Un(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  na(a)) && (l = Sm(t)), It(t) ? (c = Un(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = ta(a))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Cm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || i(a);
  }), o;
}
function wm(e) {
  var t = Cm(e);
  return Df.reduce(function(n, o) {
    return n.concat(t.filter(function(i) {
      return i.phase === o;
    }));
  }, []);
}
function Rm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Pm(e) {
  var t = e.reduce(function(n, o) {
    var i = n[o.name];
    return n[o.name] = i ? Object.assign({}, i, o, {
      options: Object.assign({}, i.options, o.options),
      data: Object.assign({}, i.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var cs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function us() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function $m(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? cs : i;
  return function(l, c, u) {
    u === void 0 && (u = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cs, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, y = {
      state: p,
      setOptions: function(T) {
        var C = typeof T == "function" ? T(p.options) : T;
        h(), p.options = Object.assign({}, a, p.options, C), p.scrollParents = {
          reference: Rn(l) ? dr(l) : l.contextElement ? dr(l.contextElement) : [],
          popper: dr(c)
        };
        var b = wm(Pm([].concat(o, p.options.modifiers)));
        return p.orderedModifiers = b.filter(function(O) {
          return O.enabled;
        }), v(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var T = p.elements, C = T.reference, b = T.popper;
          if (us(C, b)) {
            p.rects = {
              reference: Om(C, Mr(b), p.options.strategy === "fixed"),
              popper: Zi(b)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(w) {
              return p.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var O = 0; O < p.orderedModifiers.length; O++) {
              if (p.reset === !0) {
                p.reset = !1, O = -1;
                continue;
              }
              var x = p.orderedModifiers[O], R = x.fn, k = x.options, F = k === void 0 ? {} : k, d = x.name;
              typeof R == "function" && (p = R({
                state: p,
                options: F,
                name: d,
                instance: y
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Rm(function() {
        return new Promise(function(f) {
          y.forceUpdate(), f(p);
        });
      }),
      destroy: function() {
        h(), g = !0;
      }
    };
    if (!us(l, c))
      return y;
    y.setOptions(u).then(function(f) {
      !g && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function v() {
      p.orderedModifiers.forEach(function(f) {
        var T = f.name, C = f.options, b = C === void 0 ? {} : C, O = f.effect;
        if (typeof O == "function") {
          var x = O({
            state: p,
            name: T,
            instance: y,
            options: b
          }), R = function() {
          };
          m.push(x || R);
        }
      });
    }
    function h() {
      m.forEach(function(f) {
        return f();
      }), m = [];
    }
    return y;
  };
}
var km = [Qf, bm, Jf, Bf, hm, um, xm, Yf, dm], Im = /* @__PURE__ */ $m({
  defaultModifiers: km
});
function Am(e) {
  return typeof e == "function" ? e() : e;
}
const Sr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: o,
    container: i,
    disablePortal: a = !1
  } = t, [s, l] = S.useState(null), c = rt(Ar(o), n);
  if (nn(() => {
    a || l(Am(i) || document.body);
  }, [i, a]), nn(() => {
    if (s && !a)
      return oo(n, s), () => {
        oo(n, null);
      };
  }, [n, s, a]), a) {
    if (/* @__PURE__ */ S.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ S.cloneElement(o, u);
    }
    return /* @__PURE__ */ B.jsx(S.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ B.jsx(S.Fragment, {
    children: s && /* @__PURE__ */ uc.createPortal(o, s)
  });
});
process.env.NODE_ENV !== "production" && (Sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: r.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([rn, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool
});
process.env.NODE_ENV !== "production" && (Sr.propTypes = el(Sr.propTypes));
function Nm(e) {
  return ze("MuiPopper", e);
}
Ue("MuiPopper", ["root"]);
function Mm(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function uo(e) {
  return typeof e == "function" ? e() : e;
}
function Mo(e) {
  return e.nodeType !== void 0;
}
function jm(e) {
  return !Mo(e);
}
const _m = (e) => {
  const {
    classes: t
  } = e;
  return qe({
    root: ["root"]
  }, Nm, t);
}, Dm = {}, Fm = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: p,
    popperRef: m,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: h,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...f
  } = t, T = S.useRef(null), C = rt(T, n), b = S.useRef(null), O = rt(b, m), x = S.useRef(O);
  nn(() => {
    x.current = O;
  }, [O]), S.useImperativeHandle(m, () => b.current, []);
  const R = Mm(u, a), [k, F] = S.useState(R), [d, w] = S.useState(uo(o));
  S.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), S.useEffect(() => {
    o && w(uo(o));
  }, [o]), nn(() => {
    if (!d || !c)
      return;
    const q = (K) => {
      F(K.placement);
    };
    if (process.env.NODE_ENV !== "production" && d && Mo(d) && d.nodeType === 1) {
      const K = d.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && K.top === 0 && K.left === 0 && K.right === 0 && K.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let _ = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: K
      }) => {
        q(K);
      }
    }];
    l != null && (_ = _.concat(l)), p && p.modifiers != null && (_ = _.concat(p.modifiers));
    const Y = Im(d, T.current, {
      placement: R,
      ...p,
      modifiers: _
    });
    return x.current(Y), () => {
      Y.destroy(), x.current(null);
    };
  }, [d, s, l, c, p, R]);
  const j = {
    placement: k
  };
  v !== null && (j.TransitionProps = v);
  const A = _m(t), V = y.root ?? "div", z = pi({
    elementType: V,
    externalSlotProps: g.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ B.jsx(V, {
    ...z,
    children: typeof i == "function" ? i(j) : i
  });
}), kl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: i,
    container: a,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: p,
    placement: m = "bottom",
    popperOptions: g = Dm,
    popperRef: y,
    style: v,
    transition: h = !1,
    slotProps: f = {},
    slots: T = {},
    ...C
  } = t, [b, O] = S.useState(!0), x = () => {
    O(!1);
  }, R = () => {
    O(!0);
  };
  if (!c && !p && (!h || b))
    return null;
  let k;
  if (a)
    k = a;
  else if (o) {
    const w = uo(o);
    k = w && Mo(w) ? mt(w).body : mt(null).body;
  }
  const F = !p && c && (!h || b) ? "none" : void 0, d = h ? {
    in: p,
    onEnter: x,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ B.jsx(Sr, {
    disablePortal: l,
    container: k,
    children: /* @__PURE__ */ B.jsx(Fm, {
      anchorEl: o,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: h ? !b : p,
      placement: m,
      popperOptions: g,
      popperRef: y,
      slotProps: f,
      slots: T,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: F,
        ...v
      },
      TransitionProps: d,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Yt(r.oneOfType([rn, r.object, r.func]), (e) => {
    if (e.open) {
      const t = uo(e.anchorEl);
      if (t && Mo(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || jm(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([rn, r.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: r.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
const Lm = fe(kl, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ra = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = pl(), i = Ke({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: y,
    placement: v,
    popperOptions: h,
    popperRef: f,
    transition: T,
    slots: C,
    slotProps: b,
    ...O
  } = i, x = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), R = {
    anchorEl: a,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: y,
    placement: v,
    popperOptions: h,
    popperRef: f,
    transition: T,
    ...O
  };
  return /* @__PURE__ */ B.jsx(Lm, {
    as: s,
    direction: o ? "rtl" : "ltr",
    slots: {
      root: x
    },
    slotProps: b ?? c,
    ...R,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: r.oneOfType([rn, r.object, r.func]),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([rn, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Dt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
function Bm(e) {
  return ze("MuiListSubheader", e);
}
Ue("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Vm = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: o,
    inset: i,
    disableSticky: a
  } = e, s = {
    root: ["root", n !== "default" && `color${de(n)}`, !o && "gutters", i && "inset", !a && "sticky"]
  };
  return qe(s, Bm, t);
}, zm = fe("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${de(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(De(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), po = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: a = "default",
    component: s = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1,
    ...p
  } = o, m = {
    ...o,
    color: a,
    component: s,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }, g = Vm(m);
  return /* @__PURE__ */ B.jsx(zm, {
    as: s,
    className: ye(g.root, i),
    ref: n,
    ownerState: m,
    ...p
  });
});
po && (po.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (po.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: r.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: r.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Wm = Hi(/* @__PURE__ */ B.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Um(e) {
  return ze("MuiChip", e);
}
const Te = Ue("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Hm = (e) => {
  const {
    classes: t,
    disabled: n,
    size: o,
    color: i,
    iconColor: a,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${de(o)}`, `color${de(i)}`, l && "clickable", l && `clickableColor${de(i)}`, s && "deletable", s && `deletableColor${de(i)}`, `${c}${de(i)}`],
    label: ["label", `label${de(o)}`],
    avatar: ["avatar", `avatar${de(o)}`, `avatarColor${de(i)}`],
    icon: ["icon", `icon${de(o)}`, `iconColor${de(a)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${de(o)}`, `deleteIconColor${de(i)}`, `deleteIcon${de(c)}Color${de(i)}`]
  };
  return qe(u, Um, t);
}, qm = fe("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: o,
      iconColor: i,
      clickable: a,
      onDelete: s,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Te.avatar}`]: t.avatar
    }, {
      [`& .${Te.avatar}`]: t[`avatar${de(l)}`]
    }, {
      [`& .${Te.avatar}`]: t[`avatarColor${de(o)}`]
    }, {
      [`& .${Te.icon}`]: t.icon
    }, {
      [`& .${Te.icon}`]: t[`icon${de(l)}`]
    }, {
      [`& .${Te.icon}`]: t[`iconColor${de(i)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIcon${de(l)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIconColor${de(o)}`]
    }, {
      [`& .${Te.deleteIcon}`]: t[`deleteIcon${de(c)}Color${de(o)}`]
    }, t.root, t[`size${de(l)}`], t[`color${de(o)}`], a && t.clickable, a && o !== "default" && t[`clickableColor${de(o)})`], s && t.deletable, s && o !== "default" && t[`deletableColor${de(o)}`], t[c], t[`${c}${de(o)}`]];
  }
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Te.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Te.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Te.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Te.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Te.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Te.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Te.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : at(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : at(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Te.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Te.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(([, n]) => n && n.main && n.contrastText).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : at(e.palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Te.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Te.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : at(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(([, n]) => n && n.dark).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Te.focusVisible}`]: {
          background: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : at(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : at(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(([, n]) => n && n.dark).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[n].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Te.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Te.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Te.icon}`]: {
          marginLeft: 4
        },
        [`& .${Te.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Te.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Te.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(([, n]) => n && n.main).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : at(e.palette[n].main, 0.7)}`,
        [`&.${Te.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette[n].main, e.palette.action.hoverOpacity)
        },
        [`&.${Te.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : at(e.palette[n].main, e.palette.action.focusOpacity)
        },
        [`& .${Te.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : at(e.palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), Ym = fe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: o
    } = n;
    return [t.label, t[`label${de(o)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function ps(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Il = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: a,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: p = !1,
    icon: m,
    label: g,
    onClick: y,
    onDelete: v,
    onKeyDown: h,
    onKeyUp: f,
    size: T = "medium",
    variant: C = "filled",
    tabIndex: b,
    skipFocusWhenDisabled: O = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...x
  } = o, R = S.useRef(null), k = rt(R, n), F = (ie) => {
    ie.stopPropagation(), v && v(ie);
  }, d = (ie) => {
    ie.currentTarget === ie.target && ps(ie) && ie.preventDefault(), h && h(ie);
  }, w = (ie) => {
    ie.currentTarget === ie.target && v && ps(ie) && v(ie), f && f(ie);
  }, j = s !== !1 && y ? !0 : s, A = j || v ? lo : c || "div", V = {
    ...o,
    component: A,
    disabled: p,
    size: T,
    color: l,
    iconColor: /* @__PURE__ */ S.isValidElement(m) && m.props.color || l,
    onDelete: !!v,
    clickable: j,
    variant: C
  }, z = Hm(V), q = A === lo ? {
    component: c || "div",
    focusVisibleClassName: z.focusVisible,
    ...v && {
      disableRipple: !0
    }
  } : {};
  let _ = null;
  v && (_ = u && /* @__PURE__ */ S.isValidElement(u) ? /* @__PURE__ */ S.cloneElement(u, {
    className: ye(u.props.className, z.deleteIcon),
    onClick: F
  }) : /* @__PURE__ */ B.jsx(Wm, {
    className: ye(z.deleteIcon),
    onClick: F
  }));
  let Y = null;
  i && /* @__PURE__ */ S.isValidElement(i) && (Y = /* @__PURE__ */ S.cloneElement(i, {
    className: ye(z.avatar, i.props.className)
  }));
  let K = null;
  return m && /* @__PURE__ */ S.isValidElement(m) && (K = /* @__PURE__ */ S.cloneElement(m, {
    className: ye(z.icon, m.props.className)
  })), process.env.NODE_ENV !== "production" && Y && K && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ B.jsxs(qm, {
    as: A,
    className: ye(z.root, a),
    disabled: j && p ? !0 : void 0,
    onClick: y,
    onKeyDown: d,
    onKeyUp: w,
    ref: k,
    tabIndex: O && p ? -1 : b,
    ownerState: V,
    ...q,
    ...x,
    children: [Y || K, /* @__PURE__ */ B.jsx(Ym, {
      className: ye(z.label),
      ownerState: V,
      children: g
    }), _]
  });
});
process.env.NODE_ENV !== "production" && (Il.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: r.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Yp,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: r.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: r.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * Icon element.
   */
  icon: r.element,
  /**
   * The content of the component.
   */
  label: r.node,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * @ignore
   */
  tabIndex: r.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined"]), r.string])
});
function Hr(e) {
  return parseInt(e, 10) || 0;
}
const Km = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Gm(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Al = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: i,
    minRows: a = 1,
    style: s,
    value: l,
    ...c
  } = t, {
    current: u
  } = S.useRef(l != null), p = S.useRef(null), m = rt(n, p), g = S.useRef(null), y = S.useRef(null), v = S.useCallback(() => {
    const T = p.current, b = wn(T).getComputedStyle(T);
    if (b.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const O = y.current;
    O.style.width = b.width, O.value = T.value || t.placeholder || "x", O.value.slice(-1) === `
` && (O.value += " ");
    const x = b.boxSizing, R = Hr(b.paddingBottom) + Hr(b.paddingTop), k = Hr(b.borderBottomWidth) + Hr(b.borderTopWidth), F = O.scrollHeight;
    O.value = "x";
    const d = O.scrollHeight;
    let w = F;
    a && (w = Math.max(Number(a) * d, w)), i && (w = Math.min(Number(i) * d, w)), w = Math.max(w, d);
    const j = w + (x === "border-box" ? R + k : 0), A = Math.abs(w - F) <= 1;
    return {
      outerHeightStyle: j,
      overflowing: A
    };
  }, [i, a, t.placeholder]), h = S.useCallback(() => {
    const T = v();
    if (Gm(T))
      return;
    const C = T.outerHeightStyle, b = p.current;
    g.current !== C && (g.current = C, b.style.height = `${C}px`), b.style.overflow = T.overflowing ? "hidden" : "";
  }, [v]);
  nn(() => {
    const T = () => {
      h();
    };
    let C;
    const b = () => {
      cancelAnimationFrame(C), C = requestAnimationFrame(() => {
        T();
      });
    }, O = tl(T), x = p.current, R = wn(x);
    R.addEventListener("resize", O);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(process.env.NODE_ENV === "test" ? b : T), k.observe(x)), () => {
      O.clear(), cancelAnimationFrame(C), R.removeEventListener("resize", O), k && k.disconnect();
    };
  }, [v, h]), nn(() => {
    h();
  });
  const f = (T) => {
    u || h(), o && o(T);
  };
  return /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ B.jsx("textarea", {
      value: l,
      onChange: f,
      ref: m,
      rows: a,
      style: s,
      ...c
    }), /* @__PURE__ */ B.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: {
        ...Km.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (Al.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: r.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  onChange: r.func,
  /**
   * @ignore
   */
  placeholder: r.string,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * @ignore
   */
  value: r.oneOfType([r.arrayOf(r.string), r.number, r.string])
});
function xi(e) {
  return typeof e == "string";
}
function Yn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, i) => (o[i] = e[i], n && typeof e[i] > "u" && (o[i] = n[i]), o), {});
}
const jo = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (jo.displayName = "FormControlContext");
function Kn() {
  return S.useContext(jo);
}
function ds(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function fo(e, t = !1) {
  return e && (ds(e.value) && e.value !== "" || t && ds(e.defaultValue) && e.defaultValue !== "");
}
function Xm(e) {
  return e.startAdornment;
}
function Jm(e) {
  return ze("MuiInputBase", e);
}
const xt = Ue("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var fs;
const _o = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${de(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Do = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Zm = (e) => {
  const {
    classes: t,
    color: n,
    disabled: o,
    error: i,
    endAdornment: a,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: p,
    readOnly: m,
    size: g,
    startAdornment: y,
    type: v
  } = e, h = {
    root: ["root", `color${de(n)}`, o && "disabled", i && "error", c && "fullWidth", s && "focused", l && "formControl", g && g !== "medium" && `size${de(g)}`, p && "multiline", y && "adornedStart", a && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", o && "disabled", v === "search" && "inputTypeSearch", p && "inputMultiline", g === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", a && "inputAdornedEnd", m && "readOnly"]
  };
  return qe(h, Jm, t);
}, Fo = fe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: _o
})(De(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${xt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Lo = fe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Do
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, o = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${xt.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${xt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), ms = Bd({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Nl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: a,
    autoFocus: s,
    className: l,
    color: c,
    components: u = {},
    componentsProps: p = {},
    defaultValue: m,
    disabled: g,
    disableInjectingGlobalStyles: y,
    endAdornment: v,
    error: h,
    fullWidth: f = !1,
    id: T,
    inputComponent: C = "input",
    inputProps: b = {},
    inputRef: O,
    margin: x,
    maxRows: R,
    minRows: k,
    multiline: F = !1,
    name: d,
    onBlur: w,
    onChange: j,
    onClick: A,
    onFocus: V,
    onKeyDown: z,
    onKeyUp: q,
    placeholder: _,
    readOnly: Y,
    renderSuffix: K,
    rows: ie,
    size: D,
    slotProps: W = {},
    slots: ae = {},
    startAdornment: Z,
    type: U = "text",
    value: X,
    ...oe
  } = o, se = b.value != null ? b.value : X, {
    current: G
  } = S.useRef(se != null), re = S.useRef(), J = S.useCallback((Se) => {
    process.env.NODE_ENV !== "production" && Se && Se.nodeName !== "INPUT" && !Se.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ue = rt(re, O, b.ref, J), [M, ge] = S.useState(!1), I = Kn();
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (I)
      return I.registerEffect();
  }, [I]);
  const pe = Yn({
    props: o,
    muiFormControl: I,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  pe.focused = I ? I.focused : M, S.useEffect(() => {
    !I && g && M && (ge(!1), w && w());
  }, [I, g, M, w]);
  const te = I && I.onFilled, Fe = I && I.onEmpty, he = S.useCallback((Se) => {
    fo(Se) ? te && te() : Fe && Fe();
  }, [te, Fe]);
  nn(() => {
    G && he({
      value: se
    });
  }, [se, he, G]);
  const Ce = (Se) => {
    V && V(Se), b.onFocus && b.onFocus(Se), I && I.onFocus ? I.onFocus(Se) : ge(!0);
  }, Le = (Se) => {
    w && w(Se), b.onBlur && b.onBlur(Se), I && I.onBlur ? I.onBlur(Se) : ge(!1);
  }, xe = (Se, ...dt) => {
    if (!G) {
      const Ct = Se.target || re.current;
      if (Ct == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : qt(1));
      he({
        value: Ct.value
      });
    }
    b.onChange && b.onChange(Se, ...dt), j && j(Se, ...dt);
  };
  S.useEffect(() => {
    he(re.current);
  }, []);
  const Ge = (Se) => {
    re.current && Se.currentTarget === Se.target && re.current.focus(), A && A(Se);
  };
  let ce = C, _e = b;
  F && ce === "input" && (ie ? (process.env.NODE_ENV !== "production" && (k || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), _e = {
    type: void 0,
    minRows: ie,
    maxRows: ie,
    ..._e
  }) : _e = {
    type: void 0,
    maxRows: R,
    minRows: k,
    ..._e
  }, ce = Al);
  const ot = (Se) => {
    he(Se.animationName === "mui-auto-fill-cancel" ? re.current : {
      value: "x"
    });
  };
  S.useEffect(() => {
    I && I.setAdornedStart(!!Z);
  }, [I, Z]);
  const it = {
    ...o,
    color: pe.color || "primary",
    disabled: pe.disabled,
    endAdornment: v,
    error: pe.error,
    focused: pe.focused,
    formControl: I,
    fullWidth: f,
    hiddenLabel: pe.hiddenLabel,
    multiline: F,
    size: pe.size,
    startAdornment: Z,
    type: U
  }, Xe = Zm(it), We = ae.root || u.Root || Fo, we = W.root || p.root || {}, Qe = ae.input || u.Input || Lo;
  return _e = {
    ..._e,
    ...W.input ?? p.input
  }, /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [!y && typeof ms == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (fs || (fs = /* @__PURE__ */ B.jsx(ms, {}))), /* @__PURE__ */ B.jsxs(We, {
      ...we,
      ref: n,
      onClick: Ge,
      ...oe,
      ...!xi(We) && {
        ownerState: {
          ...it,
          ...we.ownerState
        }
      },
      className: ye(Xe.root, we.className, l, Y && "MuiInputBase-readOnly"),
      children: [Z, /* @__PURE__ */ B.jsx(jo.Provider, {
        value: null,
        children: /* @__PURE__ */ B.jsx(Qe, {
          "aria-invalid": pe.error,
          "aria-describedby": i,
          autoComplete: a,
          autoFocus: s,
          defaultValue: m,
          disabled: pe.disabled,
          id: T,
          onAnimationStart: ot,
          name: d,
          placeholder: _,
          readOnly: Y,
          required: pe.required,
          rows: ie,
          value: se,
          onKeyDown: z,
          onKeyUp: q,
          type: U,
          ..._e,
          ...!xi(Qe) && {
            as: ce,
            ownerState: {
              ...it,
              ..._e.ownerState
            }
          },
          ref: ue,
          className: ye(Xe.input, _e.className, Y && "MuiInputBase-readOnly"),
          onBlur: Le,
          onChange: xe,
          onFocus: Ce
        })
      }), v, K ? K({
        ...pe,
        startAdornment: Z
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": r.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Li,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: r.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onClick: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * @ignore
   */
  onKeyUp: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * @ignore
   */
  renderSuffix: r.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The size of the component.
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
const oa = Nl;
function Qm(e) {
  return ze("MuiInput", e);
}
const dn = {
  ...xt,
  ...Ue("MuiInput", ["root", "underline", "input"])
};
function eh(e) {
  return ze("MuiOutlinedInput", e);
}
const Pt = {
  ...xt,
  ...Ue("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function th(e) {
  return ze("MuiFilledInput", e);
}
const Et = {
  ...xt,
  ...Ue("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Ml = Hi(/* @__PURE__ */ B.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function nh(e) {
  return ze("MuiAutocomplete", e);
}
const ve = Ue("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var hs, gs;
const rh = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: o,
    focused: i,
    fullWidth: a,
    hasClearIcon: s,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: p
  } = e, m = {
    root: ["root", o && "expanded", i && "focused", a && "fullWidth", s && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${de(p)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return qe(m, nh, t);
}, oh = fe("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: o,
      hasClearIcon: i,
      hasPopupIcon: a,
      inputFocused: s,
      size: l
    } = n;
    return [{
      [`& .${ve.tag}`]: t.tag
    }, {
      [`& .${ve.tag}`]: t[`tagSize${de(l)}`]
    }, {
      [`& .${ve.inputRoot}`]: t.inputRoot
    }, {
      [`& .${ve.input}`]: t.input
    }, {
      [`& .${ve.input}`]: s && t.inputFocused
    }, t.root, o && t.fullWidth, a && t.hasPopupIcon, i && t.hasClearIcon];
  }
})({
  [`&.${ve.focused} .${ve.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${ve.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${ve.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${ve.inputRoot}`]: {
    [`.${ve.hasPopupIcon}&, .${ve.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${ve.hasPopupIcon}.${ve.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${ve.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${dn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${dn.root}.${xt.sizeSmall}`]: {
    [`& .${dn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Pt.root}`]: {
    padding: 9,
    [`.${ve.hasPopupIcon}&, .${ve.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ve.hasPopupIcon}.${ve.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${ve.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${ve.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Pt.root}.${xt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${ve.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Et.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${ve.hasPopupIcon}&, .${ve.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${ve.hasPopupIcon}.${ve.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Et.input}`]: {
      padding: "7px 4px"
    },
    [`& .${ve.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Et.root}.${xt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Et.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${xt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Et.root}.${xt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${ve.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Et.root}.${xt.hiddenLabel}.${xt.sizeSmall}`]: {
    [`& .${ve.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${ve.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${ve.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${ve.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${ve.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), ih = fe("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), ah = fe(Gi, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), sh = fe(Gi, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.popupIndicator,
    ...e.popupOpen && t.popupIndicatorOpen
  })
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), lh = fe(ra, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ve.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(De(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), ch = fe(Ao, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(De(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), uh = fe("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), ph = fe("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), dh = fe("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(De(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${ve.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${ve.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${ve.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : at(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${ve.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : at(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${ve.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : at(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), fh = fe(po, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(De(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), mh = fe("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${ve.option}`]: {
    paddingLeft: 24
  }
}), jl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: i = !1,
    autoHighlight: a = !1,
    autoSelect: s = !1,
    blurOnSelect: l = !1,
    ChipProps: c,
    className: u,
    clearIcon: p = hs || (hs = /* @__PURE__ */ B.jsx(xf, {
      fontSize: "small"
    })),
    clearOnBlur: m = !o.freeSolo,
    clearOnEscape: g = !1,
    clearText: y = "Clear",
    closeText: v = "Close",
    componentsProps: h,
    defaultValue: f = o.multiple ? [] : null,
    disableClearable: T = !1,
    disableCloseOnSelect: C = !1,
    disabled: b = !1,
    disabledItemsFocusable: O = !1,
    disableListWrap: x = !1,
    disablePortal: R = !1,
    filterOptions: k,
    filterSelectedOptions: F = !1,
    forcePopupIcon: d = "auto",
    freeSolo: w = !1,
    fullWidth: j = !1,
    getLimitTagsText: A = (Re) => `+${Re}`,
    getOptionDisabled: V,
    getOptionKey: z,
    getOptionLabel: q,
    isOptionEqualToValue: _,
    groupBy: Y,
    handleHomeEndKeys: K = !o.freeSolo,
    id: ie,
    includeInputInList: D = !1,
    inputValue: W,
    limitTags: ae = -1,
    ListboxComponent: Z,
    ListboxProps: U,
    loading: X = !1,
    loadingText: oe = "Loading…",
    multiple: se = !1,
    noOptionsText: G = "No options",
    onChange: re,
    onClose: J,
    onHighlightChange: ue,
    onInputChange: M,
    onOpen: ge,
    open: I,
    openOnFocus: pe = !1,
    openText: te = "Open",
    options: Fe,
    PaperComponent: he,
    PopperComponent: Ce,
    popupIcon: Le = gs || (gs = /* @__PURE__ */ B.jsx(Ml, {})),
    readOnly: xe = !1,
    renderGroup: Ge,
    renderInput: ce,
    renderOption: _e,
    renderTags: ot,
    selectOnFocus: it = !o.freeSolo,
    size: Xe = "medium",
    slots: We = {},
    slotProps: we = {},
    value: Qe,
    ...Se
  } = o, {
    getRootProps: dt,
    getInputProps: Ct,
    getInputLabelProps: ht,
    getPopupIndicatorProps: le,
    getClearProps: Ee,
    getTagProps: He,
    getListboxProps: wt,
    getOptionProps: ct,
    value: Rt,
    dirty: ft,
    expanded: Ft,
    id: jt,
    popupOpen: Jt,
    focused: gn,
    focusedTag: bn,
    anchorEl: an,
    setAnchorEl: Pn,
    inputValue: yn,
    groupedOptions: sn
  } = Cf({
    ...o,
    componentName: "Autocomplete"
  }), vn = !T && !b && ft && !xe, ln = (!w || d === !0) && d !== !1, {
    onMouseDown: $n
  } = Ct(), {
    ref: Gn,
    ...kn
  } = wt(), xn = q || ((Re) => Re.label ?? Re), E = {
    ...o,
    disablePortal: R,
    expanded: Ft,
    focused: gn,
    fullWidth: j,
    getOptionLabel: xn,
    hasClearIcon: vn,
    hasPopupIcon: ln,
    inputFocused: bn === -1,
    popupOpen: Jt,
    size: Xe
  }, L = rh(E), Q = {
    slots: {
      listbox: Z,
      paper: he,
      popper: Ce,
      ...We
    },
    slotProps: {
      chip: c,
      listbox: U,
      ...h,
      ...we
    }
  }, [P, $] = gt("listbox", {
    elementType: "ul",
    externalForwardedProps: Q,
    ownerState: E,
    className: L.listbox,
    additionalProps: kn,
    ref: Gn
  }), [H, ne] = gt("paper", {
    elementType: Ao,
    externalForwardedProps: Q,
    ownerState: E,
    className: L.paper
  }), [ee, be] = gt("popper", {
    elementType: ra,
    externalForwardedProps: Q,
    ownerState: E,
    className: L.popper,
    additionalProps: {
      disablePortal: R,
      style: {
        width: an ? an.clientWidth : null
      },
      role: "presentation",
      anchorEl: an,
      open: Jt
    }
  });
  let me;
  if (se && Rt.length > 0) {
    const Re = (Lt) => ({
      className: L.tag,
      disabled: b,
      ...He(Lt)
    });
    ot ? me = ot(Rt, Re, E) : me = Rt.map((Lt, un) => {
      const {
        key: Jn,
        ...rc
      } = Re({
        index: un
      });
      return /* @__PURE__ */ B.jsx(Il, {
        label: xn(Lt),
        size: Xe,
        ...rc,
        ...Q.slotProps.chip
      }, Jn);
    });
  }
  if (ae > -1 && Array.isArray(me)) {
    const Re = me.length - ae;
    !gn && Re > 0 && (me = me.splice(0, ae), me.push(/* @__PURE__ */ B.jsx("span", {
      className: L.tag,
      children: A(Re)
    }, me.length)));
  }
  const nt = Ge || ((Re) => /* @__PURE__ */ B.jsxs("li", {
    children: [/* @__PURE__ */ B.jsx(fh, {
      className: L.groupLabel,
      ownerState: E,
      component: "div",
      children: Re.group
    }), /* @__PURE__ */ B.jsx(mh, {
      className: L.groupUl,
      ownerState: E,
      children: Re.children
    })]
  }, Re.key)), Zt = _e || ((Re, Lt) => {
    const {
      key: un,
      ...Jn
    } = Re;
    return /* @__PURE__ */ B.jsx("li", {
      ...Jn,
      children: xn(Lt)
    }, un);
  }), st = (Re, Lt) => {
    const un = ct({
      option: Re,
      index: Lt
    });
    return Zt({
      ...un,
      className: L.option
    }, Re, {
      selected: un["aria-selected"],
      index: Lt,
      inputValue: yn
    }, E);
  }, cn = Q.slotProps.clearIndicator, In = Q.slotProps.popupIndicator, Xn = (Re) => /* @__PURE__ */ B.jsx(lh, {
    as: ee,
    ...be,
    children: /* @__PURE__ */ B.jsx(ch, {
      as: H,
      ...ne,
      children: Re
    })
  });
  let _r = null;
  return sn.length > 0 ? _r = Xn(/* @__PURE__ */ B.jsx(dh, {
    as: P,
    ...$,
    children: sn.map((Re, Lt) => Y ? nt({
      key: Re.key,
      group: Re.group,
      children: Re.options.map((un, Jn) => st(un, Re.index + Jn))
    }) : st(Re, Lt))
  })) : X && sn.length === 0 ? _r = Xn(/* @__PURE__ */ B.jsx(uh, {
    className: L.loading,
    ownerState: E,
    children: oe
  })) : sn.length === 0 && !w && !X && (_r = Xn(/* @__PURE__ */ B.jsx(ph, {
    className: L.noOptions,
    ownerState: E,
    role: "presentation",
    onMouseDown: (Re) => {
      Re.preventDefault();
    },
    children: G
  }))), /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ B.jsx(oh, {
      ref: n,
      className: ye(L.root, u),
      ownerState: E,
      ...dt(Se),
      children: ce({
        id: jt,
        disabled: b,
        fullWidth: !0,
        size: Xe === "small" ? "small" : void 0,
        InputLabelProps: ht(),
        InputProps: {
          ref: Pn,
          className: L.inputRoot,
          startAdornment: me,
          onClick: (Re) => {
            Re.target === Re.currentTarget && $n(Re);
          },
          ...(vn || ln) && {
            endAdornment: /* @__PURE__ */ B.jsxs(ih, {
              className: L.endAdornment,
              ownerState: E,
              children: [vn ? /* @__PURE__ */ B.jsx(ah, {
                ...Ee(),
                "aria-label": y,
                title: y,
                ownerState: E,
                ...cn,
                className: ye(L.clearIndicator, cn == null ? void 0 : cn.className),
                children: p
              }) : null, ln ? /* @__PURE__ */ B.jsx(sh, {
                ...le(),
                disabled: b,
                "aria-label": Jt ? v : te,
                title: Jt ? v : te,
                ownerState: E,
                ...In,
                className: ye(L.popupIndicator, In == null ? void 0 : In.className),
                children: Le
              }) : null]
            })
          }
        },
        inputProps: {
          className: L.input,
          disabled: b,
          readOnly: xe,
          ...Ct()
        }
      })
    }), an ? _r : null]
  });
});
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: r.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: r.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: r.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: r.oneOfType([r.oneOf(["mouse", "touch"]), r.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   */
  ChipProps: r.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: r.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: r.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: r.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: r.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: r.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: r.shape({
    clearIndicator: r.object,
    paper: r.object,
    popper: r.object,
    popupIndicator: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: Yt(r.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: r.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: r.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: r.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: r.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: r.oneOfType([r.oneOf(["auto"]), r.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: r.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: r.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: r.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: r.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: r.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: r.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: r.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: r.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: r.bool,
  /**
   * The input value.
   */
  inputValue: r.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: r.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: zi,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: r.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: r.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: r.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: r.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: r.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: r.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: r.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: r.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: r.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: r.func,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: r.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: r.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: r.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: r.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: r.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: r.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: r.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: r.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: r.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: r.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: r.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: r.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    chip: r.oneOfType([r.func, r.object]),
    clearIndicator: r.oneOfType([r.func, r.object]),
    listbox: r.oneOfType([r.func, r.object]),
    paper: r.oneOfType([r.func, r.object]),
    popper: r.oneOfType([r.func, r.object]),
    popupIndicator: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    listbox: r.elementType,
    paper: r.elementType,
    popper: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: Yt(r.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const hh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, _l = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ui(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: p,
    onEntered: m,
    onEntering: g,
    onExit: y,
    onExited: v,
    onExiting: h,
    style: f,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Xt,
    ...b
  } = t, O = S.useRef(null), x = rt(O, Ar(l), n), R = (z) => (q) => {
    if (z) {
      const _ = O.current;
      q === void 0 ? z(_) : z(_, q);
    }
  }, k = R(g), F = R((z, q) => {
    yl(z);
    const _ = ao({
      style: f,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", _), z.style.transition = o.transitions.create("opacity", _), p && p(z, q);
  }), d = R(m), w = R(h), j = R((z) => {
    const q = ao({
      style: f,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", q), z.style.transition = o.transitions.create("opacity", q), y && y(z);
  }), A = R(v), V = (z) => {
    a && a(O.current, z);
  };
  return /* @__PURE__ */ B.jsx(C, {
    appear: s,
    in: u,
    nodeRef: O,
    onEnter: F,
    onEntered: d,
    onEntering: k,
    onExit: j,
    onExited: A,
    onExiting: w,
    addEndListener: V,
    timeout: T,
    ...b,
    children: (z, q) => /* @__PURE__ */ S.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0,
        ...hh[z],
        ...f,
        ...l.props.style
      },
      ref: x,
      ...q
    })
  });
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function gh(e) {
  return ze("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const bh = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return qe({
    root: ["root", n && "invisible"]
  }, gh, t);
}, yh = fe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Dl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: s = "div",
    invisible: l = !1,
    open: c,
    components: u = {},
    componentsProps: p = {},
    slotProps: m = {},
    slots: g = {},
    TransitionComponent: y,
    transitionDuration: v,
    ...h
  } = o, f = {
    ...o,
    component: s,
    invisible: l
  }, T = bh(f), C = {
    transition: y,
    root: u.Root,
    ...g
  }, b = {
    ...p,
    ...m
  }, O = {
    slots: C,
    slotProps: b
  }, [x, R] = gt("root", {
    elementType: yh,
    externalForwardedProps: O,
    className: ye(T.root, a),
    ownerState: f
  }), [k, F] = gt("transition", {
    elementType: _l,
    externalForwardedProps: O,
    ownerState: f
  });
  return delete F.ownerState, /* @__PURE__ */ B.jsx(k, {
    in: c,
    timeout: v,
    ...h,
    ...F,
    children: /* @__PURE__ */ B.jsx(x, {
      "aria-hidden": !0,
      ...R,
      classes: T,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    root: r.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: r.bool,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: r.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: r.oneOfType([r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
function vh(e) {
  return ze("MuiCircularProgress", e);
}
Ue("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const pn = 44, Ei = Rr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Si = Rr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`, xh = typeof Ei != "string" ? ki`
        animation: ${Ei} 1.4s linear infinite;
      ` : null, Eh = typeof Si != "string" ? ki`
        animation: ${Si} 1.4s ease-in-out infinite;
      ` : null, Sh = (e) => {
  const {
    classes: t,
    variant: n,
    color: o,
    disableShrink: i
  } = e, a = {
    root: ["root", n, `color${de(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${de(n)}`, i && "circleDisableShrink"]
  };
  return qe(a, vh, t);
}, Th = fe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${de(n.color)}`]];
  }
})(De(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: xh || {
      animation: `${Ei} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(([, t]) => t && t.main).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Oh = fe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Ch = fe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${de(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(De(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Eh || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Si} 1.4s ease-in-out infinite`
    }
  }]
}))), Fl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: a = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: c,
    thickness: u = 3.6,
    value: p = 0,
    variant: m = "indeterminate",
    ...g
  } = o, y = {
    ...o,
    color: a,
    disableShrink: s,
    size: l,
    thickness: u,
    value: p,
    variant: m
  }, v = Sh(y), h = {}, f = {}, T = {};
  if (m === "determinate") {
    const C = 2 * Math.PI * ((pn - u) / 2);
    h.strokeDasharray = C.toFixed(3), T["aria-valuenow"] = Math.round(p), h.strokeDashoffset = `${((100 - p) / 100 * C).toFixed(3)}px`, f.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ B.jsx(Th, {
    className: ye(v.root, i),
    style: {
      width: l,
      height: l,
      ...f,
      ...c
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...T,
    ...g,
    children: /* @__PURE__ */ B.jsx(Oh, {
      className: v.svg,
      ownerState: y,
      viewBox: `${pn / 2} ${pn / 2} ${pn} ${pn}`,
      children: /* @__PURE__ */ B.jsx(Ch, {
        className: v.circle,
        style: h,
        ownerState: y,
        cx: pn,
        cy: pn,
        r: (pn - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Yt(r.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: r.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: r.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["determinate", "indeterminate"])
});
function wh(e) {
  const t = mt(e);
  return t.body === e ? wn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function fr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function bs(e) {
  return parseInt(wn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Rh(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ys(e, t, n, o, i) {
  const a = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const l = a.indexOf(s) === -1, c = !Rh(s);
    l && c && fr(s, i);
  });
}
function Qo(e, t) {
  let n = -1;
  return e.some((o, i) => t(o) ? (n = i, !0) : !1), n;
}
function Ph(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (wh(o)) {
      const s = ol(mt(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${bs(o) + s}px`;
      const l = mt(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${bs(c) + s}px`;
      });
    }
    let a;
    if (o.parentNode instanceof DocumentFragment)
      a = mt(o).body;
    else {
      const s = o.parentElement, l = wn(o);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : o;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: l
    }) => {
      a ? s.style.setProperty(l, a) : s.style.removeProperty(l);
    });
  };
}
function $h(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class kh {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && fr(t.modalRef, !1);
    const i = $h(n);
    ys(n, t.mount, t.modalRef, i, !0);
    const a = Qo(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), o);
  }
  mount(t, n) {
    const o = Qo(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[o];
    i.restore || (i.restore = Ph(i, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const i = Qo(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(o, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && fr(t.modalRef, n), ys(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && fr(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ih = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ah(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Nh(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Mh(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Nh(e));
}
function jh(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Ih)).forEach((o, i) => {
    const a = Ah(o);
    a === -1 || !Mh(o) || (a === 0 ? t.push(o) : n.push({
      documentOrder: i,
      tabIndex: a,
      node: o
    }));
  }), n.sort((o, i) => o.tabIndex === i.tabIndex ? o.documentOrder - i.documentOrder : o.tabIndex - i.tabIndex).map((o) => o.node).concat(t);
}
function _h() {
  return !0;
}
function mo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = jh,
    isEnabled: s = _h,
    open: l
  } = e, c = S.useRef(!1), u = S.useRef(null), p = S.useRef(null), m = S.useRef(null), g = S.useRef(null), y = S.useRef(!1), v = S.useRef(null), h = rt(Ar(t), v), f = S.useRef(null);
  S.useEffect(() => {
    !l || !v.current || (y.current = !n);
  }, [n, l]), S.useEffect(() => {
    if (!l || !v.current)
      return;
    const b = mt(v.current);
    return v.current.contains(b.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), y.current && v.current.focus()), () => {
      i || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), S.useEffect(() => {
    if (!l || !v.current)
      return;
    const b = mt(v.current), O = (k) => {
      f.current = k, !(o || !s() || k.key !== "Tab") && b.activeElement === v.current && k.shiftKey && (c.current = !0, p.current && p.current.focus());
    }, x = () => {
      var d, w;
      const k = v.current;
      if (k === null)
        return;
      if (!b.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (k.contains(b.activeElement) || o && b.activeElement !== u.current && b.activeElement !== p.current)
        return;
      if (b.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!y.current)
        return;
      let F = [];
      if ((b.activeElement === u.current || b.activeElement === p.current) && (F = a(v.current)), F.length > 0) {
        const j = !!((d = f.current) != null && d.shiftKey && ((w = f.current) == null ? void 0 : w.key) === "Tab"), A = F[0], V = F[F.length - 1];
        typeof A != "string" && typeof V != "string" && (j ? V.focus() : A.focus());
      } else
        k.focus();
    };
    b.addEventListener("focusin", x), b.addEventListener("keydown", O, !0);
    const R = setInterval(() => {
      b.activeElement && b.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(R), b.removeEventListener("focusin", x), b.removeEventListener("keydown", O, !0);
    };
  }, [n, o, i, s, l, a]);
  const T = (b) => {
    m.current === null && (m.current = b.relatedTarget), y.current = !0, g.current = b.target;
    const O = t.props.onFocus;
    O && O(b);
  }, C = (b) => {
    m.current === null && (m.current = b.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ B.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: h,
      onFocus: T
    }), /* @__PURE__ */ B.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ir,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: r.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: r.func,
  /**
   * If `true`, focus is locked.
   */
  open: r.bool.isRequired
});
process.env.NODE_ENV !== "production" && (mo.propTypes = el(mo.propTypes));
function Dh(e) {
  return typeof e == "function" ? e() : e;
}
function Fh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Lh = new kh();
function Bh(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = Lh,
    closeAfterTransition: a = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: p,
    rootRef: m
  } = e, g = S.useRef({}), y = S.useRef(null), v = S.useRef(null), h = rt(v, m), [f, T] = S.useState(!p), C = Fh(c);
  let b = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (b = !1);
  const O = () => mt(y.current), x = () => (g.current.modalRef = v.current, g.current.mount = y.current, g.current), R = () => {
    i.mount(x(), {
      disableScrollLock: o
    }), v.current && (v.current.scrollTop = 0);
  }, k = Wt(() => {
    const _ = Dh(t) || O().body;
    i.add(x(), _), v.current && R();
  }), F = S.useCallback(() => i.isTopModal(x()), [i]), d = Wt((_) => {
    y.current = _, _ && (p && F() ? R() : v.current && fr(v.current, b));
  }), w = S.useCallback(() => {
    i.remove(x(), b);
  }, [b, i]);
  S.useEffect(() => () => {
    w();
  }, [w]), S.useEffect(() => {
    p ? k() : (!C || !a) && w();
  }, [p, w, C, a, k]);
  const j = (_) => (Y) => {
    var K;
    (K = _.onKeyDown) == null || K.call(_, Y), !(Y.key !== "Escape" || Y.which === 229 || // Wait until IME is settled.
    !F()) && (n || (Y.stopPropagation(), u && u(Y, "escapeKeyDown")));
  }, A = (_) => (Y) => {
    var K;
    (K = _.onClick) == null || K.call(_, Y), Y.target === Y.currentTarget && u && u(Y, "backdropClick");
  };
  return {
    getRootProps: (_ = {}) => {
      const Y = ll(e);
      delete Y.onTransitionEnter, delete Y.onTransitionExited;
      const K = {
        ...Y,
        ..._
      };
      return {
        role: "presentation",
        ...K,
        onKeyDown: j(K),
        ref: h
      };
    },
    getBackdropProps: (_ = {}) => {
      const Y = _;
      return {
        "aria-hidden": !0,
        ...Y,
        onClick: A(Y),
        open: p
      };
    },
    getTransitionProps: () => {
      const _ = () => {
        T(!1), s && s();
      }, Y = () => {
        T(!0), l && l(), a && w();
      };
      return {
        onEnter: Da(_, c == null ? void 0 : c.props.onEnter),
        onExited: Da(Y, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: d,
    isTopModal: F,
    exited: f,
    hasTransition: C
  };
}
function Vh(e) {
  return ze("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const zh = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return qe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Vh, o);
}, Wh = fe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(De(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Uh = fe(Dl, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ll = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = Uh,
    BackdropProps: a,
    classes: s,
    className: l,
    closeAfterTransition: c = !1,
    children: u,
    container: p,
    component: m,
    components: g = {},
    componentsProps: y = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: f = !1,
    disablePortal: T = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: b = !1,
    hideBackdrop: O = !1,
    keepMounted: x = !1,
    onBackdropClick: R,
    onClose: k,
    onTransitionEnter: F,
    onTransitionExited: d,
    open: w,
    slotProps: j = {},
    slots: A = {},
    // eslint-disable-next-line react/prop-types
    theme: V,
    ...z
  } = o, q = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: v,
    disableEnforceFocus: h,
    disableEscapeKeyDown: f,
    disablePortal: T,
    disableRestoreFocus: C,
    disableScrollLock: b,
    hideBackdrop: O,
    keepMounted: x
  }, {
    getRootProps: _,
    getBackdropProps: Y,
    getTransitionProps: K,
    portalRef: ie,
    isTopModal: D,
    exited: W,
    hasTransition: ae
  } = Bh({
    ...q,
    rootRef: n
  }), Z = {
    ...q,
    exited: W
  }, U = zh(Z), X = {};
  if (u.props.tabIndex === void 0 && (X.tabIndex = "-1"), ae) {
    const {
      onEnter: M,
      onExited: ge
    } = K();
    X.onEnter = M, X.onExited = ge;
  }
  const oe = {
    slots: {
      root: g.Root,
      backdrop: g.Backdrop,
      ...A
    },
    slotProps: {
      ...y,
      ...j
    }
  }, [se, G] = gt("root", {
    elementType: Wh,
    externalForwardedProps: oe,
    getSlotProps: _,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: Z,
    className: ye(l, U == null ? void 0 : U.root, !Z.open && Z.exited && (U == null ? void 0 : U.hidden))
  }), [re, J] = gt("backdrop", {
    elementType: i,
    externalForwardedProps: oe,
    additionalProps: a,
    getSlotProps: (M) => Y({
      ...M,
      onClick: (ge) => {
        R && R(ge), M != null && M.onClick && M.onClick(ge);
      }
    }),
    className: ye(a == null ? void 0 : a.className, U == null ? void 0 : U.backdrop),
    ownerState: Z
  }), ue = rt(a == null ? void 0 : a.ref, J.ref);
  return !x && !w && (!ae || W) ? null : /* @__PURE__ */ B.jsx(Sr, {
    ref: ie,
    container: p,
    disablePortal: T,
    children: /* @__PURE__ */ B.jsxs(se, {
      ...G,
      ...z,
      children: [!O && i ? /* @__PURE__ */ B.jsx(re, {
        ...J,
        ref: ue
      }) : null, /* @__PURE__ */ B.jsx(mo, {
        disableEnforceFocus: h,
        disableAutoFocus: v,
        disableRestoreFocus: C,
        isEnabled: D,
        open: w,
        children: /* @__PURE__ */ S.cloneElement(u, X)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: r.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Backdrop: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([rn, r.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: r.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: r.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: r.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: r.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: r.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: r.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: r.shape({
    backdrop: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    backdrop: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Hh = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: o,
    endAdornment: i,
    size: a,
    hiddenLabel: s,
    multiline: l
  } = e, c = {
    root: ["root", !n && "underline", o && "adornedStart", i && "adornedEnd", a === "small" && `size${de(a)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = qe(c, th, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, qh = fe(Fo, {
  shouldForwardProp: (e) => Gt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [..._o(e, t), !n.disableUnderline && t.underline];
  }
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
      }
    },
    [`&.${Et.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
    },
    [`&.${Et.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Et.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Et.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Et.disabled}, .${Et.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Et.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(([, s]) => s && s.main).map(([s]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: l
      }) => s.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Yh = fe(Lo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Do
})(De(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), Tr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    hiddenLabel: c,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: p = !1,
    slotProps: m,
    slots: g = {},
    type: y = "text",
    ...v
  } = o, h = {
    ...o,
    disableUnderline: i,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    type: y
  }, f = Hh(o), T = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, C = m ?? s ? pt(T, m ?? s) : T, b = g.root ?? a.Root ?? qh, O = g.input ?? a.Input ?? Yh;
  return /* @__PURE__ */ B.jsx(oa, {
    slots: {
      root: b,
      input: O
    },
    componentsProps: C,
    fullWidth: l,
    inputComponent: u,
    multiline: p,
    ref: n,
    type: y,
    ...v,
    classes: f
  });
});
process.env.NODE_ENV !== "production" && (Tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
Tr && (Tr.muiName = "Input");
function Kh(e) {
  return ze("MuiFormControl", e);
}
Ue("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Gh = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, i = {
    root: ["root", n !== "none" && `margin${de(n)}`, o && "fullWidth"]
  };
  return qe(i, Kh, t);
}, Xh = fe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...t[`margin${de(e.margin)}`],
    ...e.fullWidth && t.fullWidth
  })
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Bl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: a,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: p,
    fullWidth: m = !1,
    hiddenLabel: g = !1,
    margin: y = "none",
    required: v = !1,
    size: h = "medium",
    variant: f = "outlined",
    ...T
  } = o, C = {
    ...o,
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: m,
    hiddenLabel: g,
    margin: y,
    required: v,
    size: h,
    variant: f
  }, b = Gh(C), [O, x] = S.useState(() => {
    let V = !1;
    return i && S.Children.forEach(i, (z) => {
      if (!Go(z, ["Input", "Select"]))
        return;
      const q = Go(z, ["Select"]) ? z.props.input : z;
      q && Xm(q.props) && (V = !0);
    }), V;
  }), [R, k] = S.useState(() => {
    let V = !1;
    return i && S.Children.forEach(i, (z) => {
      Go(z, ["Input", "Select"]) && (fo(z.props, !0) || fo(z.props.inputProps, !0)) && (V = !0);
    }), V;
  }), [F, d] = S.useState(!1);
  c && F && d(!1);
  const w = p !== void 0 && !c ? p : F;
  let j;
  if (process.env.NODE_ENV !== "production") {
    const V = S.useRef(!1);
    j = () => (V.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), V.current = !0, () => {
      V.current = !1;
    });
  }
  const A = S.useMemo(() => ({
    adornedStart: O,
    setAdornedStart: x,
    color: s,
    disabled: c,
    error: u,
    filled: R,
    focused: w,
    fullWidth: m,
    hiddenLabel: g,
    size: h,
    onBlur: () => {
      d(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      d(!0);
    },
    registerEffect: j,
    required: v,
    variant: f
  }), [O, s, c, u, R, w, m, g, j, v, h, f]);
  return /* @__PURE__ */ B.jsx(jo.Provider, {
    value: A,
    children: /* @__PURE__ */ B.jsx(Xh, {
      as: l,
      ownerState: C,
      className: ye(b.root, a),
      ref: n,
      ...T,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: r.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: r.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: r.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: r.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: r.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
function Jh(e) {
  return ze("MuiFormHelperText", e);
}
const vs = Ue("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var xs;
const Zh = (e) => {
  const {
    classes: t,
    contained: n,
    size: o,
    disabled: i,
    error: a,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", a && "error", o && `size${de(o)}`, n && "contained", l && "focused", s && "filled", c && "required"]
  };
  return qe(u, Jh, t);
}, Qh = fe("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${de(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${vs.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Vl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: a,
    component: s = "p",
    disabled: l,
    error: c,
    filled: u,
    focused: p,
    margin: m,
    required: g,
    variant: y,
    ...v
  } = o, h = Kn(), f = Yn({
    props: o,
    muiFormControl: h,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), T = {
    ...o,
    component: s,
    contained: f.variant === "filled" || f.variant === "outlined",
    variant: f.variant,
    size: f.size,
    disabled: f.disabled,
    error: f.error,
    filled: f.filled,
    focused: f.focused,
    required: f.required
  };
  delete T.ownerState;
  const C = Zh(T);
  return /* @__PURE__ */ B.jsx(Qh, {
    as: s,
    className: ye(C.root, a),
    ref: n,
    ...v,
    ownerState: T,
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      xs || (xs = /* @__PURE__ */ B.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  });
});
process.env.NODE_ENV !== "production" && (Vl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: r.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: r.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: r.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: r.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   */
  variant: r.oneOfType([r.oneOf(["filled", "outlined", "standard"]), r.string])
});
function eg(e) {
  return ze("MuiFormLabel", e);
}
const mr = Ue("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), tg = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: i,
    error: a,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${de(n)}`, i && "disabled", a && "error", s && "filled", o && "focused", l && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return qe(c, eg, t);
}, ng = fe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => ({
    ...t.root,
    ...e.color === "secondary" && t.colorSecondary,
    ...e.filled && t.filled
  })
})(De(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(([, t]) => t && t.main).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${mr.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${mr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${mr.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), rg = fe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(De(({
  theme: e
}) => ({
  [`&.${mr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), zl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: a,
    color: s,
    component: l = "label",
    disabled: c,
    error: u,
    filled: p,
    focused: m,
    required: g,
    ...y
  } = o, v = Kn(), h = Yn({
    props: o,
    muiFormControl: v,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), f = {
    ...o,
    color: h.color || "primary",
    component: l,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  }, T = tg(f);
  return /* @__PURE__ */ B.jsxs(ng, {
    as: l,
    ownerState: f,
    className: ye(T.root, a),
    ref: n,
    ...y,
    children: [i, h.required && /* @__PURE__ */ B.jsxs(rg, {
      ownerState: f,
      "aria-hidden": !0,
      className: T.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: r.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: r.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function Ti(e) {
  return `scale(${e}, ${e ** 2})`;
}
const og = {
  entering: {
    opacity: 1,
    transform: Ti(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ei = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ho = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: i = !0,
    children: a,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: p,
    onExit: m,
    onExited: g,
    onExiting: y,
    style: v,
    timeout: h = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = Xt,
    ...T
  } = t, C = rl(), b = S.useRef(), O = Ui(), x = S.useRef(null), R = rt(x, Ar(a), n), k = (q) => (_) => {
    if (q) {
      const Y = x.current;
      _ === void 0 ? q(Y) : q(Y, _);
    }
  }, F = k(p), d = k((q, _) => {
    yl(q);
    const {
      duration: Y,
      delay: K,
      easing: ie
    } = ao({
      style: v,
      timeout: h,
      easing: s
    }, {
      mode: "enter"
    });
    let D;
    h === "auto" ? (D = O.transitions.getAutoHeightDuration(q.clientHeight), b.current = D) : D = Y, q.style.transition = [O.transitions.create("opacity", {
      duration: D,
      delay: K
    }), O.transitions.create("transform", {
      duration: ei ? D : D * 0.666,
      delay: K,
      easing: ie
    })].join(","), c && c(q, _);
  }), w = k(u), j = k(y), A = k((q) => {
    const {
      duration: _,
      delay: Y,
      easing: K
    } = ao({
      style: v,
      timeout: h,
      easing: s
    }, {
      mode: "exit"
    });
    let ie;
    h === "auto" ? (ie = O.transitions.getAutoHeightDuration(q.clientHeight), b.current = ie) : ie = _, q.style.transition = [O.transitions.create("opacity", {
      duration: ie,
      delay: Y
    }), O.transitions.create("transform", {
      duration: ei ? ie : ie * 0.666,
      delay: ei ? Y : Y || ie * 0.333,
      easing: K
    })].join(","), q.style.opacity = 0, q.style.transform = Ti(0.75), m && m(q);
  }), V = k(g), z = (q) => {
    h === "auto" && C.start(b.current || 0, q), o && o(x.current, q);
  };
  return /* @__PURE__ */ B.jsx(f, {
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: d,
    onEntered: w,
    onEntering: F,
    onExit: A,
    onExited: V,
    onExiting: j,
    addEndListener: z,
    timeout: h === "auto" ? null : h,
    ...T,
    children: (q, _) => /* @__PURE__ */ S.cloneElement(a, {
      style: {
        opacity: 0,
        transform: Ti(0.75),
        visibility: q === "exited" && !l ? "hidden" : void 0,
        ...og[q],
        ...v,
        ...a.props.style
      },
      ref: R,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: r.bool,
  /**
   * A single child content element.
   */
  children: Ir.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
ho && (ho.muiSupportAuto = !0);
const ig = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = qe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Qm, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...i
  };
}, ag = fe(Fo, {
  shouldForwardProp: (e) => Gt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [..._o(e, t), !n.disableUnderline && t.underline];
  }
})(De(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: o
      }) => o.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => !o.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${dn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${dn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${dn.disabled}, .${dn.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${dn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(([, o]) => o && o.main).map(([o]) => ({
      props: {
        color: o,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[o].main}`
        }
      }
    }))]
  };
})), sg = fe(Lo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Do
})({}), Or = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: i = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: l = !1,
    inputComponent: c = "input",
    multiline: u = !1,
    slotProps: p,
    slots: m = {},
    type: g = "text",
    ...y
  } = o, v = ig(o), f = {
    root: {
      ownerState: {
        disableUnderline: i
      }
    }
  }, T = p ?? s ? pt(p ?? s, f) : f, C = m.root ?? a.Root ?? ag, b = m.input ?? a.Input ?? sg;
  return /* @__PURE__ */ B.jsx(oa, {
    slots: {
      root: C,
      input: b
    },
    slotProps: T,
    fullWidth: l,
    inputComponent: c,
    multiline: u,
    ref: n,
    type: g,
    ...y,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (Or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: r.shape({
    input: r.object,
    root: r.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
Or && (Or.muiName = "Input");
function lg(e) {
  return ze("MuiInputLabel", e);
}
Ue("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const cg = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: i,
    disableAnimation: a,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !a && "animated", i && "shrink", o && o !== "normal" && `size${de(o)}`, s],
    asterisk: [l && "asterisk"]
  }, u = qe(c, lg, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, ug = fe(zl, {
  shouldForwardProp: (e) => Gt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${mr.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(De(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: o
    }) => t === "filled" && n.shrink && o === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Wl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    margin: a,
    shrink: s,
    variant: l,
    className: c,
    ...u
  } = o, p = Kn();
  let m = s;
  typeof m > "u" && p && (m = p.filled || p.focused || p.adornedStart);
  const g = Yn({
    props: o,
    muiFormControl: p,
    states: ["size", "variant", "required", "focused"]
  }), y = {
    ...o,
    disableAnimation: i,
    formControl: p,
    shrink: m,
    size: g.size,
    variant: g.variant,
    required: g.required,
    focused: g.focused
  }, v = cg(y);
  return /* @__PURE__ */ B.jsx(ug, {
    "data-shrink": m,
    ref: n,
    className: ye(v.root, c),
    ...u,
    ownerState: y,
    classes: v
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), r.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: r.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: r.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: r.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: r.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: r.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: r.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: r.oneOfType([r.oneOf(["normal", "small"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The variant to use.
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
const Ul = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (Ul.displayName = "ListContext");
function pg(e) {
  return ze("MuiList", e);
}
Ue("MuiList", ["root", "padding", "dense", "subheader"]);
const dg = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: i
  } = e;
  return qe({
    root: ["root", !n && "padding", o && "dense", i && "subheader"]
  }, pg, t);
}, fg = fe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Hl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: a,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u,
    ...p
  } = o, m = S.useMemo(() => ({
    dense: l
  }), [l]), g = {
    ...o,
    component: s,
    dense: l,
    disablePadding: c
  }, y = dg(g);
  return /* @__PURE__ */ B.jsx(Ul.Provider, {
    value: m,
    children: /* @__PURE__ */ B.jsxs(fg, {
      as: s,
      className: ye(y.root, a),
      ref: n,
      ownerState: g,
      ...p,
      children: [u, i]
    })
  });
});
process.env.NODE_ENV !== "production" && (Hl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: r.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: r.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
function ti(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Es(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ql(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function or(e, t, n, o, i, a) {
  let s = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = o ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ql(l, a) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Yl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: i = !1,
    autoFocusItem: a = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: p,
    variant: m = "selectedMenu",
    ...g
  } = t, y = S.useRef(null), v = S.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  nn(() => {
    i && y.current.focus();
  }, [i]), S.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (b, {
      direction: O
    }) => {
      const x = !y.current.style.width;
      if (b.clientHeight < y.current.clientHeight && x) {
        const R = `${ol(mt(b))}px`;
        y.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = R, y.current.style.width = `calc(100% + ${R})`;
      }
      return y.current;
    }
  }), []);
  const h = (b) => {
    const O = y.current, x = b.key;
    if (b.ctrlKey || b.metaKey || b.altKey) {
      p && p(b);
      return;
    }
    const k = mt(O).activeElement;
    if (x === "ArrowDown")
      b.preventDefault(), or(O, k, u, c, ti);
    else if (x === "ArrowUp")
      b.preventDefault(), or(O, k, u, c, Es);
    else if (x === "Home")
      b.preventDefault(), or(O, null, u, c, ti);
    else if (x === "End")
      b.preventDefault(), or(O, null, u, c, Es);
    else if (x.length === 1) {
      const F = v.current, d = x.toLowerCase(), w = performance.now();
      F.keys.length > 0 && (w - F.lastTime > 500 ? (F.keys = [], F.repeating = !0, F.previousKeyMatched = !0) : F.repeating && d !== F.keys[0] && (F.repeating = !1)), F.lastTime = w, F.keys.push(d);
      const j = k && !F.repeating && ql(k, F);
      F.previousKeyMatched && (j || or(O, k, !1, c, ti, F)) ? b.preventDefault() : F.previousKeyMatched = !1;
    }
    p && p(b);
  }, f = rt(y, n);
  let T = -1;
  S.Children.forEach(s, (b, O) => {
    if (!/* @__PURE__ */ S.isValidElement(b)) {
      T === O && (T += 1, T >= s.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && qi.isFragment(b) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), b.props.disabled || (m === "selectedMenu" && b.props.selected || T === -1) && (T = O), T === O && (b.props.disabled || b.props.muiSkipListHighlight || b.type.muiSkipListHighlight) && (T += 1, T >= s.length && (T = -1));
  });
  const C = S.Children.map(s, (b, O) => {
    if (O === T) {
      const x = {};
      return a && (x.autoFocus = !0), b.props.tabIndex === void 0 && m === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ S.cloneElement(b, x);
    }
    return b;
  });
  return /* @__PURE__ */ B.jsx(Hl, {
    role: "menu",
    ref: f,
    className: l,
    onKeyDown: h,
    tabIndex: i ? 0 : -1,
    ...g,
    children: C
  });
});
process.env.NODE_ENV !== "production" && (Yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: r.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * @ignore
   */
  onKeyDown: r.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function mg(e) {
  return ze("MuiPopover", e);
}
Ue("MuiPopover", ["root", "paper"]);
function Ss(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ts(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Os(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Qr(e) {
  return typeof e == "function" ? e() : e;
}
const hg = (e) => {
  const {
    classes: t
  } = e;
  return qe({
    root: ["root"],
    paper: ["paper"]
  }, mg, t);
}, gg = fe(Ll, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Kl = fe(Ao, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Gl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: p,
    container: m,
    elevation: g = 8,
    marginThreshold: y = 16,
    open: v,
    PaperProps: h = {},
    slots: f = {},
    slotProps: T = {},
    transformOrigin: C = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: b = ho,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: x,
      ...R
    } = {},
    disableScrollLock: k = !1,
    ...F
  } = o, d = (T == null ? void 0 : T.paper) ?? h, w = S.useRef(), j = {
    ...o,
    anchorOrigin: s,
    anchorReference: c,
    elevation: g,
    marginThreshold: y,
    externalPaperSlotProps: d,
    transformOrigin: C,
    TransitionComponent: b,
    transitionDuration: O,
    TransitionProps: R
  }, A = hg(j), V = S.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const J = Qr(a), ue = J && J.nodeType === 1 ? J : mt(w.current).body, M = ue.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ge = ue.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ge.top === 0 && ge.left === 0 && ge.right === 0 && ge.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: M.top + Ss(M, s.vertical),
      left: M.left + Ts(M, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, l, c]), z = S.useCallback((J) => ({
    vertical: Ss(J, C.vertical),
    horizontal: Ts(J, C.horizontal)
  }), [C.horizontal, C.vertical]), q = S.useCallback((J) => {
    const ue = {
      width: J.offsetWidth,
      height: J.offsetHeight
    }, M = z(ue);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Os(M)
      };
    const ge = V();
    let I = ge.top - M.vertical, pe = ge.left - M.horizontal;
    const te = I + ue.height, Fe = pe + ue.width, he = wn(Qr(a)), Ce = he.innerHeight - y, Le = he.innerWidth - y;
    if (y !== null && I < y) {
      const xe = I - y;
      I -= xe, M.vertical += xe;
    } else if (y !== null && te > Ce) {
      const xe = te - Ce;
      I -= xe, M.vertical += xe;
    }
    if (process.env.NODE_ENV !== "production" && ue.height > Ce && ue.height && Ce && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ue.height - Ce}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && pe < y) {
      const xe = pe - y;
      pe -= xe, M.horizontal += xe;
    } else if (Fe > Le) {
      const xe = Fe - Le;
      pe -= xe, M.horizontal += xe;
    }
    return {
      top: `${Math.round(I)}px`,
      left: `${Math.round(pe)}px`,
      transformOrigin: Os(M)
    };
  }, [a, c, V, z, y]), [_, Y] = S.useState(v), K = S.useCallback(() => {
    const J = w.current;
    if (!J)
      return;
    const ue = q(J);
    ue.top !== null && (J.style.top = ue.top), ue.left !== null && (J.style.left = ue.left), J.style.transformOrigin = ue.transformOrigin, Y(!0);
  }, [q]);
  S.useEffect(() => (k && window.addEventListener("scroll", K), () => window.removeEventListener("scroll", K)), [a, k, K]);
  const ie = (J, ue) => {
    x && x(J, ue), K();
  }, D = () => {
    Y(!1);
  };
  S.useEffect(() => {
    v && K();
  }), S.useImperativeHandle(i, () => v ? {
    updatePosition: () => {
      K();
    }
  } : null, [v, K]), S.useEffect(() => {
    if (!v)
      return;
    const J = tl(() => {
      K();
    }), ue = wn(a);
    return ue.addEventListener("resize", J), () => {
      J.clear(), ue.removeEventListener("resize", J);
    };
  }, [a, v, K]);
  let W = O;
  O === "auto" && !b.muiSupportAuto && (W = void 0);
  const ae = m || (a ? mt(Qr(a)).body : void 0), Z = {
    slots: f,
    slotProps: {
      ...T,
      paper: d
    }
  }, [U, X] = gt("paper", {
    elementType: Kl,
    externalForwardedProps: Z,
    additionalProps: {
      elevation: g,
      className: ye(A.paper, d == null ? void 0 : d.className),
      style: _ ? d.style : {
        ...d.style,
        opacity: 0
      }
    },
    ownerState: j
  }), [oe, {
    slotProps: se,
    ...G
  }] = gt("root", {
    elementType: gg,
    externalForwardedProps: Z,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ae,
      open: v
    },
    ownerState: j,
    className: ye(A.root, p)
  }), re = rt(w, X.ref);
  return /* @__PURE__ */ B.jsx(oe, {
    ...G,
    ...!xi(oe) && {
      slotProps: se,
      disableScrollLock: k
    },
    ...F,
    ref: n,
    children: /* @__PURE__ */ B.jsx(b, {
      appear: !0,
      in: v,
      onEntering: ie,
      onExited: D,
      timeout: W,
      ...R,
      children: /* @__PURE__ */ B.jsx(U, {
        ...X,
        ref: re,
        children: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Gl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Dt,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Yt(r.oneOfType([rn, r.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Qr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: r.shape({
    left: r.number.isRequired,
    top: r.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: r.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: r.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: r.object,
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: r.oneOfType([rn, r.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: r.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: zi,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: r.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: r.shape({
    component: Li
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    paper: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: r.shape({
    horizontal: r.oneOfType([r.oneOf(["center", "left", "right"]), r.number]).isRequired,
    vertical: r.oneOfType([r.oneOf(["bottom", "center", "top"]), r.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: r.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: r.object
});
function bg(e) {
  return ze("MuiMenu", e);
}
Ue("MuiMenu", ["root", "paper", "list"]);
const yg = {
  vertical: "top",
  horizontal: "right"
}, vg = {
  vertical: "top",
  horizontal: "left"
}, xg = (e) => {
  const {
    classes: t
  } = e;
  return qe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, bg, t);
}, Eg = fe(Gl, {
  shouldForwardProp: (e) => Gt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Sg = fe(Kl, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Tg = fe(Yl, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Xl = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: s,
    disableAutoFocusItem: l = !1,
    MenuListProps: c = {},
    onClose: u,
    open: p,
    PaperProps: m = {},
    PopoverClasses: g,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: v,
      ...h
    } = {},
    variant: f = "selectedMenu",
    slots: T = {},
    slotProps: C = {},
    ...b
  } = o, O = pl(), x = {
    ...o,
    autoFocus: i,
    disableAutoFocusItem: l,
    MenuListProps: c,
    onEntering: v,
    PaperProps: m,
    transitionDuration: y,
    TransitionProps: h,
    variant: f
  }, R = xg(x), k = i && !l && p, F = S.useRef(null), d = (_, Y) => {
    F.current && F.current.adjustStyleForScrollbar(_, {
      direction: O ? "rtl" : "ltr"
    }), v && v(_, Y);
  }, w = (_) => {
    _.key === "Tab" && (_.preventDefault(), u && u(_, "tabKeyDown"));
  };
  let j = -1;
  S.Children.map(a, (_, Y) => {
    /* @__PURE__ */ S.isValidElement(_) && (process.env.NODE_ENV !== "production" && qi.isFragment(_) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), _.props.disabled || (f === "selectedMenu" && _.props.selected || j === -1) && (j = Y));
  });
  const A = T.paper ?? Sg, V = C.paper ?? m, z = pi({
    elementType: T.root,
    externalSlotProps: C.root,
    ownerState: x,
    className: [R.root, s]
  }), q = pi({
    elementType: A,
    externalSlotProps: V,
    ownerState: x,
    className: R.paper
  });
  return /* @__PURE__ */ B.jsx(Eg, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? yg : vg,
    slots: {
      paper: A,
      root: T.root
    },
    slotProps: {
      root: z,
      paper: q
    },
    open: p,
    ref: n,
    transitionDuration: y,
    TransitionProps: {
      onEntering: d,
      ...h
    },
    ownerState: x,
    ...b,
    classes: g,
    children: /* @__PURE__ */ B.jsx(Tg, {
      onKeyDown: w,
      actions: F,
      autoFocus: i && (j === -1 || l),
      autoFocusItem: k,
      variant: f,
      ...c,
      className: ye(R.list, c.className),
      children: a
    })
  });
});
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: r.oneOfType([rn, r.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: r.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: r.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: r.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: r.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    paper: r.oneOfType([r.func, r.object]),
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    paper: r.elementType,
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: r.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: r.oneOf(["menu", "selectedMenu"])
});
function Og(e) {
  return ze("MuiNativeSelect", e);
}
const ia = Ue("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Cg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${de(n)}`, a && "iconOpen", o && "disabled"]
  };
  return qe(l, Og, t);
}, Jl = fe("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${ia.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), wg = fe(Jl, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Gt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ia.multiple}`]: t.multiple
    }];
  }
})({}), Zl = fe("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${ia.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Rg = fe(Zl, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${de(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Ql = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    className: o,
    disabled: i,
    error: a,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard",
    ...u
  } = t, p = {
    ...t,
    disabled: i,
    variant: c,
    error: a
  }, m = Cg(p);
  return /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ B.jsx(wg, {
      ownerState: p,
      className: ye(m.select, o),
      disabled: i,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ B.jsx(Rg, {
      as: s,
      ownerState: p,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The CSS class name of the select element.
   */
  className: r.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: r.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: r.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Dt,
  /**
   * @ignore
   */
  multiple: r.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: r.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The input value.
   */
  value: r.any,
  /**
   * The variant to use.
   */
  variant: r.oneOf(["standard", "outlined", "filled"])
});
var Cs;
const Pg = fe("fieldset", {
  shouldForwardProp: Gt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), $g = fe("legend", {
  shouldForwardProp: Gt
})(De(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function ec(e) {
  const {
    children: t,
    classes: n,
    className: o,
    label: i,
    notched: a,
    ...s
  } = e, l = i != null && i !== "", c = {
    ...e,
    notched: a,
    withLabel: l
  };
  return /* @__PURE__ */ B.jsx(Pg, {
    "aria-hidden": !0,
    className: o,
    ownerState: c,
    ...s,
    children: /* @__PURE__ */ B.jsx($g, {
      ownerState: c,
      children: l ? /* @__PURE__ */ B.jsx("span", {
        children: i
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Cs || (Cs = /* @__PURE__ */ B.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The label.
   */
  label: r.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: r.bool.isRequired,
  /**
   * @ignore
   */
  style: r.object
});
const kg = (e) => {
  const {
    classes: t
  } = e, o = qe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, eh, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, Ig = fe(Fo, {
  shouldForwardProp: (e) => Gt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: _o
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Pt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    [`&.${Pt.focused} .${Pt.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(([, n]) => n && n.main).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Pt.focused} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          [`&:hover .${Pt.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${Pt.error} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Pt.disabled} .${Pt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: o
      }) => n.multiline && o === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Ag = fe(ec, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(De(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Ng = fe(Lo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Do
})(De(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), Cr = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var o;
  const i = Ke({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: l = "input",
    label: c,
    multiline: u = !1,
    notched: p,
    slots: m = {},
    type: g = "text",
    ...y
  } = i, v = kg(i), h = Kn(), f = Yn({
    props: i,
    muiFormControl: h,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), T = {
    ...i,
    color: f.color || "primary",
    disabled: f.disabled,
    error: f.error,
    focused: f.focused,
    formControl: h,
    fullWidth: s,
    hiddenLabel: f.hiddenLabel,
    multiline: u,
    size: f.size,
    type: g
  }, C = m.root ?? a.Root ?? Ig, b = m.input ?? a.Input ?? Ng;
  return /* @__PURE__ */ B.jsx(oa, {
    slots: {
      root: C,
      input: b
    },
    renderSuffix: (O) => /* @__PURE__ */ B.jsx(Ag, {
      ownerState: T,
      className: v.notchedOutline,
      label: c != null && c !== "" && f.required ? o || (o = /* @__PURE__ */ B.jsxs(S.Fragment, {
        children: [c, " ", "*"]
      })) : c,
      notched: typeof p < "u" ? p : !!(O.startAdornment || O.filled || O.focused)
    }),
    fullWidth: s,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: g,
    ...y,
    classes: {
      ...v,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: r.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary"]), r.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Input: r.elementType,
    Root: r.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: r.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: r.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: r.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The id of the `input` element.
   */
  id: r.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: r.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: r.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: r.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: r.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: r.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: r.shape({
    input: r.elementType,
    root: r.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: r.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any
});
Cr && (Cr.muiName = "Input");
function Mg(e) {
  return ze("MuiSelect", e);
}
const ir = Ue("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var ws;
const jg = fe(Jl, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ir.select}`]: t.select
      },
      {
        [`&.${ir.select}`]: t[n.variant]
      },
      {
        [`&.${ir.error}`]: t.error
      },
      {
        [`&.${ir.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${ir.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), _g = fe(Zl, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${de(n.variant)}`], n.open && t.iconOpen];
  }
})({}), Dg = fe("input", {
  shouldForwardProp: (e) => ml(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Rs(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Fg(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Lg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: i,
    open: a,
    error: s
  } = e, l = {
    select: ["select", n, o && "disabled", i && "multiple", s && "error"],
    icon: ["icon", `icon${de(n)}`, a && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return qe(l, Mg, t);
}, tc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var ht;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: a,
    autoWidth: s,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: p,
    disabled: m,
    displayEmpty: g,
    error: y = !1,
    IconComponent: v,
    inputRef: h,
    labelId: f,
    MenuProps: T = {},
    multiple: C,
    name: b,
    onBlur: O,
    onChange: x,
    onClose: R,
    onFocus: k,
    onOpen: F,
    open: d,
    readOnly: w,
    renderValue: j,
    SelectDisplayProps: A = {},
    tabIndex: V,
    // catching `type` from Input which makes no sense for SelectInput
    type: z,
    value: q,
    variant: _ = "standard",
    ...Y
  } = t, [K, ie] = ur({
    controlled: q,
    default: p,
    name: "Select"
  }), [D, W] = ur({
    controlled: d,
    default: u,
    name: "Select"
  }), ae = S.useRef(null), Z = S.useRef(null), [U, X] = S.useState(null), {
    current: oe
  } = S.useRef(d != null), [se, G] = S.useState(), re = rt(n, h), J = S.useCallback((le) => {
    Z.current = le, le && X(le);
  }, []), ue = U == null ? void 0 : U.parentNode;
  S.useImperativeHandle(re, () => ({
    focus: () => {
      Z.current.focus();
    },
    node: ae.current,
    value: K
  }), [K]), S.useEffect(() => {
    u && D && U && !oe && (G(s ? null : ue.clientWidth), Z.current.focus());
  }, [U, s]), S.useEffect(() => {
    a && Z.current.focus();
  }, [a]), S.useEffect(() => {
    if (!f)
      return;
    const le = mt(Z.current).getElementById(f);
    if (le) {
      const Ee = () => {
        getSelection().isCollapsed && Z.current.focus();
      };
      return le.addEventListener("click", Ee), () => {
        le.removeEventListener("click", Ee);
      };
    }
  }, [f]);
  const M = (le, Ee) => {
    le ? F && F(Ee) : R && R(Ee), oe || (G(s ? null : ue.clientWidth), W(le));
  }, ge = (le) => {
    le.button === 0 && (le.preventDefault(), Z.current.focus(), M(!0, le));
  }, I = (le) => {
    M(!1, le);
  }, pe = S.Children.toArray(l), te = (le) => {
    const Ee = pe.find((He) => He.props.value === le.target.value);
    Ee !== void 0 && (ie(Ee.props.value), x && x(le, Ee));
  }, Fe = (le) => (Ee) => {
    let He;
    if (Ee.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        He = Array.isArray(K) ? K.slice() : [];
        const wt = K.indexOf(le.props.value);
        wt === -1 ? He.push(le.props.value) : He.splice(wt, 1);
      } else
        He = le.props.value;
      if (le.props.onClick && le.props.onClick(Ee), K !== He && (ie(He), x)) {
        const wt = Ee.nativeEvent || Ee, ct = new wt.constructor(wt.type, wt);
        Object.defineProperty(ct, "target", {
          writable: !0,
          value: {
            value: He,
            name: b
          }
        }), x(ct, le);
      }
      C || M(!1, Ee);
    }
  }, he = (le) => {
    w || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(le.key) && (le.preventDefault(), M(!0, le));
  }, Ce = U !== null && D, Le = (le) => {
    !Ce && O && (Object.defineProperty(le, "target", {
      writable: !0,
      value: {
        value: K,
        name: b
      }
    }), O(le));
  };
  delete Y["aria-invalid"];
  let xe, Ge;
  const ce = [];
  let _e = !1, ot = !1;
  (fo({
    value: K
  }) || g) && (j ? xe = j(K) : _e = !0);
  const it = pe.map((le) => {
    if (!/* @__PURE__ */ S.isValidElement(le))
      return null;
    process.env.NODE_ENV !== "production" && qi.isFragment(le) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ee;
    if (C) {
      if (!Array.isArray(K))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : qt(2));
      Ee = K.some((He) => Rs(He, le.props.value)), Ee && _e && ce.push(le.props.children);
    } else
      Ee = Rs(K, le.props.value), Ee && _e && (Ge = le.props.children);
    return Ee && (ot = !0), /* @__PURE__ */ S.cloneElement(le, {
      "aria-selected": Ee ? "true" : "false",
      onClick: Fe(le),
      onKeyUp: (He) => {
        He.key === " " && He.preventDefault(), le.props.onKeyUp && le.props.onKeyUp(He);
      },
      role: "option",
      selected: Ee,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": le.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && S.useEffect(() => {
    if (!ot && !C && K !== "") {
      const le = pe.map((Ee) => Ee.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${K}\` for the select ${b ? `(name="${b}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${le.filter((Ee) => Ee != null).map((Ee) => `\`${Ee}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [ot, pe, C, b, K]), _e && (C ? ce.length === 0 ? xe = null : xe = ce.reduce((le, Ee, He) => (le.push(Ee), He < ce.length - 1 && le.push(", "), le), []) : xe = Ge);
  let Xe = se;
  !s && oe && U && (Xe = ue.clientWidth);
  let We;
  typeof V < "u" ? We = V : We = m ? null : 0;
  const we = A.id || (b ? `mui-component-select-${b}` : void 0), Qe = {
    ...t,
    variant: _,
    value: K,
    open: Ce,
    error: y
  }, Se = Lg(Qe), dt = {
    ...T.PaperProps,
    ...(ht = T.slotProps) == null ? void 0 : ht.paper
  }, Ct = Bi();
  return /* @__PURE__ */ B.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ B.jsx(jg, {
      as: "div",
      ref: J,
      tabIndex: We,
      role: "combobox",
      "aria-controls": Ct,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Ce ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [f, we].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: he,
      onMouseDown: m || w ? null : ge,
      onBlur: Le,
      onFocus: k,
      ...A,
      ownerState: Qe,
      className: ye(A.className, Se.select, c),
      id: we,
      children: Fg(xe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        ws || (ws = /* @__PURE__ */ B.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : xe
    }), /* @__PURE__ */ B.jsx(Dg, {
      "aria-invalid": y,
      value: Array.isArray(K) ? K.join(",") : K,
      name: b,
      ref: ae,
      "aria-hidden": !0,
      onChange: te,
      tabIndex: -1,
      disabled: m,
      className: Se.nativeInput,
      autoFocus: a,
      ...Y,
      ownerState: Qe
    }), /* @__PURE__ */ B.jsx(_g, {
      as: v,
      className: Se.icon,
      ownerState: Qe
    }), /* @__PURE__ */ B.jsx(Xl, {
      id: `menu-${b || ""}`,
      anchorEl: ue,
      open: Ce,
      onClose: I,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...T,
      MenuListProps: {
        "aria-labelledby": f,
        role: "listbox",
        "aria-multiselectable": C ? "true" : void 0,
        disableListWrap: !0,
        id: Ct,
        ...T.MenuListProps
      },
      slotProps: {
        ...T.slotProps,
        paper: {
          ...dt,
          style: {
            minWidth: Xe,
            ...dt != null ? dt.style : null
          }
        }
      },
      children: it
    })]
  });
});
process.env.NODE_ENV !== "production" && (tc.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": r.string,
  /**
   * @ignore
   */
  "aria-label": r.string,
  /**
   * @ignore
   */
  autoFocus: r.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: r.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * The CSS class name of the select element.
   */
  className: r.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: r.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: r.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: r.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: r.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: r.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Dt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: r.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: r.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: r.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: r.string,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * @ignore
   */
  readOnly: r.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: r.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: r.object,
  /**
   * @ignore
   */
  tabIndex: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  type: r.any,
  /**
   * The input value.
   */
  value: r.any,
  /**
   * The variant to use.
   */
  variant: r.oneOf(["standard", "outlined", "filled"])
});
const Bg = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, aa = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Gt(e) && e !== "variant",
  slot: "Root"
}, Vg = fe(Or, aa)(""), zg = fe(Cr, aa)(""), Wg = fe(Tr, aa)(""), sa = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ld({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: a,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: p = Ml,
    id: m,
    input: g,
    inputProps: y,
    label: v,
    labelId: h,
    MenuProps: f,
    multiple: T = !1,
    native: C = !1,
    onClose: b,
    onOpen: O,
    open: x,
    renderValue: R,
    SelectDisplayProps: k,
    variant: F = "outlined",
    ...d
  } = o, w = C ? Ql : tc, j = Kn(), A = Yn({
    props: o,
    muiFormControl: j,
    states: ["variant", "error"]
  }), V = A.variant || F, z = {
    ...o,
    variant: V,
    classes: s
  }, q = Bg(z), {
    root: _,
    ...Y
  } = q, K = g || {
    standard: /* @__PURE__ */ B.jsx(Vg, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ B.jsx(zg, {
      label: v,
      ownerState: z
    }),
    filled: /* @__PURE__ */ B.jsx(Wg, {
      ownerState: z
    })
  }[V], ie = rt(n, Ar(K));
  return /* @__PURE__ */ B.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(K, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: w,
      inputProps: {
        children: a,
        error: A.error,
        IconComponent: p,
        variant: V,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T,
        ...C ? {
          id: m
        } : {
          autoWidth: i,
          defaultOpen: c,
          displayEmpty: u,
          labelId: h,
          MenuProps: f,
          onClose: b,
          onOpen: O,
          open: x,
          renderValue: R,
          SelectDisplayProps: {
            id: m,
            ...k
          }
        },
        ...y,
        classes: y ? pt(Y, y.classes) : Y,
        ...g ? g.props.inputProps : {}
      },
      ...(T && C || u) && V === "outlined" ? {
        notched: !0
      } : {},
      ref: ie,
      className: ye(K.props.className, l, q.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!g && {
        variant: V
      },
      ...d
    })
  });
});
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: r.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: r.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: r.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: r.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: r.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: r.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: r.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: r.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: r.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: r.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: r.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: r.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: r.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: r.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: r.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: r.oneOfType([r.oneOf([""]), r.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
sa.muiName = "Select";
function Ug(e) {
  return ze("MuiTextField", e);
}
Ue("MuiTextField", ["root"]);
const Hg = {
  standard: Or,
  filled: Tr,
  outlined: Cr
}, qg = (e) => {
  const {
    classes: t
  } = e;
  return qe({
    root: ["root"]
  }, Ug, t);
}, Yg = fe(Bl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), nc = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const o = Ke({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: a = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: p = !1,
    error: m = !1,
    FormHelperTextProps: g,
    fullWidth: y = !1,
    helperText: v,
    id: h,
    InputLabelProps: f,
    inputProps: T,
    InputProps: C,
    inputRef: b,
    label: O,
    maxRows: x,
    minRows: R,
    multiline: k = !1,
    name: F,
    onBlur: d,
    onChange: w,
    onFocus: j,
    placeholder: A,
    required: V = !1,
    rows: z,
    select: q = !1,
    SelectProps: _,
    slots: Y = {},
    slotProps: K = {},
    type: ie,
    value: D,
    variant: W = "outlined",
    ...ae
  } = o, Z = {
    ...o,
    autoFocus: a,
    color: c,
    disabled: p,
    error: m,
    fullWidth: y,
    multiline: k,
    required: V,
    select: q,
    variant: W
  }, U = qg(Z);
  process.env.NODE_ENV !== "production" && q && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const X = Bi(h), oe = v && X ? `${X}-helper-text` : void 0, se = O && X ? `${X}-label` : void 0, G = Hg[W], re = {
    slots: Y,
    slotProps: {
      input: C,
      inputLabel: f,
      htmlInput: T,
      formHelperText: g,
      select: _,
      ...K
    }
  }, J = {}, ue = re.slotProps.inputLabel;
  W === "outlined" && (ue && typeof ue.shrink < "u" && (J.notched = ue.shrink), J.label = O), q && ((!_ || !_.native) && (J.id = void 0), J["aria-describedby"] = void 0);
  const [M, ge] = gt("input", {
    elementType: G,
    externalForwardedProps: re,
    additionalProps: J,
    ownerState: Z
  }), [I, pe] = gt("inputLabel", {
    elementType: Wl,
    externalForwardedProps: re,
    ownerState: Z
  }), [te, Fe] = gt("htmlInput", {
    elementType: "input",
    externalForwardedProps: re,
    ownerState: Z
  }), [he, Ce] = gt("formHelperText", {
    elementType: Vl,
    externalForwardedProps: re,
    ownerState: Z
  }), [Le, xe] = gt("select", {
    elementType: sa,
    externalForwardedProps: re,
    ownerState: Z
  }), Ge = /* @__PURE__ */ B.jsx(M, {
    "aria-describedby": oe,
    autoComplete: i,
    autoFocus: a,
    defaultValue: u,
    fullWidth: y,
    multiline: k,
    name: F,
    rows: z,
    maxRows: x,
    minRows: R,
    type: ie,
    value: D,
    id: X,
    inputRef: b,
    onBlur: d,
    onChange: w,
    onFocus: j,
    placeholder: A,
    inputProps: Fe,
    slots: {
      input: Y.htmlInput ? te : void 0
    },
    ...ge
  });
  return /* @__PURE__ */ B.jsxs(Yg, {
    className: ye(U.root, l),
    disabled: p,
    error: m,
    fullWidth: y,
    ref: n,
    required: V,
    color: c,
    variant: W,
    ownerState: Z,
    ...ae,
    children: [O != null && O !== "" && /* @__PURE__ */ B.jsx(I, {
      htmlFor: X,
      id: se,
      ...pe,
      children: O
    }), q ? /* @__PURE__ */ B.jsx(Le, {
      "aria-describedby": oe,
      id: X,
      labelId: se,
      value: D,
      input: Ge,
      ...xe,
      children: s
    }) : Ge, v && /* @__PURE__ */ B.jsx(he, {
      id: oe,
      ...Ce,
      children: v
    })]
  });
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: r.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: r.bool,
  /**
   * @ignore
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: r.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: r.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: r.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The helper text content.
   */
  helperText: r.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: r.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: r.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: r.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: r.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label content.
   */
  label: r.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: r.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: r.oneOfType([r.number, r.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: r.oneOfType([r.number, r.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: r.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: r.string,
  /**
   * @ignore
   */
  onBlur: r.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: r.func,
  /**
   * @ignore
   */
  onFocus: r.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: r.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: r.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: r.oneOfType([r.number, r.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: r.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: r.object,
  /**
   * The size of the component.
   */
  size: r.oneOfType([r.oneOf(["medium", "small"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    formHelperText: r.oneOfType([r.func, r.object]),
    htmlInput: r.oneOfType([r.func, r.object]),
    input: r.oneOfType([r.func, r.object]),
    inputLabel: r.oneOfType([r.func, r.object]),
    select: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    formHelperText: r.elementType,
    htmlInput: r.elementType,
    input: r.elementType,
    inputLabel: r.elementType,
    select: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: r.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: r.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: r.oneOf(["filled", "outlined", "standard"])
});
function Jg() {
  const [e, t] = Bo(!1), [n, o] = Bo([]), [i, a] = Bo(!1), s = async () => {
    try {
      a(!0);
      const c = await (await fetch("https://dummyjson.com/users")).json();
      o(c.users || []);
    } catch (l) {
      console.error(l.message), o([]);
    } finally {
      a(!1);
    }
  };
  return cc(() => {
    e && n.length === 0 && s();
  }, [e]), /* @__PURE__ */ B.jsx(
    jl,
    {
      open: e,
      fullWidth: !0,
      size: "small",
      onOpen: () => t(!0),
      onClose: () => t(!1),
      getOptionLabel: (l) => l.firstName,
      options: n,
      loading: i,
      renderInput: (l) => {
        var c;
        return /* @__PURE__ */ B.jsx(
          nc,
          {
            ...l,
            size: "small",
            label: "Select User",
            fullWidth: !0,
            slotProps: {
              input: {
                ...l.InputProps,
                endAdornment: /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
                  i ? /* @__PURE__ */ B.jsx(Fl, { color: "inherit", size: 20 }) : null,
                  (c = l.InputProps) == null ? void 0 : c.endAdornment
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
  Jg as default
};
