import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import AccountScreen from '../screens/Account';
import { Image } from 'react-native';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const { Screen, Navigator } = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Navigator initialRouteName='Pokedex'>
      <Screen
        name='Favorite'
        component={FavoriteNavigation}
        options={{
          headerTitle: 'Favorite',
          headerTitleAlign: 'center',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='heart-o' size={size} color={color} />
          ),
          tabBarLabel: 'Favoritos',
          headerTitleAlign: 'center',
        }}
      />
      <Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerTitle: 'Account',
          headerTitleAlign: 'center',
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user-o' size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const renderPokeball = () => (
  <Image
    source={require('../assets/pokeball.png')}
    style={{ width: 75, height: 75, top: -15 }}
  />
);
