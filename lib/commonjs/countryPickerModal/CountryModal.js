"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _AnimatedModal = _interopRequireDefault(require("./AnimatedModal.js"));
var _CountryModalProvider = require("./CountryModalProvider.js");
var _CountryTheme = require("./CountryTheme.js");
var _Modal = require("./Modal");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
const CountryModal = ({
  animationType = "slide",
  withModal = true,
  disableNativeModal = false,
  children,
  ...props
}) => {
  const {
    backgroundColor
  } = (0, _CountryTheme.useTheme)();
  const {
    teleport
  } = React.useContext(_CountryModalProvider.CountryModalContext);
  const content = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
    style: [styles.container, {
      backgroundColor
    }],
    children: children
  });
  React.useEffect(() => {
    if (disableNativeModal) {
      teleport(/*#__PURE__*/(0, _jsxRuntime.jsx)(_AnimatedModal.default, {
        ...props,
        children: content
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableNativeModal]);
  if (withModal) {
    if (_reactNative.Platform.OS === "web") {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.Modal, {
        animationType: animationType,
        ...props,
        children: content
      });
    }
    if (disableNativeModal) {
      return null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.Modal, {
      animationType: animationType,
      ...props,
      children: content
    });
  }
  return content;
};
var _default = exports.default = CountryModal;
//# sourceMappingURL=CountryModal.js.map