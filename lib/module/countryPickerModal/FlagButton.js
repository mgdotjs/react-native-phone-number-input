"use strict";

import { memo, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useContext } from "./CountryContext.js";
import { CountryText } from "./CountryText.js";
import { useTheme } from "./CountryTheme.js";
import { Flag } from "./Flag.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = StyleSheet.create({
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
const FlagText = props => /*#__PURE__*/_jsx(CountryText, {
  ...props,
  style: styles.something
});
const FlagWithSomething = /*#__PURE__*/memo(({
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
  } = useContext();
  const [state, setState] = useState({
    countryName: "",
    currency: "",
    callingCode: ""
  });
  const {
    countryName,
    currency,
    callingCode
  } = state;
  useEffect(() => {
    if (countryCode) {
      getCountryInfoAsync({
        countryCode,
        translation
      }).then(setState).catch(console.warn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode, withCountryNameButton, withCurrencyButton, withCallingCodeButton]);
  return /*#__PURE__*/_jsxs(View, {
    style: styles.flagWithSomethingContainer,
    children: [countryCode ? /*#__PURE__*/_jsx(Flag, {
      withEmoji,
      countryCode,
      withFlagButton,
      flagSize
    }) : /*#__PURE__*/_jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: placeholder
    }), withCountryNameButton && countryName ? /*#__PURE__*/_jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: countryName + " "
    }) : null, withCurrencyButton && currency ? /*#__PURE__*/_jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `(${currency}) `
    }) : null, withCallingCodeButton && callingCode ? /*#__PURE__*/_jsx(FlagText, {
      allowFontScaling: allowFontScaling,
      children: `+${callingCode}`
    }) : null]
  });
});
export const FlagButton = ({
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
  } = useTheme();
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    activeOpacity: 0.7,
    onPress: onOpen,
    children: /*#__PURE__*/_jsx(View, {
      style: [styles.container, withEmoji ? styles.containerWithEmoji : styles.containerWithoutEmoji, containerButtonStyle],
      children: /*#__PURE__*/_jsx(FlagWithSomething, {
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
FlagButton.defaultProps = {
  withEmoji: true,
  withCountryNameButton: false,
  withCallingCodeButton: false,
  withCurrencyButton: false,
  withFlagButton: true
};
//# sourceMappingURL=FlagButton.js.map