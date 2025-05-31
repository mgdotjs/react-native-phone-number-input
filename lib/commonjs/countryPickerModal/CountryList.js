"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CountryContext = require("./CountryContext.js");
var _CountryText = require("./CountryText.js");
var _CountryTheme = require("./CountryTheme.js");
var _Flag = require("./Flag.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const borderBottomWidth = 2 / _reactNative.PixelRatio.get();
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  letters: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center"
  },
  letter: {
    height: 23,
    width: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  letterText: {
    textAlign: "center"
  },
  itemCountry: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 5
  },
  itemCountryName: {
    width: "90%"
  },
  list: {
    flex: 1
  },
  sep: {
    borderBottomWidth,
    width: "100%"
  }
});
const Letter = ({
  letter,
  scrollTo
}) => {
  const {
    fontSize,
    activeOpacity
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    testID: `letter-${letter}`,
    onPress: () => scrollTo(letter),
    activeOpacity,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.letter,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CountryText.CountryText, {
        style: [styles.letterText, {
          fontSize: fontSize * 0.8
        }],
        children: letter
      })
    })
  }, letter);
};
const CountryItem = ({
  country,
  onSelect,
  withFlag = true,
  withEmoji,
  withCallingCode = false,
  withCurrency
}) => {
  const {
    activeOpacity,
    itemHeight,
    flagSize
  } = (0, _CountryTheme.useTheme)();
  const extraContent = [];
  if (withCallingCode && country.callingCode && country.callingCode.length > 0) {
    extraContent.push(`+${country.callingCode.join("|")}`);
  }
  if (withCurrency && country.currency && country.currency.length > 0) {
    extraContent.push(country.currency.join("|"));
  }
  const countryName = typeof country.name === "string" ? country.name : country.name.common;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    testID: `country-selector-${country.cca2}`,
    onPress: () => onSelect(country),
    activeOpacity,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.itemCountry, {
        height: itemHeight
      }],
      children: [withFlag && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Flag.Flag, {
        withEmoji,
        countryCode: country.cca2,
        flagSize: flagSize
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.itemCountryName,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CountryText.CountryText, {
          numberOfLines: 2,
          ellipsizeMode: "tail",
          children: [countryName, extraContent.length > 0 && ` (${extraContent.join(", ")})`]
        })
      })]
    })
  }, country.cca2);
};
const MemoCountryItem = /*#__PURE__*/(0, _react.memo)(CountryItem);
const renderItem = props => ({
  item: country
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(MemoCountryItem, {
  country,
  ...props
});
const ItemSeparatorComponent = () => {
  const {
    primaryColorVariant
  } = (0, _CountryTheme.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.sep, {
      borderBottomColor: primaryColorVariant
    }]
  });
};
const {
  height
} = _reactNative.Dimensions.get("window");
const CountryList = props => {
  const {
    data,
    withAlphaFilter,
    withEmoji,
    withFlag,
    withCallingCode,
    withCurrency,
    onSelect,
    filter,
    flatListProps,
    filterFocus
  } = props;
  const flatListRef = (0, _react.useRef)(null);
  const [letter, setLetter] = (0, _react.useState)("");
  const {
    itemHeight,
    backgroundColor
  } = (0, _CountryTheme.useTheme)();
  const indexLetter = data.map(country => country.name.substr(0, 1)).join("");

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const scrollTo = (letter, animated = true) => {
    if (!letter) return;
    const index = indexLetter.indexOf(letter);
    setLetter(letter);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated,
        index
      });
    }
  };
  const onScrollToIndexFailed = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
      scrollTo(letter);
    }
  };
  const {
    search,
    getLetters
  } = (0, _CountryContext.useContext)();
  const letters = getLetters(data);
  (0, _react.useEffect)(() => {
    if (data && data.length > 0 && filterFocus && !filter) {
      scrollTo(letters[0], false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterFocus]);
  const initialNumToRender = Math.round(height / (itemHeight || 1));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor
    }],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, {
      ref: flatListRef,
      testID: "list-countries",
      keyboardShouldPersistTaps: "handled",
      automaticallyAdjustContentInsets: false,
      scrollEventThrottle: 1,
      getItemLayout: (_data, index) => ({
        length: itemHeight + borderBottomWidth,
        offset: (itemHeight + borderBottomWidth) * index,
        index
      }),
      renderItem: renderItem({
        withEmoji,
        withFlag,
        withCallingCode,
        withCurrency,
        onSelect
      }),
      data: search(filter, data),
      keyExtractor: item => item?.cca2,
      onScrollToIndexFailed,
      ItemSeparatorComponent,
      initialNumToRender,
      ...flatListProps
    }), withAlphaFilter && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
      scrollEnabled: false,
      contentContainerStyle: styles.letters,
      keyboardShouldPersistTaps: "always",
      children: letters.map(letter => /*#__PURE__*/(0, _jsxRuntime.jsx)(Letter, {
        letter,
        scrollTo
      }, letter))
    })]
  });
};
var _default = exports.default = CountryList;
//# sourceMappingURL=CountryList.js.map