import notifee, { EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import RecordScreen from 'react-native-record-screen';
import homeAnimation from "../assets/lottie/recordHome.json";
import recordingAnimation from "../assets/lottie/recording.json";
import shareVideo from "../assets/lottie/share.json";
import toTrash from "../assets/lottie/trash.json";
import uploadVideo from "../assets/lottie/upload.json";

export function isNullOrEmpty(array: any[]): boolean {
    return array == undefined || array == null || array.length > 0;
}

export function getMegaBytes(bytes: number): string {
    return (bytes / 1000000).toPrecision(2);
}

export function getLocalDateTime(date: Date): string {
    return date.toLocaleDateString().concat(' ').concat(date.toLocaleTimeString());
}

export function getBlob(pathFile: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = "blob";
        xhr.open("GET", "file://" + pathFile, true);
        xhr.send(null);

        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(null);
    });
}

export async function handleNotification(setLoadRecordings: Function) {
    const date = new Date(Date.now());
    date.setTime(date.getTime() + 6000)

    const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
        {
            title: "My Recorder",
            body: "Sua Gravação foi encerrada",
            android: {
                channelId: "default",
                smallIcon: "notification_icon"
            },
        },
        trigger,
    );

    notifee.onBackgroundEvent(async ({ type }) => {
        if (type === EventType.PRESS) {
            setLoadRecordings(false);
        }
    });
}

export async function startRecord(handleStartRecording: Function) {
    await RecordScreen.startRecording({ mic: false })
        .then(() => handleStartRecording())
        .catch(error => console.log(error));
}

export async function stopRecord(handleStopRecording: Function) {
    await RecordScreen.stopRecording()
        .then(() => handleStopRecording())
        .catch(error => console.warn("error: ".concat(error)));
}

export const Animations = {
    toTrash,
    shareVideo,
    uploadVideo,
    homeAnimation,
    recordingAnimation
}

export function getRecordingMessage(): string {
    return "Atenção! A gravação da sua tela tem uma duração de 1 minuto, após esse tempo"
        .concat(" a gravação será interrompida e iremos te notificar quando acabar.");
}