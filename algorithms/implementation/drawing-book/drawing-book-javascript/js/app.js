import { pageCount } from "../js/pageCount.js";

let stringEntrada = ['6', '2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);
    const p = parseInt(lerEntrada().trim(), 10);

    const resultado = pageCount(n, p);

    console.log(resultado + '\n');
}

principal();