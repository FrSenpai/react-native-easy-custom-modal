import React from "react"
import { ModalContext } from "react-native-easy-custom-modal"
import { TouchableOpacity, Text } from "react-native"
import { ExampleModalComponent } from "./ExampleModalComponent"

export const ExampleComponent = () => {
    const { setModalProps, modal } = React.useContext(ModalContext)
    const onPressOpenModal = () => {
      setModalProps({
        component: <ExampleModalComponent />,
        visible: true
      })
    }

    return (
        <TouchableOpacity onPress={onPressOpenModal}>
            <Text>Press here to open modal 🤯</Text>
        </TouchableOpacity>
    )
}