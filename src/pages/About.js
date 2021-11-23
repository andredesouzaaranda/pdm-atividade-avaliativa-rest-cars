import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.boxSuperior}>
            <TouchableOpacity
              activeOpacity={0.2}
            >
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              Versão 1.0.0
            </Text>
          </View>

          <View style={styles.boxInferior}>
            <Text style={styles.text}>
              Desenvolvido por
            </Text>
            <Text style={styles.authorName}>
              André de Souza Aranda
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://github.com/andredesouzaaranda')}>
              @andredesouzaaranda
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    shadowColor: 'rgba(207, 207, 207, 0.2)',
    shadowOffset: { width: 15, height: 15 },
  },
  logo: {
    width: 160,
    height: 20,
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
  authorName: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 18,
    color: 'blue',
    opacity: '65%',
  },
  boxSuperior: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInferior: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
