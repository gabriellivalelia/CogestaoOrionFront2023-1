import React, {useState} from "react";
import { View,Text, Image,StyleSheet,Dimensions,TextInput,Button,Alert, TouchableOpacity } from "react-native";
import { Botoes, BotoesTexto, EntradaEmail, Logo, Title } from "./Styles";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const number = "";



export default function Cadastro({navigation}){
    const [email, setEmail, nome, setNome] = useState(null)
    
    return(
        <View>
            <Logo source={require("../Images/logo.png")}/>
            <Title>LembraRápido</Title>
            <EntradaEmail placeholder="Digite seu nome completo" value={nome} ></EntradaEmail>
            <EntradaEmail placeholder="Digite seu endereço de e-mail" value={email} ></EntradaEmail>
            <Botoes>
                <BotoesTexto>Confirmar</BotoesTexto>
            </Botoes>
            <Botoes onPress={() => navigation.navigate('Login')}>
                <BotoesTexto>Cancelar</BotoesTexto>
            </Botoes>
        </View>
    );
}
/*
<View>
            <Image style={styles.logo} source={require('../Images/logo.png')} />
            <Title>LembraRápido</Title>
            
            <TextInput style={styles.inputs} value={email} placeholder="EMAIL" keyboardType="email-address" onChangeText={setEmail}/>
            
            <TouchableOpacity style={styles.botaoLogin}onPress={() => Alert.alert('Login')}>
                <Text style={styles.botaotexto}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.botaotexto}>CADASTRO</Text>    
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.botaotexto}>home</Text>    
            </TouchableOpacity>
            
        </View>*/