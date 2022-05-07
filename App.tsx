import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar, useColorScheme,
    View
} from 'react-native';
import RecordScreen from 'react-native-record-screen';
import {
    Colors, Header
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    async function startRecord() {
        // recording start
        console.log("Tá rolando!");
        
        const test = await RecordScreen.startRecording()
            .then(res => res)
            .catch((error) => console.error(error));

        console.log(test);
        
    }

    async function stopRecord() {
        // recording stop
        console.log("stop");
        
        const res = await RecordScreen.stopRecording().catch((error) =>
            console.warn(error)
        );
        if (res) {
            const url = res.result.outputURL;
            console.log(url);
        }

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
                    <Button title="Iniciar Gravação🔥" onPress={startRecord} />
                    <Button title="Finalizar Gravação❌" onPress={stopRecord} />
                    <Button title="Clean" onPress={handleClean} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
