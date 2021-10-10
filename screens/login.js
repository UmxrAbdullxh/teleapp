import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome";

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
                            placeholder="Email."
                            placeholderTextColor="white"
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password."
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    {/* <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={handleLogin}
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity> */}
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
                        <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}>
                            <Icon name="angle-right" 
                            size={32} 
                            color="#008388"
                            style={styles.icon}
                            onPress={handleLogin}
                            /> 
                        </TouchableHighlight>
                       
                    </View>
                </View>
        
    );
}

const styles = StyleSheet.create({
    content: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#008388',
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
        // flex: 1,
        // padding: 10,
        // borderTopWidth: 0
        // /borderWidth: 0,
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
      loginText: {
        color: '#ffffff'
      },
    linkView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link: {
        color: 'blue',
        marginTop: 19.5,
        fontSize: 15

    },
    linkText: {
        marginTop: 20,
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 30
    },
    img: {
        width: 200,
        height: 200,
        marginTop: 50, 
        // marginTop: 0
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#ffffff',
        marginTop: 70,
        marginLeft: 50
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
});

export default Login;