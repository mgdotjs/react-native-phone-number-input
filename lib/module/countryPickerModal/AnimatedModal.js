"use strict";

import * as React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
const {
  height
} = Dimensions.get("window");
const duration = 300;
const useNativeDriver = true;
const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
    elevation: 99
  }
});
const AnimatedModal = ({
  children,
  visible = false
}) => {
  const translateY = new Animated.Value(height);
  const showModal = Animated.timing(translateY, {
    toValue: 0,
    duration,
    useNativeDriver
  }).start;
  const hideModal = Animated.timing(translateY, {
    toValue: height,
    duration,
    useNativeDriver
  }).start;
  React.useEffect(() => {
    if (visible) {
      showModal();
    } else {
      hideModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [styles.absolute, {
      transform: [{
        translateY
      }]
    }],
    children: children
  });
};
export default AnimatedModal;
//# sourceMappingURL=AnimatedModal.js.map