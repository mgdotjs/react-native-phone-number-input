"use strict";

import React, { useEffect, useState } from "react";
import { useContext } from "./CountryContext.js";
import CountryFilter from "./CountryFilter.js";
import CountryList from "./CountryList.js";
import CountryModal from "./CountryModal.js";
import { FlagButton } from "./FlagButton.js";
import { HeaderModal } from "./HeaderModal.js";
import { FlagType } from "./types.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const renderFlagButton = props => props.renderFlagButton ? props.renderFlagButton(props) : /*#__PURE__*/_jsx(FlagButton, {
  ...props
});
const renderFilter = props => props.renderCountryFilter ? props.renderCountryFilter(props) : /*#__PURE__*/_jsx(CountryFilter, {
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
  const [state, setState] = useState({
    visible: props.visible || false,
    countries: [],
    filter: "",
    filterFocus: false
  });
  const {
    translation,
    getCountriesAsync
  } = useContext();
  const {
    visible,
    filter,
    countries,
    filterFocus
  } = state;
  useEffect(() => {
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
  useEffect(() => {
    let cancel = false;
    getCountriesAsync(withEmoji ? FlagType.EMOJI : FlagType.FLAT, translation, region, subregion, countryCodes, excludeCountries, preferredCountries, withAlphaFilter)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then(countries => cancel ? null : setCountries(countries)).catch(console.warn);
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translation, withEmoji]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [withModal && renderFlagButton(flagProp), /*#__PURE__*/_jsxs(CountryModal, {
      visible,
      withModal,
      disableNativeModal,
      ...modalProps,
      onRequestClose: onClose,
      onDismiss: onClose,
      children: [/*#__PURE__*/_jsx(HeaderModal, {
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
      }), /*#__PURE__*/_jsx(CountryList, {
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
export default CountryPicker;
//# sourceMappingURL=CountryPicker.js.map