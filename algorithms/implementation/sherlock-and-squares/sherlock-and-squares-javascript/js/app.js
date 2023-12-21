

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const q = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < q; index++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split( ' ');

        const a = parseInt(primeiraMultiplaEntrada[0], 10);

        const b = parseInt(primeiraMultiplaEntrada[1], 10);

        const resultado = squares(a, b);

        console.log(resultado + '\n');
        
    }
}

principal();