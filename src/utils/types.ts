import { AnimationObject } from "lottie-react-native";

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