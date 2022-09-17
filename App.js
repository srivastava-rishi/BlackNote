/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

    <Stack.Navigator>

    <Stack.Screen name="Splash" 
    component={SplashScreen}
    options={{
      headerShown: false
  }}
    />

    <Stack.Screen name="Main" 
    component={MainScreen}
    options={{
      headerShown: false
  }}
    />
    
    
    </Stack.Navigator>

    </NavigationContainer>
  
    
  );
};

export default App;
