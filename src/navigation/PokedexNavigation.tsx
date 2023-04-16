import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Pokemon' component={Pokemon} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
