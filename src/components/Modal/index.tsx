import React, { useState } from "react";
import { EnumAction, ModalProps } from "../../utils/types";
import Button from "../Button";
import Animation from "../Animation";
import { ButtonIcon, ModalContainer, ModalText, ModalView } from "./styles";
import CloseIcon from "../../assets/icons/close.svg";
import loading from "../../assets/lottie/loading.json";

export default function Modal({ setAction, closeModal }: ModalProps) {
    const [isLoading, setLoading] = useState(false);
    const [selectedAction, setSelectedAction] = useState<EnumAction>();

    function handleChangeAction(action: EnumAction) {
        setSelectedAction(action);
        setAction(action);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            closeModal();
        }, 4000);
    }

    return (
        <ModalContainer
            animationType="slide"
            transparent={true}
        >
            {isLoading ?
                <ModalView>
                    <Animation animation={loading} />
                    {selectedAction == EnumAction.UPLOAD && <ModalText>Enviando...</ModalText>}
                    {selectedAction == EnumAction.REMOVE && <ModalText>Excluindo...</ModalText>}
                </ModalView>
                :
                <ModalView>
                    <ButtonIcon onPress={closeModal}>
                        <CloseIcon width={24} height={24} stroke={"#2F5EB2"} />
                    </ButtonIcon>
                    <ModalText>Selecione uma opção:</ModalText>
                    <Button handleFuncion={() => handleChangeAction(EnumAction.UPLOAD)} >
                        Upload Nuvem
                    </Button>
                    <Button handleFuncion={() => handleChangeAction(EnumAction.OPEN)} >
                        Abrir
                    </Button>
                    <Button handleFuncion={() => handleChangeAction(EnumAction.REMOVE)} >
                        Excluir
                    </Button>
                </ModalView>
            }
        </ModalContainer>
    );
}