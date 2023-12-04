function obterUsuarioDaURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var usuarioParametro = urlParams.get('usuario');

    // Verifica se o parâmetro não é nulo
    if (usuarioParametro) {
        try {
            // Decodifica a string
            var usuarioString = decodeURIComponent(usuarioParametro);

            // Analisa a string JSON de volta para um objeto
            var usuario = JSON.parse(usuarioString);

            // Agora você pode usar o objeto 'usuario' conforme necessário
            console.log(usuario);
            alert(JSON.stringify(usuario)); // Convertendo de volta para uma string para o alert
        } catch (error) {
            console.error('Erro ao analisar a string JSON:', error);
            // Lide com o erro de acordo com sua lógica de aplicativo
        }
    } else {
        console.warn('O parâmetro "usuario" está ausente na URL.');
        // Lide com a ausência do parâmetro de acordo com sua lógica de aplicativo
    }
}