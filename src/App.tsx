import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar, useColorScheme,
    View
} from 'react-native';
import RecordScreen from 'react-native-record-screen';
import {
    Colors, Header
} from 'react-native/Libraries/NewAppScreen';
import Button from './components/Button';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [isRecording, setRecording] = useState(false);

    async function record() {

        if (isRecording) {
            // recording stop
            console.log("Para para para!");
            await RecordScreen.stopRecording()
                .then(res => {
                    if (res) {
                        const url = res.result.outputURL;
                        console.log("url: " + url);
                    }
                })
                .catch((error) =>
                    console.warn("error: "+error)
                );
        } else {
            // recording start
            console.log("Tá rolando Gravação!");

            await RecordScreen.startRecording({mic:false})
                .then(res => console.log("RessSTART:"+res))
                .catch((error) => console.error(error));

        }

        setRecording(!isRecording);

    }

    function handleClean() {
        RecordScreen.clean();
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View>
                <Button handleFuncion={() =>record} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
