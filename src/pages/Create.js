import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

import api from '../services/api';

export default function Create() {
  const navigation = useNavigation();

  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [hp, setHP] = useState('');
  const [error, setError] = useState('');

  const handleRegisterCar = async () => {
    if (!model || !brand || !hp) {
      setError('Preencha todos os campos!');
      return;
    } else if (isNaN(hp) || hp <= 0) {
      setError('Verifique a potência inserida!');
      return;
    }

    try {
      await api.post('/cars', {
        model: model,
        brand: brand,
        hp: hp,
      });

      clearFields();

      Alert.alert('Sucesso!', 'Automóvel cadastrado!', [
        { text: 'OK' },
      ]);

      navigation.navigate('List');
    } catch (error) {
      // console.error(error);
      setError('Não foi possível cadastrar!');
    }
  }

  const clearFields = () => {
    setModel('');
    setBrand('');
    setHP('');
  }

  const clearError = () => {
    setError('');
  }

  useEffect(() => {
    clearFields();
    clearError();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Cadastrar Automóvel</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          value={model}
          onChangeText={setModel}
          placeholder="Modelo"
          autoFocus={true}
          onFocus={() => clearError()}
        />

        <TextInput
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
          placeholder="Marca"
          onFocus={() => clearError()}
        />

        <TextInput
          style={styles.input}
          value={hp}
          onChangeText={setHP}
          placeholder="Potência"
          onFocus={() => clearError()}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button
          title="Cadastrar"
          onPress={handleRegisterCar}
          color="#e82127"
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#e82127',
  },
});
