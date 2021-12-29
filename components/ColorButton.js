import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from "react-native";

function ColorButton({backgroundColor, onPress=f=>f}) {
    return (
      <TouchableHighlight 
      style={styles.button} 
      onPress={()=> onPress(backgroundColor)}
      underlayColor="orange">
          <View style={styles.row}>
            <View style={[styles.sample, {backgroundColor}]}/>
             <Text style={styles.text} onPress={()=> setBackgroundColor("yellow")}>{backgroundColor}</Text>
          </View>
      </TouchableHighlight>
    )
  }

  export default ColorButton;




  const styles = StyleSheet.create({
    button:{
      fontSize: 20,
      margin: 10,
      padding: 2,
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: 'stretch',
      textAlign: 'center',
      backgroundColor: "rgba(255, 255, 255, .8)"
    },
    text:{
      
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    sample: {
      height: 20,
      width: 20,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "white"
    }
  });