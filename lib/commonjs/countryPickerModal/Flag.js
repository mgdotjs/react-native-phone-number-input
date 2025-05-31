"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flag = void 0;
var _react = require("react");
var _reactAsyncHook = require("react-async-hook");
var _reactNative = require("react-native");
var _CountryContext = require("./CountryContext.js");
var _Emoji = require("./Emoji.js");
var _jsxRuntime = require("react/jsx-runtime");
const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    marginRight: 10
  },
  emojiFlag: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1 / _reactNative.PixelRatio.get(),
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  imageFlag: {
    resizeMode: "contain",
    width: 25,
    height: 19,
    borderWidth: 1 / _reactNative.PixelRatio.get(),
    opacity: 0.8
  }
});
const ImageFlag = /*#__PURE__*/(0, _react.memo)(({
  countryCode,
  flagSize
}) => {
  const {
    getImageFlagAsync
  } = (0, _CountryContext.useContext)();
  const asyncResult = (0, _reactAsyncHook.useAsync)(getImageFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      size: "small"
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
    resizeMode: "contain",
    style: [styles.imageFlag,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      borderColor: "transparent",
      height: flagSize
    }],
    source: {
      uri: asyncResult.result
    }
  });
});
const EmojiFlag = /*#__PURE__*/(0, _react.memo)(({
  countryCode,
  flagSize
}) => {
  const {
    getEmojiFlagAsync
  } = (0, _CountryContext.useContext)();
  const asyncResult = (0, _reactAsyncHook.useAsync)(getEmojiFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      size: "small"
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
    style: [styles.emojiFlag, {
      fontSize: flagSize
    }],
    allowFontScaling: false,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Emoji.Emoji, {
      name: asyncResult.result
    })
  });
});
const Flag = ({
  countryCode,
  withEmoji = true,
  withFlagButton = true,
  flagSize
}) => withFlagButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
  style: styles.container,
  children: withEmoji ? /*#__PURE__*/(0, _jsxRuntime.jsx)(EmojiFlag, {
    countryCode,
    flagSize
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(ImageFlag, {
    countryCode,
    flagSize
  })
}) : null;
exports.Flag = Flag;
//# sourceMappingURL=Flag.js.map