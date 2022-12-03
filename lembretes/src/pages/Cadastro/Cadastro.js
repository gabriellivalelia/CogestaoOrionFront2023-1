import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import api from "../../services/api"

import Title from "../../components/Title";
import { 
    LogoImage, 
    Form, 
    FormContainer, 
    FormLabel, 
    FormInput, 
    Input, 
    ButtonForm, 
    ButtonCancelar, 
    ButtonConfirmar, 
    ButtonText 
} from "./Styles";

import Icon from 'react-native-vector-icons/AntDesign';

function Cadastro() {

    const [pessoa, setPessoa] = useState({})

    function handleInputChange(e) {
        const key = e.target.nome;
        const newPessoa = { ...pessoa };
        newPessoa[key] = e.target.value;

        setPessoa(newPessoa);
    }

    async function botaoProsseguir(e) {
        e.preventDefault();
        try {
            console.log(pessoa);
            const response = await api.post('/users', user);
            setPessoa(response.data);
            console.log(response);
            alert("Usuário cadastrado com sucesso");
            history.push("Home");
        } catch (error) {
            console.warn(error);
            alert(error.response?.status);
        }
      }

      const history = useHistory();

    return (
        <FormContainer>
            <LogoImage source={require("../../assets/logo.png")} />
            <Title />
            <Form>
                <FormLabel>Nome Completo</FormLabel>
                <FormInput>
                    <Input
                        onChange={handleInputChange}
                        value={pessoa.nome}
                        placeholder="Digite seu nome completo"
                    />
                    <Icon name="idcard" size={25} color={"#510F71"} />
                </FormInput>


                <FormLabel>E-MAIL</FormLabel>
                <FormInput>
                    <Input
                        onChange={handleInputChange}
                        value={pessoa.email}
                        placeholder="Digite seu endereço de e-mail"
                    />
                    <Icon name="mail" size={25} color={"#510F71"} />
                </FormInput>


                <ButtonForm>
                    <ButtonCancelar>
                        <ButtonText>Cancelar</ButtonText>
                    </ButtonCancelar>

                    <ButtonConfirmar type="submit" onClick={botaoProsseguir}>
                        <ButtonText>Confirmar</ButtonText>
                    </ButtonConfirmar>

                </ButtonForm>

            </Form>
        </FormContainer>
    );
}

export default Cadastro