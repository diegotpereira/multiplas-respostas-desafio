let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(primeiraMultiplaEntrada[0], 10);

        const c = parseInt(primeiraMultiplaEntrada[1], 10);

        const m = parseInt(primeiraMultiplaEntrada[2], 10);

        const resultado = chocolateFeast(n, c, m);

        console.log(resultado + '\n');
        
    }
}

principal();