import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonDetailApi } from '../api/pokemon';

type Props = {
  navigation: any;
  route: any;
};

const Pokemon: React.FC<Props> = ({ navigation, route: { params } }) => {
  const [pokemon, setPokemon] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) {
    return null;
  }

  return (
    <View>
      <Text>We are on Pokemon...</Text>
    </View>
  );
};

export default Pokemon;
