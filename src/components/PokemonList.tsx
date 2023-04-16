import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { PokemonDetail } from '../screens/Pokedex';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: PokemonDetail[];
  loadPokemons: () => void;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  loadPokemons,
}) => {
  //   console.log('PokemonList---->', pokemons);

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size={'large'}
          style={styles.spinner}
          color={'#AEAEAE'}
        />
      }
    />
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
