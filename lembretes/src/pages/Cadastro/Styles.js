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
 
export const FormLabel = styled.Text` 
    color: #510F71; 
    font-size: 18px; 
    font-weight: bold; 
    padding-left: 13px;     
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
    justify-content: space-evenly;
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