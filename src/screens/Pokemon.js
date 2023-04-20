import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';

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
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export default Pokemon;
