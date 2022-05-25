import React, { useEffect, useState } from "react";
import RNFS, { ReadDirItem } from 'react-native-fs';
import { RecordingsProps } from "../../utils/types";
import { isNullOrEmpty } from "../../utils/util";
import Recording from "../Recording";
import { Container, NoFilesText } from "./styles";

export default function RecordingsList({ loadRecordings, changeAction }: RecordingsProps) {
    const path = "/storage/emulated/0/Android/data/com.myrecorder/files/ReactNativeRecordScreen/";
    const [files, setFiles] = useState<ReadDirItem[]>([]);

    async function getFiles() {
        const reader = await RNFS.readDir(path);
        
        setFiles(reader);
    };

    useEffect(() => {
        getFiles();
    }, [loadRecordings]);

    return (
        <Container>
            {isNullOrEmpty(files) ?
                files.map(f => (
                    <Recording
                        file={f}
                        key={f.mtime?.getTime()}
                        changeAction={changeAction} />
                ))
                :
                <NoFilesText>
                    Nenhum gravação encontrada.
                    {"\n"}
                    Realize sua primeira apertando
                    {"\n"}
                    no botão "INICIAR GRAVAÇÃO"😎
                </NoFilesText>
            }
        </Container>
    );
}