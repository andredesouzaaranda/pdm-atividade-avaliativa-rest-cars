import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

export default function Create() {
  const navigation = useNavigation();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [hp, setHP] = useState('');
  const [error, setError] = useState('');

  const handlePost = async () => {
    if (!brand || !model || !hp) {
      setError('Preencha todos os campos!');
      return;
    } else {
      setError('');
    }

    try {
      await api.post('/cars', {
        model: model,
        brand: brand,
        hp: hp,
      });

      navigation.navigate('List');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerImage}
        />

        <Text style={styles.title}>Cadastrar carro</Text>

        <TextInput
          style={styles.input}
          onChangeText={setModel}
          placeholder="Modelo"
          autoFocus={true}
        />

        <TextInput
          style={styles.input}
          onChangeText={setBrand}
          placeholder="Marca"
        />

        <TextInput
          style={styles.input}
          onChangeText={setHP}
          placeholder="HP"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button
          title="Cadastrar"
          onPress={handlePost}
          color="#e82127"
        />
      </View>
    </View >
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
    width: 350,
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    shadowColor: 'rgba(207, 207, 207, 0.2)',
    shadowOffset: { width: 15, height: 15 },
  },
  headerImage: {
    width: 200,
    height: 25,
    margin: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 60,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    fontSize: 20,
  },
  error: {
    width: 250,
    height: 25,
    margin: 10,
    color: '#e82127',
    textAlign: 'center',
    fontSize: 18,
  }
});
