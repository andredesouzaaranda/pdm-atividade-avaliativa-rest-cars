import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
} from 'react-native';

import Header from '../components/Header';

import api from '../services/api';

export default function Search() {
  const [id, setId] = useState('');
  const [car, setCar] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const handleSearchCar = async () => {
    if (!id || isNaN(id) || id <= 0) {
      setError('Verifique o id inserido!');
      return;
    }

    try {
      let car = await api.get(`/cars/${id}`);
      setCar(car.data);
      setId('');
      setModalVisible(true);
    } catch (error) {
      // console.error(error);
      setError('Id não encontrado!');
    }
  }

  const clearError = () => {
    setError('');
  }

  return (
    <View style={styles.container}>
      <Header />

      <View>
        <Modal
          animationType="fade"
          visible={modalVisible}
        >
          <View style={styles.containerModal}>
            <Text style={styles.title}>Automóvel</Text>

            <View style={styles.modalCard}>
              <Text style={styles.modalText}>ID: {car.id}</Text>
              <Text style={styles.modalText}>Modelo: {car.model}</Text>
              <Text style={styles.modalText}>Marca: {car.brand}</Text>
              <Text style={styles.modalText}>Potência: {car.hp}</Text>
            </View>

            <Button
              title="Fechar"
              onPress={() => { setModalVisible(false) }}
              color="#e82127"
            />
          </View>
        </Modal>

        <Text style={styles.title}>Pesquisar Automóvel</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={id}
            onChangeText={setId}
            placeholder="Digite o ID do automóvel"
            autoFocus={true}
            onFocus={() => clearError()}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Button
            title="Pesquisar"
            onPress={handleSearchCar}
            color="#e82127"
          />
        </View>
      </View >
    </View>
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
    margin: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    alignSelf: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
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
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f0f0f0',
  },
  modalCard: {
    width: 250,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  modalText: {
    fontSize: 18,
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
