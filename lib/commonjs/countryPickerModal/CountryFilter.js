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
  input: {
    height: 48,
    width: "70%",
    ..._reactNative.Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: "transparent",
        outlineOffset: 0
      }
    })
  }
});
const CountryFilter = ({
  autoFocus = false,
  placeholder = "Enter country name",
  ...props
}) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
    testID: "text-input-country-filter",
    autoCorrect: false,
    placeholderTextColor: filterPlaceholderTextColor,
    style: [styles.input, {
      fontFamily,
      fontSize,
      color: onBackgroundTextColor
    }],
    placeholder: placeholder,
    autoFocus: autoFocus,
    ...props
  });
};
var _default = exports.default = CountryFilter;
//# sourceMappingURL=CountryFilter.js.map