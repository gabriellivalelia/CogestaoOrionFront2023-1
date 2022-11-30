import React, { useState } from "react";
import { PageTitle, Form, FormContainer, InputTitulo, InputDescricao, ButtonForm, ButtonCancelar, ButtonConfirmar } from "./Styles";

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
                <ButtonCancelar
                    title="Cancelar"
                    onPress={() => navigation.navigate('Home')}
                />
                <ButtonConfirmar
                    title="Confirmar"
                    onPress={() => navigation.navigate('Home')}
                />
            </ButtonForm>

        </FormContainer>
    );
}

export default CadastrarLembrete