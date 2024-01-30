import {serviceLane} from '../js/serviceLane.js';

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const n = parseInt(primeiraMultiplaEntrada[0], 10);

    const t = parseInt(primeiraMultiplaEntrada[1], 10);

    const largura = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    let casos = Array(t);

    for (let index = 0; index < t; index++) {
        
        casos[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
        
    }

    const resultado = serviceLane(n, casos, largura);

    console.log(resultado.join('\n') + '\n');

}

principal();