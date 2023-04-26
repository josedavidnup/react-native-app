import React from 'react';
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import DogCard from './DogCard';

const DogList = ({ dogs, loadDogs, nextUrl, isLoading }) => {
  const loadMore = () => {
    loadDogs();
  };

  return (
    <FlatList
      data={dogs}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(dog) => String(dog.id)}
      renderItem={({ item }) => <DogCard dog={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoading &&
        nextUrl && (
          <ActivityIndicator
            size={'large'}
            style={styles.spinner}
            color={'#AEAEAE'}
          />
        )
      }
    />
  );
};

export default DogList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
