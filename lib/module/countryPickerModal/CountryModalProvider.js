"use strict";

import * as React from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const CountryModalContext = /*#__PURE__*/React.createContext({
  gate: undefined,
  teleport: undefined
});
const CountryModalProvider = ({
  children
}) => {
  const [gate, setGate] = React.useState(undefined);
  const teleport = element => setGate(element);
  return /*#__PURE__*/_jsxs(CountryModalContext.Provider, {
    value: {
      gate,
      teleport
    },
    children: [children, gate]
  });
};
export default CountryModalProvider;
//# sourceMappingURL=CountryModalProvider.js.map