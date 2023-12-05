import {fcnCreateUser} from "./users.js";

let form = document.getElementById('meuFormulario');


export function fcnCreateInput(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
     input.value;
    input.type = input;
    input.placeholder = placeholder;

    return input;
}

export function fcnCreateButton(id, value, onclick) {
    const button = document.createElement('button');
    button.id = id;
    button.type = 'button'; // Defina o tipo do botão aqui, por exemplo, 'button' ou 'submit'
    button.innerHTML = value;
    button.onclick = onclick;
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

export function fcnCreateForm() {

    form.innerHTML = '';

    form.appendChild(fcnCreateInput('email','E-mail'));

    form.appendChild(fcnCreateInput('name','Nome'));
    
    form.appendChild(fcnCreateInput('password', 'Password'));
    
    form.appendChild(fcnCreateButton('buttonLogin','Login' ,fcnCreateUser));
       
}







