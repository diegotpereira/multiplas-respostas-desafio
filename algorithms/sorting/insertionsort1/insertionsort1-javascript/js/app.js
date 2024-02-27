import {insertionSort1} from '../js/insertionSort1.js';

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = insertionSort1(n, arr);

    console.log(resultado);

}
principal();