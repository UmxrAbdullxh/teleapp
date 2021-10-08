import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import { withNavigation } from 'react-navigation';
// import {Navigation} from 'react-native-navigation';

const Login = () => {

    const navigation = useNavigation();

    const handleLogin = () => {

        const url = 'https://aqueous-spire-85394.herokuapp.com/users/login';
        const creds = {
            'email': email,
            'password': password
        }

        axios.post(url, creds).then((res) => {
            const result = res.data;
            if(result.status!='SUCCESS'){
                console.log(message);
            }
            else {
                navigation.navigate('Home');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(email);
    // console.log(password);
    
    return(
        <View style={styles.content}>
            <StatusBar style="auto" />
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
            onPress={handleLogin}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.linkView}>
                <Text style={styles.linkText}>
                    Don't have an account?
                </Text>
                <Text
                style={styles.link}
                onPress={()=> {navigation.navigate('Signup')}}
                >
                    Signup
                </Text>
            </View>
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
    linkView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link: {
        color: 'blue',
        marginTop: 9.5,
        fontSize: 15

    },
    linkText: {
        marginTop: 10,
        fontSize: 15
    },
});

export default Login;