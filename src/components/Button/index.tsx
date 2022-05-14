import React from "react";
import { ButtonProps } from "../../utils/types";
import { Container, TextBtn } from "./style";

export default function Button({ handleFuncion, children }: ButtonProps) {
    return (
        <Container onPress={handleFuncion} >
            <TextBtn>{children}</TextBtn>
        </Container>
    );
}