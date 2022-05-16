import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import RNFS, { ReadDirItem } from 'react-native-fs';
import { Container, FlatList } from "./styles";

export default function Recordings() {
    const path = "/storage/emulated/0/Android/data/com.myrecorder/files/ReactNativeRecordScreen/";

    const [files, setFiles] = useState<ReadDirItem[]>([]);
    const getFileContent = async () => {
        const reader = await RNFS.readDir(path);
        setFiles(reader);
    };
    useEffect(() => {
        getFileContent(); //run the function on the first render.
    }, []);

    const Item = ({ name, isFile }) => {
        return (
            <View>
                <Text>Name: {name}</Text>
                <Text> {isFile ? "It is a file" : "It's a folder"}</Text>
            </View>
        );
    };

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Text>{index}</Text>
                {/* The isFile method indicates whether the scanned content is a file or a folder*/}
                <Item name={item.name} isFile={item.isFile()} />
            </View>
        );
    };
    
    return (
        <Container>
            <FlatList
                data={files}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </Container>
    );
}