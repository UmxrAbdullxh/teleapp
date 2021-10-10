import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import { withNavigation } from 'react-navigation';
// import {Navigation} from 'react-native-navigation';

const Signup = () => {

    const navigation = useNavigation();

    const handleSignup = () => {

        const url = 'https://aqueous-spire-85394.herokuapp.com/users/signup';
        const creds = {
            'name': name,
            'email': email,
            'password': password
        }

        axios.post(url, creds).then((res)=>{
            const result = res.data;
            // console.log(result);
            if(result._id){
              Alert.alert('SUCCESS!', 'Account created successfully', [
                  {
                      text: 'OK',
                      onPress: () => console.log('Button pressed')
                  }
              ])
            }
            else{
                Alert.alert('FAILED', 'User with this email already exists!', [
                    {
                        text: 'OK',
                        onPress: () => console.log('Button Pressed')
                    }
                ])
            }
        }).catch(err => {
            console.log(err)
        })
    }


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <View style={styles.content}>
            <StatusBar style="auto" />
            <Image 
                     source={{uri: 'https://cdn.pixabay.com/photo/2020/05/09/17/09/boruto-5150531_960_720.png'}}
                     style={styles.img}
                     resizeMode={'cover'}
                     />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name."
                    placeholderTextColor="#ffffff"
                    onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#ffffff"
                    onChangeText={(val) => setEmail(val)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity 
            style={styles.loginBtn}
            onPress={handleSignup}
            >
                <Text style={styles.loginText}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: "#008388",
      alignItems: "center",
    //   justifyContent: "center",
    },
    inputView: {
        padding: 10,
    },
    TextInput: {
        marginTop: 30,
        marginBottom: 0,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        width: 300,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
      img:{
          width: 200,
          height: 200,
          marginTop: 50,
      },
      loginText: {
          color: '#ffffff'
      }
});

export default Signup;