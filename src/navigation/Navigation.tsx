import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='heart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          headerTitleAlign: 'center',
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
