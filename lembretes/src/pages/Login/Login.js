import React, { useState } from 'react' 
import { View, TextInput, Text, Button } from 'react-native' 
//import Title from '../../components/Title/' 
import { FormContainer, Form, FormLabel, Input, ButtonEntrar } from "./Styles"; 
 
 
 
function Login({ navigation }){ 
 
    const [email, setEmail] = useState(null) 
 
    return( 
        <FormContainer> 
            <Form> 
                <FormLabel>E-MAIL</FormLabel> 
                <Input 
                onChangeText={setEmail} 
                value={email} 
                placeholder="Digite seu endereço de e-mail" 
                /> 
                <ButtonEntrar 
                title="Entrar" 
                onPress={ () => navigation.navigate('Home', {nome: 'Eduardo chato'})} 
                /> 
            </Form> 
        </FormContainer> 
    ); 
}

export default Login