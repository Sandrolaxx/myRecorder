import storage from "@react-native-firebase/storage";
import React, { useState } from "react";
import RNFS from "react-native-fs";
import Share from "react-native-share"
import PlayIcon from "../../assets/icons/play.svg";
import { EnumAction, RecordingProps } from "../../utils/types";
import { getBlob, getLocalDateTime, getMegaBytes } from "../../utils/util";
import Modal from "../Modal";
import { Container, PlayVideoView, RecText, TextView } from "./styles";

export default function Recording({ file, changeAction }: RecordingProps) {
    const [showModal, setShowModal] = useState(false);

    function handleAction(action: EnumAction) {
        switch (action) {
            case EnumAction.REMOVE:
                changeAction(action);
                handleDelete();
                break;
            case EnumAction.UPLOAD:
                changeAction(action);
                handleUpload();
                break;
                case EnumAction.SHARE:
                changeAction(action);
                handleShare();
                break; 
        }
    }

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

    function handleDelete() {
        storage().ref().child("/recordings/".concat(file.name)).delete()
            .catch(error => console.log(error));

        RNFS.unlink(file.path);
    }

    function handleShare() {
        Share.open({
            title: "Compartilhe sua gravação",
            filename: file.name,
            url: "file://".concat(file.path)
        })
        .then(() => changeAction(EnumAction.NONE))
        .catch(() => changeAction(EnumAction.NONE));
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