var sliderElement = document.querySelector('#slider')
var buttonElement = document.querySelector('#button')
var sizePassword = document.querySelector('#valor')
var password = document.querySelector('#password')
var containerPassword = document.querySelector('#container_password')
var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@/'
var novaSenha = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    var pass = ''
    for(var i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    novaSenha = pass
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
}

function copyPassowrd(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}


