import React from "react";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "../../utils/types";
import { Container } from "./style";

export default function Button({ handleFuncion }: ButtonProps) {
    return (
        <Container>
            <Pressable onPress={() => handleFuncion} >
                <Text>Teste</Text>
            </Pressable>
        </Container>
    );
}