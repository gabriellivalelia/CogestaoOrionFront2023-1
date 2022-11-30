import React from "react";
import { View,Text, Image,StyleSheet,Dimensions,TextInput,TouchableOpacity } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const number = 10;



export default function Login(){
    return(
        <View>
            <Image style={styles.logo} source={require('../Images/logo.png')} />
            <Text style={styles.title}>LembraRápido</Text>
            <TextInput style={styles.inputs} value={number} placeholder="NOME COMPLETO" keyboardType="default"/>
            <TextInput style={styles.inputs} value={number} placeholder="EMAIL" keyboardType="email-address"/>
            <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.botaotexto}>CADASTRO</Text>    
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        paddingTop: height*0.08,
        fontWeight: "bold",
        fontSize:25,
        alignSelf: "center"
        
    },
    logo:{
        alignSelf: 'flex-start',
        top: height*0.10,
        alignSelf: "center"
    },
    inputs:{
        alignSelf: "center",
        top: height*0.03,
        width: width*0.6,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    botaoCadastro: {
        alignSelf: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        paddingVertical:15,
        elevation: 5,
        borderRadius: 100,
        top: 40,
        width: width*0.5
      },
    botaotexto:{
        alignSelf: 'center'
    }
    
    
})