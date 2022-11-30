import React from 'react'
import { Form, FormContainer, MainTitle, Subtitle, FormTasks, Task, TaskDescription, ButtonForm, ButtonExcluir, ButtonEditar, ButtonAdicionarLembrete } from "./Styles";

function Home({ route, navigation }) {

    return (
        <FormContainer>
            <Form>
                <MainTitle>Olá, {route.params?.nome}</MainTitle>
                <Subtitle>Aqui estão seus lembretes registrados:</Subtitle>
            </Form>

            <Form>
                <FormTasks>
                    <Task>Molhar as plantas</Task>
                    <TaskDescription>Molhar as plantas da casa nas Segundas, Quartas e Sextas Feiras</TaskDescription>
                </FormTasks>

                <ButtonForm>
                    <ButtonExcluir
                        title="Excluir"
                    />
                    <ButtonEditar
                        title="Editar"
                        onPress={() => navigation.navigate('EditarLembrete')}
                    />
                </ButtonForm>

            </Form>

            <Form>
                <FormTasks>
                    <Task>Passear com o cachorro</Task>
                    <TaskDescription>Passear com o cachorro nas Terças e Sextas Feiras</TaskDescription>
                </FormTasks>

                <ButtonForm>
                    <ButtonExcluir
                        title="Excluir"
                    />
                    <ButtonEditar
                        title="Editar"
                        onPress={() => navigation.navigate('EditarLembrete')}
                    />
                </ButtonForm>

            </Form>

            <ButtonAdicionarLembrete
                title="Adicionar Lembrete"
                onPress={() => navigation.navigate('CadastrarLembrete')}
            />
        </FormContainer>
    );
}

export default Home