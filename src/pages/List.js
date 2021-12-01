import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Header from '../components/Header';

import api from '../services/api';

const Item = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.listText}>ID: {item.id}</Text>
    <Text style={styles.listText}>Modelo: {item.model}</Text>
    <Text style={styles.listText}>Marca: {item.brand}</Text>
    <Text style={styles.listText}>HP: {item.hp}</Text>
  </View>
);

export default function List() {
  const [cars, setCars] = useState([]);

  const loadCars = async () => {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Lista de carros</Text>
      <FlatList
        data={cars}
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
    fontSize: 18,
  }
});
