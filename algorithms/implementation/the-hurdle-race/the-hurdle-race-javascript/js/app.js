import { hurdleRace } from "../js/hurdleRace.js";

let stringEntrada = ['5, 4','1, 6, 3, 5, 2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g,  '').split(' ');

    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);

    const altura = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = hurdleRace(k, altura);

    console.log(resultado + '\n');
}

principal();