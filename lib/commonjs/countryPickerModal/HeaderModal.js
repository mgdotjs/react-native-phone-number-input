"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderModal = void 0;
var _reactNative = require("react-native");
var _CloseButton = _interopRequireDefault(require("./CloseButton.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
const HeaderModal = ({
  withFilter,
  withCloseButton = true,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  onClose,
  renderFilter
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [withCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseButton.default, {
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
exports.HeaderModal = HeaderModal;
//# sourceMappingURL=HeaderModal.js.map