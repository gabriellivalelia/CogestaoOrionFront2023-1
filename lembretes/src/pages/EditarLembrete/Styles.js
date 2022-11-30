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
    width: 100%; 
    height: auto; 
    margin-top: 30px;  
    margin-bottom: 30px;  
    padding: 40px; 
    background-color: #F5F5F5;
`; 
 
export const InputTitulo = styled.TextInput` 
    width: 90%; 
    height: 40px;
    background-color: #FFFFFF; 
    margin: 8px;
    padding-left: 10px; 
`; 

export const InputDescricao = styled.TextInput` 
    width: 90%; 
    height: 100px;
    background-color: #FFFFFF; 
    margin: 8px;
    padding-left: 10px; 
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
`; 
 
export const ButtonCancelar = styled.Button` 
    font-size: 15px; 
    align-items: center; 
    justify-content: center; 
    width: 90%; 
    background-color: #D4BEF1; 
    padding-top: 14px; 
    padding-bottom: 14px; 
    margin: 12px; 
    marginTop: 30px; 
`; 
 
export const ButtonConfirmar = styled.Button` 
    font-size: 15px; 
    align-items: center; 
    justify-content: center; 
    width: 90%; 
    background-color: #974CF6; 
    padding-top: 14px; 
    padding-bottom: 14px; 
    margin: 12px; 
`; 