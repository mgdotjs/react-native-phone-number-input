"use strict";

import React from "react";
import { Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { useTheme } from "./CountryTheme.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "12%",
    alignItems: "center",
    justifyContent: "center"
  },
  imageStyle: {
    height: 35,
    width: 35,
    resizeMode: "contain"
  }
});
const CloseButtonAndroid = props => {
  let closeImage = require("./assets/images/close.ios.png");
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = useTheme();
  return /*#__PURE__*/_jsx(View, {
    style: [styles.container, props.style],
    children: /*#__PURE__*/_jsx(TouchableNativeFeedback, {
      onPress: props.onPress,
      children: /*#__PURE__*/_jsx(View, {
        children: /*#__PURE__*/_jsx(Image, {
          tintColor: onBackgroundTextColor,
          source: closeImage,
          style: [styles.imageStyle, props.imageStyle]
        })
      })
    })
  });
};
const CloseButtonIOS = props => {
  let closeImage = require("./assets/images/close.ios.png");
  if (props.image) {
    closeImage = props.image;
  }
  const {
    onBackgroundTextColor
  } = useTheme();
  return /*#__PURE__*/_jsx(View, {
    style: [styles.container, props.style],
    children: /*#__PURE__*/_jsx(TouchableOpacity, {
      onPress: props.onPress,
      children: /*#__PURE__*/_jsx(Image, {
        source: closeImage,
        style: [styles.imageStyle, props.imageStyle, {
          tintColor: onBackgroundTextColor
        }]
      })
    })
  });
};
export default Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  default: CloseButtonIOS
});
//# sourceMappingURL=CloseButton.js.map