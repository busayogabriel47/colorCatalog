


import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import ColorButton from './ColorButton';
import ColorForm from './colorForm';
import useColors from './hook'
import { StyleSheet, 
  Text, View, 
  ActivityIndicator, 
  Button, 
  Dimensions,
ProgressBarAndroid,
ProgressViewIOS, Image, FlatList, ScrollView, Alert} from 'react-native';





export default function ColorList( {navigation}) {

const {colors, addColor} = useColors();//Custom hook


const {height, width} = Dimensions.get('window');

  const onButtonPress = () =>{
    console.log(`${new Date().toLocaleDateString()} button press`)
  }
  
  return (
    <>
        <ColorForm onNewColor={addColor}/>
        <FlatList style={styles.container}
          data={colors}
          renderItem={({item}) => {
            return(
              <ColorButton 
              key={item.id} 
              backgroundColor={item.color}
              onPress={()=> navigation.navigate("Details", {color: item.color })}/>
            )
          }}
        />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image:{
    flex: 1,
    borderRadius : 50,
    margin: 10,
  },
})
