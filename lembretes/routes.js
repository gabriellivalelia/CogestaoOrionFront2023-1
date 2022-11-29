import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;