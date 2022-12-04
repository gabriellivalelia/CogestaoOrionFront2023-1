import styled from "styled-components";


export const Title = styled.Text`
    align-self: center;
    padding-top: 10%;

    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;

`;
export const Logo = styled.Image`
    top: 10%;
    align-self: center;
`; 

export const EntradaTitulo = styled.TextInput`
    border: 1px;
    align-self: center;
    width: 95%;
    top: 3%;
    padding-left: 4px;

`;

export const Botoes = styled.TouchableOpacity`
    align-self: center;
    width: 30%;
    height: 60%;
    top: 10%;
    background-color: "#DDDDDD";
    margin-bottom: 5%;
    margin-left: 5px;
    background-color: purple;
    border-radius: 10px;
`;

export const BotoesTexto = styled.Text`
    align-self: center;
    line-height: 30px;
    
`;

export const FormsdosLembretes = styled.View`
    align-self: center;
    border: 2px;
    height: 60%;
    width: 70%;
    margin-top: 5%;
    align-items: center;

`;

export const EntradaDescricao = styled.TextInput`
    border: 1px;
    align-self: center;
    width: 95%;
    height: 85%;
    margin-top: 5%;
    margin-bottom: 3%;
    padding-left: 4px;
    padding-bottom: 290px;
    text-align: justify;
    `;

export const LembretesViewButtons = styled.View `
    flex-direction: row;
    align-self: center;
`;

