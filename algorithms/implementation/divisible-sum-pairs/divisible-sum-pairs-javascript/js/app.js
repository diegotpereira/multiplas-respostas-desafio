import { divisibleSumPairs } from "../js/divisibleSumPairs.js";

let stringEntrada = ['6, 3', '1, 3, 2, 6, 1, 2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const n = parseInt(primeira_multipla_entrada[0], 10);

    const k = parseInt(primeira_multipla_entrada[1], 10);

    const ar = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = divisibleSumPairs(n, k, ar);

    console.log(resultado + '\n');
    
}

principal();