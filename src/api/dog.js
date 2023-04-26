import axios from 'axios';
import { API_DOGS } from '../utils/constans';

export async function getDogsApi(url) {
  try {
    const response = await axios.get(url || `${API_DOGS}/dogs`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDogsDetailsByUrlApi(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDogsDetailsApi(id) {
  try {
    const response = await axios.get(`${API_DOGS}/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
