import React, { useState } from "react";
import RecordScreen from 'react-native-record-screen';
import homeAnimation from "../../assets/lottie/recordHome.json";
import recordingAnimation from "../../assets/lottie/recording.json";
import uploadVideo from "../../assets/lottie/upload.json";
import toTrash from "../../assets/lottie/trash.json";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import RecordingsList from "../../components/RecordingsList";
import { EnumAction } from "../../utils/types";
import { Title } from "./styles";

export default function Home() {
    const [isRecording, setRecording] = useState(false);
    const [loadRecordings, setLoadRecordings] = useState(false);
    const [action, setAction] = useState(EnumAction.NONE);

    async function record() {

        if (isRecording) {
            await RecordScreen.stopRecording()
                .then(() => setLoadRecordings(!loadRecordings))
                .catch(error => console.warn("error: ".concat(error)));
        } else {
            await RecordScreen.startRecording({ mic: false })
                .then(() => console.log("Recording....."))
                .catch(error => console.error(error));
        }

        setAction(action == EnumAction.NONE ? EnumAction.RECORD : EnumAction.NONE);
        setRecording(!isRecording);
    }

    function handleAction(selectedAction: EnumAction) {
        if (selectedAction == EnumAction.OPEN) {
            return setAction(EnumAction.NONE);
        }

        setAction(selectedAction);

        setTimeout(handleRefresh ,4000);
    }

    function handleRefresh() {
        setAction(EnumAction.NONE);
        setLoadRecordings(!loadRecordings);
    }

    return (
        <Layout>
            {action == EnumAction.NONE && <Animation animation={homeAnimation} />}  
            {action == EnumAction.RECORD && <Animation animation={recordingAnimation} />}  
            {action == EnumAction.UPLOAD && <Animation animation={uploadVideo} />}  
            {action == EnumAction.REMOVE && <Animation animation={toTrash} />}  
            <Title>
                Grave a tela do seu celular de forma simples e rápida!
            </Title>
            <Button handleFuncion={record}>
                {isRecording ? "GRAVANDO" : "INICIAR GRAVAÇÃO"}
            </Button>
            <RecordingsList loadRecordings={loadRecordings} changeAction={handleAction} />
        </Layout>
    );
}