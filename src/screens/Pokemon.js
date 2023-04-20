import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import { FontAwesome } from '@expo/vector-icons';

const Pokemon = ({ route: { params }, navigation }) => {
  const { pokemon } = params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <FontAwesome
          name='arrow-left'
          color={'#fff'}
          size={20}
          // style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.image}
        type={pokemon.type}
      />
      <Type type={pokemon.type} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;
