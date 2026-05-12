import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import HomeScreen from './screens/authorized/HomeScreen';
import ExpenseFormScreen from './screens/authorized/ExpenseFormScreen';
import { ExpenseContextProvider } from './store/expenseContext';
import { AuthContext, AuthContextProvider } from './store/authContext';
import LoginScreen from './screens/unauthorized/LoginScreen';
import SignupScreen from './screens/unauthorized/SignupScreen';

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

export default function App() {
  const authCtx = useContext(AuthContext);

  function Navigation() {

    const authCtx = useContext(AuthContext);

    return (
      <NavigationContainer>

        <Stack.Navigator screenOptions={style}>

          {authCtx.isAuthenticated ? (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
              />

              <Stack.Screen
                name="ExpenseForm"
                component={ExpenseFormScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerBackVisible: false,
                }}
              />

              <Stack.Screen
                name="SignUp"
                component={SignupScreen}
              />
            </>
          )}

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
  return (
    <>
      <StatusBar style='light' />
      <AuthContextProvider>
        <ExpenseContextProvider>
          <Navigation />
        </ExpenseContextProvider>
      </AuthContextProvider>
    </>
  );
}
