import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert} from 'react-native';
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
            console.log(result);
            if(result._id){
              Alert.alert('SUCCESS!', 'Account created successfully', [
                  {
                      text: 'OK',
                      onPress: () => console.log('Button pressed')
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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setName(val)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setEmail(val)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
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
});

export default Signup;