import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='PokedexScreen'
        component={PokedexScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
