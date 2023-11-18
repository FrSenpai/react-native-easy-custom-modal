import React, { createContext } from "react"
import type { ViewStyle } from "react-native";
import type { Animation } from "react-native-animatable";
type Props = {
    children: React.ReactNode;
}
type ModalState = {
    visible: boolean;
    onClose: () => void;
    styles: {
        wrapper: ViewStyle;
        container: ViewStyle;
    };
    animation: {
        in: Animation;
        out: Animation;
        duration: number;
    };
}
export const ModalContext = createContext({
    openModal: () => {},
    closeModal: () => {},
    setModalProps: (props: Partial<ModalState>) => {
        props
    },
    modal: {
        visible: false,
        onClose: () => { },
        styles: {
            wrapper: {},
            container: {},
        },
        animation: {
            in: "",
            out: "",
            duration: 800,
        },
    }
})
export const ModalProvider = ({ children }: Props) => {
    const [modal, setModal] = React.useState<ModalState>({
        visible: false,
        onClose: () => { },
        styles: {
            wrapper: {},
            container: {},
        },
        animation: {
            in: "fadeIn",
            out: "bounceIn",
            duration: 800,
        },
    });

    const openModal = (): void => {
        setModal({
            ...modal,
            visible: true,
        });
    }

    const closeModal = ():void => {
        setModal({
            ...modal,
            visible: false,
        });
    }

    const setModalProps = (props: Partial<ModalState>): void => {
        setModal({
            ...modal,
            ...props,
        });
    }

    const value = {
        openModal,
        closeModal,
        setModalProps,
        modal,
    }
    
    return (
    <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>)
}