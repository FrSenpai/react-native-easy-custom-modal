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