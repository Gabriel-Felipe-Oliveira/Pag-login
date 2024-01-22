

// import { CreateFormLoginUser,CreateFormRegisterUser } from "./creating-elements.js";
// import {verificarCookie} from "./cookie.js";

const button = document.getElementById("open-modal");
const modal = document.getElementById("myModal");
const buttonClosed = document.getElementById("closed-modal");
const overlay = document.getElementById("overlay")
button.onclick = function (){
    modal.showModal()
    overlay.style.display = "block";

}

buttonClosed.onclick = function(){
    modal.close()
    overlay.style.display = "none";
}

var selectOptionsDay = document.getElementById('selectOptionsDay');

        // Adiciona opções dinamicamente de 1 a 20
for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    option.id = i; 
    option.value = i;
    option.text = i;
    selectOptionsDay.appendChild(option);
}


var selectOptionsMonth = document.getElementById('selectOptionsMonth');
var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Adiciona opções dinamicamente de 1 a 20
for (var i = 0; i <= meses.length - 1; i++) {
var option = document.createElement('option');
option.id =  meses[i]; 
option.value = meses[i];
option.text = meses[i];
selectOptionsMonth.appendChild(option);
}

var selectOptionsYears = document.getElementById('selectOptionsYears');

        // Obtém o ano atual
var anoAtual = new Date().getFullYear();

// Adiciona opções dinamicamente para os anos de 1950 até o ano atual
for (var ano = 1950; ano <= anoAtual; ano++) {
    var option = document.createElement('option');
    option.value = ano;
    option.text = ano;
    selectOptionsYears.appendChild(option);
}

var radioButtons = document.querySelectorAll('.popup-input-radio');
        radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                // Desmarca todos os outros botões de rádio quando um é clicado
                radioButtons.forEach(function(otherRadioButton) {
                    if (otherRadioButton !== radioButton) {
                        otherRadioButton.checked = false;
                    }
                });
            });
        });




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