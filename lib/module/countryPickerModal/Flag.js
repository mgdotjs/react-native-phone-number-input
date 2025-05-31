"use strict";

import { memo } from "react";
import { useAsync } from "react-async-hook";
import { ActivityIndicator, Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import { useContext } from "./CountryContext.js";
import { Emoji } from "./Emoji.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    marginRight: 10
  },
  emojiFlag: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1 / PixelRatio.get(),
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  imageFlag: {
    resizeMode: "contain",
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    opacity: 0.8
  }
});
const ImageFlag = /*#__PURE__*/memo(({
  countryCode,
  flagSize
}) => {
  const {
    getImageFlagAsync
  } = useContext();
  const asyncResult = useAsync(getImageFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return /*#__PURE__*/_jsx(ActivityIndicator, {
      size: "small"
    });
  }
  return /*#__PURE__*/_jsx(Image, {
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
const EmojiFlag = /*#__PURE__*/memo(({
  countryCode,
  flagSize
}) => {
  const {
    getEmojiFlagAsync
  } = useContext();
  const asyncResult = useAsync(getEmojiFlagAsync, [countryCode]);
  if (asyncResult.loading) {
    return /*#__PURE__*/_jsx(ActivityIndicator, {
      size: "small"
    });
  }
  return /*#__PURE__*/_jsx(Text, {
    style: [styles.emojiFlag, {
      fontSize: flagSize
    }],
    allowFontScaling: false,
    children: /*#__PURE__*/_jsx(Emoji, {
      name: asyncResult.result
    })
  });
});
export const Flag = ({
  countryCode,
  withEmoji = true,
  withFlagButton = true,
  flagSize
}) => withFlagButton ? /*#__PURE__*/_jsx(View, {
  style: styles.container,
  children: withEmoji ? /*#__PURE__*/_jsx(EmojiFlag, {
    countryCode,
    flagSize
  }) : /*#__PURE__*/_jsx(ImageFlag, {
    countryCode,
    flagSize
  })
}) : null;
//# sourceMappingURL=Flag.js.map