import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

const PokemonCard = ({ pokemon }) => {
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`Es pokemon ${pokemon.name}`);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyle}>
              <Text style={styles.number}>
                #{`${pokemon.id}`.padStart(3, 0)}
              </Text>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: '#fff',
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  number: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 11,
    color: '#fff',
  },
});
