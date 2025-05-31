"use strict";

import React, { memo, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, PixelRatio, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useContext } from "./CountryContext.js";
import { CountryText } from "./CountryText.js";
import { useTheme } from "./CountryTheme.js";
import { Flag } from "./Flag.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const borderBottomWidth = 2 / PixelRatio.get();
const styles = StyleSheet.create({
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
  } = useTheme();
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    testID: `letter-${letter}`,
    onPress: () => scrollTo(letter),
    activeOpacity,
    children: /*#__PURE__*/_jsx(View, {
      style: styles.letter,
      children: /*#__PURE__*/_jsx(CountryText, {
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
  } = useTheme();
  const extraContent = [];
  if (withCallingCode && country.callingCode && country.callingCode.length > 0) {
    extraContent.push(`+${country.callingCode.join("|")}`);
  }
  if (withCurrency && country.currency && country.currency.length > 0) {
    extraContent.push(country.currency.join("|"));
  }
  const countryName = typeof country.name === "string" ? country.name : country.name.common;
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    testID: `country-selector-${country.cca2}`,
    onPress: () => onSelect(country),
    activeOpacity,
    children: /*#__PURE__*/_jsxs(View, {
      style: [styles.itemCountry, {
        height: itemHeight
      }],
      children: [withFlag && /*#__PURE__*/_jsx(Flag, {
        withEmoji,
        countryCode: country.cca2,
        flagSize: flagSize
      }), /*#__PURE__*/_jsx(View, {
        style: styles.itemCountryName,
        children: /*#__PURE__*/_jsxs(CountryText, {
          numberOfLines: 2,
          ellipsizeMode: "tail",
          children: [countryName, extraContent.length > 0 && ` (${extraContent.join(", ")})`]
        })
      })]
    })
  }, country.cca2);
};
const MemoCountryItem = /*#__PURE__*/memo(CountryItem);
const renderItem = props => ({
  item: country
}) => /*#__PURE__*/_jsx(MemoCountryItem, {
  country,
  ...props
});
const ItemSeparatorComponent = () => {
  const {
    primaryColorVariant
  } = useTheme();
  return /*#__PURE__*/_jsx(View, {
    style: [styles.sep, {
      borderBottomColor: primaryColorVariant
    }]
  });
};
const {
  height
} = Dimensions.get("window");
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
  const flatListRef = useRef(null);
  const [letter, setLetter] = useState("");
  const {
    itemHeight,
    backgroundColor
  } = useTheme();
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
  } = useContext();
  const letters = getLetters(data);
  useEffect(() => {
    if (data && data.length > 0 && filterFocus && !filter) {
      scrollTo(letters[0], false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterFocus]);
  const initialNumToRender = Math.round(height / (itemHeight || 1));
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, {
      backgroundColor
    }],
    children: [/*#__PURE__*/_jsx(FlatList, {
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
    }), withAlphaFilter && /*#__PURE__*/_jsx(ScrollView, {
      scrollEnabled: false,
      contentContainerStyle: styles.letters,
      keyboardShouldPersistTaps: "always",
      children: letters.map(letter => /*#__PURE__*/_jsx(Letter, {
        letter,
        scrollTo
      }, letter))
    })]
  });
};
export default CountryList;
//# sourceMappingURL=CountryList.js.map