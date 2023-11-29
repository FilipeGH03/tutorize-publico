let botaoNewsletter = document.querySelector("#botao-modal-newsletter")
let botaoEnviarDados = document.querySelector("#enviar-dados")
let botaoFechar = document.querySelector("#icon-newsletter")

function abrir(){
    let modal = document.querySelector(".modal-newsletter")
    modal.style.display = "flex"
}

function enviarDados(){
    let modal = document.querySelector(".modal-newsletter")
    modal.style.display = "none"

    fetch('/cadastrar', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: document.querySelector('.modal-newsletter .email-newsletter').value,
            nome: document.querySelector('.modal-newsletter .nome-newsletter').value
        })})
        .then(resposta => resposta.json())
        .then(dados => {window.location.reload(); if (!dados.status) {alert(dados.mensagem);}})
        .catch(erro => alert('Houve um erro ao tentar cadastrar o usuário. Tente novamente.'));
}

function fechar(){
    let modal = document.querySelector(".modal-newsletter")
    modal.style.display = "none"
}

Button.onclick = abrir
Button.onclick = enviarDados
Button.onclick = fecharModal