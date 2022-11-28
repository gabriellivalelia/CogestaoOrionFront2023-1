import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/'
import Cadastro from './src/pages/Cadastro/'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Cadastro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
