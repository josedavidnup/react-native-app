import { View, Button, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface LoginFormProps {
  goToPage: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ goToPage }) => {
  return (
    <View>
      <TextInput placeholder='Email' style={styles.textInput} />
      <TextInput
        placeholder='Password'
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Button title='Send' onPress={goToPage} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    fontSize: 20,
    backgroundColor: 'white',
  },
});
