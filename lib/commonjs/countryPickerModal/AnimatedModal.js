"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  height
} = _reactNative.Dimensions.get("window");
const duration = 300;
const useNativeDriver = true;
const styles = _reactNative.StyleSheet.create({
  absolute: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    zIndex: 99,
    elevation: 99
  }
});
const AnimatedModal = ({
  children,
  visible = false
}) => {
  const translateY = new _reactNative.Animated.Value(height);
  const showModal = _reactNative.Animated.timing(translateY, {
    toValue: 0,
    duration,
    useNativeDriver
  }).start;
  const hideModal = _reactNative.Animated.timing(translateY, {
    toValue: height,
    duration,
    useNativeDriver
  }).start;
  React.useEffect(() => {
    if (visible) {
      showModal();
    } else {
      hideModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
    style: [styles.absolute, {
      transform: [{
        translateY
      }]
    }],
    children: children
  });
};
var _default = exports.default = AnimatedModal;
//# sourceMappingURL=AnimatedModal.js.map