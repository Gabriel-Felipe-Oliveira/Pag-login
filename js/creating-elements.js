import User from "./users.js";
import Page from "./index.js";

let form = document.getElementById('meuFormulario');


export function fcnCreateInput(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
     input.value;
    input.type = input;
    input.placeholder = placeholder;
    input.innerHTML = '';

    return input;
}


export function fcnCreateInputPassword(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
     input.value;
    input.type = 'password';
    input.placeholder = placeholder;
    input.innerHTML = '';

    return input;
}

export function fcnCreateButton(id, value, className,onclick) {
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

export function fcnCreateLabel(id, value, ponto ) {

    const label = document.createElement('label');
    label.id = id;
    label.innerHTML = value + '' + ponto;
    label.className = 'label';
  
    

    return label;
}

export function fcnCreateLabelSpecial(id, value  ) {

    const label = document.createElement('label');
    label.id = id;
    label.innerHTML = value ;
    label.className = 'labelSpecial';
  
    

    return label;
}


export function fcnCreateTdWithTwoLabels(id1, value1, ponto1, id2, value2, ) {
    // Cria as duas labels
    const label1 = createLabel(id1, value1, ponto1);
    const label2 = createLabelSpecial(id2, value2);

    // Cria o elemento 'td'
    const td = document.createElement('td');

    // Adiciona as labels ao elemento 'td'
    td.appendChild(label1);
    td.appendChild(label2);

    return td;
}

export function fcnCreateForm(page,myPage) {

    form.innerHTML = '';
   

    if(page === "criar" ){

    form.appendChild(fcnCreateInput('email','E-mail'));

    form.appendChild(fcnCreateInput('name','Nome'));
    
    form.appendChild(fcnCreateInputPassword('password', 'Password'));
    
    form.appendChild(fcnCreateButton('buttonLogin','Criar' ,'',User.createUserAndSetCookie ));

    form.appendChild(fcnCreateButton('logar','Logar','button',() => myPage.changePage('logar')));
    

    }

    if(page === "logar"){

    form.appendChild(fcnCreateInput('email','E-mail'));

    form.appendChild(fcnCreateInputPassword('password', 'Password'));

    form.appendChild(fcnCreateButton('buttonLogin','Logar' ,'',User.login));
    form.appendChild(fcnCreateButton('cadastrar','Cadastrar','button',() => myPage.changePage('criar')));

    }
    
       
}







