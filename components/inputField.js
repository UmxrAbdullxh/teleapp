import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InputField = ({labelText}) => {
    return(
        <View style={styles.wrapper}>
            <Text>{labelText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    }
});

export default InputField;