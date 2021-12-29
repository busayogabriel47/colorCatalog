
import React from 'react';
import Color from 'color'
import { StyleSheet, 
  Text, View, 
  ActivityIndicator, 
  Button, 
  Dimensions,
ProgressBarAndroid,
ProgressViewIOS, Image, FlatList, ScrollView, Alert} from 'react-native';





export default function ColorDetails({ route }) {

  const {color: name } = route.params;
  const color = Color(name);
  const textColor = {fontSize: 30, color: color.negate().toString()}
return (
    <View style={[styles.container, {backgroundColor: name}]}>
        <Text style={textColor}>{name}</Text>
        <Text style={textColor}>{color.rgb().toString()}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})