import storage from "@react-native-firebase/storage";
import React from "react";
import PlayIcon from "../../assets/icons/play.svg";
import { RecordingProps } from "../../utils/types";
import { getBlob, getLocalDateTime, getMegaBytes } from "../../utils/util";
import { Container, PlayVideoView, RecText, TextView } from "./styles";

export default function Recording({ file }: RecordingProps) {

    async function sendVideoFirebase(pathFile: string) {
        const blob = await getBlob(pathFile)
            .then(res => res)
            .catch(error => error);

        if (blob == null) {
            console.log("Erro ao compactar arquivo para envio!");
            return;
        }

        uploadToFirebase(blob);
    }

    function uploadToFirebase(blob: Blob) {
        storage().ref().child("/recordings/".concat(file.name)).put(blob)
            .then(() => console.log("Deu bom"))
            .catch(() => console.log("Deu ruim"));
    }

    return (
        <Container>
            <PlayVideoView>
                <PlayIcon width={40} height={40} fill={"#FAEBD7"} stroke={"#2F5EB2"} />
            </PlayVideoView>
            <TextView onPress={() => sendVideoFirebase(file.path)} >
                <RecText>Nome: {file.name}</RecText>
                <RecText>Data gravação: {getLocalDateTime(file.mtime!)}</RecText>
                <RecText>Tamanho: {getMegaBytes(file.size)}MB</RecText>
            </TextView>
        </Container>
    );
}