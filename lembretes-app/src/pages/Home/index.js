import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'

export default function Home({ route, navigation }){

    return(
        <View>
            <Text>Home</Text>
            <Text>Bem-Vindo: {route.params?.nome}</Text>
            <Button
                title="Excluir"
                />
            <Button
                title="Editar"
                onPress={ () => navigation.navigate('EditarLembrete')}
                />
            <Button
                title="Adicionar Lembrete"
                onPress={ () => navigation.navigate('CadastrarLembrete')}
                />
        </View>
    );
}