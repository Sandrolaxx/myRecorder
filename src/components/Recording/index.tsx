import React from "react";
import { Container, RecText } from "./styles";

export default function Recording({index, name}) {
    return (
        <Container>
            <RecText>{index}</RecText>
            <RecText>Name: {name}</RecText>
        </Container>
    );
}