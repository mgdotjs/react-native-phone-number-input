"use strict";

import { Text } from "react-native";
import { useTheme } from "./CountryTheme.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const CountryText = props => {
  const {
    fontFamily,
    fontSize,
    onBackgroundTextColor
  } = useTheme();
  return /*#__PURE__*/_jsx(Text, {
    ...props,
    style: {
      fontFamily,
      fontSize,
      color: onBackgroundTextColor
    }
  });
};
//# sourceMappingURL=CountryText.js.map