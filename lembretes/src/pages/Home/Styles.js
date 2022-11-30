import styled from "styled-components"; 

export const FormContainer = styled.View` 
    background-color: #FFFFFF; 
    width: 100%; 
    height: 100%; 
    align-items: center; 
`; 

export const Form = styled.View` 
    width: 100%; 
    height: auto; 
    margin-top: 5px;  
    padding: 2px; 
    text-align: center;
`; 

export const MainTitle = styled.Text` 
    color: #000000; 
    font-size: 25px;    
    padding: 10px;
    text-align: center;
`; 

export const Subtitle = styled.Text` 
    color: #000000; 
    font-size: 18px;    
    padding: 10px;
    text-align: center;
`; 

export const FormTasks = styled.View` 
    width: 100%; 
    height: auto; 
    padding-left: 30px; 
    padding-right: 30px; 
    padding-bottom: 20px;
    text-align: center;
`; 

export const Task = styled.Text` 
    color: #000000; 
    font-size: 20px;    
    padding: 10px;
    text-align: center;
`; 

export const TaskDescription = styled.Text` 
    color: #000000; 
    font-size: 15px;    
    padding: 10px;
    text-align: center;
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

export const ButtonExcluir = styled.Button` 
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
 
export const ButtonEditar = styled.Button` 
    font-size: 15px; 
    align-items: center; 
    justify-content: center; 
    width: 90%; 
    background-color: #974CF6; 
    padding-top: 14px; 
    padding-bottom: 14px; 
    margin: 12px; 
`;

export const ButtonAdicionarLembrete = styled.Button` 
    font-size: 15px; 
    align-items: center; 
    justify-content: center; 
    width: 90%; 
    background-color: #974CF6; 
    padding-top: 14px; 
    padding-bottom: 14px; 
    margin: 12px; 
`;