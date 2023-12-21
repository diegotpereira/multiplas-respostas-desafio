

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    
    const d1 = parseInt(primeiraMultiplaEntrada[0], 10);
    const m1 = parseInt(primeiraMultiplaEntrada[1], 10);
    const a1 = parseInt(primeiraMultiplaEntrada[2], 10);

    const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    
    const d2 = parseInt(segundaMultiplaEntrada[0], 10);
    const m2 = parseInt(segundaMultiplaEntrada[1], 10);
    const a2 = parseInt(segundaMultiplaEntrada[2], 10);

    const resultado = libraryFine(d1, m1, a1, d2, m2, a2);

    console.log(resultado + '\n');
}

principal();