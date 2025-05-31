"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CountryTheme = require("./CountryTheme.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const styles = _reactNative.StyleSheet.create({
  container: {
    height: 50,
    width: "12%",
    alignItems: "center",
    justifyContent: "center"
  },
  imageStyle: {
    height: 35,
    width: 35,
    resizeMode: "contain"
  }
});
const CloseButtonAndroid = props => {
  let closeImage = require("./assets/images/close.ios.png");
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, props.style],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableNativeFeedback, {
      onPress: props.onPress,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          tintColor: onBackgroundTextColor,
          source: closeImage,
          style: [styles.imageStyle, props.imageStyle]
        })
      })
    })
  });
};
const CloseButtonIOS = props => {
  let closeImage = require("./assets/images/close.ios.png");
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, props.style],
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      onPress: props.onPress,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: closeImage,
        style: [styles.imageStyle, props.imageStyle, {
          tintColor: onBackgroundTextColor
        }]
      })
    })
  });
};
var _default = exports.default = _reactNative.Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  default: CloseButtonIOS
});
//# sourceMappingURL=CloseButton.js.map