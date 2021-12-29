import React, {useEffect, useState} from 'react';
import {generate} from "shortid";
import { AsyncStorage } from 'react-native';


//Customm hook seperate the presentation from the functionality
const useColors = () => {
    const [colors, setColors] = useState([]);

    const loadColor = async () => {
        const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
        if(colorData){
            const colors =JSON.parse(colorData);
            setColors(colors)
        }
    }

    //load Colors
    useEffect(()=>{
        if(colors.length) return;
        loadColor()
    }, [])


//Save colors
    useEffect(() => {
        AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors ));
    }, [colors]);


    const addColor = color =>{
      const newColor = {id: generate(), color}
      setColors([newColor, ...colors])
    }
  
    return{colors, addColor}
  }
  

export default useColors;