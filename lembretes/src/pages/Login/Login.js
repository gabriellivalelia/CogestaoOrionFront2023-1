import React, { useState } from 'react' 
import Title from '../../components/Title';
import { FormContainer, Form, FormLabel, Input, ButtonEntrar } from "./Styles"; 
 
 
 
function Login({ navigation }){ 
 
    const [email, setEmail] = useState(null) 
 
    return( 
        <FormContainer> 
            <Title/>
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