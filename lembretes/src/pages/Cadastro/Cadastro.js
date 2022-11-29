import React, {useState} from "react";
import {View, Text} from "react-native";
import { Form, FormContainer, FormLabel, Input, ButtonCancelar, ButtonConfirmar } from "./Styles";

function Cadastro(){ 
 
    const [nome, setNome] = useState(null) 
    const [email, setEmail] = useState(null) 
 
    return( 
        <FormContainer> 
            <Form> 
 
                <FormLabel>Nome Completo</FormLabel> 
                <Input 
                onChangeText={setNome} 
                value={nome} 
                placeholder="Digite seu nome completo" 
                /> 
                 
                <FormLabel>E-MAIL</FormLabel> 
                <Input 
                onChangeText={setEmail} 
                value={email} 
                placeholder="Digite seu endereço de e-mail" 
                /> 
                <ButtonCancelar title="Cancelar"/> 
                <ButtonConfirmar 
                title="Confirmar" 
                onPress={ () => navigation.navigate('Login')} 
                /> 
            </Form> 
        </FormContainer> 
    ); 
}

export default Cadastro