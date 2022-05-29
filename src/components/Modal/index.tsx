import React, { useState } from "react";
import AlertIcon from "../../assets/icons/alert.svg";
import CloseIcon from "../../assets/icons/close.svg";
import loading from "../../assets/lottie/loading.json";
import { EnumAction, ModalProps } from "../../utils/types";
import Animation from "../Animation";
import Button from "../Button";
import { AnimationText, ButtonIcon, ModalContainer, ModalText, ModalView } from "./styles";

export default function Modal({ setAction, closeModal, onlyMessage, message }: ModalProps) {
    const [isLoading, setLoading] = useState(false);
    const [selectedAction, setSelectedAction] = useState<EnumAction>();

    function handleChangeAction(action: EnumAction) {
        setSelectedAction(action);
        setAction(action);

        if (action != EnumAction.SHARE) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                closeModal();
            }, 4000);
        } else {
            closeModal();
        }
    }

    function handleAction() {
        closeModal();
        setAction();
    }

    return (
        <ModalContainer
            animationType="slide"
            transparent={true}>
            {onlyMessage ?
                <ModalView>
                    <ButtonIcon onPress={closeModal}>
                        <CloseIcon width={24} height={24} stroke={"#2F5EB2"} />
                    </ButtonIcon>
                    <AlertIcon width={32} height={32} stroke={"#2F5EB2"} />
                    <ModalText>{message}</ModalText>
                    <Button handleFuncion={handleAction} >
                        Ok
                    </Button>
                </ModalView>
                :
                isLoading ?
                    <ModalView>
                        <Animation speed={0.8} animation={loading} />
                        {selectedAction == EnumAction.UPLOAD && <AnimationText>Enviando...</AnimationText>}
                        {selectedAction == EnumAction.REMOVE && <AnimationText>Excluindo...</AnimationText>}
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
                        <Button handleFuncion={() => handleChangeAction(EnumAction.SHARE)} >
                            Compartilhar
                        </Button>
                        <Button handleFuncion={() => handleChangeAction(EnumAction.REMOVE)} >
                            Excluir
                        </Button>
                    </ModalView>
            }
        </ModalContainer >
    );
}