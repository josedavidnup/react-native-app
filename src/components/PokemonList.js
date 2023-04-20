import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flatListContentContainer}
    />
  );
};

export default PokemonList;

const style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    display: 'flex',
    justifyContent: 'space-between',
  },
});
