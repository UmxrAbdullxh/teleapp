import React, {useState} from 'react';
import { StyleSheet, Button, View, TouchableHighlight } from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import DisplayComponent from '../components/displayComponent';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/core';

const Loctn = ()  => {

    const navigation = useNavigation();

    const [location, setLocation] = useState(null);
    const [disAddress, setDisAddress] = useState(null);
    const [code, setCode] = useState('');
    const [det, setDet] = useState([]);

    
  
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
  
      if(loc)
      {
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
          console.log(address);
        }
      };       

        const Dte = new Date().toISOString().slice(0, 10);
        // console.log(Dte);
      
      if(typeof(code)!='undefined'){
        const options = {
            method: 'GET',
            url: 'https://api.tvmaze.com/schedule?country=' + code + '&date=2017-10-11'  
        };

        axios.request(options).then((response)=>{
            // console.log(response.data);
            setDet(response.data);
        }).catch((error) => {
            console.log(error);
        });
        
    
      }

       
    
    }

    


    // const funcComb = () => {
    //     getLocation();
    //     getDet();
    // }

   



    return(
        <View style>
            <View>
                <Button 
                    title='GET SCHEDULE'
                    onPress={getLocation}
                />
            </View>
            <View>
                <DisplayComponent det={det}/>
            </View>
            <View style={styles.button}>
                            <Icon name="md-chatbubbles-outline" 
                            size={64} 
                            // color="#008388"
                            style={styles.icon}
                            onPress={()=>{navigation.navigate('Chat')}}
                            /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 50,
    // width: 60,
    height: 60,
    // backgroundColor: '#ffffff',
    marginTop: 470,
    marginLeft: 300
},
icon: {
    marginRight: -2,
    marginTop: -2
}
})
export default Loctn;