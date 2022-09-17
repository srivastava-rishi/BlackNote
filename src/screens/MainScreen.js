import React from 'react';
import {StatusBar, StyleSheet, Text, View ,Image} from 'react-native';

const MainScreen = () => {

  return (
<>
<StatusBar backgroundColor= "#141414" barStyle= "light-content"/>
<View style={styles.container}>

<View style = {styles.top}>
<Text style={styles.title}>MainScreen</Text>
</View>

<View style = {styles.bottom}>
<Text style={styles.title}>MainScreen</Text>
</View>
 
</View>

<View>


</View>
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