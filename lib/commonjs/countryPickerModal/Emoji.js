"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emoji = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
const Emoji = exports.Emoji = /*#__PURE__*/(0, _react.memo)(({
  name
}) => {
  const countryCode = name.replace("flag-", "").toUpperCase();
  const emoji = countryCode.split("").map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join("");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    allowFontScaling: false,
    children: emoji
  });
});
//# sourceMappingURL=Emoji.js.map