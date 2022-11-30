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
 
export const ButtonEntrar = styled.Button` 
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`;