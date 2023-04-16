import { PokemonTypeColor } from './constants';

export const getColorPokemonByType = (types: string[]): string[] =>
  types.map(
    (type) => PokemonTypeColor[type as keyof typeof PokemonTypeColor] //this is how to type it
  );
