import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';

import api from '../services/api';

export default function List() {
  const navigation = useNavigation();

  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  const loadCars = async () => {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
      clearError();
    } catch (error) {
      // console.error(error);
      setError('Não foi possível Listar!');
    }
  }

  const handleDeleteCar = async (id) => {
    try {
      await api.delete(`/cars/${id}`);
      setCars(cars.filter(car => car.id !== id));
    } catch (error) {
      // console.error(error);
      setError('Não foi possível deletar!');
    }
  }

  const Item = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>ID: {item.id}</Text>
      <Text style={styles.listText}>Modelo: {item.model}</Text>
      <Text style={styles.listText}>Marca: {item.brand}</Text>
      <Text style={styles.listText}>Potência: {item.hp}</Text>
      <View style={styles.containerIcons}>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={40} color="green"
            onPress={() => { navigateToEdit(item) }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={40} color="#e82127"
            onPress={() => { showAlertDelete(item.id) }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  function navigateToEdit(item) {
    navigation.navigate('Edit', { item });
  }

  const clearError = () => {
    setError('');
  }

  const showAlertDelete = (id) => {
    Alert.alert('Alerta!', 'Deseja excluir o Automóvel?', [
      { text: 'Cancelar' },
      { text: 'Sim', onPress: () => { handleDeleteCar(id) } },
    ]);
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Listar Automóveis</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <FlatList
        data={cars}
        extraData={cars}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  listItem: {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  listText: {
    fontSize: 20,
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  error: {
    width: 250,
    height: 25,
    margin: 10,
    color: '#e82127',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
});
