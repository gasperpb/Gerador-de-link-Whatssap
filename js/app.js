function clicar() {
    let num = document.getElementById('numero').value;
    let gera = document.getElementById('mensagem')
    gera.innerText = 'https://api.whatsapp.com/send?phone=55' + num
}