import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function HomeScreen(props: any) {
  const { navigation } = props;

  const goToPage = (): void => {
    navigation.navigate('Setting');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <LoginForm goToPage={goToPage} />
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f1f1',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 30,
    color: 'gray',
  },
});
