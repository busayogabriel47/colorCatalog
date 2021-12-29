import * as React from 'react';
import ColorList from './components/colorList';
import ColorDetails from './components/colorDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" options={{title: "Color List"}} component={ColorList}/>
            <Screen name="Details" component={ColorDetails}/>
        </Navigator>
    </NavigationContainer>
  )
}