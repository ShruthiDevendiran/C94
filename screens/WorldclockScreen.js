import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class WorldclockScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          dropdownHeight:40,
          worldTime:'',
          IST:'',
        }
    }

    ComponentDidMount(){}

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.jpg')} style={styles.logo}/>
               </View>
               <View style={styles.appTitle}>
                  <Text style={styles.title}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.BackgroundImage}/>
               </View>
               <View style={styles.textContainer}>
                 <Text style={styles.text}>WORLD CLOCK</Text>
               </View>
               <View style={styles.captionContainer}>
                  <Text style={styles.captions}>Calculated using Indian standard time</Text>
               </View>
               <View style={styles.dropdownContainer}>
                  <DropDownPicker
                  items={[
                    {label:USA},  //+10 hours 30 minute
                    {label:Europe}, // -4 hours 30 minutes
                    {label:Africa}, //-3 hours 30 minutes
                    {label:Antartica}, //+7 hours 30 minutes
                    {label:Australia}, // +5hours 30 minues
                    {label:SouthAmerica}, // - 9 hours 30 minutes
                    {label:GreenLand},//-6 hours 30 minutes
                    {label:NewZealand}//+7 hours 30 minutes                   
                  ]}
                  open={this.state.dropdownHeight=== 180? true:false}
                  defaultValue={India}
                  onOpen={()=>{this.setState({dropdownHeight:180})}}
                  onClose={()=>{this.setState({dropdownHeight:40})}}
                  style={styles.dropdownPicker}
                  textStyle={{color:black}}
                  onSelectTime={()=>{
                  }}
                  />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})