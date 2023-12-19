import {dayOfProgrammer} from '../js/dayOfProgrammer.js';

let stringEntrada = ['2017'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {

    const ano = parseInt(lerEntrada().trim(), 10);

    const resultado = dayOfProgrammer(ano);

    console.log(resultado + '\n');
    
}

principal();
