import styled from "styled-components"; 

export const FormContainer = styled.View` 
    background-color: #FFFFFF; 
    width: 100%; 
    height: 100%; 
    align-items: center; 
`; 

export const Form = styled.View` 
    width: 90%; 
    height: auto; 
    margin-top: 5px;  
    padding: 2px; 
    text-align: center;
`; 

export const MainTitle = styled.Text` 
    color: #000000; 
    font-size: 25px;    
    padding: 2px;
    text-align: center;
    margin-top: 10px;
`; 

export const Subtitle = styled.Text` 
    color: #000000; 
    font-size: 18px;    
    padding: 8px;
    text-align: center;
    width: 90%
    margin-bottom: 5px;
`; 

export const FormTasks = styled.View` 
    width: 100%; 
    height: auto; 
    padding-left: 20px; 
    padding-right: 20px; 
    padding-bottom: 5px;
    padding-top: 5px;
    text-align: center;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    background-color: #FAF6FF;
    border-radius: 5px;
`; 

export const Task = styled.Text` 
    color: #000000; 
    font-size: 20px;    
    padding: 2px;
    text-align: center;
    width: 100%;
`; 

export const TaskDescription = styled.Text` 
    color: #000000; 
    font-size: 15px;    
    text-align: center;
    width: 100%;
    margin-bottom: 2px;
`;

export const ButtonForm = styled.View` 
    width: 100%; 
    height: auto; 
    margin-top: 2px;  
    margin-bottom: 2px;  
    padding: 5px; 
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: space-evenly;
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