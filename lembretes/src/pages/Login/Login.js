import React, { useState } from 'react';

import Title from '../../components/Title';
import { LogoImage, FormContainer, Form, FormLabel, FormInput, Input, ButtonForm, ButtonEntrar, ButtonText } from "./Styles";

import Icon from 'react-native-vector-icons/AntDesign';

function Login({ navigation }) {

    const [email, setEmail] = useState(null)

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
            <Form>
                <FormLabel>E-MAIL</FormLabel>
                <FormInput>
                    <Input
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Digite seu endereço de e-mail"
                    />
                    <Icon name="idcard" size={25} color={"#510F71"} />
                </FormInput>

                <ButtonForm>
                    <ButtonEntrar onPress={() => navigation.navigate('Home', { nome: 'Usuário' })}>
                        <ButtonText>ENTRAR</ButtonText>
                    </ButtonEntrar>

                </ButtonForm>

            </Form>
        </FormContainer>
    );
}

export default Login