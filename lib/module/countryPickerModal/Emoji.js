"use strict";

import { memo } from "react";
import { Text } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
const Emoji = /*#__PURE__*/memo(({
  name
}) => {
  const countryCode = name.replace("flag-", "").toUpperCase();
  const emoji = countryCode.split("").map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join("");
  return /*#__PURE__*/_jsx(Text, {
    allowFontScaling: false,
    children: emoji
  });
});
export { Emoji };
//# sourceMappingURL=Emoji.js.map