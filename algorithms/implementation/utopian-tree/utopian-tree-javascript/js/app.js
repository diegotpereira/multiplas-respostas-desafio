import {utopianTree} from '../js/utopianTree.js';

let stringEntrada = ['2', '0', '1'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < array.length; index++) {
        
        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = utopianTree(n);

        console.log(resultado + '\n');
        
    }
}

principal();