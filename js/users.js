
import { validateForm } from "./validators.js";
import { setCookie } from "./cookie.js";
let form = document.getElementById('meuFormulario');

const apiUrl = 'http://localhost:3000/User';



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


const userInput = getCreateUserInput();

   

export function SaveUser() {

            
    
            const UserData = {
                    id: userInput.randomNumber, 
                    name: userInput.name,
                    password: userInput.password,
                    email: userInput.email,
            };
    
            console.log("email" + UserData.email + " senha" + UserData.password + " name" + UserData.name);
            
            postUserData(apiUrl, UserData)
            .then(handleResponse)
            .then(handleData)
            .catch(handleError);
           
            
        
}

    function postUserData(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

function handleResponse(response) {
    console.log('Response:', response);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function handleData(data) {
    console.log('Data:', data);
    alert("Registro bem-sucedido!");
}

function handleError(error) {
    console.error('Error:', error);
    alert("Erro ao realizar o registro. Por favor, tente novamente.");
}
    

    // function login() {
    //     const userInput = getLoginUserInput(); // Certifique-se de implementar essa função
    
    //     try {
    //         const response = await fetch('http://localhost:3000/User');
    //         const usersData = await response.json();
    
    //         const storedUser = usersData.find(user => user.email === userInput.email);
    
    //         if (storedUser) {

    //             if (userInput.password === storedUser.password) {

    //                 alert("Login bem-sucedido!");

                    
    //                 expires.setDate(expires.getDate() + 3);//Pego a data de hoje e somo mais 3 dias a ela 

    //                 setCookie('userEmail', storedUser.email, expires);//Chamo a fução setCokie que cria um cookie('nome do cookie' 'valores' 'tempo de expiração ')
                    
    //                 window.location.href = 'Layout.html';
    //                 return true;

    //             } else {

    //                 alert('Senha incorreta');

    //             }
    //         } else {

    //             alert('Este email não existe');

    //         }
    //     } catch (error) {

    //         console.error("Falha na requisição para verificar o usuário:", error);
            
    //     }
    
    //     console.log("Falha no login. Verifique seu e-mail e senha.");
    //     return false;
    // }
    
 


export function getCreateUserInput() {
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const randomNumber = getRandomInt(1, 11);

    return { name, email, password ,randomNumber};
}

function getLoginUserInput() {
    
    const email = form.email.value;
    const password = form.password.value;

    return { email, password };
}

const expires = new Date();

export default User;






