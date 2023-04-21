import { View, Text, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonFavoriteApi } from '../api/favorite';

const Favorite = () => {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title='Get favorites' onPress={checkFavorites} />
    </SafeAreaView>
  );
};

export default Favorite;
