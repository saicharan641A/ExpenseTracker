import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/authorized/HomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return(
  <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
