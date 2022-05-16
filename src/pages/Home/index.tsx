import React, { useState } from "react";
import RecordScreen from 'react-native-record-screen';
import homeAnimation from "../../assets/recordHome.json";
import recordingAnimation from "../../assets/recording.json";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Recordings from "../../components/Recordings";
import { Title } from "./styles";

export default function Home() {
    const [isRecording, setRecording] = useState(false);

    async function record() {

        if (isRecording) {
            await RecordScreen.stopRecording()
                .then(res => {
                    if (res) {
                        const url = res.result.outputURL;
                        console.log("url: " + url);
                    }
                })
                .catch((error) =>
                    console.warn("error: " + error)
                );
        } else {
            await RecordScreen.startRecording({ mic: false })
                .then(res => console.log("RessSTART:" + res))
                .catch((error) => console.error(error));
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
            <Recordings />
        </Layout>
    );
}