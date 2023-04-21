import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  addPokemonFavorite,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from '../../api/favorite';

const Favorite = ({ id }) => {
  const [isfavorite, setIsfavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsfavorite(response);
      } catch (error) {
        setIsfavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FontAwesome
      name={isfavorite ? 'heart' : 'heart-o'}
      size={20}
      color='#fff'
      onPress={isfavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export default Favorite;
