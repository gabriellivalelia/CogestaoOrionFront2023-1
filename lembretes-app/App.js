import React from 'react';

import Cadastro from './src/pages/Cadastro/'
import Login from './src/pages/Login/'
import Home from './src/pages/Home/'
import CadastrarLembrete from './src/pages/CadastrarLembrete/'
import EditarLembrete from './src/pages/EditarLembrete/'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cadastro'>

        <Stack.Screen
        name="Cadastro" 
        component={Cadastro} 
        options={{
          title: 'Lembretes ORION',
          headerTintColor: '#510F71'
        }}
        />

        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          title: 'Lembretes ORION',
          headerTintColor: '#510F71'
        }}
        />

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Olá Usuário',
          headerStyle: {
            backgroundColor: '#D4BEF1'
          },
          headerTintColor: '#000000'
        }}
        />

        <Stack.Screen 
        name="CadastrarLembrete" 
        component={CadastrarLembrete} 
        options={{
          title: 'Cadastrar Lembrete',
          headerStyle: {
            backgroundColor: '#D4BEF1'
          },
          headerTintColor: '#000000'
        }}
        />

        <Stack.Screen 
        name="EditarLembrete" 
        component={EditarLembrete} 
        options={{
          title: 'Editar Lembrete',
          headerStyle: {
            backgroundColor: '#D4BEF1'
          },
          headerTintColor: '#000000'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
