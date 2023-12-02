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
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
