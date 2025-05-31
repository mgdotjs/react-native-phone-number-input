"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlagButton = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _CountryContext = require("./CountryContext.js");
var _CountryText = require("./CountryText.js");
var _CountryTheme = require("./CountryTheme.js");
var _Flag = require("./Flag.js");
var _jsxRuntime = require("react/jsx-runtime");
const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  containerWithEmoji: {
    marginTop: 0
  },
  containerWithoutEmoji: {
    marginTop: 5
  },
  flagWithSomethingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  something: {
    fontSize: 16
  }
});
const FlagText = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryText.CountryText, {
  ...props,
  style: styles.something
});
const FlagWithSomething = /*#__PURE__*/(0, _react.memo)(({
  allowFontScaling,
  countryCode,
  withEmoji,
  withCountryNameButton,
  withCurrencyButton,
  withCallingCodeButton,
  withFlagButton,
  flagSize,
  placeholder
}) => {
  const {
    translation,
    getCountryInfoAsync
  } = (0, _CountryContext.useContext)();
  const [state, setState] = (0, _react.useState)({
    countryName: "",
    currency: "",
    callingCode: ""
  });
  const {
    countryName,
    currency,
    callingCode
  } = state;
  (0, _react.useEffect)(() => {
    if (countryCode) {
      getCountryInfoAsync({
        countryCode,
        translation
      }).then(setState).catch(console.warn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode, withCountryNameButton, withCurrencyButton, withCallingCodeButton]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.flagWithSomethingContainer,
    children: [countryCode ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Flag.Flag, {
      withEmoji,
      countryCode,
      withFlagButton,
      flagSize
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(FlagText, {
      allowFontScaling: allowFontScaling,
      children: placeholder
    }), withCountryNameButton && countryName ? /*#__PURE__*/(0, _jsxRuntime.jsx)(FlagText, {
      allowFontScaling: allowFontScaling,
      children: countryName + " "
    }) : null, withCurrencyButton && currency ? /*#__PURE__*/(0, _jsxRuntime.jsx)(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `(${currency}) `
    }) : null, withCallingCodeButton && callingCode ? /*#__PURE__*/(0, _jsxRuntime.jsx)(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `+${callingCode}`
    }) : null]
  });
});
const FlagButton = ({
  allowFontScaling,
  withEmoji,
  withCountryNameButton,
  withCallingCodeButton,
  withCurrencyButton,
  withFlagButton,
  countryCode,
  containerButtonStyle,
  onOpen,
  placeholder
}) => {
  const {
    flagSizeButton: flagSize
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    activeOpacity: 0.7,
    onPress: onOpen,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.container, withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji, containerButtonStyle],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FlagWithSomething, {
        allowFontScaling,
        countryCode,
        withEmoji,
        withCountryNameButton,
        withCallingCodeButton,
        withCurrencyButton,
        withFlagButton,
        flagSize: flagSize,
        placeholder
      })
    })
  });
};
exports.FlagButton = FlagButton;
FlagButton.defaultProps = {
  withEmoji: true,
  withCountryNameButton: false,
  withCallingCodeButton: false,
  withCurrencyButton: false,
  withFlagButton: true
};
//# sourceMappingURL=FlagButton.js.map