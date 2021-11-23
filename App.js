import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import {
  ActionSheetProvider,
  connectActionSheet
} from '@expo/react-native-action-sheet';

import Routes from './src/routes';

function App() {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor="#f0f0f0" />
        <Routes />
      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});

const ConnectedApp = connectActionSheet(App);
export default ConnectedApp;
