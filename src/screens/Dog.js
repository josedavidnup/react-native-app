import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Dog/Header';
import Type from '../components/Dog/Type';
import Stats from '../components/Dog/Stats';
import { FontAwesome } from '@expo/vector-icons';
import Favorite from '../components/Dog/Favorite';
import useAuth from '../hooks/useAuth';

const Dog = ({ route: { params }, navigation }) => {
  const { dog } = params;
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={dog?.id} />,
      headerLeft: () => (
        <FontAwesome
          name='arrow-left'
          color={'#fff'}
          size={20}
          // style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  if (!dog) return null;
  return (
    <ScrollView>
      <Header
        name={dog.name}
        order={dog.order}
        image={dog.image}
        type={dog.type}
      />
      <Type type={dog.type} />
      <Stats stats={dog.stats} />
    </ScrollView>
  );
};

export default Dog;
