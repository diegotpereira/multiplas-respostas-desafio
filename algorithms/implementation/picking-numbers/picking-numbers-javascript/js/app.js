import { pickingNumbers } from "../js/pickingNumbers.js";

let entradaString = ['6', '1, 2, 2, 3, 1, 2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return entradaString[entradaAtual++];

}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = pickingNumbers(arr)

    console.log(resultado + '\n');

}

principal();