import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import EditarLembrete from './src/pages/EditarLembrete';
import Cadastro from './src/pages/Cadastro';
import CadastrarLembrete from './src/pages/CadastrarLembrete';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="EditarLembrete" component={EditarLembrete}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="CadastrarLembrete" component={CadastrarLembrete}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
