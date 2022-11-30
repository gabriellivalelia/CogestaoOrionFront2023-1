import React from 'react'
import { Form, FormContainer, MainTitle, Subtitle, FormTasks, Task, TaskDescription, ButtonForm, ButtonExcluir, ButtonEditar, ButtonAdicionarLembrete, ButtonText } from "./Styles";

function Home({ route, navigation }) {

    return (
        <FormContainer>

            <MainTitle>Olá, {route.params?.nome}</MainTitle>
            <Subtitle>Aqui estão seus lembretes registrados:</Subtitle>


            <Form>
                <FormTasks>
                    <Task>Molhar as plantas</Task>
                    <TaskDescription>Molhar as plantas da casa nas Segundas, Quartas e Sextas Feiras</TaskDescription>
                </FormTasks>

                <ButtonForm>
                    <ButtonExcluir>
                        <ButtonText>Excluir</ButtonText>
                    </ButtonExcluir>

                    <ButtonEditar onPress={() => navigation.navigate('EditarLembrete')}>
                        <ButtonText>Editar</ButtonText>
                    </ButtonEditar>

                </ButtonForm>

            </Form>

            <Form>
                <FormTasks>
                    <Task>Passear com o cachorro</Task>
                    <TaskDescription>Passear com o cachorro nas Terças e Sextas Feiras</TaskDescription>
                </FormTasks>

                <ButtonForm>
                    <ButtonExcluir>
                        <ButtonText>Excluir</ButtonText>
                    </ButtonExcluir>

                    <ButtonEditar onPress={() => navigation.navigate('EditarLembrete')}>
                        <ButtonText>Editar</ButtonText>
                    </ButtonEditar>
                </ButtonForm>

            </Form>

            <ButtonAdicionarLembrete onPress={() => navigation.navigate('CadastrarLembrete')}>
                <ButtonText>Adicionar Lembrete</ButtonText>
            </ButtonAdicionarLembrete>

        </FormContainer>
    );
}

export default Home