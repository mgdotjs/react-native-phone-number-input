"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountryText = void 0;
var _reactNative = require("react-native");
var _CountryTheme = require("./CountryTheme.js");
var _jsxRuntime = require("react/jsx-runtime");
const CountryText = props => {
  const {
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    ...props,
    style: {
      fontFamily,
      fontSize,
      color: onBackgroundTextColor
    }
  });
};
exports.CountryText = CountryText;
//# sourceMappingURL=CountryText.js.map