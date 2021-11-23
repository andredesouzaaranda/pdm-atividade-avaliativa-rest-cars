import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Menu from '../Menu';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.headerImage}
      />

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    width: 160,
    height: 20,
    margin: 25,
  },
});
