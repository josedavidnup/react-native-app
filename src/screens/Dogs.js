import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDogsApi, getDogsDetailsByUrlApi } from '../api/dog';
import DogList from '../components/DogList';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await loadDogs();
    })();
  }, []);

  const loadDogs = useCallback(async () => {
    try {
      setLoading(true);
      const responde = await getDogsApi(nextUrl);
      setNextUrl(responde.next);
      const dogsArray = [];
      for await (const dog of responde.results) {
        const dogDetails = await getDogsDetailsByUrlApi(dog);
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [dogs, nextUrl]);

  return (
    <SafeAreaView>
      <DogList
        dogs={dogs}
        loadDogs={loadDogs}
        nextUrl={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  );
};

export default Dogs;
