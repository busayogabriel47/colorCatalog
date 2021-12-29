import React, {useState, useRef}  from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';


function ColorForm({onNewColor=f => f}){
    const [inputValue, setInputValue] = useState("");

    const input = useRef(); //use to deselect the forminput
    console.log(" ->", inputValue)
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.txtInput} 
            ref={input} //use to deselect the forminput
            autoCapitalize="none"
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="enter a color"/>

            <Button title="add" 
            onPress={() => {input.current.blur();
            onNewColor(inputValue);
            setInputValue("")}}
            />
        </View>
    )
}

export default ColorForm;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        padding: 5,

    }
})