import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DogsScreen from '../screens/Dogs';
import DogScreen from '../screens/Dog';

const { Navigator, Screen } = createNativeStackNavigator();

const DogsNavigation = () => {
  return (
    <Navigator>
      <Screen
        name='DogsScreen'
        component={DogsScreen}
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

export default DogsNavigation;
