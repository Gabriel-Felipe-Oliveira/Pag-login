

// import { CreateFormLoginUser,CreateFormRegisterUser } from "./creating-elements.js";
// import {verificarCookie} from "./cookie.js";

const button = document.getElementById("open-modal");
const modal = document.getElementById("myModal");
const buttonClosed = document.getElementById("closed-modal");
button.onclick = function (){
    modal.showModal()
}
buttonClosed.onclick = function(){
    modal.close()
}

// class Page {
//     constructor(page){

//         this.page = page
//     }

//     changePage(newPage) {
//         this.page = newPage;
//         console.log(`Mudando de ${this.page}`);
//         // Recarrega a página passando o valor para o construtor
//         window.location.href = `?page=${newPage}`;
//     }
//     returnePage(){
//         let page = this.page
//         return page
//     }
    

    
// }

// const urlParams = new URLSearchParams(window.location.search);
// const initialPage = urlParams.get('page') ?? 'logar';

// // Cria a instância de Page com o valor da URL ou 'inicial' como padrão
// const myPage = new Page(initialPage);

// console.log(initialPage);
// console.log(myPage.page);

// Exemplo de uso







// function CreatePage(){

//     let statePage = myPage.returnePage()

//     if(statePage == "logar"){

//         CreateFormLoginUser(myPage)

//     }
//     if(statePage == "register"){

//         CreateFormRegisterUser(myPage)

//     }

// }

// CreatePage()










// document.addEventListener('mousemove', function (e) {
//     var cursor = document.querySelector('.cursor-piscante');
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });

// export default Page;