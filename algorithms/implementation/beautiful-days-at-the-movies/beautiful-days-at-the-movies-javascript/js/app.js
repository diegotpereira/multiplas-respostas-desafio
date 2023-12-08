

let stringEntrada = []
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

export function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const i = parseInt(primeiraMultiplaEntrada[0], 10);

    const j = parseInt(primeiraMultiplaEntrada[1], 10);

    const k = parseInt(primeiraMultiplaEntrada[2], 10);

    const resultado = beautifulDays(i, j, k);

    console.log(resultado + '\n');
}

principal();