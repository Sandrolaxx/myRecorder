import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import RNFS, { ReadDirItem } from 'react-native-fs';
import Recording from "../Recording";
import { Container } from "./styles";

export default function RecordingsList() {
    const path = "/storage/emulated/0/Android/data/com.myrecorder/files/ReactNativeRecordScreen/";
    const [files, setFiles] = useState<ReadDirItem[]>([]);

    async function getFiles() {
        const reader = await RNFS.readDir(path);
        setFiles(reader);
    };

    useEffect(() => {
        getFiles();
    }, []);

    return (
        <Container
                data={files}
                renderItem={Recording}
                keyExtractor={item => item.name}
        />
    );
}