import { type IFuseOptions } from "fuse.js";
import { type Country, type CountryCode, FlagType, type Region, type Subregion, type TranslationLanguageCode } from "./types";
type CountryMap = {
    [key in CountryCode]: Country;
};
export declare const loadDataAsync: (dataType?: FlagType) => Promise<CountryMap>;
export declare const getEmojiFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getImageFlagAsync: (countryCode?: CountryCode) => Promise<string>;
export declare const getCountryNameAsync: (countryCode?: CountryCode, translation?: TranslationLanguageCode) => Promise<string>;
export declare const getCountryCallingCodeAsync: (countryCode: CountryCode) => Promise<string | undefined>;
export declare const getCountryCurrencyAsync: (countryCode: CountryCode) => Promise<string | undefined>;
export declare const getCountriesAsync: (flagType: FlagType, translation?: TranslationLanguageCode, region?: Region, subregion?: Subregion, countryCodes?: CountryCode[], excludeCountries?: CountryCode[], preferredCountries?: CountryCode[], withAlphaFilter?: boolean) => Promise<Country[]>;
export declare const search: (filter?: string, data?: Country[], options?: IFuseOptions<Country>) => Country[];
export declare const getLetters: (countries: Country[]) => string[];
export interface CountryInfo {
    countryName: string;
    currency: string;
    callingCode: string;
}
export declare const getCountryInfoAsync: ({ countryCode, translation }: {
    countryCode: CountryCode;
    translation?: "common" | "tur" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr" | undefined;
}) => Promise<CountryInfo>;
export {};
//# sourceMappingURL=CountryService.d.ts.map