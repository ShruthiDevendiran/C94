import React,{Component} from 'react';
import{
View, 
Text, 
StyleSheet, 
Image
} from 'react-native';

export default class HomeScreen extends Component{
    constructor(props){
       super(props);
       this.state={
         time:[],
       }
    } 


   
    render(){
      
        return(
         
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View >
                  <Image source={require('../assets/1.jpg')} style={{width:200, height:200}}/>
               </View>
               <View>
                  <Text>Ding dong</Text>
               </View>
            </View>
        )
    }
}
