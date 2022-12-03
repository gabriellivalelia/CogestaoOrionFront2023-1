import * as requesterService from "../RequesterService/requesterService";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function botaoProsseguir(e) {
    e.preventDefault();
    try {
        console.log(pessoa);
        const response = await api.post('/usuarios', usuario);
        setPessoa(response.data);
        console.log(response);
        alert("Usuário cadastrado com sucesso");
        history.push("Home");
    } catch (error) {
        console.warn(error);
        alert(error.response?.status);
    }
  }
