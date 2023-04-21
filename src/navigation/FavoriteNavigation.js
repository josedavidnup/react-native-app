import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/Favorite';
import PokemonScreen from '../screens/Pokemon';

const { Navigator, Screen } = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Navigator>
      <Screen
        name='FavoriteScreen'
        component={FavoriteScreen}
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

export default FavoriteNavigation;
