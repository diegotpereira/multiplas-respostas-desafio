import {kangaroo} from '../js/kangaroo.js';

let stringEntrada = ['0, 3, 4, 2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}


function principal() {
    
    const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(primeira_multipla_entrada[0], 10);
    const v1 = parseInt(primeira_multipla_entrada[1], 10);

    const x2 = parseInt(primeira_multipla_entrada[2], 10);
    const v2 = parseInt(primeira_multipla_entrada[3], 10);

    const resultado = kangaroo(x1, v1, x2, v2);

    console.log(resultado + '\n');

}

principal();
