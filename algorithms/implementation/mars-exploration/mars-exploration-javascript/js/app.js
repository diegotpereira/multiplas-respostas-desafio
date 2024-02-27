

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const s = lerEntrada();

    const resultado = marsExploration(s);

    console.log(resultado + '\n');
}

principal();