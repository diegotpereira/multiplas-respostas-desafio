

import {maximumPerimeterTriangle} from '../js/maximumPerimeterTriangle.js';

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const sticks = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = maximumPerimeterTriangle(sticks);

    console.log(resultado.join(' ') + '\n');
}

principal();