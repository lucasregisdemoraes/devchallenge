function validarCampos() {
    validaCampoEmail()
    validaCampoSenha()
}

function validaCampoEmail() {
    document.getElementById('mail').oninvalid = function (evt) {
        evt.preventDefault(); // cancela o comportamento padrão

        if (!this.validity.valid) { //faz a validação novamente
            document.getElementById('emailError').style.display = 'block'
            document.getElementById('mail').style.border = '2px var(--errorColor) solid'
        }
    }
}

function validaCampoSenha() {
    document.getElementById('password').oninvalid = function (evt) {
        evt.preventDefault(); // cancela o comportamento padrão

        if (!this.validity.valid) { //faz a validação novamente
            document.getElementById('passwordError').style.display = 'block'
            document.getElementById('password').style.border = '2px var(--errorColor) solid'
        }
    }
}