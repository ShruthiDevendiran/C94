import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';

import DrawerNavigator from '../navigation/DrawerNavigator'

export default class DashboardScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <NavigationContainer>
                  <DrawerNavigator/>
               </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})