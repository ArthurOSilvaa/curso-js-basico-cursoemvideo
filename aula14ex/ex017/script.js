function gerar() {
    var n = window.document.querySelector('input#numero')
    var tabuada = window.document.getElementById('seltab')
    
    var num = Number(n.value)

    if (n.value.length == 0) {
        window.alert('Por favor, insira um número!')
    } else {
        tabuada.innerHTML = ""
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
    }
    }
}