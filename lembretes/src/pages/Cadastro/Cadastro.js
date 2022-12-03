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

const history = useHistory();

function Cadastro() {

    const [pessoa, setPessoa] = useState({
        nome: "",
        email: "",
    });

    function handleInputChange(e) {
        const key = e.target.nome;
        const newPessoa = { ...pessoa };
        newPessoa[key] = e.target.value;

        setPessoa(newPessoa);
    }

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