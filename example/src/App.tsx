import React from 'react';
import { ModalProvider } from 'react-native-easy-modal';
import { Example } from './Example';

export default function App() {
  return (
    <ModalProvider>
      <Example></Example>
    </ModalProvider>
  );
}