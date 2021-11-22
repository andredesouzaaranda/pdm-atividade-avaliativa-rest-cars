import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    if (user === 'teste' && password === '123') {
      navigation.navigate('Home');
    }

    setError('Usuário ou senha inválidos');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/logo.svg')}
          style={styles.headerImage}
        />

        <TextInput
          style={styles.input}
          onChangeText={setUser}
          placeholder="Usuário, Email ou Telefone"
          autoFocus={true}
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry="true"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          activeOpacity={0.2}
          onPress={handleLogin}
        >
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  headerImage: {
    width: 200,
    height: 25,
    margin: 25,
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  buttonImage: {
    width: 50,
    height: 50,
    margin: 25,
  },
  error: {
    width: 250,
    height: 25,
    padding: 5,
    textAlign: 'center',
    color: '#e82127',
  }
});
