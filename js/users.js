
import { validateForm } from "./validators.js";
let form = document.getElementById('meuFormulario');




class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

   

    static createUser() {

        const userInput = getCreateUserInput()

        if (validateForm()) {

            const UserData = {
                name: userInput.name,
                password: userInput.password,
                email: userInput.email,
            };
    
         fetch('http://localhost:3000/User', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },

             body: JSON.stringify(UserData),

            });

            alert("Registro bem-sucedido!");
            
            
        }
    }

    static login() {
        const storedUserData = getCookie("dadosUsuario");
        const userInput = getLoginUserInput(); // Certifique-se de implementar essa função

        if (storedUserData) {
            const storedUser = storedUserData; // Não precisa do JSON.parse aqui

            if(userInput.email === storedUser.email){
                if(userInput.password === storedUser.password){
                   alert("Login bem-sucedido!");
                    return true;

                }
              else{
                alert('Senha encorreta ')

              }
            }
            else{
                alert('Esse email não existe ')
            }
           

           
        }

        console.log("Falha no login. Verifique seu e-mail e senha.");
        return false;
    }
    
 
}

function getCreateUserInput() {
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    return { name, email, password };
}

function getLoginUserInput() {
    
    const email = form.email.value;
    const password = form.password.value;

    return { email, password };
}

export default User;






