var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamentes ${hora}hrs.`)
if (hora < 12) {
    console.log(`Bom dia`)
} else if (hora < 18) {
    console. log(`Boa tarde`)
} else if (hora < 4) {
    console.log(`Boa madruga`)
} else {
    console.log(`Boa noite`)
}