import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/authorized/HomeScreen';

const Stack = createNativeStackNavigator();

const style = {
  headerStyle: { backgroundColor: '#0F172A' },
  headerTintColor: '#F1F5F9',
  contentStyle: {
    backgroundColor: '#0F172A',
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center',
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={style}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <RootStack />
    </NavigationContainer>
  );
}
