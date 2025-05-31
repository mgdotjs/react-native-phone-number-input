"use strict";

import * as React from "react";
import { StyleSheet, View } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  fullWidth: {
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 50
  }
});
export const Row = props => /*#__PURE__*/_jsx(View, {
  ...props,
  style: [styles.row, props.style, props.fullWidth && styles.fullWidth]
});
//# sourceMappingURL=Row.js.map