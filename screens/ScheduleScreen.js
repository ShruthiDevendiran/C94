import React,{Component} from 'react';
import 
{View,
 Text, 
 StyleSheet,
 TouchableOpacity,
 ImageBackground,
} from 'react-native';
import SetTimeScreen from './SetTimeScreen';
import firebase from 'firebase';

export default class ScheduleScreen extends Component{
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
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button1} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Monday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button2} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Tuesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button3} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Wednesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button4} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Thursday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button5} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Friday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button6} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Saturday</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={this.props.navigation.navigate(SetTimeScreen)}>
                    <Text style={styles.day}>Tuesday</Text>
                 </TouchableOpacity>
                 
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})