import React from 'react';
import {StatusBar, StyleSheet, Text, View ,Image} from 'react-native';

const CreateScreen = () => {

  return (
<>
<StatusBar backgroundColor= "#141414" barStyle= "light-content"/>
<View style={styles.container}>

<Text style={styles.title}>CreateScreen</Text>
 
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

export default CreateScreen;