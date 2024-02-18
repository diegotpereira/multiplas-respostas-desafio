

let stringEntrada = 0;
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeira_multipla_entrada = lerEntrada().split(' ');

    const n = parseInt(primeira_multipla_entrada[0], 10);

    const k = parseInt(primeira_multipla_entrada[0], 10);

    const c = lerEntrada().split(' ').map(tmp => parseInt(tmp, 10));

    let resultado = jumpingOnClouds(c, k);

    console.log(resultado + '\n');

}

principal();