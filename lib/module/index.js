"use strict";

import { PhoneNumberUtil } from "google-libphonenumber";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CountryPicker, { CountryModalProvider, DARK_THEME, DEFAULT_THEME, Flag, getCallingCode, loadDataAsync } from "./countryPickerModal/index.js";
import styles from "./styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const dropDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==";
const phoneUtil = PhoneNumberUtil.getInstance();
const PhoneInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const getCountryCodeByCallingCode = React.useCallback(async callingCode => {
    const countries = await loadDataAsync();
    if (!countries) return "US";
    const countryEntry = Object.entries(countries).find(([_, country]) => country.callingCode[0] === callingCode);
    return countryEntry ? countryEntry[0] : "US";
  }, []);
  const [code, setCode] = React.useState(props.defaultCallingCode || (props.defaultCode ? undefined : "91"));
  const [number, setNumber] = React.useState(undefined);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState(props.defaultCode || "IN");
  const [disabled, setDisabled] = React.useState(props.disabled || false);
  React.useEffect(() => {
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
  React.useEffect(() => {
    const loadDefaultCode = async () => {
      if (props.defaultCode) {
        const callingCode = await getCallingCode(props.defaultCode);
        setCode(callingCode);
      }
    };
    loadDefaultCode();
  }, [props.defaultCode]);
  React.useEffect(() => {
    if (props.disabled !== disabled) {
      setDisabled(props.disabled || false);
    }
  }, [disabled, props.disabled]);
  const onSelect = React.useCallback(country => {
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
  const onChangeText = React.useCallback(text => {
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
  const renderDefaultDropdownImage = React.useMemo(() => {
    return /*#__PURE__*/_jsx(Image, {
      source: {
        uri: dropDown
      },
      resizeMode: "contain",
      style: styles.dropDownImage
    });
  }, []);
  const renderFlagButton = React.useCallback(() => {
    const {
      layout = "first",
      flagSize
    } = props;
    if (layout === "first") {
      return /*#__PURE__*/_jsx(Flag, {
        countryCode: countryCode,
        flagSize: flagSize || DEFAULT_THEME.flagSize
      });
    }
    return null;
  }, [countryCode, props]);
  React.useImperativeHandle(ref, () => ({
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
      theme: withDarkTheme ? DARK_THEME : DEFAULT_THEME
    },
    filterProps = {},
    countryPickerButtonStyle,
    layout = "first",
    onBlur,
    onFocus,
    showCountryCode = true
  } = props;
  return /*#__PURE__*/_jsx(CountryModalProvider, {
    children: /*#__PURE__*/_jsxs(View, {
      style: [styles.container, withShadow && styles.shadow, containerStyle],
      children: [/*#__PURE__*/_jsxs(TouchableOpacity, {
        style: [styles.flagButtonView, layout === "second" && styles.flagButtonExtraWidth, flagButtonStyle, countryPickerButtonStyle],
        disabled: disabled,
        onPress: () => setModalVisible(true),
        children: [/*#__PURE__*/_jsx(CountryPicker, {
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
        }), showCountryCode && code && layout === "second" && /*#__PURE__*/_jsx(Text, {
          style: [styles.codeText, codeTextStyle],
          children: `+${code}`
        }), !disableArrowIcon && /*#__PURE__*/_jsx(React.Fragment, {
          children: renderDropdownImage
        })]
      }), /*#__PURE__*/_jsxs(View, {
        style: [styles.textContainer, textContainerStyle],
        children: [showCountryCode && code && layout === "first" && /*#__PURE__*/_jsx(Text, {
          style: [styles.codeText, codeTextStyle],
          children: `+${code}`
        }), /*#__PURE__*/_jsx(TextInput, {
          style: [styles.numberText, textInputStyle],
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
export default PhoneInput;
//# sourceMappingURL=index.js.map