

import { fcnCreateForm } from "./creating-elements.js";
import {verificarCookie} from "./cookie.js";


class Page {
    constructor(page){

        this.page = page
    }

    changePage(newPage) {
        this.page = newPage;
        console.log(`Mudando de ${this.page}`);
        // Recarrega a página passando o valor para o construtor
        window.location.href = `?page=${newPage}`;
    }
    

    
}

const urlParams = new URLSearchParams(window.location.search);
const initialPage = urlParams.get('page') ?? 'logar';

// Cria a instância de Page com o valor da URL ou 'inicial' como padrão
const myPage = new Page(initialPage);

console.log(initialPage);

// Exemplo de uso




function fcnVerificarLogin() {
    

//    if(verificarCookie('userEmail')){

//         window.location.href = 'Layout.html';
//     } 
    
    fcnCreateForm(myPage.page,myPage);
    
}

fcnVerificarLogin()


// Chamada inicial para criar o formulário com base no estado do usuário






document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor-piscante');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

export default Page;