
import { getCookie } from "./save-cockie.js";
import { fcnCreateForm } from "./creating-elements.js";



let UsuarioLogado = '';



function fcnVerificarLogin() {
    var dadosDoCookie = getCookie("dadosUsuario");

    if (!dadosDoCookie ) {
        // Usuário está logado
       
        // Usuário não está logado
        UsuarioLogado = 'nao logado';
        fcnCreateForm(UsuarioLogado);
    }
    else{}
}

fcnVerificarLogin()


// Chamada inicial para criar o formulário com base no estado do usuário






document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor-piscante');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});












