import {angryProfessor} from '../js/angryProfessor.js';

let stringEntrada = ['2','4,3', '-1, -3, 4, 2', '4, 2', '0, -1, 2, 1'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index++) {
        
        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(primeiraMultiplaEntrada[0], 10);

        const k = parseInt(primeiraMultiplaEntrada[1], 10);

        const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

        const resultado = angryProfessor(k, a);

        console.log(resultado + '\n');
        
    }
}

principal();