import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity
} from 'react-native';

export default class TimerScreen extends Component{
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
                  <Text style={styles.text}>TIMER</Text>
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button} onPress>
                  <Text style={styles.buttonText}>5 minutes</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button} onPress>
                  <Text style={styles.buttonText}>10 minutes</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button} onPress>
                  <Text style={styles.buttonText}>30 minutes</Text>
                 </TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})