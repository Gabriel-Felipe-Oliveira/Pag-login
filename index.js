
let form = document.getElementById('meuFormulario');
let UsuarioLogado = 'nao logado';

function createInput(id, placeholder) {

    const input = document.createElement('input');
    input.id = id;
     input.value;
    input.type = input;
    input.placeholder = placeholder;

    return input;
}

function createButton(id, value) {
    const button = document.createElement('button');
    button.id = id;
    button.type = 'button'; // Defina o tipo do botão aqui, por exemplo, 'button' ou 'submit'
    button.innerHTML = value;
    button.onclick = ; // Use innerHTML ou innerText para definir o conteúdo do botão
    
    return button;
}

function createForm(UsuarioLogado) {
   
    

    if (UsuarioLogado === 'nao logado') {
        form.innerHTML = '';
        form.appendChild(createInput('email','E-mail'));

        
        form.appendChild(createInput('senha', 'Password'));
        
        form.appendChild(createButton('buttonLogin','Login'));
       
    } else {
        // Adicione campos adicionais se o usuário estiver logado, se necessário
    }
}

// Chamada inicial para criar o formulário com base no estado do usuário
createForm(UsuarioLogado);




function fcnCriarUsuario() {
    var usuario = {
       
        email: form.email.value,
        senha: form.senha.value,
    };

    

   
}

// Atualiza a posição do cursor-piscante para seguir o cursor do mouse
document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor-piscante');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});





