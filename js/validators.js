import { getCreateUserInput } from "./users.js";

function validateEmail(email) {
    const emailRegex = /@.*\.com/;
    if (!emailRegex.test(email)) {
        throw new Error("Email inválido");
    }
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error("Senha inválida. A senha deve conter pelo menos uma letra minúscula, e um tamanha maio que 8.");
    }
}

export function validateForm() {
    try { 

        const userInput = getCreateUserInput(); // Pega os valores da tela e armazena no userIput
        validateEmail(userInput.email);//Passa o valor de email pra validação
        validatePassword(userInput.password);//Passa o valor da senha pra validação 

       return true ; //Caso tudo ocorra da melhor forma retorna true 

    } catch (error) {
        
        alert(error.message);
        
        return false;
    }
}