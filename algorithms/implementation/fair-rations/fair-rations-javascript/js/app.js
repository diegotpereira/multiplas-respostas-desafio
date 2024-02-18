

import {fairRations} from '../js/fairRations.js';

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const N = parseInt(lerEntrada().trim(), 10);

    const B = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = fairRations(B);

    print(resultado + '\n');

}

principal();