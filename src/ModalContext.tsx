import React, {createContext} from 'react'
import {Text} from 'react-native'
import type { MProps } from './types/MProps'

export const ModalContext = createContext({
    openModal: () => {},
    closeModal: () => {},
    setModalProps: (props: Partial<MProps>) => {
        console.log(props)
    },
    modal: {
        visible: false,
        onClose: () => {},
        styles: {
            wrapper: {},
            container: {},
        },
        animation: {
            in: '',
            out: '',
            duration: 800,
        },
        component: <Text>Edit the default component with setModalProps methods.</Text>,
    },
})
