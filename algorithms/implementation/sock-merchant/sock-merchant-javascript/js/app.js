import {sockMerchant} from '../js/sockMerchant.js';

let stringEntrada = ['9', '10, 20, 20, 10, 10, 30, 50, 10, 20'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const ar = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = sockMerchant(n, ar);

    console.log(resultado + '\n');
}

principal();