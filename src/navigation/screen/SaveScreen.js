import React from 'react';
import {StatusBar, StyleSheet, Text, View ,Image} from 'react-native';

const SaveScreen = () => {

  return (
<>
<StatusBar backgroundColor= "#1C1C1C" barStyle= "light-content"/>
<View style={styles.container}>

<Text style={styles.title}>SaveScreen</Text>
 
</View>

</>
    
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C1C1C',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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

export default SaveScreen;