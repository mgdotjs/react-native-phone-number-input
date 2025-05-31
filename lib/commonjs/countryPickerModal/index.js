"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DARK_THEME: true,
  DEFAULT_THEME: true,
  CountryFilter: true,
  CountryList: true,
  CountryModal: true,
  CountryModalProvider: true,
  getAllCountries: true,
  getCallingCode: true,
  loadDataAsync: true,
  Flag: true,
  FlagButton: true,
  HeaderModal: true
};
Object.defineProperty(exports, "CountryFilter", {
  enumerable: true,
  get: function () {
    return _CountryFilter.default;
  }
});
Object.defineProperty(exports, "CountryList", {
  enumerable: true,
  get: function () {
    return _CountryList.default;
  }
});
Object.defineProperty(exports, "CountryModal", {
  enumerable: true,
  get: function () {
    return _CountryModal.default;
  }
});
Object.defineProperty(exports, "CountryModalProvider", {
  enumerable: true,
  get: function () {
    return _CountryModalProvider.default;
  }
});
Object.defineProperty(exports, "DARK_THEME", {
  enumerable: true,
  get: function () {
    return _CountryTheme.DARK_THEME;
  }
});
Object.defineProperty(exports, "DEFAULT_THEME", {
  enumerable: true,
  get: function () {
    return _CountryTheme.DEFAULT_THEME;
  }
});
Object.defineProperty(exports, "Flag", {
  enumerable: true,
  get: function () {
    return _Flag.Flag;
  }
});
Object.defineProperty(exports, "FlagButton", {
  enumerable: true,
  get: function () {
    return _FlagButton.FlagButton;
  }
});
Object.defineProperty(exports, "HeaderModal", {
  enumerable: true,
  get: function () {
    return _HeaderModal.HeaderModal;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getAllCountries", {
  enumerable: true,
  get: function () {
    return _CountryService.getCountriesAsync;
  }
});
Object.defineProperty(exports, "getCallingCode", {
  enumerable: true,
  get: function () {
    return _CountryService.getCountryCallingCodeAsync;
  }
});
Object.defineProperty(exports, "loadDataAsync", {
  enumerable: true,
  get: function () {
    return _CountryService.loadDataAsync;
  }
});
var _CountryContext = require("./CountryContext.js");
var _CountryPicker = _interopRequireDefault(require("./CountryPicker.js"));
var _CountryTheme = require("./CountryTheme.js");
var _jsxRuntime = require("react/jsx-runtime");
var _CountryFilter = _interopRequireDefault(require("./CountryFilter.js"));
var _CountryList = _interopRequireDefault(require("./CountryList.js"));
var _CountryModal = _interopRequireDefault(require("./CountryModal.js"));
var _CountryModalProvider = _interopRequireDefault(require("./CountryModalProvider.js"));
var _CountryService = require("./CountryService.js");
var _Flag = require("./Flag.js");
var _FlagButton = require("./FlagButton.js");
var _HeaderModal = require("./HeaderModal.js");
var _types = require("./types.js");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Main = ({
  onSelect = () => {},
  withEmoji = true,
  theme,
  translation,
  ...props
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryTheme.ThemeProvider, {
    theme: {
      ..._CountryTheme.DEFAULT_THEME,
      ...theme
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryContext.CountryProvider, {
      value: {
        ..._CountryContext.DEFAULT_COUNTRY_CONTEXT,
        translation
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryPicker.default, {
        onSelect: onSelect,
        withEmoji: withEmoji,
        ...props
      })
    })
  });
};
var _default = exports.default = Main;
//# sourceMappingURL=index.js.map