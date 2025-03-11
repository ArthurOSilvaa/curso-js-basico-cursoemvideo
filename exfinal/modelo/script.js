let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
var res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if  (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já incluso na lista')
    }
    num.value = ``
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Temos no total ${tot} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor número cadastrado foi o ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}