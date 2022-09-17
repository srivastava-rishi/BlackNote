import React, {useState,useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View ,Image} from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() =>{
 
    //
    goToMainScreen()
 
  },[])


  const goToMainScreen = () => {
  
    setTimeout( () => {

      navigation.replace('Main')
     
    },2000)
     
   }


  return (
    <>
    <StatusBar backgroundColor= "#141414" barStyle= "light-content"/>
      <View style={styles.container}>
        <Image style={styles.logo}  source={require("../../assets/images/launch_logo.png")}></Image>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#AEB6BD',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    width: 100,
     height: 80
  }
});

export default SplashScreen;
