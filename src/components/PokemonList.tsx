import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React from 'react';
import { PokemonDetail } from '../screens/Pokedex';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: PokemonDetail[];
  loadPokemons: () => void;
  isNext: any;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  loadPokemons,
  isNext,
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
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
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
    // marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
    // marginBottom: Platform.OS === 'android' ? 30 : 0,
  },
});
