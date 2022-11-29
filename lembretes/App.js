import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Routes from "./routes"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Routes/>
  )
}
