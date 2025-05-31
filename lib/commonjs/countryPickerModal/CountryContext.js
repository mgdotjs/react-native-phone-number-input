"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContext = exports.DEFAULT_COUNTRY_CONTEXT = exports.CountryProvider = exports.CountryContext = exports.CountryConsumer = void 0;
var React = _interopRequireWildcard(require("react"));
var _CountryService = require("./CountryService.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DEFAULT_COUNTRY_CONTEXT = exports.DEFAULT_COUNTRY_CONTEXT = {
  translation: "common",
  getCountryNameAsync: _CountryService.getCountryNameAsync,
  getImageFlagAsync: _CountryService.getImageFlagAsync,
  getEmojiFlagAsync: _CountryService.getEmojiFlagAsync,
  getCountriesAsync: _CountryService.getCountriesAsync,
  getCountryCallingCodeAsync: _CountryService.getCountryCallingCodeAsync,
  getCountryCurrencyAsync: _CountryService.getCountryCurrencyAsync,
  search: _CountryService.search,
  getLetters: _CountryService.getLetters,
  getCountryInfoAsync: _CountryService.getCountryInfoAsync
};
const CountryContext = exports.CountryContext = /*#__PURE__*/React.createContext(DEFAULT_COUNTRY_CONTEXT);
const useContext = () => React.useContext(CountryContext);
exports.useContext = useContext;
const {
  Provider: CountryProvider,
  Consumer: CountryConsumer
} = CountryContext;
exports.CountryConsumer = CountryConsumer;
exports.CountryProvider = CountryProvider;
//# sourceMappingURL=CountryContext.js.map