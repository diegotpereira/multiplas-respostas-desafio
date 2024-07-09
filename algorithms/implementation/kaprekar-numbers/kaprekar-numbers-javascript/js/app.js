import {kaprekarNumbers} from '../js/kaprekarNumbers.js';

let stringEntrada = ['1', '100'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}




function principal() {
    
    const p = parseInt(lerEntrada().trim(), 10);
    const q = parseInt(lerEntrada().trim(), 10);

    const resultado = kaprekarNumbers(p, q);
}

principal();