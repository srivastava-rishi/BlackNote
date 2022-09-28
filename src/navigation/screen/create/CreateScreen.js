import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const CreateScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#1C1C1C" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>BlackNote</Text>
        </View>

        <TouchableOpacity
        onPress = {() =>{
          navigation.navigate('CreateTask');
        }    
        }
         style={styles.button} 
         >
          <FontAwesome5 name={'plus'} size={20} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  top: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#30BE91',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 80,
  },
});

export default CreateScreen;
