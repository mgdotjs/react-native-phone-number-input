"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CountryContext = require("./CountryContext.js");
var _CountryFilter = _interopRequireDefault(require("./CountryFilter.js"));
var _CountryList = _interopRequireDefault(require("./CountryList.js"));
var _CountryModal = _interopRequireDefault(require("./CountryModal.js"));
var _FlagButton = require("./FlagButton.js");
var _HeaderModal = require("./HeaderModal.js");
var _types = require("./types.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const renderFlagButton = props => props.renderFlagButton ? props.renderFlagButton(props) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlagButton.FlagButton, {
  ...props
});
const renderFilter = props => props.renderCountryFilter ? props.renderCountryFilter(props) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryFilter.default, {
  ...props
});
const CountryPicker = ({
  allowFontScaling = true,
  countryCode,
  region,
  subregion,
  countryCodes,
  renderFlagButton: renderButton,
  renderCountryFilter,
  filterProps,
  modalProps,
  flatListProps,
  onSelect,
  withEmoji,
  withFilter,
  withCloseButton,
  withCountryNameButton,
  withCallingCodeButton,
  withCurrencyButton,
  containerButtonStyle,
  withAlphaFilter = false,
  withCallingCode = false,
  withCurrency,
  withFlag,
  withModal = true,
  disableNativeModal,
  withFlagButton,
  onClose: handleClose,
  onOpen: handleOpen,
  closeButtonImage,
  closeButtonStyle,
  closeButtonImageStyle,
  excludeCountries,
  placeholder = "Select Country",
  preferredCountries,
  ...props
}) => {
  const [state, setState] = (0, _react.useState)({
    visible: props.visible || false,
    countries: [],
    filter: "",
    filterFocus: false
  });
  const {
    translation,
    getCountriesAsync
  } = (0, _CountryContext.useContext)();
  const {
    visible,
    filter,
    countries,
    filterFocus
  } = state;
  (0, _react.useEffect)(() => {
    if (state.visible !== props.visible) {
      setState({
        ...state,
        visible: props.visible || false
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);
  const onOpen = () => {
    setState({
      ...state,
      visible: true
    });
    if (handleOpen) {
      handleOpen();
    }
  };
  const onClose = () => {
    setState({
      ...state,
      filter: "",
      visible: false
    });
    if (handleClose) {
      handleClose();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const setFilter = filter => setState({
    ...state,
    filter
  });
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const setCountries = countries => setState({
    ...state,
    countries
  });
  const onSelectClose = country => {
    onSelect?.(country);
    onClose();
  };
  const onFocus = () => setState({
    ...state,
    filterFocus: true
  });
  const onBlur = () => setState({
    ...state,
    filterFocus: false
  });
  const flagProp = {
    allowFontScaling,
    countryCode,
    withEmoji,
    withCountryNameButton,
    withCallingCodeButton,
    withCurrencyButton,
    withFlagButton,
    renderFlagButton: renderButton,
    onOpen,
    containerButtonStyle,
    placeholder: placeholder || "Select Country"
  };
  (0, _react.useEffect)(() => {
    let cancel = false;
    getCountriesAsync(withEmoji ? _types.FlagType.EMOJI : _types.FlagType.FLAT, translation, region, subregion, countryCodes, excludeCountries, preferredCountries, withAlphaFilter)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then(countries => cancel ? null : setCountries(countries)).catch(console.warn);
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translation, withEmoji]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [withModal && renderFlagButton(flagProp), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CountryModal.default, {
      visible,
      withModal,
      disableNativeModal,
      ...modalProps,
      onRequestClose: onClose,
      onDismiss: onClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderModal.HeaderModal, {
        withFilter,
        onClose,
        closeButtonImage,
        closeButtonImageStyle,
        closeButtonStyle,
        withCloseButton,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        renderFilter: props => renderFilter({
          ...props,
          allowFontScaling,
          renderCountryFilter,
          onChangeText: setFilter,
          value: filter,
          onFocus,
          onBlur,
          ...filterProps
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryList.default, {
        onSelect: onSelectClose,
        data: countries,
        letters: [],
        withAlphaFilter: withAlphaFilter && filter === "",
        withCallingCode,
        withCurrency,
        withFlag,
        withEmoji,
        filter,
        filterFocus,
        flatListProps
      })]
    })]
  });
};
var _default = exports.default = CountryPicker;
//# sourceMappingURL=CountryPicker.js.map