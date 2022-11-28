import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'

export default function Form(){

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)

    return(
        <View>
            <View>

                <Text>Nome Completo</Text>
                <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder="Digite seu nome completo"
                />
                
                <Text>E-MAIL</Text>
                <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu endereço de e-mail"
                />
                <Button title="Cancelar"/>
                <Button title="Confirmar"/>
            </View>
        </View>
    );
}