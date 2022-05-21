import React, { useState } from "react";
import RecordScreen from 'react-native-record-screen';
import homeAnimation from "../../assets/lottie/recordHome.json";
import recordingAnimation from "../../assets/lottie/recording.json";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import RecordingsList from "../../components/RecordingsList";
import { Title } from "./styles";

export default function Home() {
    const [isRecording, setRecording] = useState(false);
    const [loadRecordings, setLoadRecordings] = useState(false);

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

        setRecording(!isRecording);
    }

    return (
        <Layout>
            <Animation animation={isRecording ? recordingAnimation : homeAnimation} />
            <Title>
                Grave a tela do seu celular de forma simples e rápida!
            </Title>
            <Button handleFuncion={record}>
                {isRecording ? "GRAVANDO" : "INICIAR GRAVAÇÃO"}
            </Button>
            <RecordingsList loadRecordings={loadRecordings} />
        </Layout>
    );
}