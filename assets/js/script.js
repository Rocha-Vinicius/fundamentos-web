/*
Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querrySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){

    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        txtNome.style.backgroundColor = "rgba(190, 190, 190, 0.739)"
    } else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        txtNome.style.backgroundColor = "rgba(190, 190, 190, 0.739)"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        txtEmail.style.backgroundColor = "rgba(190, 190, 190, 0.739)"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        txtEmail.style.backgroundColor = "rgba(190, 190, 190, 0.739)"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        txtAssunto.style.backgroundColor = "rgba(190, 190, 190, 0.739)"
    }else{
        
        txtAssunto.style.display = "none"
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOK == true){
    alert ("Formulário enviado com sucesso!")
} else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}