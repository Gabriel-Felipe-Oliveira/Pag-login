
import { validateForm } from "./validators.js";
import { setCookie } from "./cookie.js";
let form = document.getElementById('meuFormulario');



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

   

    static createUser() {
        try {

           
    
            if (validateForm()) {

                const randomNumber = getRandomInt(1, 11);

                const userInput = getCreateUserInput();
    
                const UserData = {
                    id: randomNumber, // Gera um ID único
                    name: userInput.name,
                    password: userInput.password,
                    email: userInput.email,
                };
    
                console.log("email" + UserData.email + " senha" + UserData.password + " name" + UserData.name);
    
                fetch('http://localhost:3000/User', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // outros parâmetros de solicitação, como body, aqui
                    body: JSON.stringify(UserData),
                })
                    .then(response => {
                        console.log('Response:', response);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => console.log('Data:', data))
                    .then(() => {
                        alert("Registro bem-sucedido!");
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert("Erro ao realizar o registro. Por favor, tente novamente.");
                    });
            }
        } catch (error) {
            console.error('Error outside fetch block:', error);
        }
    }

    static async login() {
        const userInput = getLoginUserInput(); // Certifique-se de implementar essa função
    
        try {
            const response = await fetch('http://localhost:3000/User');
            const usersData = await response.json();
    
            const storedUser = usersData.find(user => user.email === userInput.email);
    
            if (storedUser) {

                if (userInput.password === storedUser.password) {

                    alert("Login bem-sucedido!");

                    
                    expires.setDate(expires.getDate() + 3);//Pego a data de hoje e somo mais 3 dias a ela 

                    setCookie('userEmail', storedUser.email, expires);//Chamo a fução setCokie que cria um cookie('nome do cookie' 'valores' 'tempo de expiração ')
                    
                    window.location.href = 'Layout.html';
                    return true;

                } else {

                    alert('Senha incorreta');

                }
            } else {

                alert('Este email não existe');

            }
        } catch (error) {

            console.error("Falha na requisição para verificar o usuário:", error);
            
        }
    
        console.log("Falha no login. Verifique seu e-mail e senha.");
        return false;
    }
    
 
}

export function getCreateUserInput() {
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

const expires = new Date();

export default User;






