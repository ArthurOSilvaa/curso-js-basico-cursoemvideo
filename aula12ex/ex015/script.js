

function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = window.document.getElementById("anoNasc")
    var res = window.document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsexo = window.document.getElementsByName('sexo')
        var idade = anoatual - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.png')
                //Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'imagens/adolescente-menino.png')
                //Adolescente
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'imagens/adulto.png')
                //Adulto
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
                //idoso
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.png')
                //Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', 'imagens/adolescente-menina.png')
                //Adolescente
            } else if (idade > 18 && idade < 60) {
                img.setAttribute('src', 'imagens/adulta.png')
                //Adulta
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
                //Idosa
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br/>`

        res.appendChild(img)
    }
}