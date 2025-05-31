import React from "react";
import { type StyleProp, type TextInputProps, type TextStyle, type ViewStyle } from "react-native";
import { type CallingCode, type Country, type CountryCode, type CountryFilterProps, type CountryPickerModalProps } from "./countryPickerModal";
export type PhoneInputProps = {
    withDarkTheme?: boolean;
    withShadow?: boolean;
    autoFocus?: boolean;
    defaultCode?: CountryCode;
    defaultCallingCode?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    disableArrowIcon?: boolean;
    placeholder?: string;
    onChangeCountry?: (country: Country) => void;
    onChangeText?: (text: string) => void;
    onChangeFormattedText?: (text: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    renderDropdownImage?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    textContainerStyle?: StyleProp<ViewStyle>;
    textInputProps?: TextInputProps;
    textInputStyle?: StyleProp<TextStyle>;
    codeTextStyle?: StyleProp<TextStyle>;
    flagButtonStyle?: StyleProp<ViewStyle>;
    countryPickerButtonStyle?: StyleProp<ViewStyle>;
    layout?: "first" | "second";
    filterProps?: CountryFilterProps;
    countryPickerProps?: CountryPickerModalProps;
    flagSize?: number;
    showCountryCode?: boolean;
};
export type PhoneInputRefType = {
    getCountryCode: () => CountryCode;
    getCallingCode: () => CallingCode | undefined;
    isValidNumber: (number: string) => boolean;
    getNumberAfterPossiblyEliminatingZero: () => {
        number: string | undefined;
        formattedNumber: string | undefined;
    };
};
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<PhoneInputRefType>>;
export default PhoneInput;
//# sourceMappingURL=index.d.ts.map