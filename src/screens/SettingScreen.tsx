import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

export default function SettingScreen(props: any) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
    </SafeAreaView>
  );
}
