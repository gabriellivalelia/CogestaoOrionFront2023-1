import React, { useState } from "react";
import { PageTitle, Form, FormContainer, InputTitulo, InputDescricao, ButtonForm, ButtonCancelar, ButtonConfirmar, ButtonText } from "./Styles";

function CadastrarLembrete({ navigation }) {

    const [titulo, setTitulo] = useState(null)
    const [descricao, setDescricao] = useState(null)

    return (
        <FormContainer>
            <PageTitle>Editar Lembrete</PageTitle>
            <Form>

                <InputTitulo
                    onChangeText={setTitulo}
                    value={titulo}
                    placeholder="Molhar as plantas"
                />

                <InputDescricao
                    onChangeText={setDescricao}
                    value={descricao}
                    placeholder="Molhar as plantas da casa nas Segundas, Quartas e Sextas Feiras"
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