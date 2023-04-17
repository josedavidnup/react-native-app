import axios from 'axios';
import { API_POKEMON } from '../utils/constants';

export async function getPokemonsApi(endpoint: string) {
  try {
    const url = `${API_POKEMON}/pokemon?limit=20&offset=0`;
    const response = await axios.get(endpoint || url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailByUrlApi(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailApi(id: number) {
  try {
    const url = `${API_POKEMON}/pokemon${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
