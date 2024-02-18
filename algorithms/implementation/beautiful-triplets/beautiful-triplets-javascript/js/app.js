

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const n = parseInt(primeiraMultiplaEntrada[0], 10);

    const d = parseInt(primeiraMultiplaEntrada[1], 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = beautifulTriplets(d, arr);

    console.log(resultado + '\n');
}

principal();