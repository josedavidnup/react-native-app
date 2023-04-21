import axios from 'axios';
import { API_POKEMON } from '../utils/constans';

export async function getPokemonsApi(url) {
  try {
    const response = await axios.get(
      url || `${API_POKEMON}/pokemon?limit=20&offset=0`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByUrlApi(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsApi(id) {
  try {
    const response = await axios.get(`${API_POKEMON}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
