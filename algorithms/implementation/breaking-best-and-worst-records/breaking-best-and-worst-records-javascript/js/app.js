import { breakingRecords } from "../js/breakingRecords.js";

let stringEntrada = ['9','1, 2, 3, 4, 5, 6, 7, 8, 9'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const pontuaçoes = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = breakingRecords(pontuaçoes);

    console.log(resultado.join(' ') + '\n');
}

principal();