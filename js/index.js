import {createInput , createButton ,createTdWithTwoLabels} from "./creating-elements.js";

let form = document.getElementById('meuFormulario');
let footer = document.getElementById('meuFooter');
let UsuarioLogado = 'logado';

function createForm(UsuarioLogado) {
   
    

    if (UsuarioLogado === 'nao logado') {
        form.innerHTML = '';
        form.appendChild(createInput('email','E-mail'));

        
        form.appendChild(createInput('senha', 'Password'));
        
        form.appendChild(createButton('buttonLogin','Login'));
       
    } 

    if(UsuarioLogado === 'logado'){
        footer.innerHTML = '';

        footer.appendChild(createTdWithTwoLabels('nome', 'Nome', ':',' meunome' , 'gabriel') );
        footer.appendChild(createTdWithTwoLabels('senha', 'Senha', ':',' meusenha' , 'Pkxrt1500') );
        
    }
}

// Chamada inicial para criar o formulário com base no estado do usuário
createForm(UsuarioLogado);





document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor-piscante');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});







