import { birthday } from "../js/birthday.js";

let stringEntrada = ['1, 1, 1, 1, 1, 1', '3', '2']
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const s = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const d = parseInt(primeira_multipla_entrada[0]);
    const m = parseInt(primeira_multipla_entrada[1]);

    const resultado = birthday(s, d, m);

    console.log(resultado + '\n');
}

principal();