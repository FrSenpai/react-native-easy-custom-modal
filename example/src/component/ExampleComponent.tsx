import React from "react"
import { ModalContext } from "react-native-easy-custom-modal"
import { TouchableOpacity, Text, View } from "react-native"
export const ExampleComponent = () => {
    const { setModalProps, openModal } = React.useContext(ModalContext)
    return (
        <TouchableOpacity onPress={() => {
            setModalProps({
              component: (
                <View style={{height: 150, width: '100%'}}>
                  <Text>Modal HERE</Text>
                </View>
              ),
              visible: true
            })
            openModal()
          }}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
    )
}