import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

import Title from "../../components/Title/";
import Login from "../Login/";

import { FormContainer, Form, FormLabel, Input, ButtonCancelar, ButtonConfirmar } from "./Styles";

export default function Cadastro({ navigation }){

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)

    return(
        <FormContainer>
            <Title/>
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

                <ButtonCancelar
                title="Cancelar"/>

                <ButtonConfirmar
                title="Confirmar"
                onPress={ () => navigation.navigate(Login)}
                />
            </Form>
        </FormContainer>
    );
}