

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const s = lerEntrada();

    const t = lerEntrada();

    const k = parseInt(lerEntrada().trim(), 10);

    const resultado = appendAndDelete(s, t, k);

    console.log(resultado + '\n');

}

principal();