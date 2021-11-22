import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import {
  ActionSheetProvider,
  connectActionSheet
} from '@expo/react-native-action-sheet';

import Menu from '../Menu';

function Header() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/logo.svg')}
          style={styles.headerImage}
        />

        <Menu />
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
  },
  headerImage: {
    width: 100,
    height: 12,
    margin: 25,
  },
});

const ConnectedApp = connectActionSheet(Header);

export default ConnectedApp;
