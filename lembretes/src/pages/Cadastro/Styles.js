import styled from "styled-components"; 

export const LogoImage = styled.Image` 
    width: 100px;
    height: 100px; 
`; 
 
export const FormContainer = styled.View` 
    background-color: #FFFFFF; 
    padding-top: 20px; 
    width: 100%; 
    height: 100%; 
    align-items: center; 
`; 
 
export const Form = styled.View` 
    width: 100%; 
    height: auto;  
    padding: 30px; 
`; 

export const FormInput = styled.View` 
    display: flex;
    flex-direction: row;
`; 
 
export const FormLabel = styled.Text` 
    color: #510F71; 
    font-size: 18px; 
    font-weight: bold; 
    padding-left: 12px;     
`; 
 
export const Input = styled.TextInput` 
    width: 90%; 
    background-color: #FFFFFF; 
    height: 40px; 
    margin-left: 12px; 
    margin-right: 12px; 
    margin-bottom: 5px;
    border-bottom-width: 1px;
`; 

export const ButtonForm = styled.View` 
    width: 100%; 
    height: auto; 
    margin-top: 10px;  
    margin-bottom: 10px;  
    padding: 5px; 
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: space-between;
`; 
 
export const ButtonCancelar = styled.TouchableOpacity` 
    background-color: #D4BEF1; 
    border-radius: 30px;
    align-itens: center;
    justify-content: center;
    height: 45px;
    width: 140px;
    margin-top: 10px;
`; 
 
export const ButtonConfirmar = styled.TouchableOpacity` 
    background-color: #974CF6;
    border-radius: 30px;
    align-itens: center;
    justify-content: center;
    height: 45px;
    width: 140px;
    margin-top: 10px;
`; 

export const ButtonText = styled.Text` 
    text-align: center;
    font-size: 15px;
    color: #000000;
`;