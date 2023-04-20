import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const { Navigator, Screen } = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Navigator>
      <Screen
        name='PokedexScreen'
        component={PokedexScreen}
        options={{ title: '', headerTransparent: true }}
      />
      <Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Navigator>
  );
};

export default PokedexNavigation;
