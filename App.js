import { StatusBar } from 'expo-status-bar'; 
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
       <View>
         <HomeScreen/>
       </View>
    )
  }

}
