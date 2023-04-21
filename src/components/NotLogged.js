import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        You should be logged to see your favorite pokemons
      </Text>
      <Button
        title='Go to Login'
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
};

export default NotLogged;

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
