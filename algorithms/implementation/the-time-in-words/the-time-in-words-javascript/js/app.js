

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const h = parseInt(lerEntrada().trim(), 10);

    const m = parseInt(lerEntrada().trim(), 10);

    const resultado = timeInWords(h, m);

    console.log(resultado + '\n');

}

principal();