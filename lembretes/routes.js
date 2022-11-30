import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import CadastrarLembrete from './src/pages/CadastrarLembrete';
import EditarLembrete from './src/pages/EditarLembrete';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Cadastro'>

                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                        title: "Cadastro"
                    }}
                />

                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login"
                    }}
                />

                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerStyle:{
                            backgroundColor: '#D4BEF1'
                        }
                    }}
                />

                <Stack.Screen 
                    name="CadastrarLembrete"
                    component={CadastrarLembrete}
                    options={{
                        title: "Cadastrar Lembrete",
                        headerStyle:{
                            backgroundColor: '#D4BEF1'
                        }
                    }}
                />

                <Stack.Screen 
                    name="EditarLembrete"
                    component={EditarLembrete}
                    options={{
                        title: "Editar Lembrete",
                        headerStyle:{
                            backgroundColor: '#D4BEF1'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;