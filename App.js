import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/navigation/NavigationDrawer';
// import NavigationStack from './src/navigation/NavigationStack';
// import NavigationTab from './src/navigation/NavigationTab';

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}
