import React from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Home(){
    return(
        <View>
            <Text style={styles.title}>Olá, </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        paddingTop: height*0.08,
        fontWeight: "bold",
        fontSize:40,
        alignSelf: "center"
    },
})