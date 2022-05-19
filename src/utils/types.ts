import { AnimationObject } from "lottie-react-native";
import { ReadDirItem } from "react-native-fs";

export interface ButtonProps {
    children: string;
    handleFuncion: Function;
}

export interface LayoutProps {
    children: Element;
}

export interface AnimationProps {
    animation: AnimationObject;
}

export interface RecordingProps {
    file: ReadDirItem;
}