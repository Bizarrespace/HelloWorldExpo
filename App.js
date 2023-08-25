import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View

      style = {{
        flex: 1,
        backgroundColor: '#3DB2FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text
          style = {{
            color: '#FF351D',
          }}> 
          Hello there</Text>
        
        <Text>{"\n"}This is my first enterprise level React Native app</Text>
        
      </View>
  );
};

export default HelloWorldApp;