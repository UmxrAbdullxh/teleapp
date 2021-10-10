import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Loctn from '../screens/location';

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
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
                <Stack.Screen name="Home" component={Home} /> 
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

