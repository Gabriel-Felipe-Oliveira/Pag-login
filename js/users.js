
import { validateForm } from "./validators.js";
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

        const userInput = getCreateUserInput()

        if (validateForm()) {

            const randomNumber = getRandomInt(1, 11);

            

            const UserData = {
                id: randomNumber ,// Gera um ID único
                name: userInput.name,
                password: userInput.password,
                email: userInput.email,
            };

            console.log("email" + UserData.email + " senha"+ UserData.password + " name" + UserData.name)

            fetch('http://localhost:3000/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // outros parâmetros de solicitação, como body, aqui
                body: JSON.stringify(UserData),
            }).then(response => {
                    console.log('Response:', response);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => console.log('Data:', data))
                .catch(error => console.error('Error:', error));
    
        

            

           

            alert("Registro bem-sucedido!");
            
            
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






