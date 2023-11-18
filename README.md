# react-native-easy-custom-modal

No more headache with react native easy custom modal ! 

## Installation

```sh
npm install react-native-easy-custom-modal --save
```

## Usage

```js
export default function App() {
  return (
    <ModalProvider>
      <Example></Example>
    </ModalProvider>
  );
}

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CustomModal, ModalContext } from 'react-native-easy-custom-modal';
export const Example = () => {
    const { openModal, closeModal, modal: { visible } } = React.useContext(ModalContext);
    const onPress = () => {
        openModal()
    }
    const onClose = () => {
        closeModal()
    }
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={onPress}>
                    <Text>Click to open the modal</Text>
                </Pressable>
            </View>
            <CustomModal visible={visible} onClose={onClose} animation={{ in: "fadeIn", out: "bounce" }} styles={{
                wrapper: styles.customModalWrapper,
                container: styles.customModalContainer,
            }} >
                <View style={{ width: '40%', backgroundColor: "rgba(0,0,0,0.75)", height: 8, marginVertical: 8, borderRadius: 4.5 }}></View>
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 4 }}>Modal Content, wow that was difficult ! 😱</Text>
                <Text>Click outside to close it 🤯</Text>
            </CustomModal>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
    customModalContainer: {
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 16,
        paddingTop: 0,
        alignItems: "center",
    },
    customModalWrapper: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
    }
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
