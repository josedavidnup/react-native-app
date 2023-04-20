import React from 'react';
import { Text, ScrollView } from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';

const Pokemon = ({ route }) => {
  const { pokemon } = route.params;

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
    </ScrollView>
  );
};

export default Pokemon;
