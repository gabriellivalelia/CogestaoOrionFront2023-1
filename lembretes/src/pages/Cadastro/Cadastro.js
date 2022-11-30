import React, { useState } from "react";

import Title from "../../components/Title";
import { LogoImage, Form, FormContainer, FormLabel, Input, ButtonForm, ButtonCancelar, ButtonConfirmar, ButtonText } from "./Styles";

function Cadastro({ navigation }) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
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