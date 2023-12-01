import { countingValleys } from "../js/countingValleys.js";

let stringEntrada = ['8', 'UDDDUDUU'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const passos = parseInt(lerEntrada().trim(), 10);
    const caminho = lerEntrada();

    const resultado = countingValleys(passos, caminho);

    console.log(resultado + '\n');
}

principal();