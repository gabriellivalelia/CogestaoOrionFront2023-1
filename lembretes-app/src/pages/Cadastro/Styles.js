import styled from "styled-components";

export const FormContainer = styled.View`
    background-color: #FFFFFF;
    padding-top: 60px;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const Form = styled.View`
    width: 100%;
    height: auto;
    margin-top: 30px; 
    padding: 30px;
`;

export const FormLabel = styled.Text`
    color: #510F71;
    font-size: 18px;
    font-weight: bold;
    padding-left: 20px;    
`;

export const Input = styled.TextInput`
    width: 90%;
    background-color: #F5F5F5;
    height: 40px;
    margin: 12px;
    padding-left: 10px;
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
