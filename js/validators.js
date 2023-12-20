function validateEmail(email) {
    const emailRegex = /@.*\.com/;
    if (!emailRegex.test(email)) {
        throw new Error("Email inválido");
    }
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error("Senha inválida. A senha deve conter pelo menos uma letra minúscula, e um tamanha maio que 8.");
    }
}

export function validateForm() {
    try {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        validateEmail(email);

       
        validatePassword(password);

       
        
        return true ;

    } catch (error) {
        
        alert(error.message);
        
        return false;
    }
}