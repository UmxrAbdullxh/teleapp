import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';

const DisplayComponent = ({det}) => {

    const Item = ({name, time}) => {
        return(
            <View style={styles.listItem}>
                <Text style={styles.listName}>{name}</Text>
                <Text style={styles.listTime}>{time}</Text>
            </View>
        )
    }
    
    
    if(det.length===0){
        return(
            <View>
                <Text>
                    loading..
                </Text>
            </View>
        )
    }
    else{
        // return(
        //     <DataTable>
        //         <DataTable.Header>
        //             <DataTable.Title>Name</DataTable.Title>
        //             <DataTable.Title>Runtime</DataTable.Title>
        //         </DataTable.Header>
        //         {
        //             det.map((item,index) => (
        //                 <DataTable.Row key={index}>
        //                     <DataTable.Cell>{item.show.name}</DataTable.Cell>
        //                     <DataTable.Cell>{item.runtime}</DataTable.Cell>
        //                 </DataTable.Row>
        //             ))
        //         }
        //     </DataTable>
        // )
        // return(
        // <View>
        //             {
                        
        //                     det.map((item,index) => {
        //                         <View key={index} >
        //                             <Text>
        //                                 {item.show.name}
        //                             </Text>
        //                         </View>
        //                         console.log(item.show.name);
        //                     })
        //             }
        // </View>)
        return(
            <View>
                <FlatList 
                data={det}
                renderItem={({item}) => (
                    <Item name={item.show.name} time={item.show.schedule.time} />
                )}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create(
    {
        listItem: {
            backgroundColor: "#ddd",
            flexDirection: "row",
        },
        listName: {
            flex: 0.5,
            textAlign: "center",
            alignItems: "flex-start"
        },
        listTime: {
            flex: 0.5,
            alignItems: "flex-end",
        }
    }
)

export default DisplayComponent;