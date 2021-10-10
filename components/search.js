// import React from 'react';
// import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert} from 'react-native';
// import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
// import Icon from "react-native-vector-icons";

// const Search = ({text, setText}) => {
//     return(
//         <View style={styles.searchSection}>
//             <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
//             <TextInput
//                 style={styles.input}
//                 placeholder="User Nickname"
//                 onChangeText={(val) => {setText(val)}}
//                 underlineColorAndroid="transparent"
//             />
//         </View>
//     )
// };

// const styles = StyleSheet.create(
//     {
//         searchSection: {
//             flex: 1,
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#fff',
//         },
//         searchIcon: {
//             padding: 10,
//         },
//         input: {
//             flex: 1,
//             paddingTop: 10,
//             paddingRight: 10,
//             paddingBottom: 10,
//             paddingLeft: 0,
//             backgroundColor: '#fff',
//             color: '#424242',
//         },
//     }
// );

// export default Search;