import {migratoryBirds} from '../js/migratoryBirds.js';

let stringEntrada = ['1, 4, 4, 4, 5, 3'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const arrContador = parseInt(lerEntrada().trim(), 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = migratoryBirds(arr)

    console.log(resultado + '\n');
}

principal();