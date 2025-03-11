function contar() {
    var i = window.document.querySelector('input#txti')
    var f = window.document.querySelector('input#txtf')
    var p = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam Dados')
    } else {
        res.innerHTML = 'Contando: <br/>'
        var ini = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1...')
            passo = 1
        }

        if (ini < fim) {
            //Contagem Progressiva
            for (var c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (ini > fim) {
            //Contagem Regressiva
            for (var c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}