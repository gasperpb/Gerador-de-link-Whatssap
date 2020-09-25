function clicar() {
    let num = document.getElementById('numero').value
    let gera = document.getElementById('mensagem')
    gera.innerHTML = 'https://api.whatsapp.com/send?phone=55' + num





}

function copiarTexto() {
    //captura o elemento input
    const inputTest = document.getElementById('mensagem')
        //seleciona todo o texto do elemento
    inputTest.innerText()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy')
}