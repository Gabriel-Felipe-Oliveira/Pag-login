

export function createInput(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
     input.value;
    input.type = input;
    input.placeholder = placeholder;

    return input;
}

export function createButton(id, value) {
    const button = document.createElement('button');
    button.id = id;
    button.type = 'button'; // Defina o tipo do botão aqui, por exemplo, 'button' ou 'submit'
    button.innerHTML = value;
    // Use innerHTML ou innerText para definir o conteúdo do botão
    
    return button;
}

export function createLabel(id, value, ponto ) {

    const label = document.createElement('label');
    label.id = id;
    label.innerHTML = value + '' + ponto;
    label.className = 'label';
  
    

    return label;
}

export function createLabelSpecial(id, value  ) {

    const label = document.createElement('label');
    label.id = id;
    label.innerHTML = value ;
    label.className = 'labelSpecial';
  
    

    return label;
}


export function createTdWithTwoLabels(id1, value1, ponto1, id2, value2, ) {
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







