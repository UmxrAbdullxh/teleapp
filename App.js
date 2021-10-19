import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert} from 'react-native';
import 'react-native-gesture-handler';
// import RootStackDrawer from './navigators/drawer'


import RootStack from './navigators/rootstack';

export default function App() {

   
  return (
    <View style={styles.container}> 
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    }
  }
)