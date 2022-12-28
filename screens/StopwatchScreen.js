import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity
} from 'react-native';

export default class StopwatchScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

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
                  <Text style={styles.text}>STOP WATCH</Text>
               </View>
               <View>

               </View>
               <View style={styles.buttonConatiner}>
                  <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Stop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button3}>
                    <Text style={styles.text}>Reset</Text>
                  </TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})