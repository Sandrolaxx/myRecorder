import Video from "react-native-video";
import styled from "styled-components";

export const Container = styled.Pressable`
    padding: 14px;
    margin: 12px 12px 0px 12px;
    border: 1px;
    border-radius: 12px;
    border-color: #2F5EB2;
    flex-direction: row;
`

export const PlayVideoView = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-right: 12px;
    background-color: #FFBB85;
    align-items: center;
    justify-content: center;
`

export const VideoPlayer = styled(Video)`
    width: 280px;
    height: 280px;
    padding: 5px;
`

export const TextView = styled.View`
`

export const RecText = styled.Text`
`