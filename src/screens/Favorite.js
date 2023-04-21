import React, { useState, useCallback } from 'react';
import { getPokemonFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth';
import { getPokemonsDetailsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { useFocusEffect } from '@react-navigation/native';
import NotLogged from '../components/NotLogged';

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonsDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other['official-artwork'].front_default,
              stats: pokemonDetails.stats,
            });
          }
          setPokemons([...pokemons, ...pokemonsArray]);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={pokemons} />;
};

export default Favorite;
