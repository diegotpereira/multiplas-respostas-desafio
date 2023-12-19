import {designerPdfViewer} from '../js/designerPdfViewer.js';

let stringEntrada = ['1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5', 'abc'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const h = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const palavra = lerEntrada();

    const resultado = designerPdfViewer(h, palavra);

    console.log(resultado + '\n');

}

principal();