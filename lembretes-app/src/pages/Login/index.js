import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'

export default function Login({ navigation }){

    const [email, setEmail] = useState(null)

    return(
        <View>
            <View>
                <Text>E-MAIL</Text>
                <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu endereço de e-mail"
                />
                <Button
                title="Entrar"
                onPress={ () => navigation.navigate('Home', {nome: 'Eduardo chato'})}
                />
            </View>
        </View>
    );
}