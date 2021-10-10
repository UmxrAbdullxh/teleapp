import React, {useState} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';

const Loctn = ()  => {

    const [location, setLocation] = useState(null);
    const [disAddress, setDisAddress] = useState(null);
    const [code, setCode] = useState('loading..');
    const [det, setDet] = useState("");
    
  
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
          let cCode = `${item.isoCountryCode}`
          setCode(cCode);
          setDisAddress(address);
        }
      };
    }

    if(typeof(code)!='undefined'){

        const Dte = new Date();

        const options = {
            method: 'GET',
            url: 'https://api.tvmaze.com/schedule?country=' + code + '&date=' + Dte
        };

        const getDet = () => {

            axios.request(options).then((response)=>{
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
        
        // console.log(options.url)

    // }



    return(
        <View style={styles.container}>
            <View>
                <Button 
                    title='GET LOCATION'
                    onPress={getLocation}
                />
            </View>
            <View style={styles.locV}>
                <Text>{disAddress}</Text>
            </View>
            <View>
                <Button 
                    title='GET DETAILS'
                    onPress = {getDet}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locV: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Loctn;