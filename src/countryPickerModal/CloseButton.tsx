import React from "react";
import {
    Image,
    type ImageSourcePropType,
    type ImageStyle,
    Platform,
    type StyleProp,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    type ViewStyle
} from "react-native";
import { useTheme } from "./CountryTheme";

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "12%",
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        height: 35,
        width: 35,
        resizeMode: "contain"
    }
});

interface CloseButtonProps {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    image?: ImageSourcePropType;
    onPress?(): void;
}

const CloseButtonAndroid: React.FC<CloseButtonProps> = (props) => {
    let closeImage = require("./assets/images/close.ios.png");

    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (
        <View style={[styles.container, props.style]}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View>
                    <Image
                        tintColor={onBackgroundTextColor}
                        source={closeImage}
                        style={[styles.imageStyle, props.imageStyle]}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const CloseButtonIOS: React.FC<CloseButtonProps> = (props) => {
    let closeImage = require("./assets/images/close.ios.png");

    if (props.image) {
        closeImage = props.image;
    }
    const { onBackgroundTextColor } = useTheme();
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={closeImage}
                    style={[styles.imageStyle, props.imageStyle, { tintColor: onBackgroundTextColor }]}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Platform.select({
    ios: CloseButtonIOS,
    android: CloseButtonAndroid,
    web: CloseButtonIOS,
    default: CloseButtonIOS
});
