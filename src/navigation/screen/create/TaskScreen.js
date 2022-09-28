import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TaskScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#262626" barStyle="light-content" />
      <View style={styles.container}>
        <View style = {styles.top}>
          <MaterialIcons
            style={styles.back}
            name={'arrow-back-ios'}
            size={25}
            color={'#30BE91'}
          />
          <TextInput 
           style={styles.title}
           placeholder = 'Title'
           placeholderTextColor="#808080" 
          />
        </View>
        <TextInput 
           style={styles.content}
           placeholder = 'Content'
           placeholderTextColor="#808080" 
           multiline
          />

          <TouchableOpacity>

           <Text>
  
           </Text>
          
          </TouchableOpacity> 

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flex: 1,
  },
  back: {
    
  } ,
  top: {
    left: 15,
    top: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#AEB6BD',
    fontSize: 22,
  },
  content: {
    margin:15,
    color: '#AEB6BD',
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 80,
  },
});

export default TaskScreen;
