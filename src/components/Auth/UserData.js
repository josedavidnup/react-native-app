import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import { getDogFavoriteApi } from '../../api/favorite';

const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getDogFavoriteApi();
          setTotal(response?.length || 0);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMemu title='Name' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMemu title='Username' text={auth.username} />
        <ItemMemu title='Email' text={auth.email} />
        <ItemMemu title='Total Favorites' text={`${total} dogs`} />
        <View style={styles.btnLogout}>
          <Button title='Logout' onPress={logout} />
        </View>
      </View>
    </View>
  );
};

export default UserData;

function ItemMemu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 30,
  },
});
