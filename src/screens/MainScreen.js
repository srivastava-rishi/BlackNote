import React from 'react';
import {StatusBar, StyleSheet, Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SaveScreen from '../navigation/screen/SaveScreen';
import CreateScreen from '../navigation/screen/create/CreateScreen';
import SearchScreen from '../navigation/screen/SearchScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const MainScreen = () => {

  return (
<>
<Tab.Navigator

  screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {backgroundColor: '#181818' , borderTopWidth: 0,
    elevation: 0},
    tabBarInactiveTintColor: '#fff',
    tabBarActiveTintColor: '#30BE91',
  }}
>
      <Tab.Screen name="CreateScreen" component={CreateScreen} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )
      }}
       />
      <Tab.Screen name="SaveScreen" component={SaveScreen} options={{
        tabBarIcon: ({color, size}) => (
          <AntDesign name="staro" color={color} size={size} />
        )
      }}
      
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen}  options={{
        tabBarIcon: ({color, size}) => (
          <AntDesign name="search1" color={color} size={size} />
        )
      }}
      
       />
    </Tab.Navigator>
</>
    
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141414',
      flex: 1,
    },
    top: {
      alignItems: 'center'
    },
    title: {
      color: '#AEB6BD',
      fontSize: 18,
    },
    logo:{
      width: 100,
       height: 80
    }
  });

export default MainScreen;