"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _googleLibphonenumber = require("google-libphonenumber");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _index = _interopRequireWildcard(require("./countryPickerModal/index.js"));
var _styles = _interopRequireDefault(require("./styles.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const dropDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==";
const phoneUtil = _googleLibphonenumber.PhoneNumberUtil.getInstance();
const PhoneInput = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const getCountryCodeByCallingCode = _react.default.useCallback(async callingCode => {
    const countries = await (0, _index.loadDataAsync)();
    if (!countries) return "US";
    const countryEntry = Object.entries(countries).find(([_, country]) => country.callingCode[0] === callingCode);
    return countryEntry ? countryEntry[0] : "US";
  }, []);
  const [code, setCode] = _react.default.useState(props.defaultCallingCode || (props.defaultCode ? undefined : "91"));
  const [number, setNumber] = _react.default.useState(undefined);
  const [modalVisible, setModalVisible] = _react.default.useState(false);
  const [countryCode, setCountryCode] = _react.default.useState(props.defaultCode || "IN");
  const [disabled, setDisabled] = _react.default.useState(props.disabled || false);
  _react.default.useEffect(() => {
    const setupDefaultCallingCode = async () => {
      if (props.defaultCallingCode) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const countryCode = await getCountryCodeByCallingCode(props.defaultCallingCode);
        setCountryCode(countryCode);
        setCode(props.defaultCallingCode);
      }
    };
    setupDefaultCallingCode();
  }, [props.defaultCallingCode, getCountryCodeByCallingCode]);
  _react.default.useEffect(() => {
    const loadDefaultCode = async () => {
      if (props.defaultCode) {
        const callingCode = await (0, _index.getCallingCode)(props.defaultCode);
        setCode(callingCode);
      }
    };
    loadDefaultCode();
  }, [props.defaultCode]);
  _react.default.useEffect(() => {
    if (props.disabled !== disabled) {
      setDisabled(props.disabled || false);
    }
  }, [disabled, props.disabled]);
  const onSelect = _react.default.useCallback(country => {
    setCountryCode(country.cca2);
    setCode(country.callingCode[0]);
    if (props.onChangeFormattedText) {
      if (country.callingCode[0]) {
        props.onChangeFormattedText(`+${country.callingCode[0]}${number}`);
      } else {
        props.onChangeFormattedText(number || "");
      }
    }
    if (props.onChangeCountry) {
      props.onChangeCountry(country);
    }
  }, [number, props]);
  const onChangeText = _react.default.useCallback(text => {
    setNumber(text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
    if (props.onChangeFormattedText) {
      if (code) {
        props.onChangeFormattedText(text.length > 0 ? `+${code}${text}` : text);
      } else {
        props.onChangeFormattedText(text);
      }
    }
  }, [code, props]);
  const renderDefaultDropdownImage = _react.default.useMemo(() => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
      source: {
        uri: dropDown
      },
      resizeMode: "contain",
      style: _styles.default.dropDownImage
    });
  }, []);
  const renderFlagButton = _react.default.useCallback(() => {
    const {
      layout = "first",
      flagSize
    } = props;
    if (layout === "first") {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Flag, {
        countryCode: countryCode,
        flagSize: flagSize || _index.DEFAULT_THEME.flagSize
      });
    }
    return null;
  }, [countryCode, props]);
  _react.default.useImperativeHandle(ref, () => ({
    getCountryCode: () => countryCode,
    getCallingCode: () => code,
    isValidNumber: phoneNumber => {
      try {
        const parsedNumber = phoneUtil.parse(phoneNumber, countryCode);
        return phoneUtil.isValidNumber(parsedNumber);
      } catch (err) {
        return false;
      }
    },
    getNumberAfterPossiblyEliminatingZero: () => {
      let currentNumber = number;
      if (currentNumber && currentNumber.length > 0 && currentNumber.startsWith("0")) {
        currentNumber = currentNumber.slice(1);
      }
      return {
        number: currentNumber,
        formattedNumber: code ? `+${code}${currentNumber}` : currentNumber
      };
    }
  }));
  const {
    withShadow,
    withDarkTheme,
    codeTextStyle,
    textInputProps,
    textInputStyle,
    autoFocus,
    placeholder,
    disableArrowIcon,
    flagButtonStyle,
    containerStyle,
    textContainerStyle,
    renderDropdownImage = renderDefaultDropdownImage,
    countryPickerProps = {
      theme: withDarkTheme ? _index.DARK_THEME : _index.DEFAULT_THEME
    },
    filterProps = {},
    countryPickerButtonStyle,
    layout = "first",
    onBlur,
    onFocus,
    showCountryCode = true
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.CountryModalProvider, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [_styles.default.container, withShadow && _styles.default.shadow, containerStyle],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
        style: [_styles.default.flagButtonView, layout === "second" && _styles.default.flagButtonExtraWidth, flagButtonStyle, countryPickerButtonStyle],
        disabled: disabled,
        onPress: () => setModalVisible(true),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, {
          onSelect: onSelect,
          withEmoji: true,
          withFilter: true,
          withFlag: true,
          filterProps: filterProps,
          countryCode: countryCode,
          withCallingCode: true,
          visible: modalVisible,
          renderFlagButton: renderFlagButton,
          onClose: () => setModalVisible(false),
          ...countryPickerProps
        }), showCountryCode && code && layout === "second" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [_styles.default.codeText, codeTextStyle],
          children: `+${code}`
        }), !disableArrowIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
          children: renderDropdownImage
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [_styles.default.textContainer, textContainerStyle],
        children: [showCountryCode && code && layout === "first" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [_styles.default.codeText, codeTextStyle],
          children: `+${code}`
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
          style: [_styles.default.numberText, textInputStyle],
          placeholder: placeholder,
          onChangeText: onChangeText,
          value: number || props.value || props.defaultValue || "",
          editable: !disabled,
          selectionColor: "black",
          keyboardAppearance: withDarkTheme ? "dark" : "default",
          keyboardType: "number-pad",
          autoFocus: autoFocus,
          onBlur: onBlur,
          onFocus: onFocus,
          ...textInputProps
        })]
      })]
    })
  });
});
var _default = exports.default = PhoneInput;
//# sourceMappingURL=index.js.map