import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getPokemonsApi, getPokemonDetailByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export interface PokemonDetail {
  id: number;
  name: string;
  type: string;
  order: number | string;
  image: string;
}

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonDetail>>([]);
  // console.log('Pokemons--->', pokemons);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray: any = [];
      for (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailByUrlApi(pokemon.url);
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
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
