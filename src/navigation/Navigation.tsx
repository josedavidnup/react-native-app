import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='heart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={Pokedex}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
