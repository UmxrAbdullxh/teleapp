import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Loctn from '../screens/location';
import Chatbot from '../screens/chatBot';
// import Save from '../screens/saveFile';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { NavigationActions } from 'react-navigation';


// const navigation = useNavigation();
const Stack = createNativeStackNavigator();

const pressHandler = () => {
    return(
       console.log('Button pressed')
    )
}

export default function RootStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                        <Icon
                            type="ionicon"
                            onPress={() => navigation.navigate('Location')}
                            name={Platform.OS === "ios" ? "ios-location" : "md-location"}
                        />
                        ),
                    })}

                
                /> 
                <Stack.Screen name="Login" component={Login} 
                    options={{
                        title: 'LOGIN',
                        headerStyle: {
                            backgroundColor: '#008388',
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />  
                <Stack.Screen name="Signup" component={Signup}
                    options={{
                        title: 'SINGUP',
                        headerStyle: {
                            backgroundColor: '#008388',
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />   
                <Stack.Screen name="Location" component={Loctn} />
                <Stack.Screen name="Chat" component={Chatbot} />
                {/* <Stack.Screen name="SAVE" component={Save} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const screens = {
//     Home: {
//       screen: Home
//     },
//     Login: {
//         screen: Login
//     },
//     Signup: {
//         screen: Signup
//     }
//   };

//   const RootStack = createStackNavigator(screens);

//   export default RootStack;

const styles = StyleSheet.create(
    {
        Btn: {
            justifyContent: 'flex-end',
        },
        iconContainer: {
            flexDirection: "row",
            justifyContent: 'flex-end',
            width: 120
        }
    }
)