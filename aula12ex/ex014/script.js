function carregar() {

    var msg = window.document.querySelector("div#msg")
    var foto = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        foto.src = 'imagens/fotomanha.png'
        window.document.body.style.background = '#fae978'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        foto.src = 'imagens/fototarde.png'
        window.document.body.style.background = '#ea4711'
    } else {
        //BOA NOITE
        foto.src = 'imagens/fotonoite.png'
        window.document.body.style.background = '#00138f'
    }

}