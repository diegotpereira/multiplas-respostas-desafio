let stringEntrada = [''];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    let n = parseInt(lerEntrada().trim(), 10);

    const resultado = viralAdvertising(n);

    console.log(resultado + '\n');
}

principal();