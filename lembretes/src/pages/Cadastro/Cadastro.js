import React, { useState } from "react";

import Title from "../../components/Title";
import { LogoImage, Form, FormContainer, FormLabel, FormInput, Input, ButtonForm, ButtonCancelar, ButtonConfirmar, ButtonText } from "./Styles";

import Icon from 'react-native-vector-icons/AntDesign';

function Cadastro({ navigation }) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
            <Form>
                <FormLabel>Nome Completo</FormLabel>
                <FormInput>
                    <Input
                        onChangeText={setNome}
                        value={nome}
                        placeholder="Digite seu nome completo"
                    />
                    <Icon name="idcard" size={25} color={"#510F71"} />
                </FormInput>


                <FormLabel>E-MAIL</FormLabel>
                <FormInput>
                    <Input
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Digite seu endereço de e-mail"
                    />
                    <Icon name="mail" size={25} color={"#510F71"} />
                </FormInput>


                <ButtonForm>
                    <ButtonCancelar>
                        <ButtonText>Cancelar</ButtonText>
                    </ButtonCancelar>

                    <ButtonConfirmar onPress={() => navigation.navigate('Login')}>
                        <ButtonText>Confirmar</ButtonText>
                    </ButtonConfirmar>

                </ButtonForm>

            </Form>
        </FormContainer>
    );
}

export default Cadastro