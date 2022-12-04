import React, {useState} from "react";
import { View,Text, Image,StyleSheet,Dimensions,TextInput,Button,Alert, TouchableOpacity } from "react-native";
import { Botoes, BotoesTexto, ButtonCreate, EntradaDescricao, EntradaEmail, EntradaTitulo, FormsdosLembretes, LembretesViewButtons, Logo, Title } from "./Styles";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const number = "";



export default function CadastrarLembrete({navigation}){
    const [email, setEmail, nome, setNome] = useState(null)
    
    return(
        <View>
            <Title>Cadastrar Lembrete</Title>
            <FormsdosLembretes >
                <EntradaTitulo placeholder="Adicione um Titulo">

                </EntradaTitulo>
                <EntradaDescricao placeholder="Adicione uma Descrição" multiline={true} numberOfLines={10}>

                </EntradaDescricao>
            </FormsdosLembretes>
            <LembretesViewButtons>
                <Botoes>
                    <BotoesTexto>Cancelar</BotoesTexto>
                </Botoes>
                <Botoes>
                    <BotoesTexto>Confirmar</BotoesTexto>
                </Botoes>
            </LembretesViewButtons>
        </View>
    );
}