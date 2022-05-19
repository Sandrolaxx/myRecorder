import React from "react";
import { RecordingProps } from "../../utils/types";
import { getLocalDateTime, getMegaBytes } from "../../utils/util";
import { Container, PlayVideoView, RecText, TextView } from "./styles";
import PlayIcon from "../../assets/icons/play.svg";

export default function Recording({ file }: RecordingProps) {
    return (
        <Container>
            <PlayVideoView>
                <PlayIcon width={40} height={40} fill={"#FAEBD7"} stroke={"#2F5EB2"} />
            </PlayVideoView>
            <TextView>
                <RecText>Nome: {file.name}</RecText>
                <RecText>
                    Data gravação: {getLocalDateTime(file.mtime!)}
                </RecText>
                <RecText>Tamanho: {getMegaBytes(file.size)}MB</RecText>
            </TextView>
        </Container>
    );
}