import {gameOfThrones} from '../js/gameOfThrones.js';

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const s =  lerEntrada();
    const resultado = gameOfThrones(s);

    console.log(resultado + '\n');

}

principal();