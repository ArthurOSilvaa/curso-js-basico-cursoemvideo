function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar(17)
console.log(`O resultado é ${res}`)