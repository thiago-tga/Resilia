var palavra = "indecifravel";
var deslocamento = 1;

function cifrarCDC(deslocamento, palavra) {
    let cifra = [];
    let criptograp = [];
    let codigo = 65; //numero da letra A
    let tamAlf = 26; //tamanho alfabeto
    for (let i = 0; i < palavra.length; i++) {
        cifra.push(((palavra.charCodeAt(i) - codigo + deslocamento) % tamAlf) + codigo)

    }

    for (var i = 0; i < palavra.length; i++) {
        criptograp.push(String.fromCharCode(cifra[i]))
    }

    return criptograp.join("")
}

function decifrarCDC(deslocamento, palavra) {
    let decifra = [];
    let descriptograp = [];
    let codigo = 65;
    let tamAlf = 26;
    for (let i = 0; i < palavra.length; i++) {
        decifra.push(((palavra.charCodeAt(i) + codigo - deslocamento) % tamAlf) + codigo)
    }

    for (let i = 0; i < palavra.length; i++) {
        descriptograp.push(String.fromCharCode(decifra[i]))
    }

    return descriptograp.join("")
}

var cifra = cifrarCDC(1, palavra)
var descifra = decifrarCDC(1, cifra)

console.log(cifra)
console.log(descifra)