import React, { useState, useCallback } from 'react';
import { getDogFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth';
import { getDogsDetailsApi } from '../api/dog';
import DogList from '../components/DogList';
import { useFocusEffect } from '@react-navigation/native';
import NotLogged from '../components/NotLogged';

const Favorite = () => {
  const [dogs, setDogs] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getDogFavoriteApi();
          const dogsArray = [];
          for await (const id of response) {
            const dogDetails = await getDogsDetailsApi(id);
            dogsArray.push({
              id: dogDetails.id,
              name: dogDetails.name,
              type: dogDetails.types,
              order: dogDetails.order,
              image: dogDetails.sprites.other['official-artwork'].front_default,
              stats: dogDetails.stats,
            });
          }
          setDogs([...dogs, ...dogsArray]);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <DogList dogs={dogs} />;
};

export default Favorite;
