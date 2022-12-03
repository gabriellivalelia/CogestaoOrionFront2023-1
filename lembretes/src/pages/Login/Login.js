import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from "../../services/api"

import Title from '../../components/Title';
import { LogoImage, FormContainer, Form, FormLabel, FormInput, Input, ButtonForm, ButtonEntrar, ButtonText } from "./Styles";

import Icon from 'react-native-vector-icons/AntDesign';

function Login() {

    const [email, setEmail] = useState('')

    const history = useHistory();

    async function handleLogin(e){
      e.preventDefault();
      try {

        const response = await api.post('/Login', {email});
        console.log(email);
        
        alert("Bem vindo", response.data.user.nome);
        Login(response.data);
        console.log(response.data);
        history.push("/Home");

      } catch (error) {
        
        if (error.response.status === 403){
          alert ("Credenciais Inválidas");
        }
        else {
          alert(error.response.data.notification);
        }
        console.warn(error);
      }
    }

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
            <Form>
                <FormLabel>E-MAIL</FormLabel>
                <FormInput>
                    <Input
                        onChangeText={(e)=>setEmail(e.target.value)}
                        value={email}
                        placeholder="Digite seu endereço de e-mail"
                    />
                    <Icon name="idcard" size={25} color={"#510F71"} />
                </FormInput>

                <ButtonForm>
                    <ButtonEntrar type="submit" onClick={(handleLogin)}>
                        <ButtonText>ENTRAR</ButtonText>
                    </ButtonEntrar>

                </ButtonForm>
 
            </Form>
        </FormContainer>
    );
}

export default Login