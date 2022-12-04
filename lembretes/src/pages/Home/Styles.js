import styled from "styled-components";


export const Title = styled.Text`
    align-self: center;
    padding-top: 10%;

    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;


`;
export const SubTitle = styled.Text`
    align-self: center;
    padding-top: 10%;

    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    font-weight: 100;

    justify-content: flex-start;


`;


export const Logo = styled.Image`
    top: 10%;
    align-self: center;
`; 

export const EntradaEmail = styled.TextInput`
    border-bottom-width: 1px;
    align-self: center;
    width: 65%;
    top: 10%;
    margin-bottom: 3%;

`;

export const Botoes = styled.TouchableOpacity`
    align-self: center;
    margin: 2%;
    width: 20%;
    height: auto;
    background-color: "#DDDDDD";
    margin-top: 5%;
    background-color: purple;
    border-radius: 10px;
`;

export const BotoesTexto = styled.Text`
    align-self: center;
    line-height: 30px;
    
`;

export const LembretesCaixa = styled.View`
    align-self: center;
    border: 1px;
    height: auto;
    width: 70%;
    margin-top: 5%;

`;

export const TextoTituloLembrete = styled.Text`
    align-self: center;
    margin-top: 2%;
    font-size: 20px;

`;

export const TextoSubTituloLembrete = styled.Text`
    align-self: center;
    margin-top: 2%;
    font-size: 12px;

`;

export const LembretesViewButtons = styled.View `
    flex-direction: row;
    align-self: center;
    margin-bottom: 1%;
`;

export const ButtonCreate = styled.TouchableOpacity`
    align-self: flex-end;
    margin-right: 10%;
    width: 35%;
    height: auto;
    background-color: "#DDDDDD";
    margin-top: 12%;
    background-color: purple;
    border-radius: 10px;
`;