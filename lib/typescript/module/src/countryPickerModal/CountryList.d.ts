import React from "react";
import { type FlatListProps } from "react-native";
import type { Country } from "./types";
interface CountryListProps {
    data: Country[];
    filter?: string;
    filterFocus?: boolean;
    withFlag?: boolean;
    withEmoji?: boolean;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    flatListProps?: FlatListProps<Country>;
    onSelect(country: Country): void;
}
declare const CountryList: React.FC<CountryListProps>;
export default CountryList;
//# sourceMappingURL=CountryList.d.ts.map