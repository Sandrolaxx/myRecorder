import React from "react";
import { SafeAreaView } from "react-native";
import { AnimationProps } from "../../utils/types";
import { LottieFile } from "./styles";

export default function Animation({animation}: AnimationProps) {
    return(
        <SafeAreaView>
            <LottieFile
                source={animation}
                autoPlay
                loop
            />
        </SafeAreaView>
    );
}