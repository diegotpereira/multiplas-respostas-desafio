

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const V = parseInt(lerEntrada().trim(), 10);

    const n = parseInt(lerEntrada().trim(), 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = introTutorial(V, arr);

    console.log(resultado + '\n');

}

principal();