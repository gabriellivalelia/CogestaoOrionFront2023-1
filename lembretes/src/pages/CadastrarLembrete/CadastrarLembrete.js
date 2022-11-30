import React, { useState } from "react";
import { PageTitle, Form, FormContainer, InputTitulo, InputDescricao, ButtonForm, ButtonCancelar, ButtonConfirmar, ButtonText } from "./Styles";

function CadastrarLembrete({ navigation }) {

    const [titulo, setTitulo] = useState(null)
    const [descricao, setDescricao] = useState(null)

    return (
        <FormContainer>
            <PageTitle>Cadastrar Lembrete</PageTitle>
            <Form>

                <InputTitulo
                    onChangeText={setTitulo}
                    value={titulo}
                    placeholder="Adicione um título"
                />

                <InputDescricao
                    onChangeText={setDescricao}
                    value={descricao}
                    placeholder="Digite uma descrição"
                />

            </Form>

            <ButtonForm>
                <ButtonCancelar onPress={() => navigation.navigate('Home')}>
                    <ButtonText>Cancelar</ButtonText>
                </ButtonCancelar>

                <ButtonConfirmar onPress={() => navigation.navigate('Home')}>
                    <ButtonText>Confirmar</ButtonText>
                </ButtonConfirmar>

            </ButtonForm>

        </FormContainer>
    );
}

export default CadastrarLembrete