let num = [5,9,1,6,7]
num.push(2)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O vetor em ordem crescente: ${num}`)

let pos = num.indexOf(0)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}