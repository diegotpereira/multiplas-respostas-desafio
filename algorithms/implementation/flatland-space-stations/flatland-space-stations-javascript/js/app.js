

import {flatlandSpaceStations} from '../js/flatlandSpaceStations.js';

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const nm = lerEntrada().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = lerEntrada().split(' ').map(tmp => parseInt(tmp, 10));

    let resultado = flatlandSpaceStations(n, c);

    print(resultado + "\n");

}

principal();