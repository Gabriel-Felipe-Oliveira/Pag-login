import User from "./users.js";


let form = document.getElementById('meuFormulario');

//<img class="user-img"  alt="Foto do Usuário">
export function fcnCreateImg(nameclass,alt,src){
    const input = document.createElement('img');
    input.classList = nameclass ;
    input.alt = alt ;
    input.src = src ;

}

export function fcnCreateP(id,value){
    const input = document.createElement('p');
    
    input.id = id ;
    input.value = value ;

}




export function fcnCreateInput(id, placeholder) {
    const input = document.createElement('input');

    input.id = id;
    
    
    
    input.placeholder = placeholder;
    
    return input;
}


export function fcnCreateInputPassword(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
    input.minLength = 8;
    input.required = true;
     
    input.type = 'password';
    input.placeholder = placeholder;
    

    return input;
}

export function fcnCreateButton(id, value, className, onclick) {
    const button = document.createElement('button');
    button.id = id;
    button.type = 'button'; // Defina o tipo do botão aqui, por exemplo, 'button' ou 'submit'
    button.innerHTML = value;
    button.onclick = onclick;
    if (className) {
        button.classList.add(className);
    }

    // Use innerHTML ou innerText para definir o conteúdo do botão
    
    return button;
}



export function CreateFormRegisterUser(myPage) {

    form.innerHTML = '';

    form.appendChild(fcnCreateInput('email','E-mail'));

    form.appendChild(fcnCreateInput('name','Nome'));
    
    form.appendChild(fcnCreateInputPassword('password', 'Password'));
    
    form.appendChild(fcnCreateButton('buttonLogin','Criar' ,'',User.createUser ));

    form.appendChild(fcnCreateButton('logar','Logar','button',() => myPage.changePage('logar')));

}

    
       

export function CreateFormLoginUser(myPage){

    form.appendChild(fcnCreateInput('email','E-mail'));

    form.appendChild(fcnCreateInputPassword('password', 'Password'));

    form.appendChild(fcnCreateButton('buttonLogin','Logar' ,'',User.login));
    form.appendChild(fcnCreateButton('cadastrar','Cadastrar','button',() => myPage.changePage('register')));

}
    







