import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/Favorite';
import DogScreen from '../screens/Dog';

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
        name='Dog'
        component={DogScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Navigator>
  );
};

export default FavoriteNavigation;
