
// import { validateForm } from "./validators.js";
import { setCookie } from "./cookie.js";
let form = document.getElementById('meuFormulario');

const apiUrl = 'http://localhost:3000/User';
const expires = new Date();


export function SaveUser() {

    const userInput = getCreateUserInput();
    
    const UserData = {
            id: userInput.randomNumber, 
            name: userInput.name,
            password: userInput.password,
            email: userInput.email,
    };
    
        console.log("email" + UserData.email + " senha" + UserData.password + " name" + UserData.name);
            
        postUserData(apiUrl, UserData).then(handleResponse).then(handleData).catch(handleError);
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

export async function login() {

    const userInput = getLoginUserInput(); 
    let User = checkUserByEmailAndSenha(apiUrl,userInput)
    
    User.then(result => {

                if (result) {
                    // alert("Login bem-sucedido!");
                    // setUserCookie(userInput.email);
                    // window.location.href = 'Layout.html';
                    alert("deu certo")
            
                } else {
                     alert("Erro ao processar a solicitação. Por favor, tente novamente mais tarde.");
                }
         }
         )
        .catch(error => {

            console.error("Erro na Promise:", error);

        });

}

async function checkUserByEmailAndSenha(url, userInput) {
    let storedUser = false;

    try {
        const response = await postSelectData(url);
        const usersData = await response.json();

       

        for (let i = 0; i < usersData.length; i++) {
            const user = usersData[i];
            
            if (user.email == userInput.email && user.password == userInput.password) {
                storedUser = true;
                break;  // Encerra o loop assim que um usuário correspondente for encontrado
            }

        }
         
        return storedUser

    } catch (error) {

        console.log("Falha ao verificar usuário por e-mail");
        throw error;

    }
}

async function postSelectData(url) {
    try {
        const response = await fetch(url);
        
        return response;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
}

function setUserCookie(userEmail) {
    
    expires.setDate(expires.getDate() + 3);

    // Certifique-se de implementar a função setCookie corretamente
    setCookie('userEmail', userEmail, expires);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
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










