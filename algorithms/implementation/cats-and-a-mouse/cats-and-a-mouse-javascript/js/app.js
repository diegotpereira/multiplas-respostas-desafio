import {catAndMouse} from '../js/catAndMouse.js';

let stringEntrada = ['2','1, 2, 3', '1, 3, 2'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const q = parseInt(lerEntrada(), 10);

    for (let index = 0; index < q; index++) {
        
        const xyz = lerEntrada().split(' ');

        const x = parseInt(xyz[0], 10);
        const y = parseInt(xyz[1], 10);
        const z = parseInt(xyz[2], 10);

        let resultado = catAndMouse(x, y, z);

        console.log(resultado + '\n');
        
    }
}

principal();