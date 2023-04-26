import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_STORAGE } from '../utils/constans';

export async function getDogFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    const responseJSON = JSON.parse(response);
    return responseJSON ? responseJSON : [];
  } catch (error) {
    throw error;
  }
}

export async function addDogFavorite(id) {
  try {
    const favorites = await getDogFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isDogFavoriteApi(id) {
  try {
    const favorites = await getDogFavoriteApi();
    return favorites.includes(id);
  } catch (error) {
    throw error;
  }
}

export async function removeDogFavoriteApi(id) {
  try {
    const currentFavorites = await getDogFavoriteApi();
    const index = currentFavorites.indexOf(id);

    const updatedFavorites = [
      ...currentFavorites.slice(0, index),
      ...currentFavorites.slice(index + 1),
    ];
    await AsyncStorage.setItem(
      FAVORITE_STORAGE,
      JSON.stringify(updatedFavorites)
    );
  } catch (error) {
    throw error;
  }
}
