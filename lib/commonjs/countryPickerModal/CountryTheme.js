"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.DEFAULT_THEME = exports.DARK_THEME = void 0;
var _reactThemeProvider = require("@callstack/react-theme-provider");
var _reactNative = require("react-native");
var _ratio = require("./ratio.js");
const DEFAULT_THEME = exports.DEFAULT_THEME = {
  primaryColor: "#ccc",
  primaryColorVariant: "#eee",
  backgroundColor: "#ffffff",
  onBackgroundTextColor: "#000000",
  fontSize: 16,
  fontFamily: _reactNative.Platform.select({
    ios: "System",
    android: "Roboto",
    web: "Arial"
  }),
  filterPlaceholderTextColor: "#aaa",
  activeOpacity: 0.5,
  itemHeight: (0, _ratio.getHeightPercent)(7),
  flagSize: _reactNative.Platform.select({
    android: 20,
    default: 30
  }),
  flagSizeButton: _reactNative.Platform.select({
    android: 20,
    default: 30
  })
};
const DARK_THEME = exports.DARK_THEME = {
  ...DEFAULT_THEME,
  primaryColor: "#222",
  primaryColorVariant: "#444",
  backgroundColor: "#000",
  onBackgroundTextColor: "#fff"
};
const {
  ThemeProvider,
  useTheme
} = (0, _reactThemeProvider.createTheming)(DEFAULT_THEME);
exports.useTheme = useTheme;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=CountryTheme.js.map