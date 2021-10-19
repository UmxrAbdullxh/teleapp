import React from "react";
import { StyleSheet, View, Button} from "react-native";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
// import { Button } from "react-native-paper";


const Save = () => {

    saveFile = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            let fileUri = FileSystem.documentDirectory + "text.txt";
            await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync("Download", asset, false)
        }
    }
    
    return(
        <View style={styles.Btn}>
            <Button 
            title='SAVE'
            onPress={saveFile}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Btn:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Save;