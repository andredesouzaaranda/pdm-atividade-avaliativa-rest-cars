import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useActionSheet } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ['Sobre', 'Sair'];

  const aboutButtonIndex = 0;
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 2;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          showActionSheetWithOptions(
            {
              options,
              aboutButtonIndex,
              destructiveButtonIndex,
              cancelButtonIndex,
            },
            (buttonIndex) => {
              switch (buttonIndex) {
                case 0: navigation.navigate('About');
                  break;
                case 1: navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
                  break;
                default: break;
              }
            }
          );
        }}>
        <Ionicons name={'menu'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    marginRight: 25,
    color: '#e82127',
  },
});
