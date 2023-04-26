import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import getColorByDogType from '../../utils/getColorByDogType';

const Type = ({ type }) => {
  return (
    <View style={styles.content}>
      <Text>
        {type.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.pill,
                backgroundColor: getColorByDogType(item.type.name),
              }}
            >
              <Text style={{ textTransform: 'capitalize' }}>
                {item.type.name}
              </Text>
            </View>
          );
        })}
      </Text>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
