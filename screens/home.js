import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image, Dimensions, ScrollView} from 'react-native';
import axios from 'axios';
import Search from '../components/search';
import { DataTable } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";


export default function Home() {


  const [details, setDetails] = useState([{"language": "",
                                            "name": "",
                                            "status": "",
                                            "premiered": "",
                                            "summary": "loading..",
                                            "original": "",
                                          }]);

  
  const [text, setText] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!text.trim()) {
        alert('Please Enter Name');
        return;
    }
  }
    

  const options = {
    method: 'GET',
    url: 'https://api.tvmaze.com/search/shows?q=' + text
  };
    
 
  const getDetails = () => {
    axios.request(options).then(function (response) {
      // console.log(response.data[0].show);
      setDetails(response.data[0].show)
    }).catch(function (error) {
      console.error(error);
    });
  
  };

  const funcCombined = () => {
    checkTextInput();
    getDetails();
  }

  let result = "";
  
  
  if(typeof(details.summary)!='undefined'){
    // console.log(details.summary);
    const regex = /(<([^>]+)>)/ig;
    result = details.summary.replace(regex, '');
  }

  let uri = 'loading..';

  if(typeof(details.image)!='undefined'){
    uri = details.image.medium;
    // console.log(uri);
  }

  let yrOld = '';
  
  if(typeof(details.premiered)!='undefined'){
    let currentDate = new Date();
    var dateStr = details.premiered;
    var dateString = dateStr.split('-').join('');
    var year = dateString.substring(0,4);
    var month = dateString.substring(4,6);
    var day = dateString.substring(6,8);
    var date = new Date(year, month-1, day);
    let difference= currentDate.getTime()-date.getTime();
    let msInDay = 1000*3600*24;
    let nodays = (difference/msInDay);
    yrOld = (Math.round(nodays/365*100))/100;
  }

  // const win = Dimensions.get('window');
 
    
  return(
    <View>
      <ScrollView>
      <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="search" size={20} color="#000"
          onPress={funcCombined}
          />
          <TextInput
            style={styles.inputIcon}
            placeholder="User Nickname"
            onChangeText={(val) => {setText(val)}}
            underlineColorAndroid="transparent"
          />
      </View>
      {/* <View style={styles.head}> 
        <SafeAreaView style={styles.content}>
          <Icon 
          name="search"
          size={32}
          color='gray'
          style={styles.icon}
          />
          <TextInput 
            style ={styles.input}
            placeholder = 'e.g Game of Thrones'
            onChangeText = {(val) => setText(val)}
          />
        </SafeAreaView>
        <View style={styles.button}>
          <Button 
            title = 'GET DETAILS' 
            onPress={funcCombined}
            color='#FFFFFF'
          />
        </View>
      </View>  */}
      <View style={styles.vImg}>
        <Image 
        style={styles.img}
        source={{uri}}
        resizeMode='contain'
        />
      </View>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Language</DataTable.Title>
        <DataTable.Title numeric>Name</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
        <DataTable.Title numeric>Released</DataTable.Title>
        {/* <DataTable.Title numeric>Genre</DataTable.Title> */}
        {/* <DataTable.Title numeric>Image</DataTable.Title> */}
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>{details.language}</DataTable.Cell>
        <DataTable.Cell numeric>{details.name}</DataTable.Cell>
        <DataTable.Cell numeric>{details.status}</DataTable.Cell>
        <DataTable.Cell numeric>{details.premiered}</DataTable.Cell>
        {/* <DataTable.Cell numeric>{details.genre}</DataTable.Cell> */}
        {/* <DataTable.Cell numeric>
          <Image 
          source={{url: {details[0].i.ImageUrl}}}
          />
        </DataTable.Cell> */}
      </DataTable.Row>
      </DataTable>
      <View style={styles.summ}>
        <Text style={styles.synpText}>
          Synopsis:
        </Text>
        <Text style={styles.summText}>
          {result}
        </Text>
      </View>
      {/* <View>
        <Text>
          This show is {yrOld} years old!
        </Text>
      </View> */}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head:{
    flexDirection: 'row',
  },
  inputText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 25
  },
  input: {
   marginBottom: 10,
   paddingHorizontal: 8,
   paddingVertical: 6,
   borderBottomWidth: 1,
   borderBottomColor: '#ddd',
   marginTop: 20,
   marginLeft: 80,
   width: 200
  },
  icon: {
    marginRight: 200
  },
  content:{
    alignItems: 'center'
  },
  button:{
    margin: 60,
    marginTop: 0,
    backgroundColor: '#007AFF',
    marginBottom: 10
  },
  vImg: {
    flexDirection: 'row',
  },
  img: {
    // flex:1,
    flex: 1,
    aspectRatio: 1 
  },
  summ:{
    margin:5
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    // marginTop: 20
  },
  searchIcon: {
    padding: 10,
    marginTop: -5
  },
  inputIcon: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  synpText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  summText: {
    marginTop: 2
  }
});