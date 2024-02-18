

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const p = parseInt(primeiraMultiplaEntrada[0], 10);

    const d = parseInt(primeiraMultiplaEntrada[1], 10);

    const m = parseInt(primeiraMultiplaEntrada[2], 10);

    const s = parseInt(primeiraMultiplaEntrada[3], 10);

    const resultado = howManyGames(p, d, m, s);

    console.log(resultado + '\n');

}

principal();