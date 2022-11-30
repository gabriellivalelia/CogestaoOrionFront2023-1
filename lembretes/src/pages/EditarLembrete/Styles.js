import styled from "styled-components"; 
 
export const FormContainer = styled.View` 
    background-color: #FFFFFF; 
    padding-top: 30px; 
    width: 100%; 
    height: 100%; 
    align-items: center; 
`; 

export const PageTitle = styled.Text` 
    color: #000000; 
    font-size: 25px; 
    align-text:center;   
    padding: 10px; 
`; 
 
export const Form = styled.View` 
    width: 90%; 
    height: auto; 
    margin-top: 30px;  
    margin-bottom: 30px;  
    padding: 20px; 
    background-color: #F5F5F5;
    align-itens:center;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
    border-color: #000000;
`; 
 
export const InputTitulo = styled.TextInput` 
    width: 90%; 
    height: 40px;
    background-color: #FFFFFF; 
    margin: 8px;
    padding-left: 10px; 
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-radius: 5px;
    border-color: #151B57;
`; 

export const InputDescricao = styled.TextInput` 
    width: 90%; 
    height: 100px;
    background-color: #FFFFFF; 
    margin: 8px;
    padding-left: 10px; 
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-radius: 5px;
    border-color: #151B57;
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
    justify-content: space-evenly;
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