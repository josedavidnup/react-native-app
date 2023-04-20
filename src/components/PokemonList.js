import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, loadPokemons, nextUrl, isLoading }) => {
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
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoading &&
        nextUrl && (
          <ActivityIndicator
            size={'large'}
            style={styles.spinner}
            color={'#AEAEAE'}
          />
        )
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
