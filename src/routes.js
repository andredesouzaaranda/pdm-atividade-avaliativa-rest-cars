import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Create from './pages/Create';
import List from './pages/List';
import Search from './pages/Search';
import Edit from './pages/Edit';

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
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
