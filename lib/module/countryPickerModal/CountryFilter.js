"use strict";

import React from "react";
import { Platform, StyleSheet, TextInput } from "react-native";
import { useTheme } from "./CountryTheme.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = StyleSheet.create({
  input: {
    height: 48,
    width: "70%",
    ...Platform.select({
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
  } = useTheme();
  return /*#__PURE__*/_jsx(TextInput, {
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
export default CountryFilter;
//# sourceMappingURL=CountryFilter.js.map