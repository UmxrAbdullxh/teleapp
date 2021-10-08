import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Entertainment Database</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        header:{
            backgroundColor: '#339FFF',
            height: 80,
            paddingTop: 38
        },
        title:{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25
        }
    }
)