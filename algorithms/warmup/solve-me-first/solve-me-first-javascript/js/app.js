let entrada = ['10', '51']
let entradaAtual = 0

function lerEntrada() {

    return entrada[entradaAtual++];
}

function principal() {

    var a = parseInt(lerEntrada());
    var b = parseInt(lerEntrada());

    var resultado = solveMeFirst(a, b);

    console.log(resultado);
}

export function solveMeFirst(a, b) {

    return a + b
}

principal();