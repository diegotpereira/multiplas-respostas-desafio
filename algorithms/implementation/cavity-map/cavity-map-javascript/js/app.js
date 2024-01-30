import {cavityMap} from '../js/cavityMap.js';

let stringEntrada = []
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    let grade = [];

    for (let index = 0; index < n; index++) {

        const elemento = lerEntrada();

        grade.push(elemento);
        
    }

    const resultado = cavityMap(grade);

    console.log(resultado.join( '\n' ) + '\n' );
}

principal();


