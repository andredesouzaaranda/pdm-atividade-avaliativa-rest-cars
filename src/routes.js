import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Create from './pages/Create';
import List from './pages/List';
import About from './pages/About';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Create"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
