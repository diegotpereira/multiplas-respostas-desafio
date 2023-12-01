import { getMoneySpent } from "../js/getMoneySpent.js";

let stringEntrada = ['10', '3, 1', '5, 2, 8'];
let entradaAtual = 0;

function lerEntradas() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    

    // const bnm = lerEntradas().split(' ');
    const primeira_multipla_entrada = lerEntradas().replace(/\s+$/g, '').split(' ');

    const b = parseInt(primeira_multipla_entrada[0], 10);

    const n = parseInt(primeira_multipla_entrada[1], 10);

    const m = parseInt(primeira_multipla_entrada[2], 10);

    const teclados = lerEntradas().split(' ').map(tmpTeclado => parseInt(tmpTeclado, 10));

    const dispositivos = lerEntradas().split(' ').map(tmpDispositivos => parseInt(tmpDispositivos, 10));

    let resultado = getMoneySpent(teclados, dispositivos, b);

    console.log(resultado + '\n');
}

principal();