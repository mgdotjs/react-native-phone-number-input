"use strict";

import { StyleSheet, View } from "react-native";
import CloseButton from "./CloseButton.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export const HeaderModal = ({
  withFilter,
  withCloseButton = true,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  onClose,
  renderFilter
}) => {
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [withCloseButton && /*#__PURE__*/_jsx(CloseButton, {
      image: closeButtonImage,
      style: closeButtonStyle,
      imageStyle: closeButtonImageStyle,
      onPress: () => onClose()
    }), withFilter && renderFilter({
      withFilter,
      withCloseButton,
      closeButtonImage,
      closeButtonStyle,
      closeButtonImageStyle,
      onClose,
      renderFilter
    })]
  });
};
//# sourceMappingURL=HeaderModal.js.map