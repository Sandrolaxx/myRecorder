import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { LayoutProps } from "../../utils/types";
import { Container, Content } from "./style";

export default function Layout({ children }: LayoutProps) {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Container>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Content>
                {children}
            </Content>
        </Container>
    );
}