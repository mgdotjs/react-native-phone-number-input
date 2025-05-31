import { type StyleProp, type ViewStyle } from "react-native";
import { type CountryCode } from "./types";
export interface FlagButtonProps {
    allowFontScaling?: boolean;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    countryCode?: CountryCode;
    placeholder: string;
    onOpen?(): void;
}
export declare const FlagButton: {
    ({ allowFontScaling, withEmoji, withCountryNameButton, withCallingCodeButton, withCurrencyButton, withFlagButton, countryCode, containerButtonStyle, onOpen, placeholder }: FlagButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        withEmoji: boolean;
        withCountryNameButton: boolean;
        withCallingCodeButton: boolean;
        withCurrencyButton: boolean;
        withFlagButton: boolean;
    };
};
//# sourceMappingURL=FlagButton.d.ts.map