import { setCookie } from "./save-cockie.js";
let form = document.getElementById('meuFormulario');




let user = {
    name: "",
    email: "",
    password: "",
};

function getUserInput() {
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    return { name, email, password };
}

export function fcnCreateUser() {
    const userInput = getUserInput();
    user = { ...user, ...userInput };
    console.log(user);
    setCookie("dadosUsuario", user);
    // Additional logic or actions can be added here
}