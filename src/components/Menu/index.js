import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useActionSheet } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();
  const route = useRoute();
  const { showActionSheetWithOptions } = useActionSheet();

  const options = route.name === 'Home' ? ['Sobre', 'Sair'] : ['Sair'];
  const aboutButtonIndex = route.name === 'Home' ? 0 : null;
  const destructiveButtonIndex = route.name === 'Home' ? 1 : 0;
  const cancelButtonIndex = route.name === 'Home' ? 2 : 1;

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
              if (route.name === 'Home') {
                if (buttonIndex === 0) {
                  navigation.navigate('About');
                } else {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  });
                }
              } else {
                if (buttonIndex === 0) {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  });
                }
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
