import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { PokemonDetail } from '../screens/Pokedex';
import { getColorPokemonByType } from '../utils/getColorPokemonByType';
import { useNavigation } from '@react-navigation/native';
interface PokemonListProps {
  pokemon: PokemonDetail;
}

const PokemonCard: React.FC<PokemonListProps> = ({ pokemon }) => {
  const pokemonColor = getColorPokemonByType([pokemon.type]);
  const navigation = useNavigation();

  const bgStyles = {
    backgroundColor: pokemonColor[0],
    ...styles.bgStyles,
  };

  const goToPokemon = (): void => {
    navigation.navigate('Pokemon', { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              {/* #{`${pokemon.order}`.padStart(3, 0)} */}#{`${pokemon.order}`}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
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
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    textTransform: 'capitalize',
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
