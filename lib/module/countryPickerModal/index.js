"use strict";

import { CountryProvider, DEFAULT_COUNTRY_CONTEXT } from "./CountryContext.js";
import CountryPicker from "./CountryPicker.js";
import { DEFAULT_THEME, ThemeProvider } from "./CountryTheme.js";
import { jsx as _jsx } from "react/jsx-runtime";
const Main = ({
  onSelect = () => {},
  withEmoji = true,
  theme,
  translation,
  ...props
}) => {
  return /*#__PURE__*/_jsx(ThemeProvider, {
    theme: {
      ...DEFAULT_THEME,
      ...theme
    },
    children: /*#__PURE__*/_jsx(CountryProvider, {
      value: {
        ...DEFAULT_COUNTRY_CONTEXT,
        translation
      },
      children: /*#__PURE__*/_jsx(CountryPicker, {
        onSelect: onSelect,
        withEmoji: withEmoji,
        ...props
      })
    })
  });
};
export default Main;
export { default as CountryFilter } from "./CountryFilter.js";
export { default as CountryList } from "./CountryList.js";
export { default as CountryModal } from "./CountryModal.js";
export { default as CountryModalProvider } from "./CountryModalProvider.js";
export { getCountriesAsync as getAllCountries, getCountryCallingCodeAsync as getCallingCode, loadDataAsync } from "./CountryService.js";
export { DARK_THEME, DEFAULT_THEME } from "./CountryTheme.js";
export { Flag } from "./Flag.js";
export { FlagButton } from "./FlagButton.js";
export { HeaderModal } from "./HeaderModal.js";
export * from "./types.js";
//# sourceMappingURL=index.js.map