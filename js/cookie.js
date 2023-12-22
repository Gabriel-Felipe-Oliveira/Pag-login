export function setCookie(name, value, expires, path = '/') {
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}`;
}

export function verificarCookie(nomeDoCookie) {
    // Obtém todos os cookies presentes no documento
    var cookies = document.cookie.split(';');

    // Percorre a lista de cookies
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Verifica se o cookie começa com o nome desejado
        if (cookie.indexOf(nomeDoCookie + '=') === 0) {
            // Retorna o valor do cookie (removendo o nome)
            return true
        }
    }

    // Retorna null se o cookie não for encontrado
    return false;
}

// Exemplo de uso:
window.onload = function() {
    var nomeDoCookie = 'seuCookie'; // Substitua pelo nome do seu cookie
    var valorDoCookie = verificarCookie(nomeDoCookie);

    if (valorDoCookie !== null) {
        console.log('Valor do cookie:', valorDoCookie);
        // Faça algo com o valor do cookie, por exemplo, redirecione o usuário para a página principal.
    } else {
        console.log('Cookie não encontrado.');
        // O cookie não foi encontrado, o usuário pode não estar logado.
    }
};