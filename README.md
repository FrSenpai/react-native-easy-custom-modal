# react-native-easy-custom-modal

No more headache with react native easy custom modal !

## Installation

```sh
npm install react-native-easy-custom-modal
```

## Usage

```js
//App.tsx example
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ModalProvider } from 'react-native-easy-custom-modal'
import { ExampleComponent } from './component/ExampleComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <ModalProvider>
        <ExampleComponent />
      </ModalProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
});
```

```js
//Component where you want to launch modal
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
```

```js
//Component of the modal
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ModalContext } from 'react-native-easy-custom-modal';

export const ExampleModalComponent = () => {
    const { closeModal } = React.useContext(ModalContext)
    return (
        <View style={styles.ctn}>
            <Text style={styles.title}>This is the title</Text>
            <Text style={styles.text}>This is the content</Text>
            <Pressable onPress={closeModal}>
                <Text style={styles.text}>Press to close or press outside the content 🤯</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    ctn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    text: {
        fontSize: 16
    },
    ctnPressable: {
        marginTop: 12
    }
})
```

## Dependencies

This library needs [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/) and [moti](https://moti.fyi/installation) to work.

## Modal props

| Props name  | Description |
| ------------- | ------------- |
| openModal  | Function to open the modal.  |
| closeModal  | Function to close the modal.  |
| setModalProps  | Function to set new props to the modal.  |
| modal  | Object which contains modal props.  |
| Modal props  | Description |
| visible  | Define if the modal is visible or not. Boolean, default as false  |
| onClose  | Function called to close the modal.  |
| styles  | Object that contains wrapper & container attributes, take basic view style props from react native  |
| animation  | Object that contains animation params (duration: number) |
| component  | The component that needs to be displayed in the modal. |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
