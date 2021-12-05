import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ['Cadastrar', 'Listar', 'Pesquisar'];
  const createButtonIndex = 0;
  const listButtonIndex = 1;
  const searchButtonIndex = 2;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          showActionSheetWithOptions(
            {
              options,
              createButtonIndex,
              listButtonIndex,
              searchButtonIndex,
            },
            (buttonIndex) => {
              switch (buttonIndex) {
                case createButtonIndex:
                  navigation.navigate('Create');
                  break;
                case listButtonIndex:
                  navigation.navigate('List');
                  break;
                case searchButtonIndex:
                  navigation.navigate('Search');
                  break;
                default:
                  break;
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
