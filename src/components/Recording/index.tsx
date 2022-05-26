import storage from "@react-native-firebase/storage";
import React, { useState } from "react";
import RNFS from 'react-native-fs';
import PlayIcon from "../../assets/icons/play.svg";
import { EnumAction, RecordingProps } from "../../utils/types";
import { getBlob, getLocalDateTime, getMegaBytes } from "../../utils/util";
import Modal from "../Modal";
import { Container, PlayVideoView, RecText, TextView } from "./styles";

export default function Recording({ file, changeAction }: RecordingProps) {
    const [showModal, setShowModal] = useState(false);

    async function handleUpload() {
        const blob = await getBlob(file.path)
            .then(res => res)
            .catch(error => error);

        if (blob == null) {
            console.log("Erro ao compactar arquivo para envio!");
            return;
        }

        uploadToFirebase(blob);
    }

    async function uploadToFirebase(blob: Blob) {
        await storage().ref().child("/recordings/".concat(file.name)).put(blob);
    }

    function handleAction(action: EnumAction) {

        switch (action) {
            case EnumAction.REMOVE:
                handleDelete();
                break;
            case EnumAction.UPLOAD:
                handleUpload();
                break;
        }

        changeAction(action);
    }

    function handleDelete() {
        storage().ref().child("/recordings/".concat(file.name)).delete()
            .catch(error => console.log(error));

        return RNFS.unlink(file.path);
    }

    return (
        <Container onPress={setShowModal} >
            {showModal && <Modal setAction={handleAction} closeModal={() => setShowModal(!showModal)} />}
            <PlayVideoView>
                <PlayIcon width={40} height={40} fill={"#FAEBD7"} stroke={"#2F5EB2"} />
            </PlayVideoView>
            <TextView>
                <RecText>Nome: {file.name}</RecText>
                <RecText>Data gravação: {getLocalDateTime(file.mtime!)}</RecText>
                <RecText>Tamanho: {getMegaBytes(file.size)}MB</RecText>
            </TextView>
        </Container>
    );
}