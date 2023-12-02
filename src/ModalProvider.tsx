import * as React from 'react'
import {Text} from 'react-native'
import {ModalContext} from './ModalContext'
import type { MProps } from './types/MProps'
import { CustomModal } from './CustomModal'

type Props = {
    children: React.ReactNode
}

export const ModalProvider = ({children}: Props) => {
    const [modal, setModal] = React.useState<MProps>({
        visible: false,
        onClose: () => {
            value.closeModal()
        },
        styles: {
            wrapper: {
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'flex-end',
            },
            container: {
                backgroundColor: 'white',
                width: '100%',
                alignSelf: 'center',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                padding: 16,
                paddingTop: 0,
                alignItems: 'center',
            },
        },
        animation: {
            in: 'slideInUp',
            out: 'slideOutDown',
            duration: 800,
        },
        component: <Text>Edit the default component with setModalProps methods.</Text>,
    })

    const value = React.useMemo(() => {
        const openModal = (): void => {
            setModal({
                ...modal,
                visible: true,
            })
        }

        const closeModal = (): void => {
            setModal({
                ...modal,
                visible: false,
            })
        }

        const setModalProps = (props: Partial<MProps>): void => {
            setModal({...modal, ...props})
        }
        return {
            openModal,
            closeModal,
            setModalProps,
            modal,
        }
    }, [modal])

    return (
        <ModalContext.Provider value={value}>
            {children}
            <CustomModal
                component={modal.component}
                visible={modal.visible}
                onClose={value.modal.onClose}
                animation={modal.animation}
                styles={modal.styles}
            />
        </ModalContext.Provider>
    )
}
