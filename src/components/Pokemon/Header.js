import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import getColorByDogType from '../../utils/getColorByDogType';

const Header = ({ name, order, type, image }) => {
  const color = getColorByDogType(type[0].type.name);
  const bgStyle = { backgroundColor: color, ...styles.bgStyles };
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  bgStyles: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
    textTransform: 'capitalize',
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});
