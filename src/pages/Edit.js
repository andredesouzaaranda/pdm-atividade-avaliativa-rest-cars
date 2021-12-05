import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import { useRoute } from '@react-navigation/native';

import Header from '../components/Header';

import api from '../services/api';

export default function Edit() {
  const route = useRoute();
  const car = route.params.item;

  const [id, setId] = useState(car.id);
  const [model, setModel] = useState(car.model);
  const [brand, setBrand] = useState(car.brand);
  const [hp, setHP] = useState(Number(car.hp));

  const [error, setError] = useState('');

  const handleUpdateCar = async () => {
    if (!model || !brand || !hp) {
      setError('Preencha todos os campos!');
      return;
    } else if (isNaN(hp) || hp <= 0) {
      setError('Verifique a potência inserida!');
      return;
    }

    try {
      await api.patch(`/cars/${id}`, {
        model: model,
        brand: brand,
        hp: hp,
      });

      clearError();

      Alert.alert('Sucesso!', 'Automóvel atualizado!', [
        { text: 'OK' },
      ]);
    } catch (error) {
      // console.error(error);
      setError('Não foi possível atualizar!');
    }
  }

  const clearError = () => {
    setError('');
  }

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Editar Automóvel</Text>

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
          value={hp.toString()}
          onChangeText={setHP}
          placeholder="Potência"
          onFocus={() => clearError()}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button
          title="Atualizar"
          onPress={handleUpdateCar}
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
    color: '#e82127',
    textAlign: 'center',
    fontSize: 18,
  }
});
