import React, { useState } from 'react'

import Title from '../../components/Title';
import { LogoImage, FormContainer, Form, FormLabel, Input, ButtonForm, ButtonEntrar } from "./Styles";



function Login({ navigation }) {

    const [email, setEmail] = useState(null)

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
            <Form>
                <FormLabel>E-MAIL</FormLabel>
                <Input
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu endereço de e-mail"
                />
                <ButtonForm>
                    <ButtonEntrar
                        title="Entrar"
                        color="#974CF6"
                        onPress={() => navigation.navigate('Home', { nome: 'Usuário' })}
                    />
                </ButtonForm>

            </Form>
        </FormContainer>
    );
}

export default Login