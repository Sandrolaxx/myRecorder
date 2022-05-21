import React, { useState } from "react";
import { EnumAction, ModalProps } from "../../utils/types";
import Button from "../Button";
import { ButtonIcon, ModalContainer, ModalText, ModalView } from "./styles";
import CloseIcon from "../../assets/icons/close.svg";

export default function Modal({ setAction, closeModal }: ModalProps) {
    return (
        <ModalContainer
            animationType="slide"
            transparent={true}
        >
            <ModalView>
                <ButtonIcon onPress={closeModal}>
                    <CloseIcon width={24} height={24} stroke={"#2F5EB2"} />
                </ButtonIcon>
                <ModalText>Selecione uma opção:</ModalText>
                <Button handleFuncion={() => setAction(EnumAction.UPLOAD)} >
                    Upload Nuvem
                </Button>
                <Button handleFuncion={() => setAction(EnumAction.OPEN)} >
                    Abrir
                </Button>
                <Button handleFuncion={() => setAction(EnumAction.REMOVE)} >
                    Excluir
                </Button>
            </ModalView>
        </ModalContainer>
    );
}