import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

import data from '../services/data';
import CarsDataHelper from '../helpers/CarsDataHelper';

import Header from '../components/Header';

const Item = ({ item }) => (
  <View style={styles.sectionItem}>
    <Text>ID: {item.id}</Text>
    <Text>Marca: {item.brand}</Text>
    <Text>Modelo: {item.model}</Text>
    <Text>Ano: {item.year}</Text>
  </View>
);

export default function Home() {
  const cars = CarsDataHelper(data);

  return (
    <View style={styles.container}>
      <Header />

      <SectionList
        sections={cars}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { brand } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{brand}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sectionItem: {
    width: 250,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
