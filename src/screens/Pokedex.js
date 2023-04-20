import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const responde = await getPokemonsApi(nextUrl);
      setNextUrl(responde.next);
      const pokemonsArray = [];
      for await (const pokemon of responde.results) {
        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [pokemons, nextUrl]);

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
