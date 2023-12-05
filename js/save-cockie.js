export function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + "; path=/";
}

// Função para obter o valor de um cookie e converter de volta para um objeto
export function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return JSON.parse(decodeURIComponent(cookie[1]));
        }
    }
    return null;
}

export function apagarCookie(nome) {
    document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Exemplo de uso


 // Define um cookie chamado "dadosUsuario" com o objeto usuário

var dadosDoCookie = getCookie("dadosUsuario"); // Obtém o valor do cookie "dadosUsuario"
console.log(dadosDoCookie);