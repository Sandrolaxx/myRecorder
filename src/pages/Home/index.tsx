import React, { useState } from "react";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Modal from '../../components/Modal';
import RecordingsList from "../../components/RecordingsList";
import { EnumAction } from "../../utils/types";
import { Animations, getRecordingMessage, handleNotification, startRecord, stopRecord } from "../../utils/util";
import { Title } from "./styles";

export default function Home() {
    const [isRecording, setRecording] = useState(false);
    const [loadRecordings, setLoadRecordings] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [action, setAction] = useState(EnumAction.NONE);

    async function record() {
        isRecording ? stopRecord(handleStopRecording) : startRecord(handleStartRecording);
    }

    function handleRecord() {
        isRecording ? record() : setShowModal(true);
    }

    function handleStopRecording() {
        setLoadRecordings(!loadRecordings)
        setAction(EnumAction.NONE);
        setRecording(false);
    }
    function handleStartRecording() {
        setAction(EnumAction.RECORD);
        setRecording(!isRecording);

        handleNotification(setLoadRecordings);
        
        setTimeout(async () => stopRecord(handleStopRecording), 5000);
    }

    function handleAction(selectedAction: EnumAction) {
        setAction(selectedAction);
        setTimeout(() => {
            setAction(EnumAction.NONE);
            setLoadRecordings(!loadRecordings);
        }, 4000);
    }

    return (
        <Layout>
            {action == EnumAction.NONE && <Animation animation={Animations.homeAnimation} />}
            {action == EnumAction.RECORD && <Animation animation={Animations.recordingAnimation} />}
            {action == EnumAction.UPLOAD && <Animation animation={Animations.uploadVideo} />}
            {action == EnumAction.REMOVE && <Animation animation={Animations.toTrash} />}
            {action == EnumAction.SHARE && <Animation animation={Animations.shareVideo} />}
            <Title>
                Grave a tela do seu celular de forma simples e rápida!
            </Title>
            {showModal && <Modal setAction={record} closeModal={() => setShowModal(false)}
                onlyMessage message={getRecordingMessage()} />}
            <Button handleFuncion={handleRecord}>
                {isRecording ? "GRAVANDO" : "INICIAR GRAVAÇÃO"}
            </Button>
            <RecordingsList loadRecordings={loadRecordings} changeAction={handleAction} />
        </Layout>
    );
}