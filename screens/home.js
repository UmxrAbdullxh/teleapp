import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image} from 'react-native';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import * as Location from "expo-location";

export default function Home() {

  const [location, setLocation] = useState(null);
  const [disAddress, setDisAddress] = useState(null);
  

  const getLocation = async() => {

    let {status} = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);

    let lat=loc.coords.latitude;
    let long = loc.coords.longitude;

    // console.log(lat);

    if(loc){
      let res = await Location.reverseGeocodeAsync(
        {
          latitude: lat,
          longitude: long
        }
      )

      for (let item of res){
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        setDisAddress(address);
      }
    };

  }

  

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
    console.log(yrOld);
  }
 
    
  return(
    <View>
      <View>
        <Text style={styles.inputText}>Enter Name</Text>
        <SafeAreaView style={styles.content}>
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
      </View>
      <View style={styles.vImg}>
        <Image 
        style={styles.img}
        source={{uri}}
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
        <Text>
          Summary: {result}
        </Text>
      </View>
      <View>
        <Text>
          This show is {yrOld} years old!
        </Text>
      </View>
      <View>
        <Button 
        title='GET LOCATION'
        onPress={getLocation}
        />
      </View>
      <View style={styles.locV}>
        <Text>{disAddress}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  locV: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vImg: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width:200,
    height:250,
  },
  summ:{
    margin:5
  }
});