import { weightedUniformStrings } from "../js/weightedUniformStrings.js";

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const s = lerEntrada();

    const contarConsultas = parseInt(lerEntrada().trim(), 10);

    let consultas = [];

    for (let index = 0; index < contarConsultas; index++) {
        
        const consultarItem = parseInt(lerEntrada().trim(), 10);

        consultas.push(consultarItem);
        
    }

    const resultado = weightedUniformStrings(s, consultas);

    console.log(resultado.join('\n') + '\n');

}

principal();


