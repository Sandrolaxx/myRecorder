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
    speed?: number
}

export interface RecordingProps {
    file: ReadDirItem;
    changeAction: Function;
}

export interface RecordingsProps {
    loadRecordings: boolean;
    changeAction: Function;
}

export interface ModalProps {
    setAction: Function;
    closeModal: Function;
}

export enum EnumAction {
    NONE,
    RECORD,
    UPLOAD,
    REMOVE
}