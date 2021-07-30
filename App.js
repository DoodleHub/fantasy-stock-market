import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';
import Main from './components/main';
import TempScreen from './components/temp';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={TempScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={TempScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={TempScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }

  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </FirebaseContext.Provider>
  );
}