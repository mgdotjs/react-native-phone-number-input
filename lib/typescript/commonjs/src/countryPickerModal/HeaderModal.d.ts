import { type ReactNode } from "react";
import { type ImageSourcePropType, type ImageStyle, type StyleProp, type ViewStyle } from "react-native";
interface HeaderModalProps {
    withFilter?: boolean;
    withCloseButton?: boolean;
    closeButtonImage?: ImageSourcePropType;
    closeButtonStyle?: StyleProp<ViewStyle>;
    closeButtonImageStyle?: StyleProp<ImageStyle>;
    onClose(): void;
    renderFilter(props: HeaderModalProps): ReactNode;
}
export declare const HeaderModal: React.FC<HeaderModalProps>;
export {};
//# sourceMappingURL=HeaderModal.d.ts.map