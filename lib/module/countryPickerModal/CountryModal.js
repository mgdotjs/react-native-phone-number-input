"use strict";

import * as React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import AnimatedModal from "./AnimatedModal.js";
import { CountryModalContext } from "./CountryModalProvider.js";
import { useTheme } from "./CountryTheme.js";
import { Modal } from "./Modal";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const CountryModal = ({
  animationType = "slide",
  withModal = true,
  disableNativeModal = false,
  children,
  ...props
}) => {
  const {
    backgroundColor
  } = useTheme();
  const {
    teleport
  } = React.useContext(CountryModalContext);
  const content = /*#__PURE__*/_jsx(SafeAreaView, {
    style: [styles.container, {
      backgroundColor
    }],
    children: children
  });
  React.useEffect(() => {
    if (disableNativeModal) {
      teleport(/*#__PURE__*/_jsx(AnimatedModal, {
        ...props,
        children: content
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableNativeModal]);
  if (withModal) {
    if (Platform.OS === "web") {
      return /*#__PURE__*/_jsx(Modal, {
        animationType: animationType,
        ...props,
        children: content
      });
    }
    if (disableNativeModal) {
      return null;
    }
    return /*#__PURE__*/_jsx(Modal, {
      animationType: animationType,
      ...props,
      children: content
    });
  }
  return content;
};
export default CountryModal;
//# sourceMappingURL=CountryModal.js.map