

let stringEntrada = []
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    const p = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = permutationEquation(p);

    console.log(resultado.join('\n') + '\n');

}

principal();